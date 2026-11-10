import { useMemo } from 'react';
import { useLocation } from '@tanstack/react-router';
import { UserRound } from 'lucide-react';
import { formatArticleHtml, getFileUrl } from '../../utils/helpers';
import { getFasilitasIcon } from '../../utils/fasilitasIcons';
import { susunBaganStruktur } from '../../utils/struktur';
import useSchoolProfile from '../../hooks/useSchoolProfile';
import PageHeader from '../../components/public/PageHeader';
import { Alert } from '../../components/ui';

const SECTION_META = {
  visi: {
    title: '',
    description: '',
    breadcrumb: 'Visi & Misi'
  },
  sejarah: {
    title: '',
    description: '',
    breadcrumb: 'Sejarah Singkat'
  },
  struktur: {
    title: 'Struktur Organisasi',
    description: 'Susunan kepemimpinan madrasah, dewan guru, komite sekolah, dan tenaga kependidikan.',
    breadcrumb: 'Struktur Organisasi'
  },
  fasilitas: {
    title: '',
    description: '',
    breadcrumb: 'Fasilitas Madrasah'
  }
};

// Menampilkan kartu pengurus dengan gambar full card (ukuran 70% lebih kompak)
function KartuStruktur({ item, isTop = false, compact = false }) {
  const foto = item.foto ? getFileUrl(item.foto) : '';
  const inisial = item.nama?.charAt(0).toUpperCase() || '?';

  return (
    <article
      className={`group relative overflow-hidden rounded-md sm:rounded-lg border bg-paper transition-all duration-200 w-full shadow-xs hover:shadow-md aspect-[3/4] ${
        isTop
          ? 'max-w-[91px] sm:max-w-[105px] mx-auto border-brand/50 ring-1 ring-brand/30'
          : compact
          ? 'max-w-[77px] sm:max-w-[91px] mx-auto border-line hover:border-brand/40'
          : 'max-w-[77px] sm:max-w-[91px] mx-auto border-line hover:border-brand/40'
      }`}
    >
      {/* Gambar Full Card */}
      {foto ? (
        <img
          src={foto}
          alt={item.nama}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#f1f5f9] to-[#e2e8f0] text-[#94a3b8]">
          <UserRound size={15} className="sm:w-5 sm:h-5 opacity-60" />
          <span className="mt-0.5 text-[7px] sm:text-[8.5px] font-bold text-ink/40">{inisial}</span>
        </div>
      )}

      {/* Info Nama & Jabatan di Bagian Bawah dengan Gradasi Halus */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-0.5 sm:p-1 text-left pt-3 sm:pt-3.5">
        <p
          className="text-[5.5px] sm:text-[6.5px] font-bold leading-[1.15] text-white drop-shadow-xs break-words"
          title={item.nama}
        >
          {item.nama}
        </p>
        <p
          className="mt-0.5 text-[4.5px] sm:text-[5.5px] font-semibold text-emerald-300 uppercase tracking-wider drop-shadow-xs leading-tight break-words"
          title={item.jabatan}
        >
          {item.jabatan}
        </p>
      </div>
    </article>
  );
}

// Menampilkan profil madrasah beserta visi, sejarah, struktur, dan fasilitas dari basis data
export default function Profil() {
  const location = useLocation();
  const { profil, loading, error } = useSchoolProfile();

  // Menentukan tab aktif berdasarkan rute URL atau query parameter
  const currentTab = useMemo(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/sejarah')) return 'sejarah';
    if (path.includes('/struktur')) return 'struktur';
    if (path.includes('/fasilitas')) return 'fasilitas';
    if (path.includes('/visi')) return 'visi';

    const searchParam = new URLSearchParams(location.search).get('tab');
    if (searchParam && ['visi', 'sejarah', 'struktur', 'fasilitas'].includes(searchParam)) {
      return searchParam;
    }

    return 'visi';
  }, [location.pathname, location.search]);

  const fasilitas = Array.isArray(profil?.fasilitas) ? profil.fasilitas : [];
  const misi = Array.isArray(profil?.misi) ? profil.misi : [];

  const {
    kamadItem,
    komiteItem,
    wakaSlots,
    tendikSlots,
    kepalaUnitSlots,
    waliSlots,
    guruSlots
  } = useMemo(() => susunBaganStruktur(profil?.struktur), [profil?.struktur]);

  const sejarahHtml = formatArticleHtml(profil?.sejarah || '');

  const visi = profil?.visi ? String(profil.visi).trim() : '';
  const isMisiRichHtml =
    misi.length === 1 && /<\/?(p|ol|ul|li|h[1-6]|strong|em|u|s|blockquote|br)\b/i.test(String(misi[0] || ''));
  const currentMeta = SECTION_META[currentTab] || SECTION_META.visi;

  return (
    <div className="pb-16">
      {/* Header Halaman Resmi Kemenag */}
      <PageHeader
        breadcrumbs={[{ label: 'Profil', to: '/profil' }, { label: currentMeta.breadcrumb || currentMeta.title }]}
        title={loading ? (['visi', 'sejarah', 'fasilitas'].includes(currentTab) ? '' : 'Memuat profil…') : currentMeta.title}
        description={currentMeta.description}
      />

      {/* Konten Utama Halaman Profil */}
      <main className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
        {error && (
          <div className="mb-6">
            <Alert tone="error">Data profil madrasah belum dapat dimuat. Coba muat ulang halaman ini.</Alert>
          </div>
        )}

        {loading ? (
          <div aria-label="Memuat profil madrasah" className="space-y-4">
            <div className="h-8 w-56 animate-pulse rounded-lg bg-line/70" />
            <div className="h-4 w-full max-w-xl animate-pulse rounded bg-line/60" />
            <div className="grid gap-4 sm:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="h-28 animate-pulse rounded-xl border border-line bg-paper" />
              ))}
            </div>
            <div className="h-64 animate-pulse rounded-xl border border-line bg-paper" />
          </div>
        ) : currentTab === 'visi' ? (
          /* Format Visi & Misi Tanpa Card (Dokumen Institusional Resmi) */
          <div className="max-w-4xl space-y-10">
            {/* Bagian Visi */}
            <section>
              <h2 className="text-[19px] font-bold text-ink sm:text-[22px]">
                Visi Madrasah
              </h2>
              {visi ? (
                <div className="mt-3">
                  <p className="text-[15px] leading-[1.8] text-ink/90 sm:text-[16px]">
                    &ldquo;{visi}&rdquo;
                  </p>
                </div>
              ) : (
                <p className="mt-4 text-[13px] text-muted">
                  Visi madrasah belum tersedia.
                </p>
              )}
            </section>

            {/* Bagian Misi */}
            <section className="pt-2">
              <h2 className="text-[19px] font-bold text-ink sm:text-[22px]">
                Misi Madrasah
              </h2>

              {misi.length > 0 ? (
                isMisiRichHtml ? (
                  <div
                    className="public-article mt-4 text-[15px] leading-[1.8] text-ink/90 sm:text-[16px]"
                    dangerouslySetInnerHTML={{ __html: formatArticleHtml(misi[0]) }}
                  />
                ) : (
                  <ol className="mt-4 space-y-3.5 text-[15px] leading-[1.8] text-ink/90 sm:text-[16px]">
                    {misi.map((item, index) => (
                      <li key={`${index}-${item}`} className="flex items-start gap-3">
                        <span className="font-bold text-brand shrink-0 select-none">
                          {index + 1}.
                        </span>
                        <p className="flex-1">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                )
              ) : (
                <p className="mt-4 text-[13px] text-muted">
                  Misi madrasah belum tersedia.
                </p>
              )}
            </section>
          </div>
        ) : currentTab === 'sejarah' ? (
          /* Format Sejarah Mengikuti Gaya Desain Visi & Misi */
          <div className="max-w-4xl space-y-10">
            <section>
              <h2 className="text-[19px] font-bold text-ink sm:text-[22px]">
                Sejarah Singkat
              </h2>

              {sejarahHtml ? (
                <div
                  className="public-article mt-4 text-[15px] leading-[1.8] text-ink/90 sm:text-[16px]"
                  dangerouslySetInnerHTML={{ __html: sejarahHtml }}
                />
              ) : (
                <p className="mt-4 text-[13px] text-muted">
                  Narasi sejarah madrasah belum tersedia.
                </p>
              )}
            </section>
          </div>
        ) : currentTab === 'struktur' ? (
          <div>
            <div className="flex flex-col items-center">
              {/* BARIS 1: KEPALA MADRASAH (TENGAH) ↔ KETUA KOMITE (GARIS KOORDINASI PUTUS-PUTUS) */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-md mx-auto">
                <div aria-hidden="true" />

                {/* Kepala Madrasah */}
                <div className="w-[91px] sm:w-[105px] flex flex-col items-center">
                  {kamadItem ? (
                    <KartuStruktur item={kamadItem} isTop />
                  ) : (
                    <div className="w-full aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                      <span className="text-[5.5px] sm:text-[7px] font-semibold text-muted">Kepala Madrasah</span>
                    </div>
                  )}
                </div>

                {/* Garis Koordinasi + Ketua Komite */}
                <div className="flex items-center">
                  <div className="w-4 sm:w-8 border-t-2 border-dashed border-slate-500/80 shrink-0" aria-hidden="true" />
                  <div className="w-[77px] sm:w-[91px] shrink-0">
                    {komiteItem ? (
                      <KartuStruktur item={komiteItem} />
                    ) : (
                      <div className="w-full aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                        <span className="text-[5.5px] sm:text-[7px] font-semibold text-muted">Ketua Komite</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Garis Komando Vertikal dari Kepala Madrasah ke Baris 2 */}
              <div className="mx-auto h-5 sm:h-7 w-[2px] bg-slate-500/80" aria-hidden="true" />

              {/* BARIS 2: WAKIL KEPALA MADRASAH, TENAGA KEPENDIDIKAN, & KEPALA LAB/PERPUS */}
              <div className="w-full overflow-x-auto no-scrollbar">
                <div className="mx-auto flex w-fit items-stretch">
                  {/* Cabang Kiri: Wakil Kepala Madrasah (4 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 py-5 sm:px-2 sm:py-6">
                    <div className="absolute top-0 left-1/2 right-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit flex-1 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Wakil Kepala Madrasah</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">Kurikulum, kesiswaan, sarpras, humas (4 waka)</p>
                      </div>

                      {/* Di mobile: 2 baris (2x2); di desktop: 1 baris (4 kolom) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-fit mx-auto">
                        {wakaSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `waka-slot-${idx}`} className="w-[72px] sm:w-[76px] md:w-[80px]">
                            {slot.item ? (
                              <KartuStruktur item={slot.item} compact />
                            ) : (
                              <div className="w-full aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                                <span className="text-[5px] sm:text-[6.5px] font-semibold text-muted break-words leading-tight">
                                  {slot.role}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute bottom-0 left-1/2 right-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                  </div>

                  {/* Cabang Tengah: Tenaga Kependidikan (4 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 py-5 sm:px-2 sm:py-6">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit flex-1 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Tenaga Kependidikan</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">Tata usaha, bendahara, operator, staf (4 staf)</p>
                      </div>

                      {/* Di mobile: 2 baris (2x2); di desktop: 1 baris (4 kolom) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-fit mx-auto">
                        {tendikSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `tendik-slot-${idx}`} className="w-[72px] sm:w-[76px] md:w-[80px]">
                            {slot.item ? (
                              <KartuStruktur item={slot.item} compact />
                            ) : (
                              <div className="w-full aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                                <span className="text-[5px] sm:text-[6.5px] font-semibold text-muted break-words leading-tight">
                                  {slot.role}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute bottom-0 inset-x-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                  </div>

                  {/* Cabang Kanan: Kepala Laboratorium & Perpustakaan (3 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 py-5 sm:px-2 sm:py-6">
                    <div className="absolute top-0 left-0 right-1/2 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit flex-1 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Kepala Laboratorium & Perpustakaan</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">Perpus, lab IPA, lab komputer (3 kepala)</p>
                      </div>

                      {/* Di mobile: 2 kolom; di desktop: 3 kolom */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 w-fit mx-auto">
                        {kepalaUnitSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `kepala-slot-${idx}`} className="w-[72px] sm:w-[76px] md:w-[80px]">
                            {slot.item ? (
                              <KartuStruktur item={slot.item} compact />
                            ) : (
                              <div className="w-full aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                                <span className="text-[5px] sm:text-[6.5px] font-semibold text-muted break-words leading-tight">
                                  {slot.role}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 right-1/2 h-[2px] bg-slate-500/80" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Garis Komando Vertikal dari Baris 2 ke Baris 3 */}
              <div className="mx-auto h-5 sm:h-7 w-[2px] bg-slate-500/80" aria-hidden="true" />

              {/* BARIS 3: WALI KELAS (6 CARD) & DEWAN GURU (15 CARD) */}
              <div className="w-full overflow-x-auto no-scrollbar pb-1">
                <div className="mx-auto flex w-fit items-start">
                  {/* Cabang Kiri: Wali Kelas (6 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 pt-5 sm:px-2 sm:pt-6">
                    <div className="absolute top-0 left-1/2 right-0 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit shrink-0 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Wali Kelas</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">6 rombongan belajar (Kelas 7, 8, dan 9)</p>
                      </div>

                      {/* Di mobile: 3 baris (3x2); di desktop: 2 baris (2x3) */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 w-fit mx-auto">
                        {waliSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `wali-slot-${idx}`} className="w-[72px] sm:w-[76px] md:w-[80px]">
                            {slot.item ? (
                              <KartuStruktur item={slot.item} compact />
                            ) : (
                              <div className="w-full aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                                <span className="text-[5px] sm:text-[6.5px] font-semibold text-muted break-words leading-tight">
                                  {slot.role}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cabang Kanan: Dewan Guru (15 Card Slots) */}
                  <div className="relative flex flex-col items-center px-1.5 pt-5 sm:px-2 sm:pt-6">
                    <div className="absolute top-0 left-0 right-1/2 h-[2px] bg-slate-500/80" aria-hidden="true" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-slate-500/80" aria-hidden="true" />
                    <span className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />

                    <div className="w-fit shrink-0 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                      <div className="border-b border-line pb-1.5 sm:pb-2">
                        <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Dewan Guru</h3>
                        <p className="text-[6px] sm:text-[7.5px] text-muted">Tenaga pendidik mata pelajaran (15 guru)</p>
                      </div>

                      {/* Di mobile & desktop: 3 baris (3x5 = 15 card) */}
                      <div className="grid grid-cols-5 gap-1 sm:gap-2 w-fit mx-auto">
                        {guruSlots.map((slot, idx) => (
                          <div key={slot.item?.id || `guru-slot-${idx}`} className="w-[52px] sm:w-[68px] md:w-[76px]">
                            {slot.item ? (
                              <KartuStruktur item={slot.item} compact />
                            ) : (
                              <div className="w-full aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                                <span className="text-[5px] sm:text-[6.5px] font-semibold text-muted break-words leading-tight">
                                  {slot.title}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keterangan Garis Hirarki */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[10.5px] sm:text-[11px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block w-5 border-t-2 border-slate-500/80" aria-hidden="true" />
                  Garis Komando
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block w-5 border-t-2 border-dashed border-slate-500/80" aria-hidden="true" />
                  Garis Koordinasi
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-[19px] font-bold text-ink sm:text-[22px]">
                Fasilitas Madrasah
              </h2>
              {fasilitas.length > 0 && (
                <span className="text-[11.5px] sm:text-[12.5px] text-muted font-medium">
                  {fasilitas.length} Fasilitas
                </span>
              )}
            </div>

            {fasilitas.length > 0 ? (
              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3">
                {fasilitas.map((item) => {
                  const Icon = getFasilitasIcon(item.ikon);
                  const gambar = item.gambar ? getFileUrl(item.gambar) : '';

                  return (
                    <article
                      key={item.id}
                      className="group flex flex-col overflow-hidden rounded-lg sm:rounded-xl border border-line bg-paper shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md w-full"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-canvas">
                        {gambar ? (
                          <img
                            src={gambar}
                            alt={item.nama}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-soft to-canvas text-brand">
                            <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                          </div>
                        )}
                        <span className="absolute left-1.5 top-1.5 sm:left-3 sm:top-3 flex h-5 w-5 sm:h-8 sm:w-8 items-center justify-center rounded sm:rounded-lg bg-paper/90 text-brand shadow-xs backdrop-blur-xs">
                          <Icon className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-2 sm:p-5">
                        <h3 className="text-[10px] font-bold leading-snug text-ink transition-colors group-hover:text-brand line-clamp-2 sm:text-[15.5px]">
                          {item.nama}
                        </h3>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <p className="mt-4 text-[13px] text-muted">
                Data fasilitas madrasah belum tersedia.
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
