import api from './api';

const unwrap = (response) => response.data?.data ?? response.data;

export const kontakService = {
  // Mengambil seluruh pesan kontak untuk admin
  getAll: async () => {
    const response = await api.get('/admin/kontak');
    return unwrap(response) || [];
  },

  // Menandai pesan sudah dibaca atau belum
  markRead: async (id, isRead = true) => {
    const response = await api.patch(`/admin/kontak/${id}/read`, { isRead });
    return unwrap(response);
  },

  // Menghapus pesan kontak berdasarkan ID
  remove: async (id) => {
    const response = await api.delete(`/admin/kontak/${id}`);
    return response.data;
  }
};

export default kontakService;
