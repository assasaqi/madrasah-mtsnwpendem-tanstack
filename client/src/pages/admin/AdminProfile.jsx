import { useState, useEffect, useContext } from 'react';
import { User, Lock, Upload, Save, KeyRound } from 'lucide-react';
import { getAdminProfile, updateAdminProfile, changeAdminPassword } from '../../services/profileService';
import { AuthContext } from '../../context/AuthContext';
import { getErrorMessage, getFileUrl } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  SectionTitle,
  Field,
  Input,
  Button,
  Alert,
  Loader,
  buttonClass,
  ImageCropperModal,
  UploadLoadingOverlay
} from '../../components/admin/ui';

export default function AdminProfile() {
  const { user, login: setAuthContext } = useContext(AuthContext);

  const [profile, setProfile] = useState({
    email: '',
    foto: null
  });

  const [passwordData, setPasswordData] = useState({
    passwordLama: '',
    passwordBaru: '',
    konfirmasiPassword: ''
  });

  const [previewFoto, setPreviewFoto] = useState(null);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [cropModal, setCropModal] = useState({ open: false, src: '', fileName: '' });

  // Memuat data profil admin dari API saat komponen pertama kali dimuat
  useEffect(() => {
    fetchProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Memuat data profil admin dari API backend
  const fetchProfileData = async () => {
    try {
      setFetching(true);
      const data = await getAdminProfile();

      if (data) {
        setProfile({
          email: data.email || '',
          foto: null
        });

        if (data.foto) setPreviewFoto(getFileUrl(data.foto));

        setAuthContext({ ...user, ...data });
      }
    } catch (err) {
      console.error('Gagal mengambil data profil:', err);
      setStatusMsg({
        type: 'error',
        text: getErrorMessage(err, 'Gagal memuat data profil admin.')
      });
    } finally {
      setFetching(false);
    }
  };

  // Memproses unggahan foto profil dan membuka modal cropper
  const handleFotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setCropModal({
        open: true,
        src,
        fileName: file.name
      });
    }
    e.target.value = '';
  };

  // Menerima hasil crop foto profil dari ImageCropperModal
  const handleCropComplete = (res, directPreview) => {
    const croppedFile = res?.file || res;
    const previewUrl = res?.previewUrl || directPreview;
    setProfile((prev) => ({ ...prev, foto: croppedFile }));
    if (previewUrl) setPreviewFoto(previewUrl);
    setCropModal((prev) => ({ ...prev, open: false }));
  };

  // Mengirim pembaruan data profil ke server dan memperbarui state global
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      if (profile.email) formData.append('email', profile.email);
      if (profile.foto instanceof File) formData.append('foto', profile.foto);

      const data = await updateAdminProfile(formData);

      setStatusMsg({ type: 'success', text: 'Profil berhasil diperbarui.' });
      setProfile((prev) => ({ ...prev, foto: null }));

      if (data?.foto) setPreviewFoto(getFileUrl(data.foto));

      const updatedUser = { ...user, ...(data || {}), email: profile.email || user?.email };
      setAuthContext(updatedUser);
    } catch (err) {
      console.error('Error save profile:', err);
      setStatusMsg({
        type: 'error',
        text: getErrorMessage(err, 'Gagal memperbarui profil.')
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMsg({ type: '', text: '' }), 3000);
    }
  };

  // Mengubah kata sandi akun admin setelah validasi input
  const handleSavePassword = async (e) => {
    e.preventDefault();

    if (!passwordData.passwordLama || !passwordData.passwordBaru) {
      setStatusMsg({ type: 'error', text: 'Semua kolom password wajib diisi.' });
      return;
    }

    if (passwordData.passwordBaru !== passwordData.konfirmasiPassword) {
      setStatusMsg({ type: 'error', text: 'Konfirmasi password baru tidak cocok.' });
      return;
    }

    setLoading(true);

    try {
      await changeAdminPassword({
        passwordLama: passwordData.passwordLama,
        passwordBaru: passwordData.passwordBaru
      });

      setStatusMsg({
        type: 'success',
        text: 'Password berhasil diubah.'
      });

      setPasswordData({ passwordLama: '', passwordBaru: '', konfirmasiPassword: '' });
    } catch (err) {
      console.error('Error change password:', err);
      setStatusMsg({
        type: 'error',
        text: getErrorMessage(err, 'Gagal mengubah password. Terjadi kendala pada server.')
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMsg({ type: '', text: '' }), 3000);
    }
  };

  if (fetching) return <Loader label="Memuat profil admin…" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pengaturan profil"
        description="Kelola identitas akun admin dan perbarui kata sandi secara berkala."
      />

      {statusMsg.text && (
        <Alert tone={statusMsg.type} onClose={() => setStatusMsg({ type: '', text: '' })}>
          {statusMsg.text}
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel className="flex flex-col">
          <SectionTitle icon={User} title="Informasi pengguna" description="Email dipakai untuk masuk ke panel." />

          <form onSubmit={handleSaveProfile} className="flex flex-1 flex-col">
            <div className="flex-1 space-y-4 px-4 py-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-brand-soft text-[20px] font-semibold text-brand">
                  {previewFoto ? (
                    <img src={previewFoto} alt="Foto admin" className="h-full w-full object-cover" />
                  ) : (
                    (profile.email ? profile.email.charAt(0).toUpperCase() : 'A')
                  )}
                </div>
                <div>
                  <label className={buttonClass('secondary', 'md', 'cursor-pointer')}>
                    <Upload size={14} />
                    {profile.foto ? profile.foto.name : 'Unggah foto'}
                    <input type="file" accept="image/*" className="hidden" onChange={handleFotoChange} />
                  </label>
                  <p className="mt-1.5 text-[10.5px] leading-relaxed text-muted">
                    Format JPG, PNG, atau WebP. Maksimal 2MB.
                  </p>
                </div>
              </div>

              <Field label="Email akun" hint="Gunakan email aktif yang Anda pantau.">
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  placeholder="nama@madrasah.sch.id"
                />
              </Field>
            </div>

            <div className="flex justify-end border-t border-line bg-[#faf8f3] px-4 py-3">
              <Button type="submit" variant="primary" icon={Save} disabled={loading}>
                {loading ? 'Menyimpan…' : 'Simpan profil'}
              </Button>
            </div>
          </form>
        </Panel>

        <Panel className="flex flex-col">
          <SectionTitle icon={Lock} title="Ganti password" description="Minimal gunakan kombinasi huruf dan angka." />

          <form onSubmit={handleSavePassword} className="flex flex-1 flex-col">
            <div className="flex-1 space-y-4 px-4 py-4">
              <Field label="Password saat ini">
                <Input
                  type="password"
                  value={passwordData.passwordLama}
                  onChange={(e) => setPasswordData({ ...passwordData, passwordLama: e.target.value })}
                  autoComplete="current-password"
                />
              </Field>

              <Field label="Password baru">
                <Input
                  type="password"
                  value={passwordData.passwordBaru}
                  onChange={(e) => setPasswordData({ ...passwordData, passwordBaru: e.target.value })}
                  autoComplete="new-password"
                />
              </Field>

              <Field label="Konfirmasi password baru">
                <Input
                  type="password"
                  value={passwordData.konfirmasiPassword}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, konfirmasiPassword: e.target.value })
                  }
                  autoComplete="new-password"
                />
              </Field>
            </div>

            <div className="flex justify-end border-t border-line bg-[#faf8f3] px-4 py-3">
              <Button type="submit" variant="secondary" icon={KeyRound} disabled={loading}>
                {loading ? 'Menyimpan…' : 'Ubah password'}
              </Button>
            </div>
          </form>
        </Panel>
      </div>

      {/* Loading Overlay saat mengunggah foto / menyimpan profil */}
      <UploadLoadingOverlay
        open={loading}
        title="Menyimpan Profil Admin"
        message="Mohon tunggu, foto profil dan perubahan sedang diunggah ke server..."
      />

      {/* Modal Cropper Foto Avatar Admin */}
      <ImageCropperModal
        open={cropModal.open}
        onClose={() => setCropModal((prev) => ({ ...prev, open: false }))}
        imageSrc={cropModal.src}
        onCrop={handleCropComplete}
        aspectRatio={1}
        title="Crop Foto Profil Admin (1:1)"
        fileName={cropModal.fileName}
      />
    </div>
  );
}
