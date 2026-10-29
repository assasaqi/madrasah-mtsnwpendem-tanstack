import { formatDate, getField, getFileUrl } from '../../../utils/helpers';

// Menampilkan surat keterangan lulus siap cetak berdasarkan data pendaftaran,
// profil madrasah, dan pengaturan surat dari panel admin.
export default function SuratKeteranganLulus({ pendaftaran, user, pengaturan, profil }) {
  const statusSPMB = String(pendaftaran?.status || 'BELUM_ISI').toUpperCase();

  if (!['LULUS_ADMINISTRASI', 'LULUS_FINAL'].includes(statusSPMB)) return null;

  const namaSekolah = profil?.namaSekolah || 'Madrasah';
  const alamat = profil?.alamat || '';
  const telepon = profil?.telepon || '';
  const whatsapp = profil?.whatsapp || '';
  const email = profil?.email || '';
  const logo = profil?.logo ? getFileUrl(profil.logo) : '';

  const tahunAjaran = pengaturan?.tahunAjaran || '';
  const kodeSurat = pengaturan?.kodeSurat || 'SPMB/SKL';
  const tempatPenerbitan = pengaturan?.tempatPenerbitan || '';
  const namaKetuaPanitia = pengaturan?.namaKetuaPanitia || '';
  const nipKetuaPanitia = pengaturan?.nipKetuaPanitia || '';
  const namaKepalaMadrasah = pengaturan?.namaKepalaMadrasah || '';
  const nipKepalaMadrasah = pengaturan?.nipKepalaMadrasah || '';
  const catatanSurat = pengaturan?.catatanSurat || '';

  const nomorPendaftaran = getField(
    pendaftaran,
    ['nomorPendaftaran', 'noPendaftaran', 'no_pendaftaran'],
    '-'
  );
  const namaSiswa = getField(
    pendaftaran,
    ['biodata.namaLengkap', 'namaLengkap', 'nama_lengkap', 'nama'],
    user?.nama || '-'
  );
  const nisn = getField(pendaftaran, ['biodata.nisn', 'nisn'], '-');
  const nik = getField(pendaftaran, ['biodata.nik', 'nik'], '-');
  const tempatLahir = getField(pendaftaran, ['biodata.tempatLahir', 'tempatLahir'], '-');
  const tanggalLahir = formatDate(
    getField(pendaftaran, ['biodata.tanggalLahir', 'tanggalLahir'], null)
  );
  const asalSekolah = getField(
    pendaftaran,
    ['biodata.asalSekolah', 'asalSekolah', 'asal_sekolah'],
    '-'
  );
  const namaAyah = getField(pendaftaran, ['orangTua.namaAyah', 'namaAyah'], '');
  const namaIbu = getField(pendaftaran, ['orangTua.namaIbu', 'namaIbu'], '');
  const namaOrangTua =
    [namaAyah, namaIbu].filter(Boolean).join(' / ') || '-';

  const tahunSurat = tahunAjaran ? tahunAjaran.split('/')[0] : new Date().getFullYear();
  const nomorSurat = [kodeSurat, tahunSurat, nomorPendaftaran].filter(Boolean).join('/');
  const hasilSeleksi =
    statusSPMB === 'LULUS_FINAL'
      ? 'LULUS SELEKSI FINAL / DITERIMA'
      : 'LULUS SELEKSI ADMINISTRASI';
  const keteranganTahun = tahunAjaran ? ` Tahun Ajaran ${tahunAjaran}` : '';

  const barisIdentitas = [
    ['Nomor pendaftaran', nomorPendaftaran],
    ['Nama lengkap', namaSiswa],
    ['NISN / NIK', `${nisn} / ${nik}`],
    ['Tempat, tanggal lahir', `${tempatLahir}, ${tanggalLahir}`],
    ['Asal sekolah', asalSekolah],
    ['Nama orang tua / wali', namaOrangTua]
  ];

  return (
    <div className="hidden print:block font-sans text-[12px] leading-relaxed text-black">
      <div className="mx-auto max-w-[180mm] bg-white">
        <header className="border-b-2 border-black pb-3">
          <div className="flex items-center gap-4">
            {logo ? (
              <img src={logo} alt={`Logo ${namaSekolah}`} className="h-16 w-16 object-contain" />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center border border-black text-xl font-semibold">
                {namaSekolah.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="min-w-0 flex-1 text-center">
              <p className="text-[13px] font-semibold uppercase tracking-wide">{namaSekolah}</p>
              {alamat && <p className="text-[10.5px] leading-snug">{alamat}</p>}
              <p className="text-[10.5px] leading-snug">
                {[
                  telepon ? `Telp. ${telepon}` : '',
                  whatsapp ? `WA ${whatsapp}` : '',
                  email || ''
                ]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            </div>
          </div>
        </header>

        <div className="mt-6 text-center">
          <h1 className="text-[14px] font-semibold uppercase tracking-wide underline">
            Surat Keterangan Kelulusan
          </h1>
          <p className="mt-1 text-[11px]">Nomor: {nomorSurat}</p>
        </div>

        <p className="mt-5 text-justify">
          Panitia Penerimaan Peserta Didik Baru (SPMB) {namaSekolah} menerangkan bahwa berdasarkan
          hasil verifikasi dokumen dan tahapan seleksi penerimaan peserta didik baru
          {keteranganTahun}, dengan ini menyatakan bahwa:
        </p>

        <table className="mt-4 w-full border-collapse text-[11.5px]">
          <tbody>
            {barisIdentitas.map(([label, value]) => (
              <tr key={label}>
                <td className="w-[42%] border border-black px-2.5 py-1.5 align-top">{label}</td>
                <td className="border border-black px-2.5 py-1.5 align-top font-semibold">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-5 border border-black px-3 py-2.5 text-center">
          <p className="text-[10px] uppercase tracking-wide">Hasil seleksi penerimaan</p>
          <p className="mt-0.5 text-[13px] font-semibold uppercase">{hasilSeleksi}</p>
          <p className="mt-0.5 text-[10.5px]">
            Sebagai peserta didik baru {namaSekolah}
            {keteranganTahun}
          </p>
        </div>

        <p className="mt-4 text-justify">
          Surat keterangan ini diterbitkan sebagai bukti sah untuk keperluan pendaftaran ulang serta
          verifikasi fisik dokumen lanjutan di sekretariat SPMB.
        </p>

        {catatanSurat && (
          <p className="mt-3 text-justify text-[11px]">
            <span className="font-semibold">Catatan: </span>
            {catatanSurat}
          </p>
        )}

        <div className="mt-8 flex justify-between gap-10">
          <div className="w-1/2 text-center">
            <p>Ketua Panitia SPMB,</p>
            <div className="mt-14">
              <p className="font-semibold uppercase underline">{namaKetuaPanitia || '…………………'}</p>
              {nipKetuaPanitia && <p className="text-[10.5px]">NIP. {nipKetuaPanitia}</p>}
            </div>
          </div>

          <div className="w-1/2 text-center">
            <p>
              {tempatPenerbitan ? `${tempatPenerbitan}, ` : ''}
              {formatDate(new Date())}
              <br />
              Kepala Madrasah,
            </p>
            <div className="mt-14">
              <p className="font-semibold uppercase underline">
                {namaKepalaMadrasah || '…………………'}
              </p>
              {nipKepalaMadrasah && <p className="text-[10.5px]">NIP. {nipKepalaMadrasah}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
