import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';

// Menampilkan halaman masuk khusus calon pendaftar SPMB
export default function SpmbLogin() {
  return (
    <AuthLayout
      title="Masuk ke portal SPMB"
      description="Gunakan akun pendaftar untuk melanjutkan proses seleksi."
      panelTitle="Satu akun untuk seluruh proses SPMB."
      panelDescription="Masuk untuk melanjutkan pendaftaran, memantau verifikasi berkas, dan mencetak surat keterangan lulus."
      points={[
        'Isi biodata dan unggah berkas persyaratan.',
        'Pantau status verifikasi dari panitia.',
        'Cetak surat keterangan lulus bila dinyatakan lulus.'
      ]}
    >
      <LoginForm scope="spmb" />
    </AuthLayout>
  );
}
