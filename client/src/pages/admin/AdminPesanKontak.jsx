import { Navigate } from '@tanstack/react-router';

// Halaman pesan kontak telah dinonaktifkan
export default function AdminPesanKontak() {
  return <Navigate to="/admin/dashboard" replace />;
}
