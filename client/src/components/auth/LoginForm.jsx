import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { AlertCircle, ArrowRight, CheckCircle2, Eye, EyeOff, Lock, LogIn, Mail } from 'lucide-react';
import { authService } from '../../services/authService';
import { AuthContext } from '../../context/AuthContext';
import { getErrorMessage } from '../../utils/helpers';
import AuthField from './AuthField';

const ADMIN_ROLES = ['ADMIN', 'SUPERADMIN', 'OPERATOR'];
const SPMB_ROLES = ['CALON_PENDAFTAR', 'PENDAFTAR'];

// Menampilkan formulir masuk untuk pengelola madrasah atau pendaftar SPMB
export default function LoginForm({ scope = 'spmb' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { login: setAuthContext, logout: clearSession } = useContext(AuthContext);

  const isAdmin = scope === 'admin';
  const registeredEmail = location.state?.registeredEmail || '';
  const resetSuccess = Boolean(location.state?.resetSuccess);
  const [credentials, setCredentials] = useState({
    email: registeredEmail || '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [unverifiedEmail, setUnverifiedEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Memperbarui nilai input dan membersihkan pesan kesalahan
  const handleChange = (event) => {
    const { name, value } = event.target;
    setError('');
    setUnverifiedEmail('');
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Memvalidasi peran akun sebelum menyimpan sesi dan mengarahkan pengguna
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setUnverifiedEmail('');

    try {
      setLoading(true);
      const data = await authService.login(credentials);
      const user = data.user;
      const role = String(user?.role || '').toUpperCase().trim();
      const allowedRoles = isAdmin ? ADMIN_ROLES : SPMB_ROLES;

      if (!allowedRoles.includes(role)) {
        await clearSession().catch(() => {});
        setError(
          isAdmin
            ? 'Akun ini bukan akun pengelola. Silakan masuk melalui portal SPMB.'
            : 'Akun pengelola tidak dapat masuk di portal SPMB. Gunakan halaman masuk pengelola.'
        );
        return;
      }

      setAuthContext(user);
      navigate({ to: isAdmin ? '/admin/dashboard' : '/spmb/dashboard' });
    } catch (err) {
      console.error('Login error:', err);
      const data = err?.response?.data;
      if (data?.code === 'EMAIL_NOT_VERIFIED') {
        setUnverifiedEmail(data.email || credentials.email.trim().toLowerCase());
      }
      setError(
        getErrorMessage(
          err,
          'Gagal masuk. Periksa kembali email dan kata sandi Anda.'
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const registerPath = isAdmin ? '/register' : '/spmb/register';
  const registerLabel = isAdmin ? 'Daftar akun pengelola' : 'Daftar akun SPMB';
  const confirmPath = isAdmin ? '/konfirmasi-email' : '/spmb/konfirmasi-email';
  const alternate = isAdmin
    ? { to: '/spmb/login', label: 'Masuk sebagai pendaftar' }
    : { to: '/login', label: 'Masuk sebagai pengelola' };

  return (
    <>
      {registeredEmail && (
        <div className="mb-4 flex items-start gap-2 rounded-md border border-emerald-300 border-l-2 border-l-emerald-600 bg-emerald-50 px-3.5 py-2.5 text-[12px] font-medium leading-relaxed text-emerald-950">
          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-700" />
          <span>
            Akun <strong className="font-semibold">{registeredEmail}</strong> telah aktif.
            Silakan masuk.
          </span>
        </div>
      )}

      {resetSuccess && (
        <div className="mb-4 flex items-start gap-2 rounded-md border border-emerald-300 border-l-2 border-l-emerald-600 bg-emerald-50 px-3.5 py-2.5 text-[12px] font-medium leading-relaxed text-emerald-950">
          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-700" />
          <span>Kata sandi berhasil diperbarui. Silakan masuk dengan kata sandi baru Anda.</span>
        </div>
      )}

      {error && (
        <div className="mb-4 space-y-2 rounded-md border border-red-300 border-l-2 border-l-red-600 bg-red-50 px-3.5 py-2.5 text-[12px] font-medium leading-relaxed text-red-900">
          <div className="flex items-start gap-2.5">
            <AlertCircle size={15} className="mt-0.5 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
          {unverifiedEmail && (
            <div className="pl-6">
              <Link
                to={confirmPath}
                search={{ email: unverifiedEmail, scope: isAdmin ? 'admin' : 'spmb' }}
                className="inline-flex items-center gap-1 font-semibold text-brand underline hover:text-[#0f3d22]"
              >
                Verifikasi kode OTP sekarang <ArrowRight size={12} />
              </Link>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthField
          id="email"
          name="email"
          type="email"
          label="Alamat email"
          icon={Mail}
          required
          autoComplete="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="nama@email.com"
        />

        <AuthField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          label="Kata sandi"
          hint={
            <Link
              to="/lupa-password"
              search={{ scope: isAdmin ? 'admin' : 'spmb' }}
              className="font-medium text-brand hover:underline"
            >
              Lupa kata sandi?
            </Link>
          }
          icon={Lock}
          required
          autoComplete="current-password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="••••••••"
          trailing={
            <button
              type="button"
              onClick={() => setShowPassword((open) => !open)}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-muted transition-colors hover:bg-[#f2efe7] hover:text-ink cursor-pointer"
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-[#f7f5ee] transition-colors hover:bg-[#0f3d22] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          <LogIn size={14} />
          {loading ? 'Memproses…' : 'Masuk'}
        </button>
      </form>

      <div className="mt-5 border-t border-line pt-4 text-center text-[11.5px] text-muted">
        Belum punya akun?{' '}
        <Link to={registerPath} className="font-semibold text-brand hover:underline">
          {registerLabel}
        </Link>
      </div>

      <p className="mt-2 text-center text-[10.5px] text-muted">
        <Link to={alternate.to} className="hover:text-brand hover:underline">
          {alternate.label}
        </Link>
      </p>
    </>
  );
}
