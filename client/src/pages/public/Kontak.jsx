import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send
} from 'lucide-react';
import { publicService } from '../../services/publicService';
import { getErrorMessage } from '../../utils/helpers';
import useSchoolProfile from '../../hooks/useSchoolProfile';
import PageHeader from '../../components/public/PageHeader';

const FORM_KOSONG = { nama: '', email: '', subjek: '', pesan: '' };

// Menampilkan informasi kontak resmi madrasah dan formulir pengaduan/pertanyaan
export default function Kontak() {
  const { profil } = useSchoolProfile();
  const [form, setForm] = useState(FORM_KOSONG);
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrorMsg('');
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSukses(false);

    try {
      await publicService.submitKontak(form);
      setSukses(true);
      setForm(FORM_KOSONG);
    } catch (error) {
      setErrorMsg(getErrorMessage(error, 'Pesan belum dapat dikirim. Coba beberapa saat lagi.'));
    } finally {
      setLoading(false);
    }
  };

  const kontak = [
    profil?.alamat && { icon: MapPin, label: 'Alamat Madrasah', value: profil.alamat },
    profil?.telepon && { icon: Phone, label: 'Nomor Telepon Kantor', value: profil.telepon },
    profil?.whatsapp && { icon: Phone, label: 'WhatsApp Pelayanan', value: profil.whatsapp },
    profil?.email && { icon: Mail, label: 'Surat Elektronik (Email)', value: profil.email }
  ].filter(Boolean);

  return (
    <div className="pb-16">
      {/* Header Halaman Kontak */}
      <PageHeader
        breadcrumbs={[{ label: 'Kontak' }]}
        title="Hubungi Kami & Saluran Informasi"
        description="Saluran pengaduan masyarakat, informasi pendaftaran siswa baru, kemitraan akademik, dan komunikasi kedinasan madrasah."
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          {/* Kolom Informasi Kontak Resmi */}
          <div className="space-y-6">
            <section className="rounded-2xl border border-line bg-paper p-6 shadow-xs sm:p-7">
              <h2 className="text-[17px] font-bold text-ink sm:text-[19px]">
                Kantor & Layanan Publik
              </h2>

              {kontak.length > 0 ? (
                <ul className="mt-5 space-y-4">
                  {kontak.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                          <Icon size={16} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
                            {item.label}
                          </p>
                          <p className="mt-0.5 break-words text-[13px] font-medium leading-relaxed text-ink/90">
                            {item.value}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="mt-4 text-[12.5px] text-muted">
                  Informasi kontak belum diisi pada profil sekolah.
                </p>
              )}

              {profil?.mapsUrl && (
                <div className="mt-6 pt-5 border-t border-line/70">
                  <a
                    href={profil.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand/30 bg-brand-soft/50 py-2.5 text-[12px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <MapPin size={14} /> Buka Peta Lokasi di Google Maps
                  </a>
                </div>
              )}
            </section>

            {/* Jam Pelayanan Kantor */}
            <div className="flex items-start gap-3.5 rounded-2xl border border-line bg-paper p-5 shadow-xs">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Clock size={18} />
              </span>
              <div>
                <p className="text-[13px] font-bold text-ink">Jam Operasional Layanan Tata Usaha</p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted">
                  Senin – Kamis: 07.30 – 14.00 WITA<br />
                  Jumat – Sabtu: 07.30 – 11.30 WITA
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Formulir Pesan & Aspirasi */}
          <section className="rounded-2xl border border-line bg-paper p-6 shadow-xs sm:p-8">
            <div className="border-b border-line pb-4">
              <h2 className="text-[18px] font-bold text-ink sm:text-[20px]">
                Formulir Komunikasi & Pertanyaan
              </h2>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">
                Sampaikan pesan, masukan, atau pertanyaan Anda. Petugas tata usaha akan menindaklanjuti pesan Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {sukses && (
                <div className="flex items-start gap-2.5 rounded-xl border border-emerald-300/70 bg-emerald-50 p-4 text-[12.5px] leading-relaxed text-emerald-900 shadow-xs">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-700" />
                  <span>
                    <strong>Pesan Terkirim!</strong> Terima kasih telah menghubungi madrasah. Kami akan merespons pesan Anda secepatnya.
                  </span>
                </div>
              )}

              {errorMsg && (
                <div className="rounded-xl border border-rose-300/70 bg-rose-50 p-4 text-[12.5px] leading-relaxed text-rose-900 shadow-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[12px] font-semibold text-ink/80">
                    Nama Lengkap <span className="text-rose-600">*</span>
                  </span>
                  <input
                    type="text"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    required
                    minLength={2}
                    placeholder="Contoh: Ahmad Fauzi"
                    className="mt-1.5 w-full rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-[12.5px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand/60 focus:bg-paper"
                  />
                </label>

                <label className="block">
                  <span className="text-[12px] font-semibold text-ink/80">
                    Alamat Email <span className="text-rose-600">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@email.com"
                    className="mt-1.5 w-full rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-[12.5px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand/60 focus:bg-paper"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[12px] font-semibold text-ink/80">
                  Subjek Pesan <span className="text-rose-600">*</span>
                </span>
                <input
                  type="text"
                  name="subjek"
                  value={form.subjek}
                  onChange={handleChange}
                  required
                  minLength={3}
                  placeholder="Topik atau perihal pertanyaan"
                  className="mt-1.5 w-full rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-[12.5px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand/60 focus:bg-paper"
                />
              </label>

              <label className="block">
                <span className="text-[12px] font-semibold text-ink/80">
                  Uraian Pesan <span className="text-rose-600">*</span>
                </span>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  required
                  minLength={5}
                  rows={5}
                  placeholder="Tuliskan pertanyaan, keluhan, atau keperluan Anda secara lengkap..."
                  className="mt-1.5 w-full resize-y rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-[12.5px] leading-relaxed text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand/60 focus:bg-paper"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-[12.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0b331c] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={14} /> {loading ? 'Sedang Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
