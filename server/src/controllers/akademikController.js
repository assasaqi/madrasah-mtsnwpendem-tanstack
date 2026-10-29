const { z } = require('zod');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const tahfidzSchema = z.object({
  siswaId: z.string().min(1, 'Siswa wajib dipilih.'),
  surah: z.string().trim().min(2, 'Nama surah wajib diisi.'),
  ayatMulai: z.coerce.number().int().min(1, 'Ayat mulai minimal 1.'),
  ayatSelesai: z.coerce.number().int().min(1, 'Ayat selesai minimal 1.'),
  predikat: z.enum(['MUMTAZ', 'JAYYID_JIDDAN', 'JAYYID', 'MAQBUL'], { message: 'Predikat tidak valid.' }),
  catatan: z.string().trim().max(1000, 'Catatan maksimal 1000 karakter.').optional().nullable()
});

// Mencatat setoran hafalan tahfidz oleh guru
exports.inputTahfidz = catchAsync(async (req, res) => {
  const parsed = tahfidzSchema.safeParse(req.body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const guru = await prisma.guru.findUnique({ where: { userId: req.user.id } });
  if (!guru) throw new AppError('Profil Guru tidak ditemukan.', 403);

  if (parsed.data.ayatSelesai < parsed.data.ayatMulai) {
    throw new AppError('Ayat selesai tidak boleh lebih kecil dari ayat mulai.', 400);
  }

  const record = await prisma.tahfidz.create({
    data: {
      siswaId: parsed.data.siswaId,
      surah: parsed.data.surah,
      ayatMulai: parsed.data.ayatMulai,
      ayatSelesai: parsed.data.ayatSelesai,
      predikat: parsed.data.predikat,
      catatan: parsed.data.catatan || null,
      pembimbingId: guru.id
    }
  });

  res.status(201).json({ success: true, message: 'Setoran hafalan berhasil dicatat.', data: record });
});

// Menampilkan rekap hafalan tahfidz seorang siswa
exports.getRekapTahfidz = catchAsync(async (req, res) => {
  const { siswaId } = req.params;

  const siswa = await prisma.siswa.findUnique({ where: { id: siswaId } });
  if (!siswa) throw new AppError('Data siswa tidak ditemukan.', 404);

  const records = await prisma.tahfidz.findMany({
    where: { siswaId },
    orderBy: { tanggal: 'desc' },
    include: { pembimbing: { select: { namaLengkap: true } } }
  });

  res.status(200).json({ success: true, data: records });
});
