const express = require('express');
const router = express.Router();
const ppdbController = require('../controllers/ppdbController');
const { authenticateToken } = require('../middleware/auth');
const { single } = require('../middleware/upload');

// Rute pendaftar PPDB yang sedang login
router.get('/status', authenticateToken, ppdbController.getStatusPendaftaran);
router.post('/submit', authenticateToken, ppdbController.submitPendaftaran);
router.post('/upload-dokumen', authenticateToken, ...single('dokumen'), ppdbController.uploadDokumen);

module.exports = router;
