import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import {
  ChevronDown,
  Menu
} from 'lucide-react';
import { getFileUrl } from '../../utils/helpers';
import useSchoolProfile from '../../hooks/useSchoolProfile';
import MobileNavbar from './MobileNavbar';

export const MENU = [
  { label: 'Beranda', to: '/' },
  {
    label: 'Profil',
    children: [
      { label: 'Visi & Misi', to: '/profil/visi-misi' },
      { label: 'Sejarah', to: '/profil/sejarah' },
      { label: 'Struktur Organisasi', to: '/profil/struktur' },
      { label: 'Fasilitas', to: '/profil/fasilitas' }
    ]
  },
  { label: 'Berita', to: '/berita' },
  {
    label: 'Layanan',
    children: [
      { label: 'Pendaftaran SPMB', to: '/spmb' },
      { label: 'Pusat Unduhan', to: '/unduhan' },
      { label: 'Tanya Jawab (FAQ)', to: '/faq' }
    ]
  },
  {
    label: 'Informasi',
    children: [
      { label: 'Pengumuman', to: '/pengumuman' },
      { label: 'Agenda Kegiatan', to: '/agenda' },
      { label: 'Prestasi', to: '/prestasi' }
    ]
  },
  { label: 'Galeri', to: '/galeri' }
];

// Menampilkan navigasi utama situs publik madrasah
export default function Navbar() {
  const location = useLocation();
  const { profil } = useSchoolProfile();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopNavRef = useRef(null);

  // Helper pemeriksa status aktif rute
  const isPathActive = (to, exact = false) => {
    if (exact || to === '/') {
      return location.pathname === to;
    }
    if (to === '/profil/visi-misi' && location.pathname === '/profil') {
      return true;
    }
    return location.pathname.startsWith(to);
  };

  // Helper pemeriksa status aktif menu induk yang memiliki submenu
  const isParentActive = (item) => {
    if (!item.children) return false;
    if (item.label === 'Profil' && location.pathname.startsWith('/profil')) {
      return true;
    }
    return item.children.some((child) => isPathActive(child.to));
  };

  // Menutup dropdown saat klik di luar elemen atau menekan tombol Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const namaSekolah = profil?.namaSekolah || 'Madrasah';
  const logoSekolah = profil?.logo ? getFileUrl(profil.logo) : '';

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/30 bg-paper/40 backdrop-blur-md lg:border-line lg:bg-paper/95">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            {logoSekolah ? (
              <img
                src={logoSekolah}
                alt={`Logo ${namaSekolah}`}
                className="h-9 w-9 shrink-0 object-contain"
              />
            ) : (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-line text-[13px] font-semibold text-brand">
                {namaSekolah.charAt(0).toUpperCase()}
              </span>
            )}
            <span className="min-w-0">
              <span className="block truncate text-[13.5px] font-semibold leading-tight tracking-[-0.01em] text-ink">
                {namaSekolah}
              </span>
              <span className="mt-0.5 block truncate text-[9.5px] uppercase tracking-[0.16em] text-muted">
                {profil?.npsn ? `NPSN ${profil.npsn}` : 'Situs resmi madrasah'}
              </span>
            </span>
          </Link>

          {/* Menu Navigasi Desktop */}
          <nav ref={desktopNavRef} className="hidden items-center gap-1.5 lg:flex">
            {MENU.map((item) => {
              if (!item.children) {
                const active = isPathActive(item.to, item.to === '/');
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`rounded-md px-3 py-1.5 text-[13.5px] font-medium transition-all duration-150 ${
                      active
                        ? 'bg-brand-soft font-semibold text-brand shadow-xs'
                        : 'text-ink/75 hover:bg-[#eae6dc]/60 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isDropdownOpen = activeDropdown === item.label;
              const itemActive = isParentActive(item);

              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[13.5px] font-medium transition-all duration-150 ${
                      itemActive || isDropdownOpen
                        ? 'bg-brand-soft font-semibold text-brand'
                        : 'text-ink/75 hover:bg-[#eae6dc]/60 hover:text-ink'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={13}
                      className={`text-muted transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-brand' : ''
                      }`}
                    />
                  </button>

                  {/* Submenu Dropdown Desktop */}
                  {isDropdownOpen && (
                    <div className="absolute left-1/2 top-full z-50 mt-2.5 w-48 -translate-x-1/2 rounded-xl border border-line bg-paper p-1.5 shadow-float ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 duration-150">
                      <div className="space-y-0.5">
                        {item.children.map((child) => {
                          const isChildActive = isPathActive(child.to);
                          return (
                            <Link
                              key={child.to}
                              to={child.to}
                              onClick={() => setActiveDropdown(null)}
                              className={`block rounded-lg px-3 py-2 text-[13.5px] font-medium transition-all duration-150 ${
                                isChildActive
                                  ? 'bg-brand-soft font-semibold text-brand'
                                  : 'text-ink/80 hover:bg-[#f6f3eb] hover:text-ink'
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Tombol Hamburger Menu Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Buka menu navigasi"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/15 bg-white/30 text-ink/80 transition-colors hover:bg-white/60"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Menu Navigasi Mobile (Muncul Meluncur dari Kanan Layar) */}
      <MobileNavbar
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        menu={MENU}
        profil={profil}
      />
    </>
  );
}