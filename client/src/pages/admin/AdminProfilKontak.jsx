import { useState, useEffect } from 'react';
import {
  MapPin,
  Save
} from 'lucide-react';
import { getAdminSchoolProfile, updateAdminSchoolProfile } from '../../services/profileService';
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

export default function AdminProfilKontak() {
  const [contactData, setContactData] = useState({
    alamat: '',
    email: '',
    telepon: '',
    whatsapp: '',
    mapsUrl: ''
  });

  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Memuat data kontak saat komponen pertama kali dipasang
  useEffect(() => {
    let ignore = false;

    async function loadData() {
      try {
        const d = await getAdminSchoolProfile();
        if (!ignore && d) {
          setContactData({
            alamat: d.alamat || '',
            email: d.email || '',
            telepon: d.telepon || '',
            whatsapp: d.whatsapp || '',
            mapsUrl: d.mapsUrl || ''
          });
        }
      } catch (err) {
        if (!ignore) {
          console.error('Error load contact profile:', err);
          setStatusMsg({
            type: 'error',
            text: getErrorMessage(err, 'Gagal memuat informasi kontak dari server.')
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

  // Menangani perubahan input form
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  // Menyimpan perubahan data kontak ke server
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('alamat', contactData.alamat || '');
      formData.append('email', contactData.email || '');
      formData.append('telepon', contactData.telepon || '');
      formData.append('whatsapp', contactData.whatsapp || '');
      formData.append('mapsUrl', contactData.mapsUrl || '');

      await updateAdminSchoolProfile(formData);

      setStatusMsg({ type: 'success', text: 'Informasi kontak berhasil disimpan.' });
    } catch (err) {
      console.error('Error submit contact profile:', err);
      setStatusMsg({
        type: 'error',
        text: getErrorMessage(err, 'Gagal menyimpan perubahan informasi kontak.')
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMsg({ type: '', text: '' }), 3000);
    }
  };

  if (fetching) return <Loader label="Memuat informasi kontak madrasah…" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Kontak Madrasah"
        description="Kelola alamat kantor, nomor telepon, WhatsApp helpdesk, dan integrasi peta lokasi madrasah."
        actions={
          <Button variant="primary" icon={Save} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Menyimpan…' : 'Simpan perubahan'}
          </Button>
        }
      />

      {statusMsg.text && (
        <Alert tone={statusMsg.type} onClose={() => setStatusMsg({ type: '', text: '' })}>
          {statusMsg.text}
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Panel>
          <SectionTitle
            icon={MapPin}
            title="Alamat & Kontak Resmi"
            description="Informasi ini tampil di footer, halaman kontak publik, dan tombol layanan WhatsApp."
          />

          <div className="space-y-4 px-4 py-4">
            <Field label="Alamat lengkap madrasah">
              <Textarea
                name="alamat"
                rows={3}
                value={contactData.alamat}
                onChange={handleChange}
                placeholder="Jl. Raya Pendem No. ..., Desa Pendem, Kecamatan..."
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Email resmi madrasah">
                <Input
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  placeholder="kontak@mtsn.sch.id"
                />
              </Field>

              <Field label="Telepon kantor">
                <Input
                  name="telepon"
                  value={contactData.telepon}
                  onChange={handleChange}
                  className="tabular"
                  placeholder="(0341) 123456"
                />
              </Field>

              <Field label="WhatsApp helpdesk">
                <Input
                  name="whatsapp"
                  value={contactData.whatsapp}
                  onChange={handleChange}
                  className="tabular"
                  placeholder="08xxxxxxxxxx"
                />
              </Field>
            </div>

            <Field
              label="URL embed Google Maps"
              hint="Salin atribut 'src' dari kode embed Google Maps (contoh: https://www.google.com/maps/embed?pb=...)."
            >
              <Input
                type="url"
                name="mapsUrl"
                value={contactData.mapsUrl}
                onChange={handleChange}
                placeholder="https://www.google.com/maps/embed?pb=…"
              />
            </Field>
          </div>

          <div className="flex justify-end border-t border-line bg-[#faf8f3] px-4 py-3">
            <Button type="submit" variant="primary" icon={Save} disabled={loading}>
              {loading ? 'Menyimpan…' : 'Simpan Kontak'}
            </Button>
          </div>
        </Panel>
      </form>
    </div>
  );
}
