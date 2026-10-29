import { useEffect, useState } from 'react';
import { History, Save, Info } from 'lucide-react';
import { getSejarah, updateSejarah } from '../../services/profileService';
import { getErrorMessage } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  SectionTitle,
  Field,
  Textarea,
  Button,
  Alert,
  Loader
} from '../../components/admin/ui';

export default function AdminProfilSejarah() {
  const [sejarah, setSejarah] = useState('');
  const [fetching, setFetching] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    fetchSejarah();
  }, []);

  // Memuat narasi sejarah singkat dari API
  const fetchSejarah = async () => {
    try {
      setFetching(true);
      const data = await getSejarah();
      setSejarah(data?.sejarah || '');
    } catch (error) {
      setStatus({ type: 'error', message: getErrorMessage(error, 'Gagal memuat sejarah singkat.') });
    } finally {
      setFetching(false);
    }
  };

  // Menyimpan narasi sejarah singkat ke server
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setStatus({ type: '', message: '' });
      await updateSejarah(sejarah);
      setStatus({ type: 'success', message: 'Sejarah singkat berhasil disimpan.' });
    } catch (error) {
      setStatus({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan sejarah singkat.') });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      <PageHeader
        title="Sejarah singkat"
        description="Ceritakan perjalanan madrasah sejak berdiri. Narasi ini tampil pada tab Sejarah di halaman profil publik."
      />

      {status.message && (
        <Alert tone={status.type} onClose={() => setStatus({ type: '', message: '' })}>
          {status.message}
        </Alert>
      )}

      {fetching ? (
        <Loader label="Memuat sejarah singkat…" />
      ) : (
        <form onSubmit={handleSubmit}>
          <Panel>
            <SectionTitle
              icon={History}
              title="Narasi sejarah"
              description="Tulis dalam paragraf mengalir, bukan poin-poin."
            />

            <div className="space-y-4 px-4 py-4">
              <div className="flex items-start gap-2.5 rounded-lg border border-line border-l-2 border-l-[#c98a2e] bg-[#fbf7ec] px-3.5 py-2.5 text-[11.5px] leading-relaxed text-[#7a5a17]">
                <Info size={14} className="mt-0.5 shrink-0" />
                <span>
                  Sertakan tahun pendirian, tokoh atau yayasan pendiri, dan tonggak perkembangan yang penting.
                </span>
              </div>

              <Field
                label="Isi narasi"
                hint={`${sejarah.length} dari 10.000 karakter`}
              >
                <Textarea
                  rows={16}
                  value={sejarah}
                  onChange={(e) => setSejarah(e.target.value)}
                  maxLength={10000}
                  placeholder="Contoh: Madrasah ini didirikan pada tahun 1985 atas prakarsa para tokoh agama setempat…"
                />
              </Field>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-[#faf8f3] px-4 py-3">
              <p className="text-[11px] text-muted">Perubahan langsung tampil setelah disimpan.</p>
              <Button type="submit" variant="primary" icon={Save} disabled={saving}>
                {saving ? 'Menyimpan…' : 'Simpan sejarah'}
              </Button>
            </div>
          </Panel>
        </form>
      )}
    </div>
  );
}
