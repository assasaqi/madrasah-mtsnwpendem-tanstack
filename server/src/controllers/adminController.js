const { z } = require('zod');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { getPengaturanPPDB } = require('../utils/pengaturanPPDB');

const STATUS_VALID = ['BELUM_ISI', 'DITINJAU', 'LULUS_ADMINISTRASI', 'TIDAK_LULUS', 'LULUS_FINAL'];

const statusSchema = z.object({
  status: z.enum(STATUS_VALID, { message: 'Status pendaftaran tidak valid.' }),
  catatan: z.string().trim().max(2000, 'Catatan maksimal 2000 karakter.').optional().nullable()
});

const pengaturanSuratSchema = z.object({
  tahunAjaran: z.string().trim().min(4, 'Tahun ajaran wajib diisi.').max(20),
  kodeSurat: z.string().trim().min(2, 'Kode surat wajib diisi.').max(40),
  tempatPenerbitan: z.string().trim().max(80).optional().default(''),
  namaKetuaPanitia: z.string().trim().max(120).optional().default(''),
  nipKetuaPanitia: z.string().trim().max(40).optional().default(''),
  namaKepalaMadrasah: z.string().trim().max(120).optional().default(''),
  nipKepalaMadrasah: z.string().trim().max(40).optional().default(''),
  catatanSurat: z.string().trim().max(1000).optional().default('')
});


// Mengambil seluruh data pendaftar untuk dashboard admin
exports.getAllPendaftar = catchAsync(async (req, res) => {
  const pendaftar = await prisma.pendaftaranPPDB.findMany({
    include: {
      user: { select: { email: true, createdAt: true } },
      biodata: true,
      orangTua: true,
      dokumen: true
    },
    orderBy: { createdAt: 'desc' }
  });

  res.status(200).json({ success: true, data: pendaftar });
});

// Memperbarui status seleksi dan catatan verifikator pendaftar
exports.updateStatusPendaftaran = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsed = statusSchema.safeParse(req.body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const existing = await prisma.pendaftaranPPDB.findUnique({ where: { id } });
  if (!existing) throw new AppError('Data pendaftaran tidak ditemukan.', 404);

  const pendaftaran = await prisma.pendaftaranPPDB.update({
    where: { id },
    data: {
      status: parsed.data.status,
      catatan: parsed.data.catatan || null
    }
  });

  res.status(200).json({ success: true, message: 'Status pendaftaran berhasil diperbarui.', data: pendaftaran });
});

// Menandai satu dokumen pendaftar sebagai terverifikasi atau belum
exports.verifyDokumen = catchAsync(async (req, res) => {
  const { dokumenId } = req.params;
  const isVerified = req.body?.isVerified === undefined ? true : req.body.isVerified === true || req.body.isVerified === 'true';

  const dokumen = await prisma.dokumenPPDB.findUnique({ where: { id: dokumenId } });
  if (!dokumen) throw new AppError('Dokumen tidak ditemukan.', 404);

  const updated = await prisma.dokumenPPDB.update({
    where: { id: dokumenId },
    data: { isVerified }
  });

  res.status(200).json({ success: true, message: 'Status verifikasi dokumen berhasil diperbarui.', data: updated });
});

// Mengambil seluruh pesan kontak yang dikirim pengunjung
exports.getPesanKontak = catchAsync(async (req, res) => {
  const pesan = await prisma.pesanKontak.findMany({ orderBy: { createdAt: 'desc' } });
  res.status(200).json({ success: true, data: pesan });
});

// Menandai pesan kontak sudah dibaca atau belum
exports.markPesanRead = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.pesanKontak.findUnique({ where: { id } });
  if (!existing) throw new AppError('Pesan kontak tidak ditemukan.', 404);

  const isRead = req.body?.isRead === undefined ? true : req.body.isRead === true || req.body.isRead === 'true';
  const pesan = await prisma.pesanKontak.update({ where: { id }, data: { isRead } });

  res.status(200).json({ success: true, message: 'Status pesan berhasil diperbarui.', data: pesan });
});

// Menghapus satu pesan kontak
exports.deletePesanKontak = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.pesanKontak.findUnique({ where: { id } });
  if (!existing) throw new AppError('Pesan kontak tidak ditemukan.', 404);

  await prisma.pesanKontak.delete({ where: { id } });
  res.status(200).json({ success: true, message: 'Pesan kontak berhasil dihapus.' });
});

// Mengambil pengaturan surat keterangan lulus PPDB
exports.getPengaturanSurat = catchAsync(async (req, res) => {
  const pengaturan = await getPengaturanPPDB();
  res.status(200).json({ success: true, data: pengaturan });
});

// Menyimpan pengaturan surat keterangan lulus PPDB (satu baris pengaturan)
exports.updatePengaturanSurat = catchAsync(async (req, res) => {
  const parsed = pengaturanSuratSchema.safeParse(req.body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const data = {
    tahunAjaran: parsed.data.tahunAjaran,
    kodeSurat: parsed.data.kodeSurat,
    tempatPenerbitan: parsed.data.tempatPenerbitan || null,
    namaKetuaPanitia: parsed.data.namaKetuaPanitia || null,
    nipKetuaPanitia: parsed.data.nipKetuaPanitia || null,
    namaKepalaMadrasah: parsed.data.namaKepalaMadrasah || null,
    nipKepalaMadrasah: parsed.data.nipKepalaMadrasah || null,
    catatanSurat: parsed.data.catatanSurat || null
  };

  const existing = await prisma.pengaturanPPDB.findFirst();
  const pengaturan = existing
    ? await prisma.pengaturanPPDB.update({ where: { id: existing.id }, data })
    : await prisma.pengaturanPPDB.create({ data });

  res.status(200).json({
    success: true,
    message: 'Pengaturan surat berhasil disimpan.',
    data: { ...pengaturan, bawaan: false }
  });
});
