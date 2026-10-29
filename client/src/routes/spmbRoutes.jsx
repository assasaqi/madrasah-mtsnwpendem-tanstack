import { createRoute, redirect } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';
import SpmbGuard from '../components/auth/SpmbGuard';
import SPMBLayout from '../layouts/SPMBLayout';

import SPMBDashboard from '../pages/spmb/Dashboard';
import SPMBForm from '../pages/spmb/SPMBForm';

export const spmbGuardRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'spmb-guard',
  component: SpmbGuard
});

export const spmbLayoutRoute = createRoute({
  getParentRoute: () => spmbGuardRoute,
  id: 'spmb-layout',
  component: SPMBLayout
});

export const spmbIndexRoute = createRoute({
  getParentRoute: () => spmbLayoutRoute,
  path: '/spmb',
  beforeLoad: () => {
    throw redirect({ to: '/spmb/dashboard' });
  }
});

export const spmbDashboardRoute = createRoute({
  getParentRoute: () => spmbLayoutRoute,
  path: '/spmb/dashboard',
  component: SPMBDashboard
});

export const spmbFormRoute = createRoute({
  getParentRoute: () => spmbLayoutRoute,
  path: '/spmb/formulir',
  component: SPMBForm
});

export const spmbRouteTree = spmbGuardRoute.addChildren([
  spmbLayoutRoute.addChildren([
    spmbIndexRoute,
    spmbDashboardRoute,
    spmbFormRoute
  ])
]);
