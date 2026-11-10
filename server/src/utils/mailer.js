const nodemailer = require('nodemailer');
const env = require('../config/env');

let transporter = null;

// Menghindari injeksi HTML dari input nama pada template email
const escapeHtml = (value) =>
  String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Menginisialisasi transport SMTP bila konfigurasi tersedia
const getTransporter = () => {
  if (transporter) return transporter;
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT) || 587;

  if (host && user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });
  }
  return transporter;
};

// Mengirim email berisi kode OTP 6 digit dan tautan konfirmasi cadangan
const sendVerificationEmail = async ({ email, otp, token, nama }) => {
  const verifyUrl = `${env.FRONTEND_URL}/verifikasi-email?token=${token}&email=${encodeURIComponent(email)}`;
  const transport = getTransporter();
  const safeName = escapeHtml(nama);

  // Bila konfigurasi SMTP belum dipasang di environment, lakukan simulasi tanpa membuat request gagal
  if (!transport) {
    console.log('\n======================================================');
    console.log(`[SIMULASI EMAIL] Verifikasi Pendaftaran untuk: ${email}`);
    console.log(`Kode OTP (berlaku 10 menit): ${otp}`);
    console.log(`Tautan Verifikasi Cadangan: ${verifyUrl}`);
    console.log('======================================================\n');
    return { simulated: true, otp, url: verifyUrl };
  }

  const senderName = process.env.SMTP_FROM_NAME || 'MTs NW Pendem';
  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

  const mailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: email,
    subject: `${otp} adalah Kode Verifikasi Akun Anda - MTs NW Pendem`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 580px; margin: 0 auto; padding: 28px; border: 1px solid #e7e2d6; border-radius: 12px; background-color: #fffefb; color: #23201a;">
        <div style="border-bottom: 2px solid #14532d; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #14532d; margin: 0; font-size: 20px;">Sistem Informasi MTs NW Pendem</h2>
          <p style="margin: 4px 0 0; font-size: 12px; color: #726c60; text-transform: uppercase; letter-spacing: 0.1em;">Verifikasi Alamat Email Akun</p>
        </div>

        <p style="font-size: 14px; line-height: 1.6;">Halo${safeName ? ` <strong>${safeName}</strong>` : ''},</p>
        <p style="font-size: 14px; line-height: 1.6;">
          Terima kasih telah mendaftar di portal MTs NW Pendem. Masukkan <strong>kode OTP 6 digit</strong> berikut pada halaman verifikasi untuk mengaktifkan akun Anda:
        </p>

        <div style="margin: 24px 0; text-align: center; padding: 20px; border-radius: 10px; background-color: #f4f1e7; border: 1px dashed #14532d;">
          <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #5c574d; margin-bottom: 8px;">Kode Verifikasi OTP</span>
          <span style="font-size: 32px; font-weight: 700; letter-spacing: 10px; color: #14532d; font-family: 'Courier New', monospace;">${escapeHtml(otp)}</span>
          <span style="display: block; font-size: 12px; color: #726c60; margin-top: 8px;">Berlaku selama <strong>10 menit</strong>. Jangan bagikan kode ini kepada siapa pun.</span>
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #5c574d;">
          Atau klik tombol di bawah ini untuk memverifikasi email Anda secara langsung:
        </p>

        <div style="margin: 20px 0; text-align: center;">
          <a href="${verifyUrl}" style="background-color: #14532d; color: #ffffff; padding: 11px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 13px; display: inline-block;">
            Verifikasi Email Sekarang
          </a>
        </div>

        <p style="font-size: 12px; line-height: 1.6; color: #726c60;">
          Salin tautan cadangan bila tombol tidak berfungsi:<br/>
          <a href="${verifyUrl}" style="color: #14532d; word-break: break-all;">${verifyUrl}</a>
        </p>

        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #ece8dd; font-size: 11.5px; color: #9c9484; line-height: 1.5;">
          <p style="margin: 0;">Pesan ini dikirim secara otomatis oleh sistem MTs NW Pendem. Bila Anda tidak merasa mendaftar, Anda dapat mengabaikan email ini.</p>
        </div>
      </div>
    `
  };

  return transport.sendMail(mailOptions);
};

// Mengirim email tautan atur ulang kata sandi (berlaku 30 menit)
const sendPasswordResetEmail = async ({ email, token, nama }) => {
  const resetUrl = `${env.FRONTEND_URL}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;
  const transport = getTransporter();
  const safeName = escapeHtml(nama);

  if (!transport) {
    console.log('\n======================================================');
    console.log(`[SIMULASI EMAIL] Reset Kata Sandi untuk: ${email}`);
    console.log(`Tautan Reset Kata Sandi (30 menit): ${resetUrl}`);
    console.log('======================================================\n');
    return { simulated: true, url: resetUrl };
  }

  const senderName = process.env.SMTP_FROM_NAME || 'MTs NW Pendem';
  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

  const mailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: email,
    subject: 'Atur Ulang Kata Sandi Akun - MTs NW Pendem',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 580px; margin: 0 auto; padding: 28px; border: 1px solid #e7e2d6; border-radius: 12px; background-color: #fffefb; color: #23201a;">
        <div style="border-bottom: 2px solid #14532d; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #14532d; margin: 0; font-size: 20px;">Sistem Informasi MTs NW Pendem</h2>
          <p style="margin: 4px 0 0; font-size: 12px; color: #726c60; text-transform: uppercase; letter-spacing: 0.1em;">Permintaan Atur Ulang Kata Sandi</p>
        </div>

        <p style="font-size: 14px; line-height: 1.6;">Halo${safeName ? ` <strong>${safeName}</strong>` : ''},</p>
        <p style="font-size: 14px; line-height: 1.6;">
          Kami menerima permintaan untuk mengatur ulang kata sandi akun Anda. Klik tombol di bawah ini untuk membuat kata sandi baru (tautan berlaku selama <strong>30 menit</strong>):
        </p>

        <div style="margin: 24px 0; text-align: center;">
          <a href="${resetUrl}" style="background-color: #14532d; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-block;">
            Atur Ulang Kata Sandi
          </a>
        </div>

        <p style="font-size: 12px; line-height: 1.6; color: #726c60;">
          Atau buka tautan berikut di peramban web Anda:<br/>
          <a href="${resetUrl}" style="color: #14532d; word-break: break-all;">${resetUrl}</a>
        </p>

        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #ece8dd; font-size: 11.5px; color: #9c9484; line-height: 1.5;">
          <p style="margin: 0;">Jika Anda tidak pernah meminta pengaturan ulang kata sandi, abaikan pesan ini. Akun Anda tetap aman.</p>
        </div>
      </div>
    `
  };

  return transport.sendMail(mailOptions);
};

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail
};
