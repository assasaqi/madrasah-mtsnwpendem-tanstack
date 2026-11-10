import { useEffect, useState } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  RefreshCw,
  Upload,
  UserRound
} from 'lucide-react';
import {
  getStruktur,
  createStruktur,
  updateStruktur,
  deleteStruktur
} from '../../services/profileService';
import { getErrorMessage, getFileUrl } from '../../utils/helpers';
import { susunBaganStruktur } from '../../utils/struktur';
import { queryClient } from '../../lib/queryClient';
import {
  PageHeader,
  Panel,
  Button,
  IconButton,
  Alert,
  Modal,
  Field,
  Input,
  ImageCropperModal,
  UploadLoadingOverlay
} from '../../components/admin/ui';
import { cx, buttonClass } from '../../components/admin/uiStyles';

const emptyForm = { nama: '', jabatan: '' };

// Kartu Pengurus Gambar Full Card (Ukuran 70% Lebih Kompak)
function SlotCard({ item, onEdit, onDelete, isTop = false, compact = false }) {
  const foto = item.foto ? getFileUrl(item.foto) : '';
  const inisial = item.nama?.charAt(0).toUpperCase() || '?';

  return (
    <div
      className={cx(
        'group relative overflow-hidden rounded-md sm:rounded-lg border bg-paper transition-all duration-200 w-full shadow-xs hover:shadow-md aspect-[3/4]',
        isTop
          ? 'max-w-[91px] sm:max-w-[105px] mx-auto border-brand/50 ring-1 ring-brand/30'
          : compact
          ? 'max-w-[77px] sm:max-w-[91px] mx-auto border-line hover:border-brand/40'
          : 'max-w-[77px] sm:max-w-[91px] mx-auto border-line hover:border-brand/40'
      )}
    >
      {/* Gambar Full Card */}
      {foto ? (
        <img
          src={foto}
          alt={item.nama}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#f1f5f9] to-[#e2e8f0] text-[#94a3b8]">
          <UserRound size={15} className="sm:w-5 sm:h-5 opacity-60" />
          <span className="mt-0.5 text-[7px] sm:text-[8.5px] font-bold text-ink/40">{inisial}</span>
        </div>
      )}

      {/* Tombol Edit & Delete di Posisi Kanan (Top-Right) */}
      <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 z-10 flex items-center gap-0.5 rounded bg-white/90 p-0.5 shadow-2xs backdrop-blur-xs border border-black/5">
        <IconButton
          label="Edit pengurus"
          tone="brand"
          onClick={() => onEdit(item)}
          className="p-0.5 hover:bg-brand/10"
        >
          <Edit2 size={7} className="sm:w-2 sm:h-2" />
        </IconButton>
        <IconButton
          label="Hapus pengurus"
          tone="danger"
          onClick={() => onDelete(item)}
          className="p-0.5 hover:bg-rose-50"
        >
          <Trash2 size={7} className="sm:w-2 sm:h-2" />
        </IconButton>
      </div>

      {/* Info Nama & Jabatan di Bagian Bawah dengan Gradasi Halus */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-0.5 sm:p-1 text-left pt-3 sm:pt-3.5">
        <p
          className="text-[5.5px] sm:text-[6.5px] font-bold leading-[1.15] text-white drop-shadow-xs break-words"
          title={item.nama}
        >
          {item.nama}
        </p>
        <p
          className="mt-0.5 text-[4.5px] sm:text-[5.5px] font-semibold text-emerald-300 uppercase tracking-wider drop-shadow-xs leading-tight break-words"
          title={item.jabatan}
        >
          {item.jabatan}
        </p>
      </div>
    </div>
  );
}

// Slot Bagan Kosong yang Dapat Diklik Langsung untuk Mengisi (Ukuran 70% Kompak)
function EmptySlot({ title, defaultJabatan, onAdd, isTop = false }) {
  return (
    <button
      type="button"
      onClick={() => onAdd(null, defaultJabatan)}
      className={cx(
        'group flex flex-col items-center justify-center gap-0.5 sm:gap-1 rounded-md sm:rounded-lg border-2 border-dashed border-line bg-[#f8fafc]/75 p-0.5 sm:p-1 text-center transition-all duration-150 hover:border-brand hover:bg-[#f8fafc] w-full aspect-[3/4]',
        isTop ? 'max-w-[91px] sm:max-w-[105px] mx-auto' : 'max-w-[77px] sm:max-w-[91px] mx-auto'
      )}
    >
      <div className="flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-line/60 text-muted group-hover:bg-brand group-hover:text-white transition-colors shrink-0 shadow-2xs">
        <Plus size={7} className="sm:w-2 sm:h-2" />
      </div>
      <div className="text-center px-0.5">
        <p className="text-[5px] sm:text-[6.5px] font-bold text-ink/70 group-hover:text-brand transition-colors break-words leading-tight">
          + {title}
        </p>
      </div>
    </button>
  );
}

export default function AdminProfilStruktur() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [cropModal, setCropModal] = useState({ open: false, src: '', fileName: '' });

  // Memuat data struktur organisasi saat pertama kali dibuka
  useEffect(() => {
    let ignore = false;

    async function loadData() {
      try {
        const data = await getStruktur();
        if (!ignore) {
          setItems(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        if (!ignore) {
          setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat struktur organisasi.') });
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      ignore = true;
    };
  }, []);

  // Memuat ulang daftar pengurus dari server
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getStruktur();
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal memuat struktur organisasi.') });
    } finally {
      setLoading(false);
    }
  };

  // Membuka modal tambah atau edit pengurus
  const openModal = (item = null, defaultJabatan = '') => {
    setAlert({ type: '', message: '' });
    setEditing(item);
    setFile(null);
    setForm(
      item
        ? { nama: (item.nama || '').toUpperCase(), jabatan: (item.jabatan || '').toUpperCase() }
        : { nama: '', jabatan: (defaultJabatan || '').toUpperCase() }
    );
    setPreview(item?.foto ? getFileUrl(item.foto) : '');
    setShowModal(true);
  };

  // Menutup modal dan membersihkan formulir
  const closeModal = () => {
    setShowModal(false);
    setEditing(null);
    setFile(null);
    setPreview('');
    setForm(emptyForm);
  };

  // Mengubah input teks nama dan jabatan (otomatis huruf kapital)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value.toUpperCase() }));
  };

  // Memproses pemilihan foto dan membuka modal cropper
  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const src = URL.createObjectURL(selected);
      setCropModal({
        open: true,
        src,
        fileName: selected.name
      });
    }
    e.target.value = '';
  };

  // Menerima hasil crop foto dari ImageCropperModal
  const handleCropComplete = (res, directPreview) => {
    const croppedFile = res?.file || res;
    const previewUrl = res?.previewUrl || directPreview;
    setFile(croppedFile);
    if (previewUrl) setPreview(previewUrl);
    setCropModal((prev) => ({ ...prev, open: false }));
  };

  // Menyimpan data pengurus baru atau perubahan (semua teks kapital)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      const payload = new FormData();
      payload.append('nama', form.nama.trim().toUpperCase());
      payload.append('jabatan', form.jabatan.trim().toUpperCase());
      payload.append('urutan', editing ? (editing.urutan ?? 0) : items.length);
      if (file instanceof File) payload.append('foto', file);

      if (editing) await updateStruktur(editing.id, payload);
      else await createStruktur(payload);

      closeModal();
      queryClient.invalidateQueries({ queryKey: ['schoolProfile'] });
      await fetchData();
      setAlert({
        type: 'success',
        message: editing ? 'Data pengurus diperbarui.' : 'Pengurus baru berhasil ditambahkan.'
      });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menyimpan data struktur.') });
    } finally {
      setSaving(false);
    }
  };

  // Menghapus pengurus dari struktur organisasi
  const handleDelete = async (item) => {
    if (!window.confirm(`Hapus "${item.nama}" dari struktur organisasi?`)) return;

    try {
      await deleteStruktur(item.id);
      queryClient.invalidateQueries({ queryKey: ['schoolProfile'] });
      await fetchData();
      setAlert({ type: 'success', message: 'Data pengurus berhasil dihapus.' });
    } catch (error) {
      setAlert({ type: 'error', message: getErrorMessage(error, 'Gagal menghapus data struktur.') });
    }
  };

  const {
    kamadItem,
    komiteItem,
    wakaSlots,
    tendikSlots,
    kepalaUnitSlots,
    waliSlots,
    guruSlots
  } = susunBaganStruktur(items);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Struktur Organisasi"
      />

      {alert.message && (
        <Alert tone={alert.type} onClose={() => setAlert({ type: '', message: '' })}>
          {alert.message}
        </Alert>
      )}

      {/* PANEL UTAMA BAGAN ORGANISASI */}
      <Panel>
        <div className="p-4 sm:p-8">
          {loading ? (
            <div className="py-12 text-center text-muted">
              <RefreshCw size={24} className="mx-auto animate-spin text-brand" />
              <p className="mt-2 text-[12.5px]">Memuat bagan struktur organisasi…</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* BARIS 1: KEPALA MADRASAH (TENGAH) ↔ KETUA KOMITE (GARIS KOORDINASI PUTUS-PUTUS) */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-md mx-auto">
                <div aria-hidden="true" />

                {/* Kepala Madrasah */}
                <div className="w-[91px] sm:w-[105px] flex flex-col items-center">
                  {kamadItem ? (
                    <SlotCard
                      item={kamadItem}
                      onEdit={openModal}
                      onDelete={handleDelete}
                      isTop
                    />
                  ) : (
                    <EmptySlot
                      title="Kepala Madrasah"
                      defaultJabatan="Kepala Madrasah"
                      onAdd={openModal}
                      isTop
                    />
                  )}
                </div>

                {/* Garis Koordinasi + Ketua Komite */}
                <div className="flex items-center">
                  <div className="w-4 sm:w-8 border-t-2 border-dashed border-slate-500/80 shrink-0" aria-hidden="true" />
                  <div className="w-[77px] sm:w-[91px] shrink-0">
                    {komiteItem ? (
                      <SlotCard
                        item={komiteItem}
                        onEdit={openModal}
                        onDelete={handleDelete}
                      />
                    ) : (
                      <EmptySlot
                        title="Ketua Komite"
                        defaultJabatan="Ketua Komite"
                        onAdd={openModal}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Garis Komando Vertikal dari Kepala Madrasah ke Baris 2 */}
              <div className="mx-auto h-5 sm:h-7 w-[2px] bg-slate-500/80" aria-hidden="true" />

              {/* BARIS 2: WAKIL KEPALA MADRASAH, TENAGA KEPENDIDIKAN, & KEPALA LAB/PERPUS */}
              <div className="w-full overflow-x-auto no-scrollbar">
                <div className="mx-auto flex w-fit items-stretch">
                  {/* Cabang Kiri: Wakil Kepala Madrasah (4 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 py-5 sm:px-2 sm:py-6">
                    <div className="absolute top-0 left-1/2 right-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit flex-1 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Wakil Kepala Madrasah</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">Kurikulum, kesiswaan, sarpras, humas (4 waka)</p>
                      </div>

                      {/* Di mobile: 2 baris (2x2); di desktop: 1 baris (4 kolom) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-fit mx-auto">
                        {wakaSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `waka-slot-${idx}`} className="w-[72px] sm:w-[76px] md:w-[80px]">
                            {slot.item ? (
                              <SlotCard item={slot.item} onEdit={openModal} onDelete={handleDelete} compact />
                            ) : (
                              <EmptySlot
                                title={slot.role}
                                defaultJabatan={slot.role}
                                onAdd={openModal}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute bottom-0 left-1/2 right-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                  </div>

                  {/* Cabang Tengah: Tenaga Kependidikan (4 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 py-5 sm:px-2 sm:py-6">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit flex-1 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Tenaga Kependidikan</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">Tata usaha, bendahara, operator, staf (4 staf)</p>
                      </div>

                      {/* Di mobile: 2 baris (2x2); di desktop: 1 baris (4 kolom) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-fit mx-auto">
                        {tendikSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `tendik-slot-${idx}`} className="w-[72px] sm:w-[76px] md:w-[80px]">
                            {slot.item ? (
                              <SlotCard item={slot.item} onEdit={openModal} onDelete={handleDelete} compact />
                            ) : (
                              <EmptySlot
                                title={slot.role}
                                defaultJabatan={slot.role}
                                onAdd={openModal}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute bottom-0 inset-x-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                  </div>

                  {/* Cabang Kanan: Kepala Laboratorium & Perpustakaan (3 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 py-5 sm:px-2 sm:py-6">
                    <div className="absolute top-0 left-0 right-1/2 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit flex-1 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Kepala Laboratorium & Perpustakaan</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">Perpus, lab IPA, lab komputer (3 kepala)</p>
                      </div>

                      {/* Di mobile: 2 kolom; di desktop: 3 kolom */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 w-fit mx-auto">
                        {kepalaUnitSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `kepala-slot-${idx}`} className="w-[72px] sm:w-[76px] md:w-[80px]">
                            {slot.item ? (
                              <SlotCard item={slot.item} onEdit={openModal} onDelete={handleDelete} compact />
                            ) : (
                              <EmptySlot
                                title={slot.role}
                                defaultJabatan={slot.role}
                                onAdd={openModal}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 right-1/2 h-[2px] bg-slate-500/80" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Garis Komando Vertikal dari Baris 2 ke Baris 3 */}
              <div className="mx-auto h-5 sm:h-7 w-[2px] bg-slate-500/80" aria-hidden="true" />

              {/* BARIS 3: WALI KELAS (6 CARD) & DEWAN GURU (15 CARD) */}
              <div className="w-full overflow-x-auto no-scrollbar pb-1">
                <div className="mx-auto flex w-fit items-start">
                  {/* Cabang Kiri: Wali Kelas (6 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 pt-5 sm:px-2 sm:pt-6">
                    <div className="absolute top-0 left-1/2 right-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit shrink-0 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Wali Kelas</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">6 rombongan belajar (Kelas 7, 8, dan 9)</p>
                      </div>

                      {/* Di mobile: 3 baris (3x2); di desktop: 2 baris (2x3) */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 w-fit mx-auto">
                        {waliSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `wali-slot-${idx}`} className="w-[72px] sm:w-[76px] md:w-[80px]">
                            {slot.item ? (
                              <SlotCard item={slot.item} onEdit={openModal} onDelete={handleDelete} compact />
                            ) : (
                              <EmptySlot
                                title={slot.role}
                                defaultJabatan={slot.role}
                                onAdd={openModal}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cabang Kanan: Dewan Guru (15 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 pt-5 sm:px-2 sm:pt-6">
                    <div className="absolute top-0 left-0 right-1/2 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit shrink-0 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Dewan Guru</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">Tenaga pendidik mata pelajaran (15 guru)</p>
                      </div>

                      {/* Di mobile & desktop: 3 baris (3x5 = 15 card) */}
                      <div className="grid grid-cols-5 gap-1 sm:gap-2 w-fit mx-auto">
                        {guruSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `guru-slot-${idx}`} className="w-[52px] sm:w-[68px] md:w-[76px]">
                            {slot.item ? (
                              <SlotCard item={slot.item} onEdit={openModal} onDelete={handleDelete} compact />
                            ) : (
                              <EmptySlot
                                title={slot.title}
                                defaultJabatan={slot.role}
                                onAdd={openModal}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keterangan Garis Hirarki */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[10.5px] sm:text-[11px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block w-5 border-t-2 border-slate-500/80" aria-hidden="true" />
                  Garis Komando
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block w-5 border-t-2 border-dashed border-slate-500/80" aria-hidden="true" />
                  Garis Koordinasi
                </span>
              </div>
            </div>
          )}
        </div>
      </Panel>

      {/* MODAL FORM TAMBAH / SUNTING PENGURUS */}
      <Modal
        open={showModal}
        onClose={closeModal}
        title={editing ? 'SUNTING PENGURUS' : 'TAMBAH PENGURUS'}
        description="LENGKAPI NAMA LENGKAP, JABATAN RESMI, DAN FOTO PENGURUS MADRASAH."
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={closeModal}>
              BATAL
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={saving}>
              {saving ? 'MENYIMPAN…' : 'SIMPAN'}
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="NAMA LENGKAP" required>
            <Input
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={100}
              placeholder="CONTOH: H. AHMAD SUBAGIO, M.PD."
              className="uppercase"
            />
          </Field>

          <Field label="JABATAN" required hint="KETIKKAN JABATAN RESMI MADRASAH ATAU PILIH SALAH SATU DI BAWAH.">
            <Input
              name="jabatan"
              value={form.jabatan}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={100}
              placeholder="CONTOH: KEPALA MADRASAH / WAKA KURIKULUM / WALI KELAS / GURU"
              className="uppercase"
            />
            <div className="mt-2 flex flex-wrap gap-1">
              {[
                'KEPALA MADRASAH',
                'KETUA KOMITE',
                'WAKA KURIKULUM',
                'WAKA KESISWAAN',
                'WAKA SARPRAS',
                'WAKA HUMAS',
                'KEPALA TATA USAHA',
                'BENDAHARA',
                'OPERATOR',
                'WALI KELAS 7A',
                'WALI KELAS 7B',
                'WALI KELAS 8A',
                'WALI KELAS 8B',
                'WALI KELAS 9A',
                'WALI KELAS 9B',
                'GURU'
              ].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, jabatan: role }))}
                  className={cx(
                    'rounded border px-1.5 py-0.5 text-[9px] font-semibold transition-colors cursor-pointer',
                    form.jabatan === role
                      ? 'border-brand bg-brand-soft/40 text-brand'
                      : 'border-line bg-paper text-muted hover:border-brand/50 hover:text-ink'
                  )}
                >
                  {role}
                </button>
              ))}
            </div>
          </Field>

          <Field label="FOTO" hint="OPSIONAL. FORMAT GAMBAR POTRET VERTIKAL, MAKSIMAL 5MB.">
            <div className="flex items-center gap-3">
              <div className="h-16 w-12 shrink-0 overflow-hidden rounded-md border border-line bg-[#f1f5f9]">
                {preview ? (
                  <img src={preview} alt="PRATINJAU" className="h-full w-full object-cover object-top" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-[#94a3b8]">
                    <UserRound size={18} />
                  </span>
                )}
              </div>
              <label className={buttonClass('secondary', 'md', 'cursor-pointer uppercase')}>
                <Upload size={14} />
                {file ? file.name.toUpperCase() : 'PILIH FOTO'}
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          </Field>
        </form>
      </Modal>

      {/* Loading Overlay saat mengunggah foto / menyimpan data */}
      <UploadLoadingOverlay
        open={saving}
        title="Menyimpan Struktur Organisasi"
        message="Mohon tunggu, foto dan data pengurus sedang diunggah ke server..."
      />

      {/* Modal Cropper Foto Pengurus */}
      <ImageCropperModal
        open={cropModal.open}
        onClose={() => setCropModal((prev) => ({ ...prev, open: false }))}
        imageSrc={cropModal.src}
        onCrop={handleCropComplete}
        aspectRatio={3 / 4}
        title="Crop Foto Pengurus (3:4)"
        fileName={cropModal.fileName}
      />
    </div>
  );
}
