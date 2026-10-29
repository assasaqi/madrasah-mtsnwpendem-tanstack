import { useQuery, useMutation } from '@tanstack/react-query';
import { publicService } from '../../services/publicService';
import { kontakService } from '../../services/kontakService';

export function useBeritaQuery(params = {}) {
  return useQuery({
    queryKey: ['public', 'berita', params],
    queryFn: () => publicService.getBerita(params)
  });
}

export function useBeritaDetailQuery(id) {
  return useQuery({
    queryKey: ['public', 'berita', id],
    queryFn: () => publicService.getBeritaDetail(id),
    enabled: Boolean(id)
  });
}

export function usePengumumanQuery(params = {}) {
  return useQuery({
    queryKey: ['public', 'pengumuman', params],
    queryFn: () => publicService.getPengumuman(params)
  });
}

export function usePengumumanDetailQuery(id) {
  return useQuery({
    queryKey: ['public', 'pengumuman', id],
    queryFn: () => publicService.getPengumumanDetail(id),
    enabled: Boolean(id)
  });
}

export function useAgendaQuery(params = {}) {
  return useQuery({
    queryKey: ['public', 'agenda', params],
    queryFn: () => publicService.getAgenda(params)
  });
}

export function useGaleriQuery(params = {}) {
  return useQuery({
    queryKey: ['public', 'galeri', params],
    queryFn: () => publicService.getGaleri(params)
  });
}

export function usePrestasiQuery(params = {}) {
  return useQuery({
    queryKey: ['public', 'prestasi', params],
    queryFn: () => publicService.getPrestasi(params)
  });
}

export function useUnduhanQuery(params = {}) {
  return useQuery({
    queryKey: ['public', 'unduhan', params],
    queryFn: () => publicService.getUnduhan(params)
  });
}

export function useFaqQuery() {
  return useQuery({
    queryKey: ['public', 'faq'],
    queryFn: () => publicService.getFaq()
  });
}

export function useKirimPesanMutation() {
  return useMutation({
    mutationFn: (data) => kontakService.kirimPesan(data)
  });
}
