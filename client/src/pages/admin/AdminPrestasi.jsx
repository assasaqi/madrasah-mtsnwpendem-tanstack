import { useEffect, useState } from 'react';
import {
  Edit2,
  Loader2,
  Plus,
  RefreshCw,
  Trash2,
  Trophy,
  Upload,
  Clock,
  CalendarDays
} from 'lucide-react';
import { prestasiService } from '../../services/prestasiService';
import { formatDate, formatTime, toLocalInput, getErrorMessage, getFileUrl } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  Toolbar,
  SearchInput,
  Table,
  Th,
  Td,
  EmptyRow,
  StatusDot,
  Tag,
  Button,
  IconButton,
  Alert,
  Modal,
  Field,
  Input,
  Select,
  Textarea,
  buttonClass,
  ImageCropperModal,
  UploadLoadingOverlay
} from '../../components/admin/ui';

const TINGKAT = ['Sekolah', 'Kecamatan', 'Kabupaten/Kota', 'Provinsi', 'Nasional', 'Internasional'];

const emptyForm = {
  judul: '',
  peraih: '',
  tingkat: 'Sekolah',
  juara: '',
  tahun: new Date().getFullYear(),
  createdAt: '',
  deskripsi: '',
  isPublished: true
};

export default function AdminPrestasi() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [cropModal, setCropModal] = useState({ open: false, src: '', fileName: '' });

  // Memuat seluruh prestasi dari API
  const fetchPrestasi = async () => {
    try {
      const data = await prestasiService.getAll();
      setItems(Array.isArray(data) ? data : []);
      setAlert({ type: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat prestasi.') });
    } finally {
      setLoading(false);
    }
  };

  // Memuat ulang data dengan indikator muat
  const refreshPrestasi = () => {
    setLoading(true);
    fetchPrestasi();
  };

  useEffect(() => {
    fetchPrestasi();
  }, []);

  // Membuka modal tambah atau edit prestasi
  const openModal = (item = null) => {
    setEditing(item);
    setForm(
      item
        ? {
            judul: item.judul || '',
            peraih: item.peraih || '',
            tingkat: item.tingkat || 'Sekolah',
            juara: item.juara || '',
            tahun: item.tahun || new Date().getFullYear(),
            createdAt: toLocalInput(item.createdAt),
            deskripsi: item.deskripsi || '',
            isPublished: item.isPublished !== undefined ? item.isPublished : true
          }
        : {
            ...emptyForm,
            createdAt: toLocalInput(new Date())
          }
    );
    setFile(null);
    setPreview(item?.gambar ? getFileUrl(item.gambar) : '');
    setAlert({ type: '', message: '' });
    setShowModal(true);
  };

  // Menangani pemilihan foto dokumentasi dan membuka modal cropper
  const handleFileChange = (event) => {
    const selected = event.target.files?.[0];
    if (!selected) return;
    if (selected.size > 15 * 1024 * 1024) {
      setAlert({ type: 'error', message: 'Ukuran foto maksimal 15MB.' });
      return;
    }
    const src = URL.createObjectURL(selected);
    setCropModal({
      open: true,
      src,
      fileName: selected.name
    });
    event.target.value = '';
  };

  // Menerima hasil crop foto prestasi dari ImageCropperModal
  const handleCropComplete = (res, directPreview) => {
    const croppedFile = res?.file || res;
    const previewUrl = res?.previewUrl || directPreview;
    setFile(croppedFile);
    if (previewUrl) setPreview(previewUrl);
    setCropModal((prev) => ({ ...prev, open: false }));
  };

  // Menyimpan prestasi baru atau hasil edit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert({ type: '', message: '' });

    if (form.judul.trim().length < 3) {
      setAlert({ type: 'error', message: 'Judul minimal 3 karakter.' });
      return;
    }
    if (!form.tahun || Number(form.tahun) < 1990) {
      setAlert({ type: 'error', message: 'Tahun prestasi tidak valid.' });
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        ...form,
        tahun: form.createdAt ? new Date(form.createdAt).getFullYear() : Number(form.tahun || new Date().getFullYear()),
        createdAt: form.createdAt ? new Date(form.createdAt).toISOString() : new Date().toISOString(),
        gambar: file
      };
      if (editing) await prestasiService.update(editing.id, payload);
      else await prestasiService.create(payload);

      setShowModal(false);
      await fetchPrestasi();
      setAlert({
        type: 'success',
        message: editing ? 'Prestasi berhasil diperbarui.' : 'Prestasi berhasil ditambahkan.'
      });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan prestasi.') });
    } finally {
      setSubmitting(false);
    }
  };

  // Menghapus prestasi setelah konfirmasi
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus prestasi ini?')) return;
    try {
      await prestasiService.remove(id);
      await fetchPrestasi();
      setAlert({ type: 'success', message: 'Prestasi berhasil dihapus.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus prestasi.') });
    }
  };

  const filteredItems = items.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return [item.judul, item.peraih, item.juara, item.tingkat, item.tahun].some((value) =>
      String(value || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Prestasi madrasah"
        description="Katalog capaian siswa, guru, dan madrasah yang tampil pada halaman prestasi publik."
        actions={
          <>
            <Button variant="secondary" icon={RefreshCw} onClick={refreshPrestasi}>
              Muat ulang
            </Button>
            <Button variant="primary" icon={Plus} onClick={() => openModal()}>
              Tambah prestasi
            </Button>
          </>
        }
      />

      {alert.message && (
        <Alert tone={alert.type} onClose={() => setAlert({ type: '', message: '' })}>
          {alert.message}
        </Alert>
      )}

      <Panel>
        <Toolbar>
          <SearchInput
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Cari judul, peraih, atau tingkat…"
          />
          <p className="text-[11.5px] text-muted">
            <span className="font-semibold text-ink">{filteredItems.length}</span> prestasi ·{' '}
            <span className="font-semibold text-brand">
              {items.filter((item) => item.isPublished).length}
            </span>{' '}
            terbit
          </p>
        </Toolbar>

        <div className="admin-scroll overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <Th>Prestasi</Th>
                <Th className="hidden md:table-cell">Tingkat</Th>
                <Th className="hidden md:table-cell">Waktu & Tahun</Th>
                <Th>Status</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={5} icon={Loader2} title="Memuat prestasi…" />
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-[#faf8f3]">
                    <Td>
                      <div className="flex items-center gap-3">
                        {item.gambar ? (
                          <a
                            href={getFileUrl(item.gambar)}
                            target="_blank"
                            rel="noreferrer"
                            className="block h-12 w-16 shrink-0 overflow-hidden rounded-md border border-line bg-[#f3f0e9]"
                            title="Buka foto"
                          >
                            <img
                              src={getFileUrl(item.gambar)}
                              alt={item.judul}
                              className="h-full w-full object-cover"
                            />
                          </a>
                        ) : (
                          <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-md border border-line bg-brand-soft text-brand">
                            <Trophy size={17} />
                          </span>
                        )}

                        <div className="min-w-0">
                          <p className="max-w-[340px] font-semibold text-ink">{item.judul}</p>
                          <p className="mt-0.5 line-clamp-1 max-w-[340px] text-[10.5px] text-muted">
                            {[item.juara, item.peraih].filter(Boolean).join(' · ') || 'Tanpa keterangan peraih'}
                          </p>
                          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-muted md:hidden">
                            <span>{item.tingkat}</span>
                            <span>· {item.tahun}</span>
                          </div>
                        </div>
                      </div>
                    </Td>
                    <Td className="hidden md:table-cell">
                      <Tag>{item.tingkat}</Tag>
                    </Td>
                    <Td className="hidden whitespace-nowrap text-muted md:table-cell">
                      <div className="font-medium text-ink/85">{item.createdAt ? formatDate(item.createdAt) : item.tahun}</div>
                      {item.createdAt && (
                        <div className="text-[11px] text-muted/75">{formatTime(item.createdAt)} WIB</div>
                      )}
                    </Td>
                    <Td>
                      {item.isPublished ? (
                        <StatusDot tone="brand">Terbit</StatusDot>
                      ) : (
                        <StatusDot tone="stone">Draf</StatusDot>
                      )}
                    </Td>
                    <Td align="right">
                      <div className="flex items-center justify-end gap-0.5">
                        <IconButton label="Edit prestasi" tone="brand" onClick={() => openModal(item)}>
                          <Edit2 size={14} />
                        </IconButton>
                        <IconButton label="Hapus prestasi" tone="danger" onClick={() => handleDelete(item.id)}>
                          <Trash2 size={14} />
                        </IconButton>
                      </div>
                    </Td>
                  </tr>
                ))
              ) : (
                <EmptyRow
                  colSpan={5}
                  icon={Trophy}
                  title="Belum ada prestasi"
                  description="Catat capaian pertama untuk menunjukkan kualitas dan pembinaan madrasah."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={editing ? 'Sunting prestasi' : 'Prestasi baru'}
        description="Cantumkan nama peraih, juara, dan tingkat lomba agar informasi mudah dipahami."
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={submitting}>
              {submitting ? 'Menyimpan…' : 'Simpan'}
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {alert.type === 'error' && alert.message && <Alert tone="error">{alert.message}</Alert>}

          <Field label="Judul prestasi" required>
            <Input
              required
              minLength={3}
              value={form.judul}
              onChange={(event) => setForm({ ...form, judul: event.target.value })}
              placeholder="Contoh: Juara 1 Olimpiade Matematika Provinsi"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Tanggal & Waktu Prestasi" required>
              <Input
                type="datetime-local"
                required
                value={form.createdAt}
                onChange={(event) => {
                  const val = event.target.value;
                  const date = new Date(val);
                  setForm({
                    ...form,
                    createdAt: val,
                    tahun: !Number.isNaN(date.getTime()) ? date.getFullYear() : form.tahun
                  });
                }}
              />
            </Field>

            <Field label="Tingkat" required>
              <Select
                value={form.tingkat}
                onChange={(event) => setForm({ ...form, tingkat: event.target.value })}
              >
                {TINGKAT.map((tingkat) => (
                  <option key={tingkat} value={tingkat}>
                    {tingkat}
                  </option>
                ))}
              </Select>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Juara / penghargaan" hint="Contoh: Juara 1, Medali Emas.">
              <Input
                value={form.juara}
                onChange={(event) => setForm({ ...form, juara: event.target.value })}
                placeholder="Juara 1"
              />
            </Field>
            <Field label="Nama peraih" hint="Boleh nama siswa, tim, atau guru.">
              <Input
                value={form.peraih}
                onChange={(event) => setForm({ ...form, peraih: event.target.value })}
                placeholder="Nama siswa atau tim"
              />
            </Field>
          </div>

          <Field label="Deskripsi" hint="Opsional. Jelaskan penyelenggara atau bidang lomba.">
            <Textarea
              rows={3}
              value={form.deskripsi}
              onChange={(event) => setForm({ ...form, deskripsi: event.target.value })}
              placeholder="Keterangan singkat tentang prestasi ini…"
            />
          </Field>

          <Field label="Foto dokumentasi" hint="Opsional. Format JPG, PNG, atau WebP. Maksimal 5MB.">
            <label className={buttonClass('secondary', 'md', 'w-full cursor-pointer')}>
              <Upload size={15} />
              {file ? file.name : 'Pilih berkas gambar'}
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
          </Field>

          {preview && (
            <div className="overflow-hidden rounded-lg border border-line bg-[#f3f0e9]">
              <img src={preview} alt="Pratinjau" className="h-44 w-full object-cover" />
            </div>
          )}

          <label className="flex cursor-pointer items-center gap-2 text-[12px] text-ink/85">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(event) => setForm({ ...form, isPublished: event.target.checked })}
              className="h-4 w-4 rounded border-line text-brand focus:ring-brand/25"
            />
            Terbitkan prestasi ini
          </label>
        </form>
      </Modal>

      {/* Loading Overlay saat mengunggah foto / menyimpan prestasi */}
      <UploadLoadingOverlay
        open={submitting}
        title="Menyimpan Data Prestasi"
        message="Mohon tunggu, berkas foto dan informasi prestasi sedang diunggah ke server..."
      />

      {/* Modal Cropper Foto Prestasi */}
      <ImageCropperModal
        open={cropModal.open}
        onClose={() => setCropModal((prev) => ({ ...prev, open: false }))}
        imageSrc={cropModal.src}
        onCrop={handleCropComplete}
        aspectRatio={16 / 9}
        title="Crop Foto Prestasi (16:9)"
        fileName={cropModal.fileName}
      />
    </div>
  );
}
