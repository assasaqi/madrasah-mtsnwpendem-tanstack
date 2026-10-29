import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { AlertCircle, CheckCircle2, Eye, EyeOff, Lock, LogIn, Mail } from 'lucide-react';
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
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Memperbarui nilai input dan membersihkan pesan kesalahan
  const handleChange = (event) => {
    const { name, value } = event.target;
    setError('');
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Memvalidasi peran akun sebelum menyimpan sesi dan mengarahkan pengguna
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

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
      setError(
        getErrorMessage(
          err,
          'Gagal masuk. Terjadi kendala sistem, silakan coba lagi beberapa saat lagi.'
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const registerPath = isAdmin ? '/register' : '/spmb/register';
  const registerLabel = isAdmin ? 'Daftar akun pengelola' : 'Daftar akun SPMB';
  const alternate = isAdmin
    ? { to: '/spmb/login', label: 'Masuk sebagai pendaftar' }
    : { to: '/login', label: 'Masuk sebagai pengelola' };

  return (
    <>
      {registeredEmail && (
        <div className="mb-4 flex items-start gap-2 rounded-md border border-line border-l-2 border-l-brand bg-brand-soft px-3.5 py-2.5 text-[11.5px] leading-relaxed text-[#124426]">
          <CheckCircle2 size={14} className="mt-0.5 shrink-0" />
          <span>
            Akun <strong className="font-semibold">{registeredEmail}</strong> berhasil dibuat.
            Silakan masuk.
          </span>
        </div>
      )}

      {error && (
        <div className="mb-4 flex items-start gap-2 rounded-md border border-line border-l-2 border-l-rose-500 bg-rose-50/70 px-3.5 py-2.5 text-[11.5px] leading-relaxed text-rose-800">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          <span>{error}</span>
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
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-muted transition-colors hover:bg-[#f2efe7] hover:text-ink"
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-[#f7f5ee] transition-colors hover:bg-[#0f3d22] disabled:cursor-not-allowed disabled:opacity-60"
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
