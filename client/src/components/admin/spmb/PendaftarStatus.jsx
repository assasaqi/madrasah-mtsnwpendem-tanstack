import { StatusDot } from '../ui';
import { SPMB_STATUS_META, normalizeStatus } from '../../../utils/spmb';

// Menampilkan status pendaftaran SPMB dengan penanda warna yang konsisten
export default function PendaftarStatus({ status }) {
  const meta = SPMB_STATUS_META[normalizeStatus(status)] || SPMB_STATUS_META.DITINJAU;

  return <StatusDot tone={meta.tone}>{meta.label}</StatusDot>;
}
