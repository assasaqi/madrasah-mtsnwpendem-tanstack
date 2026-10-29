import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';

import Login from '../pages/Login';
import Register from '../pages/Register';
import SpmbLogin from '../pages/spmb/Login';
import SpmbRegister from '../pages/spmb/Register';

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login
});

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register
});

export const spmbLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/spmb/login',
  component: SpmbLogin
});

export const spmbRegisterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/spmb/register',
  component: SpmbRegister
});

export const authRoutesList = [
  loginRoute,
  registerRoute,
  spmbLoginRoute,
  spmbRegisterRoute
];
