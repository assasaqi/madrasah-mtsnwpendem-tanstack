import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Menampilkan deretan kartu berukuran tetap dengan gulir horizontal di semua ukuran layar
export default function CardRow({ children, ariaLabel, className = '' }) {
  const scrollerRef = useRef(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  // Memperbarui status tombol gulir berdasarkan posisi dan lebar konten
  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({
      left: el.scrollLeft > 4,
      right: max > 4 && el.scrollLeft < max - 4
    });
  }, []);

  useEffect(() => {
    sync();
    const el = scrollerRef.current;
    if (!el) return undefined;

    const observer = new ResizeObserver(sync);
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));
    window.addEventListener('resize', sync);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [sync, children]);

  // Menggeser deretan kartu sejauh satu layar penuh
  const geser = (arah) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: arah * Math.max(el.clientWidth * 0.8, 240),
      behavior: 'smooth'
    });
  };

  const tombolClass =
    'pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper text-ink/70 shadow-paper transition-colors hover:bg-[#faf8f3] hover:text-ink';

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={sync}
        className={`card-row ${className}`}
        role="list"
        aria-label={ariaLabel}
      >
        {children}
      </div>

      {(edges.left || edges.right) && (
        <div className="pointer-events-none absolute inset-y-0 -left-3 -right-3 hidden items-center justify-between sm:flex">
          {edges.left ? (
            <button
              type="button"
              onClick={() => geser(-1)}
              aria-label="Geser ke kiri"
              className={tombolClass}
            >
              <ChevronLeft size={15} />
            </button>
          ) : (
            <span />
          )}

          {edges.right ? (
            <button
              type="button"
              onClick={() => geser(1)}
              aria-label="Geser ke kanan"
              className={tombolClass}
            >
              <ChevronRight size={15} />
            </button>
          ) : (
            <span />
          )}
        </div>
      )}
    </div>
  );
}
