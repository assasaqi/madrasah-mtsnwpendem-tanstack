import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import {
  LayoutDashboard,
  School,
  Users,
  FileText,
  Megaphone,
  Images,
  Mail,
  LogOut,
  X,
  ChevronDown,
  IdCard,
  MapPin,
  Target,
  History,
  Network,
  Landmark,
  CalendarDays,
  Trophy,
  FolderDown,
  HelpCircle,
  Info
} from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import { cx } from './ui';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  // Submenu tidak aktif/terbuka secara otomatis saat halaman pertama kali dimuat
  const [openMenus, setOpenMenus] = useState({});

  // Memproses sesi keluar akun admin dan membersihkan state global
  const handleLogout = async () => {
    await logout();
    navigate({ to: '/login' });
  };

  // Membuka atau menutup kelompok submenu sidebar
  const toggleMenu = (path) => {
    setOpenMenus((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    {
      path: '/admin/profil-sekolah',
      label: 'Profil Sekolah',
      icon: School,
      children: [
        { path: '/admin/profil-sekolah', label: 'Identitas Madrasah', icon: IdCard },
        { path: '/admin/profil-sekolah/kontak', label: 'Kontak Madrasah', icon: MapPin },
        { path: '/admin/profil-sekolah/visi-misi', label: 'Visi & Misi', icon: Target },
        { path: '/admin/profil-sekolah/sejarah', label: 'Sejarah Singkat', icon: History },
        { path: '/admin/profil-sekolah/struktur', label: 'Struktur Organisasi', icon: Network },
        { path: '/admin/profil-sekolah/fasilitas', label: 'Fasilitas', icon: Landmark }
      ]
    },
    {
      path: '/admin/spmb',
      label: 'SPMB',
      icon: Users
    },
    { path: '/admin/berita', label: 'Kelola Berita', icon: FileText },
    {
      path: '/admin/informasi',
      label: 'Informasi',
      icon: Info,
      children: [
        { path: '/admin/pengumuman', label: 'Pengumuman', icon: Megaphone },
        { path: '/admin/agenda', label: 'Agenda Kegiatan', icon: CalendarDays },
        { path: '/admin/prestasi', label: 'Prestasi', icon: Trophy },
        { path: '/admin/unduhan', label: 'Pusat Unduhan', icon: FolderDown },
        { path: '/admin/faq', label: 'Pertanyaan Umum', icon: HelpCircle }
      ]
    },
    { path: '/admin/galeri', label: 'Galeri', icon: Images },
    { path: '/admin/pesan-kontak', label: 'Pesan Kontak', icon: Mail }
  ];

  return (
    <>
      <aside
        className={cx(
          'fixed inset-y-0 left-0 z-40 flex w-[268px] shrink-0 flex-col justify-between bg-[#14211a] text-[#e9e5d8] transition-transform duration-200 ease-out lg:sticky lg:bottom-auto lg:top-0 lg:h-screen lg:self-start lg:translate-x-0',
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
                <p className="text-[14px] font-semibold leading-tight tracking-[-0.01em] text-[#f6f3e7]">Madrasah</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#8b9a8e]">Panel Admin</p>
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
              Menu
            </p>

            <div className="space-y-0.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                if (!item.children) {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={cx(
                        'relative flex items-center gap-2.5 rounded-md px-2.5 py-2 transition-colors',
                        isActive
                          ? 'bg-white/[0.07] font-semibold text-[#f6f3e7]'
                          : 'text-[#a7b2a8] hover:bg-white/[0.04] hover:text-[#f2efe3]'
                      )}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-[#d9b26a]" />
                      )}
                      <Icon size={15} className={isActive ? 'text-[#d9b26a]' : 'text-[#7f8f82]'} />
                      <span>{item.label}</span>
                    </Link>
                  );
                }

                const isGroupActive = item.children
                  ? item.children.some(
                      (child) =>
                        location.pathname === child.path ||
                        location.pathname.startsWith(`${child.path}/`)
                    )
                  : location.pathname === item.path;

                // Menentukan apakah submenu terbuka berdasarkan toggle pengguna saja
                const isOpen = Boolean(openMenus[item.path]);

                return (
                  <div key={item.path}>
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.path)}
                      className={cx(
                        'relative flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left transition-colors',
                        isGroupActive
                          ? 'font-semibold text-[#f6f3e7]'
                          : 'text-[#a7b2a8] hover:bg-white/[0.04] hover:text-[#f2efe3]'
                      )}
                    >
                      {isGroupActive && (
                        <span className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-[#d9b26a]" />
                      )}
                      <Icon size={15} className={isGroupActive ? 'text-[#d9b26a]' : 'text-[#7f8f82]'} />
                      <span className="flex-1">{item.label}</span>
                      <ChevronDown
                        size={13}
                        className={cx('text-[#7f8f82] transition-transform duration-200', isOpen && 'rotate-180')}
                      />
                    </button>

                    {isOpen && (
                      <div className="ml-4 mt-0.5 space-y-0.5">
                        {item.children.map((child) => {
                          const isChildActive = location.pathname === child.path;
                          const ChildIcon = child.icon;

                          return (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setSidebarOpen(false)}
                              className={cx(
                                'flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11.5px] transition-colors',
                                isChildActive
                                  ? 'bg-white/[0.06] font-semibold text-[#f6f3e7]'
                                  : 'text-[#93a094] hover:bg-white/[0.04] hover:text-[#f2efe3]'
                              )}
                            >
                              {ChildIcon && (
                                <ChildIcon
                                  size={13}
                                  className={cx(
                                    'shrink-0',
                                    isChildActive ? 'text-[#d9b26a]' : 'text-[#6f7d72]'
                                  )}
                                />
                              )}
                              <span>{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="border-t border-white/10 p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[12px] font-medium text-[#a7b2a8] transition-colors hover:bg-rose-500/10 hover:text-rose-200"
          >
            <LogOut size={15} />
            <span>Keluar dari panel</span>
          </button>
          <p className="px-2.5 pt-3 text-[10px] leading-relaxed text-[#6f7d72]">
            Sistem Informasi Madrasah · 2026
          </p>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-[#14211a]/50 backdrop-blur-[2px] lg:hidden"
        />
      )}
    </>
  );
}
