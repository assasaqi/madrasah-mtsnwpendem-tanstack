const { z } = require('zod');
const path = require('path');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { deleteFile } = require('../middleware/upload');

// Membuat slug ramah URL dari teks judul
const createSlug = (text) => String(text || '')
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

// Menjamin slug unik pada model tertentu
const buildUniqueSlug = async (model, judul, excludeId = null) => {
  const base = createSlug(judul).substring(0, 180) || `konten-${Date.now()}`;
  const where = excludeId ? { slug: base, NOT: { id: excludeId } } : { slug: base };
  const existing = await model.findFirst({ where });
  return existing ? `${base}-${Date.now()}` : base;
};

// Mengubah nilai form multipart menjadi boolean
const toBoolean = (value, fallback = true) => {
  if (value === undefined || value === null || value === '') return fallback;
  if (typeof value === 'boolean') return value;
  return String(value).toLowerCase() === 'true';
};

// Menormalkan kategoriId opsional dari form multipart
const parseKategoriId = (value) => {
  if (value === undefined) return undefined;
  const text = String(value).trim();
  return text && text !== 'null' && text !== 'undefined' ? text : null;
};

const beritaSchema = z.object({
  judul: z.string().trim().min(3, 'Judul berita minimal 3 karakter.').max(200, 'Judul berita maksimal 200 karakter.'),
  konten: z.string().trim().min(10, 'Konten berita minimal 10 karakter.')
});

const pengumumanSchema = z.object({
  judul: z.string().trim().min(3, 'Judul pengumuman minimal 3 karakter.').max(200, 'Judul pengumuman maksimal 200 karakter.'),
  konten: z.string().trim().min(10, 'Konten pengumuman minimal 10 karakter.')
});

const kategoriSchema = z.object({
  nama: z.string().trim().min(2, 'Nama kategori minimal 2 karakter.').max(100, 'Nama kategori maksimal 100 karakter.')
});

const galeriSchema = z.object({
  judul: z.string().trim().min(3, 'Judul galeri minimal 3 karakter.').max(200, 'Judul galeri maksimal 200 karakter.'),
  deskripsi: z.string().trim().max(1000, 'Deskripsi maksimal 1000 karakter.').optional().nullable(),
  kategori: z.string().trim().max(50, 'Kategori maksimal 50 karakter.').optional().nullable()
});

const agendaSchema = z.object({
  judul: z.string().trim().min(3, 'Judul agenda minimal 3 karakter.').max(200, 'Judul agenda maksimal 200 karakter.'),
  deskripsi: z.string().trim().min(10, 'Deskripsi agenda minimal 10 karakter.'),
  lokasi: z.string().trim().max(200, 'Lokasi maksimal 200 karakter.').optional().nullable()
});

const TINGKAT_PRESTASI = ['Sekolah', 'Kecamatan', 'Kabupaten/Kota', 'Provinsi', 'Nasional', 'Internasional'];

const prestasiSchema = z.object({
  judul: z.string().trim().min(3, 'Judul prestasi minimal 3 karakter.').max(200, 'Judul prestasi maksimal 200 karakter.'),
  peraih: z.string().trim().max(200, 'Nama peraih maksimal 200 karakter.').optional().nullable(),
  tingkat: z.enum(TINGKAT_PRESTASI, { message: 'Tingkat prestasi tidak valid.' }),
  juara: z.string().trim().max(100, 'Juara maksimal 100 karakter.').optional().nullable(),
  tahun: z.coerce.number().int().min(1990, 'Tahun minimal 1990.').max(2100, 'Tahun maksimal 2100.'),
  deskripsi: z.string().trim().max(2000, 'Deskripsi maksimal 2000 karakter.').optional().nullable()
});

const unduhanSchema = z.object({
  judul: z.string().trim().min(3, 'Judul dokumen minimal 3 karakter.').max(200, 'Judul dokumen maksimal 200 karakter.'),
  deskripsi: z.string().trim().max(1000, 'Deskripsi maksimal 1000 karakter.').optional().nullable(),
  kategori: z.string().trim().max(50, 'Kategori maksimal 50 karakter.').optional().nullable()
});

const faqSchema = z.object({
  pertanyaan: z.string().trim().min(5, 'Pertanyaan minimal 5 karakter.').max(500, 'Pertanyaan maksimal 500 karakter.'),
  jawaban: z.string().trim().min(10, 'Jawaban minimal 10 karakter.'),
  kategori: z.string().trim().max(50, 'Kategori maksimal 50 karakter.').optional().nullable(),
  urutan: z.coerce.number().int().min(0, 'Urutan minimal 0.').optional()
});

// Mengubah nilai tanggal dari form menjadi objek Date yang valid
const parseDate = (value, label, required = false) => {
  if (value === undefined || value === null || value === '') {
    if (required) throw new AppError(`${label} wajib diisi.`, 400);
    return null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) throw new AppError(`${label} tidak valid.`, 400);
  return date;
};

// Mengambil ekstensi berkas tanpa titik untuk metadata pusat unduhan
const getFileExtension = (filename) => path.extname(String(filename || '')).replace('.', '').toLowerCase() || null;

// Memvalidasi body dengan skema Zod dan melempar pesan pertama
const parseBody = (schema, body) => {
  const parsed = schema.safeParse(body);
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);
  return parsed.data;
};

// Mengambil seluruh berita untuk admin
exports.getAllBerita = catchAsync(async (req, res) => {
  const berita = await prisma.berita.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      kategori: true,
      author: { select: { id: true, email: true } }
    }
  });
  res.status(200).json({ success: true, data: berita });
});

// Membuat berita baru beserta gambar unggahan
exports.createBerita = catchAsync(async (req, res) => {
  const data = parseBody(beritaSchema, req.body || {});
  const authorId = req.user?.id || req.user?.userId;
  if (!authorId) throw new AppError('User pengunggah tidak terautentikasi.', 401);

  const berita = await prisma.berita.create({
    data: {
      judul: data.judul,
      slug: await buildUniqueSlug(prisma.berita, data.judul),
      konten: data.konten,
      isPublished: toBoolean(req.body.isPublished),
      authorId,
      kategoriId: parseKategoriId(req.body.kategoriId) ?? null,
      gambar: req.file ? req.file.filename : null
    },
    include: { kategori: true }
  });

  res.status(201).json({ success: true, message: 'Berita berhasil ditambahkan.', data: berita });
});

// Memperbarui berita dan mengganti gambar lama bila ada
exports.updateBerita = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.berita.findUnique({ where: { id } });
  if (!existing) throw new AppError('Berita tidak ditemukan.', 404);

  const body = req.body || {};
  const payload = {
    ...(body.judul !== undefined && { judul: body.judul.trim() }),
    ...(body.konten !== undefined && { konten: body.konten.trim() }),
    ...(body.isPublished !== undefined && { isPublished: toBoolean(body.isPublished) }),
    ...(body.kategoriId !== undefined && { kategoriId: parseKategoriId(body.kategoriId) })
  };

  if (body.judul !== undefined && body.judul.trim().length < 3) {
    throw new AppError('Judul berita minimal 3 karakter.', 400);
  }
  if (body.konten !== undefined && body.konten.trim().length < 10) {
    throw new AppError('Konten berita minimal 10 karakter.', 400);
  }
  if (payload.judul && payload.judul !== existing.judul) {
    payload.slug = await buildUniqueSlug(prisma.berita, payload.judul, id);
  }
  if (req.file) {
    if (existing.gambar) deleteFile(existing.gambar);
    payload.gambar = req.file.filename;
  }

  const berita = await prisma.berita.update({
    where: { id },
    data: payload,
    include: { kategori: true }
  });

  res.status(200).json({ success: true, message: 'Berita berhasil diperbarui.', data: berita });
});

// Menghapus berita beserta gambar fisiknya
exports.deleteBerita = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.berita.findUnique({ where: { id } });
  if (!existing) throw new AppError('Berita tidak ditemukan.', 404);

  if (existing.gambar) deleteFile(existing.gambar);
  await prisma.berita.delete({ where: { id } });

  res.status(200).json({ success: true, message: 'Berita berhasil dihapus.' });
});

// Mengambil seluruh kategori berita
exports.getAllKategori = catchAsync(async (req, res) => {
  const kategori = await prisma.kategoriBerita.findMany({ orderBy: { nama: 'asc' } });
  res.status(200).json({ success: true, data: kategori });
});

// Membuat kategori berita baru
exports.createKategori = catchAsync(async (req, res) => {
  const { nama } = parseBody(kategoriSchema, req.body || {});
  const slug = await buildUniqueSlug(prisma.kategoriBerita, nama);
  const kategori = await prisma.kategoriBerita.create({ data: { nama, slug } });
  res.status(201).json({ success: true, message: 'Kategori berhasil ditambahkan.', data: kategori });
});

// Memperbarui nama dan slug kategori berita
exports.updateKategori = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { nama } = parseBody(kategoriSchema, req.body || {});
  const existing = await prisma.kategoriBerita.findUnique({ where: { id } });
  if (!existing) throw new AppError('Kategori tidak ditemukan.', 404);

  const kategori = await prisma.kategoriBerita.update({
    where: { id },
    data: { nama, slug: await buildUniqueSlug(prisma.kategoriBerita, nama, id) }
  });
  res.status(200).json({ success: true, message: 'Kategori berhasil diperbarui.', data: kategori });
});

// Menghapus kategori berita yang tidak lagi dipakai
exports.deleteKategori = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.kategoriBerita.findUnique({ where: { id } });
  if (!existing) throw new AppError('Kategori tidak ditemukan.', 404);

  const dipakai = await prisma.berita.count({ where: { kategoriId: id } });
  if (dipakai > 0) throw new AppError('Kategori masih dipakai oleh berita lain.', 400);

  await prisma.kategoriBerita.delete({ where: { id } });
  res.status(200).json({ success: true, message: 'Kategori berhasil dihapus.' });
});

// Mengambil seluruh pengumuman untuk admin
exports.getAllPengumuman = catchAsync(async (req, res) => {
  const pengumuman = await prisma.pengumuman.findMany({ orderBy: { createdAt: 'desc' } });
  res.status(200).json({ success: true, data: pengumuman });
});

// Membuat pengumuman baru beserta lampiran
exports.createPengumuman = catchAsync(async (req, res) => {
  const data = parseBody(pengumumanSchema, req.body || {});
  const pengumuman = await prisma.pengumuman.create({
    data: {
      judul: data.judul,
      slug: await buildUniqueSlug(prisma.pengumuman, data.judul),
      konten: data.konten,
      isPublished: toBoolean(req.body.isPublished),
      fileUrl: req.file ? req.file.filename : null
    }
  });
  res.status(201).json({ success: true, message: 'Pengumuman berhasil dibuat.', data: pengumuman });
});

// Memperbarui pengumuman dan mengganti lampiran lama
exports.updatePengumuman = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.pengumuman.findUnique({ where: { id } });
  if (!existing) throw new AppError('Pengumuman tidak ditemukan.', 404);

  const body = req.body || {};
  const payload = {
    ...(body.judul !== undefined && { judul: body.judul.trim() }),
    ...(body.konten !== undefined && { konten: body.konten.trim() }),
    ...(body.isPublished !== undefined && { isPublished: toBoolean(body.isPublished) })
  };

  if (body.judul !== undefined && body.judul.trim().length < 3) {
    throw new AppError('Judul pengumuman minimal 3 karakter.', 400);
  }
  if (body.konten !== undefined && body.konten.trim().length < 10) {
    throw new AppError('Konten pengumuman minimal 10 karakter.', 400);
  }
  if (payload.judul && payload.judul !== existing.judul) {
    payload.slug = await buildUniqueSlug(prisma.pengumuman, payload.judul, id);
  }
  if (req.file) {
    if (existing.fileUrl) deleteFile(existing.fileUrl);
    payload.fileUrl = req.file.filename;
  }

  const pengumuman = await prisma.pengumuman.update({ where: { id }, data: payload });
  res.status(200).json({ success: true, message: 'Pengumuman berhasil diperbarui.', data: pengumuman });
});

// Menghapus pengumuman beserta lampirannya
exports.deletePengumuman = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.pengumuman.findUnique({ where: { id } });
  if (!existing) throw new AppError('Pengumuman tidak ditemukan.', 404);

  if (existing.fileUrl) deleteFile(existing.fileUrl);
  await prisma.pengumuman.delete({ where: { id } });

  res.status(200).json({ success: true, message: 'Pengumuman berhasil dihapus.' });
});

// Mengambil seluruh foto galeri untuk admin
exports.getAllGaleri = catchAsync(async (req, res) => {
  const galeri = await prisma.galeri.findMany({ orderBy: { createdAt: 'desc' } });
  res.status(200).json({ success: true, data: galeri });
});

// Menambah foto galeri baru
exports.createGaleri = catchAsync(async (req, res) => {
  const data = parseBody(galeriSchema, req.body || {});
  if (!req.file) throw new AppError('Berkas foto galeri wajib diunggah.', 400);

  const galeri = await prisma.galeri.create({
    data: {
      judul: data.judul,
      deskripsi: data.deskripsi || null,
      kategori: data.kategori || null,
      imageUrl: req.file.filename
    }
  });
  res.status(201).json({ success: true, message: 'Foto galeri berhasil ditambahkan.', data: galeri });
});

// Memperbarui data dan foto galeri
exports.updateGaleri = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.galeri.findUnique({ where: { id } });
  if (!existing) throw new AppError('Foto galeri tidak ditemukan.', 404);

  const body = req.body || {};
  const payload = {
    ...(body.judul !== undefined && { judul: body.judul.trim() }),
    ...(body.deskripsi !== undefined && { deskripsi: body.deskripsi || null }),
    ...(body.kategori !== undefined && { kategori: body.kategori || null })
  };

  if (req.file) {
    if (existing.imageUrl) deleteFile(existing.imageUrl);
    payload.imageUrl = req.file.filename;
  }

  const galeri = await prisma.galeri.update({ where: { id }, data: payload });
  res.status(200).json({ success: true, message: 'Foto galeri berhasil diperbarui.', data: galeri });
});

// Menghapus foto galeri beserta berkas fisiknya
exports.deleteGaleri = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.galeri.findUnique({ where: { id } });
  if (!existing) throw new AppError('Foto galeri tidak ditemukan.', 404);

  if (existing.imageUrl) deleteFile(existing.imageUrl);
  await prisma.galeri.delete({ where: { id } });

  res.status(200).json({ success: true, message: 'Foto galeri berhasil dihapus.' });
});

// Mengambil seluruh agenda untuk admin
exports.getAllAgenda = catchAsync(async (req, res) => {
  const agenda = await prisma.agenda.findMany({ orderBy: [{ mulai: 'desc' }, { createdAt: 'desc' }] });
  res.status(200).json({ success: true, data: agenda });
});

// Membuat agenda kegiatan baru
exports.createAgenda = catchAsync(async (req, res) => {
  const data = parseBody(agendaSchema, req.body || {});
  const mulai = parseDate(req.body.mulai, 'Waktu mulai', true);
  const selesai = parseDate(req.body.selesai, 'Waktu selesai');

  if (selesai && selesai < mulai) {
    throw new AppError('Waktu selesai tidak boleh lebih awal dari waktu mulai.', 400);
  }

  const agenda = await prisma.agenda.create({
    data: {
      judul: data.judul,
      slug: await buildUniqueSlug(prisma.agenda, data.judul),
      deskripsi: data.deskripsi,
      lokasi: data.lokasi || null,
      mulai,
      selesai,
      isPublished: toBoolean(req.body.isPublished)
    }
  });

  res.status(201).json({ success: true, message: 'Agenda berhasil ditambahkan.', data: agenda });
});

// Memperbarui agenda kegiatan
exports.updateAgenda = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.agenda.findUnique({ where: { id } });
  if (!existing) throw new AppError('Agenda tidak ditemukan.', 404);

  const body = req.body || {};
  const payload = {};

  if (body.judul !== undefined) {
    const judul = String(body.judul).trim();
    if (judul.length < 3) throw new AppError('Judul agenda minimal 3 karakter.', 400);
    payload.judul = judul;
    if (judul !== existing.judul) payload.slug = await buildUniqueSlug(prisma.agenda, judul, id);
  }
  if (body.deskripsi !== undefined) {
    const deskripsi = String(body.deskripsi).trim();
    if (deskripsi.length < 10) throw new AppError('Deskripsi agenda minimal 10 karakter.', 400);
    payload.deskripsi = deskripsi;
  }
  if (body.lokasi !== undefined) payload.lokasi = String(body.lokasi || '').trim() || null;
  if (body.isPublished !== undefined) payload.isPublished = toBoolean(body.isPublished);

  if (body.mulai !== undefined) payload.mulai = parseDate(body.mulai, 'Waktu mulai', true);
  if (body.selesai !== undefined) payload.selesai = parseDate(body.selesai, 'Waktu selesai');

  const mulai = payload.mulai || existing.mulai;
  const selesai = payload.selesai !== undefined ? payload.selesai : existing.selesai;
  if (selesai && selesai < mulai) {
    throw new AppError('Waktu selesai tidak boleh lebih awal dari waktu mulai.', 400);
  }

  const agenda = await prisma.agenda.update({ where: { id }, data: payload });
  res.status(200).json({ success: true, message: 'Agenda berhasil diperbarui.', data: agenda });
});

// Menghapus agenda kegiatan
exports.deleteAgenda = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.agenda.findUnique({ where: { id } });
  if (!existing) throw new AppError('Agenda tidak ditemukan.', 404);

  await prisma.agenda.delete({ where: { id } });
  res.status(200).json({ success: true, message: 'Agenda berhasil dihapus.' });
});

// Mengambil seluruh prestasi untuk admin
exports.getAllPrestasi = catchAsync(async (req, res) => {
  const prestasi = await prisma.prestasi.findMany({ orderBy: [{ tahun: 'desc' }, { createdAt: 'desc' }] });
  res.status(200).json({ success: true, data: prestasi });
});

// Menambahkan prestasi baru beserta foto dokumentasi
exports.createPrestasi = catchAsync(async (req, res) => {
  const data = parseBody(prestasiSchema, req.body || {});

  const prestasi = await prisma.prestasi.create({
    data: {
      judul: data.judul,
      peraih: data.peraih || null,
      tingkat: data.tingkat,
      juara: data.juara || null,
      tahun: data.tahun,
      deskripsi: data.deskripsi || null,
      gambar: req.file ? req.file.filename : null,
      isPublished: toBoolean(req.body.isPublished)
    }
  });

  res.status(201).json({ success: true, message: 'Prestasi berhasil ditambahkan.', data: prestasi });
});

// Memperbarui prestasi dan mengganti foto lama bila ada
exports.updatePrestasi = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.prestasi.findUnique({ where: { id } });
  if (!existing) throw new AppError('Prestasi tidak ditemukan.', 404);

  const body = req.body || {};
  const payload = { ...parseBody(prestasiSchema.partial(), body) };

  if (body.isPublished !== undefined) payload.isPublished = toBoolean(body.isPublished);
  if (payload.peraih !== undefined) payload.peraih = payload.peraih || null;
  if (payload.juara !== undefined) payload.juara = payload.juara || null;
  if (payload.deskripsi !== undefined) payload.deskripsi = payload.deskripsi || null;

  if (req.file) {
    if (existing.gambar) deleteFile(existing.gambar);
    payload.gambar = req.file.filename;
  }

  const prestasi = await prisma.prestasi.update({ where: { id }, data: payload });
  res.status(200).json({ success: true, message: 'Prestasi berhasil diperbarui.', data: prestasi });
});

// Menghapus prestasi beserta foto dokumentasinya
exports.deletePrestasi = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.prestasi.findUnique({ where: { id } });
  if (!existing) throw new AppError('Prestasi tidak ditemukan.', 404);

  if (existing.gambar) deleteFile(existing.gambar);
  await prisma.prestasi.delete({ where: { id } });

  res.status(200).json({ success: true, message: 'Prestasi berhasil dihapus.' });
});

// Mengambil seluruh dokumen pusat unduhan untuk admin
exports.getAllUnduhan = catchAsync(async (req, res) => {
  const unduhan = await prisma.unduhan.findMany({ orderBy: { createdAt: 'desc' } });
  res.status(200).json({ success: true, data: unduhan });
});

// Menambahkan dokumen baru ke pusat unduhan
exports.createUnduhan = catchAsync(async (req, res) => {
  const data = parseBody(unduhanSchema, req.body || {});
  if (!req.file) throw new AppError('Berkas dokumen wajib diunggah.', 400);

  const unduhan = await prisma.unduhan.create({
    data: {
      judul: data.judul,
      deskripsi: data.deskripsi || null,
      kategori: data.kategori || 'Umum',
      fileUrl: req.file.filename,
      namaFile: req.file.originalname,
      tipeFile: getFileExtension(req.file.originalname || req.file.filename),
      ukuran: req.file.size || null,
      isPublished: toBoolean(req.body.isPublished)
    }
  });

  res.status(201).json({ success: true, message: 'Dokumen berhasil ditambahkan.', data: unduhan });
});

// Memperbarui metadata dokumen dan mengganti berkas bila ada
exports.updateUnduhan = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.unduhan.findUnique({ where: { id } });
  if (!existing) throw new AppError('Dokumen tidak ditemukan.', 404);

  const body = req.body || {};
  const payload = { ...parseBody(unduhanSchema.partial(), body) };

  if (payload.deskripsi !== undefined) payload.deskripsi = payload.deskripsi || null;
  if (payload.kategori !== undefined) payload.kategori = payload.kategori || 'Umum';
  if (body.isPublished !== undefined) payload.isPublished = toBoolean(body.isPublished);

  if (req.file) {
    if (existing.fileUrl) deleteFile(existing.fileUrl);
    payload.fileUrl = req.file.filename;
    payload.namaFile = req.file.originalname;
    payload.tipeFile = getFileExtension(req.file.originalname || req.file.filename);
    payload.ukuran = req.file.size || null;
  }

  const unduhan = await prisma.unduhan.update({ where: { id }, data: payload });
  res.status(200).json({ success: true, message: 'Dokumen berhasil diperbarui.', data: unduhan });
});

// Menghapus dokumen pusat unduhan beserta berkas fisiknya
exports.deleteUnduhan = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.unduhan.findUnique({ where: { id } });
  if (!existing) throw new AppError('Dokumen tidak ditemukan.', 404);

  if (existing.fileUrl) deleteFile(existing.fileUrl);
  await prisma.unduhan.delete({ where: { id } });

  res.status(200).json({ success: true, message: 'Dokumen berhasil dihapus.' });
});

// Mengambil seluruh FAQ untuk admin
exports.getAllFaq = catchAsync(async (req, res) => {
  const faq = await prisma.faq.findMany({ orderBy: [{ urutan: 'asc' }, { createdAt: 'asc' }] });
  res.status(200).json({ success: true, data: faq });
});

// Menambahkan pertanyaan umum baru
exports.createFaq = catchAsync(async (req, res) => {
  const data = parseBody(faqSchema, req.body || {});

  const faq = await prisma.faq.create({
    data: {
      pertanyaan: data.pertanyaan,
      jawaban: data.jawaban,
      kategori: data.kategori || 'Umum',
      urutan: data.urutan || 0,
      isPublished: toBoolean(req.body.isPublished)
    }
  });

  res.status(201).json({ success: true, message: 'FAQ berhasil ditambahkan.', data: faq });
});

// Memperbarui pertanyaan umum
exports.updateFaq = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.faq.findUnique({ where: { id } });
  if (!existing) throw new AppError('FAQ tidak ditemukan.', 404);

  const body = req.body || {};
  const payload = { ...parseBody(faqSchema.partial(), body) };

  if (payload.kategori !== undefined) payload.kategori = payload.kategori || 'Umum';
  if (body.isPublished !== undefined) payload.isPublished = toBoolean(body.isPublished);

  const faq = await prisma.faq.update({ where: { id }, data: payload });
  res.status(200).json({ success: true, message: 'FAQ berhasil diperbarui.', data: faq });
});

// Menghapus pertanyaan umum
exports.deleteFaq = catchAsync(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.faq.findUnique({ where: { id } });
  if (!existing) throw new AppError('FAQ tidak ditemukan.', 404);

  await prisma.faq.delete({ where: { id } });
  res.status(200).json({ success: true, message: 'FAQ berhasil dihapus.' });
});
