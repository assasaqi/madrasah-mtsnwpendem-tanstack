import { Link } from '@tanstack/react-router';
import { ArrowRight, CalendarDays, Clock, FileText, Megaphone, Paperclip } from 'lucide-react';
import { formatDate, formatTime } from '../../utils/helpers';

// Menampilkan kartu pengumuman resmi berstandar instansi keagamaan
export default function AnnouncementCard({ item, judulTag: Judul = 'h3' }) {
  const tautan = `/pengumuman/${item.slug || item.id}`;

  return (
    <article
      role="listitem"
      className="group flex h-full flex-col rounded-xl border border-line bg-paper p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md sm:p-5"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/20 bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
          <Megaphone size={16} />
        </span>
        <span className="inline-flex flex-wrap items-center justify-end gap-1.5 text-[11px] text-muted">
          <span className="inline-flex items-center gap-1">
            <CalendarDays size={12} className="text-brand" />
            {formatDate(item.createdAt, { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="text-muted/60">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} className="text-brand" />
            {formatTime(item.createdAt)} WIB
          </span>
        </span>
      </div>

      <Judul className="mt-3.5 line-clamp-2 text-[14px] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-brand sm:text-[15px]">
        <Link to={tautan}>
          {item.judul}
        </Link>
      </Judul>

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-line/70 pt-3.5">
        <span className="inline-flex items-center gap-1 text-[11px] text-muted">
          {item.fileUrl ? (
            <>
              <Paperclip size={12} className="text-brand" /> Dokumen lampiran
            </>
          ) : (
            <>
              <FileText size={12} className="text-muted" /> Surat edaran resmi
            </>
          )}
        </span>

        <Link
          to={tautan}
          className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand hover:underline"
        >
          Lihat <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
