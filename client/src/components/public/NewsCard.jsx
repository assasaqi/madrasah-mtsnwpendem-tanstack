import { Link } from '@tanstack/react-router';
import { ArrowRight, CalendarDays, Newspaper } from 'lucide-react';
import { formatDate, getFileUrl } from '../../utils/helpers';

// Menampilkan kartu berita dengan gaya editorial modern portal Kemenag
export default function NewsCard({ item, judulTag: Judul = 'h3' }) {
  const gambar = item.gambar ? getFileUrl(item.gambar) : '';
  const tautan = `/berita/${item.slug || item.id}`;

  return (
    <article
      role="listitem"
      className="group flex h-full flex-col overflow-hidden rounded-lg sm:rounded-xl border border-line bg-paper shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md w-full"
    >
      {/* Thumbnail Gambar dengan Badge Kategori Khas Kemenag */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-canvas">
        {gambar ? (
          <img
            src={gambar}
            alt={item.judul}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-soft text-brand">
            <Newspaper className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
        )}
        {item.kategori?.nama && (
          <span className="absolute left-1.5 top-1.5 sm:left-3 sm:top-3 rounded sm:rounded-md bg-[#004d26]/90 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-xs">
            {item.kategori.nama}
          </span>
        )}
      </div>

      {/* Konten Kartu Berita */}
      <div className="flex flex-1 flex-col p-2.5 sm:p-5">
        <div className="flex items-center gap-1 sm:gap-1.5 text-[8.5px] sm:text-[11px] text-muted">
          <CalendarDays className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 text-brand" />
          <span>{formatDate(item.createdAt, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>

        <Judul className="mt-1 sm:mt-2 line-clamp-2 text-[10px] sm:text-[15.5px] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-brand">
          <Link to={tautan}>
            {item.judul}
          </Link>
        </Judul>

        <Link
          to={tautan}
          className="mt-auto inline-flex items-center gap-1 sm:gap-1.5 pt-2.5 sm:pt-4 text-[9px] sm:text-[12px] font-semibold text-brand hover:underline"
        >
          Baca selengkapnya <ArrowRight className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
