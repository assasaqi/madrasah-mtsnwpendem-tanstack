import api, { API_BASE_URL } from './api';

const unwrap = (response) => response.data?.data ?? response.data;

const buildFormData = (payload) => {
  const data = new FormData();
  data.append('judul', payload.judul || '');
  data.append('deskripsi', payload.deskripsi || '');
  data.append('kategori', payload.kategori || 'Umum');
  data.append('isPublished', payload.isPublished !== false);
  if (payload.berkas instanceof File) data.append('berkas', payload.berkas);
  return data;
};

export const unduhanService = {
  // Mengambil dokumen publik yang sudah diterbitkan
  getPublic: async (params = {}) => {
    const response = await api.get('/public/unduhan', { params });
    return unwrap(response) || [];
  },

  // Mengambil seluruh dokumen untuk admin
  getAll: async () => {
    const response = await api.get('/admin/cms/unduhan');
    return unwrap(response) || [];
  },

  // Menambahkan dokumen baru ke pusat unduhan
  create: async (payload) => {
    const response = await api.post('/admin/cms/unduhan', buildFormData(payload), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Memperbarui metadata atau berkas dokumen
  update: async (id, payload) => {
    const response = await api.put(`/admin/cms/unduhan/${id}`, buildFormData(payload), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Menghapus dokumen berdasarkan ID
  remove: async (id) => {
    const response = await api.delete(`/admin/cms/unduhan/${id}`);
    return response.data;
  },

  // Membentuk tautan unduhan yang sekaligus mencatat statistik
  getDownloadUrl: (id) => `${API_BASE_URL}/public/unduhan/${id}/unduh`
};

export default unduhanService;
