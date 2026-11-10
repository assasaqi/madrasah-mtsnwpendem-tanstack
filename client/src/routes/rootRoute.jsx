import { createRootRoute } from '@tanstack/react-router';
import Redirect from '../components/ui/Redirect';
import RootComponent from '../components/common/RootComponent';

export const rootRoute = createRootRoute({
  component: RootComponent,
  notFoundComponent: function RootNotFound() {
    return <Redirect to="/" />;
  }
});
