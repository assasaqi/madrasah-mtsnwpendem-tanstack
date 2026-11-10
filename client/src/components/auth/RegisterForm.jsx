import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { AlertCircle, Eye, EyeOff, KeyRound, Lock, Mail, UserPlus } from 'lucide-react';
import { authService } from '../../services/authService';
import { getErrorMessage } from '../../utils/helpers';
import AuthField from './AuthField';

// Menampilkan formulir pendaftaran ringkas (email & kata sandi) dengan verifikasi OTP
export default function RegisterForm({ scope = 'spmb' }) {
  const navigate = useNavigate();
  const isAdmin = scope === 'admin';
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    inviteCode: ''
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

  // Memvalidasi email & kata sandi lalu mengirim kode OTP ke email pendaftar
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const emailClean = formData.email.trim().toLowerCase();
    const inviteClean = formData.inviteCode.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailClean)) {
      setError('Format alamat email tidak valid.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Kata sandi minimal 6 karakter.');
      return;
    }

    if (isAdmin && !inviteClean) {
      setError('Kode undangan pengelola wajib diisi.');
      return;
    }

    try {
      setLoading(true);
      const payload = {
        email: emailClean,
        password: formData.password,
        ...(isAdmin ? { inviteCode: inviteClean } : {})
      };

      if (isAdmin) {
        await authService.registerAdmin(payload);
      } else {
        await authService.register(payload);
      }

      navigate({
        to: isAdmin ? '/konfirmasi-email' : '/spmb/konfirmasi-email',
        search: { email: emailClean, scope: isAdmin ? 'admin' : 'spmb' }
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

  const loginPath = isAdmin ? '/login' : '/spmb/login';
  const alternate = isAdmin
    ? { to: '/spmb/register', label: 'Daftar sebagai pendaftar SPMB' }
    : { to: '/register', label: 'Daftar sebagai pengelola' };

  return (
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
          label="Alamat email"
          icon={Mail}
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nama@email.com"
        />

        {isAdmin && (
          <AuthField
            id="inviteCode"
            name="inviteCode"
            type="text"
            label="Kode undangan pengelola"
            icon={KeyRound}
            required
            autoComplete="off"
            value={formData.inviteCode}
            onChange={handleChange}
            placeholder="Masukkan kode undangan madrasah"
          />
        )}

        <AuthField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          label="Kata sandi"
          icon={Lock}
          required
          minLength={6}
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Minimal 6 karakter"
          trailing={
            <button
              type="button"
              onClick={() => setShowPassword((open) => !open)}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-muted transition-colors hover:bg-[#f1f5f9] hover:text-ink cursor-pointer"
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#065f46] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          <UserPlus size={14} />
          {loading ? 'Memproses…' : isAdmin ? 'Daftar akun pengelola' : 'Daftar akun SPMB'}
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
