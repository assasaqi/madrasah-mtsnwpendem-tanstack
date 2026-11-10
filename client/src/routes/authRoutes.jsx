import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './rootRoute';

import Login from '../pages/Login';
import Register from '../pages/Register';
import SpmbLogin from '../pages/spmb/Login';
import SpmbRegister from '../pages/spmb/Register';
import KonfirmasiEmail from '../pages/KonfirmasiEmail';
import VerifikasiEmail from '../pages/VerifikasiEmail';
import GoogleAuth from '../pages/GoogleAuth';
import LupaPassword from '../pages/LupaPassword';
import ResetPassword from '../pages/ResetPassword';

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

export const konfirmasiEmailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/konfirmasi-email',
  component: KonfirmasiEmail
});

export const spmbKonfirmasiEmailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/spmb/konfirmasi-email',
  component: KonfirmasiEmail
});

export const verifikasiEmailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/verifikasi-email',
  component: VerifikasiEmail
});

export const googleAuthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/google',
  component: GoogleAuth
});

export const lupaPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/lupa-password',
  component: LupaPassword
});

export const resetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reset-password',
  component: ResetPassword
});

export const authRoutesList = [
  loginRoute,
  registerRoute,
  spmbLoginRoute,
  spmbRegisterRoute,
  konfirmasiEmailRoute,
  spmbKonfirmasiEmailRoute,
  verifikasiEmailRoute,
  googleAuthRoute,
  lupaPasswordRoute,
  resetPasswordRoute
];
