import { useState, useEffect } from 'react';
import {
  Target,
  Compass,
  Save,
  Info
} from 'lucide-react';
import { getAdminSchoolProfile, updateAdminSchoolProfile } from '../../services/profileService';
import { getErrorMessage, stripHtml } from '../../utils/helpers';
import RichTextEditor from '../../components/admin/RichTextEditor';
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

const HTML_TAG_PATTERN = /<\/?(p|ol|ul|li|h[1-6]|strong|em|u|s|blockquote|br)\b/i;

const escapeHtml = (text) =>
  String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// Mengonversi data misi (HTML atau array poin lama) ke format HTML editor
const misiToEditorHtml = (rawMisi) => {
  let items = [];

  if (Array.isArray(rawMisi)) {
    items = rawMisi.map((item) => String(item || '').trim()).filter(Boolean);
  } else if (typeof rawMisi === 'string' && rawMisi.trim()) {
    try {
      const parsed = JSON.parse(rawMisi);
      items = Array.isArray(parsed)
        ? parsed.map((item) => String(item || '').trim()).filter(Boolean)
        : [rawMisi.trim()];
    } catch {
      items = rawMisi.split('\n').map((item) => item.trim()).filter(Boolean);
    }
  }

  if (items.length === 0) return '';
  if (items.length === 1 && HTML_TAG_PATTERN.test(items[0])) return items[0];

  return `<ol>${items.map((item) => `<li><p>${escapeHtml(item)}</p></li>`).join('')}</ol>`;
};

export default function AdminProfilVisiMisi() {
  const [data, setData] = useState({
    visi: '',
    misi: ''
  });

  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Memuat data visi dan misi saat komponen pertama kali dipasang
  useEffect(() => {
    let ignore = false;

    async function loadData() {
      try {
        const d = await getAdminSchoolProfile();
        if (!ignore && d) {
          setData({
            visi: d.visi || '',
            misi: misiToEditorHtml(d.misi)
          });
        }
      } catch (err) {
        if (!ignore) {
          console.error('Error load visi misi:', err);
          setStatusMsg({
            type: 'error',
            text: getErrorMessage(err, 'Gagal memuat visi dan misi madrasah dari server.')
          });
        }
      } finally {
        if (!ignore) {
          setFetching(false);
        }
      }
    }

    loadData();

    return () => {
      ignore = true;
    };
  }, []);

  // Menangani perubahan input visi
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Menyimpan perubahan visi dan misi ke server
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('visi', data.visi || '');

      const hasMisiContent = Boolean(stripHtml(data.misi));
      const misiArray = hasMisiContent ? [data.misi] : [];
      formData.append('misi', JSON.stringify(misiArray));

      await updateAdminSchoolProfile(formData);

      setStatusMsg({ type: 'success', text: 'Visi dan misi madrasah berhasil disimpan.' });
    } catch (err) {
      console.error('Error submit visi misi:', err);
      setStatusMsg({
        type: 'error',
        text: getErrorMessage(err, 'Gagal menyimpan perubahan visi dan misi.')
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMsg({ type: '', text: '' }), 3000);
    }
  };

  if (fetching) return <Loader label="Memuat visi & misi madrasah…" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Visi & Misi Madrasah"
        description="Kelola visi jangka panjang dan pokok-pokok misi madrasah yang tampil pada website resmi."
      />

      {statusMsg.text && (
        <Alert tone={statusMsg.type} onClose={() => setStatusMsg({ type: '', text: '' })}>
          {statusMsg.text}
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Panel Visi Madrasah */}
        <Panel>
          <SectionTitle
            icon={Target}
            title="Visi Madrasah"
            description="Cita-cita luhur dan pandangan masa depan madrasah yang jelas serta inspiratif."
          />

          <div className="space-y-4 px-4 py-4">
            <Field
              label="Rumusan Visi"
              hint="Tuliskan rumusan visi madrasah secara padat dan bermakna."
            >
              <Textarea
                name="visi"
                rows={3}
                value={data.visi}
                onChange={handleChange}
                placeholder="Contoh: Terwujudnya generasi berilmu dan berakhlak mulia."
              />
            </Field>
          </div>
        </Panel>

        {/* Panel Misi Madrasah */}
        <Panel>
          <SectionTitle
            icon={Compass}
            title="Misi Madrasah"
            description="Langkah-langkah strategis untuk mewujudkan visi madrasah."
          />

          <div className="space-y-4 px-4 py-4">
            <div className="flex items-start gap-2.5 rounded-lg border border-line border-l-2 border-l-[#1d5b3a] bg-[#eaf3ec]/40 px-3.5 py-2.5 text-[11.5px] leading-relaxed text-[#1d5b3a]">
              <Info size={14} className="mt-0.5 shrink-0" />
              <span>
                Gunakan tombol toolbar pada editor di bawah untuk menyusun daftar bernomor, poin, cetak tebal, atau subjudul pada pokok-pokok misi madrasah.
              </span>
            </div>

            <Field label="Pokok-Pokok Misi">
              <RichTextEditor
                value={data.misi}
                onChange={(html) => setData((prev) => ({ ...prev, misi: html }))}
                placeholder="Tuliskan pokok-pokok misi madrasah di sini…"
                minHeight={200}
              />
            </Field>
          </div>

          <div className="flex justify-end border-t border-line bg-[#faf8f3] px-4 py-3">
            <Button type="submit" variant="primary" icon={Save} disabled={loading}>
              {loading ? 'Menyimpan…' : 'Simpan Visi & Misi'}
            </Button>
          </div>
        </Panel>
      </form>
    </div>
  );
}
