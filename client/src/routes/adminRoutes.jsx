import { createRoute, redirect } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';
import AdminGuard from '../components/auth/AdminGuard';
import AdminLayout from '../layouts/AdminLayout';

import AdminDashboard from '../pages/admin/Dashboard';
import AdminProfilIdentitas from '../pages/admin/AdminProfilIdentitas';
import AdminProfilKontak from '../pages/admin/AdminProfilKontak';
import AdminProfilVisiMisi from '../pages/admin/AdminProfilVisiMisi';
import AdminProfilSejarah from '../pages/admin/AdminProfilSejarah';
import AdminProfilStruktur from '../pages/admin/AdminProfilStruktur';
import AdminProfilFasilitas from '../pages/admin/AdminProfilFasilitas';
import AdminSPMB from '../pages/admin/AdminSPMB';
import AdminBerita from '../pages/admin/AdminBerita';
import AdminPengumuman from '../pages/admin/AdminPengumuman';
import AdminGaleri from '../pages/admin/AdminGaleri';
import AdminAgenda from '../pages/admin/AdminAgenda';
import AdminPrestasi from '../pages/admin/AdminPrestasi';
import AdminUnduhan from '../pages/admin/AdminUnduhan';
import AdminFaq from '../pages/admin/AdminFaq';
import AdminPesanKontak from '../pages/admin/AdminPesanKontak';
import AdminProfile from '../pages/admin/AdminProfile';

export const adminGuardRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'admin-guard',
  component: AdminGuard
});

export const adminLayoutRoute = createRoute({
  getParentRoute: () => adminGuardRoute,
  id: 'admin-layout',
  component: AdminLayout
});

export const adminIndexRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin',
  beforeLoad: () => {
    throw redirect({ to: '/admin/dashboard' });
  }
});

export const adminDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/dashboard',
  component: AdminDashboard
});

export const adminProfilIdentitasRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/profil-sekolah',
  component: AdminProfilIdentitas
});
export const adminPublicProfileRoute = adminProfilIdentitasRoute;

export const adminProfilKontakRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/profil-sekolah/kontak',
  component: AdminProfilKontak
});

export const adminProfilVisiMisiRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/profil-sekolah/visi-misi',
  component: AdminProfilVisiMisi
});

export const adminProfilSejarahRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/profil-sekolah/sejarah',
  component: AdminProfilSejarah
});

export const adminProfilStrukturRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/profil-sekolah/struktur',
  component: AdminProfilStruktur
});

export const adminProfilFasilitasRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/profil-sekolah/fasilitas',
  component: AdminProfilFasilitas
});

export const adminSPMBRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/spmb',
  component: AdminSPMB
});

export const adminBeritaRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/berita',
  component: AdminBerita
});

export const adminPengumumanRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/pengumuman',
  component: AdminPengumuman
});

export const adminGaleriRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/galeri',
  component: AdminGaleri
});

export const adminAgendaRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/agenda',
  component: AdminAgenda
});

export const adminPrestasiRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/prestasi',
  component: AdminPrestasi
});

export const adminUnduhanRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/unduhan',
  component: AdminUnduhan
});

export const adminFaqRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/faq',
  component: AdminFaq
});

export const adminPesanKontakRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/pesan-kontak',
  component: AdminPesanKontak
});

export const adminProfileRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/pengaturan-profil',
  component: AdminProfile
});

export const adminRouteTree = adminGuardRoute.addChildren([
  adminLayoutRoute.addChildren([
    adminIndexRoute,
    adminDashboardRoute,
    adminProfilIdentitasRoute,
    adminProfilKontakRoute,
    adminProfilVisiMisiRoute,
    adminProfilSejarahRoute,
    adminProfilStrukturRoute,
    adminProfilFasilitasRoute,
    adminSPMBRoute,
    adminBeritaRoute,
    adminPengumumanRoute,
    adminGaleriRoute,
    adminAgendaRoute,
    adminPrestasiRoute,
    adminUnduhanRoute,
    adminFaqRoute,
    adminPesanKontakRoute,
    adminProfileRoute
  ])
]);
