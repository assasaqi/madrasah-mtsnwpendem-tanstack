import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';
import { spmbService } from '../../../services/spmbService';
import { getErrorMessage } from '../../../utils/helpers';
import { Alert, Button, Field, Input, Loader, Modal, Textarea } from '../ui';

const FORM_KOSONG = {
  tahunAjaran: '',
  kodeSurat: '',
  tempatPenerbitan: '',
  namaKetuaPanitia: '',
  nipKetuaPanitia: '',
  namaKepalaMadrasah: '',
  nipKepalaMadrasah: '',
  catatanSurat: ''
};

// Mengelola pengaturan data yang tercetak pada surat keterangan lulus SPMB
export default function PengaturanSuratModal({ open, onClose, onSaved }) {
  const [form, setForm] = useState(FORM_KOSONG);
  const [bawaan, setBawaan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!open) return;

    let masihAktif = true;

    const muat = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const data = await spmbService.getPengaturan();
        if (!masihAktif || !data) return;
        setBawaan(Boolean(data.bawaan));
        setForm({
          tahunAjaran: data.tahunAjaran || '',
          kodeSurat: data.kodeSurat || '',
          tempatPenerbitan: data.tempatPenerbitan || '',
          namaKetuaPanitia: data.namaKetuaPanitia || '',
          nipKetuaPanitia: data.nipKetuaPanitia || '',
          namaKepalaMadrasah: data.namaKepalaMadrasah || '',
          nipKepalaMadrasah: data.nipKepalaMadrasah || '',
          catatanSurat: data.catatanSurat || ''
        });
      } catch (err) {
        if (masihAktif) setErrorMsg(getErrorMessage(err, 'Gagal memuat pengaturan surat.'));
      } finally {
        if (masihAktif) setLoading(false);
      }
    };

    muat();

    return () => {
      masihAktif = false;
    };
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrorMsg('');
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setErrorMsg('');

    try {
      const response = await spmbService.updatePengaturan(form);
      setBawaan(false);
      onSaved?.(response?.data || null);
      onClose?.();
    } catch (err) {
      setErrorMsg(getErrorMessage(err, 'Gagal menyimpan pengaturan surat.'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Pengaturan surat keterangan lulus"
      description="Data ini dipakai pada surat keterangan lulus yang dicetak pendaftar."
      size="lg"
      footer={
        <>
          <Button type="button" variant="secondary" onClick={onClose} disabled={saving}>
            Batal
          </Button>
          <Button type="submit" form="form-pengaturan-surat" variant="primary" icon={Save} disabled={saving || loading}>
            {saving ? 'Menyimpan…' : 'Simpan pengaturan'}
          </Button>
        </>
      }
    >
      {loading ? (
        <Loader label="Memuat pengaturan surat…" />
      ) : (
        <form id="form-pengaturan-surat" onSubmit={handleSubmit} className="space-y-4">
          {bawaan && (
            <Alert>
              Sebagian data masih memakai nilai bawaan dari profil madrasah. Periksa lalu simpan agar
              tersimpan permanen.
            </Alert>
          )}

          {errorMsg && <Alert tone="error">{errorMsg}</Alert>}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Tahun ajaran" required htmlFor="tahunAjaran" hint="Contoh: 2026/2027">
              <Input
                id="tahunAjaran"
                name="tahunAjaran"
                value={form.tahunAjaran}
                onChange={handleChange}
                placeholder="2026/2027"
              />
            </Field>

            <Field label="Kode surat" required htmlFor="kodeSurat" hint="Dipakai di awal nomor surat.">
              <Input
                id="kodeSurat"
                name="kodeSurat"
                value={form.kodeSurat}
                onChange={handleChange}
                placeholder="SPMB/SKL"
              />
            </Field>

            <Field label="Tempat penerbitan" htmlFor="tempatPenerbitan" hint="Kota/kabupaten pada tanda tangan.">
              <Input
                id="tempatPenerbitan"
                name="tempatPenerbitan"
                value={form.tempatPenerbitan}
                onChange={handleChange}
                placeholder="Lombok Tengah"
              />
            </Field>

            <Field label="Nama ketua panitia" htmlFor="namaKetuaPanitia">
              <Input
                id="namaKetuaPanitia"
                name="namaKetuaPanitia"
                value={form.namaKetuaPanitia}
                onChange={handleChange}
                placeholder="Nama lengkap ketua panitia"
              />
            </Field>

            <Field label="NIP ketua panitia" htmlFor="nipKetuaPanitia" hint="Kosongkan bila bukan ASN.">
              <Input
                id="nipKetuaPanitia"
                name="nipKetuaPanitia"
                value={form.nipKetuaPanitia}
                onChange={handleChange}
                placeholder="NIP"
              />
            </Field>

            <Field label="Nama kepala madrasah" htmlFor="namaKepalaMadrasah">
              <Input
                id="namaKepalaMadrasah"
                name="namaKepalaMadrasah"
                value={form.namaKepalaMadrasah}
                onChange={handleChange}
                placeholder="Nama lengkap kepala madrasah"
              />
            </Field>

            <Field label="NIP kepala madrasah" htmlFor="nipKepalaMadrasah" hint="Kosongkan bila bukan ASN.">
              <Input
                id="nipKepalaMadrasah"
                name="nipKepalaMadrasah"
                value={form.nipKepalaMadrasah}
                onChange={handleChange}
                placeholder="NIP"
              />
            </Field>

            <Field
              label="Catatan tambahan surat"
              htmlFor="catatanSurat"
              className="sm:col-span-2"
              hint="Opsional. Tampil sebagai catatan di bawah isi surat."
            >
              <Textarea
                id="catatanSurat"
                name="catatanSurat"
                rows={3}
                value={form.catatanSurat}
                onChange={handleChange}
                placeholder="Misalnya: membawa berkas asli saat daftar ulang."
              />
            </Field>
          </div>
        </form>
      )}
    </Modal>
  );
}
