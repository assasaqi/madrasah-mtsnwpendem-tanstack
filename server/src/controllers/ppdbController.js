const { z } = require('zod');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { deleteFile } = require('../middleware/upload');
const { getPengaturanPPDB } = require('../utils/pengaturanPPDB');

// Status yang membekukan formulir karena data sudah diverifikasi panitia
const STATUS_TERKUNCI = ['LULUS_ADMINISTRASI', 'LULUS_FINAL', 'TIDAK_LULUS'];

const isTerkunci = (status) => STATUS_TERKUNCI.includes(String(status || '').toUpperCase());

const tanggalLahirSchema = z.union([z.string(), z.date()]).refine(
  (value) => !Number.isNaN(new Date(value).getTime()),
  { message: 'Format tanggal lahir tidak valid.' }
);

const pendaftaranSchema = z.object({
  namaLengkap: z.string().trim().min(3, 'Nama lengkap minimal 3 karakter.'),
  nik: z.string().trim().length(16, 'NIK harus 16 digit.'),
  nisn: z.string().trim().max(20, 'NISN maksimal 20 karakter.').optional().default(''),
  tempatLahir: z.string().trim().min(2, 'Tempat lahir wajib diisi.'),
  tanggalLahir: tanggalLahirSchema,
  jenisKelamin: z.enum(['LAKI_LAKI', 'PEREMPUAN'], { message: 'Jenis kelamin tidak valid.' }),
  sekolahAsal: z.string().trim().min(2, 'Sekolah asal wajib diisi.'),
  alamat: z.string().trim().min(5, 'Alamat minimal 5 karakter.'),
  namaAyah: z.string().trim().min(3, 'Nama ayah minimal 3 karakter.'),
  pekerjaanAyah: z.string().trim().optional().default(''),
  namaIbu: z.string().trim().min(3, 'Nama ibu minimal 3 karakter.'),
  pekerjaanIbu: z.string().trim().optional().default(''),
  noWhatsapp: z.string().trim().min(9, 'Nomor WhatsApp minimal 9 digit.')
});

const DOKUMEN_MAP = {
  fileKK: 'KARTU_KELUARGA',
  fileAkta: 'AKTA_KELAHIRAN',
  fileFoto: 'PAS_FOTO',
  KARTU_KELUARGA: 'KARTU_KELUARGA',
  AKTA_KELAHIRAN: 'AKTA_KELAHIRAN',
  PAS_FOTO: 'PAS_FOTO',
  IJAZAH: 'IJAZAH',
  SKHU: 'SKHU'
};

// Membuat nomor pendaftaran yang dijamin belum dipakai
const generateNomorPendaftaran = async () => {
  const tahun = new Date().getFullYear();
  for (let i = 0; i < 10; i += 1) {
    const nomor = `SPMB-${tahun}-${Math.floor(1000 + Math.random() * 9000)}`;
    const existing = await prisma.pendaftaranPPDB.findUnique({ where: { nomorPendaftaran: nomor } });
    if (!existing) return nomor;
  }
  return `SPMB-${tahun}-${Date.now()}`;
};

// Menyusun payload biodata dari hasil validasi
const buildBiodata = (data, parsedDate) => ({
  namaLengkap: data.namaLengkap,
  nik: data.nik || null,
  nisn: data.nisn || null,
  tempatLahir: data.tempatLahir,
  tanggalLahir: parsedDate,
  jenisKelamin: data.jenisKelamin,
  asalSekolah: data.sekolahAsal,
  alamat: data.alamat
});

// Menyusun payload data orang tua dari hasil validasi
const buildOrangTua = (data) => ({
  namaAyah: data.namaAyah,
  pekerjaanAyah: data.pekerjaanAyah || null,
  noHpAyah: data.noWhatsapp,
  namaIbu: data.namaIbu,
  pekerjaanIbu: data.pekerjaanIbu || null,
  noHpIbu: data.noWhatsapp,
  alamatOrangTua: data.alamat
});

// Mengambil status dan ringkasan pendaftaran milik pengguna aktif
exports.getStatusPendaftaran = catchAsync(async (req, res) => {
  const userId = req.user?.id || req.user?.userId;
  if (!userId) throw new AppError('Sesi pengguna tidak valid. Silakan login kembali.', 401);

  const [pendaftaran, pengaturan, profil] = await Promise.all([
    prisma.pendaftaranPPDB.findUnique({
      where: { userId },
      include: { biodata: true, orangTua: true, dokumen: true }
    }),
    getPengaturanPPDB(),
    prisma.profilSekolah.findFirst()
  ]);

  const status = pendaftaran ? pendaftaran.status : 'BELUM_ISI';

  res.status(200).json({
    success: true,
    status,
    terkunci: isTerkunci(status),
    pengaturan,
    profil,
    data: pendaftaran
  });
});

// Menyimpan atau memperbarui biodata pendaftaran PPDB
exports.submitPendaftaran = catchAsync(async (req, res) => {
  const userId = req.user?.id || req.user?.userId;
  if (!userId) throw new AppError('Sesi pengguna tidak valid. Silakan login kembali.', 401);

  const parsed = pendaftaranSchema.safeParse(req.body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const existing = await prisma.pendaftaranPPDB.findUnique({ where: { userId } });
  if (existing && isTerkunci(existing.status)) {
    throw new AppError('Data pendaftaran sudah diverifikasi panitia dan tidak dapat diubah lagi.', 403);
  }

  const data = parsed.data;
  const parsedDate = new Date(data.tanggalLahir);
  const biodata = buildBiodata(data, parsedDate);
  const orangTua = buildOrangTua(data);

  const pendaftaran = await prisma.pendaftaranPPDB.upsert({
    where: { userId },
    update: {
      status: 'DITINJAU',
      biodata: { upsert: { create: biodata, update: biodata } },
      orangTua: { upsert: { create: orangTua, update: orangTua } }
    },
    create: {
      userId,
      nomorPendaftaran: await generateNomorPendaftaran(),
      status: 'DITINJAU',
      biodata: { create: biodata },
      orangTua: { create: orangTua }
    },
    include: { biodata: true, orangTua: true, dokumen: true }
  });

  res.status(200).json({ success: true, message: 'Data pendaftaran berhasil disimpan.', data: pendaftaran });
});

// Mengunggah atau mengganti dokumen persyaratan pendaftaran
exports.uploadDokumen = catchAsync(async (req, res) => {
  const userId = req.user?.id || req.user?.userId;
  const jenisDokumen = DOKUMEN_MAP[req.body?.jenisDokumen];

  if (!req.file) throw new AppError('Tidak ada berkas yang diunggah.', 400);
  if (!jenisDokumen) throw new AppError('Jenis dokumen tidak valid.', 400);

  const pendaftaran = await prisma.pendaftaranPPDB.findUnique({ where: { userId } });
  if (!pendaftaran) throw new AppError('Data pendaftaran tidak ditemukan. Isi biodata terlebih dahulu.', 400);

  if (isTerkunci(pendaftaran.status)) {
    deleteFile(req.file.fileUrl || `/uploads/${req.file.filename}`);
    throw new AppError('Berkas sudah diverifikasi panitia dan tidak dapat diganti lagi.', 403);
  }

  const existing = await prisma.dokumenPPDB.findUnique({
    where: { pendaftaranId_jenisDokumen: { pendaftaranId: pendaftaran.id, jenisDokumen } }
  });

  const fileUrl = req.file.fileUrl || `/uploads/${req.file.filename}`;
  if (existing?.fileUrl) deleteFile(existing.fileUrl);

  const dokumen = await prisma.dokumenPPDB.upsert({
    where: { pendaftaranId_jenisDokumen: { pendaftaranId: pendaftaran.id, jenisDokumen } },
    update: { fileUrl, isVerified: false },
    create: { pendaftaranId: pendaftaran.id, jenisDokumen, fileUrl }
  });

  res.status(200).json({ success: true, message: 'Dokumen berhasil diunggah.', data: dokumen });
});
