const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController');

// Data beranda, berita, kategori, pengumuman, galeri, dan kontak publik
router.get('/home', publicController.getHomeData);
router.get('/berita', publicController.getBerita);
router.get('/berita/:id', publicController.getBeritaDetail);
router.get('/kategori', publicController.getKategori);
router.get('/pengumuman', publicController.getPengumuman);
router.get('/pengumuman/:id', publicController.getPengumumanDetail);
router.get('/galeri', publicController.getGaleri);
router.get('/agenda', publicController.getAgenda);
router.get('/prestasi', publicController.getPrestasi);
router.get('/unduhan', publicController.getUnduhan);
router.get('/unduhan/:id/unduh', publicController.downloadUnduhan);
router.get('/faq', publicController.getFaq);
router.post('/kontak', publicController.submitKontak);

module.exports = router;
