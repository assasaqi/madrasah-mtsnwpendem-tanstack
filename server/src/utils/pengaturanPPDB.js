const prisma = require('../config/prisma');

// Menentukan tahun ajaran berjalan berdasarkan bulan saat ini
const tahunAjaranBerjalan = () => {
  const sekarang = new Date();
  const tahun = sekarang.getFullYear();
  return sekarang.getMonth() >= 6 ? `${tahun}/${tahun + 1}` : `${tahun - 1}/${tahun}`;
};

// Mengambil nama kota/kabupaten dari bagian akhir alamat madrasah
const ambilTempatPenerbitan = (alamat) => {
  const bagian = String(alamat || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (bagian.length === 0) return '';
  return bagian[bagian.length - 1].replace(/^kab\.?\s+/i, '').replace(/^kota\s+/i, '');
};

// Mengambil pengaturan surat SPMB, atau menyusun nilai bawaan dari profil dan struktur
exports.getPengaturanPPDB = async () => {
  const tersimpan = await prisma.pengaturanPPDB.findFirst();
  if (tersimpan) return { ...tersimpan, bawaan: false };

  const [profil, kepalaMadrasah] = await Promise.all([
    prisma.profilSekolah.findFirst(),
    prisma.strukturOrganisasi.findFirst({
      where: { jabatan: { contains: 'Kepala Madrasah' } },
      orderBy: { urutan: 'asc' }
    })
  ]);

  return {
    id: null,
    tahunAjaran: tahunAjaranBerjalan(),
    kodeSurat: 'SPMB/SKL',
    tempatPenerbitan: ambilTempatPenerbitan(profil?.alamat),
    namaKetuaPanitia: '',
    nipKetuaPanitia: '',
    namaKepalaMadrasah: kepalaMadrasah?.nama || '',
    nipKepalaMadrasah: '',
    catatanSurat: '',
    bawaan: true
  };
};
