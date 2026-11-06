---
name: anti-slop-design
description: >
  Buat antarmuka frontend tingkat produksi yang khas dan menghindari estetika
  AI generik. Gunakan saat membuat komponen web, UI game, landing page,
  dasbor, atau antarmuka visual apa pun. Mencegah sindrom gradien ungu,
  sudut membulat seragam, dan font bawaan Inter/Roboto.
metadata:
  author: misskim
  version: "1.0"
  origin: Konsep terinspirasi dari skill frontend-design Anthropic, disesuaikan untuk lingkungan kerja kita
---

# Anti-Slop Design

Dalam setiap pekerjaan frontend, larang keras desain klise yang "terlihat seperti buatan AI biasa".

## Tanda-tanda AI Slop (Dilarang Keras)

- Penggunaan font bawaan: Inter, Roboto, Arial, atau font sistem standar tanpa pertimbangan
- Gradien ungu (purple gradient) di atas latar belakang putih
- Sudut membulat (*border-radius*) yang seragam di semua elemen
- Tata letak yang serba rata tengah (*center-aligned only*)
- Pola klise: hero section membosankan + 3 kolom fitur yang kaku
- Bayangan (*box-shadow*) yang identik di setiap kartu
- Ilustrasi hambar tanpa karakter atau emosi

## Proses Desain

### 1. Pahami Konteks

- **Tujuan:** Masalah apa yang diselesaikan oleh antarmuka ini?
- **Pengguna:** Siapa yang menggunakannya? (Gamer? Pengembang? Pengguna umum?)
- **Nada (Pilih secara berani — salah satu dari berikut):**
  - Brutalisme / Minimalis / Retrofuturisme / Organik & Alam
  - Kemewahan (Luxury) / Ceria & Mainan (Playful) / Editorial / Art Deco
  - Industrial / Pastel Lembut / Neon 80-an / Minimalis Jepang
- **Faktor Pembeda:** Satu elemen unik apa yang akan diingat pengguna?

### 2. Prinsip Inti

**Tipografi:**
- Pilih font yang berkarakter dan menarik (eksplorasi dari Google Fonts)
- Pasangkan font display (judul) dengan font body (isi teks) yang serasi
- Gunakan kombinasi font yang berbeda di setiap proyek (jangan mengulang font yang sama terus-menerus)

**Warna:**
- Gunakan variabel CSS untuk memastikan konsistensi
- Tentukan warna dominan + warna aksen yang kuat (jangan membaginya secara rata tanpa hierarki)
- Eksplorasi palet warna baru di setiap desain

**Gerakan (*Motion*):**
- Utamakan solusi murni CSS (*CSS-only*) untuk halaman atau komponen tunggal
- Tampilan bertahap (*staggered reveal*) saat pemuatan halaman memberikan kesan pertama yang kuat
- Hadirkan interaksi tak terduga namun menyenangkan berbasis hover dan scroll

**Komposisi Ruang:**
- Gunakan tata letak asimetris, elemen saling bertumpuk (*overlap*), atau alur diagonal
- Berani memecah keteraturan grid
- Berikan ruang kosong (*whitespace*) yang lapang atau kepadatan visual yang disengaja

**Latar Belakang & Detail:**
- Jangan gunakan latar belakang warna polos biasa sebagai default
- Manfaatkan *gradient mesh*, tekstur *noise*, atau pola geometris halus
- Bangun kesan kedalaman menggunakan lapisan (*layers*), bayangan realistis, dan transparansi

### 3. Prinsip Khusus UI Game

Jika membuat antarmuka game atau interaktif:

- **Utamakan Imersi:** UI harus terasa menyatu sebagai bagian dari dunia game
- **Pemanfaatan Aset:** Gunakan aset gambar, model, atau grafis berkualitas tinggi
- **Animasi:** Kombinasikan transisi CSS dan `requestAnimationFrame` untuk performa tinggi
- **Umpan Balik Suara:** Sediakan efek audio saat klik/hover (jika didukung)
- **Responsif:** Perhatikan batasan lingkungan seperti Telegram Mini App (area aman WebView / *safe-area*)

## Daftar Periksa Kualitas

- [ ] Tidak menggunakan font default Inter/Roboto/Arial?
- [ ] Bebas dari gradien ungu klise buatan AI?
- [ ] Sudut membulat (*border-radius*) tidak kaku dan seragam di semua komponen?
- [ ] Tata letak memiliki elemen asimetris atau hierarki yang dinamis?
- [ ] Font dan warna berbeda dari proyek-proyek sebelumnya?
- [ ] Hasil akhirnya tidak memicu komentar "apakah ini template buatan AI?"
