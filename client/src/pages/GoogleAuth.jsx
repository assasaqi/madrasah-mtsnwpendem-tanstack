import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { authService } from '../services/authService';
import { AuthContext } from '../context/authContextObject';
import { API_ORIGIN, getErrorMessage } from '../utils/helpers';
import useSchoolProfile from '../hooks/useSchoolProfile';

export function GoogleIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Halaman Konfirmasi Akun Gmail Aktif dari Google OAuth 2.0 (Tanpa Form Input)
export default function GoogleAuth() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) || {};
  const { login: setAuthContext } = useContext(AuthContext);
  const { profil } = useSchoolProfile();

  const namaSekolah = profil?.namaSekolah || 'MTs NW Pendem';
  const scope = search.scope === 'admin' ? 'admin' : 'spmb';
  const mode = search.mode === 'login' ? 'login' : 'register';
  const isAdmin = scope === 'admin';
  const isMissingOAuth = search.error === 'missing_google_oauth';

  const [step, setStep] = useState('confirm');
  const [loading, setLoading] = useState(false);
  const [fetchingPending, setFetchingPending] = useState(
    !isMissingOAuth && search.step === 'confirm'
  );
  const [pendingAccount, setPendingAccount] = useState(null);
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState(
    search.error && !isMissingOAuth
      ? 'Gagal memverifikasi sesi Google. Silakan coba kembali.'
      : ''
  );
  const [registeredUser, setRegisteredUser] = useState(null);

  const dashboardPath = isAdmin ? '/admin/dashboard' : '/spmb/dashboard';
  const backPath =
    mode === 'login'
      ? isAdmin
        ? '/login'
        : '/spmb/login'
      : isAdmin
        ? '/register'
        : '/spmb/register';

  // Muat metadata akun Google tertunda dari cookie httpOnly
  useEffect(() => {
    if (isMissingOAuth || search.step !== 'confirm') return undefined;
    let ignore = false;

    authService
      .getPendingGoogleAuth()
      .then((data) => {
        if (!ignore) setPendingAccount(data);
      })
      .catch((err) => {
        if (!ignore) {
          setError(
            getErrorMessage(err, 'Sesi konfirmasi Google telah berakhir. Silakan ulangi.')
          );
        }
      })
      .finally(() => {
        if (!ignore) setFetchingPending(false);
      });

    return () => {
      ignore = true;
    };
  }, [isMissingOAuth, search.step]);

  // Otomatis alihkan ke dashboard setelah berhasil
  useEffect(() => {
    if (step !== 'success') return;
    const timer = setTimeout(() => {
      navigate({ to: dashboardPath });
    }, 1800);
    return () => clearTimeout(timer);
  }, [step, navigate, dashboardPath]);

  // Konfirmasi akun Gmail aktif yang dikembalikan oleh Google OAuth
  const handleConfirmGoogle = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await authService.completeGoogleAuth({
        ...(isAdmin && mode === 'register' ? { inviteCode: inviteCode.trim() } : {})
      });

      const user = response?.user;
      if (user) {
        setAuthContext(user);
        setRegisteredUser(user);
      }

      setStep('success');
    } catch (err) {
      console.error('Google auth error:', err);
      setError(
        getErrorMessage(err, 'Gagal memproses akun Google Anda. Silakan coba lagi.')
      );
    } finally {
      setLoading(false);
    }
  };

  const displayEmail = pendingAccount?.email || '';
  const displayName = pendingAccount?.nama || (displayEmail ? displayEmail.split('@')[0] : '');
  const displayFoto = pendingAccount?.foto || '';
  const inisial = String(displayName || displayEmail || 'G')
    .trim()
    .charAt(0)
    .toUpperCase();

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-canvas px-4 py-10 font-sans text-ink">
      <div className="w-full max-w-sm space-y-6 rounded-2xl border border-line bg-paper p-6 shadow-paper sm:p-8">
        {error && (
          <div className="flex items-start gap-2 rounded-lg border border-line border-l-2 border-l-rose-500 bg-rose-50/70 px-3.5 py-2.5 text-[11.5px] leading-relaxed text-rose-800">
            <AlertCircle size={15} className="mt-0.5 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        {/* JIKA GOOGLE_CLIENT_ID BELUM DIISI DI SERVER/.ENV */}
        {isMissingOAuth ? (
          <div className="space-y-5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white shadow-xs">
              <GoogleIcon className="h-6 w-6" />
            </div>

            <div className="space-y-1.5">
              <h1 className="text-lg font-semibold tracking-tight text-ink">
                Konfigurasi Google OAuth Diperlukan
              </h1>
              <p className="text-xs leading-relaxed text-muted">
                Agar browser dapat membaca <strong>akun Gmail yang sedang aktif</strong> melalui{' '}
                <code>accounts.google.com</code>, isi kredensial Google OAuth pada{' '}
                <code>server/.env</code>:
              </p>
            </div>

            <div className="rounded-xl border border-line bg-canvas p-3.5 text-left font-mono text-[11px] leading-relaxed text-ink overflow-x-auto">
              <p>GOOGLE_CLIENT_ID=&quot;...&quot;</p>
              <p>GOOGLE_CLIENT_SECRET=&quot;...&quot;</p>
              <p className="mt-1.5 text-muted">
                Redirect URI: {API_ORIGIN}/api/auth/google/callback
              </p>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() =>
                  window.location.assign(authService.getGoogleAuthUrl(scope, mode))
                }
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#065f46] active:scale-[0.98] cursor-pointer"
              >
                <GoogleIcon className="h-4 w-4 rounded-full bg-white p-0.5" />
                <span>Coba Hubungkan Ulang Google</span>
              </button>

              <Link
                to={backPath}
                className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-line bg-paper px-4 text-sm font-medium text-muted transition-colors hover:bg-canvas hover:text-ink"
              >
                Kembali
              </Link>
            </div>
          </div>
        ) : step === 'confirm' ? (
          /* TAHAP KONFIRMASI AKUN GMAIL AKTIF DARI GOOGLE OAUTH */
          <div className="space-y-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white shadow-xs overflow-hidden">
              {displayFoto ? (
                <img
                  src={displayFoto}
                  alt={displayName || displayEmail}
                  className="h-full w-full object-cover"
                />
              ) : (
                <GoogleIcon className="h-6 w-6" />
              )}
            </div>

            <div className="space-y-1.5">
              <h1 className="text-xl font-semibold tracking-tight text-ink">
                Konfirmasi Akun Google
              </h1>
              <p className="text-sm text-muted">
                Lanjutkan ke <strong className="font-semibold text-ink">{namaSekolah}</strong>
              </p>
            </div>

            {fetchingPending ? (
              <div className="flex items-center justify-center gap-2 rounded-xl border border-line bg-canvas/70 p-4 text-xs text-muted">
                <Loader2 size={15} className="animate-spin text-brand" />
                <span>Memuat akun Google…</span>
              </div>
            ) : displayEmail ? (
              <div className="flex items-center gap-3 rounded-xl border border-line bg-canvas/70 p-3.5 text-left">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  {inisial}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">
                    {displayName}
                  </p>
                  <p className="truncate text-xs text-muted">{displayEmail}</p>
                </div>
                <CheckCircle2 size={17} className="shrink-0 text-emerald-600" />
              </div>
            ) : null}

            {isAdmin && mode === 'register' && (
              <div className="text-left">
                <label htmlFor="googleInviteCode" className="mb-1.5 block text-xs font-semibold text-ink">
                  Kode undangan pengelola
                </label>
                <input
                  id="googleInviteCode"
                  type="text"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  placeholder="Masukkan kode undangan madrasah"
                  className="h-10 w-full rounded-lg border border-line bg-paper px-3 text-sm text-ink outline-none focus:border-brand"
                />
              </div>
            )}

            <div className="rounded-xl border border-line bg-[#f8fafc] p-4 text-left text-xs leading-relaxed text-muted space-y-1.5">
              <p className="flex items-center gap-1.5 font-semibold text-ink">
                <ShieldCheck size={15} className="shrink-0 text-brand" />
                Akun Gmail Aktif Terverifikasi
              </p>
              <p>
                Klik tombol konfirmasi di bawah untuk menyelesaikan{' '}
                {mode === 'login' ? 'proses masuk' : 'pendaftaran'} dengan akun Gmail Anda.
              </p>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleConfirmGoogle}
                disabled={loading || fetchingPending || !displayEmail}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#065f46] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>Memproses…</span>
                  </>
                ) : (
                  <>
                    <span>
                      {mode === 'login'
                        ? 'Konfirmasi & Masuk'
                        : 'Konfirmasi & Daftar Akun'}
                    </span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>

              <Link
                to={backPath}
                className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-line bg-paper px-4 text-sm font-medium text-muted transition-colors hover:bg-canvas hover:text-ink"
              >
                Batal
              </Link>
            </div>
          </div>
        ) : (
          /* TAHAP BERHASIL */
          <div className="space-y-5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 size={26} />
            </div>

            <div className="space-y-1.5">
              <h1 className="text-xl font-semibold tracking-tight text-ink">
                {mode === 'login' ? 'Berhasil Masuk!' : 'Pendaftaran Berhasil!'}
              </h1>
              <p className="text-sm text-muted">
                Terhubung sebagai{' '}
                <strong className="font-semibold text-ink">
                  {registeredUser?.email || displayEmail}
                </strong>
              </p>
            </div>

            <Link
              to={dashboardPath}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#065f46] active:scale-[0.98]"
            >
              <span>Lanjut ke Dashboard</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
