const fs = require('fs');
const path = require('path');
const prisma = require('./src/config/prisma');

// Fungsi pembantu untuk memformat nilai JavaScript ke format literal SQL aman
function formatSqlValue(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'boolean') return val ? '1' : '0';
  if (typeof val === 'number') return String(val);
  if (val instanceof Date) {
    return `'${val.toISOString().slice(0, 23).replace('T', ' ')}'`;
  }
  if (typeof val === 'object') {
    const jsonStr = JSON.stringify(val);
    return `'${jsonStr.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  }
  const str = String(val);
  return `'${str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r')}'`;
}

async function runBackup() {
  console.log('🔄 Memulai proses pencadangan basis data live...');

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const backupDir = path.join(__dirname, 'backups');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const filename = `backup_live_${timestamp}.sql`;
  const targetPath = path.join(backupDir, filename);

  const lines = [];
  lines.push('-- ========================================================');
  lines.push(`-- CADANGAN BASIS DATA RESMI MADRASAH & SPMB`);
  lines.push(`-- Tanggal Cadangan: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}`);
  lines.push('-- Format: Kompatibel dengan phpMyAdmin / MySQL 5.7+ / MariaDB');
  lines.push('-- ========================================================\n');
  lines.push('SET FOREIGN_KEY_CHECKS = 0;');
  lines.push('SET NAMES utf8mb4;\n');

  // Daftar seluruh model dan tabel Prisma
  const tables = [
    { name: 'users', model: prisma.user },
    { name: 'profilSekolah', model: prisma.profilSekolah },
    { name: 'strukturOrganisasi', model: prisma.strukturOrganisasi },
    { name: 'fasilitas', model: prisma.fasilitas },
    { name: 'kategoriBerita', model: prisma.kategoriBerita },
    { name: 'berita', model: prisma.berita },
    { name: 'pengumuman', model: prisma.pengumuman },
    { name: 'galeri', model: prisma.galeri },
    { name: 'pesanKontak', model: prisma.pesanKontak },
    { name: 'agenda', model: prisma.agenda },
    { name: 'prestasi', model: prisma.prestasi },
    { name: 'unduhan', model: prisma.unduhan },
    { name: 'faq', model: prisma.faq },
    { name: 'pendaftaranPpdb', model: prisma.pendaftaranPPDB },
    { name: 'biodataSiswaPpdb', model: prisma.biodataSiswaPPDB },
    { name: 'dataOrangTuaPpdb', model: prisma.dataOrangTuaPPDB },
    { name: 'dokumenPpdb', model: prisma.dokumenPPDB },
    { name: 'pengaturanPpdb', model: prisma.pengaturanPPDB },
    { name: 'tahunAjaran', model: prisma.tahunAjaran },
    { name: 'guru', model: prisma.guru },
    { name: 'kelas', model: prisma.kelas },
    { name: 'orangTua', model: prisma.orangTua },
    { name: 'siswa', model: prisma.siswa },
    { name: 'mataPelajaran', model: prisma.mataPelajaran },
    { name: 'nilai', model: prisma.nilai },
    { name: 'absensi', model: prisma.absensi },
    { name: 'tahfidz', model: prisma.tahfidz }
  ];

  let totalRows = 0;

  for (const item of tables) {
    if (!item.model || typeof item.model.findMany !== 'function') continue;

    try {
      const records = await item.model.findMany();
      if (!records || records.length === 0) continue;

      totalRows += records.length;
      lines.push(`-- Data untuk tabel: \`${item.name}\` (${records.length} baris)`);
      lines.push(`DELETE FROM \`${item.name}\`;`);

      const columns = Object.keys(records[0]);
      const columnList = columns.map((col) => `\`${col}\``).join(', ');

      const rowChunks = [];
      for (const row of records) {
        const values = columns.map((col) => formatSqlValue(row[col])).join(', ');
        rowChunks.push(`(${values})`);
      }

      // Tulis dalam batch 50 baris per INSERT untuk efisiensi phpMyAdmin
      const chunkSize = 50;
      for (let i = 0; i < rowChunks.length; i += chunkSize) {
        const slice = rowChunks.slice(i, i + chunkSize);
        lines.push(`INSERT INTO \`${item.name}\` (${columnList}) VALUES\n${slice.join(',\n')};`);
      }
      lines.push('');
    } catch (err) {
      console.warn(`⚠️ Catatan: Tidak dapat membaca tabel ${item.name}:`, err.message);
    }
  }

  lines.push('SET FOREIGN_KEY_CHECKS = 1;\n');
  lines.push('-- Selesai mencadangkan seluruh data live.');

  fs.writeFileSync(targetPath, lines.join('\n'), 'utf8');

  console.log('------------------------------------------------------------');
  console.log('✅ CADANGAN BASIS DATA BERHASIL DIBUAT!');
  console.log('------------------------------------------------------------');
  console.log(`📁 Lokasi Berkas : ${targetPath}`);
  console.log(`📊 Total Baris   : ${totalRows} data berhasil diekspor`);
  console.log('------------------------------------------------------------');
  console.log('💡 Anda dapat mengunduh berkas ini melalui File Manager cPanel');
  console.log('   di folder: /home/rasmante/mtsnwpendem-server/backups/');
  console.log('   dan mengunggah/mengimpornya ke phpMyAdmin kapan saja.');
  console.log('------------------------------------------------------------');

  process.exit(0);
}

runBackup().catch((error) => {
  console.error('❌ Terjadi kesalahan saat mencadangkan basis data:', error);
  process.exit(1);
});
