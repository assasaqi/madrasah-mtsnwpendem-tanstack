import { useEffect, useMemo, useState } from 'react';
import { Mail, MailOpen, Trash2, RefreshCw, Send } from 'lucide-react';
import { kontakService } from '../../services/kontakService';
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
  buttonClass
} from '../../components/admin/ui';

export default function AdminPesanKontak() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyUnread, setOnlyUnread] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchPesan();
  }, []);

  // Memuat seluruh pesan kontak dari API
  const fetchPesan = async () => {
    try {
      setLoading(true);
      const data = await kontakService.getAll();
      setItems(Array.isArray(data) ? data : []);
      setAlert({ type: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat pesan kontak.') });
    } finally {
      setLoading(false);
    }
  };

  // Mengubah status baca satu pesan
  const handleToggleRead = async (item) => {
    try {
      const updated = await kontakService.markRead(item.id, !item.isRead);
      const next = updated || { ...item, isRead: !item.isRead };
      setItems((prev) => prev.map((row) => (row.id === item.id ? { ...row, ...next } : row)));
      return { ...item, ...next };
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memperbarui status pesan.') });
      return item;
    }
  };

  // Menghapus pesan setelah konfirmasi
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus pesan ini?')) return;
    try {
      await kontakService.remove(id);
      setItems((prev) => prev.filter((row) => row.id !== id));
      setSelected(null);
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus pesan.') });
    }
  };

  // Membuka pesan dan menandainya sudah dibaca
  const openMessage = async (item) => {
    setSelected(item);
    if (!item.isRead) {
      const updated = await handleToggleRead(item);
      setSelected(updated);
    }
  };

  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return items.filter((item) => {
      if (onlyUnread && item.isRead) return false;
      if (!query) return true;
      return [item.nama, item.email, item.subjek, item.pesan].some((value) =>
        String(value || '').toLowerCase().includes(query)
      );
    });
  }, [items, onlyUnread, searchQuery]);

  const unreadCount = items.filter((item) => !item.isRead).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pesan kontak"
        description="Pesan yang dikirim pengunjung melalui formulir kontak website madrasah."
        actions={
          <Button variant="secondary" icon={RefreshCw} onClick={fetchPesan}>
            Muat ulang
          </Button>
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
            placeholder="Cari nama, email, subjek, atau isi pesan…"
          />
          <div className="flex items-center gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-[11.5px] font-medium text-muted">
              <input
                type="checkbox"
                checked={onlyUnread}
                onChange={(event) => setOnlyUnread(event.target.checked)}
                className="h-3.5 w-3.5 rounded border-line text-brand focus:ring-brand/25"
              />
              Hanya belum dibaca
            </label>
            <span className="rounded border border-line bg-[#f7f5ef] px-2 py-1 text-[10.5px] font-semibold text-muted">
              {unreadCount} belum dibaca
            </span>
          </div>
        </Toolbar>

        <div className="admin-scroll overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <Th className="hidden md:table-cell">Status</Th>
                <Th>Pengirim</Th>
                <Th>Subjek</Th>
                <Th className="hidden md:table-cell">Diterima</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={5} icon={Mail} title="Memuat pesan…" />
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => openMessage(item)}
                    className={`cursor-pointer transition-colors hover:bg-[#faf8f3] ${
                      item.isRead ? '' : 'bg-[#fcfbf7]'
                    }`}
                  >
                    <Td className="hidden md:table-cell">
                      {item.isRead ? (
                        <StatusDot tone="stone">Dibaca</StatusDot>
                      ) : (
                        <StatusDot tone="brand">Baru</StatusDot>
                      )}
                    </Td>
                    <Td>
                      <p className={`flex items-center gap-1.5 text-ink ${item.isRead ? 'font-medium' : 'font-semibold'}`}>
                        {!item.isRead && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand md:hidden" />}
                        {item.nama}
                      </p>
                      <p className="mt-0.5 truncate text-[10.5px] text-muted">{item.email}</p>
                      <p className="mt-0.5 text-[10px] text-muted md:hidden">
                        {formatDate(item.createdAt, { month: 'short' })}
                      </p>
                    </Td>
                    <Td>
                      <p className={`max-w-[360px] truncate text-ink ${item.isRead ? '' : 'font-semibold'}`}>
                        {item.subjek || '(Tanpa subjek)'}
                      </p>
                      <p className="mt-0.5 line-clamp-1 max-w-[360px] text-[10.5px] text-muted">{item.pesan}</p>
                    </Td>
                    <Td className="hidden whitespace-nowrap text-muted md:table-cell">{formatDate(item.createdAt)}</Td>
                    <Td align="right">
                      <div className="flex items-center justify-end gap-0.5" onClick={(event) => event.stopPropagation()}>
                        <IconButton
                          label={item.isRead ? 'Tandai belum dibaca' : 'Tandai sudah dibaca'}
                          className="hidden sm:inline-flex"
                          onClick={() => handleToggleRead(item)}
                        >
                          {item.isRead ? <Mail size={14} /> : <MailOpen size={14} />}
                        </IconButton>
                        <a
                          href={`mailto:${item.email}?subject=Re: ${encodeURIComponent(item.subjek || '')}`}
                          title="Balas via email"
                          className="hidden h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-[#efece4] hover:text-ink sm:inline-flex"
                        >
                          <Send size={14} />
                        </a>
                        <IconButton label="Hapus pesan" tone="danger" onClick={() => handleDelete(item.id)}>
                          <Trash2 size={14} />
                        </IconButton>
                      </div>
                    </Td>
                  </tr>
                ))
              ) : (
                <EmptyRow
                  colSpan={5}
                  icon={Mail}
                  title="Tidak ada pesan"
                  description="Pesan baru dari pengunjung website akan muncul di sini."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.subjek || '(Tanpa subjek)'}
        description={selected ? `${selected.nama} · ${selected.email}` : ''}
        size="md"
        footer={
          selected && (
            <>
              <Button
                variant="secondary"
                icon={MailOpen}
                onClick={async () => {
                  const updated = await handleToggleRead(selected);
                  setSelected(updated);
                }}
              >
                {selected.isRead ? 'Tandai belum dibaca' : 'Tandai dibaca'}
              </Button>
              <a
                href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subjek || '')}`}
                className={buttonClass('primary')}
              >
                <Send size={15} /> Balas via email
              </a>
            </>
          )
        }
      >
        {selected && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-line pb-3 text-[11px] text-muted">
              <span>
                Diterima <span className="font-medium text-ink">{formatDate(selected.createdAt)}</span>
              </span>
              <span>
                Status{' '}
                {selected.isRead ? (
                  <span className="font-medium text-ink">Sudah dibaca</span>
                ) : (
                  <span className="font-semibold text-brand">Baru</span>
                )}
              </span>
            </div>

            <p className="whitespace-pre-line text-[12.5px] leading-relaxed text-ink/90">{selected.pesan}</p>

            <div className="flex justify-end border-t border-line pt-3">
              <Button variant="danger" size="sm" icon={Trash2} onClick={() => handleDelete(selected.id)}>
                Hapus pesan
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
