import { useState, useEffect } from 'react';
import {
  BookOpenCheck,
  ExternalLink,
  Save,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Globe,
  Radio,
  FileSpreadsheet,
  GraduationCap
} from 'lucide-react';
import { getRdmSettings, updateRdmSettings } from '../../services/profileService';
import { setGlobalSaving } from '../../lib/savingState';
import { getErrorMessage } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  SectionTitle,
  Field,
  Input,
  Textarea,
  Button,
  Alert,
  Loader
} from '../../components/admin/ui';

export default function AdminRdm() {
  const [formData, setFormData] = useState({
    rdmUrl: '',
    rdmKeterangan: '',
    rdmAktif: true
  });

  const [initialData, setInitialData] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  // Memuat data pengaturan RDM dari server
  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        const data = await getRdmSettings();
        if (active && data) {
          const loaded = {
            rdmUrl: data.rdmUrl || '',
            rdmKeterangan: data.rdmKeterangan || '',
            rdmAktif: data.rdmAktif !== false
          };
          setFormData(loaded);
          setInitialData(loaded);
        }
      } catch (err) {
        if (active) {
          console.error('Gagal memuat pengaturan RDM:', err);
          setStatusMsg({
            type: 'error',
            text: getErrorMessage(err, 'Gagal memuat pengaturan RDM dari server.')
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

  const handleUrlChange = (e) => {
    setFormData((prev) => ({ ...prev, rdmUrl: e.target.value }));
  };

  const handleKeteranganChange = (e) => {
    setFormData((prev) => ({ ...prev, rdmKeterangan: e.target.value }));
  };

  const handleToggleAktif = () => {
    setFormData((prev) => ({ ...prev, rdmAktif: !prev.rdmAktif }));
  };

  // Uji buka tautan di tab browser baru
  const handleTestLink = () => {
    const targetUrl = formatUrl(formData.rdmUrl);
    if (!targetUrl) return;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Simpan pengaturan RDM
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setGlobalSaving(true);

    try {
      const cleanPayload = {
        rdmUrl: formatUrl(formData.rdmUrl),
        rdmKeterangan: formData.rdmKeterangan.trim(),
        rdmAktif: Boolean(formData.rdmAktif)
      };

      const result = await updateRdmSettings(cleanPayload);
      setFormData({
        rdmUrl: result.rdmUrl || '',
        rdmKeterangan: result.rdmKeterangan || '',
        rdmAktif: result.rdmAktif !== false
      });
      setInitialData({
        rdmUrl: result.rdmUrl || '',
        rdmKeterangan: result.rdmKeterangan || '',
        rdmAktif: result.rdmAktif !== false
      });

      setStatusMsg({
        type: 'success',
        text: 'Tautan dan konfigurasi RDM berhasil disimpan & diperbarui.'
      });
    } catch (err) {
      console.error('Error simpan RDM:', err);
      setStatusMsg({
        type: 'error',
        text: getErrorMessage(err, 'Gagal menyimpan pengaturan tautan RDM.')
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

  const cleanUrl = formatUrl(formData.rdmUrl);
  const isUrlValid = Boolean(cleanUrl && cleanUrl.length > 8);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Rapor Digital Madrasah (RDM)"
        description="Kelola dan perbarui tautan portal RDM resmi madrasah untuk akses guru, siswa, dan wali murid."
      />

      {statusMsg.text && (
        <Alert
          tone={statusMsg.type === 'error' ? 'error' : 'success'}
          onClose={() => setStatusMsg({ type: '', text: '' })}
        >
          {statusMsg.text}
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Kolom Kiri: Formulir Tautan RDM */}
          <div className="space-y-6">
            <Panel>
              <SectionTitle
                title="Konfigurasi Tautan Portal RDM"
                description="Masukkan alamat URL tempat aplikasi Rapor Digital Madrasah (RDM) Anda di-hosting atau dijalankan."
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
                      value={formData.rdmUrl}
                      onChange={handleUrlChange}
                      placeholder="https://rdm.domainanda.sch.id"
                      className="pl-9 font-mono text-[13px]"
                      required
                    />
                  </div>
                </Field>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleTestLink}
                    disabled={!isUrlValid}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-3 py-1.5 text-[12px] font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ExternalLink size={13} />
                    <span>Uji Buka Tautan di Browser</span>
                  </button>
                  <span className="text-[11.5px] text-muted">
                    {isUrlValid
                      ? 'Tautan siap diuji coba'
                      : 'Ketik URL lengkap terlebih dahulu'}
                  </span>
                </div>

                <div className="pt-2">
                  <Field
                    label="Keterangan / Panduan Singkat untuk Pengunjung"
                    hint="Teks bantuan yang akan dibaca oleh siswa, orang tua, atau guru di portal publik sebelum membuka aplikasi RDM."
                  >
                    <Textarea
                      name="rdmKeterangan"
                      value={formData.rdmKeterangan}
                      onChange={handleKeteranganChange}
                      rows={4}
                      placeholder="Contoh: Silakan masuk menggunakan NPK/NIP untuk Dewan Guru, atau NISN dan tanggal lahir untuk Siswa dan Wali Murid. Pastikan Anda memilih tahun ajaran dan semester aktif."
                    />
                  </Field>
                </div>

                {/* Sakelar Status Publikasi RDM */}
                <div className="rounded-xl border border-line bg-canvas/60 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[13px] font-semibold text-ink">Status Akses Portal Publik</p>
                      <p className="text-[11.5px] text-muted">
                        {formData.rdmAktif
                          ? 'Portal RDM aktif dan dapat diakses oleh publik melalui website.'
                          : 'Portal RDM dinonaktifkan sementara (mode pemeliharaan).'
                        }
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleToggleAktif}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                        formData.rdmAktif ? 'bg-brand' : 'bg-gray-300'
                      }`}
                      role="switch"
                      aria-checked={formData.rdmAktif}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                          formData.rdmAktif ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end border-t border-line pt-4">
                <Button type="submit" loading={saving} disabled={saving}>
                  <Save size={15} />
                  <span>Simpan Perubahan Tautan</span>
                </Button>
              </div>
            </Panel>
          </div>

          {/* Kolom Kanan: Pratinjau Tampilan & Informasi Bantuan */}
          <div className="space-y-6">
            <Panel>
              <div className="flex items-center gap-2 border-b border-line pb-3">
                <BookOpenCheck size={16} className="text-brand" />
                <h3 className="text-[13.5px] font-bold text-ink">Pratinjau Kartu Publik</h3>
              </div>

              <div className="mt-4 rounded-xl border border-line bg-paper p-4 shadow-xs">
                <div className="flex items-center justify-between gap-2 border-b border-line/60 pb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#004d26] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
                    <BookOpenCheck size={12} /> Rapor Digital
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      formData.rdmAktif && cleanUrl
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        formData.rdmAktif && cleanUrl ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                    />
                    {formData.rdmAktif && cleanUrl ? 'Online' : 'Nonaktif / Tertunda'}
                  </span>
                </div>

                <div className="mt-3.5 space-y-2">
                  <h4 className="text-[14px] font-bold text-ink">
                    Portal Rapor Digital Madrasah
                  </h4>
                  <p className="line-clamp-3 text-[12px] leading-relaxed text-muted">
                    {formData.rdmKeterangan ||
                      'Akses nilai penilaian harian, asesmen tengah semester, dan cetak rapor hasil belajar siswa secara digital.'}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handleTestLink}
                    disabled={!isUrlValid || !formData.rdmAktif}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-3.5 py-2.5 text-[12.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0b331c] disabled:cursor-not-allowed disabled:bg-gray-300"
                  >
                    <ExternalLink size={14} />
                    <span>Buka Aplikasi RDM</span>
                  </button>
                </div>
              </div>
            </Panel>

            <Panel className="bg-canvas/50">
              <div className="flex items-start gap-2.5">
                <HelpCircle size={16} className="mt-0.5 shrink-0 text-brand" />
                <div className="space-y-1.5 text-[12px] leading-relaxed text-muted">
                  <p className="font-semibold text-ink">Panduan Tautan RDM Kemenag:</p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>
                      Jika aplikasi RDM menggunakan server lokal madrasah (Localhost/IP), pastikan IP publik atau port forwarding (port 1203 / 80) dapat diakses dari luar.
                    </li>
                    <li>
                      Jika di-hosting online di VPS atau subdomain, masukkan alamat lengkap seperti <code className="rounded bg-canvas px-1 py-0.5 font-mono text-[11px] text-ink">https://rdm.mtsnwpendem.sch.id</code>.
                    </li>
                    <li>
                      Tautan ini otomatis terpasang pada menu <strong>Layanan &gt; Rapor Digital (RDM)</strong> di bilah navigasi utama website publik madrasah.
                    </li>
                  </ul>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </form>
    </div>
  );
}
