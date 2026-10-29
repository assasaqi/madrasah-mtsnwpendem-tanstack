import { useMemo } from 'react';
import { useLocation } from '@tanstack/react-router';
import { UserRound } from 'lucide-react';
import { getFileUrl } from '../../utils/helpers';
import { getFasilitasIcon } from '../../utils/fasilitasIcons';
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
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#f5f2eb] to-[#e6e0d2] text-[#b3ab98]">
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
          className="mt-0.5 text-[4.5px] sm:text-[5.5px] font-semibold text-[#8bf0ba] uppercase tracking-wider drop-shadow-xs leading-tight break-words"
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

  const struktur = Array.isArray(profil?.struktur) ? profil.struktur : [];
  const fasilitas = Array.isArray(profil?.fasilitas) ? profil.fasilitas : [];
  const misi = Array.isArray(profil?.misi) ? profil.misi : [];

  // Penetapan susunan bagan organisasi
  const kamadItem = struktur.find((i) =>
    /kepala\s*madrasah|kamad/i.test(i.jabatan || '') ||
    (/kepala/i.test(i.jabatan || '') && !/tata\s*usaha|tu/i.test(i.jabatan || ''))
  );
  const komiteItem = struktur.find((i) => /komite/i.test(i.jabatan || ''));

  const assignedIds = new Set([kamadItem?.id, komiteItem?.id].filter(Boolean));

  // BARIS 2 KIRI: 4 SLOT WAKA (Kurikulum, Kesiswaan, Sarpras, Humas)
  const wakaItems = struktur.filter(
    (i) => !assignedIds.has(i.id) && /waka|wakil/i.test(i.jabatan || '')
  );
  wakaItems.forEach((i) => assignedIds.add(i.id));

  const wakaKurikulum = wakaItems.find((i) =>
    /kurikulum|kumer|akademik/i.test(i.jabatan || '')
  );
  const wakaKesiswaan = wakaItems.find((i) =>
    /kesiswaan/i.test(i.jabatan || '')
  );
  const wakaSarpras = wakaItems.find((i) =>
    /sarpras|sarana/i.test(i.jabatan || '')
  );
  const wakaHumas = wakaItems.find((i) =>
    /humas/i.test(i.jabatan || '')
  );

  const matchedWakaIds = new Set(
    [wakaKurikulum?.id, wakaKesiswaan?.id, wakaSarpras?.id, wakaHumas?.id].filter(Boolean)
  );
  const unassignedWaka = wakaItems.filter((i) => !matchedWakaIds.has(i.id));

  const slotWaka1 = wakaKurikulum || unassignedWaka.shift() || null;
  const slotWaka2 = wakaKesiswaan || unassignedWaka.shift() || null;
  const slotWaka3 = wakaSarpras || unassignedWaka.shift() || null;
  const slotWaka4 = wakaHumas || unassignedWaka.shift() || null;

  const wakaSlots = [
    { role: 'WAKA KURIKULUM', item: slotWaka1 },
    { role: 'WAKA KESISWAAN', item: slotWaka2 },
    { role: 'WAKA SARPRAS', item: slotWaka3 },
    { role: 'WAKA HUMAS', item: slotWaka4 },
    ...unassignedWaka.map((item, idx) => ({ role: item.jabatan || `WAKA ${idx + 5}`, item }))
  ];

  // BARIS 2 KANAN: 4 SLOT TENAGA KEPENDIDIKAN (Kepala TU, Bendahara, Operator, Staf TU)
  const tendikItems = struktur.filter(
    (i) =>
      !assignedIds.has(i.id) &&
      /tata\s*usaha|tu|operator|ops|bendahara|tenaga\s*kependidikan|tendik|staf|staff|administrasi|admin/i.test(
        i.jabatan || ''
      )
  );
  tendikItems.forEach((i) => assignedIds.add(i.id));

  const tendikKaTU = tendikItems.find((i) =>
    /kepala\s*tata\s*usaha|ka\.?\s*tu|kepala\s*tu|ktu/i.test(i.jabatan || '')
  );
  const tendikBendahara = tendikItems.find((i) =>
    /bendahara/i.test(i.jabatan || '')
  );
  const tendikOperator = tendikItems.find((i) =>
    /operator|ops/i.test(i.jabatan || '')
  );
  const tendikStaf = tendikItems.find(
    (i) =>
      i.id !== tendikKaTU?.id &&
      i.id !== tendikBendahara?.id &&
      i.id !== tendikOperator?.id &&
      /staf|staff|administrasi|admin|tata\s*usaha|tu|tenaga\s*kependidikan/i.test(i.jabatan || '')
  );

  const matchedTendikIds = new Set(
    [tendikKaTU?.id, tendikBendahara?.id, tendikOperator?.id, tendikStaf?.id].filter(Boolean)
  );
  const unassignedTendik = tendikItems.filter((i) => !matchedTendikIds.has(i.id));

  const slotTendik1 = tendikKaTU || unassignedTendik.shift() || null;
  const slotTendik2 = tendikBendahara || unassignedTendik.shift() || null;
  const slotTendik3 = tendikOperator || unassignedTendik.shift() || null;
  const slotTendik4 = tendikStaf || unassignedTendik.shift() || null;

  const tendikSlots = [
    { role: 'KEPALA TATA USAHA', item: slotTendik1 },
    { role: 'BENDAHARA', item: slotTendik2 },
    { role: 'OPERATOR', item: slotTendik3 },
    { role: 'STAF TATA USAHA', item: slotTendik4 },
    ...unassignedTendik.map((item, idx) => ({ role: item.jabatan || `STAF ${idx + 5}`, item }))
  ];

  // BARIS 3 KIRI: 6 SLOT WALI KELAS (7A, 7B, 8A, 8B, 9A, 9B)
  const waliItems = struktur.filter(
    (i) => !assignedIds.has(i.id) && /wali/i.test(i.jabatan || '')
  );
  waliItems.forEach((i) => assignedIds.add(i.id));

  const wali7A = waliItems.find((i) => /7\s*[-._]?\s*a|vii\s*[-._]?\s*a/i.test(i.jabatan || ''));
  const wali7B = waliItems.find((i) => /7\s*[-._]?\s*b|vii\s*[-._]?\s*b/i.test(i.jabatan || ''));
  const wali8A = waliItems.find((i) => /8\s*[-._]?\s*a|viii\s*[-._]?\s*a/i.test(i.jabatan || ''));
  const wali8B = waliItems.find((i) => /8\s*[-._]?\s*b|viii\s*[-._]?\s*b/i.test(i.jabatan || ''));
  const wali9A = waliItems.find((i) => /9\s*[-._]?\s*a|ix\s*[-._]?\s*a/i.test(i.jabatan || ''));
  const wali9B = waliItems.find((i) => /9\s*[-._]?\s*b|ix\s*[-._]?\s*b/i.test(i.jabatan || ''));

  const matchedWaliIds = new Set(
    [wali7A?.id, wali7B?.id, wali8A?.id, wali8B?.id, wali9A?.id, wali9B?.id].filter(Boolean)
  );
  const unassignedWali = waliItems.filter((i) => !matchedWaliIds.has(i.id));

  const slotWali1 = wali7A || unassignedWali.shift() || null;
  const slotWali2 = wali7B || unassignedWali.shift() || null;
  const slotWali3 = wali8A || unassignedWali.shift() || null;
  const slotWali4 = wali8B || unassignedWali.shift() || null;
  const slotWali5 = wali9A || unassignedWali.shift() || null;
  const slotWali6 = wali9B || unassignedWali.shift() || null;

  const waliSlots = [
    { role: 'WALI KELAS 7A', item: slotWali1 },
    { role: 'WALI KELAS 7B', item: slotWali2 },
    { role: 'WALI KELAS 8A', item: slotWali3 },
    { role: 'WALI KELAS 8B', item: slotWali4 },
    { role: 'WALI KELAS 9A', item: slotWali5 },
    { role: 'WALI KELAS 9B', item: slotWali6 },
    ...unassignedWali.map((item, idx) => ({ role: item.jabatan || `WALI KELAS ${idx + 7}`, item }))
  ];

  // BARIS 3 KANAN: 15 SLOT DEWAN GURU
  const guruItems = struktur.filter((i) => !assignedIds.has(i.id));

  const guruSlots = Array.from({ length: Math.max(15, guruItems.length) }).map((_, idx) => ({
    role: 'GURU',
    title: `Guru ${idx + 1}`,
    item: guruItems[idx] || null
  }));

  const paragrafSejarah = String(profil?.sejarah || '')
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

  const visi = profil?.visi ? String(profil.visi).trim() : '';
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

              {paragrafSejarah.length > 0 ? (
                <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-ink/90 sm:text-[16px]">
                  {paragrafSejarah.map((paragraf, index) => (
                    <p key={index}>
                      {paragraf}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-[13px] text-muted">
                  Narasi sejarah madrasah belum tersedia.
                </p>
              )}
            </section>
          </div>
        ) : currentTab === 'struktur' ? (
          <div>
            <div className="space-y-6 sm:space-y-8">
              {/* BARIS 1: KEPALA MADRASAH & KETUA KOMITE (BERDAMPINGAN 2 KOLOM, UKURAN 70% KOMPAK) */}
              <div className="flex flex-col items-center w-full">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-[210px] sm:max-w-[260px] mx-auto items-center">
                  {/* Kepala Madrasah */}
                  <div className="flex flex-col items-center w-full">
                    {kamadItem ? (
                      <KartuStruktur item={kamadItem} isTop />
                    ) : (
                      <div className="w-full max-w-[91px] sm:max-w-[105px] mx-auto aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                        <span className="text-[5.5px] sm:text-[7px] font-semibold text-muted">Kepala Madrasah</span>
                      </div>
                    )}
                  </div>

                  {/* Ketua Komite */}
                  <div className="flex flex-col items-center w-full">
                    {komiteItem ? (
                      <KartuStruktur item={komiteItem} />
                    ) : (
                      <div className="w-full max-w-[77px] sm:max-w-[91px] mx-auto aspect-[3/4] rounded-md sm:rounded-lg border border-dashed border-line bg-canvas/40 p-1 flex flex-col items-center justify-center text-center">
                        <span className="text-[5.5px] sm:text-[7px] font-semibold text-muted">Ketua Komite</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Garis Vertikal Penghubung ke Baris 2 */}
                <div className="my-1.5 sm:my-3 h-3 sm:h-4 w-0.5 bg-line" />
              </div>

              {/* BARIS 2: WAKIL KEPALA MADRASAH (4 CARD) & TENAGA KEPENDIDIKAN (4 CARD) */}
              {/* Di mobile version: kedua container sejajar dengan gulir ke kanan (no scrollbar) */}
              <div className="flex sm:justify-center items-start gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar w-full pb-1">
                {/* Sisi Kiri: Wakil Kepala Madrasah (4 Card Slots) */}
                <div className="w-fit shrink-0 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                  <div className="border-b border-line pb-1.5 sm:pb-2">
                    <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Wakil Kepala Madrasah</h3>
                    <p className="text-[6px] sm:text-[7.5px] text-muted">Kurikulum, kesiswaan, sarpras, humas (4 waka)</p>
                  </div>

                  {/* Di mobile: 2 baris (2x2); di desktop: 1 baris (4 kolom) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-fit mx-auto">
                    {wakaSlots.map((slot, idx) => (
                      <div key={slot.item?.id || `waka-slot-${idx}`} className="w-[72px] sm:w-[80px] md:w-[86px]">
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

                {/* Sisi Kanan: Tenaga Kependidikan (4 Card Slots) */}
                <div className="w-fit shrink-0 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                  <div className="border-b border-line pb-1.5 sm:pb-2">
                    <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Tenaga Kependidikan</h3>
                    <p className="text-[6px] sm:text-[7.5px] text-muted">Tata usaha, bendahara, operator, staf (4 staf)</p>
                  </div>

                  {/* Di mobile: 2 baris (2x2); di desktop: 1 baris (4 kolom) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-fit mx-auto">
                    {tendikSlots.map((slot, idx) => (
                      <div key={slot.item?.id || `tendik-slot-${idx}`} className="w-[72px] sm:w-[80px] md:w-[86px]">
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

              {/* Garis Vertikal Penghubung ke Baris 3 */}
              <div className="my-1.5 sm:my-3 mx-auto h-3 sm:h-4 w-0.5 bg-line" />

              {/* BARIS 3: WALI KELAS (6 CARD) & DEWAN GURU (15 CARD) JADI SATU BARIS */}
              {/* Di mobile version: kedua container sejajar dengan gulir ke kanan (no scrollbar) */}
              <div className="flex sm:justify-center items-start gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar w-full pb-1">
                {/* Sisi Kiri: Wali Kelas (6 Card Slots) */}
                <div className="w-fit shrink-0 rounded-lg sm:rounded-xl border border-line bg-paper p-2 sm:p-3 shadow-xs space-y-2">
                  <div className="border-b border-line pb-1.5 sm:pb-2">
                    <h3 className="text-[8px] sm:text-[9.5px] font-bold text-ink">Wali Kelas</h3>
                    <p className="text-[6px] sm:text-[7.5px] text-muted">6 rombongan belajar (Kelas 7, 8, dan 9)</p>
                  </div>

                  {/* Di mobile: 3 baris (3x2); di desktop: 2 baris (2x3) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 w-fit mx-auto">
                    {waliSlots.map((slot, idx) => (
                      <div key={slot.item?.id || `wali-slot-${idx}`} className="w-[72px] sm:w-[80px] md:w-[86px]">
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

                {/* Sisi Kanan: Dewan Guru (15 Card Slots) */}
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
