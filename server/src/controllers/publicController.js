const { z } = require('zod');
const path = require('path');
const fs = require('fs');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const contactSchema = z.object({
  nama: z.string().trim().min(2, 'Nama minimal 2 karakter.').max(100),
  email: z.string().trim().toLowerCase().email('Format email tidak valid.'),
  subjek: z.string().trim().min(3, 'Subjek minimal 3 karakter.').max(150),
  pesan: z.string().trim().min(5, 'Pesan minimal 5 karakter.')
});

// Mengambil ringkasan beranda publik
exports.getHomeData = catchAsync(async (req, res) => {
  const [
    latestNews,
    announcementsRaw,
    totalSiswa,
    totalGuru,
    totalGaleri,
    totalPengumuman,
    schoolProfile,
    fasilitas
  ] = await Promise.all([
    prisma.berita.findMany({
      where: { isPublished: true },
      take: 6,
      orderBy: { createdAt: 'desc' },
      include: { kategori: { select: { id: true, nama: true, slug: true } } }
    }),
    prisma.pengumuman.findMany({
      where: { isPublished: true },
      take: 6,
      orderBy: { createdAt: 'desc' }
    }),
    prisma.siswa.count(),
    prisma.guru.count(),
    prisma.galeri.count(),
    prisma.pengumuman.count({ where: { isPublished: true } }),
    prisma.profilSekolah.findFirst(),
    prisma.fasilitas.findMany({ orderBy: [{ urutan: 'asc' }, { createdAt: 'asc' }] })
  ]);

  const announcements = announcementsRaw.map((item) => ({
    ...item,
    title: item.judul,
    isi: item.konten,
    date: new Date(item.createdAt).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }));

  res.status(200).json({
    success: true,
    stats: {
      totalSiswa,
      totalGuru,
      totalGaleri,
      totalPengumuman,
      akreditasi: schoolProfile?.akreditasi || null
    },
    latestNews,
    announcements,
    fasilitas,
    schoolProfile
  });
});

// Mengambil daftar berita publik dengan filter kategori dan paginasi
exports.getBerita = catchAsync(async (req, res) => {
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 10));
  const skip = (page - 1) * limit;
  const { kategoriId, kategori } = req.query;

  const where = { isPublished: true };

  if (kategoriId && kategoriId !== 'Semua') {
    where.kategoriId = String(kategoriId);
  } else if (kategori && kategori !== 'Semua') {
    where.kategori = {
      is: {
        OR: [
          { id: String(kategori) },
          { nama: String(kategori) },
          { slug: String(kategori) }
        ]
      }
    };
  }

  const [items, total] = await Promise.all([
    prisma.berita.findMany({
      where,
      take: limit,
      skip,
      orderBy: { createdAt: 'desc' },
      include: { kategori: { select: { id: true, nama: true, slug: true } } }
    }),
    prisma.berita.count({ where })
  ]);

  res.status(200).json({
    success: true,
    data: items,
    meta: { page, limit, total, totalPages: Math.ceil(total / limit) }
  });
});

// Mengambil detail berita berdasarkan ID atau slug
exports.getBeritaDetail = catchAsync(async (req, res) => {
  const identifier = String(req.params.id);

  const berita = await prisma.berita.findFirst({
    where: {
      isPublished: true,
      OR: [{ slug: identifier }, { id: identifier }]
    },
    include: {
      kategori: { select: { id: true, nama: true, slug: true } },
      author: { select: { id: true, email: true } }
    }
  });

  if (!berita) throw new AppError('Artikel berita tidak ditemukan.', 404);

  res.status(200).json({ success: true, data: berita });
});

// Mengambil seluruh kategori berita publik
exports.getKategori = catchAsync(async (req, res) => {
  const kategori = await prisma.kategoriBerita.findMany({ orderBy: { nama: 'asc' } });
  res.status(200).json({ success: true, data: kategori });
});

// Mengambil seluruh pengumuman publik yang sudah terbit
exports.getPengumuman = catchAsync(async (req, res) => {
  const announcements = await prisma.pengumuman.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: 'desc' }
  });

  res.status(200).json({
    success: true,
    data: announcements.map((item) => ({ ...item, isi: item.konten }))
  });
});

// Mengambil detail pengumuman berdasarkan ID atau slug
exports.getPengumumanDetail = catchAsync(async (req, res) => {
  const identifier = String(req.params.id);

  const pengumuman = await prisma.pengumuman.findFirst({
    where: {
      isPublished: true,
      OR: [{ slug: identifier }, { id: identifier }]
    }
  });

  if (!pengumuman) throw new AppError('Pengumuman tidak ditemukan atau belum dipublikasikan.', 404);

  res.status(200).json({
    success: true,
    data: { ...pengumuman, isi: pengumuman.konten }
  });
});

// Mengambil data galeri publik dengan filter kategori
exports.getGaleri = catchAsync(async (req, res) => {
  const { kategori } = req.query;
  const where = kategori && kategori !== 'Semua' ? { kategori: String(kategori) } : {};

  const galeri = await prisma.galeri.findMany({
    where,
    orderBy: { createdAt: 'desc' }
  });

  res.status(200).json({ success: true, data: galeri });
});

// Mengambil agenda kegiatan publik yang sudah diterbitkan
exports.getAgenda = catchAsync(async (req, res) => {
  const agenda = await prisma.agenda.findMany({
    where: { isPublished: true },
    orderBy: [{ mulai: 'asc' }, { createdAt: 'asc' }]
  });

  res.status(200).json({ success: true, data: agenda });
});

// Mengambil daftar prestasi publik yang sudah diterbitkan
exports.getPrestasi = catchAsync(async (req, res) => {
  const { tingkat } = req.query;
  const where = {
    isPublished: true,
    ...(tingkat && tingkat !== 'Semua' ? { tingkat: String(tingkat) } : {})
  };

  const prestasi = await prisma.prestasi.findMany({
    where,
    orderBy: [{ tahun: 'desc' }, { createdAt: 'desc' }]
  });

  res.status(200).json({ success: true, data: prestasi });
});

// Mengambil berkas pusat unduhan publik yang sudah diterbitkan
exports.getUnduhan = catchAsync(async (req, res) => {
  const { kategori } = req.query;
  const where = {
    isPublished: true,
    ...(kategori && kategori !== 'Semua' ? { kategori: String(kategori) } : {})
  };

  const unduhan = await prisma.unduhan.findMany({
    where,
    orderBy: [{ kategori: 'asc' }, { createdAt: 'desc' }]
  });

  res.status(200).json({ success: true, data: unduhan });
});

// Mengunduh berkas publik sekaligus mencatat jumlah unduhan
exports.downloadUnduhan = catchAsync(async (req, res) => {
  const unduhan = await prisma.unduhan.findFirst({
    where: { id: String(req.params.id), isPublished: true }
  });

  if (!unduhan) throw new AppError('Berkas unduhan tidak ditemukan.', 404);

  const filePath = path.join(__dirname, '../../uploads', path.basename(unduhan.fileUrl));
  if (!fs.existsSync(filePath)) {
    throw new AppError('Berkas unduhan tidak tersedia di server.', 404);
  }

  await prisma.unduhan.update({
    where: { id: unduhan.id },
    data: { jumlahUnduhan: { increment: 1 } }
  });

  res.download(filePath, unduhan.namaFile || path.basename(filePath));
});

// Mengambil daftar pertanyaan umum publik yang sudah diterbitkan
exports.getFaq = catchAsync(async (req, res) => {
  const faq = await prisma.faq.findMany({
    where: { isPublished: true },
    orderBy: [{ urutan: 'asc' }, { createdAt: 'asc' }]
  });

  res.status(200).json({ success: true, data: faq });
});

// Menyimpan pesan kontak pengunjung
exports.submitKontak = catchAsync(async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const newMessage = await prisma.pesanKontak.create({ data: parsed.data });

  res.status(201).json({
    success: true,
    message: 'Pesan Anda berhasil dikirimkan ke pihak madrasah.',
    data: newMessage
  });
});
