-- AlterTable
ALTER TABLE `profilSekolah` 
    ADD COLUMN `rdmUrl` TEXT NULL,
    ADD COLUMN `rdmKeterangan` TEXT NULL,
    ADD COLUMN `rdmAktif` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `pengaturanPpdb` MODIFY `kodeSurat` VARCHAR(191) NOT NULL DEFAULT 'SPMB/SKL';

-- DropLegacyTables
DROP TABLE IF EXISTS `absensi`;
DROP TABLE IF EXISTS `nilai`;
DROP TABLE IF EXISTS `tahfidz`;
DROP TABLE IF EXISTS `kelas`;
DROP TABLE IF EXISTS `siswa`;
DROP TABLE IF EXISTS `guru`;
DROP TABLE IF EXISTS `orangtua`;
DROP TABLE IF EXISTS `matapelajaran`;
DROP TABLE IF EXISTS `tahunajaran`;

