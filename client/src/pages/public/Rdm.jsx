import {
  BookOpenCheck,
  ExternalLink,
  GraduationCap,
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Sparkles,
  School,
  ArrowRight
} from 'lucide-react';
import useSchoolProfile from '../../hooks/useSchoolProfile';
import PageHeader from '../../components/public/PageHeader';

export default function Rdm() {
  const { profil, loading } = useSchoolProfile();

  const namaMadrasah = profil?.namaSekolah || 'MTs NW Pendem';
  const rdmUrl = profil?.rdmUrl ? String(profil.rdmUrl).trim() : '';
  const isOnline = Boolean(rdmUrl && profil?.rdmAktif !== false);
  const rdmKeterangan = profil?.rdmKeterangan;

  const handleOpenRdm = () => {
    if (!rdmUrl) return;
    const target = /^https?:\/\//i.test(rdmUrl) ? rdmUrl : `https://${rdmUrl}`;
    window.open(target, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <PageHeader
        badge="Aplikasi Madrasah Kemenag"
        title="Rapor Digital Madrasah (RDM)"
        description={`Sistem Evaluasi, Penilaian, dan Pelaporan Capaian Belajar Peserta Didik Berbasis Digital Resmi Kementerian Agama RI di ${namaMadrasah}.`}
        breadcrumbs={[
          { label: 'Beranda', to: '/' },
          { label: 'Layanan', to: '/unduhan' },
          { label: 'Rapor Digital (RDM)', to: '/rdm' }
        ]}
      />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Kartu Utama Masuk Portal RDM */}
        <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
          <div className="border-b border-line bg-gradient-to-r from-[#004d26]/10 via-[#004d26]/5 to-transparent p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#004d26] text-white shadow-md">
                  <BookOpenCheck size={28} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#004d26] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-white">
                      RDM Kemenag
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        isOnline
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                        }`}
                      />
                      {isOnline ? 'Server Online & Siap Diakses' : 'Dalam Pemeliharaan'}
                    </span>
                  </div>

                  <h2 className="mt-2.5 text-[20px] font-bold text-ink sm:text-[24px]">
                    Portal RDM {namaMadrasah}
                  </h2>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">
                    {rdmKeterangan ||
                      'Akses langsung penginputan nilai dewan guru serta monitoring hasil belajar santri dan siswi secara transparan dan akuntabel.'}
                  </p>
                </div>
              </div>

              {/* Tombol Akses Utama */}
              <div className="shrink-0">
                {isOnline ? (
                  <button
                    type="button"
                    onClick={handleOpenRdm}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#004d26] px-6 py-3.5 text-[13.5px] font-bold text-white shadow-md transition-all hover:bg-[#00381b] hover:shadow-lg sm:w-auto"
                  >
                    <span>Buka Aplikasi RDM</span>
                    <ExternalLink size={16} />
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-[12px] font-medium text-amber-800">
                    <AlertTriangle size={15} />
                    <span>Tautan aplikasi sedang disiapkan operator</span>
                  </div>
                )}
              </div>
            </div>

            {isOnline && (
              <div className="mt-4 flex items-center gap-2 text-[11.5px] text-muted">
                <ShieldCheck size={14} className="text-brand" />
                <span>
                  Alamat resmi server:{' '}
                  <span className="font-mono font-medium text-ink">{rdmUrl}</span>
                </span>
              </div>
            )}
          </div>

          {/* Panduan Akses Login untuk Guru dan Siswa */}
          <div className="grid divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {/* Box 1: Dewan Guru & Staf */}
            <div className="p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2.5 text-brand">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <GraduationCap size={18} />
                </div>
                <h3 className="text-[15px] font-bold text-ink">Akses Guru & Wali Kelas</h3>
              </div>

              <p className="text-[12.5px] leading-relaxed text-muted">
                Bagi dewan guru dan wali kelas untuk mengisi bobot penilaian harian, asesmen sumatif, capaian kompetensi, dan absensi kelas.
              </p>

              <div className="rounded-lg border border-line bg-canvas/70 p-3 text-[12px] space-y-1.5">
                <p>
                  <strong className="text-ink">Username:</strong> NPK / NIP / Email Madrasah
                </p>
                <p>
                  <strong className="text-ink">Kata Sandi:</strong> Password akun yang diberikan operator
                </p>
              </div>
            </div>

            {/* Box 2: Siswa & Wali Murid */}
            <div className="p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2.5 text-brand">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Users size={18} />
                </div>
                <h3 className="text-[15px] font-bold text-ink">Akses Siswa & Wali Murid</h3>
              </div>

              <p className="text-[12.5px] leading-relaxed text-muted">
                Bagi santri/siswa dan orang tua untuk melihat perkembangan nilai akademik, peringkat kelas, dan unduh lembar laporan capaian hasil belajar.
              </p>

              <div className="rounded-lg border border-line bg-canvas/70 p-3 text-[12px] space-y-1.5">
                <p>
                  <strong className="text-ink">Username:</strong> NISN (Nomor Induk Siswa Nasional)
                </p>
                <p>
                  <strong className="text-ink">Kata Sandi:</strong> Tanggal lahir / Sandi default siswa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Informasi Tambahan & Bantuan */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper p-4 text-center">
            <CheckCircle2 size={20} className="mx-auto text-brand" />
            <h4 className="mt-2 text-[13px] font-bold text-ink">Standar Kemenag RI</h4>
            <p className="mt-1 text-[11.5px] text-muted">
              Sesuai dengan pedoman kurikulum Kemenag dan kurikulum merdeka madrasah.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-paper p-4 text-center">
            <Sparkles size={20} className="mx-auto text-brand" />
            <h4 className="mt-2 text-[13px] font-bold text-ink">Akurat & Realtime</h4>
            <p className="mt-1 text-[11.5px] text-muted">
              Nilai langsung tersinkronisasi saat dewan guru menyelesaikan pembobotan materi.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-paper p-4 text-center">
            <HelpCircle size={20} className="mx-auto text-brand" />
            <h4 className="mt-2 text-[13px] font-bold text-ink">Butuh Bantuan Akun?</h4>
            <p className="mt-1 text-[11.5px] text-muted">
              Silakan hubungi bagian Tata Usaha atau Operator RDM di lingkungan madrasah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
