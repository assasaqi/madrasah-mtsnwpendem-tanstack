import { usePendaftarSPMBQuery } from './queries/usePendaftarSPMBQuery';
import { getErrorMessage } from '../utils/helpers';

// Hook pendaftar SPMB yang ditenagai oleh TanStack Query
export function usePendaftarSPMB() {
  const {
    pendaftarList,
    isLoading: loading,
    error,
    refetch,
    stats,
    updateStatusMutation,
    verifikasiDokumenMutation
  } = usePendaftarSPMBQuery();

  const errorMsg = error ? getErrorMessage(error, 'Gagal terhubung ke layanan server SPMB.') : '';

  return {
    pendaftarList,
    loading,
    errorMsg,
    fetchPendaftar: refetch,
    stats,
    updateStatusMutation,
    verifikasiDokumenMutation
  };
}

export default usePendaftarSPMB;
