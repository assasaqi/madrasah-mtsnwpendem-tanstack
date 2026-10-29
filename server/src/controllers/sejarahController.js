const { z } = require('zod');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const sejarahSchema = z.object({
  sejarah: z.string().trim().max(10000, 'Sejarah maksimal 10000 karakter.').optional().default('')
});

// Mengambil narasi sejarah singkat madrasah untuk admin
exports.getSejarah = catchAsync(async (req, res) => {
  const profil = await prisma.profilSekolah.findFirst();
  res.status(200).json({ success: true, data: { sejarah: profil?.sejarah || '' } });
});

// Menyimpan narasi sejarah singkat madrasah
exports.updateSejarah = catchAsync(async (req, res) => {
  const parsed = sejarahSchema.safeParse(req.body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const existing = await prisma.profilSekolah.findFirst();
  const data = { sejarah: parsed.data.sejarah };

  const profil = existing
    ? await prisma.profilSekolah.update({ where: { id: existing.id }, data })
    : await prisma.profilSekolah.create({
        data: { namaSekolah: 'MA Negeri 1', npsn: '-', akreditasi: 'A', ...data }
      });

  res.status(200).json({
    success: true,
    message: 'Sejarah singkat berhasil disimpan.',
    data: { sejarah: profil.sejarah }
  });
});
