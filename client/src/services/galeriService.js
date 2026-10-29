import api from './api';

const unwrap = (response) => response.data?.data ?? response.data;

export const galeriService = {
  // Mengambil seluruh foto galeri publik
  getPublic: async (params = {}) => {
    const response = await api.get('/public/galeri', { params });
    return unwrap(response) || [];
  },

  // Mengambil seluruh foto galeri untuk admin
  getAll: async () => {
    const response = await api.get('/admin/cms/galeri');
    return unwrap(response) || [];
  },

  // Menambahkan foto galeri baru
  create: async ({ judul, deskripsi, kategori, gambar }) => {
    const data = new FormData();
    data.append('judul', judul || '');
    data.append('deskripsi', deskripsi || '');
    data.append('kategori', kategori || '');
    if (gambar instanceof File) data.append('gambar', gambar);

    const response = await api.post('/admin/cms/galeri', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Memperbarui data atau foto galeri
  update: async (id, { judul, deskripsi, kategori, gambar }) => {
    const data = new FormData();
    if (judul !== undefined) data.append('judul', judul);
    if (deskripsi !== undefined) data.append('deskripsi', deskripsi || '');
    if (kategori !== undefined) data.append('kategori', kategori || '');
    if (gambar instanceof File) data.append('gambar', gambar);

    const response = await api.put(`/admin/cms/galeri/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Menghapus foto galeri berdasarkan ID
  remove: async (id) => {
    const response = await api.delete(`/admin/cms/galeri/${id}`);
    return response.data;
  }
};

export default galeriService;
