import { useSchoolProfileQuery } from './queries/useSchoolProfileQuery';

// Hook pengambil profil madrasah yang ditenagai oleh TanStack Query
export default function useSchoolProfile() {
  const { data: profil, isLoading: loading, error, refetch } = useSchoolProfileQuery();

  return {
    profil: profil || null,
    loading,
    error,
    refetch
  };
}
