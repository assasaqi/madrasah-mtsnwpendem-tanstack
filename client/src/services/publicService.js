import api from './api';

export const publicService = {
  // Mengambil ringkasan beranda publik
  getHomeData: async () => {
    const response = await api.get('/public/home');
    return response.data;
  },

  // Mengambil daftar berita dengan filter dan paginasi
  getBerita: async (params = {}) => {
    const response = await api.get('/public/berita', { params });
    return response.data;
  },

  // Mengambil detail berita berdasarkan ID atau slug
  getBeritaDetail: async (identifier) => {
    const response = await api.get(`/public/berita/${identifier}`);
    return response.data;
  },

  // Mengambil seluruh kategori berita
  getKategori: async () => {
    const response = await api.get('/public/kategori');
    return response.data;
  },

  // Mengambil daftar pengumuman terbit
  getPengumuman: async () => {
    const response = await api.get('/public/pengumuman');
    return response.data;
  },

  // Mengambil detail pengumuman berdasarkan ID atau slug
  getPengumumanDetail: async (identifier) => {
    const response = await api.get(`/public/pengumuman/${identifier}`);
    return response.data;
  },

  // Mengambil foto galeri dengan filter kategori
  getGaleri: async (params = {}) => {
    const response = await api.get('/public/galeri', { params });
    return response.data;
  },

  // Mengirim pesan dari formulir kontak
  submitKontak: async (payload) => {
    const response = await api.post('/public/kontak', payload);
    return response.data;
  }
};

export default publicService;
