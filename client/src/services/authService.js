import api from './api';

export const authService = {
  // Melakukan login dan menyimpan sesi pada cookie HTTP-only
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Mendaftarkan akun calon pendaftar baru
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  // Mendaftarkan akun pengelola madrasah
  registerAdmin: async (userData) => {
    const response = await api.post('/auth/register-admin', userData);
    return response.data;
  },

  // Mengambil profil pengguna aktif dari cookie sesi
  getMe: async () => {
    const response = await api.get('/auth/me', { skipAuthRedirect: true });
    return response.data?.user || null;
  },

  // Menghapus cookie sesi di server
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};

export default authService;
