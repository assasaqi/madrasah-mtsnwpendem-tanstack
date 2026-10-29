import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';

// Menampilkan halaman masuk khusus pengelola madrasah
export default function Login() {
  return (
    <AuthLayout
      title="Masuk sebagai pengelola"
      description="Kelola konten, profil madrasah, dan verifikasi pendaftar SPMB."
      panelTitle="Ruang kerja pengelola madrasah."
      panelDescription="Satu tempat untuk memperbarui informasi publik, memverifikasi berkas, dan menerbitkan pengumuman."
      points={[
        'Kelola berita, pengumuman, dan galeri.',
        'Verifikasi berkas pendaftar SPMB.',
        'Atur profil madrasah dan pengaturan surat.'
      ]}
    >
      <LoginForm scope="admin" />
    </AuthLayout>
  );
}
