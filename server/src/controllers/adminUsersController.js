const bcrypt = require('bcryptjs');
const { z } = require('zod');
const prisma = require('../config/prisma');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const STAFF_ROLES = ['ADMIN', 'OPERATOR'];

const createStaffSchema = z.object({
  nama: z.string().trim().min(2, 'Nama lengkap minimal 2 karakter.').max(100, 'Nama maksimal 100 karakter.'),
  email: z.string().trim().toLowerCase().email('Format email tidak valid.'),
  password: z.string().min(6, 'Kata sandi minimal 6 karakter.').max(72),
  role: z.enum(STAFF_ROLES, { message: 'Peran pengelola tidak valid.' }).default('OPERATOR')
});

const updateStaffSchema = z.object({
  nama: z.string().trim().min(2, 'Nama lengkap minimal 2 karakter.').max(100).optional(),
  role: z.enum(STAFF_ROLES, { message: 'Peran pengelola tidak valid.' }).optional(),
  isActive: z.boolean().optional()
});

const staffSelect = {
  id: true,
  nama: true,
  email: true,
  role: true,
  isVerified: true,
  isActive: true,
  createdAt: true
};

// Memastikan masih ada minimal satu Admin Utama aktif di sistem
const ensureOtherActiveAdminExists = async (excludeId) => {
  const count = await prisma.user.count({
    where: {
      role: 'ADMIN',
      isActive: true,
      NOT: { id: excludeId }
    }
  });
  if (count === 0) {
    throw new AppError('Harus ada minimal satu Admin Utama yang aktif.', 400);
  }
};

// Mengambil seluruh akun pengelola (ADMIN & OPERATOR)
exports.getAllStaff = catchAsync(async (req, res) => {
  const users = await prisma.user.findMany({
    where: { role: { in: STAFF_ROLES } },
    select: staffSelect,
    orderBy: [{ role: 'asc' }, { createdAt: 'asc' }]
  });

  res.status(200).json({ success: true, data: users });
});

// Menambahkan akun pengelola baru oleh Admin Utama
exports.createStaff = catchAsync(async (req, res) => {
  const parsed = createStaffSchema.safeParse(req.body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const { nama, email, password, role } = parsed.data;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new AppError('Email ini sudah terdaftar pada sistem.', 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const created = await prisma.user.create({
    data: {
      nama,
      email,
      password: hashedPassword,
      role,
      isVerified: true,
      isActive: true
    },
    select: staffSelect
  });

  res.status(201).json({
    success: true,
    message: `Akun ${role === 'ADMIN' ? 'Admin Utama' : 'Operator'} berhasil ditambahkan.`,
    data: created
  });
});

// Memperbarui peran, nama, atau status aktif akun pengelola
exports.updateStaff = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsed = updateStaffSchema.safeParse(req.body || {});
  if (!parsed.success) throw new AppError(parsed.error.issues[0].message, 400);

  const target = await prisma.user.findUnique({ where: { id } });
  if (!target || !STAFF_ROLES.includes(target.role)) {
    throw new AppError('Data pengelola tidak ditemukan.', 404);
  }

  const { nama, role, isActive } = parsed.data;
  const isSelf = id === req.user?.id;

  if (isSelf && (role !== undefined && role !== target.role || isActive === false)) {
    throw new AppError('Anda tidak dapat mengubah peran atau menonaktifkan akun sendiri.', 400);
  }

  const removingAdminPower =
    target.role === 'ADMIN' &&
    target.isActive &&
    ((role !== undefined && role !== 'ADMIN') || isActive === false);

  if (removingAdminPower) {
    await ensureOtherActiveAdminExists(id);
  }

  const updated = await prisma.user.update({
    where: { id },
    data: {
      ...(nama !== undefined && { nama }),
      ...(role !== undefined && { role }),
      ...(isActive !== undefined && { isActive })
    },
    select: staffSelect
  });

  res.status(200).json({
    success: true,
    message: 'Data pengelola berhasil diperbarui.',
    data: updated
  });
});

// Menghapus akun pengelola dari sistem
exports.deleteStaff = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (id === req.user?.id) {
    throw new AppError('Anda tidak dapat menghapus akun sendiri.', 400);
  }

  const target = await prisma.user.findUnique({ where: { id } });
  if (!target || !STAFF_ROLES.includes(target.role)) {
    throw new AppError('Data pengelola tidak ditemukan.', 404);
  }

  if (target.role === 'ADMIN' && target.isActive) {
    await ensureOtherActiveAdminExists(id);
  }

  await prisma.user.delete({ where: { id } });
  res.status(200).json({ success: true, message: 'Akun pengelola berhasil dihapus.' });
});
