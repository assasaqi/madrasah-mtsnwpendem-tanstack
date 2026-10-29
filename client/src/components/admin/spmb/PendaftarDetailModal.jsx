import { useMemo, useState } from 'react';
import { AlertCircle, Award, Check, CheckCircle2, Circle, FileCheck2, RotateCcw, Save, X } from 'lucide-react';
import { spmbService } from '../../../services/spmbService';
import { getErrorMessage, getField, getFileUrl } from '../../../utils/helpers';
import { SPMB_DOKUMEN_LABEL, normalizeStatus } from '../../../utils/spmb';
import { Modal, Button, Tag, StatusDot, Table, Th, Td, Field, Textarea, cx } from '../ui';
import PendaftarStatus from './PendaftarStatus';

// Menampilkan biodata, pemeriksaan dokumen, catatan, dan keputusan satu pendaftar
export default function PendaftarDetailModal({ pendaftar, onClose, onChanged }) {
  const [catatan, setCatatan] = useState(pendaftar?.catatan || '');
  const [catatanTersimpanNilai, setCatatanTersimpanNilai] = useState(pendaftar?.catatan || '');
  const [dokumenList, setDokumenList] = useState(
    Array.isArray(pendaftar?.dokumen) ? pendaftar.dokumen : []
  );
  const [processingStatus, setProcessingStatus] = useState('');
  const [savingCatatan, setSavingCatatan] = useState(false);
  const [catatanTersimpan, setCatatanTersimpan] = useState(false);

  const catatanBerubah = catatan.trim() !== catatanTersimpanNilai.trim();
  const sedangSibuk = savingCatatan || Boolean(processingStatus);

  const ringkasanBerkas = useMemo(() => {
    const total = dokumenList.length;
    const terverifikasi = dokumenList.filter((dok) => dok.isVerified).length;
    return { total, terverifikasi, belum: total - terverifikasi };
  }, [dokumenList]);

  // Menentukan tombol keputusan yang boleh dipakai beserta alasan penonaktifannya
  const aturanKeputusan = useMemo(() => {
    const statusSekarang = normalizeStatus(pendaftar.status);
    const berkasLengkap =
      ringkasanBerkas.total > 0 && ringkasanBerkas.terverifikasi === ringkasanBerkas.total;
    const alasanPenolakanSiap = catatan.trim().length > 0;

    return {
      LULUS_ADMINISTRASI: {
        boleh: berkasLengkap && statusSekarang !== 'LULUS_ADMINISTRASI',
        alasan: berkasLengkap
          ? 'Pendaftar sudah berstatus lulus administrasi.'
          : `Aktif setelah semua berkas terverifikasi (${ringkasanBerkas.terverifikasi}/${ringkasanBerkas.total}).`
      },
      LULUS_FINAL: {
        boleh: statusSekarang === 'LULUS_ADMINISTRASI',
        alasan:
          statusSekarang === 'LULUS_FINAL'
            ? 'Pendaftar sudah ditetapkan lulus final.'
            : 'Aktif setelah pendaftar lulus administrasi.'
      },
      TIDAK_LULUS: {
        boleh: statusSekarang !== 'TIDAK_LULUS' && alasanPenolakanSiap,
        alasan:
          statusSekarang === 'TIDAK_LULUS'
            ? 'Pendaftar sudah ditandai tidak lulus.'
            : 'Tulis alasan penolakan di catatan verifikator terlebih dahulu.'
      },
      DITINJAU: {
        boleh: statusSekarang !== 'DITINJAU',
        alasan: 'Pendaftar sudah berada di tahap ditinjau.'
      }
    };
  }, [pendaftar.status, ringkasanBerkas, catatan]);

  // Merangkum syarat tiap keputusan supaya admin tahu kenapa sebuah tombol nonaktif
  const syaratKeputusan = useMemo(() => {
    const statusSekarang = normalizeStatus(pendaftar.status);

    return [
      {
        label: `Berkas terverifikasi ${ringkasanBerkas.terverifikasi}/${ringkasanBerkas.total}`,
        terpenuhi:
          ringkasanBerkas.total > 0 && ringkasanBerkas.terverifikasi === ringkasanBerkas.total
      },
      {
        label: 'Sudah lulus administrasi',
        terpenuhi: statusSekarang === 'LULUS_ADMINISTRASI' || statusSekarang === 'LULUS_FINAL'
      },
      { label: 'Alasan penolakan diisi', terpenuhi: catatan.trim().length > 0 }
    ];
  }, [pendaftar.status, ringkasanBerkas, catatan]);

  // Menandai satu dokumen sebagai terverifikasi atau membatalkannya
  const handleVerifyDokumen = async (dok) => {
    try {
      const updated = await spmbService.verifyDokumen(dok.id, !dok.isVerified);
      const nextVerified = updated?.data?.isVerified ?? !dok.isVerified;
      setDokumenList((prev) =>
        prev.map((item) => (item.id === dok.id ? { ...item, isVerified: nextVerified } : item))
      );
      await onChanged();
    } catch (err) {
      alert(getErrorMessage(err, 'Gagal memperbarui verifikasi dokumen.'));
    }
  };

  // Menyimpan catatan verifikator tanpa mengubah status pendaftaran
  const handleSimpanCatatan = async () => {
    try {
      setSavingCatatan(true);
      await spmbService.updateStatus(pendaftar.id, normalizeStatus(pendaftar.status), catatan);
      await onChanged();
      setCatatanTersimpanNilai(catatan);
      setCatatanTersimpan(true);
    } catch (err) {
      alert(getErrorMessage(err, 'Gagal menyimpan catatan verifikator.'));
    } finally {
      setSavingCatatan(false);
    }
  };

  // Menetapkan status kelulusan pendaftar setelah konfirmasi admin
  const handleUpdateStatus = async (status) => {
    const aturan = aturanKeputusan[status];
    if (!aturan?.boleh) {
      alert(aturan?.alasan || 'Keputusan ini belum bisa diambil.');
      return;
    }

    const konfirmasi = {
      LULUS_ADMINISTRASI: 'Semua berkas sudah terverifikasi. Tandai pendaftar ini lulus administrasi?',
      LULUS_FINAL: 'Tetapkan pendaftar ini lulus final sebagai siswa baru?',
      TIDAK_LULUS: `Tandai pendaftar ini tidak lulus seleksi?\n\nAlasan yang dikirim ke pendaftar: "${catatan.trim()}"`,
      DITINJAU: 'Kembalikan pendaftar ini ke tahap ditinjau?'
    };

    if (!window.confirm(konfirmasi[status] || 'Ubah status pendaftar ini?')) return;

    try {
      setProcessingStatus(status);
      await spmbService.updateStatus(pendaftar.id, status, catatan);
      await onChanged();
      onClose();
    } catch (err) {
      alert(getErrorMessage(err, 'Gagal memperbarui status pendaftaran.'));
    } finally {
      setProcessingStatus('');
    }
  };

  // Menutup modal sambil mengingatkan catatan yang belum disimpan
  const handleClose = () => {
    if (catatanBerubah && !window.confirm('Catatan verifikator belum disimpan. Tutup tetap?')) return;
    onClose();
  };

  return (
    <Modal
      open
      onClose={handleClose}
      title="Detail & verifikasi pendaftar"
      description="Periksa biodata dan dokumen, tulis catatan bila perlu, lalu tetapkan keputusannya."
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={handleClose} disabled={sedangSibuk}>
            Tutup
          </Button>
          <Button
            variant="primary"
            icon={Save}
            disabled={!catatanBerubah || sedangSibuk}
            onClick={handleSimpanCatatan}
          >
            {savingCatatan ? 'Menyimpan…' : 'Simpan catatan'}
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-line bg-[#faf8f3] px-3.5 py-2.5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Status saat ini
            </p>
            <div className="mt-1">
              <PendaftarStatus status={pendaftar.status} />
            </div>
          </div>
          <Tag>{getField(pendaftar, ['nomorPendaftaran', 'noPendaftaran', 'no_pendaftaran'])}</Tag>
        </div>

        <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {[
            {
              label: 'Nama lengkap',
              value: getField(pendaftar, ['biodata.namaLengkap', 'namaLengkap', 'nama_lengkap', 'nama'])
            },
            {
              label: 'Asal sekolah',
              value: getField(pendaftar, ['biodata.asalSekolah', 'asalSekolah', 'asal_sekolah'])
            },
            {
              label: 'NIK / NISN',
              value: `${getField(pendaftar, ['biodata.nik', 'nik'])} / ${getField(pendaftar, ['biodata.nisn', 'nisn'])}`
            },
            {
              label: 'Nama ayah / ibu',
              value: `${getField(pendaftar, ['orangTua.namaAyah', 'namaAyah'])} / ${getField(pendaftar, ['orangTua.namaIbu', 'namaIbu'])}`
            },
            {
              label: 'WhatsApp wali',
              value: getField(pendaftar, ['orangTua.noHpAyah', 'orangTua.noHpIbu', 'noHpAyah', 'noWhatsapp'])
            },
            {
              label: 'Alamat',
              value: getField(pendaftar, ['biodata.alamat', 'alamat'], 'Belum diisi')
            }
          ].map((row) => (
            <div key={row.label}>
              <dt className="text-[10.5px] uppercase tracking-[0.1em] text-muted">{row.label}</dt>
              <dd className="mt-0.5 text-[12.5px] font-medium text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div>
          <div className="mb-2 flex items-center justify-between gap-2">
            <h4 className="text-[12.5px] font-semibold text-ink">Dokumen persyaratan</h4>
            <Tag>{`${ringkasanBerkas.terverifikasi}/${ringkasanBerkas.total} terverifikasi`}</Tag>
          </div>

          {dokumenList.length > 0 ? (
            <div className="overflow-hidden rounded-lg border border-line">
              <Table>
                <thead>
                  <tr>
                    <Th>Jenis dokumen</Th>
                    <Th>Status</Th>
                    <Th align="right">Tindakan</Th>
                  </tr>
                </thead>
                <tbody>
                  {dokumenList.map((doc, dIdx) => {
                    const jenis = doc.jenisDokumen || doc.jenis || doc.type || '';
                    const fileLink = getFileUrl(doc.fileUrl || doc.filePath || doc.url);

                    return (
                      <tr key={doc.id || dIdx}>
                        <Td className="font-medium">{SPMB_DOKUMEN_LABEL[jenis] || jenis || 'Dokumen'}</Td>
                        <Td>
                          {doc.isVerified ? (
                            <StatusDot tone="brand">Terverifikasi</StatusDot>
                          ) : (
                            <StatusDot tone="amber">Belum diperiksa</StatusDot>
                          )}
                        </Td>
                        <Td align="right">
                          <div className="flex flex-col items-end gap-1 sm:flex-row sm:items-center sm:justify-end sm:gap-2">
                            {fileLink && (
                              <a
                                href={fileLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whitespace-nowrap text-[10.5px] font-semibold text-brand hover:underline sm:text-[11.5px]"
                              >
                                Lihat berkas
                              </a>
                            )}
                            <Button
                              size="sm"
                              variant={doc.isVerified ? 'secondary' : 'primary'}
                              disabled={sedangSibuk}
                              onClick={() => handleVerifyDokumen(doc)}
                            >
                              {doc.isVerified ? 'Batalkan' : 'Verifikasi'}
                            </Button>
                          </div>
                        </Td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50/60 px-3.5 py-2.5 text-[11.5px] text-[#8a5a12]">
              <AlertCircle size={14} /> Pendaftar belum mengunggah dokumen persyaratan.
            </div>
          )}
        </div>

        <Field
          label="Catatan verifikator"
          hint={
            catatanBerubah
              ? 'Ada perubahan yang belum disimpan. Tekan "Simpan catatan".'
              : catatanTersimpan
                ? 'Catatan terbaru sudah tersimpan.'
                : 'Catatan ini terlihat oleh pendaftar, misalnya alasan berkas perlu diperbaiki.'
          }
        >
          <Textarea
            rows={3}
            value={catatan}
            onChange={(e) => {
              setCatatan(e.target.value);
              setCatatanTersimpan(false);
            }}
            placeholder="Contoh: Pas foto belum berlatar merah, mohon unggah ulang."
          />
        </Field>

        <div className="rounded-lg border border-line bg-[#faf8f3] p-3.5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                Keputusan verifikasi
              </p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-muted">
                Terpisah dari penyimpanan catatan. Keputusan langsung mengubah status pendaftar.
              </p>
            </div>
            <Tag>
              {ringkasanBerkas.belum > 0
                ? `${ringkasanBerkas.belum} berkas belum diperiksa`
                : 'Semua berkas terverifikasi'}
            </Tag>
          </div>

          {ringkasanBerkas.belum > 0 && (
            <p className="mt-2 flex items-start gap-1.5 text-[11px] leading-relaxed text-[#8a5a12]">
              <AlertCircle size={12} className="mt-0.5 shrink-0" />
              Tombol lulus administrasi baru aktif setelah seluruh berkas ditandai terverifikasi.
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="primary"
              icon={Check}
              disabled={sedangSibuk || !aturanKeputusan.LULUS_ADMINISTRASI.boleh}
              title={
                aturanKeputusan.LULUS_ADMINISTRASI.boleh
                  ? undefined
                  : aturanKeputusan.LULUS_ADMINISTRASI.alasan
              }
              onClick={() => handleUpdateStatus('LULUS_ADMINISTRASI')}
            >
              {processingStatus === 'LULUS_ADMINISTRASI' ? 'Menyimpan…' : 'Luluskan administrasi'}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              icon={Award}
              disabled={sedangSibuk || !aturanKeputusan.LULUS_FINAL.boleh}
              title={
                aturanKeputusan.LULUS_FINAL.boleh ? undefined : aturanKeputusan.LULUS_FINAL.alasan
              }
              onClick={() => handleUpdateStatus('LULUS_FINAL')}
            >
              {processingStatus === 'LULUS_FINAL' ? 'Menyimpan…' : 'Tetapkan lulus final'}
            </Button>
            <Button
              size="sm"
              variant="danger"
              icon={X}
              disabled={sedangSibuk || !aturanKeputusan.TIDAK_LULUS.boleh}
              title={
                aturanKeputusan.TIDAK_LULUS.boleh ? undefined : aturanKeputusan.TIDAK_LULUS.alasan
              }
              onClick={() => handleUpdateStatus('TIDAK_LULUS')}
            >
              {processingStatus === 'TIDAK_LULUS' ? 'Menyimpan…' : 'Tidak lulus'}
            </Button>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {syaratKeputusan.map((syarat) => (
              <span
                key={syarat.label}
                className={cx(
                  'inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-medium',
                  syarat.terpenuhi
                    ? 'border-brand/25 bg-brand-soft/60 text-brand'
                    : 'border-line bg-white text-muted'
                )}
              >
                {syarat.terpenuhi ? <CheckCircle2 size={11} /> : <Circle size={11} />}
                {syarat.label}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-col items-start gap-2 border-t border-line pt-2.5 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-1.5 text-[10.5px] text-muted">
              <FileCheck2 size={12} /> Status berubah tanpa menutup data pendaftar lain.
            </p>
            <button
              type="button"
              disabled={sedangSibuk || !aturanKeputusan.DITINJAU.boleh}
              title={aturanKeputusan.DITINJAU.boleh ? undefined : aturanKeputusan.DITINJAU.alasan}
              onClick={() => handleUpdateStatus('DITINJAU')}
              className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[11px] font-medium text-muted transition-colors hover:text-ink disabled:opacity-50"
            >
              <RotateCcw size={12} />
              {processingStatus === 'DITINJAU' ? 'Mengembalikan…' : 'Kembalikan ke ditinjau'}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
