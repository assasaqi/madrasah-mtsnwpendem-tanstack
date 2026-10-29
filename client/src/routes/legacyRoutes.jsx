import { createRoute, redirect } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';

export const ppdbRootRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ppdb',
  beforeLoad: () => {
    throw redirect({ to: '/spmb/dashboard' });
  }
});

export const ppdbDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ppdb/dashboard',
  beforeLoad: () => {
    throw redirect({ to: '/spmb/dashboard' });
  }
});

export const ppdbFormulirRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ppdb/formulir',
  beforeLoad: () => {
    throw redirect({ to: '/spmb/formulir' });
  }
});

export const ppdbWildcardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ppdb/$',
  beforeLoad: () => {
    throw redirect({ to: '/spmb/dashboard' });
  }
});

export const adminPpdbWildcardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/ppdb/$',
  beforeLoad: () => {
    throw redirect({ to: '/admin/spmb' });
  }
});

export const kontakLegacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/kontak',
  beforeLoad: () => {
    throw redirect({ to: '/faq' });
  }
});

export const legacyRoutesList = [
  ppdbRootRoute,
  ppdbDashboardRoute,
  ppdbFormulirRoute,
  ppdbWildcardRoute,
  adminPpdbWildcardRoute,
  kontakLegacyRoute
];
