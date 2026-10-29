import axios from 'axios';

export const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

let refreshRequest = null;
let isRedirecting = false;

// Memperbarui access token sekali dan mengulang permintaan yang gagal
api.interceptors.response.use(
  (response) => {
    isRedirecting = false;
    return response;
  },
  async (error) => {
    const original = error.config;
    const url = original?.url || '';
    const isAuthRoute = ['/auth/login', '/auth/register', '/auth/refresh', '/auth/logout', '/auth/me']
      .some((path) => url.includes(path));

    if (error.response?.status !== 401 || original?._retry || isAuthRoute || original?.skipAuthRefresh) {
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
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
      const isAuthPage = ['/login', '/register', '/spmb/login', '/spmb/register'].some((p) =>
        currentPath.startsWith(p)
      );

      if (!original?.skipAuthRedirect && !isAuthPage && !isRedirecting && typeof window !== 'undefined') {
        isRedirecting = true;
        window.location.assign('/login');
      }
      return Promise.reject(refreshError);
    }
  }
);

export default api;
