import AuthLayout from '../../components/auth/AuthLayout';
import RegisterForm from '../../components/auth/RegisterForm';

// Menampilkan halaman pembuatan akun calon pendaftar SPMB
export default function SpmbRegister() {
  return (
    <AuthLayout
      title="Buat akun SPMB"
      description="Satu akun untuk mengisi formulir, mengunggah berkas, dan memantau verifikasi."
      panelTitle="Mulai pendaftaran dengan satu akun."
      panelDescription="Akun ini dipakai untuk seluruh proses seleksi penerimaan peserta didik baru di madrasah."
      points={[
        'Gunakan email aktif yang sering diperiksa.',
        'Kata sandi minimal 6 karakter.',
        'Lengkapi biodata setelah akun dibuat.'
      ]}
    >
      <RegisterForm scope="spmb" />
    </AuthLayout>
  );
}
