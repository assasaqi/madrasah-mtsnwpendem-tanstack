import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { RefreshCw, Users } from 'lucide-react';
import { spmbService } from '../../services/spmbService';
import { beritaService } from '../../services/beritaService';
import { pengumumanService } from '../../services/pengumumanService';
import { agendaService } from '../../services/agendaService';
import { prestasiService } from '../../services/prestasiService';
import { unduhanService } from '../../services/unduhanService';
import { faqService } from '../../services/faqService';
import { galeriService } from '../../services/galeriService';
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
  galeri: () => galeriService.getAll()
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

  return (
    <div className="space-y-6">
      <PageHeader
        title="Selamat datang kembali"
        description="Ringkasan pendaftaran SPMB dan konten publik madrasah. Angka diperbarui setiap kali halaman ini dibuka."
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

      <StatStrip className="sm:grid-cols-3">
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
      </StatStrip>

      <Panel>
        <PanelHeader
          title="Pendaftaran SPMB"
          description="Sebaran status pendaftar pada tiap tahap seleksi."
          actions={<Tag>{angka(totalPendaftar)} total</Tag>}
        />

        <div className="admin-scroll overflow-x-auto">
          {totalPendaftar === 0 && !loading ? (
            <div className="py-12 text-center">
              <p className="text-[12.5px] font-semibold text-ink">Info data belum tersedia</p>
              <p className="mt-1 text-[11px] text-muted">Belum ada berkas pendaftaran calon siswa yang masuk.</p>
            </div>
          ) : (
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
                        <div className="h-1.5 w-full max-w-[200px] overflow-hidden rounded-full bg-[#efece4]">
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
          )}
        </div>
      </Panel>
    </div>
  );
}
