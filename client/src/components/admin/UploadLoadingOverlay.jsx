import { useEffect } from 'react';
import { setGlobalSaving } from '../../lib/savingState';

/**
 * UploadLoadingOverlay sekarang terintegrasi dengan GlobalSavingOverlay
 * Memastikan tidak ada overlay ganda dan desain konsisten berpusat di tengah dengan durasi minimum 1 detik.
 */
export default function UploadLoadingOverlay({ open = false }) {
  useEffect(() => {
    if (open) {
      setGlobalSaving(true);
      return () => {
        setGlobalSaving(false);
      };
    }
  }, [open]);

  return null;
}
