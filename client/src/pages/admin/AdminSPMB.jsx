import { useMemo, useState } from 'react';
import { Download, Eye, Filter, RefreshCw, Settings, Users } from 'lucide-react';
import usePendaftarSPMB from '../../hooks/usePendaftarSPMB';
import { formatDate } from '../../utils/helpers';
import {
  filterPendaftar,
  getAsalSekolah,
  getEmailPendaftar,
  getGelombang,
  getJenisKelamin,
  getNamaPendaftar,
  getNomorPendaftar,
  hitungDokumen,
  normalizeStatus
} from '../../utils/spmb';
import {
  PageHeader,
  Panel,
  Toolbar,
  SearchInput,
  FilterTabs,
  Table,
  Th,
  Td,
  EmptyRow,
  StatStrip,
  Stat,
  Button,
  Loader,
  Alert,
  buttonClass
} from '../../components/admin/ui';
import PendaftarStatus from '../../components/admin/spmb/PendaftarStatus';
import PendaftarDetailModal from '../../components/admin/spmb/PendaftarDetailModal';
import PengaturanSuratModal from '../../components/admin/spmb/PengaturanSuratModal';

// Menampilkan seluruh pendaftar SPMB beserta ringkasan status dan aksi verifikasinya
export default function AdminSPMB() {
  const { pendaftarList, loading, errorMsg, fetchPendaftar, stats } = usePendaftarSPMB();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedPendaftar, setSelectedPendaftar] = useState(null);
  const [pengaturanOpen, setPengaturanOpen] = useState(false);

  const filterOptions = useMemo(
    () => [
      { id: 'ALL', label: 'Semua', count: stats.total },
      { id: 'BELUM_ISI', label: 'Belum isi', count: stats.belumIsi },
      { id: 'DITINJAU', label: 'Ditinjau', count: stats.ditinjau },
      { id: 'LULUS_ADMINISTRASI', label: 'Lulus administrasi', count: stats.lulusAdmin },
      { id: 'LULUS_FINAL', label: 'Lulus final', count: stats.lulusFinal },
      { id: 'TIDAK_LULUS', label: 'Tidak lulus', count: stats.ditolak }
    ],
    [stats]
  );

  const filtered = useMemo(
    () => filterPendaftar(pendaftarList, searchQuery, statusFilter),
    [pendaftarList, searchQuery, statusFilter]
  );

  // Mengunduh data pendaftar yang sedang tampil sebagai berkas CSV
  const handleExport = () => {
    const header = [
      'No. Pendaftaran',
      'Nama',
      'Jenis Kelamin',
      'NIK',
      'NISN',
      'Asal Sekolah',
      'Email',
      'Gelombang',
      'Tanggal Daftar',
      'Status',
      'Catatan'
    ];

    const rows = filtered.map((item) => [
      getNomorPendaftar(item),
      getNamaPendaftar(item),
      getJenisKelamin(item),
      item.biodata?.nik || '',
      item.biodata?.nisn || '',
      getAsalSekolah(item),
      getEmailPendaftar(item),
      getGelombang(item),
      formatDate(item.createdAt),
      normalizeStatus(item.status),
      item.catatan || ''
    ]);

    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(','))
      .join('\r\n');

    const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data-pendaftar-spmb.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return <Loader label="Memuat data pendaftar…" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Verifikasi SPMB"
        description="Tinjau data calon siswa, periksa berkas persyaratan, lalu tetapkan status kelulusannya."
        actions={
          <>
            <Button variant="secondary" icon={Settings} onClick={() => setPengaturanOpen(true)}>
              Pengaturan surat
            </Button>
            <Button variant="secondary" icon={RefreshCw} onClick={fetchPendaftar}>
              Muat ulang
            </Button>
            <Button variant="primary" icon={Download} onClick={handleExport} disabled={filtered.length === 0}>
              Ekspor CSV
            </Button>
          </>
        }
      />

      {errorMsg && (
        <Alert tone="error">
          <strong>Gagal memuat data.</strong> {errorMsg}{' '}
          <button onClick={fetchPendaftar} className="font-semibold underline">
            Coba lagi
          </button>
        </Alert>
      )}

      <StatStrip>
        <Stat label="Total pendaftar" value={stats.total} hint="calon siswa" />
        <Stat label="Perlu ditinjau" value={stats.ditinjau} hint="menunggu verifikasi" tone="amber" />
        <Stat label="Lulus administrasi" value={stats.lulusAdmin} hint="berkas dinyatakan lengkap" tone="brand" />
        <Stat label="Lulus final" value={stats.lulusFinal} hint="ditetapkan sebagai siswa baru" tone="blue" />
      </StatStrip>

      <Panel>
        <Toolbar>
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama, nomor pendaftaran, atau asal sekolah…"
          />
          <p className="flex items-center gap-1 whitespace-nowrap text-[11.5px] text-muted">
            <span className="font-semibold text-ink">{filtered.length}</span>
            <span>dari</span>
            <span className="font-semibold text-ink">{stats.total}</span>
            <span>pendaftar</span>
          </p>
        </Toolbar>

        <div className="relative border-b border-line">
          <div className="admin-scroll flex items-center gap-1.5 overflow-x-auto px-4 py-1.5">
            <span className="flex shrink-0 items-center gap-1 pr-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              <Filter size={11} /> Status
            </span>
            <FilterTabs options={filterOptions} value={statusFilter} onChange={setStatusFilter} />
          </div>
          <span className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-paper to-transparent sm:hidden" />
        </div>

        <div className="admin-scroll overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <Th className="hidden md:table-cell">No. pendaftaran</Th>
                <Th>Calon siswa</Th>
                <Th className="hidden lg:table-cell">Gelombang</Th>
                <Th>Status</Th>
                <Th align="right">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((item) => {
                  const berkas = hitungDokumen(item);

                  return (
                    <tr key={item.id} className="transition-colors hover:bg-[#faf8f3]">
                      <Td className="hidden whitespace-nowrap font-semibold text-brand md:table-cell">
                        {getNomorPendaftar(item)}
                      </Td>
                      <Td>
                        <p className="font-semibold text-ink">{getNamaPendaftar(item)}</p>
                        <p className="mt-0.5 text-[10px] text-muted">
                          <span className="block font-medium text-brand md:hidden">
                            {getNomorPendaftar(item)}
                          </span>
                          <span className="block md:hidden">
                            {getAsalSekolah(item)} · {getGelombang(item)}
                          </span>
                          <span className="hidden md:inline">
                            NIK {item.biodata?.nik || '-'} · NISN {item.biodata?.nisn || '-'} · {berkas.terverifikasi}/
                            {berkas.total} berkas
                          </span>
                        </p>
                      </Td>
                      <Td className="hidden whitespace-nowrap text-muted lg:table-cell">
                        {getGelombang(item)}
                      </Td>
                      <Td>
                        <PendaftarStatus status={item.status} />
                        <p className="mt-0.5 text-[10px] text-muted md:hidden">
                          {berkas.terverifikasi}/{berkas.total} berkas
                        </p>
                      </Td>
                      <Td align="right">
                        <button onClick={() => setSelectedPendaftar(item)} className={buttonClass('ghost', 'sm')}>
                          <Eye size={13} /> Detail
                        </button>
                      </Td>
                    </tr>
                  );
                })
              ) : (
                <EmptyRow
                  colSpan={5}
                  icon={Users}
                  title="Belum ada pendaftar yang cocok"
                  description="Ubah kata kunci pencarian atau pilih status lain."
                />
              )}
            </tbody>
          </Table>
        </div>
      </Panel>

      {selectedPendaftar && (
        <PendaftarDetailModal
          key={selectedPendaftar.id}
          pendaftar={selectedPendaftar}
          onClose={() => setSelectedPendaftar(null)}
          onChanged={fetchPendaftar}
        />
      )}

      <PengaturanSuratModal
        open={pengaturanOpen}
        onClose={() => setPengaturanOpen(false)}
      />
    </div>
  );
}
