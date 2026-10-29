import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { publicService } from '../../services/publicService';
import { stripHtml } from '../../utils/helpers';
import PageHeader from '../../components/public/PageHeader';
import NewsCard from '../../components/public/NewsCard';
import { Alert } from '../../components/ui';

// Menampilkan portal berita madrasah dengan tata letak editorial resmi Kemenag
export default function Berita() {
  const [berita, setBerita] = useState([]);
  const [kategoriAktif, setKategoriAktif] = useState('Semua');
  const [pencarian, setPencarian] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const hasilBerita = await publicService.getBerita({ limit: 50 });
        if (!masihAktif) return;
        setBerita(Array.isArray(hasilBerita?.data) ? hasilBerita.data : []);
      } catch (error) {
        console.error('Gagal memuat berita:', error);
        if (masihAktif) setErrorMsg('Berita belum dapat dimuat. Coba muat ulang halaman ini.');
      } finally {
        if (masihAktif) setLoading(false);
      }
    };

    muat();

    return () => {
      masihAktif = false;
    };
  }, []);

  // Kategori unik dari seluruh berita terbit
  const daftarKategori = useMemo(() => {
    const dariBerita = berita.map((item) => item.kategori?.nama).filter(Boolean);
    return ['Semua', ...new Set(dariBerita)];
  }, [berita]);

  const tersaring = useMemo(() => {
    const kataKunci = pencarian.trim().toLowerCase();

    return berita.filter((item) => {
      const cocokKategori =
        kategoriAktif === 'Semua' || item.kategori?.nama === kategoriAktif;
      const cocokPencarian =
        !kataKunci ||
        String(item.judul || '').toLowerCase().includes(kataKunci) ||
        stripHtml(item.konten).toLowerCase().includes(kataKunci);
      return cocokKategori && cocokPencarian;
    });
  }, [berita, kategoriAktif, pencarian]);

  return (
    <div className="pb-16">
      {/* Header Halaman Resmi Kemenag */}
      <PageHeader
        breadcrumbs={[{ label: 'Berita' }]}
        title=""
        description=""
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
        {/* Judul Bagian Berita (Sesuai Gaya Halaman Fasilitas) */}
        <div className="flex items-center justify-between pb-2">
          <h2 className="text-[19px] font-bold text-ink sm:text-[22px]">
            Berita Madrasah
          </h2>
          {tersaring.length > 0 && (
            <span className="text-[11.5px] sm:text-[12.5px] text-muted font-medium">
              {tersaring.length} Berita
            </span>
          )}
        </div>

        {/* Toolbar Kategori & Pencarian */}
        <div className="mt-3 flex flex-col gap-3 rounded-xl border border-line bg-paper p-3 shadow-xs sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {daftarKategori.map((item) => (
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
              placeholder="Cari berita madrasah..."
              className="w-full bg-transparent text-[11.5px] sm:text-[12.5px] text-ink outline-none placeholder:text-muted/70"
            />
          </label>
        </div>

        {/* Kondisi Memuat Berita */}
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
            {tersaring.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-[13px] text-muted">
            {berita.length === 0
              ? 'Data berita madrasah belum tersedia.'
              : 'Tidak ada berita yang cocok dengan kriteria pencarian.'}
          </p>
        )}
      </div>
    </div>
  );
}
