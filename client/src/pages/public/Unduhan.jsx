import { useEffect, useMemo, useState } from 'react';
import {
  Download,
  FileArchive,
  FileSpreadsheet,
  FileText,
  FileType2,
  Presentation,
  Search
} from 'lucide-react';
import { unduhanService } from '../../services/unduhanService';
import { formatDate } from '../../utils/helpers';
import PageHeader from '../../components/public/PageHeader';
import { Alert } from '../../components/ui';

// Memilih ikon dan warna sesuai jenis berkas dokumen
const ikonBerkas = (tipe) => {
  const ekstensi = String(tipe || '').toLowerCase();

  if (['xls', 'xlsx', 'csv'].includes(ekstensi)) {
    return { Icon: FileSpreadsheet, className: 'bg-[#eef4ec] text-[#2f6b3b] border-emerald-200' };
  }
  if (['zip', 'rar', '7z'].includes(ekstensi)) {
    return { Icon: FileArchive, className: 'bg-[#f7f1e6] text-[#8a5a12] border-amber-200' };
  }
  if (['ppt', 'pptx'].includes(ekstensi)) {
    return { Icon: Presentation, className: 'bg-[#f8ece8] text-[#a3402a] border-rose-200' };
  }
  if (['doc', 'docx'].includes(ekstensi)) {
    return { Icon: FileType2, className: 'bg-[#eef1f7] text-[#2f4f88] border-blue-200' };
  }
  return { Icon: FileText, className: 'bg-brand-soft text-brand border-brand/20' };
};

// Mengubah ukuran berkas menjadi satuan yang mudah dibaca
const formatUkuran = (bytes) => {
  const nilai = Number(bytes);
  if (!Number.isFinite(nilai) || nilai <= 0) return '—';
  if (nilai < 1024) return `${nilai} B`;
  if (nilai < 1024 * 1024) return `${(nilai / 1024).toFixed(0)} KB`;
  return `${(nilai / (1024 * 1024)).toFixed(1)} MB`;
};

// Menampilkan kartu baris dokumen resmi Kemenag
function BarisDokumen({ item }) {
  const { Icon, className } = ikonBerkas(item.tipeFile);
  const ekstensi = String(item.tipeFile || 'berkas').toUpperCase();

  return (
    <article className="group flex flex-col justify-between gap-4 rounded-xl border border-line bg-paper p-4 shadow-xs transition-all duration-200 hover:border-brand/40 hover:shadow-md sm:flex-row sm:items-center sm:p-5">
      <div className="flex items-start gap-4 min-w-0">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${className}`}
        >
          <Icon size={22} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted">
            <span className="rounded-md bg-canvas px-2 py-0.5 font-semibold text-brand">
              {item.kategori || 'Umum'}
            </span>
            <span className="font-bold uppercase tracking-wider text-ink/75">{ekstensi}</span>
            <span>•</span>
            <span>{formatUkuran(item.ukuran)}</span>
            <span>•</span>
            <span>{formatDate(item.createdAt, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <h3 className="mt-1.5 text-[14.5px] font-bold leading-snug text-ink transition-colors group-hover:text-brand sm:text-[15.5px]">
            {item.judul}
          </h3>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-4 border-t border-line/70 pt-3 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
        <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-muted">
          <Download size={13} className="text-brand" /> {item.jumlahUnduhan || 0} kali diunduh
        </span>
        <a
          href={unduhanService.getDownloadUrl(item.id)}
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-brand px-4 text-[12px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0b331c]"
        >
          <Download size={14} /> Unduh Berkas
        </a>
      </div>
    </article>
  );
}

// Menampilkan pusat unduhan dokumen resmi madrasah
export default function Unduhan() {
  const [daftar, setDaftar] = useState([]);
  const [kategoriAktif, setKategoriAktif] = useState('Semua');
  const [pencarian, setPencarian] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setErrorMsg('');
      try {
        const data = await unduhanService.getPublic();
        if (masihAktif) setDaftar(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Gagal memuat pusat unduhan:', error);
        if (masihAktif) {
          setDaftar([]);
          setErrorMsg('Pusat unduhan belum dapat dimuat. Coba muat ulang halaman ini.');
        }
      } finally {
        if (masihAktif) setLoading(false);
      }
    };

    muat();

    return () => {
      masihAktif = false;
    };
  }, []);

  const daftarKategori = useMemo(() => {
    const kategori = daftar.map((item) => item.kategori).filter(Boolean);
    return ['Semua', ...new Set(kategori)];
  }, [daftar]);

  const tersaring = useMemo(() => {
    const kataKunci = pencarian.trim().toLowerCase();

    return daftar.filter((item) => {
      const cocokKategori = kategoriAktif === 'Semua' || item.kategori === kategoriAktif;
      const cocokPencarian =
        !kataKunci ||
        [item.judul, item.deskripsi, item.namaFile].some((nilai) =>
          String(nilai || '').toLowerCase().includes(kataKunci)
        );
      return cocokKategori && cocokPencarian;
    });
  }, [daftar, kategoriAktif, pencarian]);

  return (
    <div className="pb-16">
      {/* Header Halaman Pusat Unduhan Resmi Kemenag */}
      <PageHeader
        breadcrumbs={[{ label: 'Pusat Unduhan' }]}
        title=""
        description=""
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
        {/* Judul Bagian Pusat Unduhan */}
        <div className="flex items-center justify-between pb-2">
          <h2 className="text-[19px] font-bold text-ink sm:text-[22px]">
            Pusat Unduhan
          </h2>
          {tersaring.length > 0 && (
            <span className="text-[11.5px] sm:text-[12.5px] text-muted font-medium">
              {tersaring.length} Dokumen
            </span>
          )}
        </div>

        {/* Toolbar Kategori & Pencarian */}
        <div className="mt-3 flex flex-col gap-4 rounded-xl border border-line bg-paper p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {daftarKategori.map((kategori) => (
              <button
                key={kategori}
                type="button"
                onClick={() => setKategoriAktif(kategori)}
                className={`rounded-lg px-2.5 py-1 text-[11px] sm:px-3 sm:py-1.5 sm:text-[11.5px] font-semibold transition-all ${
                  kategoriAktif === kategori
                    ? 'bg-brand text-white shadow-xs'
                    : 'bg-canvas text-ink/75 hover:bg-brand-soft hover:text-brand'
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>

          <label className="flex w-full items-center gap-2 rounded-lg border border-line bg-canvas px-3.5 py-2 sm:w-72">
            <Search size={14} className="shrink-0 text-muted" />
            <input
              type="search"
              value={pencarian}
              onChange={(event) => setPencarian(event.target.value)}
              placeholder="Cari nama berkas dokumen..."
              className="w-full bg-transparent text-[12.5px] text-ink outline-none placeholder:text-muted/70"
            />
          </label>
        </div>

        {/* Daftar Dokumen */}
        {loading ? (
          <div className="mt-4 sm:mt-6 space-y-3">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="h-24 animate-pulse rounded-xl border border-line bg-paper" />
            ))}
          </div>
        ) : errorMsg ? (
          <div className="mt-4">
            <Alert tone="error">{errorMsg}</Alert>
          </div>
        ) : tersaring.length > 0 ? (
          <div className="mt-4 sm:mt-6 space-y-3">
            {tersaring.map((item) => (
              <BarisDokumen key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-[13px] text-muted">
            {daftar.length === 0
              ? 'Data pusat unduhan belum tersedia.'
              : 'Tidak ada dokumen yang cocok dengan filter pencarian.'}
          </p>
        )}
      </div>
    </div>
  );
}
