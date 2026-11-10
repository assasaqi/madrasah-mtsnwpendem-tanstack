export const cx = (...parts) => parts.filter(Boolean).join(' ');

const BUTTON_VARIANTS = {
  primary: 'border border-transparent bg-brand text-white hover:bg-[#065f46]',
  secondary: 'border border-line bg-paper text-ink hover:border-[#cbd5e1] hover:bg-[#f8fafc]',
  ghost: 'border border-transparent text-muted hover:bg-[#f1f5f9] hover:text-ink',
  danger: 'border border-line bg-paper text-rose-700 hover:border-rose-200 hover:bg-rose-50',
  solidDanger: 'border border-transparent bg-rose-700 text-white hover:bg-rose-800'
};

const BUTTON_SIZES = {
  sm: 'h-8 px-2.5 text-[11.5px]',
  md: 'h-9 px-3.5 text-[12px]',
  lg: 'h-10 px-4 text-[12.5px]'
};

// Menyusun kelas tombol agar seluruh tombol admin konsisten
export const buttonClass = (variant = 'secondary', size = 'md', className) =>
  cx(
    'inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold transition-all duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
    BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.secondary,
    BUTTON_SIZES[size] || BUTTON_SIZES.md,
    className
  );
