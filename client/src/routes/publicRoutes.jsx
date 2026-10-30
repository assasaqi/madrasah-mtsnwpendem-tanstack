import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';
import PublicLayout from '../layouts/PublicLayout';

import Home from '../pages/public/Home';
import Profil from '../pages/public/Profil';
import Berita from '../pages/public/Berita';
import BeritaDetail from '../pages/public/BeritaDetail';
import Pengumuman from '../pages/public/Pengumuman';
import DetailPengumuman from '../pages/public/DetailPengumuman';
import Galeri from '../pages/public/Galeri';
import Agenda from '../pages/public/Agenda';
import Prestasi from '../pages/public/Prestasi';
import Unduhan from '../pages/public/Unduhan';
import Faq from '../pages/public/Faq';
import Rdm from '../pages/public/Rdm';

export const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'public-layout',
  component: PublicLayout
});

export const homeRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/',
  component: Home
});

export const profilRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/profil',
  component: Profil
});

export const profilSectionRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/profil/$section',
  component: Profil
});

export const beritaRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/berita',
  component: Berita
});

export const beritaDetailRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/berita/$id',
  component: BeritaDetail
});

export const pengumumanRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/pengumuman',
  component: Pengumuman
});

export const detailPengumumanRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/pengumuman/$id',
  component: DetailPengumuman
});

export const galeriRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/galeri',
  component: Galeri
});

export const agendaRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/agenda',
  component: Agenda
});

export const prestasiRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/prestasi',
  component: Prestasi
});

export const unduhanRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/unduhan',
  component: Unduhan
});

export const faqRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/faq',
  component: Faq
});

export const rdmRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/rdm',
  component: Rdm
});

export const publicRouteTree = publicLayoutRoute.addChildren([
  homeRoute,
  profilRoute,
  profilSectionRoute,
  beritaRoute,
  beritaDetailRoute,
  pengumumanRoute,
  detailPengumumanRoute,
  galeriRoute,
  agendaRoute,
  prestasiRoute,
  unduhanRoute,
  faqRoute,
  rdmRoute
]);
