const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// Mengambil profil sekolah beserta struktur organisasi dan fasilitas untuk halaman publik
exports.getPublicSchoolProfile = catchAsync(async (req, res) => {
  const urutan = [{ urutan: 'asc' }, { createdAt: 'asc' }];

  const [profil, struktur, fasilitas] = await Promise.all([
    prisma.profilSekolah.findFirst().catch((err) => {
      console.error('getPublicSchoolProfile profilSekolah error:', err?.message);
      return null;
    }),
    prisma.strukturOrganisasi.findMany({ orderBy: urutan }).catch(() => []),
    prisma.fasilitas.findMany({ orderBy: urutan }).catch(() => [])
  ]);

  const fallbackData = {
    namaSekolah: 'MTs NW Pendem',
    npsn: '50222811',
    akreditasi: 'B',
    tagline: 'Mewujudkan Generasi Islami, Cerdas, dan Berprestasi',
    struktur: struktur || [],
    fasilitas: fasilitas || []
  };

  res.status(200).json({
    success: true,
    data: profil ? { ...profil, struktur, fasilitas } : fallbackData
  });
});
