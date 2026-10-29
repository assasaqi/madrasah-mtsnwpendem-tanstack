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

  return (
    <div className="pb-4">
      <section className="relative isolate overflow-hidden border-b border-line bg-[#0b2416]">
        {banner ? (
          <>
            <img
              src={banner}
              alt={`Suasana ${namaSekolah}`}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07170d]/95 via-[#0b2416]/82 to-[#0b2416]/40" />
          </>
        ) : (
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#1f5f39,#0b2416_68%)]" />
        )}

        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="mt-3 text-[24px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#f7f5ee] sm:text-[40px]">
              {profil?.tagline || `Selamat datang di ${namaSekolah}`}
            </h1>
            <p className="mt-4 max-w-xl text-[12px] leading-relaxed text-[#d3ddd2] sm:text-[13.5px]">
              {profil?.deskripsi ||
                'Halaman resmi madrasah untuk informasi profil, berita kegiatan, pengumuman, dan pendaftaran peserta didik baru.'}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Link
                to="/spmb/register"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#f7f5ee] px-4 py-2.5 text-[12px] font-semibold text-[#123a24] transition-colors hover:bg-white sm:text-[12.5px]"
              >
                Daftar SPMB <ArrowRight size={14} />
              </Link>
              <Link
                to="/profil"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/25 px-4 py-2.5 text-[12px] font-semibold text-[#eef1e8] transition-colors hover:bg-white/10 sm:text-[12.5px]"
              >
                Tentang madrasah
              </Link>
            </div>

            {fakta.length > 0 && (
              <dl className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-5 sm:grid-cols-4">
                {fakta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[9.5px] uppercase tracking-[0.12em] text-[#a9c7b2]">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-[12.5px] font-semibold text-[#f7f5ee]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
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
            Data berita madrasah belum tersedia.
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
            Data pengumuman madrasah belum tersedia.
          </p>
        )}
      </section>
    </div>
  );
}
