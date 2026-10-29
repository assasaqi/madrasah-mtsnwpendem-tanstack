import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, Search, X, ZoomIn } from 'lucide-react';
import { galeriService } from '../../services/galeriService';
import { formatDate, getFileUrl } from '../../utils/helpers';
import PageHeader from '../../components/public/PageHeader';
import { Alert } from '../../components/ui';

// Menampilkan galeri foto dokumentasi kegiatan madrasah
export default function Galeri() {
  const [items, setItems] = useState([]);
  const [kategoriAktif, setKategoriAktif] = useState('Semua');
  const [pencarian, setPencarian] = useState('');
  const [aktif, setAktif] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setErrorMsg('');
      try {
        const data = await galeriService.getPublic();
        if (masihAktif) setItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Gagal memuat galeri:', error);
        if (masihAktif) {
          setItems([]);
          setErrorMsg('Galeri belum dapat dimuat. Coba muat ulang halaman ini.');
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

  // Menutup pratinjau foto dengan tombol Escape
  useEffect(() => {
    if (!aktif) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setAktif(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [aktif]);

  const kategori = useMemo(() => {
    const daftar = items.map((item) => item.kategori).filter(Boolean);
    return ['Semua', ...new Set(daftar)];
  }, [items]);

  const tersaring = useMemo(() => {
    const kataKunci = pencarian.trim().toLowerCase();

    return items.filter((item) => {
      const cocokKategori =
        kategoriAktif === 'Semua' || item.kategori === kategoriAktif;
      const cocokPencarian =
        !kataKunci ||
        String(item.judul || '').toLowerCase().includes(kataKunci) ||
        String(item.deskripsi || '').toLowerCase().includes(kataKunci);
      return cocokKategori && cocokPencarian;
    });
  }, [items, kategoriAktif, pencarian]);

  return (
    <div className="pb-16">
      {/* Header Halaman Galeri Resmi Kemenag */}
      <PageHeader
        breadcrumbs={[{ label: 'Galeri' }]}
        title=""
        description=""
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
        {/* Judul Bagian Galeri (Sesuai Gaya Halaman Berita & Fasilitas) */}
        <div className="flex items-center justify-between pb-2">
          <h2 className="text-[19px] font-bold text-ink sm:text-[22px]">
            Galeri Kegiatan
          </h2>
          {tersaring.length > 0 && (
            <span className="text-[11.5px] sm:text-[12.5px] text-muted font-medium">
              {tersaring.length} Foto
            </span>
          )}
        </div>

        {/* Toolbar Kategori & Pencarian */}
        <div className="mt-3 flex flex-col gap-3 rounded-xl border border-line bg-paper p-3 shadow-xs sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {kategori.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setKategoriAktif(item)}
                className={`rounded-lg px-2.5 py-1 text-[11px] sm:px-3 sm:py-1.5 sm:text-[11.5px] font-semibold transition-all ${
                  kategoriAktif === item
                    ? 'bg-brand text-white shadow-xs'
                    : 'bg-canvas text-ink/75 hover:bg-brand-soft hover:text-brand'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="flex w-full items-center gap-2 rounded-lg border border-line bg-canvas px-3 py-1.5 sm:w-72 sm:px-3.5 sm:py-2">
            <Search size={14} className="shrink-0 text-muted" />
            <input
              type="search"
              value={pencarian}
              onChange={(event) => setPencarian(event.target.value)}
              placeholder="Cari foto kegiatan..."
              className="w-full bg-transparent text-[11.5px] sm:text-[12.5px] text-ink outline-none placeholder:text-muted/70"
            />
          </label>
        </div>

        {/* Kondisi Memuat & Data Galeri */}
        {loading ? (
          <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-44 sm:h-80 animate-pulse rounded-lg sm:rounded-xl border border-line bg-paper"
              />
            ))}
          </div>
        ) : errorMsg ? (
          <div className="mt-4">
            <Alert tone="error">{errorMsg}</Alert>
          </div>
        ) : tersaring.length > 0 ? (
          <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3">
            {tersaring.map((item) => {
              const gambar = getFileUrl(item.imageUrl);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setAktif(item)}
                  className="group flex flex-col overflow-hidden rounded-lg sm:rounded-xl border border-line bg-paper text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md w-full"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas">
                    <img
                      src={gambar}
                      alt={item.judul}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-brand shadow-md">
                        <ZoomIn className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" />
                      </span>
                    </div>
                    {item.kategori && (
                      <span className="absolute left-1.5 top-1.5 sm:left-3 sm:top-3 rounded sm:rounded-md bg-[#004d26]/90 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs backdrop-blur-xs">
                        {item.kategori}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-2.5 sm:p-5">
                    <h3 className="line-clamp-2 text-[10px] sm:text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                      {item.judul}
                    </h3>
                    <div className="mt-1 sm:mt-2 flex items-center gap-1 sm:gap-1.5 text-[8.5px] sm:text-[11px] text-muted">
                      <CalendarDays className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 text-brand" />
                      <span>{formatDate(item.createdAt, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <p className="mt-4 text-[13px] text-muted">
            {items.length === 0
              ? 'Data dokumentasi galeri kegiatan belum tersedia.'
              : 'Tidak ada foto yang cocok dengan kriteria pencarian.'}
          </p>
        )}
      </div>

      {/* Modal Pratinjau Foto Penuh */}
      {aktif && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-xs animate-in fade-in-0 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={aktif.judul}
          onClick={() => setAktif(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-paper shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-line bg-canvas/80 px-5 py-4">
              <div className="min-w-0">
                <p className="text-[14.5px] font-bold text-ink truncate">{aktif.judul}</p>
                <p className="mt-0.5 text-[11.5px] text-muted">
                  {[aktif.kategori, formatDate(aktif.createdAt, { month: 'long', day: 'numeric', year: 'numeric' })]
                    .filter(Boolean)
                    .join(' • ')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAktif(null)}
                aria-label="Tutup pratinjau"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-paper text-ink transition-colors hover:bg-canvas"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[65vh] overflow-auto bg-black flex items-center justify-center">
              <img
                src={getFileUrl(aktif.imageUrl)}
                alt={aktif.judul}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            {aktif.deskripsi && (
              <p className="border-t border-line bg-paper px-5 py-3.5 text-[12.5px] leading-relaxed text-muted">
                {aktif.deskripsi}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
