import { createRootRoute, Outlet } from '@tanstack/react-router';
import Redirect from '../components/ui/Redirect';

export const rootRoute = createRootRoute({
  component: Outlet,
  notFoundComponent: function RootNotFound() {
    return <Redirect to="/" />;
  }
});
