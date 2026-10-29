import { useRef, useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, User, ChevronDown, LogOut, Settings } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import { getFileUrl } from '../../utils/helpers';
import { cx } from './ui';

export default function Navbar({ setSidebarOpen, getPageTitle }) {
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Ambil state & fungsi logout langsung dari AuthContext
  const { user, logout } = useContext(AuthContext);

  // Menutup dropdown profil saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Eksekusi fungsi logout terpusat AuthContext
  const handleAdminLogout = async () => {
    setProfileDropdownOpen(false);
    await logout();
    navigate({ to: '/login' });
  };

  const photoPath = user?.foto || user?.avatar || user?.image;
  const photoUrl = getFileUrl(photoPath);
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-line bg-canvas/85 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-2.5">
        <button
          onClick={() => setSidebarOpen(true)}
          className="-ml-1 rounded-md p-1.5 text-muted transition-colors hover:bg-[#efece4] hover:text-ink lg:hidden"
          aria-label="Buka menu"
        >
          <Menu size={18} />
        </button>

        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:inline">
          Panel Admin
        </span>
        <span className="hidden text-[#c9c3b6] sm:inline">/</span>
        <h2 className="truncate text-[15px] font-semibold leading-none tracking-[-0.01em] text-ink">{getPageTitle()}</h2>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden pr-3 text-[11px] text-muted lg:inline">{today}</span>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className={cx(
              'flex items-center gap-2 rounded-lg border px-1.5 py-1.5 transition-colors',
              profileDropdownOpen
                ? 'border-line bg-paper'
                : 'border-transparent hover:border-line hover:bg-paper'
            )}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-brand-soft">
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt={user?.nama || 'Admin'}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                  }}
                />
              ) : (
                <User className="text-brand" size={14} />
              )}
            </span>
            <ChevronDown size={13} className="text-muted" />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-lg border border-line bg-paper shadow-float">
              <div className="border-b border-line px-3.5 py-3">
                <p className="truncate text-[12px] font-semibold text-ink">{user?.nama || 'Admin Madrasah'}</p>
                <p className="mt-0.5 truncate text-[10.5px] text-muted">{user?.email || 'admin@madrasah.sch.id'}</p>
              </div>

              <div className="p-1.5">
                <Link
                  to="/admin/pengaturan-profil"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[11.5px] font-medium text-muted transition-colors hover:bg-[#f3f0e9] hover:text-ink"
                >
                  <Settings size={14} /> Pengaturan profil
                </Link>
                <button
                  onClick={handleAdminLogout}
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
