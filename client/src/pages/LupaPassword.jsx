import { useState } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import { AlertCircle, ArrowLeft, CheckCircle2, Mail, Send } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import AuthField from '../components/auth/AuthField';
import { authService } from '../services/authService';
import { getErrorMessage } from '../utils/helpers';

// Menampilkan halaman permintaan tautan atur ulang kata sandi
export default function LupaPassword() {
  const search = useSearch({ strict: false }) || {};
  const isAdmin = search.scope === 'admin';
  const loginPath = isAdmin ? '/login' : '/spmb/login';

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError('Masukkan alamat email yang valid.');
      return;
    }

    try {
      setLoading(true);
      const res = await authService.forgotPassword(cleanEmail);
      setSent(true);
      setMessage(
        res?.message ||
          'Jika alamat email terdaftar, tautan untuk mengatur ulang kata sandi telah dikirim.'
      );
    } catch (err) {
      console.error('Lupa password error:', err);
      setError(getErrorMessage(err, 'Gagal memproses permintaan. Silakan coba lagi.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Lupa kata sandi"
      description="Masukkan email akun Anda untuk menerima tautan pembaruan kata sandi."
      panelTitle="Pulihkan akses akun Anda."
      panelDescription="Kami akan mengirimkan tautan aman ke alamat email terdaftar agar Anda dapat membuat kata sandi baru."
      points={[
        'Gunakan email yang dipakai saat mendaftar akun.',
        'Tautan atur ulang berlaku selama 30 menit.',
        'Periksa folder spam apabila pesan belum masuk.'
      ]}
    >
      {sent ? (
        <div className="space-y-5">
          <div className="flex items-start gap-3 rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-[12px] leading-relaxed text-emerald-950">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-700" />
            <div>
              <p className="font-bold">Permintaan Terkirim</p>
              <p className="mt-1">{message}</p>
            </div>
          </div>

          <Link
            to={loginPath}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-line bg-paper text-[12.5px] font-semibold text-ink transition-colors hover:bg-[#faf8f3]"
          >
            <ArrowLeft size={14} /> Kembali ke Halaman Masuk
          </Link>
        </div>
      ) : (
        <>
          {error && (
            <div className="mb-4 flex items-start gap-2.5 rounded-md border border-red-300 border-l-2 border-l-red-600 bg-red-50 px-3.5 py-2.5 text-[12px] font-medium leading-relaxed text-red-900">
              <AlertCircle size={15} className="mt-0.5 shrink-0 text-red-600" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthField
              id="email"
              name="email"
              type="email"
              label="Alamat email terdaftar"
              icon={Mail}
              required
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setError('');
                setEmail(e.target.value);
              }}
              placeholder="nama@email.com"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-brand px-4 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#0f3d22] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
              <Send size={14} />
              <span>{loading ? 'Mengirim…' : 'Kirim Tautan Atur Ulang'}</span>
            </button>
          </form>

          <div className="mt-5 border-t border-line pt-4 text-center text-[11.5px] text-muted">
            Ingat kata sandi Anda?{' '}
            <Link to={loginPath} className="font-semibold text-brand hover:underline">
              Kembali masuk
            </Link>
          </div>
        </>
      )}
    </AuthLayout>
  );
}
