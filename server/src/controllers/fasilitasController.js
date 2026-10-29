const { z } = require('zod');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { deleteFile } = require('../middleware/upload');

const IKON_VALID = ['building', 'monitor', 'library', 'compass', 'sparkles', 'award'];

const fasilitasSchema = z.object({
  nama: z.string().trim().min(2, 'Nama fasilitas minimal 2 karakter.').max(120, 'Nama fasilitas maksimal 120 karakter.'),
  deskripsi: z.string().trim().max(1000, 'Deskripsi maksimal 1000 karakter.').optional().default(''),
  ikon: z.enum(IKON_VALID, { message: 'Ikon fasilitas tidak valid.' }).optional().default('building'),
  urutan: z.coerce.number().int('Urutan harus berupa angka.').min(0).max(999).optional().default(0)
});

// Memvalidasi isi formulir fasilitas
const parseBody = (body) => {
  const parsed = fasilitasSchema.safeParse(body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);
  return parsed.data;
};

// Mengambil seluruh data fasilitas untuk admin
exports.getAllFasilitas = catchAsync(async (req, res) => {
  const fasilitas = await prisma.fasilitas.findMany({
    orderBy: [{ urutan: 'asc' }, { createdAt: 'asc' }]
  });
  res.status(200).json({ success: true, data: fasilitas });
});

// Menambahkan data fasilitas baru
exports.createFasilitas = catchAsync(async (req, res) => {
  const data = parseBody(req.body);

  const fasilitas = await prisma.fasilitas.create({
    data: { ...data, gambar: req.file ? req.file.filename : null }
  });

  res.status(201).json({ success: true, message: 'Fasilitas berhasil ditambahkan.', data: fasilitas });
});

// Memperbarui data fasilitas beserta gambarnya
exports.updateFasilitas = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.fasilitas.findUnique({ where: { id } });
  if (!existing) throw new AppError('Data fasilitas tidak ditemukan.', 404);

  const data = parseBody(req.body);
  if (req.file) {
    if (existing.gambar) deleteFile(existing.gambar);
    data.gambar = req.file.filename;
  }

  const fasilitas = await prisma.fasilitas.update({ where: { id }, data });
  res.status(200).json({ success: true, message: 'Fasilitas berhasil diperbarui.', data: fasilitas });
});

// Menghapus data fasilitas beserta gambarnya
exports.deleteFasilitas = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.fasilitas.findUnique({ where: { id } });
  if (!existing) throw new AppError('Data fasilitas tidak ditemukan.', 404);

  if (existing.gambar) deleteFile(existing.gambar);
  await prisma.fasilitas.delete({ where: { id } });

  res.status(200).json({ success: true, message: 'Fasilitas berhasil dihapus.' });
});
