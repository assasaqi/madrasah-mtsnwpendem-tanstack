import { rootRoute } from './rootRoute';
import { publicRouteTree } from './publicRoutes';
import { authRoutesList } from './authRoutes';
import { spmbRouteTree } from './spmbRoutes';
import { adminRouteTree } from './adminRoutes';
import { legacyRoutesList } from './legacyRoutes';

export const routeTree = rootRoute.addChildren([
  publicRouteTree,
  ...authRoutesList,
  spmbRouteTree,
  adminRouteTree,
  ...legacyRoutesList
]);

export { rootRoute };
