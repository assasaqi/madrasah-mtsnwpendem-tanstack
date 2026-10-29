import { useEffect, useState } from 'react';
import {
  Edit2,
  HelpCircle,
  Loader2,
  Plus,
  RefreshCw,
  Trash2
} from 'lucide-react';
import { faqService } from '../../services/faqService';
import { getErrorMessage, stripHtml } from '../../utils/helpers';
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
  Textarea
} from '../../components/admin/ui';

const KATEGORI = ['Umum', 'SPMB', 'Akademik', 'Administrasi', 'Kegiatan', 'Layanan'];

const emptyForm = {
  pertanyaan: '',
  jawaban: '',
  kategori: 'Umum',
  urutan: 0,
  isPublished: true
};

export default function AdminFaq() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');

  // Memuat seluruh pertanyaan umum dari API
  const fetchFaq = async () => {
    try {
      const data = await faqService.getAll();
      setItems(Array.isArray(data) ? data : []);
      setAlert({ type: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat FAQ.') });
    } finally {
      setLoading(false);
    }
  };

  // Memuat ulang data dengan indikator muat
  const refreshFaq = () => {
    setLoading(true);
    fetchFaq();
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  // Membuka modal tambah atau edit FAQ
  const openModal = (item = null) => {
    setEditing(item);
    setForm(
      item
        ? {
            pertanyaan: item.pertanyaan || '',
            jawaban: item.jawaban || '',
            kategori: item.kategori || 'Umum',
            urutan: item.urutan || 0,
            isPublished: item.isPublished !== undefined ? item.isPublished : true
          }
        : emptyForm
    );
    setAlert({ type: '', message: '' });
    setShowModal(true);
  };

  // Menyimpan FAQ baru atau hasil edit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert({ type: '', message: '' });

    if (form.pertanyaan.trim().length < 5) {
      setAlert({ type: 'error', message: 'Pertanyaan minimal 5 karakter.' });
      return;
    }
    if (form.jawaban.trim().length < 10) {
      setAlert({ type: 'error', message: 'Jawaban minimal 10 karakter.' });
      return;
    }

    try {
      setSubmitting(true);
      const payload = { ...form, urutan: Number(form.urutan) || 0 };
      if (editing) await faqService.update(editing.id, payload);
      else await faqService.create(payload);

      setShowModal(false);
      await fetchFaq();
      setAlert({
        type: 'success',
        message: editing ? 'FAQ berhasil diperbarui.' : 'FAQ berhasil ditambahkan.'
      });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan FAQ.') });
    } finally {
      setSubmitting(false);
    }
  };

  // Menghapus FAQ setelah konfirmasi
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus pertanyaan ini?')) return;
    try {
      await faqService.remove(id);
      await fetchFaq();
      setAlert({ type: 'success', message: 'FAQ berhasil dihapus.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus FAQ.') });
    }
  };

  const filteredItems = items.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return [item.pertanyaan, item.jawaban, item.kategori].some((value) =>
      String(value || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pertanyaan umum"
        description="Kelola FAQ yang tampil pada halaman bantuan publik. Urutan kecil tampil lebih dahulu."
        actions={
          <>
            <Button variant="secondary" icon={RefreshCw} onClick={refreshFaq}>
              Muat ulang
            </Button>
            <Button variant="primary" icon={Plus} onClick={() => openModal()}>
              Tambah FAQ
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
            placeholder="Cari pertanyaan atau jawaban…"
          />
          <p className="text-[11.5px] text-muted">
            <span className="font-semibold text-ink">{filteredItems.length}</span> pertanyaan ·{' '}
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
                <Th>Pertanyaan</Th>
                <Th className="hidden md:table-cell">Kategori</Th>
                <Th className="hidden md:table-cell">Urutan</Th>
                <Th>Status</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={5} icon={Loader2} title="Memuat FAQ…" />
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-[#faf8f3]">
                    <Td>
                      <p className="max-w-[420px] font-semibold text-ink">{item.pertanyaan}</p>
                      <p className="mt-0.5 line-clamp-2 max-w-[420px] text-[10.5px] leading-relaxed text-muted">
                        {stripHtml(item.jawaban)}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5 text-[10px] text-muted md:hidden">
                        <span>{item.kategori}</span>
                        <span>· urutan {item.urutan}</span>
                      </div>
                    </Td>
                    <Td className="hidden md:table-cell">
                      <Tag>{item.kategori}</Tag>
                    </Td>
                    <Td className="hidden whitespace-nowrap text-muted md:table-cell">{item.urutan}</Td>
                    <Td>
                      {item.isPublished ? (
                        <StatusDot tone="brand">Terbit</StatusDot>
                      ) : (
                        <StatusDot tone="stone">Draf</StatusDot>
                      )}
                    </Td>
                    <Td align="right">
                      <div className="flex items-center justify-end gap-0.5">
                        <IconButton label="Edit FAQ" tone="brand" onClick={() => openModal(item)}>
                          <Edit2 size={14} />
                        </IconButton>
                        <IconButton label="Hapus FAQ" tone="danger" onClick={() => handleDelete(item.id)}>
                          <Trash2 size={14} />
                        </IconButton>
                      </div>
                    </Td>
                  </tr>
                ))
              ) : (
                <EmptyRow
                  colSpan={5}
                  icon={HelpCircle}
                  title="Belum ada FAQ"
                  description="Kumpulkan pertanyaan yang sering masuk agar pengunjung mendapat jawaban cepat."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={editing ? 'Sunting FAQ' : 'FAQ baru'}
        description="Gunakan bahasa sederhana dan jawaban singkat agar mudah dipahami orang tua."
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

          <Field label="Pertanyaan" required>
            <Input
              required
              minLength={5}
              value={form.pertanyaan}
              onChange={(event) => setForm({ ...form, pertanyaan: event.target.value })}
              placeholder="Contoh: Bagaimana cara mendaftar SPMB?"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Kategori" hint="Contoh: SPMB, Akademik, Administrasi.">
              <Input
                list="kategori-faq"
                value={form.kategori}
                onChange={(event) => setForm({ ...form, kategori: event.target.value })}
                placeholder="Umum"
              />
              <datalist id="kategori-faq">
                {KATEGORI.map((kategori) => (
                  <option key={kategori} value={kategori} />
                ))}
              </datalist>
            </Field>
            <Field label="Urutan tampil" hint="Angka kecil tampil lebih dahulu.">
              <Input
                type="number"
                min={0}
                value={form.urutan}
                onChange={(event) => setForm({ ...form, urutan: event.target.value })}
              />
            </Field>
          </div>

          <Field label="Jawaban" required>
            <Textarea
              rows={5}
              required
              minLength={10}
              value={form.jawaban}
              onChange={(event) => setForm({ ...form, jawaban: event.target.value })}
              placeholder="Tuliskan jawaban yang jelas dan ringkas…"
            />
          </Field>

          <label className="flex cursor-pointer items-center gap-2 text-[12px] text-ink/85">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(event) => setForm({ ...form, isPublished: event.target.checked })}
              className="h-4 w-4 rounded border-line text-brand focus:ring-brand/25"
            />
            Terbitkan FAQ ini
          </label>
        </form>
      </Modal>
    </div>
  );
}
