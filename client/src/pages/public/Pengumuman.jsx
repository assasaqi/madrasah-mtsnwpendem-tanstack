import { useEffect, useMemo, useState } from 'react';
import { Megaphone, Search } from 'lucide-react';
import { pengumumanService } from '../../services/pengumumanService';
import { stripHtml } from '../../utils/helpers';
import PageHeader from '../../components/public/PageHeader';
import AnnouncementCard from '../../components/public/AnnouncementCard';
import { Alert } from '../../components/ui';

// Menampilkan daftar pengumuman resmi dengan tata letak portal Kemenag
export default function Pengumuman() {
  const [daftar, setDaftar] = useState([]);
  const [pencarian, setPencarian] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setErrorMsg('');
      try {
        const hasil = await pengumumanService.getAll();
        if (masihAktif) setDaftar(Array.isArray(hasil?.data) ? hasil.data : []);
      } catch (error) {
        console.error('Gagal memuat pengumuman:', error);
        if (masihAktif) {
          setDaftar([]);
          setErrorMsg('Pengumuman belum dapat dimuat. Coba muat ulang halaman ini.');
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

  const tersaring = useMemo(() => {
    const kataKunci = pencarian.trim().toLowerCase();
    if (!kataKunci) return daftar;

    return daftar.filter(
      (item) =>
        String(item.judul || '').toLowerCase().includes(kataKunci) ||
        stripHtml(item.konten).toLowerCase().includes(kataKunci)
    );
  }, [daftar, pencarian]);

  return (
    <div className="pb-16">
      {/* Header Halaman Pengumuman */}
      <PageHeader
        breadcrumbs={[{ label: 'Pengumuman' }]}
        title="Pengumuman & Surat Edaran"
        description="Pemberitahuan resmi, regulasi madrasah, dan informasi penting bagi siswa, guru, wali murid, dan masyarakat."
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
        {/* Toolbar Pencarian */}
        <div className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[12.5px] text-muted">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">
              <Megaphone size={13} />
            </span>
            <span>
              Total <strong className="text-ink">{tersaring.length}</strong> pengumuman dipublikasikan
            </span>
          </div>

          <label className="flex w-full items-center gap-2 rounded-lg border border-line bg-canvas px-3.5 py-2 sm:w-72">
            <Search size={14} className="shrink-0 text-muted" />
            <input
              type="search"
              value={pencarian}
              onChange={(event) => setPencarian(event.target.value)}
              placeholder="Cari pengumuman..."
              className="w-full bg-transparent text-[12.5px] text-ink outline-none placeholder:text-muted/70"
            />
          </label>
        </div>

        {/* Daftar Kartu Pengumuman */}
        {loading ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-44 animate-pulse rounded-xl border border-line bg-paper"
              />
            ))}
          </div>
        ) : errorMsg ? (
          <div className="mt-8">
            <Alert tone="error">{errorMsg}</Alert>
          </div>
        ) : tersaring.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tersaring.map((item) => (
              <AnnouncementCard key={item.id} item={item} judulTag="h2" />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-[13px] text-muted">
            {daftar.length === 0
              ? 'Info data belum tersedia.'
              : 'Tidak ditemukan pengumuman yang sesuai.'}
          </p>
        )}
      </div>
    </div>
  );
}
