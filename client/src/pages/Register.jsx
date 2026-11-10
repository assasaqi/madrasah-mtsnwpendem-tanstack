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
        'Memerlukan kode undangan resmi dari administrator madrasah.',
        'Gunakan email resmi yang aktif untuk menerima kode OTP.',
        'Setiap pengelola memiliki akses panel admin.'
      ]}
    >
      <RegisterForm scope="admin" />
    </AuthLayout>
  );
}
