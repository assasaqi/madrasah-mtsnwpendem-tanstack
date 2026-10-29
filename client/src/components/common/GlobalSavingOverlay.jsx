import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { subscribeSaving, getIsSaving } from '../../lib/savingState';

export default function GlobalSavingOverlay() {
  const [saving, setSaving] = useState(getIsSaving);

  useEffect(() => {
    return subscribeSaving((active) => {
      setSaving(active);
    });
  }, []);

  if (!saving) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 backdrop-blur-[2px] animate-in fade-in-0 duration-150 select-none pointer-events-auto"
    >
      <div className="flex items-center justify-center p-4 rounded-2xl bg-black/65 text-white backdrop-blur-md shadow-2xl border border-white/10">
        <Loader2 className="w-10 h-10 animate-spin text-white" />
      </div>
    </div>
  );
}
