import { useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { spmbService } from '../../services/spmbService';
import { normalizeStatus } from '../../utils/spmb';

export function usePendaftarSPMBQuery() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['spmb', 'pendaftarList'],
    queryFn: async () => {
      const data = await spmbService.getAllPendaftar();
      return Array.isArray(data) ? data : [];
    }
  });

  const pendaftarList = useMemo(() => query.data || [], [query.data]);

  const stats = useMemo(() => {
    const ringkasan = {
      total: 0,
      belumIsi: 0,
      ditinjau: 0,
      lulusAdmin: 0,
      lulusFinal: 0,
      ditolak: 0,
      dokumenTotal: 0,
      dokumenTerverifikasi: 0,
      perGelombang: {},
      perDokumen: {}
    };

    for (const item of pendaftarList) {
      ringkasan.total += 1;

      const status = normalizeStatus(item.status);
      if (status === 'BELUM_ISI') ringkasan.belumIsi += 1;
      else if (status === 'DITINJAU') ringkasan.ditinjau += 1;
      else if (status === 'LULUS_ADMINISTRASI') ringkasan.lulusAdmin += 1;
      else if (status === 'LULUS_FINAL') ringkasan.lulusFinal += 1;
      else if (status === 'TIDAK_LULUS') ringkasan.ditolak += 1;

      const gelombang = item.gelombang || 'Gelombang 1';
      ringkasan.perGelombang[gelombang] = (ringkasan.perGelombang[gelombang] || 0) + 1;

      for (const dok of Array.isArray(item.dokumen) ? item.dokumen : []) {
        const jenis = dok.jenisDokumen || 'LAINNYA';
        ringkasan.dokumenTotal += 1;
        if (dok.isVerified) ringkasan.dokumenTerverifikasi += 1;

        if (!ringkasan.perDokumen[jenis]) {
          ringkasan.perDokumen[jenis] = { total: 0, terverifikasi: 0 };
        }
        ringkasan.perDokumen[jenis].total += 1;
        if (dok.isVerified) ringkasan.perDokumen[jenis].terverifikasi += 1;
      }
    }

    return ringkasan;
  }, [pendaftarList]);

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status, catatan }) => spmbService.updateStatus(id, { status, catatan }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spmb'] });
    }
  });

  const verifikasiDokumenMutation = useMutation({
    mutationFn: ({ id, dokumenId, status, catatan }) =>
      spmbService.verifikasiDokumen(id, dokumenId, { status, catatan }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spmb'] });
    }
  });

  return {
    ...query,
    pendaftarList,
    stats,
    updateStatusMutation,
    verifikasiDokumenMutation
  };
}
