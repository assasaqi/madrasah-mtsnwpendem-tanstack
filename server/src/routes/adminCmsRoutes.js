const express = require('express');
const router = express.Router();
const adminCmsController = require('../controllers/adminCmsController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const { single } = require('../middleware/upload');

// Seluruh rute CMS hanya untuk admin terautentikasi
router.use(authenticateToken, authorizeRoles('ADMIN'));

// Manajemen berita
router.get('/berita', adminCmsController.getAllBerita);
router.post('/berita', ...single('gambar'), adminCmsController.createBerita);
router.put('/berita/:id', ...single('gambar'), adminCmsController.updateBerita);
router.delete('/berita/:id', adminCmsController.deleteBerita);

// Manajemen kategori berita
router.get('/kategori', adminCmsController.getAllKategori);
router.post('/kategori', adminCmsController.createKategori);
router.put('/kategori/:id', adminCmsController.updateKategori);
router.delete('/kategori/:id', adminCmsController.deleteKategori);

// Manajemen pengumuman
router.get('/pengumuman', adminCmsController.getAllPengumuman);
router.post('/pengumuman', ...single('lampiran'), adminCmsController.createPengumuman);
router.put('/pengumuman/:id', ...single('lampiran'), adminCmsController.updatePengumuman);
router.delete('/pengumuman/:id', adminCmsController.deletePengumuman);

// Manajemen galeri foto
router.get('/galeri', adminCmsController.getAllGaleri);
router.post('/galeri', ...single('gambar'), adminCmsController.createGaleri);
router.put('/galeri/:id', ...single('gambar'), adminCmsController.updateGaleri);
router.delete('/galeri/:id', adminCmsController.deleteGaleri);

// Manajemen agenda kegiatan
router.get('/agenda', adminCmsController.getAllAgenda);
router.post('/agenda', adminCmsController.createAgenda);
router.put('/agenda/:id', adminCmsController.updateAgenda);
router.delete('/agenda/:id', adminCmsController.deleteAgenda);

// Manajemen prestasi
router.get('/prestasi', adminCmsController.getAllPrestasi);
router.post('/prestasi', ...single('gambar'), adminCmsController.createPrestasi);
router.put('/prestasi/:id', ...single('gambar'), adminCmsController.updatePrestasi);
router.delete('/prestasi/:id', adminCmsController.deletePrestasi);

// Manajemen pusat unduhan
router.get('/unduhan', adminCmsController.getAllUnduhan);
router.post('/unduhan', ...single('berkas'), adminCmsController.createUnduhan);
router.put('/unduhan/:id', ...single('berkas'), adminCmsController.updateUnduhan);
router.delete('/unduhan/:id', adminCmsController.deleteUnduhan);

// Manajemen pertanyaan umum
router.get('/faq', adminCmsController.getAllFaq);
router.post('/faq', adminCmsController.createFaq);
router.put('/faq/:id', adminCmsController.updateFaq);
router.delete('/faq/:id', adminCmsController.deleteFaq);

module.exports = router;
