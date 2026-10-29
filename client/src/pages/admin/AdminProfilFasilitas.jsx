import { useEffect, useState } from 'react';
import {
  Building2,
  Plus,
  Edit2,
  Trash2,
  RefreshCw,
  Upload
} from 'lucide-react';
import {
  getFasilitas,
  createFasilitas,
  updateFasilitas,
  deleteFasilitas
} from '../../services/profileService';
import { getErrorMessage, getFileUrl } from '../../utils/helpers';
import { FASILITAS_IKON, getFasilitasIcon } from '../../utils/fasilitasIcons';
import {
  PageHeader,
  Panel,
  PanelHeader,
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
  Textarea,
  Select,
  buttonClass
} from '../../components/admin/ui';

const emptyForm = { nama: '', deskripsi: '', ikon: 'building', urutan: 0 };

export default function AdminProfilFasilitas() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });

  useEffect(() => {
    fetchData();
  }, []);

  // Memuat daftar fasilitas madrasah dari API
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getFasilitas();
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat data fasilitas.') });
    } finally {
      setLoading(false);
    }
  };

  // Membuka modal tambah atau edit fasilitas
  const openModal = (item = null) => {
    setAlert({ type: '', message: '' });
    setEditing(item);
    setFile(null);
    setForm(
      item
        ? {
            nama: item.nama || '',
            deskripsi: item.deskripsi || '',
            ikon: item.ikon || 'building',
            urutan: item.urutan ?? 0
          }
        : emptyForm
    );
    setPreview(item?.gambar ? getFileUrl(item.gambar) : '');
    setShowModal(true);
  };

  // Menutup modal dan mengosongkan formulir
  const closeModal = () => {
    setShowModal(false);
    setEditing(null);
    setFile(null);
    setPreview('');
    setForm(emptyForm);
  };

  // Memproses perubahan bidang teks formulir
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Memproses pemilihan gambar fasilitas
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  // Menyimpan data fasilitas baru atau perubahan
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      const payload = new FormData();
      payload.append('nama', form.nama);
      payload.append('deskripsi', form.deskripsi || '');
      payload.append('ikon', form.ikon || 'building');
      payload.append('urutan', form.urutan || 0);
      if (file instanceof File) payload.append('gambar', file);

      if (editing) await updateFasilitas(editing.id, payload);
      else await createFasilitas(payload);

      closeModal();
      await fetchData();
      setAlert({ type: 'success', message: editing ? 'Data fasilitas diperbarui.' : 'Fasilitas baru ditambahkan.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan data fasilitas.') });
    } finally {
      setSaving(false);
    }
  };

  // Menghapus fasilitas berdasarkan ID
  const handleDelete = async (item) => {
    if (!window.confirm(`Hapus fasilitas "${item.nama}"?`)) return;

    try {
      await deleteFasilitas(item.id);
      await fetchData();
      setAlert({ type: 'success', message: 'Fasilitas dihapus.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus fasilitas.') });
    }
  };

  const jumlahBergambar = items.filter((item) => Boolean(item.gambar)).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Fasilitas madrasah"
        description="Kelola sarana dan prasarana yang tampil pada tab Fasilitas di halaman profil publik."
        actions={
          <>
            <Button variant="secondary" icon={RefreshCw} onClick={fetchData}>
              Muat ulang
            </Button>
            <Button variant="primary" icon={Plus} onClick={() => openModal()}>
              Tambah fasilitas
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
        <PanelHeader
          title="Daftar fasilitas"
          description="Urutan angka kecil tampil lebih dulu pada halaman publik."
          actions={
            <div className="flex items-center gap-2">
              <Tag>{items.length} fasilitas</Tag>
              <Tag>{jumlahBergambar} bergambar</Tag>
            </div>
          }
        />

        <div className="admin-scroll overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <Th>Visual</Th>
                <Th>Nama fasilitas</Th>
                <Th className="hidden md:table-cell">Deskripsi</Th>
                <Th className="hidden lg:table-cell">Ikon</Th>
                <Th align="center" className="hidden md:table-cell">Urutan</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={6} icon={Building2} title="Memuat data fasilitas…" />
              ) : items.length > 0 ? (
                items.map((item) => {
                  const Icon = getFasilitasIcon(item.ikon);
                  const ikonLabel =
                    FASILITAS_IKON.find((opsi) => opsi.value === item.ikon)?.label || 'Gedung';

                  return (
                    <tr key={item.id} className="transition-colors hover:bg-[#faf8f3]">
                      <Td>
                        <div className="flex h-11 w-14 items-center justify-center overflow-hidden rounded-md border border-line bg-[#f3f0e9] text-[#a9a396] sm:h-12 sm:w-16">
                          {item.gambar ? (
                            <img
                              src={getFileUrl(item.gambar)}
                              alt={item.nama}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <Icon size={18} />
                          )}
                        </div>
                      </Td>
                      <Td>
                        <p className="font-semibold text-ink">{item.nama}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-[10px] text-muted md:hidden">
                          <Icon size={11} className="shrink-0 text-brand" />
                          <span className="truncate">{ikonLabel}</span>
                          <span className="shrink-0">· {item.urutan ?? 0}</span>
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-[10.5px] leading-relaxed text-muted md:hidden">
                          {item.deskripsi || 'Belum ada deskripsi.'}
                        </p>
                      </Td>
                      <Td className="hidden md:table-cell">
                        <p className="line-clamp-2 max-w-[360px] text-[11.5px] leading-relaxed text-muted">
                          {item.deskripsi || 'Belum ada deskripsi.'}
                        </p>
                      </Td>
                      <Td className="hidden lg:table-cell">
                        <span className="inline-flex items-center gap-1.5 text-[11.5px] text-muted">
                          <Icon size={14} className="text-brand" />
                          {ikonLabel}
                        </span>
                      </Td>
                      <Td align="center" className="hidden tabular text-muted md:table-cell">
                        {item.urutan ?? 0}
                      </Td>
                      <Td align="right">
                        <div className="flex items-center justify-end gap-0.5">
                          <IconButton label="Edit fasilitas" tone="brand" onClick={() => openModal(item)}>
                            <Edit2 size={14} />
                          </IconButton>
                          <IconButton label="Hapus fasilitas" tone="danger" onClick={() => handleDelete(item)}>
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
                  icon={Building2}
                  title="Belum ada fasilitas"
                  description="Tambahkan sarana prasarana agar calon siswa tahu apa yang tersedia."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={showModal}
        onClose={closeModal}
        title={editing ? 'Sunting fasilitas' : 'Tambah fasilitas'}
        description="Gunakan nama yang jelas dan deskripsi singkat tentang kegunaan ruang."
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={closeModal}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={saving}>
              {saving ? 'Menyimpan…' : 'Simpan'}
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {alert.type === 'error' && alert.message && <Alert tone="error">{alert.message}</Alert>}

          <Field label="Nama fasilitas" required>
            <Input
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={120}
              placeholder="Contoh: Laboratorium komputer"
            />
          </Field>

          <Field label="Deskripsi" hint="Opsional, satu atau dua kalimat.">
            <Textarea
              name="deskripsi"
              rows={3}
              value={form.deskripsi}
              onChange={handleChange}
              maxLength={1000}
              placeholder="Jelaskan fasilitas ini secara singkat."
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-[1fr_120px]">
            <Field label="Ikon">
              <Select name="ikon" value={form.ikon} onChange={handleChange}>
                {FASILITAS_IKON.map((opsi) => (
                  <option key={opsi.value} value={opsi.value}>
                    {opsi.label}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Urutan" hint="Angka kecil lebih dulu.">
              <Input
                type="number"
                name="urutan"
                value={form.urutan}
                onChange={handleChange}
                min={0}
                max={999}
                className="tabular"
              />
            </Field>
          </div>

          <Field label="Gambar" hint="Opsional. Rasio lanskap, maksimal 5MB.">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-[#f3f0e9] text-[#c2bcae]">
                {preview ? (
                  <img src={preview} alt="Pratinjau" className="h-full w-full object-cover" />
                ) : (
                  <Building2 size={20} />
                )}
              </div>
              <label className={buttonClass('secondary', 'md', 'cursor-pointer')}>
                <Upload size={14} />
                {file ? file.name : 'Pilih gambar'}
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          </Field>
        </form>
      </Modal>
    </div>
  );
}
