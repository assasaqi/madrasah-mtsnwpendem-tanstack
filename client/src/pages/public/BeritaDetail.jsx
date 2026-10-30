import { useEffect, useState } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronRight,
  Home,
  Link2,
  Newspaper,
  Share2,
  User
} from 'lucide-react';
import { publicService } from '../../services/publicService';
import { formatArticleHtml, formatDate, getFileUrl } from '../../utils/helpers';
import { Alert } from '../../components/ui';

// Menampilkan artikel berita lengkap dengan format portal berita resmi Kemenag
export default function BeritaDetail() {
  const { id } = useParams({ strict: false });
  const [berita, setBerita] = useState(null);
  const [lainnya, setLainnya] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [tersalin, setTersalin] = useState(false);

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const detail = await publicService.getBeritaDetail(id);
        if (!masihAktif) return;
        setBerita(detail?.data || null);

        const daftar = await publicService.getBerita({ limit: 8 });
        if (!masihAktif) return;
        const items = Array.isArray(daftar?.data) ? daftar.data : [];
        setLainnya(items.filter((item) => item.id !== detail?.data?.id).slice(0, 5));
      } catch (error) {
        console.error('Gagal memuat detail berita:', error);
        if (masihAktif) setErrorMsg('Berita tidak ditemukan atau belum dipublikasikan.');
      } finally {
        if (masihAktif) setLoading(false);
      }
    };

    if (id) muat();

    return () => {
      masihAktif = false;
    };
  }, [id]);

  // Menyalin tautan berita ke papan klip
  const salinTautan = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setTersalin(true);
      setTimeout(() => setTersalin(false), 2000);
    } catch {
      setTersalin(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="h-96 animate-pulse rounded-2xl border border-line bg-paper" />
      </div>
    );
  }

  if (errorMsg || !berita) {
    return (
      <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8">
        <div className="mb-6 text-left">
          <Alert tone="error">
            {errorMsg || 'Data detail berita tidak ditemukan atau belum tersedia.'}
          </Alert>
        </div>
        <h1 className="text-[22px] font-bold tracking-tight text-ink sm:text-[28px]">
          Berita Tidak Ditemukan
        </h1>
        <p className="mt-2 text-[13px] text-muted">
          Artikel yang Anda tuju mungkin telah dipindahkan atau belum diterbitkan.
        </p>
        <Link
          to="/berita"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-white shadow-xs hover:bg-[#0b331c]"
        >
          <ArrowLeft size={14} /> Kembali ke Indeks Berita
        </Link>
      </div>
    );
  }

  const gambar = berita.gambar ? getFileUrl(berita.gambar) : '';

  return (
    <div className="pb-16 pt-5 sm:pt-7">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Breadcrumb Jalur Navigasi Kemenag */}
        <nav aria-label="Jalur navigasi" className="flex flex-wrap items-center gap-1.5 text-[11.5px] text-muted">
          <Link to="/" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-brand">
            <Home size={12} />
            <span>Beranda</span>
          </Link>
          <ChevronRight size={11} className="text-muted/60" />
          <Link to="/berita" className="text-muted transition-colors hover:text-brand">
            Berita
          </Link>
          <ChevronRight size={11} className="text-muted/60" />
          <span className="max-w-[200px] truncate font-medium text-ink/80 sm:max-w-md">
            {berita.judul}
          </span>
        </nav>

        {/* Layout Utama Artikel & Sidebar */}
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <article className="min-w-0">
            {/* Header Artikel */}
            <header className="border-b border-line pb-6">
              {berita.kategori?.nama && (
                <span className="inline-block rounded-md bg-[#004d26] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
                  {berita.kategori.nama}
                </span>
              )}

              <h1 className="mt-3.5 text-[24px] font-bold leading-[1.25] tracking-[-0.025em] text-ink sm:text-[32px] lg:text-[36px]">
                {berita.judul}
              </h1>

              {/* Meta Informasi Artikel */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[12px] text-muted">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 font-medium text-ink/80">
                    <CalendarDays size={13} className="text-brand" />
                    {formatDate(berita.createdAt, {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User size={13} className="text-brand" />
                    {berita.author?.nama || berita.author?.email || 'Humas Madrasah'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={salinTautan}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-1.5 text-[11.5px] font-medium text-ink/80 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {tersalin ? <Check size={13} className="text-brand" /> : <Share2 size={13} />}
                  <span>{tersalin ? 'Tautan Tersalin' : 'Bagikan Berita'}</span>
                </button>
              </div>
            </header>

            {/* Gambar Utama Berita */}
            {gambar && (
              <figure className="mt-6 overflow-hidden rounded-2xl border border-line bg-canvas shadow-xs">
                <img
                  src={gambar}
                  alt={berita.judul}
                  className="aspect-[16/9] w-full object-cover"
                />
                <figcaption className="border-t border-line bg-paper px-4 py-2.5 text-[11.5px] italic text-muted">
                  Dokumentasi resmi: {berita.judul}
                </figcaption>
              </figure>
            )}

            {/* Isi Konten Artikel */}
            <div
              className="public-article mt-8 text-justify text-[14.5px] leading-[1.85] text-ink/90 sm:text-[15px]"
              dangerouslySetInnerHTML={{ __html: formatArticleHtml(berita.konten) }}
            />

            {/* Footer Aksi Artikel */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-paper p-4 shadow-xs">
              <Link
                to="/berita"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-soft px-3.5 py-2 text-[12px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <ArrowLeft size={13} /> Kembali ke Semua Berita
              </Link>

              <button
                type="button"
                onClick={salinTautan}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:underline"
              >
                <Link2 size={13} /> {tersalin ? 'Tautan Berhasil Disalin!' : 'Salin Tautan Halaman Ini'}
              </button>
            </div>
          </article>

          {/* Sidebar Kemenag Style */}
          <aside className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-xs">
              <div className="border-b border-line bg-canvas/70 px-4 py-3.5">
                <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-brand">
                  <Newspaper size={14} /> Berita Terkini
                </p>
              </div>

              {lainnya.length > 0 ? (
                <ul className="divide-y divide-line">
                  {lainnya.map((item) => {
                    const thumb = item.gambar ? getFileUrl(item.gambar) : '';
                    return (
                      <li key={item.id}>
                        <Link
                          to={`/berita/${item.slug || item.id}`}
                          className="group flex gap-3.5 p-3.5 transition-colors hover:bg-brand-soft/30"
                        >
                          {thumb ? (
                            <img
                              src={thumb}
                              alt={item.judul}
                              className="h-16 w-20 shrink-0 rounded-lg border border-line object-cover transition-transform group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg border border-line bg-canvas text-brand">
                              <Newspaper size={18} />
                            </div>
                          )}
                          <div className="min-w-0">
                            <span className="line-clamp-2 text-[12px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                              {item.judul}
                            </span>
                            <span className="mt-1.5 flex items-center gap-1 text-[10.5px] text-muted">
                              <CalendarDays size={10} className="text-brand" />
                              {formatDate(item.createdAt, { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="p-4 text-[12px] text-muted">
                  Belum ada berita lainnya.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
