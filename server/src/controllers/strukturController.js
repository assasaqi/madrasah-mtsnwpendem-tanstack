const { z } = require('zod');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { deleteFile } = require('../middleware/upload');

const strukturSchema = z.object({
  nama: z.string().trim().min(2, 'Nama minimal 2 karakter.').max(100, 'Nama maksimal 100 karakter.'),
  jabatan: z.string().trim().min(2, 'Jabatan minimal 2 karakter.').max(100, 'Jabatan maksimal 100 karakter.'),
  urutan: z.coerce.number().int('Urutan harus berupa angka.').min(0).max(999).optional().default(0)
});

// Memvalidasi isi formulir struktur organisasi
const parseBody = (body) => {
  const parsed = strukturSchema.safeParse(body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);
  return parsed.data;
};

// Mengambil seluruh data struktur organisasi untuk admin
exports.getAllStruktur = catchAsync(async (req, res) => {
  const struktur = await prisma.strukturOrganisasi.findMany({
    orderBy: [{ urutan: 'asc' }, { createdAt: 'asc' }]
  });
  res.status(200).json({ success: true, data: struktur });
});

// Menambahkan data pengurus struktur organisasi
exports.createStruktur = catchAsync(async (req, res) => {
  const data = parseBody(req.body);

  const struktur = await prisma.strukturOrganisasi.create({
    data: { ...data, foto: req.file ? req.file.filename : null }
  });

  res.status(201).json({ success: true, message: 'Data struktur berhasil ditambahkan.', data: struktur });
});

// Memperbarui data pengurus struktur organisasi
exports.updateStruktur = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.strukturOrganisasi.findUnique({ where: { id } });
  if (!existing) throw new AppError('Data struktur tidak ditemukan.', 404);

  const data = parseBody(req.body);
  if (req.file) {
    if (existing.foto) deleteFile(existing.foto);
    data.foto = req.file.filename;
  }

  const struktur = await prisma.strukturOrganisasi.update({ where: { id }, data });
  res.status(200).json({ success: true, message: 'Data struktur berhasil diperbarui.', data: struktur });
});

// Menghapus data pengurus struktur organisasi beserta fotonya
exports.deleteStruktur = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.strukturOrganisasi.findUnique({ where: { id } });
  if (!existing) throw new AppError('Data struktur tidak ditemukan.', 404);

  if (existing.foto) deleteFile(existing.foto);
  await prisma.strukturOrganisasi.delete({ where: { id } });

  res.status(200).json({ success: true, message: 'Data struktur berhasil dihapus.' });
});

// Menyimpan pembaruan urutan seluruh susunan struktur organisasi
exports.reorderStruktur = catchAsync(async (req, res) => {
  const ids = req.body?.ids || [];
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(200).json({ success: true, message: 'Tidak ada urutan yang diubah.' });
  }

  await prisma.$transaction(
    ids.map((id, index) =>
      prisma.strukturOrganisasi.update({
        where: { id },
        data: { urutan: index }
      })
    )
  );

  res.status(200).json({ success: true, message: 'Susunan struktur berhasil disimpan.' });
});
