import axios from 'axios';
import { setGlobalSaving } from './savingState';

export const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

let refreshRequest = null;
let isRedirecting = false;

// Helper untuk mengecek apakah request ini merupakan operasi simpan/mutasi data
const isDataMutation = (config) => {
  if (!config) return false;
  const method = (config.method || '').toLowerCase();
  const isMutationMethod = ['post', 'put', 'patch', 'delete'].includes(method);
  const url = config.url || '';
  // Kecualikan auth background check
  const isBackgroundAuth = url.includes('/auth/refresh') || url.includes('/auth/me');
  return isMutationMethod && !isBackgroundAuth && !config.skipSavingLoading;
};

// Interceptor request: aktifkan loading dan catat waktu mulai untuk operasi simpan data
api.interceptors.request.use(
  (config) => {
    if (isDataMutation(config)) {
      config._saveStartTime = Date.now();
      setGlobalSaving(true);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Helper untuk memastikan durasi loading paling cepat 1 detik (1000ms)
const ensureMinDuration = async (startTime) => {
  if (!startTime) return;
  const elapsed = Date.now() - startTime;
  const remaining = 1000 - elapsed;
  if (remaining > 0) {
    await new Promise((resolve) => setTimeout(resolve, remaining));
  }
};

// Interceptor response: pastikan durasi minimal 1 detik dan matikan indikator loading
api.interceptors.response.use(
  async (response) => {
    if (response.config?._saveStartTime) {
      await ensureMinDuration(response.config._saveStartTime);
      setGlobalSaving(false);
      delete response.config._saveStartTime;
    }
    isRedirecting = false;
    return response;
  },
  async (error) => {
    const original = error.config;
    const url = original?.url || '';
    const isPublicRoute = url.includes('/public/') || url.startsWith('/public');
    const isAuthRoute = ['/auth/login', '/auth/register', '/auth/refresh', '/auth/logout', '/auth/me']
      .some((path) => url.includes(path));

    const canRetry = error.response?.status === 401 && !original?._retry && !isAuthRoute && !isPublicRoute && !original?.skipAuthRefresh;

    // Jika tidak akan di-retry, pastikan durasi minimal 1 detik dan matikan loading
    if (!canRetry && original?._saveStartTime) {
      await ensureMinDuration(original._saveStartTime);
      setGlobalSaving(false);
      delete original._saveStartTime;
    }

    // Jangan lakukan refresh auth atau redirect jika rute publik atau sudah ditandai skip
    if (!canRetry) {
      return Promise.reject(error);
    }

    original._retry = true;

    try {
      refreshRequest = refreshRequest || axios.post(
        `${API_BASE_URL}/auth/refresh`,
        {},
        { withCredentials: true }
      );
      await refreshRequest;
      refreshRequest = null;
      return api(original);
    } catch (refreshError) {
      refreshRequest = null;

      if (original?._saveStartTime) {
        await ensureMinDuration(original._saveStartTime);
        setGlobalSaving(false);
        delete original._saveStartTime;
      }

      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
      const isAdminRoute = currentPath.startsWith('/admin');
      const isProtectedSpmb = currentPath.startsWith('/spmb/dashboard') || currentPath.startsWith('/spmb/formulir');

      // HANYA alihkan ke login jika pengguna berada di rute terlindungi (Admin atau SPMB Dashboard)
      if ((isAdminRoute || isProtectedSpmb) && !original?.skipAuthRedirect && !isRedirecting && typeof window !== 'undefined') {
        isRedirecting = true;
        window.location.assign(isProtectedSpmb ? '/spmb/login' : '/login');
      }
      return Promise.reject(refreshError);
    }
  }
);

export default api;
