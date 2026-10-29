-- AlterTable
ALTER TABLE `pendaftaranPpdb` ADD COLUMN `catatan` TEXT NULL;

-- AlterTable
ALTER TABLE `profilSekolah` MODIFY `npsn` VARCHAR(191) NOT NULL DEFAULT '-';
