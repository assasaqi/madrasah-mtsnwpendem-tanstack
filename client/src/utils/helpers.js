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

// Memformat jam menjadi format lokal (HH:mm)
export const formatTime = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace('.', ':');
};

// Memformat tanggal beserta jam (contoh: 30 Oktober 2026 • 13:45 WIB)
export const formatDateTime = (value, options = {}) => {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';
  const dateStr = formatDate(value, options);
  const timeStr = formatTime(value);
  return timeStr ? `${dateStr} • ${timeStr} WIB` : dateStr;
};

// Mengubah tanggal ISO atau Date menjadi format input datetime-local (YYYY-MM-DDTHH:mm)
export const toLocalInput = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const pad = (number) => String(number).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

// Menghapus seluruh tag HTML dari teks
export const stripHtml = (html) => String(html || '')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const ALLOWED_HTML_TAGS = new Set([
  'p', 'br', 'div', 'span', 'strong', 'b', 'em', 'i', 'u', 's',
  'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'blockquote', 'img', 'a', 'figure', 'figcaption',
  'table', 'thead', 'tbody', 'tr', 'th', 'td', 'hr'
]);

const ALLOWED_HTML_ATTRS = new Set(['href', 'target', 'rel', 'src', 'alt', 'title', 'class', 'colspan', 'rowspan', 'style']);
const SAFE_URI_REGEX = /^(https?:|mailto:|tel:|\/|#)/i;

// Membersihkan tag/atribut berbahaya dari HTML artikel agar aman untuk dangerouslySetInnerHTML
export const sanitizeHtml = (html) => {
  const input = String(html || '');
  if (!input || typeof DOMParser === 'undefined') return '';

  const doc = new DOMParser().parseFromString(input, 'text/html');
  const cleanNode = (node) => {
    Array.from(node.children).forEach((el) => {
      const tag = el.tagName.toLowerCase();
      if (!ALLOWED_HTML_TAGS.has(tag)) {
        if (['script', 'style', 'iframe', 'object', 'embed', 'svg', 'math'].includes(tag)) {
          el.remove();
        } else {
          cleanNode(el);
          el.replaceWith(...el.childNodes);
        }
        return;
      }

      Array.from(el.attributes).forEach((attr) => {
        const name = attr.name.toLowerCase();
        const val = attr.value.trim();

        if (!ALLOWED_HTML_ATTRS.has(name) || name.startsWith('on')) {
          el.removeAttribute(attr.name);
          return;
        }
        if ((name === 'href' || name === 'src') && !SAFE_URI_REGEX.test(val)) {
          el.removeAttribute(attr.name);
          return;
        }
        if (name === 'style') {
          const alignMatch = val.match(/(?:^|;)\s*text-align\s*:\s*(left|center|right|justify)\s*(?:;|$)/i);
          if (alignMatch) el.setAttribute('style', `text-align: ${alignMatch[1].toLowerCase()}`);
          else el.removeAttribute('style');
        }
      });

      if (tag === 'a' && el.getAttribute('target') === '_blank') {
        el.setAttribute('rel', 'noopener noreferrer');
      }

      cleanNode(el);
    });
  };

  cleanNode(doc.body);
  return doc.body.innerHTML;
};

// Mengubah teks artikel menjadi HTML rapi dengan paragraf, baris baru, dan sanitasi XSS
export const formatArticleHtml = (value) => {
  const teks = String(value || '')
    .replace(/\r\n?/g, '\n')
    .replace(/\uFFFD/g, ' ')
    .trim();

  if (!teks) return '';

  if (/<\/?(p|br|div|span|strong|em|b|i|u|ul|ol|li|h[1-6]|blockquote|img|a|figure|figcaption|table|thead|tbody|tr|th|td)\b[^>]*>/i.test(teks)) {
    return sanitizeHtml(teks);
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
