const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminUsersController = require('../controllers/adminUsersController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

// Seluruh rute admin dapat diakses Admin Utama dan Operator
router.use(authenticateToken, authorizeRoles('ADMIN', 'OPERATOR'));

// Data pendaftar PPDB dan verifikasinya
router.get('/ppdb', adminController.getAllPendaftar);
router.get('/ppdb/pengaturan', adminController.getPengaturanSurat);
router.put('/ppdb/pengaturan', authorizeRoles('ADMIN'), adminController.updatePengaturanSurat);
router.put('/ppdb/:id/status', adminController.updateStatusPendaftaran);
router.patch('/ppdb/dokumen/:dokumenId/verify', adminController.verifyDokumen);

// Pesan kontak dari pengunjung website
router.get('/kontak', adminController.getPesanKontak);
router.patch('/kontak/:id/read', adminController.markPesanRead);
router.delete('/kontak/:id', adminController.deletePesanKontak);

// Manajemen akun pengelola (khusus Admin Utama)
router.get('/users', authorizeRoles('ADMIN'), adminUsersController.getAllStaff);
router.post('/users', authorizeRoles('ADMIN'), adminUsersController.createStaff);
router.patch('/users/:id', authorizeRoles('ADMIN'), adminUsersController.updateStaff);
router.delete('/users/:id', authorizeRoles('ADMIN'), adminUsersController.deleteStaff);

module.exports = router;
