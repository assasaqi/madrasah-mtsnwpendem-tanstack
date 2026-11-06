import { useEffect, useState } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  MailCheck,
  RefreshCw
} from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import { authService } from '../services/authService';
import { getErrorMessage } from '../utils/helpers';

// Menentukan tautan penyedia webmail berdasarkan domain email pendaftar
const getWebmailUrl = (email) => {
  const domain = String(email || '').split('@')[1]?.toLowerCase() || '';
  if (domain.includes('gmail.com')) {
    return { name: 'Buka Gmail', url: 'https://mail.google.com' };
  }
  if (domain.includes('yahoo.')) {
    return { name: 'Buka Yahoo Mail', url: 'https://mail.yahoo.com' };
  }
  if (domain.includes('outlook.') || domain.includes('hotmail.') || domain.includes('live.')) {
    return { name: 'Buka Outlook', url: 'https://outlook.live.com' };
  }
  return { name: 'Buka Aplikasi Email', url: `mailto:${email}` };
};

export default function KonfirmasiEmail() {
  const search = useSearch({ strict: false }) || {};
  const emailParam = search.email || '';
  const scope = search.scope || 'spmb';
  const isAdmin = scope === 'admin';

  const [email] = useState(emailParam);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [cooldown, setCooldown] = useState(0);

  // Mengatur countdown pengiriman ulang email konfirmasi
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleKirimUlang = async () => {
    if (!email || cooldown > 0 || loading) return;
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await authService.resendConfirmation(email);
      setSuccessMsg(res?.message || 'Tautan konfirmasi baru berhasil dikirim ke email Anda.');
      setCooldown(60);
    } catch (err) {
      console.error('Gagal kirim ulang konfirmasi:', err);
      setErrorMsg(getErrorMessage(err, 'Gagal mengirim ulang email konfirmasi. Silakan coba sesaat lagi.'));
    } finally {
      setLoading(false);
    }
  };

  const loginPath = isAdmin ? '/login' : '/spmb/login';
  const registerPath = isAdmin ? '/register' : '/spmb/register';
  const webmail = getWebmailUrl(email);

  return (
    <AuthLayout
      title="Periksa email Anda"
      description="Tautan konfirmasi telah dikirim untuk mengaktifkan akun Anda."
      panelTitle="Satu langkah lagi menuju portal madrasah."
      panelDescription="Konfirmasi email diperlukan untuk memastikan akun pendaftar aman, valid, dan dapat menerima informasi resmi."
      points={[
        'Buka pesan dari sistem informasi MTs NW Pendem.',
        'Klik tautan konfirmasi untuk mengaktifkan akun.',
        'Periksa folder spam bila email belum muncul di kotak masuk.'
      ]}
    >
      <div className="space-y-5">
        {/* Ikon Status Header */}
        <div className="flex items-center gap-3 rounded-xl border border-brand/20 bg-brand-soft/50 p-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-white shadow-xs">
            <MailCheck size={22} />
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-bold text-ink">Konfirmasi Pendaftaran Akun</p>
            <p className="mt-0.5 text-[11.5px] text-muted">
              Periksa kotak masuk email Anda untuk menyelesaikan aktivasi.
            </p>
          </div>
        </div>

        {/* Kotak Alamat Email yang Dituju */}
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            Email tujuan konfirmasi
          </label>
          <div className="mt-1.5 flex items-center gap-2.5 rounded-lg border border-line bg-paper px-3.5 py-2.5 text-[13px] font-medium text-ink shadow-xs">
            <Mail size={16} className="shrink-0 text-brand" />
            <span className="truncate font-semibold text-ink">
              {email || 'Alamat email tidak terdeteksi'}
            </span>
          </div>
        </div>

        {/* Notifikasi Sukses / Gagal */}
        {successMsg && (
          <div className="flex items-start gap-2 rounded-lg border border-line border-l-2 border-l-emerald-600 bg-emerald-50/70 p-3 text-[11.5px] leading-relaxed text-emerald-900">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-700" />
            <span>{successMsg}</span>
          </div>
        )}

        {errorMsg && (
          <div className="flex items-start gap-2 rounded-lg border border-line border-l-2 border-l-rose-500 bg-rose-50/70 p-3 text-[11.5px] leading-relaxed text-rose-800">
            <AlertCircle size={15} className="mt-0.5 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Panduan Singkat */}
        <div className="rounded-lg border border-line/80 bg-canvas/60 p-3.5 text-[11.5px] leading-relaxed text-muted">
          <p className="font-semibold text-ink">Belum menerima email?</p>
          <ul className="mt-1.5 list-disc space-y-1 pl-4 text-muted/90">
            <li>Tunggu 1–2 menit, email konfirmasi sedang dalam pengiriman.</li>
            <li>Periksa folder <strong>Spam</strong>, <strong>Junk</strong>, atau <strong>Promosi</strong>.</li>
            <li>Pastikan alamat email yang Anda ketik sudah benar.</li>
          </ul>
        </div>

        {/* Aksi Utama */}
        <div className="space-y-2.5 pt-2">
          {email && (
            <a
              href={webmail.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand text-[12.5px] font-semibold text-white shadow-xs transition-all hover:bg-[#0f3f23] active:scale-[0.98]"
            >
              {webmail.name} <ExternalLink size={13} />
            </a>
          )}

          <Link
            to={loginPath}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-paper text-[12.5px] font-semibold text-ink shadow-xs transition-all hover:border-[#cfc9bc] hover:bg-[#faf8f3] active:scale-[0.98]"
          >
            Lanjut ke Halaman Masuk <ArrowRight size={13} />
          </Link>

          <button
            type="button"
            onClick={handleKirimUlang}
            disabled={loading || cooldown > 0 || !email}
            className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-transparent text-[12px] font-semibold text-brand transition-colors hover:bg-brand-soft disabled:pointer-events-none disabled:opacity-50"
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            <span>
              {cooldown > 0
                ? `Kirim ulang konfirmasi (${cooldown}d)`
                : 'Kirim ulang email konfirmasi'}
            </span>
          </button>
        </div>

        {/* Tautan Ubah / Daftar Ulang */}
        <p className="pt-2 text-center text-[11.5px] text-muted">
          Salah memasukkan alamat email?{' '}
          <Link to={registerPath} className="font-semibold text-brand hover:underline">
            Daftar ulang
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
