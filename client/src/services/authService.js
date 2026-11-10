import api, { API_BASE_URL } from './api';

export const authService = {
  // Melakukan login dan menyimpan sesi pada cookie HTTP-only
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Mendapatkan URL redirect autentikasi Google OAuth
  getGoogleAuthUrl: (scope = 'spmb', mode = 'register') =>
    `${API_BASE_URL}/auth/google?scope=${encodeURIComponent(scope)}&mode=${encodeURIComponent(mode)}`,

  // Menyelesaikan konfirmasi akun Google dan mendaftarkan/masuk ke sistem
  completeGoogleAuth: async (payload) => {
    const response = await api.post('/auth/google/complete', payload);
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

  // Mengirim ulang email konfirmasi pendaftaran
  resendConfirmation: async (email) => {
    const response = await api.post('/auth/resend-confirmation', { email });
    return response.data;
  },

  // Memverifikasi kode OTP 6 digit pendaftar
  verifyOtp: async ({ email, otp }) => {
    const response = await api.post('/auth/verify-otp', { email, otp });
    return response.data;
  },

  // Memverifikasi token email pendaftar
  verifyEmail: async (token) => {
    const response = await api.post('/auth/verify-email', { token });
    return response.data;
  },

  // Mengirim permintaan atur ulang kata sandi ke email terdaftar
  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },

  // Menyimpan kata sandi baru menggunakan token reset
  resetPassword: async ({ token, password }) => {
    const response = await api.post('/auth/reset-password', { token, password });
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
