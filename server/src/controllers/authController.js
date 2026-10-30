const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const prisma = require('../config/prisma');
const env = require('../config/env');
const AppError = require('../utils/appError');

const registerSchema = z.object({
  nama: z.string().trim().min(3, 'Nama lengkap minimal 3 karakter.').max(100).optional(),
  email: z.string().trim().toLowerCase().email('Format email tidak valid.'),
  password: z.string().min(6, 'Kata sandi minimal 6 karakter.').max(72)
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email('Format email tidak valid.'),
  password: z.string().min(1, 'Kata sandi wajib diisi.')
});

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === 'production',
  sameSite: process.env.COOKIE_SAMESITE || (env.NODE_ENV === 'production' ? 'none' : 'lax'),
  path: '/'
};

const buildDisplayName = (user) =>
  user.pendaftaran?.biodata?.namaLengkap ||
  user.email.split('@')[0];

const issueTokens = (res, user) => {
  const accessToken = jwt.sign({ id: user.id, role: user.role }, env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user.id }, env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

  res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 });
  res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 });
};

const createUser = async ({ nama, email, password, role }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new AppError('Email sudah terdaftar.', 400);

  return prisma.user.create({
    data: {
      email,
      password: await bcrypt.hash(password, 10),
      role
    },
    select: { id: true, email: true, role: true, foto: true, createdAt: true }
  });
};

exports.register = async (req, res, next) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const { nama, email, password } = parsed.data;
    const user = await createUser({ nama, email, password, role: 'CALON_PENDAFTAR' });

    res.status(201).json({
      success: true,
      message: 'Registrasi berhasil. Silakan login untuk melanjutkan.',
      user: { ...user, nama: nama || email.split('@')[0] }
    });
  } catch (error) {
    next(error);
  }
};

// Mendaftarkan akun pengelola (admin) madrasah
exports.registerAdmin = async (req, res, next) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const { nama, email, password } = parsed.data;
    const user = await createUser({ nama, email, password, role: 'ADMIN' });

    res.status(201).json({
      success: true,
      message: 'Registrasi akun pengelola berhasil. Silakan login.',
      user: { ...user, nama: nama || email.split('@')[0] }
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
