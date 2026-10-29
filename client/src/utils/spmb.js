import { getField } from './helpers';

// Label dan warna status SPMB yang dipakai di seluruh halaman admin
export const SPMB_STATUS_META = {
  BELUM_ISI: { label: 'Belum isi', tone: 'stone' },
  DITINJAU: { label: 'Ditinjau', tone: 'amber' },
  LULUS_ADMINISTRASI: { label: 'Lulus administrasi', tone: 'brand' },
  LULUS_FINAL: { label: 'Lulus final', tone: 'blue' },
  TIDAK_LULUS: { label: 'Tidak lulus', tone: 'rose' }
};

// Label jenis dokumen persyaratan SPMB
export const SPMB_DOKUMEN_LABEL = {
  PAS_FOTO: 'Pas foto',
  KARTU_KELUARGA: 'Kartu keluarga',
  AKTA_KELAHIRAN: 'Akta kelahiran',
  IJAZAH: 'Ijazah',
  SKHU: 'SKHU'
};

// Menormalkan status SPMB dari API agar konsisten saat difilter
export const normalizeStatus = (value) => String(value || 'DITINJAU').toUpperCase();

// Mengambil nama calon siswa dari berbagai bentuk respons API
export const getNamaPendaftar = (item) =>
  getField(item, ['biodata.namaLengkap', 'namaLengkap', 'nama_lengkap', 'nama'], '-');

// Mengambil nomor pendaftaran calon siswa
export const getNomorPendaftar = (item) =>
  getField(item, ['nomorPendaftaran', 'noPendaftaran', 'no_pendaftaran'], '-');

// Mengambil asal sekolah calon siswa
export const getAsalSekolah = (item) =>
  getField(item, ['biodata.asalSekolah', 'asalSekolah', 'asal_sekolah'], '-');

// Mengambil jenis kelamin calon siswa dalam label yang mudah dibaca
export const getJenisKelamin = (item) => {
  const nilai = getField(item, ['biodata.jenisKelamin', 'jenisKelamin'], '-');
  if (nilai === 'LAKI_LAKI') return 'Laki-laki';
  if (nilai === 'PEREMPUAN') return 'Perempuan';
  return nilai;
};

// Mengambil alamat email akun yang dipakai calon siswa mendaftar
export const getEmailPendaftar = (item) => getField(item, ['user.email', 'email'], '-');

// Mengambil nama gelombang pendaftaran beserta nilai bawaannya
export const getGelombang = (item) => item?.gelombang || 'Gelombang 1';

// Menghitung jumlah dokumen yang sudah dan belum diverifikasi
export const hitungDokumen = (item) => {
  const daftar = Array.isArray(item?.dokumen) ? item.dokumen : [];
  return {
    total: daftar.length,
    terverifikasi: daftar.filter((dok) => dok.isVerified).length
  };
};

// Menyaring pendaftar berdasarkan kata kunci dan status terpilih
export const filterPendaftar = (list, query, status) => {
  const q = String(query || '').toLowerCase().trim();

  return (Array.isArray(list) ? list : []).filter((item) => {
    if (status && status !== 'ALL' && normalizeStatus(item.status) !== status) return false;
    if (!q) return true;

    return [
      getNamaPendaftar(item),
      getNomorPendaftar(item),
      getAsalSekolah(item),
      item.gelombang
    ]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(q));
  });
};
