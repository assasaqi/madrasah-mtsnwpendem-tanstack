import { useEffect, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { ChevronDown, X } from 'lucide-react';
import { getFileUrl } from '../../utils/helpers';

// Menampilkan drawer navigasi samping untuk perangkat mobile yang muncul dari kanan
export default function MobileNavbar({
  isOpen,
  onClose,
  menu = [],
  profil = null
}) {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

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

  // Helper pemeriksa status aktif menu induk
  const isParentActive = (item) => {
    if (!item.children) return false;
    if (item.label === 'Profil' && location.pathname.startsWith('/profil')) {
      return true;
    }
    return item.children.some((child) => isPathActive(child.to));
  };

  // Kunci scroll halaman saat drawer mobile terbuka & tangani tombol Escape
  useEffect(() => {
    if (!isOpen) {
      setActiveSubmenu(null);
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const namaSekolah = profil?.namaSekolah || 'Madrasah';
  const logoSekolah = profil?.logo ? getFileUrl(profil.logo) : '';

  return (
    <>
      {/* Backdrop overlay gelap dengan efek blur saat drawer terbuka */}
      <div
        className={`fixed inset-0 z-50 bg-[#14211a]/50 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Menu Mobile yang Muncul dari Sisi Kanan Layar */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-[285px] max-w-[85vw] flex-col border-l border-line bg-paper shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu Navigasi Mobile"
      >
        {/* Header Drawer Mobile */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
          <div className="flex min-w-0 items-center gap-2.5">
            {logoSekolah ? (
              <img
                src={logoSekolah}
                alt={`Logo ${namaSekolah}`}
                className="h-8 w-8 shrink-0 object-contain"
              />
            ) : (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-line text-[12px] font-semibold text-brand">
                {namaSekolah.charAt(0).toUpperCase()}
              </span>
            )}
            <div className="min-w-0">
              <span className="block truncate text-[13px] font-semibold leading-tight text-ink">
                {namaSekolah}
              </span>
              <span className="block truncate text-[9px] uppercase tracking-wider text-muted">
                Menu Navigasi
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-ink/75 transition-colors hover:bg-canvas hover:text-ink"
          >
            <X size={16} />
          </button>
        </div>

        {/* Daftar Navigasi Drawer Mobile */}
        <nav className="no-scrollbar flex-1 overflow-y-auto px-4 py-4 text-[13.5px]">
          <ul className="space-y-1">
            {menu.map((item) => {
              if (!item.children) {
                const active = isPathActive(item.to, item.to === '/');
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className={`block rounded-lg px-3 py-2.5 font-medium transition-colors ${
                        active
                          ? 'bg-brand-soft font-semibold text-brand shadow-xs'
                          : 'text-ink/80 hover:bg-canvas hover:text-ink'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isSubmenuOpen = activeSubmenu === item.label;
              const parentActive = isParentActive(item) || isSubmenuOpen;

              return (
                <li key={item.label} className="pt-0.5">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSubmenu((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    aria-expanded={isSubmenuOpen}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-medium transition-colors ${
                      parentActive
                        ? 'bg-brand-soft font-semibold text-brand'
                        : 'text-ink/80 hover:bg-canvas hover:text-ink'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={15}
                      className={`text-muted transition-transform duration-200 ${
                        isSubmenuOpen ? 'rotate-180 text-brand' : ''
                      }`}
                    />
                  </button>

                  {/* Submenu Akordeon Mobile */}
                  {isSubmenuOpen && (
                    <ul className="mt-1 space-y-1 border-l-2 border-brand/20 pl-3 ml-2.5 py-1 animate-in fade-in-0 duration-150">
                      {item.children.map((child) => {
                        const childActive = isPathActive(child.to);
                        return (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              onClick={onClose}
                              className={`block rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                                childActive
                                  ? 'bg-brand-soft font-semibold text-brand'
                                  : 'text-ink/75 hover:bg-canvas hover:text-ink'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
