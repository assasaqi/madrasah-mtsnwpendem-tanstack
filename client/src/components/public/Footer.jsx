import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import useSchoolProfile from '../../hooks/useSchoolProfile';
import { getFileUrl } from '../../utils/helpers';

const TAUTAN = [
  { label: 'Berita', to: '/berita' },
  { label: 'Pengumuman', to: '/pengumuman' },
  { label: 'Agenda kegiatan', to: '/agenda' },
  { label: 'Prestasi', to: '/prestasi' }
];

const LAYANAN = [
  { label: 'Pusat unduhan', to: '/unduhan' },
  { label: 'Tanya jawab (FAQ)', to: '/faq' },
  { label: 'Portal akun SPMB', to: '/spmb/login' },
  { label: 'Masuk pengelola', to: '/login' }
];

// Menampilkan footer resmi madrasah yang hanya dipakai pada halaman publik
export default function Footer() {
  const { profil } = useSchoolProfile();
  const namaSekolah = profil?.namaSekolah || 'Madrasah';
  const logoSekolah = profil?.logo ? getFileUrl(profil.logo) : '';
  const tahun = new Date().getFullYear();

  const kontak = [
    profil?.telepon && { icon: Phone, value: profil.telepon, href: `tel:${profil.telepon}` },
    profil?.whatsapp && {
      icon: Phone,
      value: `WhatsApp ${profil.whatsapp}`,
      href: `https://wa.me/${String(profil.whatsapp).replace(/\D/g, '')}`
    },
    profil?.email && { icon: Mail, value: profil.email, href: `mailto:${profil.email}` }
  ].filter(Boolean);

  // Link lokasi (menggunakan mapsUrl jika tersedia, atau pencarian Google Maps otomatis)
  const mapsHref =
    profil?.mapsUrl ||
    (profil?.alamat ? `https://maps.google.com/?q=${encodeURIComponent(`${namaSekolah} ${profil.alamat}`)}` : null);

  return (
    <footer className="mt-16 border-t border-line bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-9 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-start gap-3">
            {logoSekolah ? (
              <img
                src={logoSekolah}
                alt={`Logo ${namaSekolah}`}
                className="h-10 w-10 shrink-0 object-contain"
              />
            ) : (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-line text-[14px] font-semibold text-brand">
                {namaSekolah.charAt(0).toUpperCase()}
              </span>
            )}
            <div className="min-w-0">
              <p className="text-[13px] font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-[14px]">
                {namaSekolah}
              </p>
              {profil?.npsn && (
                <p className="mt-0.5 text-[10.5px] uppercase tracking-[0.14em] text-muted">
                  NPSN {profil.npsn}
                </p>
              )}
            </div>
          </div>

          <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-muted">
            {profil?.tagline ||
              profil?.deskripsi ||
              'Informasi resmi kegiatan belajar, penerimaan peserta didik baru, dan kabar madrasah.'}
          </p>
        </div>

        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted">Tautan</p>
          <ul className="mt-3 space-y-2">
            {TAUTAN.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[11.5px] text-ink/70 transition-colors hover:text-brand sm:text-[12px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            Layanan
          </p>
          <ul className="mt-3 space-y-2">
            {LAYANAN.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[11.5px] text-ink/70 transition-colors hover:text-brand sm:text-[12px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted">
            Kontak &amp; lokasi
          </p>

          {kontak.length > 0 && (
            <ul className="mt-3 space-y-2.5">
              {kontak.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.value} className="flex items-start gap-2">
                    <Icon size={13} className="mt-0.5 shrink-0 text-muted" />
                    <a
                      href={item.href}
                      className="text-[11.5px] leading-relaxed text-ink/70 transition-colors hover:text-brand sm:text-[12px]"
                    >
                      {item.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Lokasi yang dapat diklik */}
          {mapsHref ? (
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-start gap-2 text-[11.5px] leading-relaxed text-ink/70 transition-colors hover:text-brand sm:text-[12px]"
            >
              <MapPin size={13} className="mt-0.5 shrink-0 text-muted" />
              <span>{profil?.alamat || 'Alamat madrasah belum diisi pada profil.'}</span>
              <ArrowUpRight size={12} className="mt-0.5 shrink-0" />
            </a>
          ) : (
            <p className="mt-3 flex items-start gap-2 text-[11.5px] leading-relaxed text-ink/70 sm:text-[12px]">
              <MapPin size={13} className="mt-0.5 shrink-0 text-muted" />
              <span>{profil?.alamat || 'Alamat madrasah belum diisi pada profil.'}</span>
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-4 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {tahun} {namaSekolah}. Seluruh hak cipta dilindungi.
          </p>
          <Link to="/spmb/login" className="font-medium text-ink/70 hover:text-brand">
            Portal SPMB
          </Link>
        </div>
      </div>
    </footer>
  );
}
