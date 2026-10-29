const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const allowedTypes = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/zip',
  'application/x-zip-compressed',
  'text/csv'
];

// Ekstensi berkas dokumen yang diizinkan untuk pusat unduhan
const documentExtensions = {
  'application/pdf': '.pdf',
  'application/msword': '.doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
  'application/vnd.ms-excel': '.xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
  'application/vnd.ms-powerpoint': '.ppt',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
  'application/zip': '.zip',
  'application/x-zip-compressed': '.zip',
  'text/csv': '.csv'
};

// Menyaring jenis berkas yang boleh diunggah
const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) return cb(null, true);
  return cb(new Error('Format file tidak didukung. Gunakan gambar, PDF, DOC, XLS, PPT, CSV, atau ZIP.'), false);
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
});

// Menyimpan satu berkas ke disk dan mengembalikan metadata hasil pemrosesan
const saveFile = async (file, prefix = 'file') => {
  const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

  // Berkas dokumen disimpan apa adanya agar tetap dapat dibuka oleh pengguna
  if (!String(file.mimetype || '').startsWith('image/')) {
    const extension = documentExtensions[file.mimetype] || '.bin';
    const filename = `${prefix}-${unique}${extension}`;
    fs.writeFileSync(path.join(uploadDir, filename), file.buffer);
    return { filename, fileUrl: `/uploads/${filename}` };
  }

  const filename = `${prefix}-${unique}.webp`;
  await sharp(file.buffer)
    .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(uploadDir, filename));

  return { filename, fileUrl: `/uploads/${filename}` };
};

// Memproses seluruh berkas hasil multer menjadi berkas fisik di direktori uploads
const processImage = async (req, res, next) => {
  try {
    if (req.file?.buffer?.length) {
      Object.assign(req.file, await saveFile(req.file, 'img'));
    } else if (req.file) {
      req.file = undefined;
    }

    if (req.files) {
      for (const fieldName of Object.keys(req.files)) {
        const validFiles = [];

        for (const file of req.files[fieldName]) {
          if (!file.buffer?.length) continue;
          Object.assign(file, await saveFile(file, fieldName));
          validFiles.push(file);
        }

        if (validFiles.length) req.files[fieldName] = validFiles;
        else delete req.files[fieldName];
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

// Menghapus berkas fisik berdasarkan nama atau path tersimpan
const deleteFile = (filename) => {
  if (!filename) return;
  const cleanFilename = filename.replace(/^\/?uploads\//, '');
  const filePath = path.join(uploadDir, cleanFilename);

  fs.unlink(filePath, (err) => {
    if (err && err.code !== 'ENOENT') {
      console.error(`Gagal menghapus file ${cleanFilename}:`, err.message);
    }
  });
};

module.exports = {
  upload,
  processImage,
  deleteFile,
  single: (fieldname) => [upload.single(fieldname), processImage],
  fields: (fieldsArray) => [upload.fields(fieldsArray), processImage]
};
