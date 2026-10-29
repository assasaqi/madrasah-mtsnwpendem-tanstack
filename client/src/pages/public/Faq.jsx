import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ChevronDown, HelpCircle, MessageSquare, Search } from 'lucide-react';
import { faqService } from '../../services/faqService';
import { formatArticleHtml, stripHtml } from '../../utils/helpers';
import useSchoolProfile from '../../hooks/useSchoolProfile';
import PageHeader from '../../components/public/PageHeader';
import { Alert } from '../../components/ui';

// Menampilkan daftar tanya jawab umum dengan tampilan portal Kemenag
export default function Faq() {
  const { profil } = useSchoolProfile();
  const [daftar, setDaftar] = useState([]);
  const [kategoriAktif, setKategoriAktif] = useState('Semua');
  const [pencarian, setPencarian] = useState('');
  const [terbuka, setTerbuka] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const waNumber = profil?.whatsapp ? String(profil.whatsapp).replace(/\D/g, '') : '';
  const contactHref = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent('Assalamu’alaikum pihak madrasah, saya ingin bertanya informasi lebih lanjut.')}`
    : (profil?.email ? `mailto:${profil.email}` : (profil?.telepon ? `tel:${profil.telepon}` : null));

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setErrorMsg('');
      try {
        const data = await faqService.getPublic();
        if (masihAktif) setDaftar(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Gagal memuat FAQ:', error);
        if (masihAktif) {
          setDaftar([]);
          setErrorMsg('Tanya jawab (FAQ) belum dapat dimuat. Coba muat ulang halaman ini.');
        }
      } finally {
        if (masihAktif) setLoading(false);
      }
    };

    muat();

    return () => {
      masihAktif = false;
    };
  }, []);

  const daftarKategori = useMemo(() => {
    const kategori = daftar.map((item) => item.kategori).filter(Boolean);
    return ['Semua', ...new Set(kategori)];
  }, [daftar]);

  const tersaring = useMemo(() => {
    const kataKunci = pencarian.trim().toLowerCase();

    return daftar.filter((item) => {
      const cocokKategori = kategoriAktif === 'Semua' || item.kategori === kategoriAktif;
      const cocokPencarian =
        !kataKunci ||
        [item.pertanyaan, item.jawaban].some((nilai) =>
          String(nilai || '').toLowerCase().includes(kataKunci)
        );
      return cocokKategori && cocokPencarian;
    });
  }, [daftar, kategoriAktif, pencarian]);

  // Data terstruktur FAQPage untuk mesin pencari
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: tersaring.map((item) => ({
        '@type': 'Question',
        name: item.pertanyaan,
        acceptedAnswer: {
          '@type': 'Answer',
          text: stripHtml(item.jawaban)
        }
      }))
    }),
    [tersaring]
  );

  return (
    <div className="pb-16">
      {tersaring.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
          }}
        />
      )}

      {/* Header Halaman FAQ */}
      <PageHeader
        breadcrumbs={[{ label: 'Informasi', to: '/faq' }, { label: 'Tanya Jawab (FAQ)' }]}
        title="Tanya Jawab Seputar Madrasah"
        description="Jawaban resmi seputar pendaftaran SPMB, sistem belajar mengajar, kurikulum keagamaan, tata tertib, dan layanan madrasah."
      />

      <div className="mx-auto w-full max-w-4xl px-5 pt-8 sm:px-8">
        {/* Toolbar Kategori & Pencarian */}
        <div className="flex flex-col gap-4 rounded-xl border border-line bg-paper p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {daftarKategori.map((kategori) => (
              <button
                key={kategori}
                type="button"
                onClick={() => setKategoriAktif(kategori)}
                className={`rounded-lg px-3 py-1.5 text-[11.5px] font-semibold transition-all ${
                  kategoriAktif === kategori
                    ? 'bg-brand text-white shadow-xs'
                    : 'bg-canvas text-ink/75 hover:bg-brand-soft hover:text-brand'
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>

          <label className="flex w-full items-center gap-2 rounded-lg border border-line bg-canvas px-3.5 py-2 sm:w-72">
            <Search size={14} className="shrink-0 text-muted" />
            <input
              type="search"
              value={pencarian}
              onChange={(event) => setPencarian(event.target.value)}
              placeholder="Cari pertanyaan umum..."
              className="w-full bg-transparent text-[12.5px] text-ink outline-none placeholder:text-muted/70"
            />
          </label>
        </div>

        {/* Daftar Akordeon Pertanyaan */}
        {loading ? (
          <div className="mt-6 space-y-3">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="h-16 animate-pulse rounded-xl border border-line bg-paper" />
            ))}
          </div>
        ) : errorMsg ? (
          <div className="mt-6">
            <Alert tone="error">{errorMsg}</Alert>
          </div>
        ) : tersaring.length > 0 ? (
          <div className="mt-6 space-y-3">
            {tersaring.map((item) => {
              const aktif = terbuka === item.id;

              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-line bg-paper shadow-xs transition-colors hover:border-brand/40"
                >
                  <button
                    type="button"
                    onClick={() => setTerbuka(aktif ? null : item.id)}
                    aria-expanded={aktif}
                    className="flex w-full items-start justify-between gap-4 p-4 text-left sm:p-5"
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-brand">
                        {item.kategori || 'Umum'}
                      </p>
                      <h3 className="mt-1 text-[14.5px] font-bold leading-snug text-ink sm:text-[15.5px]">
                        {item.pertanyaan}
                      </h3>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`mt-1 shrink-0 text-muted transition-transform duration-200 ${
                        aktif ? 'rotate-180 text-brand' : ''
                      }`}
                    />
                  </button>

                  {aktif && (
                    <div className="border-t border-line/70 bg-[#faf8f3]/60 p-4 sm:p-5">
                      <div
                        className="public-article text-[14px] leading-relaxed text-ink/85"
                        dangerouslySetInnerHTML={{ __html: formatArticleHtml(item.jawaban) }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-6 text-[13px] text-muted">
            {daftar.length === 0
              ? 'Data tanya jawab (FAQ) madrasah belum tersedia.'
              : 'Tidak ada pertanyaan yang sesuai dengan kata kunci pencarian.'}
          </p>
        )}

        {/* Kartu Bantuan / Hubungi Madrasah */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand/20 bg-gradient-to-r from-brand-soft/60 to-brand-soft/20 p-5 sm:flex-row sm:items-center sm:p-6 shadow-xs">
          <div className="flex items-start gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
              <MessageSquare size={20} />
            </span>
            <div>
              <p className="text-[14.5px] font-bold text-ink">Punya Pertanyaan Lain?</p>
              <p className="mt-0.5 text-[12px] text-muted">
                Hubungi panitia atau pihak madrasah secara langsung melalui saluran kontak resmi.
              </p>
            </div>
          </div>
          {contactHref ? (
            <a
              href={contactHref}
              target={waNumber ? '_blank' : undefined}
              rel={waNumber ? 'noopener noreferrer' : undefined}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0b331c]"
            >
              Hubungi Madrasah <ArrowRight size={14} />
            </a>
          ) : (
            <span className="text-[12px] text-muted">Saluran kontak tersedia di footer</span>
          )}
        </div>
      </div>
    </div>
  );
}
