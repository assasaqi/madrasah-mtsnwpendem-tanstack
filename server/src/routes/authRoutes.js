const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authLimiter } = require('../middleware/rateLimiter');
const { authenticateToken } = require('../middleware/auth');

// Registrasi akun baru sebagai calon pendaftar SPMB
router.post('/register', authLimiter, authController.register);
// Registrasi akun pengelola madrasah
router.post('/register-admin', authLimiter, authController.registerAdmin);
// Login dan penerbitan cookie akses
router.post('/login', authLimiter, authController.login);
// Perbarui access token dari refresh token
router.post('/refresh', authController.refresh);
// Ambil profil pengguna yang sedang login
router.get('/me', authenticateToken, authController.getMe);
// Hapus seluruh cookie sesi
router.post('/logout', authController.logout);

module.exports = router;
