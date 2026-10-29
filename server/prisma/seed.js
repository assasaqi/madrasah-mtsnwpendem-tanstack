const bcrypt = require('bcryptjs');
const prisma = require('../src/config/prisma');

// Mengisi akun admin, profil sekolah, dan kategori berita awal
async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 12);

  await prisma.user.upsert({
    where: { email: 'admin@madrasah.sch.id' },
    update: {},
    create: {
      email: 'admin@madrasah.sch.id',
      password: hashedPassword,
      role: 'ADMIN',
      isVerified: true
    }
  });

  const sejarahContoh = 'Madrasah ini didirikan pada tahun 1985 atas prakarsa para tokoh agama dan cendekiawan muslim setempat. Sejak awal berdirinya, madrasah terus berkembang dari satu ruang belajar sederhana menjadi lembaga pendidikan Islam terpadu dengan berbagai fasilitas pendukung.';

  const profil = await prisma.profilSekolah.findFirst();
  if (!profil) {
    await prisma.profilSekolah.create({
      data: {
        namaSekolah: 'MA Negeri 1 Lombok',
        npsn: '12345678',
        akreditasi: 'A',
        tagline: 'Unggul dalam Prestasi, Anggun dalam Akhlak',
        deskripsi: 'Madrasah Aliyah Negeri unggulan dengan fasilitas dan kurikulum berbasis teknologi.',
        sejarah: sejarahContoh,
        alamat: 'Jl. Pendidikan No. 1, Mataram, Nusa Tenggara Barat',
        email: 'info@man1lombok.sch.id',
        telepon: '0370-621234',
        whatsapp: '081234567890',
        visi: 'Terwujudnya generasi religius, cerdas, dan berdaya saing global.',
        misi: ['Menyelenggarakan pendidikan islami berkualitas', 'Meningkatkan prestasi akademik dan non-akademik']
      }
    });
  } else if (!profil.sejarah) {
    await prisma.profilSekolah.update({
      where: { id: profil.id },
      data: { sejarah: sejarahContoh }
    });
  }

  if ((await prisma.strukturOrganisasi.count()) === 0) {
    await prisma.strukturOrganisasi.createMany({
      data: [
        { nama: 'Dr. H. Ahmad Dahlan, M.Pd.', jabatan: 'Kepala Madrasah', urutan: 1 },
        { nama: 'Ustadz Muhammad Ridwan, S.Ag.', jabatan: 'Wakil Kepala Kurikulum', urutan: 2 },
        { nama: 'Dra. Hj. Siti Aminah, M.S.I.', jabatan: 'Wakil Kepala Kesiswaan', urutan: 3 },
        { nama: 'Ustadz Faisal Basri, S.T.', jabatan: 'Wakil Kepala Sarana & Prasarana', urutan: 4 }
      ]
    });
  }

  if ((await prisma.fasilitas.count()) === 0) {
    await prisma.fasilitas.createMany({
      data: [
        { nama: 'Ruang Kelas Ber-AC & LCD', deskripsi: 'Kelas nyaman dengan pendingin udara, proyektor LCD, dan papan tulis interaktif.', ikon: 'building', urutan: 1 },
        { nama: 'Laboratorium Komputer & CBT', deskripsi: 'Puluhan unit komputer untuk pembelajaran IT dan ujian berbasis komputer.', ikon: 'monitor', urutan: 2 },
        { nama: 'Perpustakaan Digital', deskripsi: 'Koleksi buku fisik dan e-book dengan sistem peminjaman terintegrasi.', ikon: 'library', urutan: 3 },
        { nama: 'Laboratorium Sains (IPA)', deskripsi: 'Peralatan praktikum Fisika, Kimia, dan Biologi yang lengkap dan aman.', ikon: 'compass', urutan: 4 },
        { nama: 'Masjid & Pusat Tahfidz', deskripsi: 'Pusat ibadah berjamaah, pembinaan karakter, dan kegiatan tahfidz Al-Qur\'an.', ikon: 'sparkles', urutan: 5 },
        { nama: 'Lapangan Olahraga Multi-fungsi', deskripsi: 'Lapangan basket, futsal, voli, dan bulu tangkis untuk kegiatan siswa.', ikon: 'award', urutan: 6 }
      ]
    });
  }

  await prisma.kategoriBerita.createMany({
    data: [
      { nama: 'Kegiatan Sekolah', slug: 'kegiatan-sekolah' },
      { nama: 'Prestasi', slug: 'prestasi' },
      { nama: 'Pengumuman Resmi', slug: 'pengumuman-resmi' }
    ],
    skipDuplicates: true
  });

  console.log('Seeding data awal berhasil dijalankan.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
