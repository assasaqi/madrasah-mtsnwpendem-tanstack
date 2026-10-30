-- MySQL dump 10.13  Distrib 8.4.3, for Win64 (x86_64)
--
-- Host: localhost    Database: madrasah_db
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('1f4dd4c6-3e7f-4d3b-9245-c07f0610855e','5ba11e9af68f65c7df665b6afe24c49b1f90d7948f0df0ef1ac00fc29798a02d','2026-10-14 16:02:07.898','20261014160207_init_madrasah_schema',NULL,NULL,'2026-10-14 16:02:07.661',1),('35ccf608-9eb8-4205-bd8c-68d05f8414e4','80cd5559df907712314a7cf78a8bc4fa078f592adf64d16411a9c42dc2d6d9f6','2026-10-15 08:52:17.664','20261015085217_sync_schema_fixes',NULL,NULL,'2026-10-15 08:52:17.247',1),('60fafd0b-a9fd-416c-aec4-1702861d32a6','08ac04454f11398331ebf0bd083420b51e44af3b930d09f89b40725d300a6556','2026-10-15 16:49:57.713','20261015164957_add_profil_sekolah_and_user_foto',NULL,NULL,'2026-10-15 16:49:57.584',1),('727fd051-10ac-44b2-b2bf-541fbd18ec6e','0a77e25cedc9f9151480861f52c62b32e146a63679bffc06cffff79e4c0a8c94','2026-10-27 00:39:19.086','20261027120000_add_pengaturan_ppdb',NULL,NULL,'2026-10-27 00:39:19.032',1),('b488163c-18a0-4b5e-82f0-a39f47ccc825','59fee53c67298195de666c3e6f5f845fb993bbbc808ae04234a734bd1153b9b4','2026-10-14 12:11:48.185','20261014121144_init_mysql',NULL,NULL,'2026-10-14 12:11:44.553',1),('c498ab60-68c3-49b4-91a1-6fdfaf61a6b1','48f05d1f21d68ddb7685c2467b04e94e7366847412f157fb2e369432ebd99989','2026-10-30 05:54:44.298','20261030140000_add_rdm_and_clean_legacy_tables','',NULL,'2026-10-30 05:54:44.298',0),('d52fa0b2-1b42-4aca-a931-0b8b30eb0428','8eddb82fa2bdd3f1d90c48dad87bf2992583b2569c04336a16a0429eab673713','2026-10-26 19:29:42.534','20261027100000_add_profil_sejarah_struktur_fasilitas',NULL,NULL,'2026-10-26 19:29:42.392',1),('d5691644-7e12-4948-803b-fc8776a31012','3d0eef814bcb847d9f4ed887cd1c0e996d4a2a3152ecfd817922b5f68d77894f','2026-10-27 03:39:03.871','20261027140000_add_agenda_prestasi_unduhan_faq',NULL,NULL,'2026-10-27 03:39:03.596',1),('e327f46f-fc5d-4fb5-8b88-6bd9d601e849','5799b60103100c00d41652e97a59ff4d53a4508119f9de1f56764bc54a516c7f','2026-10-26 19:11:06.021','20261027090000_add_ppdb_catatan',NULL,NULL,'2026-10-26 19:11:05.504',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agenda`
--

DROP TABLE IF EXISTS `agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agenda` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judul` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `lokasi` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mulai` datetime(3) NOT NULL,
  `selesai` datetime(3) DEFAULT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `agenda_slug_key` (`slug`),
  KEY `agenda_mulai_idx` (`mulai`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agenda`
--

LOCK TABLES `agenda` WRITE;
/*!40000 ALTER TABLE `agenda` DISABLE KEYS */;
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `berita`
--

DROP TABLE IF EXISTS `berita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `berita` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judul` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `konten` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '1',
  `authorId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kategoriId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `gambar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `berita_slug_key` (`slug`),
  KEY `berita_authorId_fkey` (`authorId`),
  KEY `berita_kategoriId_fkey` (`kategoriId`),
  CONSTRAINT `berita_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `berita_kategoriId_fkey` FOREIGN KEY (`kategoriId`) REFERENCES `kategoriberita` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `berita`
--

LOCK TABLES `berita` WRITE;
/*!40000 ALTER TABLE `berita` DISABLE KEYS */;
INSERT INTO `berita` VALUES ('089c2165-cc22-494e-aa67-ea9888324a88','Pengisian Survei Kurikulum Berbasis Cinta (KBC) di MTs NW Pendem Berjalan Aman dan Tertib','pengisian-survei-kurikulum-berbasis-cinta-kbc-di-mts-nw-pendem-berjalan-aman-dan-tertib','Kegiatan pengisian survei Kurikulum Berbasis Cinta (KBC) untuk lingkungan madrasah sukses dilaksanakan di MTs NW Pendem pada Sabtu, 17 Oktober 2026. Agenda ini diikuti oleh 6 orang murid dan 1 orang guru.\r\n\r\nSeluruh rangkaian pengisian survei berbasis komputer ini berlangsung dengan aman, lancar, dan tertib. Para peserta tampak fokus menyelesaikan setiap instrumen pertanyaan di unit komputer masing-masing. Pelaksanaan kegiatan ini diharapkan mampu memberikan data yang akurat demi mendukung evaluasi dan peningkatan kualitas penerapan Kurikulum Berbasis Cinta di MTs NW Pendem.',1,'933b689c-d188-4548-a1c7-56b9c9645154','kat-01','2026-10-17 00:08:00.000','2026-10-30 05:26:57.153','img-1793293399469-648238301.webp'),('a6bf49ad-a058-4b38-9965-bc362ad68678','Momen Haru & Penuh Syukur: Pelepasan Siswa MTs & SMA NW Pendem','momen-haru-penuh-syukur-pelepasan-siswa-mts-sma-nw-pendem','Potret kebersamaan para dewan guru dan tamu undangan dalam acara Tasyakuran & Pelepasan Murid MTs dan SMA NW Pendem pada 20 Mei 2026. Selamat kepada para siswa-siswi yang telah berhasil menyelesaikan pendidikan. Semoga ilmu yang diraih berkah dan mengantarkan menuju jenjang kesuksesan berikutnya!',1,'933b689c-d188-4548-a1c7-56b9c9645154',NULL,'2026-05-20 00:20:00.000','2026-10-30 05:26:08.080','img-1793297913298-204319485.webp'),('f20a6f2d-c14b-4838-a4d6-8490f6ee2e2f','Fokus dan Tertib, Siswa Kelas 9 Sukses Laksanakan Tes Kemampuan Akademik (TKA) April 2026','fokus-dan-tertib-siswa-kelas-9-sukses-laksanakan-tes-kemampuan-akademik-tka-april-2026','Pelaksanaan Tes Kemampuan Akademik (TKA) bagi siswa kelas 9 berlangsung dengan lancar dan tertib pada bulan April 2026. Seluruh peserta tampak antusias serta fokus menyelesaikan setiap soal ujian berbasis komputer di laboratorium komputer.\r\n\r\nKegiatan TKA ini diselenggarakan untuk mengukur serta memetakan capaian pemahaman akademik siswa kelas 9 selama menempuh proses pembelajaran. Berkat persiapan yang matang dan dukungan fasilitas laboratorium yang memadai, seluruh rangkaian ujian berjalan dengan aman tanpa kendala teknis yang berarti\r\n\r\nMelalui pelaksanaan Tes Kemampuan Akademik ini, diharapkan hasil yang diperoleh dapat menjadi tolok ukur dalam evaluasi kualitas pembelajaran, sekaligus menjadi pijakan penting bagi para siswa untuk melangkah ke jenjang pendidikan berikutnya.',1,'933b689c-d188-4548-a1c7-56b9c9645154','kat-01','2026-04-06 00:15:00.000','2026-10-30 05:28:46.526','img-1793296542844-629380225.webp');
/*!40000 ALTER TABLE `berita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `biodatasiswappdb`
--

DROP TABLE IF EXISTS `biodatasiswappdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biodatasiswappdb` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pendaftaranId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `namaLengkap` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nisn` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nik` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tempatLahir` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggalLahir` datetime(3) NOT NULL,
  `jenisKelamin` enum('LAKI_LAKI','PEREMPUAN') COLLATE utf8mb4_unicode_ci NOT NULL,
  `agama` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Islam',
  `alamat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `asalSekolah` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `biodataSiswaPpdb_pendaftaranId_key` (`pendaftaranId`),
  CONSTRAINT `biodataSiswaPpdb_pendaftaranId_fkey` FOREIGN KEY (`pendaftaranId`) REFERENCES `pendaftaranppdb` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biodatasiswappdb`
--

LOCK TABLES `biodatasiswappdb` WRITE;
/*!40000 ALTER TABLE `biodatasiswappdb` DISABLE KEYS */;
/*!40000 ALTER TABLE `biodatasiswappdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dataorangtuappdb`
--

DROP TABLE IF EXISTS `dataorangtuappdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dataorangtuappdb` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pendaftaranId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `namaAyah` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pekerjaanAyah` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `noHpAyah` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `namaIbu` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pekerjaanIbu` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `noHpIbu` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamatOrangTua` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dataOrangTuaPpdb_pendaftaranId_key` (`pendaftaranId`),
  CONSTRAINT `dataOrangTuaPpdb_pendaftaranId_fkey` FOREIGN KEY (`pendaftaranId`) REFERENCES `pendaftaranppdb` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dataorangtuappdb`
--

LOCK TABLES `dataorangtuappdb` WRITE;
/*!40000 ALTER TABLE `dataorangtuappdb` DISABLE KEYS */;
/*!40000 ALTER TABLE `dataorangtuappdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dokumenppdb`
--

DROP TABLE IF EXISTS `dokumenppdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dokumenppdb` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pendaftaranId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenisDokumen` enum('PAS_FOTO','KARTU_KELUARGA','AKTA_KELAHIRAN','IJAZAH','SKHU') COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isVerified` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dokumenPpdb_pendaftaranId_jenisDokumen_key` (`pendaftaranId`,`jenisDokumen`),
  CONSTRAINT `dokumenPpdb_pendaftaranId_fkey` FOREIGN KEY (`pendaftaranId`) REFERENCES `pendaftaranppdb` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dokumenppdb`
--

LOCK TABLES `dokumenppdb` WRITE;
/*!40000 ALTER TABLE `dokumenppdb` DISABLE KEYS */;
/*!40000 ALTER TABLE `dokumenppdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pertanyaan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `jawaban` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `kategori` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Umum',
  `urutan` int NOT NULL DEFAULT '0',
  `isPublished` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `faq_kategori_idx` (`kategori`),
  KEY `faq_urutan_idx` (`urutan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fasilitas`
--

DROP TABLE IF EXISTS `fasilitas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fasilitas` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `ikon` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'building',
  `gambar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `urutan` int NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fasilitas`
--

LOCK TABLES `fasilitas` WRITE;
/*!40000 ALTER TABLE `fasilitas` DISABLE KEYS */;
INSERT INTO `fasilitas` VALUES ('462bb3d1-b172-4d76-8b49-8ee1afbf7854','Laboratorium Sains (IPA)','','compass',NULL,4,'2026-10-26 19:30:01.142','2026-10-29 08:41:40.984'),('5fa965ce-2f11-4af0-b060-a9fadae7a631','Masjid & Pusat Tahfidz','','sparkles',NULL,5,'2026-10-26 19:30:01.142','2026-10-29 08:41:46.290'),('60c5476f-b98d-4f78-a154-558461d9969b','Laboratorium Komputer & CBT','','monitor','img-1793063901114-142222273.webp',2,'2026-10-26 19:30:01.142','2026-10-29 08:41:29.807'),('72e99ab6-b201-4b6e-a065-eca0721d013b','Perpustakaan Digital','','library',NULL,3,'2026-10-26 19:30:01.142','2026-10-29 08:41:36.094'),('876483aa-b969-4f9a-a029-9f6cf51fe8b6','Lapangan Olahraga Multi-fungsi','','award','img-1793063937275-161578659.webp',6,'2026-10-26 19:30:01.142','2026-10-29 08:42:07.308'),('a4f92624-c2f7-468e-9e97-d617e4099f0f','Ruang Kelas','','building','img-1793063884473-40706022.webp',1,'2026-10-26 19:30:01.142','2026-10-29 08:41:06.128');
/*!40000 ALTER TABLE `fasilitas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galeri`
--

DROP TABLE IF EXISTS `galeri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `galeri` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judul` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imageUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kategori` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galeri`
--

LOCK TABLES `galeri` WRITE;
/*!40000 ALTER TABLE `galeri` DISABLE KEYS */;
/*!40000 ALTER TABLE `galeri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kategoriberita`
--

DROP TABLE IF EXISTS `kategoriberita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kategoriberita` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kategoriBerita_slug_key` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategoriberita`
--

LOCK TABLES `kategoriberita` WRITE;
/*!40000 ALTER TABLE `kategoriberita` DISABLE KEYS */;
INSERT INTO `kategoriberita` VALUES ('kat-01','Akademik','akademik'),('kat-02','Prestasi','prestasi'),('kat-03','Kegiatan Santri','kegiatan-santri'),('kat-04','Pengumuman Resmi','pengumuman-resmi');
/*!40000 ALTER TABLE `kategoriberita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pendaftaranppdb`
--

DROP TABLE IF EXISTS `pendaftaranppdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pendaftaranppdb` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomorPendaftaran` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('BELUM_ISI','DITINJAU','LULUS_ADMINISTRASI','TIDAK_LULUS','LULUS_FINAL') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'BELUM_ISI',
  `gelombang` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Gelombang 1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `catatan` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pendaftaranPpdb_nomorPendaftaran_key` (`nomorPendaftaran`),
  UNIQUE KEY `pendaftaranPpdb_userId_key` (`userId`),
  CONSTRAINT `pendaftaranPpdb_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pendaftaranppdb`
--

LOCK TABLES `pendaftaranppdb` WRITE;
/*!40000 ALTER TABLE `pendaftaranppdb` DISABLE KEYS */;
/*!40000 ALTER TABLE `pendaftaranppdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pengaturanppdb`
--

DROP TABLE IF EXISTS `pengaturanppdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pengaturanppdb` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tahunAjaran` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '2026/2027',
  `kodeSurat` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PPDB/SKL',
  `tempatPenerbitan` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `namaKetuaPanitia` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nipKetuaPanitia` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `namaKepalaMadrasah` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nipKepalaMadrasah` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `catatanSurat` text COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pengaturanppdb`
--

LOCK TABLES `pengaturanppdb` WRITE;
/*!40000 ALTER TABLE `pengaturanppdb` DISABLE KEYS */;
INSERT INTO `pengaturanppdb` VALUES ('cfg-ppdb-001','2026/2027','SPMB/MTSNW-PND','Pendem','Panitia SPMB',NULL,'Kepala MTs NW Pendem',NULL,NULL,'2026-10-29 19:16:17.000','2026-10-29 19:16:17.000');
/*!40000 ALTER TABLE `pengaturanppdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pengumuman`
--

DROP TABLE IF EXISTS `pengumuman`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pengumuman` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judul` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `konten` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `fileUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pengumuman_slug_key` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pengumuman`
--

LOCK TABLES `pengumuman` WRITE;
/*!40000 ALTER TABLE `pengumuman` DISABLE KEYS */;
/*!40000 ALTER TABLE `pengumuman` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pesankontak`
--

DROP TABLE IF EXISTS `pesankontak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pesankontak` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subjek` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pesan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isRead` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pesankontak`
--

LOCK TABLES `pesankontak` WRITE;
/*!40000 ALTER TABLE `pesankontak` DISABLE KEYS */;
/*!40000 ALTER TABLE `pesankontak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestasi`
--

DROP TABLE IF EXISTS `prestasi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestasi` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judul` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `peraih` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tingkat` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Sekolah',
  `juara` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tahun` int NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `gambar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `prestasi_tahun_idx` (`tahun`),
  KEY `prestasi_tingkat_idx` (`tingkat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestasi`
--

LOCK TABLES `prestasi` WRITE;
/*!40000 ALTER TABLE `prestasi` DISABLE KEYS */;
/*!40000 ALTER TABLE `prestasi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profilsekolah`
--

DROP TABLE IF EXISTS `profilsekolah`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profilsekolah` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `namaSekolah` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MA Negeri 1 Contoh',
  `npsn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
  `akreditasi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'A',
  `tagline` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telepon` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `whatsapp` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mapsUrl` text COLLATE utf8mb4_unicode_ci,
  `visi` text COLLATE utf8mb4_unicode_ci,
  `misi` json DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `sejarah` text COLLATE utf8mb4_unicode_ci,
  `rdmUrl` text COLLATE utf8mb4_unicode_ci,
  `rdmKeterangan` text COLLATE utf8mb4_unicode_ci,
  `rdmAktif` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profilsekolah`
--

LOCK TABLES `profilsekolah` WRITE;
/*!40000 ALTER TABLE `profilsekolah` DISABLE KEYS */;
INSERT INTO `profilsekolah` VALUES ('prof-mtsnw-pendem-001','MTSS NW PENDEM','50222811','B','Mewujudkan Generasi Islami, Cerdas, dan Berprestasi','','logo-1793277525691-25056823.webp','banner-1793318390107-678753624.webp','Jl. Pendidikan No. 01, Pendem, Lombok Tengah, Nusa Tenggara Barat','nwpendem@gmail.com','','081952526820','https://maps.app.goo.gl/RskqrhPGRfQPxKHY8','Terbentuknya generasi muslim yang Berilmu, Beramal Sholeh, Berakhlak, Terampil, Kreatif, Mandiri dan Bertanggung ‎Jawab dalam Beragama, Berbangsa dan Bernegara.‎','[\"Menyelenggarakan pendidikan umum dan agama yang mengedepankan peningkatan kualitas guru dan siswa dalam bidang IPTEK dan IMTAQ.\", \"Mengembangkan dan mengamalkan nilai-nilai Akhlak karimah yang sesuai dengan ajaran Islam dalam kehidupan sehari-hari.\", \"Membina dan mengembangkan potensi siswa sehingga mampu terampil dan kreatif dalam menghadapi tuntutan zaman, inovatif dan mandiri dalam bidang sosial keagamaan, budaya, berbangsa da bernegara.\", \"Meningkatkan kebiasaan berperilaku disiplin dan bertanggung jawab dalam kehidupan bermasyarakat baik dalam lingkungan keluarga, madrasah, maupun masyarakat.5. Menerapkan manajemen berbasis madrasah\"]','2026-10-29 19:16:17.000','2026-10-30 05:39:44.315','MTs NW Pendem didirikan sebagai wujud kepedulian para tokoh agama, tokoh masyarakat, dan pengurus Nahdlatul Wathan (NW) terhadap pentingnya akses pendidikan Islam yang berkualitas bagi generasi muda di wilayah Pendem dan sekitarnya.\n\nBerdiri di bawah naungan organisasi Nahdlatul Wathan, madrasah ini mengawali perjalanannya dari keterbatasan fasilitas yang dibangun secara swadaya oleh masyarakat lokal. Kehadirannya dirancang untuk menjawab kebutuhan pendidikan formal tingkat menengah pertama yang memadukan kurikulum nasional dan pendidikan keagamaan berlandaskan nilai-nilai Ahlussunnah wal Jama\'ah.\n\nSeiring berjalannya waktu, MTs NW Pendem terus mengalami perkembangan pesat melalui penataan manajemen, peningkatan sarana-prasarana, serta pembenahan kualitas tenaga pendidik. Kini, MTs NW Pendem terus eksis sebagai lembaga pendidikan yang dipercaya masyarakat dalam mencetak generasi muslim yang cerdas, berakhlak mulia, dan berdaya saing.','https://rdm-mtsnwpendem.rasmantech.web.id/',NULL,1);
/*!40000 ALTER TABLE `profilsekolah` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strukturorganisasi`
--

DROP TABLE IF EXISTS `strukturorganisasi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `strukturorganisasi` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jabatan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `urutan` int NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strukturorganisasi`
--

LOCK TABLES `strukturorganisasi` WRITE;
/*!40000 ALTER TABLE `strukturorganisasi` DISABLE KEYS */;
INSERT INTO `strukturorganisasi` VALUES ('037568cb-67a7-4fde-a385-65162d287e42','HUSNIATUN','WALI KELAS 8A','img-1793295517286-767578452.webp',17,'2026-10-29 17:38:37.397','2026-10-29 17:38:37.397'),('0f0495f8-5da1-470f-9771-a07beb451c8e','KHAIRIL ANWAR, S.PD','WAKA KURIKULUM','img-1793295712688-687471308.webp',1,'2026-10-29 13:00:30.971','2026-10-29 17:41:52.796'),('0ff06a2c-fb60-4108-b5d2-199bdc432292','H. SAMSUDIN, ST','KEPALA MADRASAH','img-1793278595485-306007248.webp',0,'2026-10-29 12:56:35.686','2026-10-29 12:56:35.686'),('2743fa3a-a10d-4b4f-9783-5c6670430cfc','MARZOAN, S.AG','GURU QURDIS','img-1793294373649-924230673.webp',8,'2026-10-29 13:04:06.819','2026-10-29 17:19:33.752'),('2c488433-7958-4450-a8a7-2897f79e7210','H. SAHRIYANTO, S.PD','WAKA KESISWAAN','img-1793295444739-143006821.webp',2,'2026-10-29 13:01:01.396','2026-10-29 17:37:24.842'),('30162022-2da7-45a2-a91d-c0c14e6b7386','KHAIRIL ANWAR, S.PD','GURU BAHASA INGGRIS','img-1793295758348-970126817.webp',18,'2026-10-29 17:42:38.444','2026-10-29 17:42:38.444'),('78439cd2-5b09-424d-be01-f4b1bf0dd9ca','ABD. MAJID, M.ED','GURU BK','img-1793294087047-172484824.webp',15,'2026-10-29 17:14:47.145','2026-10-29 17:14:47.145'),('7c4c7ec6-0949-48b0-89de-ba0b56468ec8','AHMAD IRAWADI, S.PD','GURU PERNJAS','img-1793293945523-553037936.webp',14,'2026-10-29 17:12:25.647','2026-10-29 17:12:25.647'),('8145d0c4-10e2-4985-a3f4-46119a3bb7c1','KAMARUDDIN, S.PD.I','GURU BAHASA ARAB','img-1793279147573-849678642.webp',9,'2026-10-29 13:05:48.024','2026-10-29 17:10:58.836'),('98cf2601-2c4f-4569-b049-088567c851b5','ROPITA EKWATI, S.PD','KEPALA LAB KOMPUTER','img-1793295376385-370854892.webp',12,'2026-10-29 17:09:32.917','2026-10-29 17:36:16.511'),('9a5c9621-bfc8-4fa5-82b3-93f0095c7803','HJ. LILI PITRIANA, S.PD','KEPALA PERPUSTAKAAN','img-1793295346809-324783893.webp',10,'2026-10-29 17:08:23.483','2026-10-29 17:35:46.929'),('9be5d563-d704-41a9-9af9-636fd2db295d','ABD. MAJID, M.ED','WAKA HUMAS','img-1793294055231-259351635.webp',3,'2026-10-29 13:01:42.335','2026-10-29 17:14:15.338'),('ab08ab27-dd6d-43ee-8e86-16942228ae87','H. SAHRIYANTO, S.PD','GURU MATEMATIKA','img-1793294496552-124442794.webp',16,'2026-10-29 17:21:36.669','2026-10-29 17:21:36.669'),('afdde8eb-2187-482a-b2ef-4ddd18f105f0','SAOPI AHYADI, S.PD','GURU SKI','img-1793293823595-60010356.webp',13,'2026-10-29 17:10:23.679','2026-10-29 17:11:08.348'),('cb589e80-a3a2-48ac-8eb1-58b78929cfa6','HIDAYATI NINGISH, S.PD','KEPALA LAB IPA','img-1793294294949-137351521.webp',11,'2026-10-29 17:09:16.594','2026-10-29 17:18:15.049'),('d13cd4a6-bbf3-4e16-a8e0-980dc790e943','AHMAD IRAWADI','KEPALA TATA USAHA','img-1793294016117-991223037.webp',4,'2026-10-29 13:02:11.170','2026-10-29 17:45:44.633'),('d1b0b22c-c2da-4c12-90b4-7dd036c8e402','AHMAD IRAWADI, S.PD','WALI KELAS 7B',NULL,7,'2026-10-29 13:03:45.528','2026-10-29 13:03:45.528'),('e34fd5ca-d9f4-415b-9fcb-c8bca5da0ff4','SAOPI AHYADI, S.PD.I','WALI KELAS 7A','img-1793279012245-210234833.webp',6,'2026-10-29 13:03:32.429','2026-10-29 13:03:32.429'),('e85486f9-6c28-4612-822d-fbd76c43b562','RASMAN JULIADI','OPERATOR','img-1793295936989-298648674.webp',16,'2026-10-29 17:32:40.726','2026-10-29 17:45:37.104');
/*!40000 ALTER TABLE `strukturorganisasi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unduhan`
--

DROP TABLE IF EXISTS `unduhan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unduhan` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judul` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `kategori` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Umum',
  `fileUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `namaFile` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipeFile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ukuran` int DEFAULT NULL,
  `jumlahUnduhan` int NOT NULL DEFAULT '0',
  `isPublished` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `unduhan_kategori_idx` (`kategori`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unduhan`
--

LOCK TABLES `unduhan` WRITE;
/*!40000 ALTER TABLE `unduhan` DISABLE KEYS */;
/*!40000 ALTER TABLE `unduhan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('ADMIN','GURU','SISWA','ORANG_TUA','CALON_PENDAFTAR') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CALON_PENDAFTAR',
  `isVerified` tinyint(1) NOT NULL DEFAULT '0',
  `emailToken` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `foto` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('8a138b8b-417d-4c1d-92ac-4071b2f5e8a0','rasmanassasaqi93@gmail.com','$2b$10$vhOgahl5dgFZAlkguTxr6.gdP3GAMwGuNClrBtH/peBaGYLkhrQje','ADMIN',0,NULL,'2026-10-29 12:23:46.983','2026-10-29 12:39:16.283','img-1793277556074-703257482.webp'),('933b689c-d188-4548-a1c7-56b9c9645154','rasmanassasaqi@gmail.com','$2b$10$kY3kUT.BQoQK3/QlH9Ybt.7YwXMBy8OVmzrtAYPW7jjJ.gSjQ9aRq','ADMIN',0,NULL,'2026-10-29 12:42:43.675','2026-10-30 04:24:53.416','img-1793334293200-964414637.webp');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-30 13:58:03
