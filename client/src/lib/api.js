import axios from 'axios';
import { setGlobalSaving } from './savingState';

export const API_BASE_URL =
  (typeof import.meta !== 'undefined' &&
    (import.meta.env?.VITE_API_URL || import.meta.env?.VITE_API_BASE_URL)) ||
  'http://localhost:5000/api';

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

// Interceptor request: aktifkan indikator loading untuk operasi mutasi data
api.interceptors.request.use(
  (config) => {
    if (isDataMutation(config)) {
      config._isSavingTracked = true;
      setGlobalSaving(true);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const clearSavingIfTracked = (config) => {
  if (config?._isSavingTracked) {
    setGlobalSaving(false);
    delete config._isSavingTracked;
  }
};

// Interceptor response: matikan indikator loading segera setelah respons diterima
api.interceptors.response.use(
  (response) => {
    clearSavingIfTracked(response.config);
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

    if (!canRetry) {
      clearSavingIfTracked(original);
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
      clearSavingIfTracked(original);

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
