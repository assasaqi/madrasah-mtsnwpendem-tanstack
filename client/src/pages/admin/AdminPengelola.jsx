import { useContext, useEffect, useMemo, useState } from 'react';
import { Plus, ShieldCheck, Trash2, UserCheck, UserX, ArrowLeftRight } from 'lucide-react';
import { AuthContext } from '../../context/authContextObject';
import {
  getStaffUsers,
  createStaffUser,
  updateStaffUser,
  deleteStaffUser
} from '../../services/profileService';
import { formatDate, getErrorMessage } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  StatStrip,
  Stat,
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
  Loader
} from '../../components/admin/ui';

const emptyForm = {
  nama: '',
  email: '',
  password: '',
  role: 'OPERATOR'
};

export default function AdminPengelola() {
  const { user: currentUser } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const loadUsers = async () => {
    try {
      const data = await getStaffUsers();
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat daftar pengelola.') });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    getStaffUsers()
      .then((data) => {
        if (!ignore) setItems(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        if (!ignore) setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat daftar pengelola.') });
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  const stats = useMemo(() => {
    const aktif = items.filter((u) => u.isActive !== false).length;
    const adminUtama = items.filter((u) => u.role === 'ADMIN').length;
    const operator = items.filter((u) => u.role === 'OPERATOR').length;
    return { total: items.length, aktif, adminUtama, operator };
  }, [items]);

  const handleOpenModal = () => {
    setForm(emptyForm);
    setAlert({ type: '', message: '' });
    setShowModal(true);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await createStaffUser({
        nama: form.nama.trim(),
        email: form.email.trim(),
        password: form.password,
        role: form.role
      });
      setShowModal(false);
      setForm(emptyForm);
      await loadUsers();
      setAlert({ type: 'success', message: 'Akun pengelola baru berhasil ditambahkan.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menambahkan pengelola.') });
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (item) => {
    const nextActive = item.isActive === false;
    const label = nextActive ? 'Aktifkan' : 'Nonaktifkan';
    if (!window.confirm(`${label} akses akun "${item.nama || item.email}"?`)) return;

    try {
      setBusyId(item.id);
      await updateStaffUser(item.id, { isActive: nextActive });
      await loadUsers();
      setAlert({
        type: 'success',
        message: nextActive ? 'Akun pengelola diaktifkan kembali.' : 'Akun pengelola dinonaktifkan.'
      });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memperbarui status akun.') });
    } finally {
      setBusyId('');
    }
  };

  const handleToggleRole = async (item) => {
    const nextRole = item.role === 'ADMIN' ? 'OPERATOR' : 'ADMIN';
    const nextLabel = nextRole === 'ADMIN' ? 'Admin Utama' : 'Operator';
    if (!window.confirm(`Ubah peran "${item.nama || item.email}" menjadi ${nextLabel}?`)) return;

    try {
      setBusyId(item.id);
      await updateStaffUser(item.id, { role: nextRole });
      await loadUsers();
      setAlert({ type: 'success', message: `Peran pengelola diubah menjadi ${nextLabel}.` });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal mengubah peran pengelola.') });
    } finally {
      setBusyId('');
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Hapus permanen akun pengelola "${item.nama || item.email}"?`)) return;

    try {
      setBusyId(item.id);
      await deleteStaffUser(item.id);
      await loadUsers();
      setAlert({ type: 'success', message: 'Akun pengelola berhasil dihapus.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus akun pengelola.') });
    } finally {
      setBusyId('');
    }
  };

  if (loading) return <Loader label="Memuat daftar pengelola…" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Kelola Pengelola"
        description="Atur akun Admin Utama dan Operator madrasah. Operator hanya dapat mengelola konten berita, informasi, dan verifikasi SPMB."
        actions={
          <Button variant="primary" icon={Plus} onClick={handleOpenModal}>
            Tambah pengelola
          </Button>
        }
      />

      {alert.message && (
        <Alert tone={alert.type} onClose={() => setAlert({ type: '', message: '' })}>
          {alert.message}
        </Alert>
      )}

      <StatStrip>
        <Stat label="Total pengelola" value={stats.total} hint="akun terdaftar" />
        <Stat label="Akun aktif" value={stats.aktif} hint="dapat masuk" tone="brand" />
        <Stat label="Admin utama" value={stats.adminUtama} hint="akses penuh" />
        <Stat label="Operator" value={stats.operator} hint="konten & SPMB" />
      </StatStrip>

      <Panel>
        <Table>
          <thead>
            <tr>
              <Th>Pengelola</Th>
              <Th>Peran</Th>
              <Th>Status</Th>
              <Th>Terdaftar</Th>
              <Th className="text-right">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <EmptyRow
                colSpan={5}
                icon={ShieldCheck}
                title="Belum ada data pengelola"
                hint="Tambahkan akun operator atau admin baru melalui tombol Tambah pengelola."
              />
            ) : (
              items.map((item) => {
                const isSelf = item.id === currentUser?.id;
                const isActive = item.isActive !== false;
                const isBusy = busyId === item.id;

                return (
                  <tr key={item.id} className="hover:bg-canvas/50">
                    <Td>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-ink">
                          {item.nama || item.email.split('@')[0]}
                        </span>
                        {isSelf && <Tag>Akun Anda</Tag>}
                      </div>
                      <p className="mt-0.5 text-[11px] text-muted">{item.email}</p>
                    </Td>
                    <Td>
                      <Tag className={item.role === 'ADMIN' ? 'border-brand/30 bg-brand-soft text-brand' : ''}>
                        {item.role === 'ADMIN' ? 'Admin Utama' : 'Operator'}
                      </Tag>
                    </Td>
                    <Td>
                      <StatusDot tone={isActive ? 'brand' : 'rose'}>
                        {isActive ? 'Aktif' : 'Nonaktif'}
                      </StatusDot>
                    </Td>
                    <Td className="text-muted">{formatDate(item.createdAt)}</Td>
                    <Td>
                      <div className="flex items-center justify-end gap-1">
                        <IconButton
                          label={item.role === 'ADMIN' ? 'Ubah menjadi Operator' : 'Jadikan Admin Utama'}
                          onClick={() => handleToggleRole(item)}
                          disabled={isSelf || isBusy}
                        >
                          <ArrowLeftRight size={14} />
                        </IconButton>
                        <IconButton
                          label={isActive ? 'Nonaktifkan akun' : 'Aktifkan akun'}
                          tone={isActive ? 'amber' : 'brand'}
                          onClick={() => handleToggleActive(item)}
                          disabled={isSelf || isBusy}
                        >
                          {isActive ? <UserX size={14} /> : <UserCheck size={14} />}
                        </IconButton>
                        <IconButton
                          label="Hapus pengelola"
                          tone="danger"
                          onClick={() => handleDelete(item)}
                          disabled={isSelf || isBusy}
                        >
                          <Trash2 size={14} />
                        </IconButton>
                      </div>
                    </Td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </Panel>

      <Modal
        open={showModal}
        onClose={() => !saving && setShowModal(false)}
        title="Tambah pengelola"
        description="Buat akun pengelola baru. Akun langsung aktif tanpa perlu verifikasi email ulang."
        size="sm"
        footer={
          <>
            <Button variant="secondary" onClick={() => setShowModal(false)} disabled={saving}>
              Batal
            </Button>
            <Button type="submit" form="form-tambah-pengelola" variant="primary" disabled={saving}>
              {saving ? 'Menyimpan…' : 'Simpan pengelola'}
            </Button>
          </>
        }
      >
        <form id="form-tambah-pengelola" onSubmit={handleCreate} className="space-y-4">
          <Field label="Nama lengkap" required>
            <Input
              required
              minLength={2}
              maxLength={100}
              value={form.nama}
              onChange={(e) => setForm((prev) => ({ ...prev, nama: e.target.value }))}
              placeholder="Contoh: Ahmad Fauzi"
            />
          </Field>

          <Field label="Alamat email" required>
            <Input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="nama@email.com"
            />
          </Field>

          <Field label="Kata sandi awal" hint="Minimal 6 karakter." required>
            <Input
              type="password"
              required
              minLength={6}
              maxLength={72}
              value={form.password}
              onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              placeholder="Minimal 6 karakter"
            />
          </Field>

          <Field label="Peran pengelola" required>
            <Select
              value={form.role}
              onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
            >
              <option value="OPERATOR">Operator (Konten & Verifikasi SPMB)</option>
              <option value="ADMIN">Admin Utama (Akses penuh termasuk Kelola Pengelola)</option>
            </Select>
          </Field>
        </form>
      </Modal>
    </div>
  );
}
