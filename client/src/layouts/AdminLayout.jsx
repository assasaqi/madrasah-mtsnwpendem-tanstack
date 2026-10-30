import { useState } from 'react';
import { Outlet, useLocation } from '@tanstack/react-router';
import Sidebar from '../components/admin/Sidebar';
import Navbar from '../components/admin/Navbar';

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Menentukan judul header berdasarkan rute aktif saat ini
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/admin/dashboard': return 'Ringkasan Data';
      case '/admin/profil-sekolah': return 'Identitas Madrasah';
      case '/admin/profil-sekolah/kontak': return 'Kontak Madrasah';
      case '/admin/profil-sekolah/visi-misi': return 'Visi & Misi';
      case '/admin/profil-sekolah/sejarah': return 'Sejarah Singkat';
      case '/admin/profil-sekolah/struktur': return 'Struktur Organisasi';
      case '/admin/profil-sekolah/fasilitas': return 'Fasilitas Madrasah';
      case '/admin/berita': return 'Kelola Berita';
      case '/admin/spmb': return 'Verifikasi SPMB';
      case '/admin/rdm': return 'Rapor Digital (RDM)';
      case '/admin/unduhan': return 'Pusat Unduhan';
      case '/admin/faq': return 'Tanya Jawab (FAQ)';
      case '/admin/pengumuman': return 'Pengumuman';
      case '/admin/agenda': return 'Agenda Kegiatan';
      case '/admin/prestasi': return 'Prestasi Madrasah';
      case '/admin/galeri': return 'Galeri Madrasah';
      case '/admin/pengaturan-profil': return 'Pengaturan Profil';
      default: return 'Panel Administrator';
    }
  };

  return (
    <div className="flex min-h-screen bg-canvas font-sans text-ink">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Navbar setSidebarOpen={setSidebarOpen} getPageTitle={getPageTitle} />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto w-full max-w-[1240px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
