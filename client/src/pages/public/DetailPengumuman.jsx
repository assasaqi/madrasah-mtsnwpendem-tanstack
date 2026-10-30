import { useEffect, useState } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Home,
  Link2,
  Megaphone,
  Share2
} from 'lucide-react';
import { pengumumanService } from '../../services/pengumumanService';
import { formatArticleHtml, formatDate, formatTime, getFileUrl } from '../../utils/helpers';
import { Alert } from '../../components/ui';

// Menampilkan surat edaran / pengumuman resmi lengkap dengan lampiran unduhan
export default function DetailPengumuman() {
  const { id } = useParams({ strict: false });
  const [pengumuman, setPengumuman] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [tersalin, setTersalin] = useState(false);

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const hasil = await pengumumanService.getBySlug(id);
        if (masihAktif) setPengumuman(hasil?.data || null);
      } catch (error) {
        console.error('Gagal memuat detail pengumuman:', error);
        if (masihAktif) setErrorMsg('Pengumuman tidak ditemukan atau belum dipublikasikan.');
      } finally {
        if (masihAktif) setLoading(false);
      }
    };

    if (id) muat();

    return () => {
      masihAktif = false;
    };
  }, [id]);

  // Menyalin tautan pengumuman ke papan klip
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
      <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
        <div className="h-80 animate-pulse rounded-2xl border border-line bg-paper" />
      </div>
    );
  }

  if (errorMsg || !pengumuman) {
    return (
      <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8">
        <div className="mb-6 text-left">
          <Alert tone="error">
            {errorMsg || 'Data detail pengumuman tidak ditemukan atau belum tersedia.'}
          </Alert>
        </div>
        <h1 className="text-[22px] font-bold tracking-tight text-ink sm:text-[28px]">
          Pengumuman Tidak Ditemukan
        </h1>
        <p className="mt-2 text-[13px] text-muted">
          Pengumuman yang Anda tuju mungkin sudah ditarik atau tidak tersedia.
        </p>
        <Link
          to="/pengumuman"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-white shadow-xs hover:bg-[#0b331c]"
        >
          <ArrowLeft size={14} /> Kembali ke Daftar Pengumuman
        </Link>
      </div>
    );
  }

  const lampiranUrl = pengumuman.fileUrl ? getFileUrl(pengumuman.fileUrl) : '';
  const lampiranGambar =
    lampiranUrl &&
    /\.(jpe?g|png|webp|gif|avif|bmp)$/i.test(String(pengumuman.fileUrl).split('?')[0]);

  return (
    <div className="pb-16 pt-5 sm:pt-7">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        {/* Breadcrumbs Jalur Navigasi Kemenag */}
        <nav aria-label="Jalur navigasi" className="flex flex-wrap items-center gap-1.5 text-[11.5px] text-muted">
          <Link to="/" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-brand">
            <Home size={12} />
            <span>Beranda</span>
          </Link>
          <ChevronRight size={11} className="text-muted/60" />
          <Link to="/pengumuman" className="text-muted transition-colors hover:text-brand">
            Pengumuman
          </Link>
          <ChevronRight size={11} className="text-muted/60" />
          <span className="max-w-[200px] truncate font-medium text-ink/80 sm:max-w-md">
            {pengumuman.judul}
          </span>
        </nav>

        {/* Konten Pengumuman Resmi */}
        <article className="mt-6 rounded-2xl border border-line bg-paper p-6 shadow-xs sm:p-9">
          <header className="border-b border-line pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#004d26] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
                <Megaphone size={12} /> Surat Edaran Resmi
              </span>

              <button
                type="button"
                onClick={salinTautan}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-3 py-1.5 text-[11.5px] font-medium text-ink/80 transition-colors hover:border-brand/40 hover:text-brand"
              >
                {tersalin ? <Check size={13} className="text-brand" /> : <Share2 size={13} />}
                <span>{tersalin ? 'Tautan Tersalin' : 'Bagikan'}</span>
              </button>
            </div>

            <h1 className="mt-4 text-[22px] font-bold leading-[1.3] tracking-[-0.025em] text-ink sm:text-[30px] lg:text-[34px]">
              {pengumuman.judul}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[12px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} className="text-brand" />
                <span>
                  Diterbitkan pada{' '}
                  <strong className="text-ink/80">
                    {formatDate(pengumuman.createdAt, {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </strong>
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} className="text-brand" />
                <strong className="text-ink/80">{formatTime(pengumuman.createdAt)} WIB</strong>
              </span>
            </div>
          </header>

          {/* Kotak Lampiran Berkas Unduhan (Jika ada berkas) */}
          {lampiranUrl && (
            <div className="mt-6 rounded-xl border border-brand/25 bg-brand-soft/40 p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-white shadow-xs">
                    <FileText size={22} />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-ink">Dokumen Lampiran Resmi</p>
                    <p className="mt-0.5 text-[12px] text-muted">
                      Berkas pendukung surat edaran dapat diunduh untuk informasi lengkap.
                    </p>
                  </div>
                </div>

                <a
                  href={lampiranUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0b331c]"
                >
                  <Download size={14} /> Unduh Berkas
                </a>
              </div>

              {lampiranGambar && (
                <div className="mt-4 overflow-hidden rounded-lg border border-line bg-canvas">
                  <img
                    src={lampiranUrl}
                    alt={pengumuman.judul}
                    className="max-h-[500px] w-full object-contain"
                  />
                </div>
              )}
            </div>
          )}

          {/* Teks Isi Pengumuman */}
          <div
            className="public-article mt-8 text-justify text-[14.5px] leading-[1.85] text-ink/90 sm:text-[15px]"
            dangerouslySetInnerHTML={{ __html: formatArticleHtml(pengumuman.konten) }}
          />

          {/* Footer Pengumuman */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
            <Link
              to="/pengumuman"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-soft px-3.5 py-2 text-[12px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ArrowLeft size={13} /> Semua Pengumuman
            </Link>

            <button
              type="button"
              onClick={salinTautan}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:underline"
            >
              <Link2 size={13} /> {tersalin ? 'Tautan Berhasil Disalin!' : 'Salin Tautan'}
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
