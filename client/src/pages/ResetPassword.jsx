import { useState } from 'react';
import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import { AlertCircle, CheckCircle2, Eye, EyeOff, KeyRound, Lock } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import AuthField from '../components/auth/AuthField';
import PasswordStrength from '../components/auth/PasswordStrength';
import { authService } from '../services/authService';
import { getErrorMessage } from '../utils/helpers';

// Menampilkan formulir pembuatan kata sandi baru dari tautan reset email
export default function ResetPassword() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) || {};
  const token = String(search.token || '').trim();
  const email = String(search.email || '').trim();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!token) {
      setError('Token reset tidak ditemukan atau tautan tidak lengkap.');
      return;
    }

    if (password.length < 6) {
      setError('Kata sandi baru minimal 6 karakter.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Konfirmasi kata sandi tidak sesuai.');
      return;
    }

    try {
      setLoading(true);
      const res = await authService.resetPassword({ token, password });
      setSuccess(true);
      setRole(res?.role || '');
      const targetLogin = res?.role === 'ADMIN' ? '/login' : '/spmb/login';
      setTimeout(() => {
        navigate({ to: targetLogin, state: { resetSuccess: true, registeredEmail: email } });
      }, 1600);
    } catch (err) {
      console.error('Reset password error:', err);
      setError(
        getErrorMessage(err, 'Gagal memperbarui kata sandi. Tautan mungkin sudah kedaluwarsa.')
      );
    } finally {
      setLoading(false);
    }
  };

  const loginPath = role === 'ADMIN' ? '/login' : '/spmb/login';

  return (
    <AuthLayout
      title="Atur ulang kata sandi"
      description={email ? `Buat kata sandi baru untuk akun ${email}.` : 'Buat kata sandi baru untuk akun Anda.'}
      panelTitle="Keamanan akun madrasah."
      panelDescription="Pastikan kata sandi baru mudah Anda ingat namun sulit ditebak oleh pihak lain."
      points={[
        'Minimal 6 karakter, disarankan kombinasi huruf & angka.',
        'Jangan gunakan kata sandi yang sama dengan akun lain.',
        'Setelah disimpan, Anda dapat langsung masuk kembali.'
      ]}
    >
      {!token ? (
        <div className="space-y-4">
          <div className="flex items-start gap-2.5 rounded-md border border-red-300 bg-red-50 p-4 text-[12px] font-medium text-red-900">
            <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-600" />
            <span>Tautan atur ulang kata sandi tidak valid atau tidak lengkap.</span>
          </div>
          <Link
            to="/lupa-password"
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-brand text-[12.5px] font-semibold text-white hover:bg-[#065f46]"
          >
            Minta Tautan Baru
          </Link>
        </div>
      ) : success ? (
        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-[12px] font-medium text-emerald-950">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-700" />
            <div>
              <p className="font-bold">Kata Sandi Diperbarui</p>
              <p className="mt-1">Anda akan dialihkan ke halaman masuk…</p>
            </div>
          </div>
          <Link
            to={loginPath}
            state={{ resetSuccess: true, registeredEmail: email }}
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-brand text-[12.5px] font-semibold text-white hover:bg-[#065f46]"
          >
            Masuk Sekarang
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
            <div>
              <AuthField
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Kata sandi baru"
                hint="Minimal 6 karakter"
                icon={Lock}
                required
                minLength={6}
                autoComplete="new-password"
                value={password}
                onChange={(e) => {
                  setError('');
                  setPassword(e.target.value);
                }}
                placeholder="••••••••"
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                    className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-muted transition-colors hover:bg-[#f1f5f9] hover:text-ink cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                }
              />
              <PasswordStrength password={password} />
            </div>

            <AuthField
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              label="Konfirmasi kata sandi baru"
              icon={Lock}
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => {
                setError('');
                setConfirmPassword(e.target.value);
              }}
              placeholder="Ulangi kata sandi baru"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-brand px-4 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#065f46] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
              <KeyRound size={14} />
              <span>{loading ? 'Menyimpan…' : 'Simpan Kata Sandi Baru'}</span>
            </button>
          </form>
        </>
      )}
    </AuthLayout>
  );
}
