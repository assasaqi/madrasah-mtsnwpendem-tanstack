import { useQuery } from '@tanstack/react-query';
import { getPublicSchoolProfile } from '../../services/profileService';

export function useSchoolProfileQuery() {
  return useQuery({
    queryKey: ['schoolProfile'],
    queryFn: async () => {
      const res = await getPublicSchoolProfile();
      return res?.data ?? res ?? null;
    },
    staleTime: 1000 * 60 * 15 // 15 menit
  });
}
