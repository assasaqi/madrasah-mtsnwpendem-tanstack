import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowUpRight,
  History,
  IdCard,
  Landmark,
  MapPin,
  Network,
  RefreshCw,
  Target,
  Users
} from 'lucide-react';
import { spmbService } from '../../services/spmbService';
import { beritaService } from '../../services/beritaService';
import { pengumumanService } from '../../services/pengumumanService';
import { agendaService } from '../../services/agendaService';
import { prestasiService } from '../../services/prestasiService';
import { unduhanService } from '../../services/unduhanService';
import { faqService } from '../../services/faqService';
import { galeriService } from '../../services/galeriService';
import { kontakService } from '../../services/kontakService';
import {
  getAdminSchoolProfile,
  getSejarah,
  getStruktur,
  getFasilitas
} from '../../services/profileService';
import { stripHtml } from '../../utils/helpers';
import {
  PageHeader,
  Panel,
  PanelHeader,
  StatStrip,
  Stat,
  Table,
  Th,
  Td,
  Tag,
  Alert,
  Button,
  buttonClass
} from '../../components/admin/ui';

// Daftar sumber data dashboard, satu entri untuk setiap menu dan submenu sidebar
const SUMBER_DATA = {
  pendaftar: () => spmbService.getAllPendaftar(),
  berita: () => beritaService.getAllBerita(),
  pengumuman: () => pengumumanService.getAdminAll(),
  agenda: () => agendaService.getAll(),
  prestasi: () => prestasiService.getAll(),
  unduhan: () => unduhanService.getAll(),
  faq: () => faqService.getAll(),
  galeri: () => galeriService.getAll(),
  kontak: () => kontakService.getAll(),
  profil: () => getAdminSchoolProfile(),
  sejarah: () => getSejarah(),
  struktur: () => getStruktur(),
  fasilitas: () => getFasilitas()
};

const JUMLAH_SUMBER = Object.keys(SUMBER_DATA).length;

// Mengambil seluruh statistik sekaligus; kegagalan satu sumber tidak
// menghentikan sumber lainnya
const ambilStatistik = async () => {
  const kunci = Object.keys(SUMBER_DATA);
  const hasil = await Promise.allSettled(kunci.map((key) => SUMBER_DATA[key]()));

  const data = {};
  let gagal = 0;

  hasil.forEach((item, index) => {
    if (item.status === 'fulfilled') {
      data[kunci[index]] = item.value;
    } else {
      data[kunci[index]] = null;
      gagal += 1;
    }
  });

  return { data, gagal };
};

export default function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [gagalMuat, setGagalMuat] = useState(0);

  useEffect(() => {
    let masihAktif = true;

    ambilStatistik().then((hasil) => {
      if (!masihAktif) return;
      setData(hasil.data);
      setGagalMuat(hasil.gagal);
      setLoading(false);
    });

    return () => {
      masihAktif = false;
    };
  }, []);

  // Memuat ulang statistik saat tombol "Muat ulang" ditekan
  const muatUlang = async () => {
    setLoading(true);
    const hasil = await ambilStatistik();
    setData(hasil.data);
    setGagalMuat(hasil.gagal);
    setLoading(false);
  };

  // Nilai bantuan agar tabel tetap terbaca saat data belum selesai dimuat
  const daftar = (nilai) => (Array.isArray(nilai) ? nilai : []);
  const hitung = (nilai) => daftar(nilai).length;
  const angka = (nilai) => (loading ? '—' : nilai);

  const pendaftar = daftar(data.pendaftar);
  const kontak = daftar(data.kontak);

  const hitungStatus = (status) =>
    pendaftar.filter((item) => {
      const nilai = String(item.status || 'DITINJAU').toUpperCase();
      return nilai === status;
    }).length;

  const totalPendaftar = pendaftar.length;
  const ditinjau = hitungStatus('DITINJAU');
  const lulusAdmin = hitungStatus('LULUS_ADMINISTRASI');
  const lulusFinal = hitungStatus('LULUS_FINAL');
  const tidakLulus = hitungStatus('TIDAK_LULUS');

  const jumlahBerita = hitung(data.berita);
  const jumlahPengumuman = hitung(data.pengumuman);
  const jumlahAgenda = hitung(data.agenda);
  const jumlahPrestasi = hitung(data.prestasi);
  const jumlahUnduhan = hitung(data.unduhan);
  const jumlahFaq = hitung(data.faq);
  const jumlahGaleri = hitung(data.galeri);
  const totalKonten =
    jumlahBerita +
    jumlahPengumuman +
    jumlahAgenda +
    jumlahPrestasi +
    jumlahUnduhan +
    jumlahFaq +
    jumlahGaleri;

  const belumDibaca = kontak.filter((item) => !item.isRead).length;

  const profil = data.profil || null;
  const narasiSejarah =
    typeof data.sejarah === 'string' ? data.sejarah : data.sejarah?.sejarah || '';
  const kataSejarah = stripHtml(narasiSejarah).trim().split(/\s+/).filter(Boolean).length;
  const jumlahStruktur = hitung(data.struktur);
  const jumlahFasilitas = hitung(data.fasilitas);

  const persen = (nilai) => {
    if (!totalPendaftar) return 0;
    return Math.round((nilai / totalPendaftar) * 100);
  };

  const statusRows = [
    { label: 'Perlu ditinjau', value: ditinjau, bar: 'bg-[#c98a2e]' },
    { label: 'Lulus administrasi', value: lulusAdmin, bar: 'bg-brand' },
    { label: 'Lulus final', value: lulusFinal, bar: 'bg-[#3b62a8]' },
    { label: 'Tidak lulus', value: tidakLulus, bar: 'bg-rose-400' }
  ];

  const profilRows = [
    {
      label: 'Identitas',
      icon: IdCard,
      value: loading ? '—' : profil?.namaSekolah ? 'Terisi' : 'Belum diisi',
      keterangan: profil?.npsn ? `NPSN ${profil.npsn}` : 'Nama, akreditasi, logo, banner',
      to: '/admin/profil-sekolah'
    },
    {
      label: 'Kontak',
      icon: MapPin,
      value: loading ? '—' : profil?.alamat ? 'Terisi' : 'Belum diisi',
      keterangan: 'Alamat, email, telepon, WhatsApp, peta',
      to: '/admin/profil-sekolah/kontak'
    },
    {
      label: 'Visi & misi',
      icon: Target,
      value: loading ? '—' : profil?.visi ? 'Terisi' : 'Belum diisi',
      keterangan: 'Visi dan pokok misi madrasah',
      to: '/admin/profil-sekolah/visi-misi'
    },
    {
      label: 'Sejarah singkat',
      icon: History,
      value: loading ? '—' : kataSejarah > 0 ? `${kataSejarah} kata` : 'Belum diisi',
      keterangan: 'Narasi berdirinya madrasah',
      to: '/admin/profil-sekolah/sejarah'
    },
    {
      label: 'Struktur organisasi',
      icon: Network,
      value: loading ? '—' : `${jumlahStruktur} orang`,
      keterangan: 'Pimpinan dan pengurus',
      to: '/admin/profil-sekolah/struktur'
    },
    {
      label: 'Fasilitas',
      icon: Landmark,
      value: loading ? '—' : `${jumlahFasilitas} unit`,
      keterangan: 'Sarana dan prasarana',
      to: '/admin/profil-sekolah/fasilitas'
    }
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Selamat datang kembali"
        description="Ringkasan seluruh menu pengelola: pendaftaran SPMB, profil sekolah, konten publik, dan pesan kontak. Angka diperbarui setiap kali halaman ini dibuka."
        actions={
          <>
            <Button
              type="button"
              variant="secondary"
              onClick={muatUlang}
              disabled={loading}
              icon={RefreshCw}
            >
              Muat ulang
            </Button>
            <Link to="/admin/spmb" className={buttonClass('primary')}>
              <Users size={15} /> Verifikasi SPMB
            </Link>
          </>
        }
      />

      {gagalMuat > 0 && (
        <Alert tone="error">
          {gagalMuat} dari {JUMLAH_SUMBER} sumber data gagal dimuat. Angka yang tampil mungkin
          belum lengkap, coba muat ulang halaman ini.
        </Alert>
      )}

      <StatStrip>
        <Stat
          label="Total pendaftar"
          value={angka(totalPendaftar)}
          hint="calon siswa terdaftar"
        />
        <Stat
          label="Perlu ditinjau"
          value={angka(ditinjau)}
          hint="menunggu verifikasi berkas"
          tone="amber"
        />
        <Stat
          label="Konten publik"
          value={angka(totalKonten)}
          hint="berita, pengumuman, agenda, prestasi, unduhan, FAQ, galeri"
        />
        <Stat
          label="Pesan belum dibaca"
          value={angka(belumDibaca)}
          hint="dari formulir kontak"
          tone={belumDibaca > 0 ? 'rose' : 'ink'}
        />
      </StatStrip>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Panel>
          <PanelHeader
            title="Pendaftaran SPMB"
            description="Sebaran status pendaftar pada tiap tahap seleksi."
            actions={<Tag>{angka(totalPendaftar)} total</Tag>}
          />

          <div className="admin-scroll overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <Th>Status</Th>
                  <Th align="right">Jumlah</Th>
                  <Th className="w-[42%]">Porsi</Th>
                </tr>
              </thead>
              <tbody>
                {statusRows.map((row) => (
                  <tr key={row.label} className="transition-colors hover:bg-[#faf8f3]">
                    <Td className="font-medium">{row.label}</Td>
                    <Td align="right" className="tabular font-semibold">
                      {angka(row.value)}
                    </Td>
                    <Td>
                      <div className="flex items-center gap-2.5">
                        <div className="h-1.5 w-full max-w-[160px] overflow-hidden rounded-full bg-[#efece4]">
                          <div
                            className={`h-full rounded-full ${row.bar}`}
                            style={{ width: `${persen(row.value)}%` }}
                          />
                        </div>
                        <span className="w-8 shrink-0 text-[10.5px] tabular text-muted">
                          {loading ? '—' : `${persen(row.value)}%`}
                        </span>
                      </div>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Panel>

        <Panel>
          <PanelHeader
            title="Profil sekolah"
            description="Kelengkapan data identitas dan profil publik."
          />

          <div className="admin-scroll overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <Th>Bagian</Th>
                  <Th>Isi</Th>
                  <Th align="right">Kelola</Th>
                </tr>
              </thead>
              <tbody>
                {profilRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <tr key={row.label} className="transition-colors hover:bg-[#faf8f3]">
                      <Td>
                        <span className="flex items-center gap-2 font-medium">
                          <Icon size={14} className="shrink-0 text-[#a9a396]" />
                          <span className="min-w-0">
                            {row.label}
                            <span className="mt-0.5 block text-[10.5px] font-normal text-muted">
                              {row.keterangan}
                            </span>
                          </span>
                        </span>
                      </Td>
                      <Td className="whitespace-nowrap font-semibold">{row.value}</Td>
                      <Td align="right">
                        <Link
                          to={row.to}
                          className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-brand hover:underline"
                        >
                          Buka <ArrowUpRight size={12} />
                        </Link>
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Panel>
      </div>
    </div>
  );
}
