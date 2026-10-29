import api from './api';

const unwrap = (response) => response.data?.data ?? response.data;

export const pengumumanService = {
  // Mengambil seluruh pengumuman publik
  getAll: async () => {
    const response = await api.get('/public/pengumuman');
    return response.data;
  },

  // Mengambil detail pengumuman publik berdasarkan slug atau ID
  getBySlug: async (identifier) => {
    const response = await api.get(`/public/pengumuman/${identifier}`);
    return response.data;
  },

  // Mengambil seluruh pengumuman untuk admin
  getAdminAll: async () => {
    const response = await api.get('/admin/cms/pengumuman');
    return unwrap(response) || [];
  },

  // Membuat pengumuman baru beserta lampiran
  create: async (formData) => {
    const response = await api.post('/admin/cms/pengumuman', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Memperbarui pengumuman beserta lampirannya
  update: async (id, formData) => {
    const response = await api.put(`/admin/cms/pengumuman/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Menghapus pengumuman berdasarkan ID
  remove: async (id) => {
    const response = await api.delete(`/admin/cms/pengumuman/${id}`);
    return response.data;
  }
};

export default pengumumanService;
