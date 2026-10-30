const { z } = require('zod');
const bcrypt = require('bcryptjs');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { deleteFile } = require('../middleware/upload');

const emailSchema = z.string().trim().toLowerCase().email('Format email tidak valid.');
const passwordSchema = z.object({
  passwordLama: z.string().min(1, 'Password saat ini wajib diisi.'),
  passwordBaru: z.string().min(8, 'Password baru minimal 8 karakter.')
});

// Mengubah string misi menjadi array yang aman disimpan
const parseMisi = (misi) => {
  if (Array.isArray(misi)) return misi.filter((item) => String(item).trim());
  if (typeof misi === 'string') {
    try {
      const parsed = JSON.parse(misi);
      return Array.isArray(parsed) ? parsed.filter((item) => String(item).trim()) : [misi];
    } catch (error) {
      return misi.split('\n').map((item) => item.trim()).filter(Boolean);
    }
  }
  return [];
};

// Mengambil profil akun admin yang sedang login
exports.getAdminProfile = catchAsync(async (req, res) => {
  const userId = req.user?.id || req.user?.userId;
  if (!userId) throw new AppError('User tidak terautentikasi.', 401);

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, role: true, foto: true, createdAt: true }
  });
  if (!user) throw new AppError('User tidak ditemukan.', 404);

  res.status(200).json({ success: true, data: user });
});

// Memperbarui email dan foto profil admin
exports.updateAdminProfile = catchAsync(async (req, res) => {
  const userId = req.user?.id || req.user?.userId;
  if (!userId) throw new AppError('User tidak terautentikasi.', 401);

  const current = await prisma.user.findUnique({ where: { id: userId } });
  if (!current) throw new AppError('User tidak ditemukan.', 404);

  const payload = {};

  if (req.body?.email) {
    const parsed = emailSchema.safeParse(req.body.email);
    if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

    const duplicate = await prisma.user.findFirst({
      where: { email: parsed.data, NOT: { id: userId } }
    });
    if (duplicate) throw new AppError('Email sudah digunakan oleh akun lain.', 400);
    payload.email = parsed.data;
  }

  if (req.file) {
    if (current.foto) deleteFile(current.foto);
    payload.foto = req.file.filename;
  }

  if (Object.keys(payload).length === 0) throw new AppError('Tidak ada data profil yang diperbarui.', 400);

  const user = await prisma.user.update({
    where: { id: userId },
    data: payload,
    select: { id: true, email: true, role: true, foto: true }
  });

  res.status(200).json({ success: true, message: 'Profil berhasil diperbarui.', data: user });
});

// Mengubah password admin setelah verifikasi password lama
exports.changePassword = catchAsync(async (req, res) => {
  const userId = req.user?.id || req.user?.userId;
  if (!userId) throw new AppError('User tidak terautentikasi.', 401);

  const parsed = passwordSchema.safeParse(req.body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError('User tidak ditemukan.', 404);

  const cocok = await bcrypt.compare(parsed.data.passwordLama, user.password);
  if (!cocok) throw new AppError('Password saat ini salah.', 400);

  const hashed = await bcrypt.hash(parsed.data.passwordBaru, 12);
  await prisma.user.update({ where: { id: userId }, data: { password: hashed } });

  res.status(200).json({ success: true, message: 'Password berhasil diubah.' });
});

// Mengambil profil sekolah, membuat data default bila belum ada
exports.getSchoolProfile = catchAsync(async (req, res) => {
  let profil = await prisma.profilSekolah.findFirst();
  if (!profil) {
    profil = await prisma.profilSekolah.create({
      data: { namaSekolah: 'MA Negeri 1', npsn: '-', akreditasi: 'A' }
    });
  }
  res.status(200).json({ success: true, data: profil });
});

// Memperbarui profil sekolah beserta logo dan banner
exports.updateSchoolProfile = catchAsync(async (req, res) => {
  const existing = await prisma.profilSekolah.findFirst();
  const body = req.body || {};

  const payload = {
    ...(body.namaSekolah && { namaSekolah: body.namaSekolah.trim() }),
    ...(body.npsn && { npsn: body.npsn.trim() }),
    ...(body.akreditasi && { akreditasi: body.akreditasi }),
    ...(body.tagline !== undefined && { tagline: body.tagline }),
    ...(body.deskripsi !== undefined && { deskripsi: body.deskripsi }),
    ...(body.alamat !== undefined && { alamat: body.alamat }),
    ...(body.email !== undefined && { email: body.email }),
    ...(body.telepon !== undefined && { telepon: body.telepon }),
    ...(body.whatsapp !== undefined && { whatsapp: body.whatsapp }),
    ...(body.mapsUrl !== undefined && { mapsUrl: body.mapsUrl }),
    ...(body.visi !== undefined && { visi: body.visi }),
    ...(body.misi !== undefined && { misi: parseMisi(body.misi) }),
    ...(body.rdmUrl !== undefined && { rdmUrl: body.rdmUrl ? String(body.rdmUrl).trim() : null }),
    ...(body.rdmKeterangan !== undefined && { rdmKeterangan: body.rdmKeterangan ? String(body.rdmKeterangan).trim() : null }),
    ...(body.rdmAktif !== undefined && { rdmAktif: Boolean(body.rdmAktif) })
  };

  if (req.files?.logo) {
    if (existing?.logo) deleteFile(existing.logo);
    payload.logo = req.files.logo[0].filename;
  }
  if (req.files?.banner) {
    if (existing?.banner) deleteFile(existing.banner);
    payload.banner = req.files.banner[0].filename;
  }

  if (!existing) payload.npsn = payload.npsn || '-';

  const result = existing
    ? await prisma.profilSekolah.update({ where: { id: existing.id }, data: payload })
    : await prisma.profilSekolah.create({ data: payload });

  res.status(200).json({ success: true, message: 'Profil sekolah berhasil diperbarui.', data: result });
});

// Mengambil konfigurasi tautan Rapor Digital Madrasah (RDM)
exports.getRdmSettings = catchAsync(async (req, res) => {
  let profil = await prisma.profilSekolah.findFirst({
    select: {
      id: true,
      rdmUrl: true,
      rdmKeterangan: true,
      rdmAktif: true,
      namaSekolah: true,
      updatedAt: true
    }
  });

  if (!profil) {
    profil = await prisma.profilSekolah.create({
      data: {
        namaSekolah: 'MTs NW Pendem',
        npsn: '50222811',
        akreditasi: 'B',
        rdmAktif: true
      },
      select: {
        id: true,
        rdmUrl: true,
        rdmKeterangan: true,
        rdmAktif: true,
        namaSekolah: true,
        updatedAt: true
      }
    });
  }

  res.status(200).json({ success: true, data: profil });
});

// Memperbarui konfigurasi tautan Rapor Digital Madrasah (RDM)
exports.updateRdmSettings = catchAsync(async (req, res) => {
  const existing = await prisma.profilSekolah.findFirst();
  const body = req.body || {};

  const payload = {
    ...(body.rdmUrl !== undefined && { rdmUrl: body.rdmUrl ? String(body.rdmUrl).trim() : null }),
    ...(body.rdmKeterangan !== undefined && { rdmKeterangan: body.rdmKeterangan ? String(body.rdmKeterangan).trim() : null }),
    ...(body.rdmAktif !== undefined && { rdmAktif: Boolean(body.rdmAktif) })
  };

  const result = existing
    ? await prisma.profilSekolah.update({
        where: { id: existing.id },
        data: payload,
        select: {
          id: true,
          rdmUrl: true,
          rdmKeterangan: true,
          rdmAktif: true,
          namaSekolah: true,
          updatedAt: true
        }
      })
    : await prisma.profilSekolah.create({
        data: {
          namaSekolah: 'MTs NW Pendem',
          npsn: '50222811',
          akreditasi: 'B',
          ...payload
        },
        select: {
          id: true,
          rdmUrl: true,
          rdmKeterangan: true,
          rdmAktif: true,
          namaSekolah: true,
          updatedAt: true
        }
      });

  res.status(200).json({
    success: true,
    message: 'Pengaturan tautan RDM berhasil disimpan.',
    data: result
  });
});
