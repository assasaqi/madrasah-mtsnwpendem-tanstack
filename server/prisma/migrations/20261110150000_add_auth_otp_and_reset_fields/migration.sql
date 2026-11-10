-- AlterTable
ALTER TABLE `users`
    ADD COLUMN `nama` VARCHAR(191) NULL,
    ADD COLUMN `emailOtp` VARCHAR(191) NULL,
    ADD COLUMN `emailOtpExpires` DATETIME(3) NULL,
    ADD COLUMN `emailOtpAttempts` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `resetToken` VARCHAR(191) NULL,
    ADD COLUMN `resetTokenExpires` DATETIME(3) NULL;
