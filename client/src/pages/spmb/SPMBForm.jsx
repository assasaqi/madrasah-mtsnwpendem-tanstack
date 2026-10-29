import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Send,
  Upload,
  User,
  Users
} from 'lucide-react';
import { spmbService } from '../../services/spmbService';
import { getErrorMessage } from '../../utils/helpers';
import {
  Alert,
  Button,
  Field,
  Input,
  Loader,
  PageHeader,
  Panel,
  SectionTitle,
  Select,
  StatusDot,
  Table,
  Td,
  Textarea,
  Th,
  Tag,
  buttonClass,
  cx
} from '../../components/ui';

const LANGKAH = [
  { id: 1, judul: 'Data diri', keterangan: 'Identitas calon siswa', icon: User },
  { id: 2, judul: 'Orang tua', keterangan: 'Kontak ayah & ibu', icon: Users },
  { id: 3, judul: 'Berkas', keterangan: 'KK, akta & pas foto', icon: Upload }
];

const BERKAS_WAJIB = [
  {
    name: 'fileKK',
    jenis: 'KARTU_KELUARGA',
    label: 'Kartu keluarga (KK)',
    ketentuan: 'JPG, PNG, atau PDF · maks 2 MB',
    accept: '.pdf,.jpg,.jpeg,.png'
  },
  {
    name: 'fileAkta',
    jenis: 'AKTA_KELAHIRAN',
    label: 'Akta kelahiran',
    ketentuan: 'JPG, PNG, atau PDF · maks 2 MB',
    accept: '.pdf,.jpg,.jpeg,.png'
  },
  {
    name: 'fileFoto',
    jenis: 'PAS_FOTO',
    label: 'Pas foto 3×4',
    ketentuan: 'JPG atau PNG · maks 1 MB',
    accept: '.jpg,.jpeg,.png'
  }
];

// Mengubah format ISO Date ke nilai input tanggal YYYY-MM-DD
const formatIsoToDateInput = (isoString) => {
  if (!isoString) return '';
  try {
    if (isoString.length === 10 && isoString.includes('-')) return isoString;
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '';
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  } catch {
    return '';
  }
};

// Menampilkan formulir pendaftaran bertahap beserta unggahan berkas persyaratan
export default function SPMBForm() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');

  const [hasBiodata, setHasBiodata] = useState(false);
  const [hasOrtu, setHasOrtu] = useState(false);
  const [hasUploadedDocs, setHasUploadedDocs] = useState(false);
  const [pendaftaranData, setPendaftaranData] = useState(null);
  const [terkunci, setTerkunci] = useState(false);
  const [statusPendaftaran, setStatusPendaftaran] = useState('BELUM_ISI');

  const [openDropdown, setOpenDropdown] = useState(null);

  const [formData, setFormData] = useState({
    namaLengkap: '',
    nik: '',
    nisn: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: 'LAKI_LAKI',
    sekolahAsal: '',
    alamat: '',

    namaAyah: '',
    pekerjaanAyah: '',
    namaIbu: '',
    pekerjaanIbu: '',
    noWhatsapp: '',

    fileKK: null,
    fileAkta: null,
    fileFoto: null
  });

  // Mengambil data pendaftaran yang sudah tersimpan untuk mode pembaruan
  const fetchExistingData = useCallback(async () => {
    try {
      const res = await spmbService.getStatus();
      const pendaftaran = res?.data;
      setTerkunci(Boolean(res?.terkunci));
      setStatusPendaftaran(res?.status || 'BELUM_ISI');
      if (pendaftaran && pendaftaran.id) {
        setPendaftaranData(pendaftaran);
        const { biodata, orangTua, dokumen } = pendaftaran;

        if (biodata) setHasBiodata(true);
        if (orangTua) setHasOrtu(true);
        if (dokumen && dokumen.length > 0) setHasUploadedDocs(true);

        setFormData((prev) => ({
          ...prev,
          namaLengkap: biodata?.namaLengkap || '',
          nik: biodata?.nik || '',
          nisn: biodata?.nisn || '',
          tempatLahir: biodata?.tempatLahir || '',
          tanggalLahir: formatIsoToDateInput(biodata?.tanggalLahir),
          jenisKelamin: biodata?.jenisKelamin || 'LAKI_LAKI',
          sekolahAsal: biodata?.asalSekolah || '',
          alamat: biodata?.alamat || '',

          namaAyah: orangTua?.namaAyah || '',
          pekerjaanAyah: orangTua?.pekerjaanAyah || '',
          namaIbu: orangTua?.namaIbu || '',
          pekerjaanIbu: orangTua?.pekerjaanIbu || '',
          noWhatsapp: orangTua?.noHpAyah || orangTua?.noHpIbu || ''
        }));
      }
    } catch (err) {
      console.error('Gagal memuat data pendaftaran:', err);
      setError(getErrorMessage(err, 'Gagal memuat data formulir.'));
    } finally {
      setFetching(false);
    }
  }, []);

  // Memuat data formulir pendaftaran dari API saat komponen dipasang
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mengisi formulir sekali dari API
    fetchExistingData();
  }, [fetchExistingData]);

  // Menampilkan atau menyembunyikan ringkasan data yang sudah tersimpan
  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  // Mengelola pembaruan nilai pada bidang input teks
  const handleChange = (e) => {
    if (terkunci) return;
    const { name, value } = e.target;
    setError('');
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mengelola pemilihan berkas dokumen dengan validasi ukuran
  const handleFileChange = (e) => {
    if (terkunci) return;
    const { name, files } = e.target;
    setError('');
    if (files && files[0]) {
      const selectedFile = files[0];
      const maxSize = name === 'fileFoto' ? 1 * 1024 * 1024 : 2 * 1024 * 1024;

      if (selectedFile.size > maxSize) {
        setError(
          `Ukuran file ${selectedFile.name} melebihi batas maksimum (${
            name === 'fileFoto' ? '1MB' : '2MB'
          }).`
        );
        e.target.value = null;
        return;
      }
      setFormData((prev) => ({ ...prev, [name]: selectedFile }));
    }
  };

  // Memvalidasi bidang input wajib dan berpindah ke langkah berikutnya
  const handleNext = (e) => {
    e.preventDefault();
    setError('');
    if (currentStep === 1) {
      if (!formData.namaLengkap || !formData.nik || !formData.sekolahAsal || !formData.tanggalLahir) {
        setError('Harap lengkapi seluruh kolom wajib bertanda (*) di Langkah 1.');
        return;
      }
      if (formData.nik.length !== 16) {
        setError('NIK harus berisi tepat 16 digit angka.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.namaAyah || !formData.namaIbu || !formData.noWhatsapp) {
        setError('Harap lengkapi nama orang tua dan nomor WhatsApp di Langkah 2.');
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  // Kembali ke langkah formulir sebelumnya
  const handlePrev = (e) => {
    e.preventDefault();
    setError('');
    setCurrentStep((prev) => prev - 1);
  };

  // Mengirimkan data formulir pendaftaran dan unggahan dokumen ke server
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (terkunci) {
      setError('Data pendaftaran sudah diverifikasi panitia sehingga tidak dapat diubah lagi.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const payloadBiodata = {
        namaLengkap: formData.namaLengkap,
        nik: formData.nik,
        nisn: formData.nisn,
        tempatLahir: formData.tempatLahir,
        tanggalLahir: formData.tanggalLahir,
        jenisKelamin: formData.jenisKelamin,
        sekolahAsal: formData.sekolahAsal,
        alamat: formData.alamat,
        namaAyah: formData.namaAyah,
        pekerjaanAyah: formData.pekerjaanAyah,
        namaIbu: formData.namaIbu,
        pekerjaanIbu: formData.pekerjaanIbu,
        noWhatsapp: formData.noWhatsapp
      };

      await spmbService.submitPendaftaran(payloadBiodata);

      if (formData.fileKK instanceof File) {
        await spmbService.uploadDokumen(formData.fileKK, 'fileKK');
      }
      if (formData.fileAkta instanceof File) {
        await spmbService.uploadDokumen(formData.fileAkta, 'fileAkta');
      }
      if (formData.fileFoto instanceof File) {
        await spmbService.uploadDokumen(formData.fileFoto, 'fileFoto');
      }

      navigate({ to: '/spmb/dashboard', state: { submitted: true } });
    } catch (err) {
      console.error('Gagal Submit SPMB:', err);
      setError(getErrorMessage(err, 'Gagal menyimpan data pendaftaran. Terjadi kendala sistem.'));
    } finally {
      setLoading(false);
    }
  };

  const langkahAktif = LANGKAH.find((item) => item.id === currentStep) || LANGKAH[0];
  const sudahTerisi = { 1: hasBiodata, 2: hasOrtu, 3: hasUploadedDocs };

  // Menyiapkan baris ringkasan data yang sudah tersimpan di server
  const barisRingkasan = pendaftaranData
    ? [
        { label: 'Nama lengkap', value: pendaftaranData.biodata?.namaLengkap || '-' },
        { label: 'NIK', value: pendaftaranData.biodata?.nik || '-' },
        { label: 'NISN', value: pendaftaranData.biodata?.nisn || '-' },
        { label: 'Sekolah asal', value: pendaftaranData.biodata?.asalSekolah || '-' },
        {
          label: 'Nama orang tua',
          value:
            [pendaftaranData.orangTua?.namaAyah, pendaftaranData.orangTua?.namaIbu]
              .filter(Boolean)
              .join(' / ') || '-'
        },
        {
          label: 'WhatsApp wali',
          value:
            pendaftaranData.orangTua?.noHpAyah || pendaftaranData.orangTua?.noHpIbu || '-'
        }
      ]
    : [];

  if (fetching) return <Loader label="Memuat formulir SPMB…" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Formulir pendaftaran"
        description={
          terkunci
            ? 'Data pendaftaran sudah diverifikasi panitia. Formulir hanya dapat dilihat.'
            : pendaftaranData
              ? 'Perbarui biodata atau unggah ulang berkas yang perlu diperbaiki.'
              : 'Lengkapi biodata, data orang tua, lalu unggah berkas persyaratan.'
        }
        actions={
          <Link to="/spmb/dashboard" className={buttonClass('secondary')}>
            <ArrowLeft size={14} /> Kembali ke dashboard
          </Link>
        }
      />

      {terkunci && (
        <Alert tone="success">
          <strong>Formulir terkunci.</strong> Data dan berkas Anda sudah diverifikasi panitia
          {statusPendaftaran === 'TIDAK_LULUS' ? ' dan dinyatakan tidak lulus' : ''}. Hubungi panitia
          SPMB bila ada data yang perlu diperbaiki.
        </Alert>
      )}

      <Panel>
        <div className="grid gap-2 p-3 sm:grid-cols-3 sm:p-4">
          {LANGKAH.map((langkah) => {
            const Icon = langkah.icon;
            const aktif = langkah.id === currentStep;
            const selesai = sudahTerisi[langkah.id];

            return (
              <button
                key={langkah.id}
                type="button"
                onClick={() => {
                  setError('');
                  setCurrentStep(langkah.id);
                }}
                className={cx(
                  'flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left transition-colors',
                  aktif
                    ? 'border-brand/35 bg-brand-soft'
                    : 'border-line bg-paper hover:bg-[#faf8f3]'
                )}
              >
                <span
                  className={cx(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10.5px] font-semibold',
                    selesai
                      ? 'border-brand bg-brand text-[#f8f6ef]'
                      : aktif
                        ? 'border-brand bg-paper text-brand'
                        : 'border-line bg-paper text-muted'
                  )}
                >
                  {selesai ? <Check size={12} /> : langkah.id}
                </span>

                <span className="min-w-0">
                  <span
                    className={cx(
                      'flex items-center gap-1.5 text-[11.5px] font-semibold',
                      aktif ? 'text-ink' : 'text-ink/80'
                    )}
                  >
                    <Icon size={12} className={aktif ? 'text-brand' : 'text-[#a8a294]'} />
                    {langkah.judul}
                  </span>
                  <span className="mt-0.5 block text-[10px] text-muted">{langkah.keterangan}</span>
                </span>
              </button>
            );
          })}
        </div>
      </Panel>

      {hasBiodata && (
        <Panel>
          <button
            type="button"
            onClick={() => toggleDropdown('biodata')}
            className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
          >
            <span>
              <span className="block text-[12.5px] font-semibold text-ink">
                Data yang sudah tersimpan
              </span>
              <span className="mt-0.5 block text-[11px] text-muted">
                {terkunci
                  ? 'Data terverifikasi panitia dan hanya dapat dilihat.'
                  : 'Periksa ringkasan sebelum memperbarui formulir.'}
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-brand">
              {openDropdown === 'biodata' ? 'Sembunyikan' : 'Tampilkan'}
              {openDropdown === 'biodata' ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </span>
          </button>

          {openDropdown === 'biodata' && (
            <div className="overflow-x-auto border-t border-line">
              <Table>
                <thead>
                  <tr>
                    <Th>Data</Th>
                    <Th>Terisi</Th>
                  </tr>
                </thead>
                <tbody>
                  {barisRingkasan.map((baris) => (
                    <tr key={baris.label}>
                      <Td className="w-[42%] text-muted">{baris.label}</Td>
                      <Td className="font-medium">{baris.value}</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Panel>
      )}

      {error && (
        <Alert tone="error">
          <strong>Periksa kembali data Anda.</strong> {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Panel>
          <SectionTitle
            icon={langkahAktif.icon}
            title={`Langkah ${langkahAktif.id}: ${langkahAktif.judul}`}
            description={
              currentStep === 1
                ? 'Sesuaikan dengan akta kelahiran dan kartu keluarga.'
                : currentStep === 2
                  ? 'Nama orang tua dan nomor WhatsApp yang aktif.'
                  : 'Unggah berkas yang jelas dan mudah dibaca.'
            }
          />

          <div className="px-4 py-4 sm:px-5">
            {currentStep === 1 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nama lengkap" required htmlFor="namaLengkap" className="sm:col-span-2">
                  <Input
                    id="namaLengkap"
                    type="text"
                    name="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="Sesuai akta kelahiran"
                  />
                </Field>

                <Field label="NIK" required htmlFor="nik" hint="16 digit sesuai kartu keluarga.">
                  <Input
                    id="nik"
                    type="text"
                    name="nik"
                    maxLength={16}
                    value={formData.nik}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="16 digit NIK"
                  />
                </Field>

                <Field label="NISN" htmlFor="nisn" hint="Opsional, 10 digit bila sudah ada.">
                  <Input
                    id="nisn"
                    type="text"
                    name="nisn"
                    maxLength={10}
                    value={formData.nisn}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="10 digit NISN"
                  />
                </Field>

                <Field label="Tempat lahir" required htmlFor="tempatLahir">
                  <Input
                    id="tempatLahir"
                    type="text"
                    name="tempatLahir"
                    value={formData.tempatLahir}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="Kota tempat lahir"
                  />
                </Field>

                <Field label="Tanggal lahir" required htmlFor="tanggalLahir">
                  <Input
                    id="tanggalLahir"
                    type="date"
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    disabled={terkunci}
                  />
                </Field>

                <Field label="Jenis kelamin" required htmlFor="jenisKelamin">
                  <Select
                    id="jenisKelamin"
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    disabled={terkunci}
                  >
                    <option value="LAKI_LAKI">Laki-laki</option>
                    <option value="PEREMPUAN">Perempuan</option>
                  </Select>
                </Field>

                <Field label="Sekolah asal" required htmlFor="sekolahAsal">
                  <Input
                    id="sekolahAsal"
                    type="text"
                    name="sekolahAsal"
                    value={formData.sekolahAsal}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="SD / MI asal"
                  />
                </Field>

                <Field label="Alamat tempat tinggal" required htmlFor="alamat" className="sm:col-span-2">
                  <Textarea
                    id="alamat"
                    name="alamat"
                    rows={3}
                    value={formData.alamat}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="Jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota"
                  />
                </Field>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nama lengkap ayah" required htmlFor="namaAyah">
                  <Input
                    id="namaAyah"
                    type="text"
                    name="namaAyah"
                    value={formData.namaAyah}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="Nama ayah kandung"
                  />
                </Field>

                <Field label="Pekerjaan ayah" htmlFor="pekerjaanAyah">
                  <Input
                    id="pekerjaanAyah"
                    type="text"
                    name="pekerjaanAyah"
                    value={formData.pekerjaanAyah}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="PNS / swasta / wiraswasta"
                  />
                </Field>

                <Field label="Nama lengkap ibu" required htmlFor="namaIbu">
                  <Input
                    id="namaIbu"
                    type="text"
                    name="namaIbu"
                    value={formData.namaIbu}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="Nama ibu kandung"
                  />
                </Field>

                <Field label="Pekerjaan ibu" htmlFor="pekerjaanIbu">
                  <Input
                    id="pekerjaanIbu"
                    type="text"
                    name="pekerjaanIbu"
                    value={formData.pekerjaanIbu}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="Ibu rumah tangga / swasta"
                  />
                </Field>

                <Field
                  label="Nomor WhatsApp aktif"
                  required
                  htmlFor="noWhatsapp"
                  className="sm:col-span-2"
                  hint="Dipakai panitia untuk menginformasikan hasil verifikasi."
                >
                  <Input
                    id="noWhatsapp"
                    type="tel"
                    name="noWhatsapp"
                    value={formData.noWhatsapp}
                    onChange={handleChange}
                    disabled={terkunci}
                    placeholder="081234567890"
                  />
                </Field>
              </div>
            )}

            {currentStep === 3 && (
              <div className="overflow-x-auto rounded-lg border border-line">
                <Table>
                  <thead>
                    <tr>
                      <Th>Berkas</Th>
                      <Th className="hidden sm:table-cell">Ketentuan</Th>
                      <Th>Status</Th>
                      <Th align="right">Aksi</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {BERKAS_WAJIB.map((berkas) => {
                      const dipilih = formData[berkas.name];
                      const tersimpan = pendaftaranData?.dokumen?.some(
                        (dok) => dok.jenisDokumen === berkas.jenis
                      );

                      return (
                        <tr key={berkas.name}>
                          <Td>
                            <p className="font-medium text-ink">{berkas.label}</p>
                            {dipilih && (
                              <p className="mt-0.5 break-all text-[10px] text-brand">
                                {dipilih.name}
                              </p>
                            )}
                            <p className="mt-0.5 text-[10px] text-muted sm:hidden">
                              {berkas.ketentuan}
                            </p>
                          </Td>
                          <Td className="hidden text-muted sm:table-cell">{berkas.ketentuan}</Td>
                          <Td>
                            {dipilih ? (
                              <StatusDot tone="blue">Siap diunggah</StatusDot>
                            ) : tersimpan ? (
                              <StatusDot tone="brand">Sudah terunggah</StatusDot>
                            ) : (
                              <StatusDot tone="stone">Belum ada</StatusDot>
                            )}
                          </Td>
                          <Td align="right">
                            {terkunci ? (
                              <span className="text-[11px] text-muted">Terkunci</span>
                            ) : (
                              <label
                                className={buttonClass('secondary', 'sm', 'cursor-pointer')}
                                htmlFor={`berkas-${berkas.name}`}
                              >
                                {dipilih || tersimpan ? 'Ganti' : 'Pilih'}
                                <input
                                  id={`berkas-${berkas.name}`}
                                  type="file"
                                  name={berkas.name}
                                  accept={berkas.accept}
                                  onChange={handleFileChange}
                                  disabled={terkunci}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </Td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 border-t border-line bg-[#faf8f3] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
            <Tag>{`Langkah ${currentStep} dari 3`}</Tag>

            <div className="flex flex-col gap-2 sm:flex-row">
              {currentStep > 1 && (
                <Button type="button" variant="secondary" icon={ArrowLeft} onClick={handlePrev}>
                  Sebelumnya
                </Button>
              )}

              {currentStep < 3 ? (
                <Button type="button" variant="primary" onClick={handleNext}>
                  Selanjutnya <ArrowRight size={14} />
                </Button>
              ) : terkunci ? (
                <Tag>Terkunci</Tag>
              ) : (
                <Button type="submit" variant="primary" icon={Send} disabled={loading}>
                  {loading ? 'Menyimpan…' : 'Simpan pendaftaran'}
                </Button>
              )}
            </div>
          </div>
        </Panel>
      </form>
    </div>
  );
}
