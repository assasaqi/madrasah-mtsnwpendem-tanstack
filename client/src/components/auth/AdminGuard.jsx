import ProtectedRoute from './ProtectedRoute';

const ADMIN_ROLES = ['ADMIN', 'SUPERADMIN', 'OPERATOR'];

export default function AdminGuard() {
  return (
    <ProtectedRoute
      allowedRoles={ADMIN_ROLES}
      redirectTo="/login"
      forbiddenTo="/spmb/dashboard"
    />
  );
}
