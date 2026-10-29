import { createRootRoute, Outlet } from '@tanstack/react-router';
import Redirect from '../components/ui/Redirect';
import GlobalSavingOverlay from '../components/common/GlobalSavingOverlay';

function RootComponent() {
  return (
    <>
      <Outlet />
      <GlobalSavingOverlay />
    </>
  );
}

export const rootRoute = createRootRoute({
  component: RootComponent,
  notFoundComponent: function RootNotFound() {
    return <Redirect to="/" />;
  }
});
