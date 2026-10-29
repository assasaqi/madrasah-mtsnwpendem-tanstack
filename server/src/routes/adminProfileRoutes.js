const express = require('express');
const router = express.Router();
const profileController = require('../controllers/adminProfileController');
const sejarahController = require('../controllers/sejarahController');
const strukturController = require('../controllers/strukturController');
const fasilitasController = require('../controllers/fasilitasController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const { single, fields } = require('../middleware/upload');

// Seluruh rute profil admin hanya untuk role ADMIN
router.use(authenticateToken, authorizeRoles('ADMIN'));

// Profil akun admin
router.get('/me', profileController.getAdminProfile);
router.put('/me', ...single('foto'), profileController.updateAdminProfile);
router.put('/change-password', profileController.changePassword);

// Profil sekolah yang tampil di halaman publik
router.get('/school', profileController.getSchoolProfile);
router.put('/school', ...fields([{ name: 'logo', maxCount: 1 }, { name: 'banner', maxCount: 1 }]), profileController.updateSchoolProfile);

// Sejarah singkat madrasah
router.get('/sejarah', sejarahController.getSejarah);
router.put('/sejarah', sejarahController.updateSejarah);

// Struktur organisasi madrasah
router.get('/struktur', strukturController.getAllStruktur);
router.put('/struktur/reorder', strukturController.reorderStruktur);
router.post('/struktur', ...single('foto'), strukturController.createStruktur);
router.put('/struktur/:id', ...single('foto'), strukturController.updateStruktur);
router.delete('/struktur/:id', strukturController.deleteStruktur);

// Fasilitas dan sarana prasarana madrasah
router.get('/fasilitas', fasilitasController.getAllFasilitas);
router.post('/fasilitas', ...single('gambar'), fasilitasController.createFasilitas);
router.put('/fasilitas/:id', ...single('gambar'), fasilitasController.updateFasilitas);
router.delete('/fasilitas/:id', fasilitasController.deleteFasilitas);

module.exports = router;
