import { useEffect, useMemo, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { publicService } from '../../services/publicService';
import { getFileUrl } from '../../utils/helpers';
import useSchoolProfile from '../../hooks/useSchoolProfile';
import CardRow from '../../components/public/CardRow';
import NewsCard from '../../components/public/NewsCard';
import AnnouncementCard from '../../components/public/AnnouncementCard';
import { Alert } from '../../components/ui';

// Memecah tagline menjadi dua baris; utamakan jeda pada koma terdekat dari tengah,
// selain itu potong pada spasi yang paling mendekati tengah kalimat
function bagiDuaBaris(teks) {
  if (!teks) return [];
  const tengah = teks.length / 2;

  const posisiKoma = [...teks.matchAll(/,\s*/g)].map((m) => m.index + 1);
  const kandidat = posisiKoma.length ? posisiKoma : [...teks.matchAll(/\s+/g)].map((m) => m.index);
  if (!kandidat.length) return [teks];

  const potong = kandidat.reduce((a, b) => (Math.abs(b - tengah) < Math.abs(a - tengah) ? b : a));
  return [teks.slice(0, potong).trim(), teks.slice(potong).trim()].filter(Boolean);
}

// Menampilkan beranda publik dengan konten yang seluruhnya berasal dari basis data
export default function Home() {
  const { profil: profilCache } = useSchoolProfile();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setErrorMsg('');
      try {
        const hasil = await publicService.getHomeData();
        if (masihAktif) setData(hasil || null);
      } catch (error) {
        console.error('Gagal memuat beranda:', error);
        if (masihAktif) {
          setData(null);
          setErrorMsg('Konten beranda belum dapat dimuat. Coba muat ulang halaman.');
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

  const profil = data?.schoolProfile || profilCache;
  const berita = Array.isArray(data?.latestNews) ? data.latestNews.slice(0, 6) : [];
  const pengumuman = Array.isArray(data?.announcements) ? data.announcements.slice(0, 6) : [];

  // Fakta singkat hanya ditampilkan bila datanya benar-benar tersedia
  const fakta = useMemo(() => {
    const daftar = [];
    if (profil?.akreditasi) daftar.push({ label: 'Akreditasi', value: profil.akreditasi });
    if (profil?.npsn) daftar.push({ label: 'NPSN', value: profil.npsn });
    if (data?.stats?.totalGuru > 0) {
      daftar.push({ label: 'Guru & staf', value: `${data.stats.totalGuru} orang` });
    }
    if (data?.stats?.totalSiswa > 0) {
      daftar.push({ label: 'Siswa aktif', value: `${data.stats.totalSiswa} orang` });
    }
    return daftar;
  }, [profil, data]);

  const namaSekolah = profil?.namaSekolah || 'Madrasah';
  const banner = profil?.banner ? getFileUrl(profil.banner) : '';
  const tagline = String(profil?.tagline || '').trim() || 'Info data belum tersedia';
  const barisTagline = bagiDuaBaris(tagline);

  const kontenBanner = (
    <div className="absolute inset-0 flex items-center">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        {tagline && (
          <h1 className="max-w-[75%] sm:max-w-2xl text-[16px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.15] tracking-[-0.02em] [filter:drop-shadow(0_2px_6px_rgba(0,0,0,0.45))]">
            {barisTagline.map((baris, index) => (
              <span
                key={index}
                className="block bg-gradient-to-r from-white via-[#f3e7c4] to-[#d9b26a] bg-clip-text text-transparent"
              >
                {baris}
              </span>
            ))}
          </h1>
        )}

        <div className={`${tagline ? 'mt-2 sm:mt-5' : ''} flex flex-wrap items-center gap-1.5 sm:gap-2.5`}>
          <Link
            to="/spmb"
            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-md bg-gradient-to-r from-[#d9b26a] to-[#f3e7c4] px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-[12.5px] font-semibold text-[#123a24] shadow-md transition-opacity hover:opacity-90"
          >
            Daftar SPMB <ArrowRight size={13} />
          </Link>
          <Link
            to="/profil"
            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-md border border-white/40 bg-white/10 px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-[12.5px] font-semibold text-[#f7f5ee] backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Profil Madrasah
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pb-4">
      {/* Bagian Banner (Rasio 16:6) */}
      <section className="relative overflow-hidden border-b border-line bg-[#0b2416]">
        {banner ? (
          <div className="relative w-full aspect-[16/6] overflow-hidden">
            <img
              src={banner}
              alt={`Banner ${namaSekolah}`}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071a10]/85 via-[#0b2416]/45 to-transparent" />
            {kontenBanner}
          </div>
        ) : (
          <div className="relative w-full aspect-[16/6] bg-gradient-to-r from-[#071a10] via-[#0b2416] to-[#123a24]">
            {kontenBanner}
          </div>
        )}
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-ink sm:text-[26px]">
              Berita terbaru
            </h2>
          </div>
          <Link
            to="/berita"
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand hover:underline"
          >
            Semua berita <ArrowRight size={13} />
          </Link>
        </div>

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
        ) : berita.length > 0 ? (
          <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3">
            {berita.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-[13px] text-muted">
            Info data belum tersedia.
          </p>
        )}
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3 border-t border-line pt-8">
          <div>
            <h2 className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-ink sm:text-[26px]">
              Pengumuman
            </h2>
          </div>
          <Link to="/pengumuman" className="text-[12px] font-semibold text-brand hover:underline">
            Lihat semua
          </Link>
        </div>

        {loading ? (
          <CardRow ariaLabel="Memuat pengumuman" className="mt-5">
            {[0, 1, 2, 3, 4].map((item) => (
              <div
                key={item}
                role="listitem"
                className="h-48 animate-pulse rounded-lg border border-line bg-paper"
              />
            ))}
          </CardRow>
        ) : pengumuman.length > 0 ? (
          <CardRow ariaLabel="Pengumuman terbaru" className="mt-5">
            {pengumuman.map((item) => (
              <AnnouncementCard key={item.id} item={item} />
            ))}
          </CardRow>
        ) : (
          <p className="mt-5 text-[13px] text-muted">
            Info data belum tersedia.
          </p>
        )}
      </section>
    </div>
  );
}
