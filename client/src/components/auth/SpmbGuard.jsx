import ProtectedRoute from './ProtectedRoute';

const SPMB_ROLES = ['CALON_PENDAFTAR', 'PENDAFTAR'];

export default function SpmbGuard() {
  return (
    <ProtectedRoute
      allowedRoles={SPMB_ROLES}
      redirectTo="/spmb/login"
      forbiddenTo="/admin/dashboard"
    />
  );
}
