import { useEffect, useMemo, useState } from 'react';
import { Award, CalendarDays, Clock, Medal, Search, Trophy, UserRound } from 'lucide-react';
import { prestasiService } from '../../services/prestasiService';
import { formatDate, formatTime, getFileUrl } from '../../utils/helpers';
import PageHeader from '../../components/public/PageHeader';
import { Alert } from '../../components/ui';

const URUTAN_TINGKAT = [
  'Internasional',
  'Nasional',
  'Provinsi',
  'Kabupaten/Kota',
  'Kecamatan',
  'Sekolah'
];

// Menampilkan kartu prestasi resmi dengan aksen penghargaan Kemenag
function PrestasiCard({ item }) {
  const gambar = item.gambar ? getFileUrl(item.gambar) : '';

  return (
    <article
      role="listitem"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-canvas">
        {gambar ? (
          <img
            src={gambar}
            alt={item.judul}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-soft to-canvas text-brand">
            <Trophy size={36} className="text-brand/60" />
          </div>
        )}

        {item.tingkat && (
          <span className="absolute left-3 top-3 rounded-md bg-[#004d26] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
            {item.tingkat}
          </span>
        )}

        {item.tahun && (
          <span className="absolute right-3 top-3 rounded-md bg-paper/90 px-2 py-0.5 text-[10.5px] font-bold text-ink shadow-xs backdrop-blur-xs">
            {item.tahun}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {item.juara && (
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
            <Medal size={12} className="text-amber-600" />
            <span>{item.juara}</span>
          </div>
        )}

        <h3 className="mt-2.5 line-clamp-2 text-[14.5px] font-bold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-brand sm:text-[15.5px]">
          {item.judul}
        </h3>

        {item.peraih && (
          <p className="mt-2 flex items-start gap-1.5 text-[11.5px] font-medium text-ink/75">
            <UserRound size={13} className="mt-0.5 shrink-0 text-brand" />
            <span className="line-clamp-1">{item.peraih}</span>
          </p>
        )}

        {item.createdAt && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-line/60 pt-2.5 text-[11px] text-muted">
            <span className="inline-flex items-center gap-1">
              <CalendarDays size={12} className="text-brand" />
              {formatDate(item.createdAt, { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="text-muted/60">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} className="text-brand" />
              {formatTime(item.createdAt)} WIB
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

// Menampilkan katalog prestasi madrasah
export default function Prestasi() {
  const [daftar, setDaftar] = useState([]);
  const [tingkatAktif, setTingkatAktif] = useState('Semua');
  const [pencarian, setPencarian] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setErrorMsg('');
      try {
        const data = await prestasiService.getPublic();
        if (masihAktif) setDaftar(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Gagal memuat prestasi:', error);
        if (masihAktif) {
          setDaftar([]);
          setErrorMsg('Prestasi belum dapat dimuat. Coba muat ulang halaman ini.');
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

  const daftarTingkat = useMemo(() => {
    const ada = new Set(daftar.map((item) => item.tingkat).filter(Boolean));
    const urut = URUTAN_TINGKAT.filter((tingkat) => ada.has(tingkat));
    const lain = [...ada].filter((tingkat) => !URUTAN_TINGKAT.includes(tingkat)).sort();
    return ['Semua', ...urut, ...lain];
  }, [daftar]);

  const tersaring = useMemo(() => {
    const kataKunci = pencarian.trim().toLowerCase();

    return daftar.filter((item) => {
      const cocokTingkat = tingkatAktif === 'Semua' || item.tingkat === tingkatAktif;
      const cocokPencarian =
        !kataKunci ||
        [item.judul, item.peraih, item.juara, item.deskripsi].some((nilai) =>
          String(nilai || '').toLowerCase().includes(kataKunci)
        );
      return cocokTingkat && cocokPencarian;
    });
  }, [daftar, tingkatAktif, pencarian]);

  return (
    <div className="pb-16">
      {/* Header Halaman Prestasi */}
      <PageHeader
        breadcrumbs={[{ label: 'Informasi', to: '/prestasi' }, { label: 'Prestasi' }]}
        title="Prestasi & Kejuaraan Siswa"
        description="Dokumentasi raihan medali, trofi kejuaraan sains, riset keagamaan, kompetisi seni dan olahraga tingkat daerah hingga nasional."
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
        {/* Toolbar Filter & Pencarian */}
        <div className="flex flex-col gap-4 rounded-xl border border-line bg-paper p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {daftarTingkat.map((tingkat) => (
              <button
                key={tingkat}
                type="button"
                onClick={() => setTingkatAktif(tingkat)}
                className={`rounded-lg px-3 py-1.5 text-[11.5px] font-semibold transition-all ${
                  tingkatAktif === tingkat
                    ? 'bg-brand text-white shadow-xs'
                    : 'bg-canvas text-ink/75 hover:bg-brand-soft hover:text-brand'
                }`}
              >
                {tingkat}
              </button>
            ))}
          </div>

          <label className="flex w-full items-center gap-2 rounded-lg border border-line bg-canvas px-3.5 py-2 sm:w-72">
            <Search size={14} className="shrink-0 text-muted" />
            <input
              type="search"
              value={pencarian}
              onChange={(event) => setPencarian(event.target.value)}
              placeholder="Cari prestasi atau nama siswa..."
              className="w-full bg-transparent text-[12.5px] text-ink outline-none placeholder:text-muted/70"
            />
          </label>
        </div>

        {/* Kondisi Data Prestasi */}
        {loading ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-xl border border-line bg-paper"
              />
            ))}
          </div>
        ) : errorMsg ? (
          <div className="mt-8">
            <Alert tone="error">{errorMsg}</Alert>
          </div>
        ) : tersaring.length > 0 ? (
          <div>
            <p className="mt-6 text-[12px] text-muted">
              Menampilkan <strong className="text-ink">{tersaring.length}</strong> capaian prestasi
            </p>

            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tersaring.map((item) => (
                <PrestasiCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-6 text-[13px] text-muted">
            {daftar.length === 0
              ? 'Info data belum tersedia.'
              : 'Tidak ada prestasi yang cocok dengan kriteria pencarian.'}
          </p>
        )}
      </div>
    </div>
  );
}
