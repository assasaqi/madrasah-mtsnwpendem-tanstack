-- CreateTable
CREATE TABLE `agenda` (
    `id` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `lokasi` VARCHAR(191) NULL,
    `mulai` DATETIME(3) NOT NULL,
    `selesai` DATETIME(3) NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `agenda_slug_key`(`slug`),
    INDEX `agenda_mulai_idx`(`mulai`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prestasi` (
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

-- CreateTable
CREATE TABLE `unduhan` (
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

-- CreateTable
CREATE TABLE `faq` (
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
