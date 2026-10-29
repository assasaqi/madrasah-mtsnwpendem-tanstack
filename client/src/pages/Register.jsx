import AuthLayout from '../components/auth/AuthLayout';
import RegisterForm from '../components/auth/RegisterForm';

// Menampilkan halaman pembuatan akun pengelola madrasah
export default function Register() {
  return (
    <AuthLayout
      title="Buat akun pengelola"
      description="Akun ini memberi akses ke panel pengelolaan madrasah."
      panelTitle="Tambahkan pengelola madrasah."
      panelDescription="Gunakan akun pengelola untuk mengurus konten publik dan proses penerimaan peserta didik baru."
      points={[
        'Gunakan email resmi madrasah bila tersedia.',
        'Kata sandi minimal 6 karakter.',
        'Setiap pengelola memiliki akses panel admin.'
      ]}
    >
      <RegisterForm scope="admin" />
    </AuthLayout>
  );
}
