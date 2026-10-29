-- CreateTable
CREATE TABLE `pengaturanPpdb` (
    `id` VARCHAR(191) NOT NULL,
    `tahunAjaran` VARCHAR(191) NOT NULL DEFAULT '2026/2027',
    `kodeSurat` VARCHAR(191) NOT NULL DEFAULT 'PPDB/SKL',
    `tempatPenerbitan` VARCHAR(191) NULL,
    `namaKetuaPanitia` VARCHAR(191) NULL,
    `nipKetuaPanitia` VARCHAR(191) NULL,
    `namaKepalaMadrasah` VARCHAR(191) NULL,
    `nipKepalaMadrasah` VARCHAR(191) NULL,
    `catatanSurat` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
