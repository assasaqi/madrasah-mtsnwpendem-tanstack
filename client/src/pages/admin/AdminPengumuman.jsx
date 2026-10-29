import { useEffect, useState } from 'react';
import {
  Megaphone,
  Plus,
  Trash2,
  Edit,
  Loader2,
  Download,
  Paperclip,
  ExternalLink
} from 'lucide-react';
import { pengumumanService } from '../../services/pengumumanService';
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

export default function AdminPengumuman() {
  const [pengumumanList, setPengumumanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ judul: '', konten: '', isPublished: true });
  const [lampiran, setLampiran] = useState(null);
  const [notice, setNotice] = useState({ type: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPengumuman();
  }, []);

  // Memuat daftar pengumuman resmi dari API
  const fetchPengumuman = async () => {
    try {
      setLoading(true);
      const data = await pengumumanService.getAdminAll();
      setPengumumanList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Gagal memuat pengumuman:', error);
      setNotice({ type: 'error', message: getErrorMessage(error, 'Gagal memuat pengumuman.') });
    } finally {
      setLoading(false);
    }
  };

  // Mengosongkan formulir pengumuman
  const resetForm = () => {
    setFormData({ judul: '', konten: '', isPublished: true });
    setLampiran(null);
    setEditId(null);
  };

  // Membuka modal pengumuman baru
  const handleOpenAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  // Membuka modal edit pengumuman terpilih
  const handleOpenEditModal = (item) => {
    setEditId(item.id);
    setFormData({
      judul: item.judul || '',
      konten: item.konten || '',
      isPublished: item.isPublished !== undefined ? item.isPublished : true
    });
    setLampiran(null);
    setShowModal(true);
  };

  // Menampilkan lampiran dalam pratinjau
  const handleViewFile = (fileName, title) => {
    setPreviewFile({
      url: getFileUrl(fileName),
      title: title || 'Lampiran pengumuman',
      isPdf: String(fileName).toLowerCase().endsWith('.pdf')
    });
  };

  // Menyimpan pengumuman baru atau hasil edit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      setNotice({ type: '', message: '' });

      const payload = new FormData();
      payload.append('judul', formData.judul);
      payload.append('konten', formData.konten);
      payload.append('isPublished', formData.isPublished);
      if (lampiran instanceof File) payload.append('lampiran', lampiran);

      if (editId) await pengumumanService.update(editId, payload);
      else await pengumumanService.create(payload);

      setShowModal(false);
      resetForm();
      await fetchPengumuman();
      setNotice({
        type: 'success',
        message: editId ? 'Pengumuman berhasil diperbarui.' : 'Pengumuman berhasil diterbitkan.'
      });
    } catch (error) {
      setNotice({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan pengumuman.') });
    } finally {
      setSubmitting(false);
    }
  };

  // Menghapus pengumuman berdasarkan ID
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus pengumuman ini?')) return;
    try {
      await pengumumanService.remove(id);
      setPengumumanList((prev) => prev.filter((item) => item.id !== id));
      setNotice({ type: 'success', message: 'Pengumuman berhasil dihapus.' });
    } catch (error) {
      setNotice({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus pengumuman.') });
    }
  };

  const filteredList = pengumumanList.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return [item.judul, item.konten].some((value) => String(value || '').toLowerCase().includes(q));
  });

  const jumlahAktif = pengumumanList.filter((item) => item.isPublished).length;

  return (
    <div className="space-y-6">
      <PageHeader
 title="Pengumuman resmi"
        description="Papan pengumuman singkat untuk siswa, orang tua, dan calon pendaftar. Tampil pada halaman utama website."
        actions={
          <Button variant="primary" icon={Plus} onClick={handleOpenAddModal}>
            Buat pengumuman
          </Button>
        }
      />

      {notice.message && (
        <Alert tone={notice.type} onClose={() => setNotice({ type: '', message: '' })}>
          {notice.message}
        </Alert>
      )}

      <Panel>
        <Toolbar>
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari judul atau isi pengumuman…"
          />
          <p className="text-[11.5px] text-muted">
            <span className="font-semibold text-ink">{filteredList.length}</span> pengumuman ·{' '}
            <span className="font-semibold text-brand">{jumlahAktif}</span> aktif
          </p>
        </Toolbar>

        <div className="admin-scroll overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <Th>Pengumuman</Th>
                <Th className="hidden md:table-cell">Tanggal</Th>
                <Th>Status</Th>
                <Th className="hidden md:table-cell">Lampiran</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={5} icon={Loader2} title="Memuat pengumuman…" />
              ) : filteredList.length > 0 ? (
                filteredList.map((item) => {
                  const fileName = item.fileLampiran || item.lampiran || item.file || item.fileUrl;
                  const fileFullUrl = fileName ? getFileUrl(fileName) : null;

                  return (
                    <tr key={item.id} className="transition-colors hover:bg-[#faf8f3]">
                      <Td>
                        <p className="max-w-[420px] font-semibold text-ink">{item.judul}</p>
                        <p className="mt-0.5 line-clamp-2 max-w-[420px] text-[10.5px] leading-relaxed text-muted">
                          {item.konten}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-muted md:hidden">
                          <span className="whitespace-nowrap">
                            {formatDate(item.createdAt, { month: 'short' })}
                          </span>
                          {fileName && (
                            <button
                              type="button"
                              onClick={() => handleViewFile(fileName, item.judul)}
                              className="inline-flex items-center gap-1 font-semibold text-brand"
                            >
                              <Paperclip size={10} />
                              {String(fileName).toLowerCase().endsWith('.pdf') ? 'PDF' : 'Gambar'}
                            </button>
                          )}
                        </div>
                      </Td>
                      <Td className="hidden whitespace-nowrap text-muted md:table-cell">{formatDate(item.createdAt)}</Td>
                      <Td>
                        {item.isPublished ? (
                          <StatusDot tone="brand">Aktif</StatusDot>
                        ) : (
                          <StatusDot tone="stone">Draf</StatusDot>
                        )}
                      </Td>
                      <Td className="hidden md:table-cell">
                        {fileName ? (
                          <div className="flex items-center gap-2">
                            <Tag>
                              <Paperclip size={10} className="mr-1" />
                              {String(fileName).toLowerCase().endsWith('.pdf') ? 'PDF' : 'Gambar'}
                            </Tag>
                            <button
                              type="button"
                              onClick={() => handleViewFile(fileName, item.judul)}
                              className="text-[11.5px] font-semibold text-brand hover:underline"
                            >
                              Lihat
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11.5px] text-[#b3ac9d]">—</span>
                        )}
                      </Td>
                      <Td align="right">
                        <div className="flex items-center justify-end gap-0.5">
                          {fileFullUrl && (
                            <a
                              href={fileFullUrl}
                              target="_blank"
                              rel="noreferrer"
                              title="Buka lampiran di tab baru"
                              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-[#efece4] hover:text-ink"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                          <IconButton label="Edit pengumuman" tone="brand" onClick={() => handleOpenEditModal(item)}>
                            <Edit size={14} />
                          </IconButton>
                          <IconButton label="Hapus pengumuman" tone="danger" onClick={() => handleDelete(item.id)}>
                            <Trash2 size={14} />
                          </IconButton>
                        </div>
                      </Td>
                    </tr>
                  );
                })
              ) : (
                <EmptyRow
                  colSpan={5}
                  icon={Megaphone}
                  title="Belum ada pengumuman"
                  description="Buat pengumuman pertama agar informasi penting cepat tersampaikan."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={editId ? 'Sunting pengumuman' : 'Pengumuman baru'}
        description="Tulis ringkas dan jelas. Gunakan lampiran bila perlu dokumen resmi."
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={submitting}>
              {submitting ? 'Menyimpan…' : editId ? 'Simpan perubahan' : 'Terbitkan'}
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Judul pengumuman" required>
            <Input
              required
              value={formData.judul}
              onChange={(event) => setFormData({ ...formData, judul: event.target.value })}
              placeholder="Contoh: Pembukaan SPMB tahun ajaran 2027/2028"
            />
          </Field>

          <Field label="Isi pengumuman" required>
            <Textarea
              rows={5}
              required
              value={formData.konten}
              onChange={(event) => setFormData({ ...formData, konten: event.target.value })}
              placeholder="Tuliskan rincian pengumuman…"
            />
          </Field>

          <Field label="Lampiran" hint="Opsional. Format PDF atau gambar, maksimal 5MB.">
            <label className={buttonClass('secondary', 'md', 'w-full cursor-pointer')}>
              <Paperclip size={15} />
              {lampiran ? lampiran.name : 'Pilih berkas lampiran'}
              <input
                type="file"
                onChange={(event) => setLampiran(event.target.files[0])}
                className="hidden"
              />
            </label>
          </Field>

          <label className="flex cursor-pointer items-center gap-2 text-[12px] text-ink/85">
            <input
              type="checkbox"
              checked={formData.isPublished}
              onChange={(event) => setFormData({ ...formData, isPublished: event.target.checked })}
              className="h-4 w-4 rounded border-line text-brand focus:ring-brand/25"
            />
            Terbitkan pengumuman ini
          </label>
        </form>
      </Modal>

      <Modal
        open={Boolean(previewFile)}
        onClose={() => setPreviewFile(null)}
        title={previewFile?.title || 'Lampiran pengumuman'}
        description="Pratinjau dokumen lampiran."
        size="xl"
        footer={
          previewFile && (
            <a
              href={previewFile.url}
              download
              target="_blank"
              rel="noreferrer"
              className={buttonClass('secondary')}
            >
              <Download size={15} /> Unduh berkas
            </a>
          )
        }
      >
        {previewFile && (
          <div className="flex min-h-[50vh] items-center justify-center rounded-lg bg-[#f3f0e9] p-2">
            {previewFile.isPdf ? (
              <iframe
                src={previewFile.url}
                title="Pratinjau PDF"
                className="h-[60vh] w-full rounded-md border-0 bg-white"
              />
            ) : (
              <img
                src={previewFile.url}
                alt={previewFile.title}
                className="max-h-[60vh] max-w-full rounded-md object-contain"
              />
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
