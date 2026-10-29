import { useEffect, useState } from 'react';
import {
  CalendarDays,
  Clock,
  Edit2,
  Loader2,
  MapPin,
  Plus,
  RefreshCw,
  Trash2
} from 'lucide-react';
import { agendaService } from '../../services/agendaService';
import { formatDate, getErrorMessage } from '../../utils/helpers';
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
  Button,
  IconButton,
  Alert,
  Modal,
  Field,
  Input,
  Textarea
} from '../../components/admin/ui';

const emptyForm = {
  judul: '',
  deskripsi: '',
  lokasi: '',
  mulai: '',
  selesai: '',
  isPublished: true
};

// Mengubah tanggal ISO menjadi format yang diminta input datetime-local
const toLocalInput = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const pad = (number) => String(number).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

// Menampilkan jam lokal singkat
const formatJam = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
};

// Menentukan apakah agenda sudah selesai berdasarkan waktu selesai atau mulai
const sudahLewat = (item) => new Date(item.selesai || item.mulai).getTime() < Date.now();

export default function AdminAgenda() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');

  // Memuat seluruh agenda dari API
  const fetchAgenda = async () => {
    try {
      const data = await agendaService.getAll();
      setItems(Array.isArray(data) ? data : []);
      setAlert({ type: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat agenda.') });
    } finally {
      setLoading(false);
    }
  };

  // Memuat ulang data dengan indikator muat
  const refreshAgenda = () => {
    setLoading(true);
    fetchAgenda();
  };

  useEffect(() => {
    fetchAgenda();
  }, []);

  // Membuka modal tambah atau edit agenda
  const openModal = (item = null) => {
    setEditing(item);
    setForm(
      item
        ? {
            judul: item.judul || '',
            deskripsi: item.deskripsi || '',
            lokasi: item.lokasi || '',
            mulai: toLocalInput(item.mulai),
            selesai: toLocalInput(item.selesai),
            isPublished: item.isPublished !== undefined ? item.isPublished : true
          }
        : emptyForm
    );
    setAlert({ type: '', message: '' });
    setShowModal(true);
  };

  // Menyimpan agenda baru atau hasil edit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert({ type: '', message: '' });

    if (form.judul.trim().length < 3) {
      setAlert({ type: 'error', message: 'Judul minimal 3 karakter.' });
      return;
    }
    if (form.deskripsi.trim().length < 10) {
      setAlert({ type: 'error', message: 'Deskripsi minimal 10 karakter.' });
      return;
    }
    if (!form.mulai) {
      setAlert({ type: 'error', message: 'Waktu mulai wajib diisi.' });
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        judul: form.judul,
        deskripsi: form.deskripsi,
        lokasi: form.lokasi,
        mulai: new Date(form.mulai).toISOString(),
        selesai: form.selesai ? new Date(form.selesai).toISOString() : '',
        isPublished: form.isPublished
      };

      if (editing) await agendaService.update(editing.id, payload);
      else await agendaService.create(payload);

      setShowModal(false);
      await fetchAgenda();
      setAlert({
        type: 'success',
        message: editing ? 'Agenda berhasil diperbarui.' : 'Agenda berhasil ditambahkan.'
      });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan agenda.') });
    } finally {
      setSubmitting(false);
    }
  };

  // Menghapus agenda setelah konfirmasi
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus agenda ini?')) return;
    try {
      await agendaService.remove(id);
      await fetchAgenda();
      setAlert({ type: 'success', message: 'Agenda berhasil dihapus.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus agenda.') });
    }
  };

  const filteredItems = items.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return [item.judul, item.deskripsi, item.lokasi].some((value) =>
      String(value || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Agenda kegiatan"
        description="Jadwal kegiatan madrasah yang tampil pada halaman agenda publik. Pengunjung dapat menyimpan agenda ke kalender pribadi."
        actions={
          <>
            <Button variant="secondary" icon={RefreshCw} onClick={refreshAgenda}>
              Muat ulang
            </Button>
            <Button variant="primary" icon={Plus} onClick={() => openModal()}>
              Tambah agenda
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
            placeholder="Cari judul, deskripsi, atau lokasi…"
          />
          <p className="text-[11.5px] text-muted">
            <span className="font-semibold text-ink">{filteredItems.length}</span> agenda ·{' '}
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
                <Th>Agenda</Th>
                <Th className="hidden md:table-cell">Jadwal</Th>
                <Th className="hidden lg:table-cell">Lokasi</Th>
                <Th>Status</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={5} icon={Loader2} title="Memuat agenda…" />
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const lewat = sudahLewat(item);

                  return (
                    <tr key={item.id} className="transition-colors hover:bg-[#faf8f3]">
                      <Td>
                        <p className="max-w-[360px] font-semibold text-ink">{item.judul}</p>
                        <p className="mt-0.5 line-clamp-2 max-w-[360px] text-[10.5px] leading-relaxed text-muted">
                          {item.deskripsi}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-muted md:hidden">
                          <span className="flex items-center gap-1">
                            <CalendarDays size={10} />
                            {formatDate(item.mulai, { month: 'short' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={10} />
                            {formatJam(item.mulai)}
                          </span>
                        </div>
                      </Td>
                      <Td className="hidden whitespace-nowrap text-muted md:table-cell">
                        <p>{formatDate(item.mulai)}</p>
                        <p className="mt-0.5 text-[10.5px] text-muted">
                          {formatJam(item.mulai)}
                          {item.selesai ? `–${formatJam(item.selesai)}` : ''}
                        </p>
                      </Td>
                      <Td className="hidden max-w-[220px] lg:table-cell">
                        {item.lokasi ? (
                          <span className="flex items-start gap-1 text-muted">
                            <MapPin size={11} className="mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{item.lokasi}</span>
                          </span>
                        ) : (
                          <span className="text-[11.5px] text-[#b3ac9d]">—</span>
                        )}
                      </Td>
                      <Td>
                        {!item.isPublished ? (
                          <StatusDot tone="stone">Draf</StatusDot>
                        ) : lewat ? (
                          <StatusDot tone="stone">Selesai</StatusDot>
                        ) : (
                          <StatusDot tone="brand">Akan datang</StatusDot>
                        )}
                      </Td>
                      <Td align="right">
                        <div className="flex items-center justify-end gap-0.5">
                          <IconButton label="Edit agenda" tone="brand" onClick={() => openModal(item)}>
                            <Edit2 size={14} />
                          </IconButton>
                          <IconButton label="Hapus agenda" tone="danger" onClick={() => handleDelete(item.id)}>
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
                  icon={CalendarDays}
                  title="Belum ada agenda"
                  description="Tambahkan jadwal kegiatan pertama agar orang tua dan siswa dapat merencanakan kehadiran."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={editing ? 'Sunting agenda' : 'Agenda baru'}
        description="Isi waktu mulai dan lokasi agar pengunjung dapat menyimpan agenda ke kalender mereka."
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

          <Field label="Judul agenda" required>
            <Input
              required
              minLength={3}
              value={form.judul}
              onChange={(event) => setForm({ ...form, judul: event.target.value })}
              placeholder="Contoh: Rapat orang tua siswa kelas IX"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Mulai" required>
              <Input
                type="datetime-local"
                required
                value={form.mulai}
                onChange={(event) => setForm({ ...form, mulai: event.target.value })}
              />
            </Field>
            <Field label="Selesai" hint="Opsional.">
              <Input
                type="datetime-local"
                value={form.selesai}
                onChange={(event) => setForm({ ...form, selesai: event.target.value })}
              />
            </Field>
          </div>

          <Field label="Lokasi" hint="Opsional. Contoh: Aula madrasah atau tautan ruang virtual.">
            <Input
              value={form.lokasi}
              onChange={(event) => setForm({ ...form, lokasi: event.target.value })}
              placeholder="Aula madrasah"
            />
          </Field>

          <Field label="Deskripsi" required>
            <Textarea
              rows={4}
              required
              minLength={10}
              value={form.deskripsi}
              onChange={(event) => setForm({ ...form, deskripsi: event.target.value })}
              placeholder="Jelaskan tujuan, peserta, dan hal yang perlu dibawa…"
            />
          </Field>

          <label className="flex cursor-pointer items-center gap-2 text-[12px] text-ink/85">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(event) => setForm({ ...form, isPublished: event.target.checked })}
              className="h-4 w-4 rounded border-line text-brand focus:ring-brand/25"
            />
            Terbitkan agenda ini
          </label>
        </form>
      </Modal>
    </div>
  );
}
