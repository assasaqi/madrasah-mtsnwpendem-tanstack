import { Link, useLocation } from '@tanstack/react-router';
import { FileEdit, LayoutDashboard, X } from 'lucide-react';
import { cx } from '../ui';

const MENU_UTAMA = [
  { path: '/spmb/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/spmb/formulir', label: 'Formulir & Dokumen', icon: FileEdit }
];

// Menampilkan navigasi samping portal pendaftar dengan gaya yang sama seperti panel admin
export default function SPMBSidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  // Menyusun kelas satu item menu sesuai status aktifnya
  const itemClass = (active) =>
    cx(
      'relative flex items-center gap-2.5 rounded-md px-2.5 py-2 transition-colors',
      active
        ? 'bg-white/[0.07] font-semibold text-[#f6f3e7]'
        : 'text-[#a7b2a8] hover:bg-white/[0.04] hover:text-[#f2efe3]'
    );

  // Menyusun kelas ikon item menu sesuai status aktifnya
  const iconClass = (active) => (active ? 'text-[#d9b26a]' : 'text-[#7f8f82]');

  return (
    <>
      <aside
        className={cx(
          'fixed inset-y-0 left-0 z-40 flex w-[268px] shrink-0 flex-col bg-[#14211a] text-[#e9e5d8] transition-transform duration-200 ease-out lg:sticky lg:bottom-auto lg:top-0 lg:h-screen lg:self-start lg:translate-x-0 print:hidden',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="admin-scroll flex-1 overflow-y-auto">
          <div className="flex items-center justify-between px-5 pb-5 pt-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#3a4a3d] text-[15px] font-semibold leading-none text-[#d9b26a]">
                M
              </span>
              <div>
                <p className="text-[14px] font-semibold leading-tight tracking-[-0.01em] text-[#f6f3e7]">
                  Madrasah
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#8b9a8e]">
                  Portal SPMB
                </p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-md p-1.5 text-[#8b9a8e] transition-colors hover:bg-white/5 hover:text-[#f6f3e7] lg:hidden"
              aria-label="Tutup menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mx-5 border-t border-white/10" />

          <nav className="px-3 py-4 text-[12.5px]">
            <p className="px-2.5 pb-2 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#7b8a7e]">
              Pendaftaran
            </p>

            <div className="space-y-0.5">
              {MENU_UTAMA.map((item) => {
                const Icon = item.icon;
                const active = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={itemClass(active)}
                  >
                    {active && (
                      <span className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-[#d9b26a]" />
                    )}
                    <Icon size={15} className={iconClass(active)} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-[#14211a]/60 backdrop-blur-sm lg:hidden print:hidden"
        />
      )}
    </>
  );
}
