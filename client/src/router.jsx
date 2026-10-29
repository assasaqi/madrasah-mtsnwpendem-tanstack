import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routes/index';

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent'
});

export default router;
