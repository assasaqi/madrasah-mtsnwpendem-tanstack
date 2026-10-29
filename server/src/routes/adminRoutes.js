const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

// Seluruh rute admin hanya untuk role ADMIN
router.use(authenticateToken, authorizeRoles('ADMIN'));

// Data pendaftar PPDB dan verifikasinya
router.get('/ppdb', adminController.getAllPendaftar);
router.get('/ppdb/pengaturan', adminController.getPengaturanSurat);
router.put('/ppdb/pengaturan', adminController.updatePengaturanSurat);
router.put('/ppdb/:id/status', adminController.updateStatusPendaftaran);
router.patch('/ppdb/dokumen/:dokumenId/verify', adminController.verifyDokumen);

// Pesan kontak dari pengunjung website
router.get('/kontak', adminController.getPesanKontak);
router.patch('/kontak/:id/read', adminController.markPesanRead);
router.delete('/kontak/:id', adminController.deletePesanKontak);

module.exports = router;
