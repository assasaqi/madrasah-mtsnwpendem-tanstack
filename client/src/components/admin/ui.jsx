import { useEffect } from 'react';
import { X, Search, Loader2, Inbox, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const cx = (...parts) => parts.filter(Boolean).join(' ');

const BUTTON_VARIANTS = {
  primary: 'border border-transparent bg-brand text-[#f8f6ef] hover:bg-[#0f3f23]',
  secondary: 'border border-line bg-paper text-ink hover:border-[#cfc9bc] hover:bg-[#faf8f3]',
  ghost: 'border border-transparent text-muted hover:bg-[#efece4] hover:text-ink',
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
    'inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25 disabled:pointer-events-none disabled:opacity-50',
    BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.secondary,
    BUTTON_SIZES[size] || BUTTON_SIZES.md,
    className
  );

export function Button({ variant = 'secondary', size = 'md', icon: Icon, className, children, ...props }) {
  return (
    <button className={buttonClass(variant, size, className)} {...props}>
      {Icon && <Icon size={size === 'sm' ? 13 : 15} />}
      {children}
    </button>
  );
}

export function IconButton({ label, tone = 'default', className, children, ...props }) {
  const tones = {
    default: 'text-muted hover:bg-[#efece4] hover:text-ink',
    brand: 'text-brand hover:bg-brand-soft',
    danger: 'text-rose-600 hover:bg-rose-50'
  };

  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className={cx(
        'inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25',
        tones[tone] || tones.default,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function PageHeader({ title, description, actions }) {
  return (
    <header className="flex flex-col gap-5 border-b border-line pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        <h1 className="text-[25px] font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[30px]">
          {title}
        </h1>
        {description && (
          <p className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed text-muted">{description}</p>
        )}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}

export function Panel({ className, children, ...props }) {
  return (
    <section className={cx('rounded-xl border border-line bg-paper shadow-paper', className)} {...props}>
      {children}
    </section>
  );
}

export function PanelHeader({ title, description, actions, className }) {
  return (
    <div className={cx('flex flex-wrap items-start justify-between gap-3 border-b border-line px-4 py-3.5', className)}>
      <div className="min-w-0">
        <h2 className="text-[13px] font-semibold text-ink">{title}</h2>
        {description && <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function SectionTitle({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-2.5 border-b border-line px-4 py-3.5">
      {Icon && <Icon size={16} className="mt-0.5 text-brand" />}
      <div>
        <h2 className="text-[13px] font-semibold text-ink">{title}</h2>
        {description && <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">{description}</p>}
      </div>
    </div>
  );
}

export function Toolbar({ children, className }) {
  return (
    <div className={cx('flex flex-col gap-3 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between', className)}>
      {children}
    </div>
  );
}

export function SearchInput({ value, onChange, placeholder = 'Cari…', className }) {
  return (
    <div className={cx('relative w-full sm:max-w-sm', className)}>
      <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#a9a396]" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-9 w-full rounded-lg border border-line bg-paper pl-9 pr-3 text-[12.5px] text-ink placeholder:text-[#a9a396] transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}

export function FilterTabs({ options, value, onChange, className }) {
  return (
    <div className={cx('admin-scroll flex items-center gap-0.5 overflow-x-auto', className)}>
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={cx(
              'relative whitespace-nowrap px-2.5 py-2 text-[12px] transition-colors',
              active ? 'font-semibold text-ink' : 'font-medium text-muted hover:text-ink'
            )}
          >
            {option.label}
            {typeof option.count === 'number' && (
              <span className="ml-1.5 text-[10.5px] tabular text-[#a9a396]">{option.count}</span>
            )}
            {active && <span className="absolute inset-x-1.5 -bottom-px h-[2px] rounded-full bg-brand" />}
          </button>
        );
      })}
    </div>
  );
}

export function Table({ children, className }) {
  return <table className={cx('w-full border-collapse text-left', className)}>{children}</table>;
}

export function Th({ children, align = 'left', className }) {
  return (
    <th
      className={cx(
        'whitespace-nowrap border-b border-line bg-[#faf8f3] px-2.5 py-2 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-muted sm:px-4 sm:py-2.5 sm:text-[10px] sm:tracking-[0.14em]',
        align === 'right' && 'text-right',
        align === 'center' && 'text-center',
        className
      )}
    >
      {children}
    </th>
  );
}

export function Td({ children, align = 'left', className }) {
  return (
    <td
      className={cx(
        'border-b border-line/70 px-2.5 py-2 align-middle text-[10.5px] text-ink/90 sm:px-4 sm:py-3 sm:text-[12.5px]',
        align === 'right' && 'text-right',
        align === 'center' && 'text-center',
        className
      )}
    >
      {children}
    </td>
  );
}

export function EmptyRow({ colSpan, title = 'Belum ada data', description, icon: Icon = Inbox }) {
  return (
    <tr>
      <td colSpan={colSpan} className="px-4 py-14">
        <div className="mx-auto flex max-w-sm flex-col items-center gap-2 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-[#faf8f3] text-[#b3ac9d]">
            <Icon size={18} />
          </span>
          <p className="text-[12.5px] font-semibold text-ink">{title}</p>
          {description && <p className="text-[11.5px] leading-relaxed text-muted">{description}</p>}
        </div>
      </td>
    </tr>
  );
}

export function EmptyState({ title = 'Belum ada data', description, icon: Icon = Inbox, action }) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-16 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[#faf8f3] text-[#b3ac9d]">
        <Icon size={20} />
      </span>
      <p className="text-[13px] font-semibold text-ink">{title}</p>
      {description && <p className="max-w-sm text-[11.5px] leading-relaxed text-muted">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export function Loader({ label = 'Memuat data…' }) {
  return (
    <div className="flex items-center justify-center gap-2 py-16 text-muted">
      <Loader2 className="animate-spin" size={15} />
      <span className="text-[12px]">{label}</span>
    </div>
  );
}

export function Alert({ tone = 'success', children, onClose }) {
  const error = tone === 'error';
  const Icon = error ? AlertTriangle : CheckCircle2;

  return (
    <div
      className={cx(
        'flex items-start gap-2.5 rounded-lg border border-line border-l-2 px-3.5 py-2.5 text-[12px] leading-relaxed',
        error ? 'border-l-rose-500 bg-rose-50/70 text-rose-800' : 'border-l-brand bg-brand-soft text-[#124426]'
      )}
    >
      <Icon size={14} className="mt-0.5 shrink-0" />
      <div className="flex-1">{children}</div>
      {onClose && (
        <button type="button" onClick={onClose} className="shrink-0 opacity-60 hover:opacity-100">
          <X size={13} />
        </button>
      )}
    </div>
  );
}

export const TONES = {
  amber: { dot: 'bg-[#c98a2e]', text: 'text-[#8a5a12]' },
  brand: { dot: 'bg-brand', text: 'text-brand' },
  blue: { dot: 'bg-[#3b62a8]', text: 'text-[#2f4f88]' },
  rose: { dot: 'bg-rose-500', text: 'text-rose-700' },
  stone: { dot: 'bg-[#a8a294]', text: 'text-muted' }
};

export function StatusDot({ tone = 'stone', children }) {
  const palette = TONES[tone] || TONES.stone;

  return (
    <span className={cx('inline-flex items-center gap-1 whitespace-nowrap text-[10.5px] font-medium sm:gap-1.5 sm:text-[11.5px]', palette.text)}>
      <span className={cx('h-1.5 w-1.5 rounded-full', palette.dot)} />
      {children}
    </span>
  );
}

export function Tag({ children, className }) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded border border-line bg-[#f7f5ef] px-1.5 py-0.5 text-[9.5px] font-medium text-muted sm:text-[10.5px]',
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatStrip({ children, className }) {
  return (
    <div
      className={cx(
        'grid grid-cols-2 divide-y divide-line overflow-hidden rounded-xl border border-line bg-paper shadow-paper sm:grid-cols-4 sm:divide-x sm:divide-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}

export function Stat({ label, value, hint, tone = 'ink' }) {
  const tones = {
    ink: 'text-ink',
    brand: 'text-brand',
    amber: 'text-[#8a5a12]',
    blue: 'text-[#2f4f88]',
    rose: 'text-rose-700'
  };

  return (
    <div className="px-4 py-4 sm:px-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className={cx('mt-1.5 text-[25px] font-semibold leading-none tracking-[-0.02em] tabular sm:text-[27px]', tones[tone] || tones.ink)}>{value}</p>
      {hint && <p className="mt-1.5 text-[11px] text-muted">{hint}</p>}
    </div>
  );
}

export const controlClass =
  'w-full rounded-lg border border-line bg-paper px-3 py-2 text-[12.5px] text-ink placeholder:text-[#a9a396] transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 disabled:bg-[#f5f3ee] disabled:text-muted';

export function Field({ label, hint, required, htmlFor, children, className }) {
  return (
    <div className={cx('space-y-1.5', className)}>
      {label && (
        <label htmlFor={htmlFor} className="flex items-center gap-1 text-[11.5px] font-semibold text-ink/80">
          {label}
          {required && <span className="text-rose-600">*</span>}
        </label>
      )}
      {children}
      {hint && <p className="text-[10.5px] leading-relaxed text-muted">{hint}</p>}
    </div>
  );
}

export function Input({ className, ...props }) {
  return <input className={cx(controlClass, className)} {...props} />;
}

export function Textarea({ className, ...props }) {
  return <textarea className={cx(controlClass, 'leading-relaxed', className)} {...props} />;
}

export function Select({ className, children, ...props }) {
  return (
    <select className={cx(controlClass, 'appearance-none bg-paper pr-8', className)} {...props}>
      {children}
    </select>
  );
}

export function Modal({ open, onClose, title, description, children, footer, size = 'md' }) {
  const sizes = {
    sm: 'sm:max-w-md',
    md: 'sm:max-w-xl',
    lg: 'sm:max-w-3xl',
    xl: 'sm:max-w-5xl'
  };

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#1c1b17]/45 backdrop-blur-[2px] sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <div
        className={cx(
          'flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl border border-line bg-paper shadow-float sm:rounded-xl',
          sizes[size] || sizes.md
        )}
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <h2 className="text-[17px] font-semibold leading-tight tracking-[-0.01em] text-ink sm:text-[19px]">{title}</h2>
            {description && <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{description}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 -mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-[#efece4] hover:text-ink"
            aria-label="Tutup"
          >
            <X size={17} />
          </button>
        </header>

        <div className="no-scrollbar flex-1 overflow-y-auto px-4 py-4 sm:px-5">{children}</div>

        {footer && (
          <footer className="flex flex-col-reverse items-stretch gap-2 border-t border-line bg-[#faf8f3] px-4 py-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:px-5 [&>*]:w-full sm:[&>*]:w-auto">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}
