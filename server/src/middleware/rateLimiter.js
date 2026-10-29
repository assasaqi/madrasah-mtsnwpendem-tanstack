const rateLimit = require('express-rate-limit');
const env = require('../config/env');

// Membatasi percobaan autentikasi dengan toleransi lebih longgar saat development
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: env.NODE_ENV === 'development' ? 100 : 10,
  message: { success: false, message: 'Terlalu banyak percobaan. Silakan coba lagi setelah 15 menit.' },
  standardHeaders: true,
  legacyHeaders: false
});

// Membatasi seluruh permintaan API per alamat IP
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: env.NODE_ENV === 'development' ? 1000 : 100,
  message: { success: false, message: 'Terlalu banyak permintaan. Silakan pelankan akses Anda.' },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = { authLimiter, apiLimiter };
