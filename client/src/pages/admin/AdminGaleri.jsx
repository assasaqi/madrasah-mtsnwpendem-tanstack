import { useEffect, useState } from 'react';
import {
  Images,
  Plus,
  Trash2,
  Edit2,
  Loader2,
  RefreshCw,
  Upload
} from 'lucide-react';
import { galeriService } from '../../services/galeriService';
import { formatDate, getErrorMessage, getFileUrl } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  Toolbar,
  SearchInput,
  Table,
  Th,
  Td,
  EmptyRow,
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

const KATEGORI = ['Kegiatan', 'Prestasi', 'Fasilitas', 'Ekstrakurikuler'];

const emptyForm = { judul: '', deskripsi: '', kategori: 'Kegiatan' };

export default function AdminGaleri() {
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

  useEffect(() => {
    fetchGaleri();
  }, []);

  // Memuat seluruh foto galeri dari API
  const fetchGaleri = async () => {
    try {
      setLoading(true);
      const data = await galeriService.getAll();
      setItems(Array.isArray(data) ? data : []);
      setAlert({ type: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat galeri.') });
    } finally {
      setLoading(false);
    }
  };

  // Membuka modal untuk menambah atau mengedit foto
  const openModal = (item = null) => {
    setEditing(item);
    setForm(
      item
        ? {
            judul: item.judul || '',
            deskripsi: item.deskripsi || '',
            kategori: item.kategori || 'Kegiatan'
          }
        : emptyForm
    );
    setFile(null);
    setPreview(item ? getFileUrl(item.imageUrl) : '');
    setAlert({ type: '', message: '' });
    setShowModal(true);
  };

  // Menangani pemilihan berkas foto dan membuka modal cropper
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

  // Menerima hasil crop foto galeri dari ImageCropperModal
  const handleCropComplete = (res, directPreview) => {
    const croppedFile = res?.file || res;
    const previewUrl = res?.previewUrl || directPreview;
    setFile(croppedFile);
    if (previewUrl) setPreview(previewUrl);
    setCropModal((prev) => ({ ...prev, open: false }));
  };

  // Menyimpan data galeri baru atau hasil edit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert({ type: '', message: '' });

    if (form.judul.trim().length < 3) {
      setAlert({ type: 'error', message: 'Judul minimal 3 karakter.' });
      return;
    }
    if (!editing && !file) {
      setAlert({ type: 'error', message: 'Pilih foto yang akan diunggah.' });
      return;
    }

    try {
      setSubmitting(true);
      const payload = { ...form, gambar: file };
      if (editing) await galeriService.update(editing.id, payload);
      else await galeriService.create(payload);

      setShowModal(false);
      await fetchGaleri();
      setAlert({
        type: 'success',
        message: editing ? 'Foto berhasil diperbarui.' : 'Foto berhasil ditambahkan.'
      });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan foto galeri.') });
    } finally {
      setSubmitting(false);
    }
  };

  // Menghapus foto galeri setelah konfirmasi
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus foto ini dari galeri?')) return;
    try {
      await galeriService.remove(id);
      await fetchGaleri();
      setAlert({ type: 'success', message: 'Foto berhasil dihapus.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus foto.') });
    }
  };

  const filteredItems = items.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return [item.judul, item.deskripsi, item.kategori].some((value) =>
      String(value || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Galeri madrasah"
        description="Kumpulan foto kegiatan, prestasi, dan fasilitas yang tampil pada halaman galeri publik."
        actions={
          <>
            <Button variant="secondary" icon={RefreshCw} onClick={fetchGaleri}>
              Muat ulang
            </Button>
            <Button variant="primary" icon={Plus} onClick={() => openModal()}>
              Tambah foto
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
            placeholder="Cari judul atau kategori foto…"
          />
          <p className="text-[11.5px] text-muted">
            <span className="font-semibold text-ink">{filteredItems.length}</span> foto dalam galeri
          </p>
        </Toolbar>

        <div className="admin-scroll overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <Th>Foto</Th>
                <Th>Judul</Th>
                <Th className="hidden md:table-cell">Kategori</Th>
                <Th className="hidden md:table-cell">Diunggah</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={5} icon={Loader2} title="Memuat galeri…" />
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-[#faf8f3]">
                    <Td>
                      <a
                        href={getFileUrl(item.imageUrl)}
                        target="_blank"
                        rel="noreferrer"
                        className="block h-12 w-16 overflow-hidden rounded-md border border-line bg-[#f3f0e9]"
                        title="Buka foto"
                      >
                        <img
                          src={getFileUrl(item.imageUrl)}
                          alt={item.judul}
                          className="h-full w-full object-cover"
                        />
                      </a>
                    </Td>
                    <Td>
                      <p className="max-w-[380px] font-semibold text-ink">{item.judul}</p>
                      <p className="mt-0.5 line-clamp-1 max-w-[380px] text-[10.5px] text-muted">
                        {item.deskripsi || 'Tanpa deskripsi'}
                      </p>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-muted md:hidden">
                        <span className="truncate">{item.kategori || 'Umum'}</span>
                        <span className="whitespace-nowrap">
                          · {formatDate(item.createdAt, { month: 'short' })}
                        </span>
                      </div>
                    </Td>
                    <Td className="hidden md:table-cell">
                      <Tag>{item.kategori || 'Umum'}</Tag>
                    </Td>
                    <Td className="hidden whitespace-nowrap text-muted md:table-cell">{formatDate(item.createdAt)}</Td>
                    <Td align="right">
                      <div className="flex items-center justify-end gap-0.5">
                        <IconButton label="Edit foto" tone="brand" onClick={() => openModal(item)}>
                          <Edit2 size={14} />
                        </IconButton>
                        <IconButton label="Hapus foto" tone="danger" onClick={() => handleDelete(item.id)}>
                          <Trash2 size={14} />
                        </IconButton>
                      </div>
                    </Td>
                  </tr>
                ))
              ) : (
                <EmptyRow
                  colSpan={5}
                  icon={Images}
                  title="Galeri masih kosong"
                  description="Unggah foto kegiatan pertama untuk memperkaya website madrasah."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={editing ? 'Sunting foto galeri' : 'Tambah foto galeri'}
        description="Gunakan foto tajam dengan pencahayaan baik agar tampilan galeri menarik."
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

          <Field label="Judul foto" required>
            <Input
              required
              minLength={3}
              value={form.judul}
              onChange={(event) => setForm({ ...form, judul: event.target.value })}
              placeholder="Contoh: Upacara bendera hari Senin"
            />
          </Field>

          <Field label="Kategori">
            <Select
              value={form.kategori}
              onChange={(event) => setForm({ ...form, kategori: event.target.value })}
            >
              {KATEGORI.map((kategori) => (
                <option key={kategori} value={kategori}>
                  {kategori}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Deskripsi" hint="Opsional, satu atau dua kalimat saja.">
            <Textarea
              rows={3}
              value={form.deskripsi}
              onChange={(event) => setForm({ ...form, deskripsi: event.target.value })}
              placeholder="Keterangan singkat tentang foto ini…"
            />
          </Field>

          <Field label="Berkas foto" hint="Format JPG, PNG, atau WebP. Maksimal 5MB.">
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
        </form>
      </Modal>

      {/* Loading Overlay saat mengunggah foto / menyimpan data galeri */}
      <UploadLoadingOverlay
        open={submitting}
        title="Menyimpan Foto Galeri"
        message="Mohon tunggu, berkas foto sedang diunggah ke server..."
      />

      {/* Modal Cropper Foto Galeri */}
      <ImageCropperModal
        open={cropModal.open}
        onClose={() => setCropModal((prev) => ({ ...prev, open: false }))}
        imageSrc={cropModal.src}
        onCrop={handleCropComplete}
        aspectRatio={16 / 9}
        title="Crop Foto Galeri (16:9)"
        fileName={cropModal.fileName}
      />
    </div>
  );
}
