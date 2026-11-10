import ProtectedRoute from './ProtectedRoute';

const MAIN_ADMIN_ROLES = ['ADMIN'];

export default function MainAdminGuard() {
  return (
    <ProtectedRoute
      allowedRoles={MAIN_ADMIN_ROLES}
      redirectTo="/login"
      forbiddenTo="/admin/dashboard"
    />
  );
}
