import { useEffect, useState } from 'react';
import {
  Download,
  Edit2,
  FileArchive,
  FileSpreadsheet,
  FileText,
  FileType2,
  FolderDown,
  Loader2,
  Plus,
  RefreshCw,
  Trash2,
  Upload
} from 'lucide-react';
import { unduhanService } from '../../services/unduhanService';
import { getErrorMessage, getFileUrl } from '../../utils/helpers';
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
  Textarea,
  buttonClass
} from '../../components/admin/ui';

const KATEGORI = ['Umum', 'Formulir', 'Jadwal', 'Panduan', 'Brosur', 'Administrasi', 'Akademik'];

const emptyForm = {
  judul: '',
  deskripsi: '',
  kategori: 'Umum',
  isPublished: true
};

// Mengubah ukuran berkas menjadi satuan yang mudah dibaca
const formatUkuran = (bytes) => {
  const nilai = Number(bytes);
  if (!Number.isFinite(nilai) || nilai <= 0) return '—';
  if (nilai < 1024) return `${nilai} B`;
  if (nilai < 1024 * 1024) return `${(nilai / 1024).toFixed(0)} KB`;
  return `${(nilai / (1024 * 1024)).toFixed(1)} MB`;
};

// Memilih ikon sesuai jenis berkas
const ikonBerkas = (tipe) => {
  const ekstensi = String(tipe || '').toLowerCase();
  if (['xls', 'xlsx', 'csv'].includes(ekstensi)) return FileSpreadsheet;
  if (['zip', 'rar', '7z'].includes(ekstensi)) return FileArchive;
  if (['doc', 'docx'].includes(ekstensi)) return FileType2;
  return FileText;
};

export default function AdminUnduhan() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');

  // Memuat seluruh dokumen pusat unduhan dari API
  const fetchUnduhan = async () => {
    try {
      const data = await unduhanService.getAll();
      setItems(Array.isArray(data) ? data : []);
      setAlert({ type: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat dokumen.') });
    } finally {
      setLoading(false);
    }
  };

  // Memuat ulang data dengan indikator muat
  const refreshUnduhan = () => {
    setLoading(true);
    fetchUnduhan();
  };

  useEffect(() => {
    fetchUnduhan();
  }, []);

  // Membuka modal tambah atau edit dokumen
  const openModal = (item = null) => {
    setEditing(item);
    setForm(
      item
        ? {
            judul: item.judul || '',
            deskripsi: item.deskripsi || '',
            kategori: item.kategori || 'Umum',
            isPublished: item.isPublished !== undefined ? item.isPublished : true
          }
        : emptyForm
    );
    setFile(null);
    setAlert({ type: '', message: '' });
    setShowModal(true);
  };

  // Menangani pemilihan berkas dokumen
  const handleFileChange = (event) => {
    const selected = event.target.files?.[0];
    if (!selected) return;
    if (selected.size > 5 * 1024 * 1024) {
      setAlert({ type: 'error', message: 'Ukuran berkas maksimal 5MB.' });
      return;
    }
    setFile(selected);
  };

  // Menyimpan dokumen baru atau hasil edit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert({ type: '', message: '' });

    if (form.judul.trim().length < 3) {
      setAlert({ type: 'error', message: 'Judul minimal 3 karakter.' });
      return;
    }
    if (!editing && !file) {
      setAlert({ type: 'error', message: 'Pilih berkas dokumen yang akan diunggah.' });
      return;
    }

    try {
      setSubmitting(true);
      const payload = { ...form, berkas: file };
      if (editing) await unduhanService.update(editing.id, payload);
      else await unduhanService.create(payload);

      setShowModal(false);
      await fetchUnduhan();
      setAlert({
        type: 'success',
        message: editing ? 'Dokumen berhasil diperbarui.' : 'Dokumen berhasil ditambahkan.'
      });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan dokumen.') });
    } finally {
      setSubmitting(false);
    }
  };

  // Menghapus dokumen setelah konfirmasi
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus dokumen ini?')) return;
    try {
      await unduhanService.remove(id);
      await fetchUnduhan();
      setAlert({ type: 'success', message: 'Dokumen berhasil dihapus.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus dokumen.') });
    }
  };

  const filteredItems = items.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return [item.judul, item.deskripsi, item.kategori, item.namaFile].some((value) =>
      String(value || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <PageHeader
          title="Pusat unduhan"
        description="Kelola formulir, jadwal, panduan, dan dokumen resmi yang dapat diunduh pengunjung website."
        actions={
          <>
            <Button variant="secondary" icon={RefreshCw} onClick={refreshUnduhan}>
              Muat ulang
            </Button>
            <Button variant="primary" icon={Plus} onClick={() => openModal()}>
              Tambah dokumen
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
            placeholder="Cari judul, kategori, atau nama berkas…"
          />
          <p className="text-[11.5px] text-muted">
            <span className="font-semibold text-ink">{filteredItems.length}</span> dokumen ·{' '}
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
                <Th>Dokumen</Th>
                <Th className="hidden md:table-cell">Kategori</Th>
                <Th className="hidden lg:table-cell">Ukuran</Th>
                <Th className="hidden md:table-cell">Unduhan</Th>
                <Th>Status</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={6} icon={Loader2} title="Memuat dokumen…" />
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const Icon = ikonBerkas(item.tipeFile);

                  return (
                    <tr key={item.id} className="transition-colors hover:bg-[#faf8f3]">
                      <Td>
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-brand-soft text-brand">
                            <Icon size={17} />
                          </span>
                          <div className="min-w-0">
                            <p className="max-w-[340px] font-semibold text-ink">{item.judul}</p>
                            <p className="mt-0.5 line-clamp-1 max-w-[340px] text-[10.5px] text-muted">
                              {item.namaFile}
                            </p>
                            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-muted md:hidden">
                              <span>{item.kategori}</span>
                              <span>· {formatUkuran(item.ukuran)}</span>
                              <span>· {item.jumlahUnduhan || 0} unduhan</span>
                            </div>
                          </div>
                        </div>
                      </Td>
                      <Td className="hidden md:table-cell">
                        <Tag>{item.kategori}</Tag>
                      </Td>
                      <Td className="hidden whitespace-nowrap text-muted lg:table-cell">
                        {formatUkuran(item.ukuran)}
                      </Td>
                      <Td className="hidden whitespace-nowrap text-muted md:table-cell">
                        <span className="inline-flex items-center gap-1">
                          <Download size={11} /> {item.jumlahUnduhan || 0}
                        </span>
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
                          <a
                            href={getFileUrl(item.fileUrl)}
                            target="_blank"
                            rel="noreferrer"
                            title="Buka berkas di tab baru"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-[#efece4] hover:text-ink"
                          >
                            <Download size={14} />
                          </a>
                          <IconButton label="Edit dokumen" tone="brand" onClick={() => openModal(item)}>
                            <Edit2 size={14} />
                          </IconButton>
                          <IconButton label="Hapus dokumen" tone="danger" onClick={() => handleDelete(item.id)}>
                            <Trash2 size={14} />
                          </IconButton>
                        </div>
                      </Td>
                    </tr>
                  );
                })
              ) : (
                <EmptyRow
                  colSpan={6}
                  icon={FolderDown}
                  title="Belum ada dokumen"
                  description="Unggah formulir atau panduan pertama agar mudah diakses masyarakat."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={editing ? 'Sunting dokumen' : 'Dokumen baru'}
        description="Berkas akan langsung tersedia pada halaman pusat unduhan publik setelah diterbitkan."
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

          <Field label="Judul dokumen" required>
            <Input
              required
              minLength={3}
              value={form.judul}
              onChange={(event) => setForm({ ...form, judul: event.target.value })}
              placeholder="Contoh: Formulir pendaftaran SPMB 2027/2028"
            />
          </Field>

          <Field label="Kategori" hint="Contoh: Formulir, Jadwal, Panduan, atau Administrasi.">
            <Input
              list="kategori-unduhan"
              value={form.kategori}
              onChange={(event) => setForm({ ...form, kategori: event.target.value })}
              placeholder="Umum"
            />
            <datalist id="kategori-unduhan">
              {KATEGORI.map((kategori) => (
                <option key={kategori} value={kategori} />
              ))}
            </datalist>
          </Field>

          <Field label="Deskripsi" hint="Opsional. Jelaskan isi atau peruntukan dokumen.">
            <Textarea
              rows={3}
              value={form.deskripsi}
              onChange={(event) => setForm({ ...form, deskripsi: event.target.value })}
              placeholder="Keterangan singkat tentang dokumen ini…"
            />
          </Field>

          <Field
            label="Berkas dokumen"
            hint="PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, CSV, atau ZIP. Maksimal 5MB."
            required={!editing}
          >
            <label className={buttonClass('secondary', 'md', 'w-full cursor-pointer')}>
              <Upload size={15} />
              {file ? file.name : editing ? 'Ganti berkas (opsional)' : 'Pilih berkas dokumen'}
              <input
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.zip"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </Field>

          {editing && !file && (
            <div className="flex items-center justify-between gap-2 rounded-lg border border-line bg-[#faf8f3] px-3 py-2 text-[11px] text-muted">
              <span className="truncate">
                Berkas saat ini: <span className="font-medium text-ink/80">{editing.namaFile}</span>
              </span>
              <a
                href={getFileUrl(editing.fileUrl)}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-semibold text-brand hover:underline"
              >
                Buka
              </a>
            </div>
          )}

          <label className="flex cursor-pointer items-center gap-2 text-[12px] text-ink/85">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(event) => setForm({ ...form, isPublished: event.target.checked })}
              className="h-4 w-4 rounded border-line text-brand focus:ring-brand/25"
            />
            Terbitkan dokumen ini
          </label>
        </form>
      </Modal>
    </div>
  );
}
