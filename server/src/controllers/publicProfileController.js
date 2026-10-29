const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Mengambil profil sekolah beserta struktur organisasi dan fasilitas untuk halaman publik
exports.getPublicSchoolProfile = catchAsync(async (req, res) => {
  const urutan = [{ urutan: 'asc' }, { createdAt: 'asc' }];

  const [profil, struktur, fasilitas] = await Promise.all([
    prisma.profilSekolah.findFirst(),
    prisma.strukturOrganisasi.findMany({ orderBy: urutan }),
    prisma.fasilitas.findMany({ orderBy: urutan })
  ]);

  if (!profil) throw new AppError('Data profil sekolah belum dikonfigurasi.', 404);

  res.status(200).json({ success: true, data: { ...profil, struktur, fasilitas } });
});
