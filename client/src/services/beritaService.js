import api from './api';

const unwrap = (response) => response.data?.data ?? response.data;

// Menyusun FormData berita dari payload form admin
const buildBeritaFormData = (payload) => {
  const data = new FormData();
  data.append('judul', payload.judul || '');
  data.append('konten', payload.konten || '');
  data.append('isPublished', payload.isPublished ?? true);

  if (payload.kategoriId) data.append('kategoriId', payload.kategoriId);

  const file = payload.imageFile || payload.gambar;
  if (file instanceof File) data.append('gambar', file);

  return data;
};

export const beritaService = {
  // Mengambil seluruh berita untuk admin
  getAllBerita: async () => {
    const response = await api.get('/admin/cms/berita');
    return unwrap(response) || [];
  },

  // Mengambil daftar kategori berita
  getKategoriList: async () => {
    const response = await api.get('/admin/cms/kategori');
    return unwrap(response) || [];
  },

  // Membuat berita baru
  createBerita: async (payload) => {
    const response = await api.post('/admin/cms/berita', buildBeritaFormData(payload), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Memperbarui berita yang sudah ada
  updateBerita: async (id, payload) => {
    const response = await api.put(`/admin/cms/berita/${id}`, buildBeritaFormData(payload), {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return unwrap(response);
  },

  // Menghapus berita berdasarkan ID
  deleteBerita: async (id) => {
    const response = await api.delete(`/admin/cms/berita/${id}`);
    return response.data;
  },

  // Membuat kategori berita baru
  createKategori: async (nama) => {
    const response = await api.post('/admin/cms/kategori', { nama });
    return unwrap(response);
  },

  // Menghapus kategori berita
  deleteKategori: async (id) => {
    const response = await api.delete(`/admin/cms/kategori/${id}`);
    return response.data;
  }
};

export default beritaService;
