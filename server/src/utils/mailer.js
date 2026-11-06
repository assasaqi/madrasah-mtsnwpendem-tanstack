const nodemailer = require('nodemailer');
const env = require('../config/env');

let transporter = null;

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

// Mengirim email berisi tautan konfirmasi pendaftaran
const sendVerificationEmail = async ({ email, token, nama }) => {
  const verifyUrl = `${env.FRONTEND_URL}/verifikasi-email?token=${token}&email=${encodeURIComponent(email)}`;
  const transport = getTransporter();

  // Bila konfigurasi SMTP belum dipasang di environment, lakukan simulasi tanpa membuat request gagal
  if (!transport) {
    console.log('\n======================================================');
    console.log(`[SIMULASI EMAIL] Konfirmasi Pendaftaran untuk: ${email}`);
    console.log(`Tautan Konfirmasi: ${verifyUrl}`);
    console.log('======================================================\n');
    return { simulated: true, url: verifyUrl };
  }

  const senderName = process.env.SMTP_FROM_NAME || 'MTs NW Pendem';
  const senderEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

  const mailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: email,
    subject: 'Konfirmasi Alamat Email Anda - MTs NW Pendem',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 580px; margin: 0 auto; padding: 28px; border: 1px solid #e7e2d6; border-radius: 12px; background-color: #fffefb; color: #23201a;">
        <div style="border-bottom: 2px solid #14532d; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #14532d; margin: 0; font-size: 20px;">Sistem Informasi MTs NW Pendem</h2>
          <p style="margin: 4px 0 0; font-size: 12px; color: #726c60; text-transform: uppercase; letter-spacing: 0.1em;">Konfirmasi Alamat Email Pendaftar</p>
        </div>

        <p style="font-size: 14px; line-height: 1.6;">Halo${nama ? ` <strong>${nama}</strong>` : ''},</p>
        <p style="font-size: 14px; line-height: 1.6;">
          Terima kasih telah melakukan pendaftaran. Untuk memastikan keamanan data dan mengaktifkan akun Anda, silakan klik tombol di bawah ini:
        </p>

        <div style="margin: 28px 0; text-align: center;">
          <a href="${verifyUrl}" style="background-color: #14532d; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-block;">
            Konfirmasi Email Saya
          </a>
        </div>

        <p style="font-size: 12.5px; line-height: 1.6; color: #726c60;">
          Atau salin dan buka tautan berikut langsung pada peramban web Anda:<br/>
          <a href="${verifyUrl}" style="color: #14532d; word-break: break-all;">${verifyUrl}</a>
        </p>

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #ece8dd; font-size: 11.5px; color: #9c9484; line-height: 1.5;">
          <p style="margin: 0;">Pesan ini dikirim secara otomatis oleh sistem pendaftaran MTs NW Pendem. Bila Anda tidak merasa mendaftar, Anda dapat mengabaikan email ini.</p>
        </div>
      </div>
    `
  };

  return transport.sendMail(mailOptions);
};

module.exports = {
  sendVerificationEmail
};
