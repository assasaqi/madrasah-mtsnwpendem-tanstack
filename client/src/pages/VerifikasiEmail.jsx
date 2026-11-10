import { useEffect, useState } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import { authService } from '../services/authService';
import { getErrorMessage } from '../utils/helpers';

export default function VerifikasiEmail() {
  const search = useSearch({ strict: false }) || {};
  const token = search.token || '';
  const email = search.email || '';

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [role, setRole] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let aktif = true;

    const verifikasi = async () => {
      if (!token) {
        setLoading(false);
        setErrorMsg('Token konfirmasi tidak ditemukan atau tautan tidak lengkap.');
        return;
      }

      try {
        const res = await authService.verifyEmail(token);
        if (aktif) {
          setSuccess(true);
          setRole(res?.role || '');
        }
      } catch (err) {
        console.error('Verifikasi email gagal:', err);
        if (aktif) {
          setErrorMsg(
            getErrorMessage(
              err,
              'Tautan konfirmasi tidak valid, sudah digunakan, atau telah kedaluwarsa.'
            )
          );
        }
      } finally {
        if (aktif) setLoading(false);
      }
    };

    verifikasi();

    return () => {
      aktif = false;
    };
  }, [token]);

  const loginPath = role === 'ADMIN' ? '/login' : '/spmb/login';

  return (
    <AuthLayout
      title="Aktivasi Akun"
      description="Verifikasi alamat email untuk membuka akses portal pendaftaran."
      panelTitle="Akun terverifikasi dan siap digunakan."
      panelDescription="Sistem pendaftaran madrasah menjaga validitas data setiap calon siswa dan pengelola melalui verifikasi email resmi."
      points={[
        'Email terkonfirmasi secara aman di basis data.',
        'Satu akun dipakai untuk seluruh proses penerimaan siswa.',
        'Pemberitahuan hasil seleksi akan dikirimkan ke email ini.'
      ]}
    >
      <div className="space-y-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <Loader2 size={36} className="animate-spin text-brand" />
            <p className="mt-4 text-[14px] font-semibold text-ink">Memverifikasi email Anda…</p>
            <p className="mt-1 text-[12px] text-muted">Mohon tunggu sebentar, sistem sedang mengaktifkan akun Anda.</p>
          </div>
        ) : success ? (
          <div className="space-y-5">
            <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-50/70 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
                <CheckCircle2 size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-[13.5px] font-bold text-emerald-950">Email Berhasil Dikonfirmasi!</p>
                <p className="mt-0.5 text-[11.5px] text-emerald-800">
                  Akun Anda telah aktif dan dapat langsung digunakan untuk masuk.
                </p>
              </div>
            </div>

            {email && (
              <p className="rounded-lg border border-line bg-canvas p-3 text-center text-[12.5px] font-medium text-ink">
                {email}
              </p>
            )}

            <div className="pt-2">
              <Link
                to={loginPath}
                state={email ? { registeredEmail: email } : undefined}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand text-[12.5px] font-semibold text-white shadow-xs transition-all hover:bg-[#065f46] active:scale-[0.98]"
              >
                Masuk ke Akun Sekarang <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-3 rounded-xl border border-red-300 bg-red-50 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white shadow-xs">
                <AlertCircle size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-[13.5px] font-bold text-red-950">Konfirmasi Gagal</p>
                <p className="mt-0.5 text-[11.5px] font-medium text-red-900">{errorMsg}</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <Link
                to="/spmb/konfirmasi-email"
                search={{ email }}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand text-[12.5px] font-semibold text-white shadow-xs transition-all hover:bg-[#065f46] active:scale-[0.98]"
              >
                Kirim Ulang Email Konfirmasi
              </Link>

              <Link
                to="/spmb/login"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-paper text-[12.5px] font-semibold text-ink shadow-xs transition-all hover:border-[#cbd5e1] hover:bg-[#f8fafc] active:scale-[0.98]"
              >
                Ke Halaman Masuk <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
