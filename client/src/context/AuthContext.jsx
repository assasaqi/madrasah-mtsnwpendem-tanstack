import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { authService } from '../services/authService';
import { queryClient } from '../lib/queryClient';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Memuat ulang profil pengguna dari cookie sesi
  const refreshUser = useCallback(async () => {
    try {
      const currentUser = await authService.getMe();
      setUser(currentUser);
      return currentUser;
    } catch {
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  // Menyimpan data pengguna setelah login berhasil
  const login = useCallback((userData) => {
    setUser(userData || null);
  }, []);

  // Mengakhiri sesi pengguna seketika, membersihkan cache query, dan membatalkan cookie di server
  const logout = useCallback(async () => {
    setUser(null);
    queryClient.clear();
    try {
      await authService.logout();
    } catch (error) {
      console.error('Gagal logout:', error);
    }
  }, []);

  const value = useMemo(() => ({
    user,
    isAuthenticated: Boolean(user),
    loading,
    login,
    logout,
    refreshUser
  }), [user, loading, login, logout, refreshUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
