import { useState, useEffect } from 'react';
import {
  Building2,
  Image as ImageIcon,
  Save,
  Upload
} from 'lucide-react';
import { getAdminSchoolProfile, updateAdminSchoolProfile } from '../../services/profileService';
import { getErrorMessage, getFileUrl } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  SectionTitle,
  Field,
  Input,
  Textarea,
  Select,
  Button,
  Alert,
  Loader,
  buttonClass,
  ImageCropperModal,
  UploadLoadingOverlay
} from '../../components/admin/ui';

export default function AdminProfilIdentitas() {
  const [profileData, setProfileData] = useState({
    namaSekolah: '',
    npsn: '',
    akreditasi: 'A',
    tagline: '',
    deskripsi: ''
  });

  const [files, setFiles] = useState({ logo: null, banner: null });
  const [logoPreview, setLogoPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  // State untuk modal crop gambar
  const [cropModal, setCropModal] = useState({
    open: false,
    src: '',
    field: '',
    aspectRatio: 1,
    title: '',
    fileName: ''
  });

  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Memuat data identitas sekolah saat komponen pertama kali dipasang
  useEffect(() => {
    let ignore = false;

    async function loadData() {
      try {
        const d = await getAdminSchoolProfile();
        if (!ignore && d) {
          setProfileData({
            namaSekolah: d.namaSekolah || '',
            npsn: d.npsn || '',
            akreditasi: d.akreditasi || 'A',
            tagline: d.tagline || '',
            deskripsi: d.deskripsi || ''
          });

          if (d.logo) setLogoPreview(getFileUrl(d.logo));
          if (d.banner) setBannerPreview(getFileUrl(d.banner));
        }
      } catch (err) {
        if (!ignore) {
          console.error('Error load school profile:', err);
          setStatusMsg({
            type: 'error',
            text: getErrorMessage(err, 'Gagal memuat identitas madrasah dari server.')
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

  // Menangani perubahan input teks form
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  // Memproses berkas logo baru dan membuka modal cropper
  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setCropModal({
        open: true,
        src,
        field: 'logo',
        aspectRatio: 1,
        title: 'Crop Logo Madrasah (1:1)',
        fileName: file.name
      });
    }
    e.target.value = '';
  };

  // Memproses berkas banner baru dan membuka modal cropper
  const handleBannerChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setCropModal({
        open: true,
        src,
        field: 'banner',
        aspectRatio: 16 / 6,
        title: 'Crop Banner Halaman Depan (16:6)',
        fileName: file.name
      });
    }
    e.target.value = '';
  };

  // Menerima hasil crop gambar dari ImageCropperModal
  const handleCropComplete = (res, directPreview) => {
    const croppedFile = res?.file || res;
    const previewUrl = res?.previewUrl || directPreview;

    if (cropModal.field === 'logo') {
      setFiles((prev) => ({ ...prev, logo: croppedFile }));
      setLogoPreview(previewUrl);
    } else if (cropModal.field === 'banner') {
      setFiles((prev) => ({ ...prev, banner: croppedFile }));
      setBannerPreview(previewUrl);
    }
    setCropModal((prev) => ({ ...prev, open: false }));
  };

  // Menyimpan perubahan identitas madrasah ke server
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      Object.keys(profileData).forEach((key) => {
        formData.append(key, profileData[key] || '');
      });

      if (files.logo instanceof File) formData.append('logo', files.logo);
      if (files.banner instanceof File) formData.append('banner', files.banner);

      const data = await updateAdminSchoolProfile(formData);

      setStatusMsg({ type: 'success', text: 'Identitas madrasah berhasil disimpan.' });
      setFiles({ logo: null, banner: null });

      if (data?.logo) setLogoPreview(getFileUrl(data.logo));
      if (data?.banner) setBannerPreview(getFileUrl(data.banner));
    } catch (err) {
      console.error('Error submit school identity:', err);
      setStatusMsg({
        type: 'error',
        text: getErrorMessage(err, 'Gagal menyimpan perubahan identitas madrasah.')
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMsg({ type: '', text: '' }), 3000);
    }
  };

  if (fetching) return <Loader label="Memuat identitas madrasah…" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Identitas Madrasah"
        description="Informasi resmi nama madrasah, akreditasi, logo kelembagaan, dan banner utama website."
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
        {/* Panel Logo dan Banner */}
        <Panel>
          <SectionTitle
            icon={ImageIcon}
            title="Logo & Banner"
            description="Logo tampil pada navbar dan dokumen, banner menjadi latar utama halaman depan."
          />

          <div className="grid gap-5 px-4 py-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[11.5px] font-semibold text-ink/80">Logo madrasah</p>
              <div className="flex items-center gap-3.5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-[#faf8f3] p-2 text-[#c2bcae]">
                  {logoPreview ? (
                    <img src={logoPreview} alt="Logo Madrasah" className="h-full w-full object-contain" />
                  ) : (
                    <Building2 size={26} />
                  )}
                </div>
                <div>
                  <label className={buttonClass('secondary', 'md', 'cursor-pointer')}>
                    <Upload size={14} />
                    {files.logo ? files.logo.name : 'Pilih logo'}
                    <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                  </label>
                  <p className="mt-1.5 text-[10.5px] leading-relaxed text-muted">
                    Format PNG atau WebP transparan, maksimal 2MB.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-[11.5px] font-semibold text-ink/80">Banner halaman depan</p>
              <div className="flex items-center gap-3.5">
                <div className="flex w-36 aspect-[16/6] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-[#faf8f3] text-[10.5px] text-[#a9a396]">
                  {bannerPreview ? (
                    <img src={bannerPreview} alt="Banner Depan" className="h-full w-full object-cover" />
                  ) : (
                    'Belum ada foto'
                  )}
                </div>
                <div>
                  <label className={buttonClass('secondary', 'md', 'cursor-pointer')}>
                    <Upload size={14} />
                    {files.banner ? files.banner.name : 'Pilih banner'}
                    <input type="file" accept="image/*" className="hidden" onChange={handleBannerChange} />
                  </label>
                  <p className="mt-1.5 text-[10.5px] leading-relaxed text-muted">
                    Rasio lanskap 16:6, maksimal 2MB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        {/* Panel Informasi Umum */}
        <Panel>
          <SectionTitle
            icon={Building2}
            title="Informasi Kelembagaan"
            description="Nama resmi madrasah, nomor pokok sekolah nasional, dan status akreditasi."
          />

          <div className="grid gap-4 px-4 py-4 sm:grid-cols-3">
            <Field label="Nama madrasah" className="sm:col-span-2">
              <Input
                name="namaSekolah"
                value={profileData.namaSekolah}
                onChange={handleChange}
                placeholder="Contoh: MTsN 1 Pasuruan"
              />
            </Field>

            <Field label="NPSN">
              <Input
                name="npsn"
                value={profileData.npsn}
                onChange={handleChange}
                className="tabular"
                placeholder="Nomor NPSN"
              />
            </Field>

            <Field label="Akreditasi">
              <Select name="akreditasi" value={profileData.akreditasi} onChange={handleChange}>
                <option value="A">A (Unggul)</option>
                <option value="B">B (Baik)</option>
                <option value="C">C (Cukup)</option>
                <option value="-">Belum terakreditasi</option>
              </Select>
            </Field>

            <Field label="Tagline / Slogan" className="sm:col-span-2">
              <Input
                name="tagline"
                value={profileData.tagline}
                onChange={handleChange}
                placeholder="Contoh: Berilmu, Beramal, Berakhlakul Karimah"
              />
            </Field>

            <Field label="Profil singkat madrasah" className="sm:col-span-3">
              <Textarea
                name="deskripsi"
                rows={3}
                value={profileData.deskripsi}
                onChange={handleChange}
                placeholder="Gambaran umum singkat tentang madrasah."
              />
            </Field>
          </div>

          <div className="flex justify-end border-t border-line bg-[#faf8f3] px-4 py-3">
            <Button type="submit" variant="primary" icon={Save} disabled={loading}>
              {loading ? 'Menyimpan…' : 'Simpan Identitas'}
            </Button>
          </div>
        </Panel>
      </form>

      {/* Loading Overlay saat mengunggah berkas/menyimpan */}
      <UploadLoadingOverlay
        open={loading}
        title="Menyimpan Identitas Madrasah"
        message="Mohon tunggu, berkas gambar dan informasi madrasah sedang diunggah ke server..."
      />

      {/* Modal Cropper Gambar */}
      <ImageCropperModal
        open={cropModal.open}
        onClose={() => setCropModal((prev) => ({ ...prev, open: false }))}
        imageSrc={cropModal.src}
        onCrop={handleCropComplete}
        aspectRatio={cropModal.aspectRatio}
        title={cropModal.title}
        fileName={cropModal.fileName}
      />
    </div>
  );
}
