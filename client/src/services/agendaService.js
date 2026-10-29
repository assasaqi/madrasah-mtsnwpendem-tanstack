import api from './api';

const unwrap = (response) => response.data?.data ?? response.data;

export const agendaService = {
  // Mengambil agenda publik yang sudah diterbitkan
  getPublic: async () => {
    const response = await api.get('/public/agenda');
    return unwrap(response) || [];
  },

  // Mengambil seluruh agenda untuk admin
  getAll: async () => {
    const response = await api.get('/admin/cms/agenda');
    return unwrap(response) || [];
  },

  // Menambahkan agenda kegiatan baru
  create: async (payload) => {
    const response = await api.post('/admin/cms/agenda', payload);
    return unwrap(response);
  },

  // Memperbarui agenda kegiatan
  update: async (id, payload) => {
    const response = await api.put(`/admin/cms/agenda/${id}`, payload);
    return unwrap(response);
  },

  // Menghapus agenda berdasarkan ID
  remove: async (id) => {
    const response = await api.delete(`/admin/cms/agenda/${id}`);
    return response.data;
  }
};

export default agendaService;
