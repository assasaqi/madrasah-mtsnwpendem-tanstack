const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authLimiter } = require('../middleware/rateLimiter');
const { authenticateToken } = require('../middleware/auth');

// Registrasi akun baru sebagai calon pendaftar SPMB
router.post('/register', authLimiter, authController.register);
// Registrasi akun pengelola madrasah
router.post('/register-admin', authLimiter, authController.registerAdmin);
// Autentikasi dan registrasi menggunakan akun Google (OAuth 2.0)
router.get('/google', authController.googleAuthRedirect);
router.get('/google/callback', authController.googleAuthCallback);
router.get('/google/pending', authController.getGooglePending);
router.post('/google/complete', authLimiter, authController.googleAuthComplete);
// Kirim ulang email konfirmasi / OTP pendaftaran
router.post('/resend-confirmation', authLimiter, authController.resendConfirmation);
// Verifikasi kode OTP 6 digit pendaftar
router.post('/verify-otp', authLimiter, authController.verifyOtp);
// Verifikasi token tautan email cadangan pendaftar
router.get('/verify-email', authController.verifyEmail);
router.post('/verify-email', authController.verifyEmail);
// Permintaan dan eksekusi atur ulang kata sandi
router.post('/forgot-password', authLimiter, authController.forgotPassword);
router.post('/reset-password', authLimiter, authController.resetPassword);
// Login dan penerbitan cookie akses
router.post('/login', authLimiter, authController.login);
// Perbarui access token dari refresh token
router.post('/refresh', authController.refresh);
// Ambil profil pengguna yang sedang login
router.get('/me', authenticateToken, authController.getMe);
// Hapus seluruh cookie sesi
router.post('/logout', authController.logout);

module.exports = router;
