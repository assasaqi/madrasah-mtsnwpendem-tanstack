import { useState, useEffect } from 'react';
import {
  Target,
  Compass,
  Save,
  Info
} from 'lucide-react';
import { getAdminSchoolProfile, updateAdminSchoolProfile } from '../../services/profileService';
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
          let misiText = '';
          if (Array.isArray(d.misi)) {
            misiText = d.misi.join('\n');
          } else if (typeof d.misi === 'string') {
            try {
              const parsed = JSON.parse(d.misi);
              misiText = Array.isArray(parsed) ? parsed.join('\n') : d.misi;
            } catch {
              misiText = d.misi;
            }
          }

          setData({
            visi: d.visi || '',
            misi: misiText || ''
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

  // Menangani perubahan input textarea
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

      // Memecah teks misi per baris menjadi array butir misi, membersihkan penomoran awal bila ada
      const misiArray = data.misi
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => line.replace(/^\d+[.)-]\s*/, ''));

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
        actions={
          <Button variant="primary" icon={Save} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Menyimpan…' : 'Simpan Visi & Misi'}
          </Button>
        }
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

        {/* Panel Misi Madrasah (Format form textarea sederhana seperti form visi) */}
        <Panel>
          <SectionTitle
            icon={Compass}
            title="Misi Madrasah"
            description="Langkah-langkah strategis untuk mewujudkan visi. Tuliskan setiap butir misi pada baris baru."
          />

          <div className="space-y-4 px-4 py-4">
            <div className="flex items-start gap-2.5 rounded-lg border border-line border-l-2 border-l-[#1d5b3a] bg-[#eaf3ec]/40 px-3.5 py-2.5 text-[11.5px] leading-relaxed text-[#1d5b3a]">
              <Info size={14} className="mt-0.5 shrink-0" />
              <span>
                Tuliskan setiap pokok misi pada <strong>baris baru (Enter)</strong>. Sistem akan otomatis menampilkan butir misi dalam urutan angka yang rapi di halaman profil madrasah.
              </span>
            </div>

            <Field
              label="Pokok-Pokok Misi"
              hint="Satu butir misi per baris."
            >
              <Textarea
                name="misi"
                rows={6}
                value={data.misi}
                onChange={handleChange}
                placeholder="Contoh:&#10;Menyelenggarakan pembelajaran berkualitas dan islami.&#10;Membina akhlak mulia dan kepribadian santri."
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
