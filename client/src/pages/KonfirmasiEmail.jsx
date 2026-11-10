import { useEffect, useRef, useState } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MailCheck,
  RefreshCw,
  ShieldCheck
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

const formatTimer = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export default function KonfirmasiEmail() {
  const search = useSearch({ strict: false }) || {};
  const emailParam = String(search.email || '').trim().toLowerCase();
  const scope = search.scope === 'admin' ? 'admin' : 'spmb';
  const isAdmin = scope === 'admin';

  const [email, setEmail] = useState(emailParam);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [verifiedRole, setVerifiedRole] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const [otpExpiresIn, setOtpExpiresIn] = useState(600);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (emailParam) setEmail(emailParam);
  }, [emailParam]);

  // Hitung mundur masa berlaku OTP (10 menit) dan cooldown kirim ulang
  useEffect(() => {
    if (verified) return undefined;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
      setOtpExpiresIn((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [verified]);

  const otpCode = otpDigits.join('');

  const handleDigitChange = (index, rawValue) => {
    const cleaned = rawValue.replace(/\D/g, '');
    setErrorMsg('');

    // Mendukung paste beberapa digit sekaligus di kotak mana pun
    if (cleaned.length > 1) {
      const next = [...otpDigits];
      cleaned.slice(0, 6 - index).split('').forEach((digit, offset) => {
        next[index + offset] = digit;
      });
      setOtpDigits(next);
      const nextFocus = Math.min(index + cleaned.length, 5);
      inputRefs.current[nextFocus]?.focus();
      return;
    }

    const next = [...otpDigits];
    next[index] = cleaned;
    setOtpDigits(next);

    if (cleaned && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleDigitKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePasteOtp = (event) => {
    const pasted = event.clipboardData?.getData('text')?.replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    event.preventDefault();
    const next = ['', '', '', '', '', ''];
    pasted.split('').forEach((digit, idx) => {
      next[idx] = digit;
    });
    setOtpDigits(next);
    setErrorMsg('');
    const focusIdx = Math.min(pasted.length, 5);
    inputRefs.current[focusIdx]?.focus();
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setErrorMsg('Alamat email wajib diisi terlebih dahulu.');
      return;
    }
    if (otpCode.length !== 6) {
      setErrorMsg('Masukkan 6 digit kode OTP yang dikirim ke email Anda.');
      return;
    }

    try {
      setVerifying(true);
      const res = await authService.verifyOtp({ email: cleanEmail, otp: otpCode });
      setVerified(true);
      setVerifiedRole(res?.role || '');
      setSuccessMsg(res?.message || 'Alamat email berhasil diverifikasi!');
    } catch (err) {
      console.error('Verifikasi OTP gagal:', err);
      setErrorMsg(
        getErrorMessage(err, 'Kode OTP tidak valid atau telah kedaluwarsa. Silakan periksa kembali.')
      );
    } finally {
      setVerifying(false);
    }
  };

  const handleKirimUlang = async () => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || cooldown > 0 || resending) return;
    setResending(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await authService.resendConfirmation(cleanEmail);
      if (res?.alreadyVerified) {
        setVerified(true);
        setSuccessMsg(res.message);
        return;
      }
      setOtpDigits(['', '', '', '', '', '']);
      setOtpExpiresIn(res?.expiresInSeconds || 600);
      setCooldown(60);
      setSuccessMsg(res?.message || 'Kode OTP 6 digit baru telah dikirim ke email Anda.');
      inputRefs.current[0]?.focus();
    } catch (err) {
      console.error('Gagal kirim ulang OTP:', err);
      setErrorMsg(getErrorMessage(err, 'Gagal mengirim ulang kode OTP. Silakan coba sesaat lagi.'));
    } finally {
      setResending(false);
    }
  };

  const targetIsAdmin = verifiedRole ? verifiedRole === 'ADMIN' : isAdmin;
  const loginPath = targetIsAdmin ? '/login' : '/spmb/login';
  const registerPath = isAdmin ? '/register' : '/spmb/register';
  const webmail = getWebmailUrl(email);

  return (
    <AuthLayout
      title={verified ? 'Akun Aktif' : 'Verifikasi Kode OTP'}
      description={
        verified
          ? 'Email Anda telah dikonfirmasi dan siap digunakan.'
          : 'Masukkan 6 digit kode verifikasi yang dikirim ke kotak masuk email Anda.'
      }
      panelTitle="Satu langkah lagi menuju portal madrasah."
      panelDescription="Verifikasi OTP memastikan alamat email aktif sehingga pengumuman seleksi dan pemulihan akun dapat dikirimkan dengan aman."
      points={[
        'Cek pesan dari MTs NW Pendem di kotak masuk atau folder spam.',
        'Masukkan 6 digit kode OTP sebelum batas waktu 10 menit berakhir.',
        'Atau klik tautan cadangan di dalam email untuk aktivasi instan.'
      ]}
    >
      {verified ? (
        <div className="space-y-5">
          <div className="flex items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50 p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
              <CheckCircle2 size={22} />
            </span>
            <div className="min-w-0">
              <p className="text-[13.5px] font-bold text-emerald-950">Email Berhasil Diverifikasi!</p>
              <p className="mt-0.5 text-[11.5px] text-emerald-900">
                {successMsg || 'Akun Anda kini telah aktif dan dapat digunakan untuk masuk.'}
              </p>
            </div>
          </div>

          {email && (
            <div className="flex items-center justify-center gap-2 rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-[12.5px] font-semibold text-ink">
              <Mail size={14} className="text-brand" />
              <span className="truncate">{email}</span>
            </div>
          )}

          <Link
            to={loginPath}
            state={{ registeredEmail: email.trim().toLowerCase() }}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand text-[12.5px] font-semibold text-white shadow-xs transition-all hover:bg-[#065f46] active:scale-[0.98]"
          >
            Masuk ke Akun Sekarang <ArrowRight size={14} />
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Header status */}
          <div className="flex items-center gap-3 rounded-xl border border-brand/20 bg-brand-soft/50 p-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white shadow-xs">
              <MailCheck size={20} />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-bold text-ink">Masukkan Kode OTP</p>
              <p className="mt-0.5 truncate text-[11.5px] text-muted">
                Dikirim ke <strong className="text-ink">{email || 'email Anda'}</strong>
              </p>
            </div>
          </div>

          {!emailParam && (
            <div>
              <label htmlFor="otpEmail" className="text-[11.5px] font-semibold text-ink/80">
                Alamat email terdaftar
              </label>
              <input
                id="otpEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="mt-1.5 w-full rounded-md border border-line bg-paper px-3 py-2 text-[12.5px] text-ink outline-none focus:border-brand/60 focus:ring-2 focus:ring-brand/10"
              />
            </div>
          )}

          {successMsg && (
            <div className="flex items-start gap-2 rounded-md border border-emerald-300 border-l-2 border-l-emerald-600 bg-emerald-50 px-3 py-2.5 text-[11.5px] font-medium leading-relaxed text-emerald-950">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-700" />
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="flex items-start gap-2 rounded-md border border-red-300 border-l-2 border-l-red-600 bg-red-50 px-3 py-2.5 text-[11.5px] font-medium leading-relaxed text-red-900">
              <AlertCircle size={15} className="mt-0.5 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Form Input 6 Digit OTP */}
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-ink/80">Kode 6 digit</span>
                <span
                  className={[
                    'inline-flex items-center gap-1 font-medium',
                    otpExpiresIn > 0 ? 'text-muted' : 'text-red-700'
                  ].join(' ')}
                >
                  <Clock size={12} />
                  {otpExpiresIn > 0
                    ? `Berlaku ${formatTimer(otpExpiresIn)}`
                    : 'Kode kedaluwarsa'}
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2" onPaste={handlePasteOtp}>
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete={index === 0 ? 'one-time-code' : 'off'}
                    maxLength={6}
                    aria-label={`Digit OTP ke-${index + 1}`}
                    value={digit}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleDigitKeyDown(index, e)}
                    className="h-11 w-full rounded-md border border-line bg-paper text-center font-mono text-lg font-bold text-ink outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/15"
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={verifying || otpCode.length !== 6}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-brand text-[12.5px] font-semibold text-white shadow-xs transition-all hover:bg-[#065f46] disabled:cursor-not-allowed disabled:opacity-55 cursor-pointer"
            >
              <ShieldCheck size={15} />
              <span>{verifying ? 'Memverifikasi…' : 'Verifikasi Kode OTP'}</span>
            </button>
          </form>

          {/* Aksi Pendukung */}
          <div className="space-y-2 border-t border-line pt-3">
            {email && (
              <a
                href={webmail.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md border border-line bg-paper text-[12px] font-semibold text-ink transition-colors hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
              >
                {webmail.name} <ExternalLink size={13} />
              </a>
            )}

            <button
              type="button"
              onClick={handleKirimUlang}
              disabled={resending || cooldown > 0 || !email.trim()}
              className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md text-[12px] font-semibold text-brand transition-colors hover:bg-brand-soft disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw size={13} className={resending ? 'animate-spin' : ''} />
              <span>
                {cooldown > 0
                  ? `Kirim ulang kode OTP (${cooldown}d)`
                  : 'Kirim ulang kode OTP'}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-between pt-1 text-[11px] text-muted">
            <Link to={registerPath} className="font-medium text-brand hover:underline">
              ← Ganti email / daftar ulang
            </Link>
            <Link to={loginPath} className="hover:text-ink hover:underline">
              Ke halaman masuk
            </Link>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
