import api from './api';

const unwrap = (response) => response.data?.data ?? response.data;

export const faqService = {
  // Mengambil FAQ publik yang sudah diterbitkan
  getPublic: async () => {
    const response = await api.get('/public/faq');
    return unwrap(response) || [];
  },

  // Mengambil seluruh FAQ untuk admin
  getAll: async () => {
    const response = await api.get('/admin/cms/faq');
    return unwrap(response) || [];
  },

  // Menambahkan pertanyaan umum baru
  create: async (payload) => {
    const response = await api.post('/admin/cms/faq', payload);
    return unwrap(response);
  },

  // Memperbarui pertanyaan umum
  update: async (id, payload) => {
    const response = await api.put(`/admin/cms/faq/${id}`, payload);
    return unwrap(response);
  },

  // Menghapus pertanyaan umum berdasarkan ID
  remove: async (id) => {
    const response = await api.delete(`/admin/cms/faq/${id}`);
    return response.data;
  }
};

export default faqService;
