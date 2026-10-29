import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, CalendarPlus, Clock, MapPin, Sparkles } from 'lucide-react';
import { agendaService } from '../../services/agendaService';
import { formatDate, stripHtml } from '../../utils/helpers';
import PageHeader from '../../components/public/PageHeader';
import { Alert } from '../../components/ui';

const NAMA_BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

// Mengubah nilai tanggal menjadi jam lokal berformat Indonesia
const formatJam = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
};

// Menentukan apakah agenda sudah selesai berdasarkan waktu selesai atau mulai
const sudahSelesai = (item) => {
  const akhir = new Date(item.selesai || item.mulai);
  return akhir.getTime() < Date.now();
};

// Membentuk berkas kalender (.ics) agar agenda dapat disimpan ke kalender pengguna
const unduhKalender = (item) => {
  const mulai = new Date(item.mulai);
  const selesai = item.selesai ? new Date(item.selesai) : new Date(mulai.getTime() + 2 * 60 * 60 * 1000);

  const keIcs = (date) =>
    `${date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;

  const escape = (text) =>
    String(text || '')
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;');

  const isi = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Madrasah//Agenda Kegiatan//ID',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${item.id}@madrasah`,
    `DTSTAMP:${keIcs(new Date())}`,
    `DTSTART:${keIcs(mulai)}`,
    `DTEND:${keIcs(selesai)}`,
    `SUMMARY:${escape(item.judul)}`,
    item.lokasi ? `LOCATION:${escape(item.lokasi)}` : '',
    `DESCRIPTION:${escape(stripHtml(item.deskripsi))}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ]
    .filter(Boolean)
    .join('\r\n');

  const blob = new Blob([isi], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const tautan = document.createElement('a');
  tautan.href = url;
  tautan.download = `agenda-${item.slug || item.id}.ics`;
  document.body.appendChild(tautan);
  tautan.click();
  tautan.remove();
  URL.revokeObjectURL(url);
};

// Menampilkan kartu agenda bergaya kalender resmi instansi
function AgendaCard({ item, lewat }) {
  const mulai = new Date(item.mulai);
  const tanggal = Number.isNaN(mulai.getTime()) ? null : mulai;

  return (
    <article
      role="listitem"
      className="group flex h-full flex-col justify-between rounded-xl border border-line bg-paper p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          {/* Blok Tanggal Kemenag Style */}
          <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl border border-brand/20 bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
            <span className="text-[22px] font-bold leading-none tabular-nums">
              {tanggal ? tanggal.getDate() : '—'}
            </span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em]">
              {tanggal ? NAMA_BULAN[tanggal.getMonth()] : ''}
            </span>
          </div>

          <span
            className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
              lewat
                ? 'bg-canvas text-muted border border-line'
                : 'bg-brand-soft text-brand border border-brand/20'
            }`}
          >
            {lewat ? 'Selesai' : 'Akan Datang'}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-[15px] font-bold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-brand sm:text-[16px]">
          {item.judul}
        </h3>

        {/* Waktu & Lokasi Kegiatan */}
        <div className="mt-3 space-y-1.5 text-[11.5px] text-muted">
          <p className="flex items-center gap-2">
            <Clock size={13} className="shrink-0 text-brand" />
            <span>
              {formatDate(item.mulai, { month: 'long', day: 'numeric', year: 'numeric' })} • {formatJam(item.mulai)}
              {item.selesai ? ` – ${formatJam(item.selesai)} WIB` : ' WIB'}
            </span>
          </p>
          {item.lokasi && (
            <p className="flex items-start gap-2">
              <MapPin size={13} className="mt-0.5 shrink-0 text-brand" />
              <span className="line-clamp-2">{item.lokasi}</span>
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 border-t border-line/70 pt-3.5">
        <button
          type="button"
          onClick={() => unduhKalender(item)}
          className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-brand hover:underline"
        >
          <CalendarPlus size={13} /> Simpan ke Kalender (.ics)
        </button>
      </div>
    </article>
  );
}

// Menampilkan agenda kegiatan madrasah yang akan datang dan yang sudah berlangsung
export default function Agenda() {
  const [daftar, setDaftar] = useState([]);
  const [tab, setTab] = useState('mendatang');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let masihAktif = true;

    const muat = async () => {
      setErrorMsg('');
      try {
        const data = await agendaService.getPublic();
        if (masihAktif) setDaftar(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Gagal memuat agenda:', error);
        if (masihAktif) {
          setDaftar([]);
          setErrorMsg('Agenda belum dapat dimuat. Coba muat ulang halaman ini.');
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

  const { mendatang, lewat } = useMemo(() => {
    const akanDatang = [];
    const selesai = [];

    daftar.forEach((item) => {
      if (sudahSelesai(item)) selesai.push(item);
      else akanDatang.push(item);
    });

    selesai.sort((a, b) => new Date(b.mulai) - new Date(a.mulai));
    return { mendatang: akanDatang, lewat: selesai };
  }, [daftar]);

  const tampil = tab === 'mendatang' ? mendatang : tab === 'selesai' ? lewat : daftar;

  return (
    <div className="pb-16">
      {/* Header Halaman Agenda Resmi */}
      <PageHeader
        breadcrumbs={[{ label: 'Informasi', to: '/agenda' }, { label: 'Agenda Kegiatan' }]}
        title="Agenda & Jadwal Kegiatan"
        description="Jadwal resmi kegiatan madrasah, penilaian akademik, rapat dewan guru, peringatan hari besar Islam, dan kompetisi siswa."
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
        {/* Tab Filter Toolbar */}
        <div className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setTab('mendatang')}
              className={`rounded-lg px-3.5 py-1.5 text-[12px] font-semibold transition-all ${
                tab === 'mendatang'
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-canvas text-ink/75 hover:bg-brand-soft hover:text-brand'
              }`}
            >
              Akan Datang ({mendatang.length})
            </button>
            <button
              type="button"
              onClick={() => setTab('selesai')}
              className={`rounded-lg px-3.5 py-1.5 text-[12px] font-semibold transition-all ${
                tab === 'selesai'
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-canvas text-ink/75 hover:bg-brand-soft hover:text-brand'
              }`}
            >
              Selesai ({lewat.length})
            </button>
            <button
              type="button"
              onClick={() => setTab('semua')}
              className={`rounded-lg px-3.5 py-1.5 text-[12px] font-semibold transition-all ${
                tab === 'semua'
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-canvas text-ink/75 hover:bg-brand-soft hover:text-brand'
              }`}
            >
              Semua ({daftar.length})
            </button>
          </div>

          <p className="flex items-center gap-1.5 text-[11.5px] text-muted">
            <Sparkles size={13} className="text-brand" /> Agenda mendatang disusun berdasarkan tanggal terdekat
          </p>
        </div>

        {/* Daftar Agenda */}
        {loading ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-xl border border-line bg-paper"
              />
            ))}
          </div>
        ) : errorMsg ? (
          <div className="mt-8">
            <Alert tone="error">{errorMsg}</Alert>
          </div>
        ) : tampil.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tampil.map((item) => (
              <AgendaCard key={item.id} item={item} lewat={sudahSelesai(item)} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-[13px] text-muted">
            {daftar.length === 0
              ? 'Data agenda kegiatan madrasah belum tersedia.'
              : tab === 'mendatang'
                ? 'Tidak ada agenda yang akan datang dalam waktu dekat.'
                : 'Tidak ada agenda pada kategori ini.'}
          </p>
        )}
      </div>
    </div>
  );
}
