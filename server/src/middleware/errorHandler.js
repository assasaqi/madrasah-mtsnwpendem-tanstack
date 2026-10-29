const multer = require('multer');
const { Prisma } = require('@prisma/client');
const { ZodError } = require('zod');
const env = require('../config/env');

// Menangani seluruh error aplikasi dengan respons JSON yang konsisten
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || err.status || 500;
  let message = err.message || 'Terjadi kesalahan internal pada server.';

  if (err instanceof ZodError) {
    statusCode = 400;
    message = err.issues[0]?.message || 'Data yang dikirim tidak valid.';
  } else if (err instanceof multer.MulterError) {
    statusCode = 400;
    message = err.code === 'LIMIT_FILE_SIZE'
      ? 'Ukuran berkas melebihi batas maksimal 5MB.'
      : `Gagal mengunggah berkas: ${err.message}`;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      statusCode = 409;
      message = 'Data dengan nilai unik tersebut sudah ada.';
    } else if (err.code === 'P2025') {
      statusCode = 404;
      message = 'Data yang diminta tidak ditemukan.';
    } else if (err.code === 'P2000') {
      statusCode = 400;
      message = 'Nilai input terlalu panjang untuk kolom database.';
    } else if (err.code === 'P2003') {
      statusCode = 400;
      message = 'Data referensi tidak valid atau masih digunakan.';
    } else {
      statusCode = 500;
      message = 'Terjadi kesalahan pada basis data.';
    }
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    statusCode = 503;
    message = 'Gagal terhubung ke basis data. Silakan coba beberapa saat lagi.';
  } else if (String(err.message || '').includes('pool timeout')) {
    statusCode = 503;
    message = 'Layanan sedang sibuk. Silakan coba lagi.';
  }

  if (statusCode >= 500) console.error('Server Error:', err);

  res.status(statusCode).json({
    success: false,
    message,
    ...(env.NODE_ENV === 'development' && statusCode >= 500 && { stack: err.stack })
  });
};

module.exports = errorHandler;
