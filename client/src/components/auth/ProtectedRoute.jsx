import { useContext, useEffect, useRef } from 'react';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

// Membatasi akses rute sesuai peran dan mengarahkan ke halaman masuk yang tepat
export default function ProtectedRoute({
  allowedRoles,
  redirectTo = '/login',
  forbiddenTo = '/'
}) {
  const { user, isAuthenticated, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const hasRedirectedRef = useRef(false);

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      if (!hasRedirectedRef.current) {
        hasRedirectedRef.current = true;
        navigate({ to: redirectTo, replace: true });
      }
      return;
    }

    hasRedirectedRef.current = false;

    const role = String(user?.role || '').toUpperCase();
    if (allowedRoles && !allowedRoles.includes(role)) {
      if (!hasRedirectedRef.current) {
        hasRedirectedRef.current = true;
        navigate({ to: forbiddenTo, replace: true });
      }
    }
  }, [loading, isAuthenticated, user, allowedRoles, redirectTo, forbiddenTo, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-emerald-600" size={32} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const role = String(user?.role || '').toUpperCase();
  if (allowedRoles && !allowedRoles.includes(role)) {
    return null;
  }

  return <Outlet />;
}
