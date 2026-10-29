import { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import {
  AlertCircle,
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FileEdit,
  Info,
  Printer,
  ShieldCheck
} from 'lucide-react';
import { spmbService } from '../../services/spmbService';
import { AuthContext } from '../../context/AuthContext';
import SuratKeteranganLulus from '../../components/spmb/documents/SuratKeteranganLulus';
import { formatDate, getErrorMessage, getField, getFileUrl } from '../../utils/helpers';
import {
  SPMB_DOKUMEN_LABEL,
  SPMB_STATUS_META,
  getGelombang,
  getNamaPendaftar,
  getNomorPendaftar
} from '../../utils/spmb';
import {
  Alert,
  Button,
  Loader,
  PageHeader,
  Panel,
  PanelHeader,
  SectionTitle,
  Stat,
  StatStrip,
  StatusDot,
  Table,
  Td,
  Th,
  Tag,
  buttonClass,
  cx
} from '../../components/ui';

const JENIS_BERKAS_WAJIB = ['KARTU_KELUARGA', 'AKTA_KELAHIRAN', 'PAS_FOTO'];

// Menampilkan ringkasan status, tahapan seleksi, dan berkas pendaftaran milik calon siswa
export default function SPMBDashboard() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [pendaftaran, setPendaftaran] = useState(null);
  const [pengaturan, setPengaturan] = useState(null);
  const [profil, setProfil] = useState(null);
  const [terkunci, setTerkunci] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [tampilSukses, setTampilSukses] = useState(Boolean(location.state?.submitted));

  // Mengambil status pendaftaran SPMB milik pengguna dari API
  useEffect(() => {
    let masihAktif = true;

    const muatStatus = async () => {
      try {
        setLoading(true);
        setErrorMsg('');
        const response = await spmbService.getStatus();
        if (masihAktif) {
          setPendaftaran(response?.data || null);
          setPengaturan(response?.pengaturan || null);
          setProfil(response?.profil || null);
          setTerkunci(Boolean(response?.terkunci));
        }
      } catch (err) {
        if (masihAktif) {
          setErrorMsg(getErrorMessage(err, 'Gagal memuat status pendaftaran.'));
        }
      } finally {
        if (masihAktif) setLoading(false);
      }
    };

    muatStatus();

    return () => {
      masihAktif = false;
    };
  }, [location.key]);

  // Merangkum status pendaftaran, kelengkapan berkas, dan akses cetak dokumen
  const ringkasan = useMemo(() => {
    const status = String(pendaftaran?.status || 'BELUM_ISI').toUpperCase();
    const dokumen = Array.isArray(pendaftaran?.dokumen) ? pendaftaran.dokumen : [];
    const berkas = JENIS_BERKAS_WAJIB.map((jenis) => ({
      jenis,
      label: SPMB_DOKUMEN_LABEL[jenis] || jenis,
      dok: dokumen.find((item) => item.jenisDokumen === jenis) || null
    }));

    return {
      status,
      meta: SPMB_STATUS_META[status] || SPMB_STATUS_META.BELUM_ISI,
      berkas,
      terunggah: berkas.filter((item) => item.dok).length,
      terverifikasi: berkas.filter((item) => item.dok?.isVerified).length,
      adaBiodata: Boolean(pendaftaran?.biodata && pendaftaran?.orangTua),
      bisaCetak: ['LULUS_ADMINISTRASI', 'LULUS_FINAL'].includes(status)
    };
  }, [pendaftaran]);

  // Menyusun daftar tahapan seleksi beserta status penyelesaiannya
  const tahapan = useMemo(
    () => [
      {
        judul: 'Akun pendaftar dibuat',
        keterangan: 'Akun portal SPMB aktif dan siap dipakai.',
        selesai: true,
        aktif: false,
        tanggal: user?.createdAt ? formatDate(user.createdAt) : 'Selesai'
      },
      {
        judul: 'Biodata & data orang tua',
        keterangan: 'Identitas calon siswa, sekolah asal, dan kontak orang tua.',
        selesai: ringkasan.adaBiodata,
        aktif: !ringkasan.adaBiodata,
        tanggal: ringkasan.adaBiodata
          ? formatDate(pendaftaran?.updatedAt, { month: 'short' })
          : 'Belum diisi'
      },
      {
        judul: 'Verifikasi berkas',
        keterangan: 'Pemeriksaan KK, akta kelahiran, dan pas foto oleh panitia.',
        selesai: ringkasan.bisaCetak || ringkasan.status === 'TIDAK_LULUS',
        aktif:
          ringkasan.adaBiodata &&
          !ringkasan.bisaCetak &&
          ringkasan.status !== 'TIDAK_LULUS',
        tanggal: `${ringkasan.terverifikasi}/3 terverifikasi`
      },
      {
        judul: 'Hasil seleksi akhir',
        keterangan: 'Penetapan kelulusan final dan informasi daftar ulang.',
        selesai: ['LULUS_FINAL', 'TIDAK_LULUS'].includes(ringkasan.status),
        aktif: ringkasan.status === 'LULUS_ADMINISTRASI',
        tanggal: ['LULUS_FINAL', 'TIDAK_LULUS'].includes(ringkasan.status)
          ? 'Diterbitkan'
          : 'Menunggu'
      }
    ],
    [ringkasan, pendaftaran, user]
  );

  // Menyiapkan baris ringkasan biodata yang sudah tersimpan
  const barisBiodata = [
    {
      label: 'Nama lengkap',
      value: getField(pendaftaran, ['biodata.namaLengkap', 'namaLengkap'], user?.nama || '-')
    },
    { label: 'NIK', value: getField(pendaftaran, ['biodata.nik', 'nik']) },
    { label: 'NISN', value: getField(pendaftaran, ['biodata.nisn', 'nisn']) },
    {
      label: 'Asal sekolah',
      value: getField(pendaftaran, ['biodata.asalSekolah', 'asalSekolah'])
    },
    {
      label: 'Nama orang tua',
      value: [getField(pendaftaran, ['orangTua.namaAyah'], ''), getField(pendaftaran, ['orangTua.namaIbu'], '')]
        .filter(Boolean)
        .join(' / ') || '-'
    },
    {
      label: 'WhatsApp wali',
      value: getField(pendaftaran, ['orangTua.noHpAyah', 'orangTua.noHpIbu', 'noWhatsapp'])
    }
  ];

  if (loading) return <Loader label="Memuat dashboard SPMB…" />;

  return (
    <div className="space-y-6">
      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 12mm 15mm; }
          body { background: #ffffff !important; color: #000000 !important; }
        }
      `}</style>

      <SuratKeteranganLulus
        pendaftaran={pendaftaran}
        user={user}
        pengaturan={pengaturan}
        profil={profil}
      />

      <div className="space-y-6 print:hidden">
        <PageHeader
          title={`Selamat datang, ${getNamaPendaftar(pendaftaran) === '-' ? user?.nama || 'Calon siswa' : getNamaPendaftar(pendaftaran)}`}
          description={
            ringkasan.adaBiodata
              ? 'Pantau tahapan seleksi, kelengkapan berkas, dan catatan panitia dari satu halaman ini.'
              : 'Lengkapi biodata dan unggah berkas persyaratan agar pendaftaran Anda dapat diverifikasi panitia.'
          }
          actions={
            ringkasan.adaBiodata ? (
              <Link to="/spmb/formulir" className={buttonClass('secondary')}>
                <FileEdit size={14} /> {terkunci ? 'Lihat data' : 'Perbarui data'}
              </Link>
            ) : (
              <Link to="/spmb/formulir" className={buttonClass('primary')}>
                <FileEdit size={14} /> Lengkapi formulir
              </Link>
            )
          }
        />

        {tampilSukses && (
          <Alert onClose={() => setTampilSukses(false)}>
            <strong>Data pendaftaran tersimpan.</strong> Berkas yang baru diunggah akan diperiksa
            panitia, pantau statusnya di halaman ini.
          </Alert>
        )}

        {errorMsg && (
          <Alert tone="error">
            <strong>Gagal memuat data.</strong> {errorMsg}
          </Alert>
        )}

        {pendaftaran?.catatan && (
          <Panel className="overflow-hidden">
            <div className="flex items-start gap-2.5 border-l-2 border-l-[#c98a2e] bg-[#fdf7ea] px-4 py-3.5">
              <AlertCircle size={15} className="mt-0.5 shrink-0 text-[#8a5a12]" />
              <div>
                <p className="text-[12px] font-semibold text-[#6f4a10]">Catatan dari panitia SPMB</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#8a5a12]">
                  {pendaftaran.catatan}
                </p>
              </div>
            </div>
          </Panel>
        )}

        <StatStrip>
          <Stat
            label="Status seleksi"
            value={
              <span className="text-[16px] leading-tight sm:text-[17px]">{ringkasan.meta.label}</span>
            }
            hint={
              ringkasan.status === 'DITINJAU'
                ? 'Menunggu verifikasi panitia'
                : ringkasan.status === 'BELUM_ISI'
                  ? 'Formulir belum dikirim'
                  : 'Status terbaru pendaftaran'
            }
            tone={ringkasan.meta.tone === 'stone' ? 'ink' : ringkasan.meta.tone}
          />
          <Stat
            label="Nomor pendaftaran"
            value={
              <span className="text-[16px] leading-tight tracking-normal sm:text-[21px]">
                {getNomorPendaftar(pendaftaran)}
              </span>
            }
            hint={getGelombang(pendaftaran)}
          />
          <Stat
            label="Berkas terverifikasi"
            value={`${ringkasan.terverifikasi}/3`}
            hint={`${ringkasan.terunggah} dari 3 berkas terunggah`}
            tone={ringkasan.terverifikasi === 3 ? 'brand' : 'amber'}
          />
          <Stat
            label="Pembaruan terakhir"
            value={formatDate(pendaftaran?.updatedAt, { day: 'numeric', month: 'short' })}
            hint={
              pendaftaran?.createdAt
                ? `Terdaftar ${formatDate(pendaftaran.createdAt, { month: 'short' })}`
                : 'Belum ada pembaruan'
            }
          />
        </StatStrip>

        {ringkasan.bisaCetak && (
          <Panel className="overflow-hidden border-brand/25">
            <div className="flex flex-col gap-3 bg-brand-soft px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-paper text-brand">
                  {ringkasan.status === 'LULUS_FINAL' ? <Award size={14} /> : <CheckCircle2 size={14} />}
                </span>
                <div>
                  <p className="text-[12.5px] font-semibold text-[#124426]">
                    {ringkasan.status === 'LULUS_FINAL'
                      ? 'Selamat, Anda diterima sebagai siswa baru'
                      : 'Anda lulus verifikasi administrasi'}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-[#2f5c3f]">
                    {ringkasan.status === 'LULUS_FINAL'
                      ? 'Silakan cetak surat keterangan lulus dan lanjutkan daftar ulang di sekretariat SPMB.'
                      : 'Berkas administrasi Anda sudah lengkap. Surat keterangan lulus dapat dicetak sebagai bukti verifikasi fisik.'}
                  </p>
                </div>
              </div>
              <Button variant="primary" size="sm" icon={Printer} onClick={() => window.print()}>
                Cetak surat
              </Button>
            </div>
          </Panel>
        )}

        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            <Panel>
              <PanelHeader
                title="Tahapan seleksi"
                description="Posisi pendaftaran Anda saat ini."
                actions={<Tag>{ringkasan.meta.label}</Tag>}
              />

              <ol className="relative space-y-4 px-4 py-4 sm:px-5">
                <span className="absolute bottom-7 left-[27px] top-7 w-px bg-line sm:left-[31px]" />

                {tahapan.map((langkah, index) => (
                  <li key={langkah.judul} className="relative flex gap-3">
                    <span
                      className={cx(
                        'relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10.5px] font-semibold',
                        langkah.selesai
                          ? 'border-brand bg-brand text-[#f8f6ef]'
                          : langkah.aktif
                            ? 'border-[#c98a2e] bg-[#fdf3e2] text-[#8a5a12]'
                            : 'border-line bg-paper text-muted'
                      )}
                    >
                      {langkah.selesai ? <Check size={12} /> : index + 1}
                    </span>

                    <div className="min-w-0 flex-1 pb-1">
                      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                        <p className="text-[12.5px] font-semibold text-ink">{langkah.judul}</p>
                        <Tag>{langkah.tanggal}</Tag>
                      </div>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-muted">
                        {langkah.keterangan}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Panel>

            <Panel>
              <PanelHeader
                title="Dokumen persyaratan"
                description="Unggah ulang berkas lewat halaman formulir bila ada perbaikan."
                actions={<Tag>{`${ringkasan.terverifikasi}/3 terverifikasi`}</Tag>}
              />

              <div className="overflow-x-auto">
                <Table>
                  <thead>
                    <tr>
                      <Th>Jenis dokumen</Th>
                      <Th>Status</Th>
                      <Th align="right">Berkas</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {ringkasan.berkas.map((item) => (
                      <tr key={item.jenis}>
                        <Td className="font-medium">{item.label}</Td>
                        <Td>
                          {!item.dok ? (
                            <StatusDot tone="stone">Belum diunggah</StatusDot>
                          ) : item.dok.isVerified ? (
                            <StatusDot tone="brand">Terverifikasi</StatusDot>
                          ) : (
                            <StatusDot tone="amber">Menunggu verifikasi</StatusDot>
                          )}
                        </Td>
                        <Td align="right">
                          {item.dok ? (
                            <a
                              href={getFileUrl(item.dok.fileUrl)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="whitespace-nowrap text-[11.5px] font-semibold text-brand hover:underline"
                            >
                              Lihat berkas
                            </a>
                          ) : terkunci ? (
                            <span className="whitespace-nowrap text-[11.5px] text-muted">Terkunci</span>
                          ) : (
                            <Link
                              to="/spmb/formulir"
                              className="whitespace-nowrap text-[11.5px] font-semibold text-brand hover:underline"
                            >
                              Unggah
                            </Link>
                          )}
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Panel>
          </div>

          <div className="space-y-5">
            <Panel>
              <PanelHeader
                title="Ringkasan biodata"
                actions={
                  terkunci ? (
                    <Tag>Terkunci</Tag>
                  ) : (
                    <Link
                      to="/spmb/formulir"
                      className="text-[11px] font-semibold text-brand hover:underline"
                    >
                      Perbarui
                    </Link>
                  )
                }
              />

              <dl className="divide-y divide-line/70 px-4 sm:px-5">
                {barisBiodata.map((baris) => (
                  <div key={baris.label} className="flex items-start justify-between gap-3 py-2.5">
                    <dt className="text-[11px] text-muted">{baris.label}</dt>
                    <dd className="max-w-[62%] text-right text-[11.5px] font-medium text-ink">
                      {baris.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Panel>

            <Panel>
              <SectionTitle icon={ShieldCheck} title="Ketentuan berkas" />
              <ul className="space-y-2 px-4 py-3.5 text-[11.5px] leading-relaxed text-muted sm:px-5">
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#a8a294]" />
                  Kartu keluarga dan akta kelahiran maksimal 2 MB, pas foto maksimal 1 MB.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#a8a294]" />
                  Mengunggah ulang berkas akan menggantikan berkas sebelumnya.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#a8a294]" />
                  Verifikasi panitia umumnya selesai dalam 2×24 jam kerja.
                </li>
              </ul>
            </Panel>

            <Panel>
              <SectionTitle icon={Info} title="Butuh bantuan?" />
              <div className="space-y-2.5 px-4 py-3.5 text-[11.5px] leading-relaxed text-muted sm:px-5">
                <p>
                  Hubungi panitia SPMB di sekretariat madrasah pada jam kerja bila berkas sulit
                  diunggah atau status tidak berubah.
                </p>
                <Link
                  to="/kontak"
                  className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                >
                  Halaman kontak <ChevronRight size={12} />
                </Link>
              </div>
            </Panel>

            <Panel>
              <SectionTitle icon={FileCheck2} title="Langkah berikutnya" />
              <div className="px-4 py-3.5 sm:px-5">
                <p className="text-[11.5px] leading-relaxed text-muted">
                  {ringkasan.status === 'BELUM_ISI'
                    ? 'Isi formulir biodata dan unggah tiga berkas wajib untuk mulai diverifikasi.'
                    : ringkasan.status === 'DITINJAU'
                      ? 'Tidak ada aksi yang diperlukan. Panitia sedang memeriksa berkas Anda.'
                      : ringkasan.status === 'LULUS_ADMINISTRASI'
                        ? 'Siapkan berkas fisik untuk verifikasi lanjutan sesuai instruksi panitia.'
                        : ringkasan.status === 'LULUS_FINAL'
                          ? 'Cetak surat keterangan lulus, lalu lakukan daftar ulang di sekretariat.'
                          : 'Hubungi panitia SPMB untuk informasi perbaikan pendaftaran.'}
                </p>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
