const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const prisma = require('../config/prisma');
const env = require('../config/env');
const AppError = require('../utils/appError');
const { sendVerificationEmail, sendPasswordResetEmail } = require('../utils/mailer');

const OTP_EXPIRY_MS = 10 * 60 * 1000;
const MAX_OTP_ATTEMPTS = 5;
const RESET_EXPIRY_MS = 30 * 60 * 1000;

const registerSchema = z.object({
  nama: z.string().trim().min(3, 'Nama lengkap minimal 3 karakter.').max(100).optional(),
  email: z.string().trim().toLowerCase().email('Format email tidak valid.'),
  password: z.string().min(6, 'Kata sandi minimal 6 karakter.').max(72)
});

const registerAdminSchema = registerSchema.extend({
  inviteCode: z.string().trim().min(1, 'Kode undangan pengelola wajib diisi.')
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email('Format email tidak valid.'),
  password: z.string().min(1, 'Kata sandi wajib diisi.')
});

const verifyOtpSchema = z.object({
  email: z.string().trim().toLowerCase().email('Format email tidak valid.'),
  otp: z.string().trim().regex(/^\d{6}$/, 'Kode OTP harus berupa 6 digit angka.')
});

const forgotPasswordSchema = z.object({
  email: z.string().trim().toLowerCase().email('Format email tidak valid.')
});

const resetPasswordSchema = z.object({
  token: z.string().trim().min(10, 'Token atur ulang kata sandi tidak valid.'),
  password: z.string().min(6, 'Kata sandi baru minimal 6 karakter.').max(72)
});

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === 'production',
  sameSite: process.env.COOKIE_SAMESITE || (env.NODE_ENV === 'production' ? 'none' : 'lax'),
  path: '/'
};

const hashToken = (value) => crypto.createHash('sha256').update(String(value)).digest('hex');

const hashOtp = (email, otp) =>
  crypto.createHmac('sha256', env.JWT_ACCESS_SECRET).update(`${email}:${otp}`).digest('hex');

const safeEqualHex = (a, b) => {
  if (!a || !b || a.length !== b.length) return false;
  return crypto.timingSafeEqual(Buffer.from(a, 'utf8'), Buffer.from(b, 'utf8'));
};

const generateOtpAndToken = (email) => {
  const otp = String(crypto.randomInt(100000, 1000000));
  const otpHash = hashOtp(email, otp);
  const emailToken = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MS);
  return { otp, otpHash, emailToken, expiresAt };
};

const validateAdminInviteCode = (inviteCode) => {
  const configuredCode = String(process.env.ADMIN_INVITE_CODE || '').trim();
  if (!configuredCode) {
    throw new AppError(
      'Pendaftaran akun pengelola saat ini ditutup. Hubungi administrator madrasah.',
      403
    );
  }
  if (!safeEqualHex(hashToken(String(inviteCode || '').trim()), hashToken(configuredCode))) {
    throw new AppError('Kode undangan pengelola tidak valid.', 403);
  }
};

const buildDisplayName = (user) =>
  user.pendaftaran?.biodata?.namaLengkap ||
  user.nama ||
  user.email.split('@')[0];

const issueTokens = (res, user) => {
  const accessToken = jwt.sign({ id: user.id, role: user.role }, env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user.id }, env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

  res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });
  res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 });
};

const createOrRefreshUser = async ({ nama, email, password, role }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser && existingUser.isVerified) {
    throw new AppError('Email sudah terdaftar. Silakan masuk atau gunakan fitur lupa kata sandi.', 400);
  }

  if (existingUser && existingUser.role !== role) {
    throw new AppError('Email sudah digunakan pada portal lain.', 400);
  }

  const { otp, otpHash, emailToken, expiresAt } = generateOtpAndToken(email);
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = existingUser
    ? await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          nama: nama || null,
          password: hashedPassword,
          emailToken,
          emailOtp: otpHash,
          emailOtpExpires: expiresAt,
          emailOtpAttempts: 0
        },
        select: { id: true, nama: true, email: true, role: true, foto: true, isVerified: true, createdAt: true }
      })
    : await prisma.user.create({
        data: {
          nama: nama || null,
          email,
          password: hashedPassword,
          role,
          isVerified: false,
          emailToken,
          emailOtp: otpHash,
          emailOtpExpires: expiresAt,
          emailOtpAttempts: 0
        },
        select: { id: true, nama: true, email: true, role: true, foto: true, isVerified: true, createdAt: true }
      });

  // Kirim kode OTP 6 digit & tautan cadangan ke email pendaftar
  try {
    await sendVerificationEmail({ email, otp, token: emailToken, nama: nama || email.split('@')[0] });
  } catch (mailError) {
    console.error('Gagal mengirim email verifikasi:', mailError);
  }

  return user;
};

exports.register = async (req, res, next) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const { nama, email, password } = parsed.data;
    const user = await createOrRefreshUser({ nama, email, password, role: 'CALON_PENDAFTAR' });

    res.status(201).json({
      success: true,
      requiresConfirmation: true,
      email,
      expiresInSeconds: OTP_EXPIRY_MS / 1000,
      message: 'Kode verifikasi 6 digit telah dikirim ke email Anda.',
      user: { ...user, nama: buildDisplayName(user) }
    });
  } catch (error) {
    next(error);
  }
};

// Mendaftarkan akun pengelola (admin) madrasah dengan kode undangan
exports.registerAdmin = async (req, res, next) => {
  try {
    const parsed = registerAdminSchema.safeParse(req.body);
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const { nama, email, password, inviteCode } = parsed.data;
    validateAdminInviteCode(inviteCode);

    const user = await createOrRefreshUser({ nama, email, password, role: 'ADMIN' });

    res.status(201).json({
      success: true,
      requiresConfirmation: true,
      email,
      expiresInSeconds: OTP_EXPIRY_MS / 1000,
      message: 'Kode verifikasi 6 digit telah dikirim ke email pengelola Anda.',
      user: { ...user, nama: buildDisplayName(user) }
    });
  } catch (error) {
    next(error);
  }
};

// Mengirim ulang kode OTP & tautan verifikasi pendaftaran
exports.resendConfirmation = async (req, res, next) => {
  try {
    const email = String(req.body?.email || '').trim().toLowerCase();
    if (!email) throw new AppError('Alamat email wajib diisi.', 400);

    const user = await prisma.user.findUnique({
      where: { email },
      include: { pendaftaran: { include: { biodata: true } } }
    });

    if (!user) {
      return res.status(200).json({
        success: true,
        expiresInSeconds: OTP_EXPIRY_MS / 1000,
        message: 'Jika alamat email terdaftar, kode verifikasi baru telah dikirim.'
      });
    }

    if (user.isVerified) {
      return res.status(200).json({
        success: true,
        alreadyVerified: true,
        message: 'Akun ini sudah terverifikasi sebelumnya. Silakan langsung masuk.'
      });
    }

    const { otp, otpHash, emailToken, expiresAt } = generateOtpAndToken(email);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailToken,
        emailOtp: otpHash,
        emailOtpExpires: expiresAt,
        emailOtpAttempts: 0
      }
    });

    const nama = buildDisplayName(user);
    try {
      await sendVerificationEmail({ email: user.email, otp, token: emailToken, nama });
    } catch (mailError) {
      console.error('Gagal mengirim ulang email konfirmasi:', mailError);
    }

    res.status(200).json({
      success: true,
      expiresInSeconds: OTP_EXPIRY_MS / 1000,
      message: 'Kode OTP 6 digit baru berhasil dikirim ke alamat email Anda.'
    });
  } catch (error) {
    next(error);
  }
};

// Memverifikasi kode OTP 6 digit yang dimasukkan pendaftar
exports.verifyOtp = async (req, res, next) => {
  try {
    const parsed = verifyOtpSchema.safeParse(req.body || {});
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const { email, otp } = parsed.data;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new AppError('Kode verifikasi tidak valid atau akun tidak ditemukan.', 400);
    }

    if (user.isVerified) {
      return res.status(200).json({
        success: true,
        alreadyVerified: true,
        role: user.role,
        message: 'Email sudah terverifikasi sebelumnya. Silakan langsung masuk.'
      });
    }

    if (!user.emailOtp || !user.emailOtpExpires) {
      throw new AppError('Kode verifikasi belum dibuat. Silakan minta kirim ulang kode.', 400);
    }

    if (user.emailOtpAttempts >= MAX_OTP_ATTEMPTS) {
      throw new AppError(
        'Terlalu banyak percobaan kode yang salah. Silakan klik "Kirim ulang kode OTP".',
        429
      );
    }

    if (user.emailOtpExpires < new Date()) {
      throw new AppError('Kode OTP telah kedaluwarsa. Silakan kirim ulang kode OTP baru.', 400);
    }

    const isMatch = safeEqualHex(hashOtp(email, otp), user.emailOtp);
    if (!isMatch) {
      const nextAttempts = user.emailOtpAttempts + 1;
      await prisma.user.update({
        where: { id: user.id },
        data: { emailOtpAttempts: nextAttempts }
      });
      const remaining = MAX_OTP_ATTEMPTS - nextAttempts;
      throw new AppError(
        remaining > 0
          ? `Kode OTP tidak sesuai. Sisa percobaan: ${remaining} kali.`
          : 'Batas percobaan tercapai. Silakan kirim ulang kode OTP baru.',
        400
      );
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        emailToken: null,
        emailOtp: null,
        emailOtpExpires: null,
        emailOtpAttempts: 0
      }
    });

    res.status(200).json({
      success: true,
      role: user.role,
      message: 'Alamat email berhasil diverifikasi! Akun Anda kini telah aktif.'
    });
  } catch (error) {
    next(error);
  }
};

// Memverifikasi token tautan email cadangan pendaftar
exports.verifyEmail = async (req, res, next) => {
  try {
    const token = String(req.query.token || req.body?.token || '').trim();
    if (!token) throw new AppError('Token konfirmasi tidak valid atau tidak ditemukan.', 400);

    const user = await prisma.user.findFirst({
      where: { emailToken: token }
    });

    if (!user) {
      throw new AppError('Tautan konfirmasi tidak valid atau sudah digunakan.', 400);
    }

    if (user.emailOtpExpires && user.emailOtpExpires < new Date()) {
      throw new AppError('Tautan konfirmasi telah kedaluwarsa. Silakan kirim ulang kode verifikasi.', 400);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        emailToken: null,
        emailOtp: null,
        emailOtpExpires: null,
        emailOtpAttempts: 0
      }
    });

    res.status(200).json({
      success: true,
      role: user.role,
      message: 'Alamat email berhasil dikonfirmasi! Akun Anda kini telah aktif.'
    });
  } catch (error) {
    next(error);
  }
};

// Mengirimkan tautan atur ulang kata sandi ke email terdaftar
exports.forgotPassword = async (req, res, next) => {
  try {
    const parsed = forgotPasswordSchema.safeParse(req.body || {});
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const { email } = parsed.data;
    const user = await prisma.user.findUnique({
      where: { email },
      include: { pendaftaran: { include: { biodata: { select: { namaLengkap: true } } } } }
    });

    if (user) {
      const rawToken = crypto.randomBytes(32).toString('hex');
      await prisma.user.update({
        where: { id: user.id },
        data: {
          resetToken: hashToken(rawToken),
          resetTokenExpires: new Date(Date.now() + RESET_EXPIRY_MS)
        }
      });

      try {
        await sendPasswordResetEmail({
          email: user.email,
          token: rawToken,
          nama: buildDisplayName(user)
        });
      } catch (mailError) {
        console.error('Gagal mengirim email reset kata sandi:', mailError);
      }
    }

    res.status(200).json({
      success: true,
      message: 'Jika alamat email terdaftar, tautan atur ulang kata sandi telah dikirim.'
    });
  } catch (error) {
    next(error);
  }
};

// Menyimpan kata sandi baru menggunakan token reset
exports.resetPassword = async (req, res, next) => {
  try {
    const parsed = resetPasswordSchema.safeParse(req.body || {});
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const { token, password } = parsed.data;
    const user = await prisma.user.findFirst({
      where: {
        resetToken: hashToken(token),
        resetTokenExpires: { gt: new Date() }
      }
    });

    if (!user) {
      throw new AppError('Tautan atur ulang kata sandi tidak valid atau telah kedaluwarsa.', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpires: null,
        isVerified: true,
        emailToken: null,
        emailOtp: null,
        emailOtpExpires: null,
        emailOtpAttempts: 0
      }
    });

    res.status(200).json({
      success: true,
      role: user.role,
      message: 'Kata sandi berhasil diperbarui. Silakan masuk menggunakan kata sandi baru.'
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const user = await prisma.user.findUnique({
      where: { email: parsed.data.email },
      include: {
        pendaftaran: { include: { biodata: { select: { namaLengkap: true } } } }
      }
    });

    if (!user || !(await bcrypt.compare(parsed.data.password, user.password))) {
      throw new AppError('Email atau kata sandi tidak valid.', 401);
    }

    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        code: 'EMAIL_NOT_VERIFIED',
        email: user.email,
        message: 'Akun Anda belum diverifikasi. Masukkan kode OTP dari email Anda sebelum masuk.'
      });
    }

    issueTokens(res, user);

    res.status(200).json({
      success: true,
      message: 'Login berhasil.',
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        foto: user.foto,
        nama: buildDisplayName(user)
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.refresh = async (req, res, next) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) throw new AppError('Sesi refresh tidak ditemukan.', 401);

    const payload = jwt.verify(token, env.JWT_REFRESH_SECRET);
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) throw new AppError('Pengguna tidak ditemukan.', 401);

    issueTokens(res, user);
    res.status(200).json({ success: true, message: 'Sesi berhasil diperbarui.' });
  } catch (error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      return next(new AppError('Sesi Anda telah berakhir. Silakan login kembali.', 401));
    }
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        nama: true,
        email: true,
        role: true,
        foto: true,
        createdAt: true,
        pendaftaran: { include: { biodata: true, orangTua: true, dokumen: true } }
      }
    });

    if (!user) throw new AppError('Pengguna tidak ditemukan.', 404);

    res.json({ success: true, user: { ...user, nama: buildDisplayName(user) } });
  } catch (error) {
    next(error);
  }
};

exports.logout = (req, res) => {
  res.clearCookie('accessToken', cookieOptions);
  res.clearCookie('refreshToken', cookieOptions);
  res.status(200).json({ success: true, message: 'Logout berhasil.' });
};

// Mengarahkan pendaftar ke halaman login Google OAuth 2.0
exports.googleAuthRedirect = async (req, res, next) => {
  try {
    const scope = req.query.scope === 'admin' ? 'admin' : 'spmb';
    const mode = req.query.mode === 'login' ? 'login' : 'register';
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    // Jika GOOGLE_CLIENT_ID tersedia di environment, gunakan Google OAuth 2.0 resmi
    if (clientId && clientSecret && !clientId.includes('ganti_dengan')) {
      const callbackUrl =
        process.env.GOOGLE_CALLBACK_URL ||
        `${req.protocol}://${req.get('host')}/api/auth/google/callback`;
      const stateToken = jwt.sign({ scope, mode }, env.JWT_ACCESS_SECRET, { expiresIn: '15m' });

      const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: callbackUrl,
        response_type: 'code',
        scope: 'openid email profile',
        prompt: 'select_account',
        state: stateToken
      });

      return res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`);
    }

    // Jika belum dikonfigurasi di .env, arahkan ke halaman informasi konfigurasi OAuth
    const fallbackParams = new URLSearchParams({
      scope,
      mode,
      error: 'missing_google_oauth'
    });
    return res.redirect(`${env.FRONTEND_URL}/auth/google?${fallbackParams.toString()}`);
  } catch (error) {
    next(error);
  }
};

// Menangani callback dari Google OAuth 2.0 lalu mengarahkan ke tahap konfirmasi
exports.googleAuthCallback = async (req, res) => {
  try {
    const { code, state } = req.query;
    let scope = 'spmb';
    let mode = 'register';

    if (state) {
      try {
        const decoded = jwt.verify(String(state), env.JWT_ACCESS_SECRET);
        scope = decoded.scope || 'spmb';
        mode = decoded.mode || 'register';
      } catch {
        // Abaikan jika state kedaluwarsa, tetap gunakan default
      }
    }

    if (!code) {
      return res.redirect(`${env.FRONTEND_URL}/${scope === 'admin' ? 'register' : 'spmb/register'}?error=google_cancelled`);
    }

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const callbackUrl =
      process.env.GOOGLE_CALLBACK_URL ||
      `${req.protocol}://${req.get('host')}/api/auth/google/callback`;

    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code: String(code),
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: callbackUrl,
        grant_type: 'authorization_code'
      })
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      return res.redirect(`${env.FRONTEND_URL}/auth/google?scope=${scope}&mode=${mode}&error=token_exchange_failed`);
    }

    const profileRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });
    const profile = await profileRes.json();

    if (!profile?.email) {
      return res.redirect(`${env.FRONTEND_URL}/auth/google?scope=${scope}&mode=${mode}&error=no_email`);
    }

    const gtoken = jwt.sign(
      {
        email: String(profile.email).toLowerCase().trim(),
        nama: profile.name || profile.email.split('@')[0],
        foto: profile.picture || null,
        scope,
        mode
      },
      env.JWT_ACCESS_SECRET,
      { expiresIn: '15m' }
    );

    const confirmParams = new URLSearchParams({
      step: 'confirm',
      scope,
      mode,
      email: String(profile.email).toLowerCase().trim(),
      nama: profile.name || profile.email.split('@')[0],
      ...(profile.picture ? { foto: profile.picture } : {}),
      gtoken
    });

    return res.redirect(`${env.FRONTEND_URL}/auth/google?${confirmParams.toString()}`);
  } catch (error) {
    console.error('Google OAuth callback error:', error);
    return res.redirect(`${env.FRONTEND_URL}/auth/google?error=oauth_failed`);
  }
};

// Menyelesaikan konfirmasi akun Google, mendaftarkan pengguna ke DB, dan menerbitkan sesi login
exports.googleAuthComplete = async (req, res, next) => {
  try {
    let email = String(req.body?.email || '').trim().toLowerCase();
    let nama = String(req.body?.nama || '').trim();
    let foto = req.body?.foto ? String(req.body.foto).trim() : null;
    let scope = req.body?.scope === 'admin' ? 'admin' : 'spmb';
    const passwordInput = req.body?.password ? String(req.body.password) : '';
    const gtoken = req.body?.gtoken;

    // Jika berasal dari callback Google OAuth resmi, gunakan data terverifikasi dari gtoken
    if (gtoken) {
      try {
        const verified = jwt.verify(String(gtoken), env.JWT_ACCESS_SECRET);
        email = verified.email || email;
        nama = verified.nama || nama;
        foto = verified.foto || foto;
        scope = verified.scope || scope;
      } catch {
        throw new AppError('Sesi konfirmasi Google telah berakhir. Silakan ulangi login Google.', 400);
      }
    }

    const targetRole = scope === 'admin' ? 'ADMIN' : 'CALON_PENDAFTAR';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new AppError(
        'Akun Gmail aktif belum terdeteksi. Pastikan GOOGLE_CLIENT_ID dan GOOGLE_CLIENT_SECRET telah diisi pada server/.env.',
        400
      );
    }

    let user = await prisma.user.findUnique({
      where: { email },
      include: {
        pendaftaran: { include: { biodata: { select: { namaLengkap: true } } } }
      }
    });

    const isNewUser = !user;

    if (!user) {
      const rawPassword = passwordInput.length >= 6 ? passwordInput : crypto.randomBytes(16).toString('hex');
      const hashedPassword = await bcrypt.hash(rawPassword, 10);

      user = await prisma.user.create({
        data: {
          nama: nama || null,
          email,
          password: hashedPassword,
          role: targetRole,
          foto,
          isVerified: true,
          emailToken: null,
          emailOtp: null,
          emailOtpExpires: null,
          emailOtpAttempts: 0
        },
        include: {
          pendaftaran: { include: { biodata: { select: { namaLengkap: true } } } }
        }
      });
    } else {
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          isVerified: true,
          emailToken: null,
          emailOtp: null,
          emailOtpExpires: null,
          emailOtpAttempts: 0,
          ...(nama && !user.nama ? { nama } : {}),
          ...(foto && !user.foto ? { foto } : {})
        },
        include: {
          pendaftaran: { include: { biodata: { select: { namaLengkap: true } } } }
        }
      });
    }

    issueTokens(res, user);

    const displayName = nama || buildDisplayName(user);

    res.status(200).json({
      success: true,
      isNewUser,
      message: isNewUser
        ? 'Pendaftaran dengan akun Google berhasil!'
        : 'Berhasil masuk dengan akun Google!',
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        foto: user.foto,
        isVerified: true,
        nama: displayName
      }
    });
  } catch (error) {
    next(error);
  }
};
