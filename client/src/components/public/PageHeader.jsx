import { Link } from '@tanstack/react-router';
import { ChevronRight, Home } from 'lucide-react';

/**
 * PageHeader resmi portal madrasah (tanpa pill badge dekoratif):
 * - Breadcrumbs interaktif dengan ikon Home dan pemisah Chevron
 * - Judul utama yang tegas dan proporsional
 * - Garis aksen hijau khas Kemenag
 * - Ringkasan pengantar informatif
 */
export default function PageHeader({
  breadcrumbs = [],
  title,
  description,
  children
}) {
  return (
    <div className={`border-b border-line bg-gradient-to-b from-[#eaf3ec]/40 via-transparent to-transparent pt-5 sm:pt-6 ${title ? 'pb-7 sm:pb-9' : 'pb-5 sm:pb-6'}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Jalur navigasi" className="flex flex-wrap items-center gap-1.5 text-[11.5px] text-muted">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-muted transition-colors hover:text-brand"
          >
            <Home size={12} className="shrink-0" />
            <span>Beranda</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5">
              <ChevronRight size={11} className="text-muted/60" />
              {crumb.to ? (
                <Link to={crumb.to} className="transition-colors hover:text-brand">
                  {crumb.label}
                </Link>
              ) : (
                <span className="max-w-[200px] truncate font-medium text-ink/80 sm:max-w-xs">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Title Section (Bersih tanpa badge dekoratif) */}
        {title && (
          <div className="mt-4 max-w-3xl">
            <h1 className="text-[24px] font-bold leading-[1.2] tracking-[-0.025em] text-ink sm:text-[34px] lg:text-[38px]">
              {title}
            </h1>

            {description && (
              <p className="mt-3 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                {description}
              </p>
            )}
          </div>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
