import api from './api';

const unwrap = (response) => response.data?.data ?? response.data;

// Mengambil profil admin yang sedang login
export const getAdminProfile = async () => {
  const response = await api.get('/admin/profile/me');
  return unwrap(response);
};

// Memperbarui email dan foto profil admin
export const updateAdminProfile = async (formData) => {
  const response = await api.put('/admin/profile/me', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return unwrap(response);
};

// Mengubah password admin
export const changeAdminPassword = async (payload) => {
  const response = await api.put('/admin/profile/change-password', payload);
  return response.data;
};

// Mengambil profil sekolah untuk formulir admin
export const getAdminSchoolProfile = async () => {
  const response = await api.get('/admin/profile/school');
  return unwrap(response);
};

// Memperbarui profil sekolah beserta logo dan banner
export const updateAdminSchoolProfile = async (formData) => {
  const response = await api.put('/admin/profile/school', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return unwrap(response);
};

// Mengambil profil sekolah untuk halaman publik
export const getPublicSchoolProfile = async () => {
  const response = await api.get('/public/profile/school');
  return response.data;
};

// Mengambil narasi sejarah singkat madrasah
export const getSejarah = async () => {
  const response = await api.get('/admin/profile/sejarah');
  return unwrap(response) || { sejarah: '' };
};

// Menyimpan narasi sejarah singkat madrasah
export const updateSejarah = async (sejarah) => {
  const response = await api.put('/admin/profile/sejarah', { sejarah });
  return response.data;
};

// Mengambil daftar pengurus struktur organisasi
export const getStruktur = async () => {
  const response = await api.get('/admin/profile/struktur');
  return unwrap(response) || [];
};

// Menambahkan pengurus struktur organisasi
export const createStruktur = async (formData) => {
  const response = await api.post('/admin/profile/struktur', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return unwrap(response);
};

// Memperbarui pengurus struktur organisasi
export const updateStruktur = async (id, formData) => {
  const response = await api.put(`/admin/profile/struktur/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return unwrap(response);
};

// Menghapus pengurus struktur organisasi
export const deleteStruktur = async (id) => {
  const response = await api.delete(`/admin/profile/struktur/${id}`);
  return response.data;
};

// Menyimpan susunan urutan pengurus struktur organisasi
export const reorderStruktur = async (ids) => {
  const response = await api.put('/admin/profile/struktur/reorder', { ids });
  return unwrap(response);
};

// Mengambil daftar fasilitas madrasah
export const getFasilitas = async () => {
  const response = await api.get('/admin/profile/fasilitas');
  return unwrap(response) || [];
};

// Menambahkan fasilitas madrasah
export const createFasilitas = async (formData) => {
  const response = await api.post('/admin/profile/fasilitas', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return unwrap(response);
};

// Memperbarui fasilitas madrasah
export const updateFasilitas = async (id, formData) => {
  const response = await api.put(`/admin/profile/fasilitas/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return unwrap(response);
};

// Menghapus fasilitas madrasah
export const deleteFasilitas = async (id) => {
  const response = await api.delete(`/admin/profile/fasilitas/${id}`);
  return response.data;
};

// Mengambil konfigurasi tautan Rapor Digital Madrasah (RDM)
export const getRdmSettings = async () => {
  const response = await api.get('/admin/profile/rdm');
  return unwrap(response);
};

// Memperbarui konfigurasi tautan Rapor Digital Madrasah (RDM)
export const updateRdmSettings = async (payload) => {
  const response = await api.put('/admin/profile/rdm', payload);
  return unwrap(response);
};
