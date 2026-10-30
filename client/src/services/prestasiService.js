import api from './api';

const unwrap = (response) => response.data?.data ?? response.data;

const buildFormData = (payload) => {
  const data = new FormData();
  data.append('judul', payload.judul || '');
  data.append('peraih', payload.peraih || '');
  data.append('tingkat', payload.tingkat || 'Sekolah');
  data.append('juara', payload.juara || '');
  data.append('tahun', payload.tahun || new Date().getFullYear());
  data.append('deskripsi', payload.deskripsi || '');
  data.append('isPublished', payload.isPublished !== false);
  if (payload.createdAt) data.append('createdAt', payload.createdAt);
  if (payload.gambar instanceof File) data.append('gambar', payload.gambar);
  return data;
};

export const prestasiService = {
  // Mengambil prestasi publik yang sudah diterbitkan
  getPublic: async (params = {}) => {
    const response = await api.get('/public/prestasi', { params });
    return unwrap(response) || [];
  },

  // Mengambil seluruh prestasi untuk admin
  getAll: async () => {
    const response = await api.get('/admin/cms/prestasi');
    return unwrap(response) || [];
  },

  // Menambahkan prestasi baru
  create: async (payload) => {
    const response = await api.post('/admin/cms/prestasi', buildFormData(payload), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Memperbarui prestasi dan foto dokumentasi
  update: async (id, payload) => {
    const response = await api.put(`/admin/cms/prestasi/${id}`, buildFormData(payload), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Menghapus prestasi berdasarkan ID
  remove: async (id) => {
    const response = await api.delete(`/admin/cms/prestasi/${id}`);
    return response.data;
  }
};

export default prestasiService;
