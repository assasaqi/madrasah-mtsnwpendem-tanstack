// Menampilkan satu bidang input dengan label dan ikon opsional pada halaman autentikasi
export default function AuthField({
  id,
  label,
  hint,
  icon: Icon,
  trailing,
  className = '',
  ...props
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[11.5px] font-semibold text-ink/80">
          {label}
        </label>
        {hint && <span className="text-[10.5px] text-muted">{hint}</span>}
      </div>

      <div className="relative mt-1.5">
        {Icon && (
          <Icon
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
        )}
        <input
          id={id}
          className={[
            'w-full rounded-md border border-line bg-paper py-2.5 text-[12.5px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/10',
            Icon ? 'pl-9' : 'pl-3',
            trailing ? 'pr-10' : 'pr-3',
            className
          ].join(' ')}
          {...props}
        />
        {trailing}
      </div>
    </div>
  );
}
