import { useState, useEffect } from 'react';
import { ExternalLink, Save, Globe } from 'lucide-react';
import { getRdmSettings, updateRdmSettings } from '../../services/profileService';
import { setGlobalSaving } from '../../lib/savingState';
import { getErrorMessage } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  SectionTitle,
  Field,
  Input,
  Button,
  Alert,
  Loader
} from '../../components/admin/ui';

export default function AdminRdm() {
  const [rdmUrl, setRdmUrl] = useState('');
  const [fetching, setFetching] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  // Memuat data tautan RDM dari server
  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        const data = await getRdmSettings();
        if (active && data) {
          setRdmUrl(data.rdmUrl || '');
        }
      } catch (err) {
        if (active) {
          console.error('Gagal memuat tautan RDM:', err);
          setStatusMsg({
            type: 'error',
            text: getErrorMessage(err, 'Gagal memuat tautan RDM dari server.')
          });
        }
      } finally {
        if (active) setFetching(false);
      }
    }

    loadData();
    return () => {
      active = false;
    };
  }, []);

  // Format link agar memiliki protokol http/https
  const formatUrl = (url) => {
    const trimmed = String(url || '').trim();
    if (!trimmed) return '';
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  };

  // Uji buka tautan di tab browser baru
  const handleTestLink = () => {
    const targetUrl = formatUrl(rdmUrl);
    if (!targetUrl) return;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Simpan perubahan tautan RDM
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setGlobalSaving(true);

    try {
      const cleanUrl = formatUrl(rdmUrl);
      const result = await updateRdmSettings({ rdmUrl: cleanUrl });
      setRdmUrl(result.rdmUrl || '');
      setStatusMsg({
        type: 'success',
        text: 'Tautan RDM berhasil disimpan.'
      });
    } catch (err) {
      console.error('Error simpan RDM:', err);
      setStatusMsg({
        type: 'error',
        text: getErrorMessage(err, 'Gagal menyimpan tautan RDM.')
      });
    } finally {
      setSaving(false);
      setGlobalSaving(false);
      setTimeout(() => setStatusMsg({ type: '', text: '' }), 4000);
    }
  };

  if (fetching) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  const cleanUrl = formatUrl(rdmUrl);
  const isUrlValid = Boolean(cleanUrl && cleanUrl.length > 8);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Tautan Rapor Digital Madrasah (RDM)"
        description="Atur tautan aplikasi RDM madrasah. Menu RDM di navbar publik akan langsung membuka tautan ini."
      />

      {statusMsg.text && (
        <Alert
          tone={statusMsg.type === 'error' ? 'error' : 'success'}
          onClose={() => setStatusMsg({ type: '', text: '' })}
        >
          {statusMsg.text}
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <Panel>
          <SectionTitle
            title="Tautan Aplikasi RDM"
            description="Masukkan alamat URL website aplikasi RDM madrasah Anda."
          />

          <div className="mt-5 space-y-4">
            <Field
              label="Alamat URL Aplikasi RDM"
              required
              hint="Contoh: https://rdm.mtsnwpendem.sch.id atau http://192.168.1.100:1203"
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted">
                  <Globe size={15} />
                </div>
                <Input
                  name="rdmUrl"
                  type="text"
                  value={rdmUrl}
                  onChange={(e) => setRdmUrl(e.target.value)}
                  placeholder="https://rdm-mtsnwpendem.rasmantech.web.id/"
                  className="pl-9 font-mono text-[13px]"
                  required
                />
              </div>
            </Field>

            <div className="pt-1">
              <button
                type="button"
                onClick={handleTestLink}
                disabled={!isUrlValid}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-3.5 py-2 text-[12.5px] font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ExternalLink size={14} />
                <span>Uji Buka Tautan</span>
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t border-line pt-4">
            <Button type="submit" loading={saving} disabled={saving}>
              <Save size={15} />
              <span>Simpan Tautan</span>
            </Button>
          </div>
        </Panel>
      </form>
    </div>
  );
}
