const rawApiUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) || 'http://localhost:5000/api';

// Alamat asal backend tanpa akhiran /api untuk berkas statis
export const API_ORIGIN = rawApiUrl.replace(/\/api\/?$/, '').replace(/\/$/, '');

// Membentuk URL lengkap untuk berkas unggahan
export const getFileUrl = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;

  const cleanPath = String(path)
    .replace(/^\/?uploads\//, '')
    .replace(/^\/+/, '');

  return `${API_ORIGIN}/uploads/${cleanPath}`;
};

// Mengambil nilai atribut bersarang dengan fallback
export const getField = (item, paths, fallback = '-') => {
  if (!item) return fallback;
  for (const path of paths) {
    const value = String(path)
      .split('.')
      .reduce((current, key) => current?.[key], item);
    if (value !== undefined && value !== null && value !== '') return value;
  }
  return fallback;
};

// Memformat tanggal menjadi teks berbahasa Indonesia
export const formatDate = (value, options = {}) => {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...options
  });
};

// Menghapus seluruh tag HTML dari teks
export const stripHtml = (html) => String(html || '')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

// Mengubah teks artikel menjadi HTML rapi dengan paragraf dan baris baru
export const formatArticleHtml = (value) => {
  const teks = String(value || '')
    .replace(/\r\n?/g, '\n')
    .replace(/\uFFFD/g, ' ')
    .trim();

  if (!teks) return '';

  // Konten yang sudah berupa HTML dibiarkan apa adanya
  if (/<\/?(p|br|div|span|strong|em|b|i|u|ul|ol|li|h[1-6]|blockquote|img|a|figure|figcaption|table|thead|tbody|tr|th|td)\b[^>]*>/i.test(teks)) {
    return teks;
  }

  const escapeHtml = (text) => text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return teks
    .split(/\n{2,}/)
    .map((paragraf) => paragraf.trim())
    .filter(Boolean)
    .map((paragraf) => `<p>${escapeHtml(paragraf).replace(/\n/g, '<br />')}</p>`)
    .join('');
};

// Mengambil pesan error yang ramah dari respons API
export const getErrorMessage = (error, fallback = 'Terjadi kesalahan. Silakan coba lagi.') => {
  const message = error?.response?.data?.message || error?.message;
  if (!message || typeof message !== 'string') return fallback;

  const isTechnical = /prisma|database|invocation|pool timeout|ECONNREFUSED/i.test(message);
  return isTechnical ? fallback : message;
};
