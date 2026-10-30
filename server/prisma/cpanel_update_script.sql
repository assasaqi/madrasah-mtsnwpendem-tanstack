-- ==============================================================
-- SCRIPT UPDATE DATABASE CPANEL (phpMyAdmin)
-- Jalankan script SQL ini di tab 'SQL' phpMyAdmin database cPanel Anda
-- ==============================================================

-- 1. Tambah kolom RDM pada tabel profilSekolah (jika belum ada)
ALTER TABLE `profilSekolah` 
    ADD COLUMN IF NOT EXISTS `rdmUrl` TEXT NULL,
    ADD COLUMN IF NOT EXISTS `rdmKeterangan` TEXT NULL,
    ADD COLUMN IF NOT EXISTS `rdmAktif` BOOLEAN NOT NULL DEFAULT true;

-- 2. Buat tabel fasilitas (jika belum ada)
CREATE TABLE IF NOT EXISTS `fasilitas` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NULL,
    `ikon` VARCHAR(191) NULL DEFAULT 'building',
    `gambar` VARCHAR(191) NULL,
    `urutan` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 3. Buat tabel prestasi (jika belum ada)
CREATE TABLE IF NOT EXISTS `prestasi` (
    `id` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `peraih` VARCHAR(191) NULL,
    `tingkat` VARCHAR(191) NOT NULL DEFAULT 'Sekolah',
    `juara` VARCHAR(191) NULL,
    `tahun` INTEGER NOT NULL,
    `deskripsi` TEXT NULL,
    `gambar` VARCHAR(191) NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    INDEX `prestasi_tahun_idx`(`tahun`),
    INDEX `prestasi_tingkat_idx`(`tingkat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 4. Buat tabel unduhan (jika belum ada)
CREATE TABLE IF NOT EXISTS `unduhan` (
    `id` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NULL,
    `kategori` VARCHAR(191) NOT NULL DEFAULT 'Umum',
    `fileUrl` VARCHAR(191) NOT NULL,
    `namaFile` VARCHAR(191) NOT NULL,
    `tipeFile` VARCHAR(191) NULL,
    `ukuran` INTEGER NULL,
    `jumlahUnduhan` INTEGER NOT NULL DEFAULT 0,
    `isPublished` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    INDEX `unduhan_kategori_idx`(`kategori`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 5. Buat tabel faq (jika belum ada)
CREATE TABLE IF NOT EXISTS `faq` (
    `id` VARCHAR(191) NOT NULL,
    `pertanyaan` TEXT NOT NULL,
    `jawaban` TEXT NOT NULL,
    `kategori` VARCHAR(191) NOT NULL DEFAULT 'Umum',
    `urutan` INTEGER NOT NULL DEFAULT 0,
    `isPublished` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    INDEX `faq_kategori_idx`(`kategori`),
    INDEX `faq_urutan_idx`(`urutan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 6. Hapus tabel lama yang tidak digunakan
DROP TABLE IF EXISTS `absensi`;
DROP TABLE IF EXISTS `nilai`;
DROP TABLE IF EXISTS `tahfidz`;
DROP TABLE IF EXISTS `kelas`;
DROP TABLE IF EXISTS `siswa`;
DROP TABLE IF EXISTS `guru`;
DROP TABLE IF EXISTS `orangtua`;
DROP TABLE IF EXISTS `matapelajaran`;
DROP TABLE IF EXISTS `tahunajaran`;
