import api from './api';

export const spmbService = {
  // Mengambil status dan data pendaftaran milik pengguna aktif
  getStatus: async () => {
    const response = await api.get('/ppdb/status');
    return response.data;
  },

  // Menyimpan atau memperbarui biodata pendaftaran
  submitPendaftaran: async (data) => {
    const response = await api.post('/ppdb/submit', data);
    return response.data;
  },

  // Mengunggah dokumen persyaratan pendaftaran
  uploadDokumen: async (file, jenisDokumen) => {
    const formData = new FormData();
    formData.append('dokumen', file);
    formData.append('jenisDokumen', jenisDokumen);

    const response = await api.post('/ppdb/upload-dokumen', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  // Mengambil seluruh pendaftar untuk admin
  getAllPendaftar: async () => {
    const response = await api.get('/admin/ppdb');
    return response.data?.data || [];
  },

  // Memperbarui status seleksi dan catatan verifikator
  updateStatus: async (id, status, catatan = '') => {
    const response = await api.put(`/admin/ppdb/${id}/status`, { status, catatan });
    return response.data;
  },

  // Menandai dokumen pendaftar sudah diverifikasi atau belum
  verifyDokumen: async (dokumenId, isVerified = true) => {
    const response = await api.patch(`/admin/ppdb/dokumen/${dokumenId}/verify`, { isVerified });
    return response.data;
  },

  // Mengambil pengaturan surat keterangan lulus SPMB
  getPengaturan: async () => {
    const response = await api.get('/admin/ppdb/pengaturan');
    return response.data?.data || null;
  },

  // Menyimpan pengaturan surat keterangan lulus SPMB
  updatePengaturan: async (payload) => {
    const response = await api.put('/admin/ppdb/pengaturan', payload);
    return response.data;
  }
};

export default spmbService;
