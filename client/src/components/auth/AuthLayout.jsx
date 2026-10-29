import { Link } from '@tanstack/react-router';
import useSchoolProfile from '../../hooks/useSchoolProfile';
import { getFileUrl } from '../../utils/helpers';

// Membungkus halaman masuk dan daftar dengan identitas madrasah dari basis data
export default function AuthLayout({
  title,
  description,
  panelTitle,
  panelDescription,
  points = [],
  children
}) {
  const { profil } = useSchoolProfile();
  const namaSekolah = profil?.namaSekolah || 'Madrasah';
  const npsn = profil?.npsn || '';
  const logo = profil?.logo ? getFileUrl(profil.logo) : '';
  const tahun = new Date().getFullYear();
  const kontak = [
    profil?.alamat,
    profil?.email,
    profil?.whatsapp ? `WA ${profil.whatsapp}` : ''
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink lg:grid lg:grid-cols-2">
      <aside className="hidden flex-col justify-between bg-[#14211a] px-10 py-12 text-[#e9e5d8] lg:flex xl:px-16">
        <div className="flex items-center gap-3">
          {logo ? (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#f4f1e7] p-1">
              <img src={logo} alt={`Logo ${namaSekolah}`} className="h-full w-full object-contain" />
            </span>
          ) : (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#3a4b3f] text-[15px] font-semibold text-[#dfe6da]">
              {namaSekolah.charAt(0).toUpperCase()}
            </span>
          )}
          <div className="min-w-0">
            <p className="truncate text-[13.5px] font-semibold leading-tight text-[#f4f1e7]">
              {namaSekolah}
            </p>
            <p className="mt-1 text-[9.5px] uppercase tracking-[0.16em] text-[#93a397]">
              {npsn ? `NPSN ${npsn}` : 'Portal resmi madrasah'}
            </p>
          </div>
        </div>

        <div className="max-w-lg py-14">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#9fb3a5]">
            Portal resmi madrasah
          </p>
          <h2 className="mt-3 text-[27px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#f4f1e7]">
            {panelTitle}
          </h2>
          <p className="mt-3 text-[12.5px] leading-relaxed text-[#b9c6bb]">{panelDescription}</p>

          {points.length > 0 && (
            <ul className="mt-8 space-y-3.5">
              {points.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#3a4b3f] text-[9.5px] font-semibold text-[#a9b8ac]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[12px] leading-relaxed text-[#cfd9cf]">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-1.5 text-[11px] leading-relaxed text-[#93a397]">
          {kontak.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <p className="pt-3 text-[10px] text-[#6f8073]">
            © {tahun} {namaSekolah}
          </p>
        </div>
      </aside>

      <main className="flex min-h-screen flex-col justify-center px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto w-full max-w-[368px]">
          <div className="mb-8 flex items-center justify-between gap-3 lg:hidden">
            <div className="flex min-w-0 items-center gap-2.5">
              {logo ? (
                <img
                  src={logo}
                  alt={`Logo ${namaSekolah}`}
                  className="h-9 w-9 shrink-0 object-contain"
                />
              ) : (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-line text-[13px] font-semibold text-brand">
                  {namaSekolah.charAt(0).toUpperCase()}
                </span>
              )}
              <div className="min-w-0">
                <p className="truncate text-[12.5px] font-semibold leading-tight text-ink">
                  {namaSekolah}
                </p>
                <p className="mt-0.5 truncate text-[9px] uppercase tracking-[0.16em] text-muted">
                  {npsn ? `NPSN ${npsn}` : 'Portal resmi madrasah'}
                </p>
              </div>
            </div>
            <Link
              to="/"
              className="shrink-0 text-[10.5px] font-medium text-muted transition-colors hover:text-brand"
            >
              Beranda
            </Link>
          </div>

          <Link
            to="/"
            className="hidden items-center gap-1 text-[10.5px] font-medium text-muted transition-colors hover:text-brand lg:inline-flex"
          >
            ← Kembali ke beranda
          </Link>

          <h1 className="mt-6 text-[26px] font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[30px] lg:mt-8">
            {title}
          </h1>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{description}</p>

          <div className="mt-7 rounded-lg border border-line bg-paper p-5 shadow-paper sm:p-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
