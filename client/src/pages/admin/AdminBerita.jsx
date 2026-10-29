import { useState, useEffect } from 'react';
import {
  FileText,
  Plus,
  Trash2,
  Edit2,
  Loader2,
  RefreshCw,
  ImagePlus
} from 'lucide-react';
import { beritaService } from '../../services/beritaService';
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
  Select,
  Textarea,
  buttonClass,
  ImageCropperModal,
  UploadLoadingOverlay
} from '../../components/admin/ui';

export default function AdminBerita() {
  const [beritaList, setBeritaList] = useState([]);
  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [notice, setNotice] = useState({ type: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    judul: '',
    kategoriId: '',
    konten: '',
    isPublished: true
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [cropModal, setCropModal] = useState({ open: false, src: '', fileName: '' });

  // Ambil data berita dan kategori saat komponen pertama kali dimuat
  useEffect(() => {
    fetchBerita();
    fetchKategori();
  }, []);

  // Memuat seluruh data berita dari server
  const fetchBerita = async () => {
    try {
      setLoading(true);
      setErrorMsg('');
      const data = await beritaService.getAllBerita();
      setBeritaList(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Gagal memuat berita:', err);
      setErrorMsg(getErrorMessage(err, 'Gagal terhubung ke layanan API server.'));
      setBeritaList([]);
    } finally {
      setLoading(false);
    }
  };

  // Memuat daftar kategori berita dari server
  const fetchKategori = async () => {
    try {
      const data = await beritaService.getKategoriList();
      setKategoriList(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Gagal memuat kategori berita:', err);
      setKategoriList([]);
    }
  };

  // Menambahkan kategori berita baru melalui dialog
  const handleAddKategori = async () => {
    const nama = window.prompt('Nama kategori baru:');
    if (!nama || nama.trim().length < 2) return;

    try {
      const created = await beritaService.createKategori(nama.trim());
      await fetchKategori();
      if (created?.id) setFormData((prev) => ({ ...prev, kategoriId: created.id }));
    } catch (err) {
      alert(getErrorMessage(err, 'Gagal menambahkan kategori.'));
    }
  };

  // Membuka modal formulir dalam mode tambah atau sunting
  const handleOpenModal = (item = null) => {
    setNotice({ type: '', message: '' });
    if (item) {
      setEditingItem(item);
      setFormData({
        judul: item.judul || item.title || '',
        kategoriId: item.kategoriId || item.kategori?.id || '',
        konten: item.konten || item.content || '',
        isPublished: item.isPublished ?? item.published ?? true
      });
      const rawGambar = item.gambar || item.imageUrl;
      setImagePreview(rawGambar ? getFileUrl(rawGambar) : null);
    } else {
      setEditingItem(null);
      setFormData({
        judul: '',
        kategoriId: kategoriList.length > 0 ? kategoriList[0].id || kategoriList[0]._id : '',
        konten: '',
        isPublished: true
      });
      setImagePreview(null);
    }
    setImageFile(null);
    setShowModal(true);
  };

  // Menutup modal formulir dan mereset status masukan
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setFormData({ judul: '', kategoriId: '', konten: '', isPublished: true });
    setImageFile(null);
    setImagePreview(null);
  };

  // Memproses perubahan bidang teks formulir
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Memproses pemilihan berkas gambar dan membuka modal cropper
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setCropModal({
        open: true,
        src,
        fileName: file.name
      });
    }
    e.target.value = '';
  };

  // Menerima hasil crop gambar berita dari ImageCropperModal
  const handleCropComplete = (res, directPreview) => {
    const croppedFile = res?.file || res;
    const previewUrl = res?.previewUrl || directPreview;
    setImageFile(croppedFile);
    if (previewUrl) setImagePreview(previewUrl);
    setCropModal((prev) => ({ ...prev, open: false }));
  };

  // Mengirim data formulir berita ke API backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.judul.trim().length > 200) {
      setNotice({
        type: 'error',
        message: `Judul berita terlalu panjang (${formData.judul.trim().length} karakter). Maksimal 200 karakter.`
      });
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        judul: formData.judul,
        konten: formData.konten,
        kategoriId: formData.kategoriId,
        isPublished: formData.isPublished,
        imageFile: imageFile,
        gambar: imageFile
      };

      if (editingItem) {
        await beritaService.updateBerita(editingItem.id, payload);
        setNotice({ type: 'success', message: 'Berita berhasil diperbarui.' });
      } else {
        await beritaService.createBerita(payload);
        setNotice({ type: 'success', message: 'Berita baru berhasil ditambahkan.' });
      }

      handleCloseModal();
      fetchBerita();
    } catch (err) {
      console.error('Gagal menyimpan berita:', err);
      setNotice({
        type: 'error',
        message: getErrorMessage(err, 'Gagal menyimpan berita. Terjadi kendala sistem pada server.')
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Menghapus data berita berdasarkan ID
  const handleDelete = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) return;
    try {
      await beritaService.deleteBerita(id);
      setBeritaList((prev) => prev.filter((item) => item.id !== id));
      setNotice({ type: 'success', message: 'Berita berhasil dihapus.' });
    } catch (err) {
      console.error('Gagal menghapus berita:', err);
      alert(getErrorMessage(err, 'Gagal menghapus berita. Kendala pada server.'));
    }
  };

  // Menyaring data berita berdasarkan pencarian
  const filteredBerita = (Array.isArray(beritaList) ? beritaList : []).filter((item) => {
    const q = (searchQuery || '').toLowerCase().trim();
    if (!q) return true;

    const judul = String(item?.judul || item?.title || '').toLowerCase();
    const katNama = String(item?.kategori?.nama || item?.kategori?.name || item?.category || '').toLowerCase();
    const konten = String(item?.konten || item?.content || '').toLowerCase();

    return judul.includes(q) || katNama.includes(q) || konten.includes(q);
  });

  const jumlahTerbit = beritaList.filter((item) => item.isPublished ?? item.published ?? true).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Berita & artikel"
        description="Tulis kabar terbaru madrasah. Artikel yang diterbitkan langsung tampil pada halaman berita publik."
        actions={
          <>
            <Button variant="secondary" icon={RefreshCw} onClick={fetchBerita}>
              Muat ulang
            </Button>
            <Button variant="primary" icon={Plus} onClick={() => handleOpenModal(null)}>
              Tulis artikel
            </Button>
          </>
        }
      />

      {errorMsg && (
        <Alert tone="error">
          <strong>Gagal memuat data.</strong> {errorMsg}{' '}
          <button onClick={fetchBerita} className="font-semibold underline">
            Coba lagi
          </button>
        </Alert>
      )}

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
            placeholder="Cari judul, isi, atau kategori…"
          />
          <p className="text-[11.5px] text-muted">
            <span className="font-semibold text-ink">{filteredBerita.length}</span> artikel ·{' '}
            <span className="font-semibold text-brand">{jumlahTerbit}</span> terbit
          </p>
        </Toolbar>

        <div className="admin-scroll overflow-x-auto">
          <Table className="table-fixed md:table-auto">
            <thead>
              <tr>
                <Th>Artikel</Th>
                <Th className="hidden md:table-cell">Kategori</Th>
                <Th className="w-[66px] md:w-auto">Status</Th>
                <Th className="hidden md:table-cell">Tanggal</Th>
                <Th align="right" className="w-[86px] md:w-auto">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <EmptyRow colSpan={5} icon={Loader2} title="Memuat berita…" />
              ) : filteredBerita.length > 0 ? (
                filteredBerita.map((item, idx) => {
                  const rawGambar = item.gambar || item.imageUrl;
                  const isTerbit = item.isPublished ?? item.published ?? true;
                  const kategori = item.kategori?.nama || item.kategori?.name || item.category || 'Umum';

                  return (
                    <tr key={item.id || idx} className="transition-colors hover:bg-[#faf8f3]">
                      <Td>
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="h-10 w-12 shrink-0 overflow-hidden rounded-md border border-line bg-[#f3f0e9] sm:w-14">
                            {rawGambar ? (
                              <img
                                src={getFileUrl(rawGambar)}
                                alt={item.judul || 'Berita'}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span className="flex h-full w-full items-center justify-center text-[#c2bcae]">
                                <FileText size={16} />
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 max-w-[380px]">
                            <p className="line-clamp-2 font-semibold text-ink sm:truncate">
                              {item.judul || item.title || '-'}
                            </p>
                            <p className="mt-0.5 line-clamp-1 text-[10.5px] text-muted">
                              {item.konten || item.content || 'Belum ada isi artikel.'}
                            </p>
                            <p className="mt-1 flex items-center gap-1 text-[10px] text-muted md:hidden">
                              <span className="truncate">{kategori}</span>
                              <span className="whitespace-nowrap">
                                · {formatDate(item.createdAt, { month: 'short' })}
                              </span>
                            </p>
                          </div>
                        </div>
                      </Td>
                      <Td className="hidden md:table-cell">
                        <Tag>{kategori}</Tag>
                      </Td>
                      <Td>
                        {isTerbit ? (
                          <StatusDot tone="brand">Terbit</StatusDot>
                        ) : (
                          <StatusDot tone="stone">Draf</StatusDot>
                        )}
                      </Td>
                      <Td className="hidden whitespace-nowrap text-muted md:table-cell">{formatDate(item.createdAt)}</Td>
                      <Td align="right">
                        <div className="flex items-center justify-end gap-0.5">
                          <IconButton label="Edit berita" tone="brand" onClick={() => handleOpenModal(item)}>
                            <Edit2 size={14} />
                          </IconButton>
                          <IconButton label="Hapus berita" tone="danger" onClick={() => handleDelete(item.id)}>
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
                  icon={FileText}
                  title="Belum ada artikel"
                  description="Mulai dengan menulis berita pertama untuk website madrasah."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      <Modal
        open={showModal}
        onClose={handleCloseModal}
        title={editingItem ? 'Sunting artikel' : 'Tulis artikel baru'}
        description="Judul yang baik singkat, spesifik, dan menyebutkan inti peristiwa."
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={handleCloseModal}>
              Batal
            </Button>
            <Button
              variant="primary"
              icon={submitting ? Loader2 : undefined}
              disabled={submitting || formData.judul.length > 200}
              onClick={handleSubmit}
            >
              {submitting ? 'Menyimpan…' : editingItem ? 'Simpan perubahan' : 'Simpan artikel'}
            </Button>
          </>
        }
      >
        {notice.type === 'error' && notice.message && (
          <div className="mb-4">
            <Alert tone="error">{notice.message}</Alert>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Field
            label="Judul artikel"
            required
            hint={`${formData.judul.length} dari 200 karakter`}
          >
            <Input
              name="judul"
              required
              value={formData.judul}
              onChange={handleInputChange}
              placeholder="Contoh: Siswa madrasah meraih juara 1 OSN 2026"
              className={formData.judul.length > 200 ? 'border-rose-400 focus:border-rose-500' : ''}
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Kategori">
              <div className="flex items-center gap-2">
                <Select name="kategoriId" value={formData.kategoriId} onChange={handleInputChange} className="flex-1">
                  <option value="">Tanpa kategori</option>
                  {kategoriList.map((kat) => (
                    <option key={kat.id || kat._id} value={kat.id || kat._id}>
                      {kat.nama || kat.name || kat.title || 'Kategori'}
                    </option>
                  ))}
                </Select>
                <Button type="button" size="sm" variant="secondary" onClick={handleAddKategori}>
                  Baru
                </Button>
              </div>
            </Field>

            <Field label="Foto header" hint="Rasio lanskap 16:9, maksimal 5MB.">
              <label className={buttonClass('secondary', 'md', 'w-full cursor-pointer')}>
                <ImagePlus size={15} />
                {imageFile ? imageFile.name : 'Pilih gambar'}
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            </Field>
          </div>

          {imagePreview && (
            <div className="flex items-center gap-3 rounded-lg border border-line bg-[#faf8f3] p-2.5">
              <img
                src={imagePreview}
                alt="Pratinjau"
                className="h-14 w-24 shrink-0 rounded-md border border-line object-cover"
              />
              <p className="text-[11px] leading-relaxed text-muted">
                {imageFile ? 'Gambar baru siap diunggah.' : 'Gambar saat ini. Pilih berkas baru untuk menggantinya.'}
              </p>
            </div>
          )}

          <Field label="Isi artikel" required>
            <Textarea
              name="konten"
              rows={8}
              required
              value={formData.konten}
              onChange={handleInputChange}
              placeholder="Tuliskan berita lengkap di sini…"
            />
          </Field>

          <label className="flex cursor-pointer items-center gap-2 text-[12px] text-ink/85">
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleInputChange}
              className="h-4 w-4 rounded border-line text-brand focus:ring-brand/25"
            />
            Terbitkan langsung ke portal publik
          </label>
        </form>
      </Modal>

      {/* Loading Overlay saat mengunggah gambar / menyimpan artikel berita */}
      <UploadLoadingOverlay
        open={submitting}
        title="Menyimpan Berita"
        message="Mohon tunggu, gambar dan data artikel sedang diunggah ke server..."
      />

      {/* Modal Cropper Gambar Berita */}
      <ImageCropperModal
        open={cropModal.open}
        onClose={() => setCropModal((prev) => ({ ...prev, open: false }))}
        imageSrc={cropModal.src}
        onCrop={handleCropComplete}
        aspectRatio={16 / 9}
        title="Crop Foto Header Berita (16:9)"
        fileName={cropModal.fileName}
      />
    </div>
  );
}
