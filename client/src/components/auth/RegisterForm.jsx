import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { AlertCircle, Eye, EyeOff, Lock, Mail, User, UserPlus } from 'lucide-react';
import { authService } from '../../services/authService';
import { getErrorMessage } from '../../utils/helpers';
import AuthField from './AuthField';

// Menampilkan formulir pembuatan akun pengelola madrasah atau pendaftar SPMB
export default function RegisterForm({ scope = 'spmb' }) {
  const navigate = useNavigate();
  const isAdmin = scope === 'admin';
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Memperbarui nilai input dan membersihkan pesan kesalahan
  const handleChange = (event) => {
    const { name, value } = event.target;
    setError('');
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Memvalidasi data lalu mendaftarkan akun sesuai cakupan halaman
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const namaClean = formData.namaLengkap.trim();
    const emailClean = formData.email.trim().toLowerCase();

    if (namaClean.length < 3) {
      setError('Nama lengkap minimal 3 karakter.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailClean)) {
      setError('Format alamat email tidak valid.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Kata sandi minimal 6 karakter.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Konfirmasi kata sandi tidak sesuai.');
      return;
    }

    try {
      setLoading(true);
      const payload = {
        nama: namaClean,
        email: emailClean,
        password: formData.password
      };

      if (isAdmin) {
        await authService.registerAdmin(payload);
      } else {
        await authService.register(payload);
      }

      navigate({
        to: isAdmin ? '/login' : '/spmb/login',
        state: { registeredEmail: emailClean }
      });
    } catch (err) {
      console.error('Register error:', err);
      setError(
        getErrorMessage(
          err,
          'Gagal mendaftar. Terjadi kendala sistem, silakan coba lagi beberapa saat lagi.'
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => setShowPassword((open) => !open);
  const loginPath = isAdmin ? '/login' : '/spmb/login';
  const alternate = isAdmin
    ? { to: '/spmb/register', label: 'Daftar sebagai pendaftar SPMB' }
    : { to: '/register', label: 'Daftar sebagai pengelola' };

  return (
    <>
      {error && (
        <div className="mb-4 flex items-start gap-2 rounded-md border border-line border-l-2 border-l-rose-500 bg-rose-50/70 px-3.5 py-2.5 text-[11.5px] leading-relaxed text-rose-800">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthField
          id="namaLengkap"
          name="namaLengkap"
          type="text"
          label="Nama lengkap"
          icon={User}
          required
          minLength={3}
          autoComplete="name"
          value={formData.namaLengkap}
          onChange={handleChange}
          placeholder="Nama sesuai dokumen"
        />

        <AuthField
          id="email"
          name="email"
          type="email"
          label="Alamat email"
          icon={Mail}
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nama@email.com"
        />

        <AuthField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          label="Kata sandi"
          hint="Minimal 6 karakter"
          icon={Lock}
          required
          minLength={6}
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          trailing={
            <button
              type="button"
              onClick={togglePassword}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-muted transition-colors hover:bg-[#f2efe7] hover:text-ink"
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          }
        />

        <AuthField
          id="confirmPassword"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          label="Konfirmasi kata sandi"
          icon={Lock}
          required
          autoComplete="new-password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Ulangi kata sandi"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-[#f7f5ee] transition-colors hover:bg-[#0f3d22] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <UserPlus size={14} />
          {loading ? 'Memproses…' : isAdmin ? 'Buat akun pengelola' : 'Buat akun SPMB'}
        </button>
      </form>

      <div className="mt-5 border-t border-line pt-4 text-center text-[11.5px] text-muted">
        Sudah punya akun?{' '}
        <Link to={loginPath} className="font-semibold text-brand hover:underline">
          Masuk di sini
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
