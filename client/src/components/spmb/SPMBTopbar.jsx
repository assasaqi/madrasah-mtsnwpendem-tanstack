import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { ChevronDown, FileEdit, LogOut, Menu, User } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import { cx } from '../ui';

// Menampilkan bilah atas portal pendaftar berisi judul halaman dan menu akun
export default function SPMBTopbar({ setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Menutup dropdown akun saat pengguna mengklik area di luar menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Memproses sesi keluar akun pendaftar
  const handleLogout = async () => {
    setDropdownOpen(false);
    await logout();
    navigate({ to: '/spmb/login' });
  };

  const judul =
    location.pathname === '/spmb/formulir' ? 'Formulir & dokumen' : 'Dashboard pendaftar';

  const hariIni = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const inisial = String(user?.nama || 'P').trim().charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-line bg-canvas/85 px-4 backdrop-blur-md sm:px-6 lg:px-8 print:hidden">
      <div className="flex min-w-0 items-center gap-2.5">
        <button
          onClick={() => setSidebarOpen(true)}
          className="-ml-1 rounded-md p-1.5 text-muted transition-colors hover:bg-[#efece4] hover:text-ink lg:hidden"
          aria-label="Buka menu"
        >
          <Menu size={18} />
        </button>

        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:inline">
          Portal SPMB
        </span>
        <span className="hidden text-[#c9c3b6] sm:inline">/</span>
        <h2 className="truncate text-[15px] font-semibold leading-none tracking-[-0.01em] text-ink">
          {judul}
        </h2>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden pr-3 text-[11px] text-muted lg:inline">{hariIni}</span>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className={cx(
              'flex items-center gap-2 rounded-lg border px-1.5 py-1.5 transition-colors',
              dropdownOpen
                ? 'border-line bg-paper'
                : 'border-transparent hover:border-line hover:bg-paper'
            )}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line bg-brand-soft text-[11px] font-semibold text-brand">
              {inisial || <User size={14} />}
            </span>
            <span className="hidden text-left sm:block">
              <span className="block max-w-[140px] truncate text-[11.5px] font-semibold leading-tight text-ink">
                {user?.nama || 'Calon pendaftar'}
              </span>
              <span className="mt-0.5 block text-[9.5px] uppercase tracking-[0.14em] text-muted">
                Akun pendaftar
              </span>
            </span>
            <ChevronDown size={13} className="text-muted" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-lg border border-line bg-paper shadow-float">
              <div className="border-b border-line px-3.5 py-3">
                <p className="truncate text-[12px] font-semibold text-ink">
                  {user?.nama || 'Calon pendaftar'}
                </p>
                <p className="mt-0.5 truncate text-[10.5px] text-muted">{user?.email || '-'}</p>
              </div>

              <div className="p-1.5">
                <Link
                  to="/spmb/formulir"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[11.5px] font-medium text-muted transition-colors hover:bg-[#f3f0e9] hover:text-ink"
                >
                  <FileEdit size={14} /> Formulir saya
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[11.5px] font-medium text-rose-700 transition-colors hover:bg-rose-50"
                >
                  <LogOut size={14} /> Keluar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
