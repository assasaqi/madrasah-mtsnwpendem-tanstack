---
name: design-taste-frontend
description: >
  Skill frontend anti-klise (anti-slop) untuk landing page, portofolio, dan
  desain ulang (redesign). Agen membaca brief, menyimpulkan arah desain yang
  tepat, dan menghasilkan antarmuka yang tidak terlihat seperti template buatan AI.
  Menggunakan sistem desain nyata bila relevan, mengutamakan audit pada redesign,
  dan menerapkan pemeriksaan ketat sebelum rilis (pre-flight check).
---

# tasteskill: Skill Frontend Anti-Klise (Anti-Slop)

> Landing page, portofolio, dan desain ulang. Bukan untuk dasbor internal, tabel data padat, atau alur produk bertahap banyak.
> Setiap aturan di bawah ini bersifat **kontekstual**. Tidak ada yang berjalan otomatis tanpa pertimbangan. Baca brief terlebih dahulu, lalu terapkan hanya apa yang sesuai.

---

## 0. INFERENSI BRIEF (Pahami Situasi Sebelum Menyentuh Kode)

Sebelum menyentuh kode atau memutar tombol konfigurasi, **simpulkan apa yang sebenarnya diinginkan pengguna**. Sebagian besar keluaran desain AI berkualitas buruk karena model langsung melompat ke estetika default alih-alih memahami konteks kebutuhan pengguna.

### 0.A Baca sinyal-sinyal ini terlebih dahulu

1. **Jenis halaman** - landing page (SaaS / konsumen / agensi / acara), portofolio (developer / desainer / studio kreatif), desain ulang (mempertahankan vs merombak total), editorial / blog.
2. **Kata nuansa (*vibe words*) yang digunakan pengguna** - "minimalis", "tenang", "bergaya Linear", "Awwwards", "brutalis", "konsumen premium", "mirip Apple", "ceria/playful", "B2B serius", "editorial", "gaya agensi", "efek kaca/glassy", "dark tech".
3. **Sinyal referensi** - URL yang ditautkan, tangkapan layar yang dilampirkan, produk yang disebutkan, merek pesaing mereka.
4. **Target audiens** - panel pengadaan B2B vs konsumen peka desain vs perekrut yang memindai portofolio. Audiens yang menentukan estetika, bukan selera pribadi Anda.
5. **Aset merek yang sudah ada** - logo, warna, jenis huruf, fotografi. Untuk desain ulang, ini adalah bahan awal wajib, bukan input opsional (lihat Bagian 11).
6. **Batasan khusus (*quiet constraints*)** - audiens dengan fokus aksesibilitas tinggi, sektor publik, industri terregulasi, e-commerce berbasis kepercayaan tinggi, produk anak-anak. Batasan ini MENGALAHKAN preferensi estetika apa pun.

### 0.B Tuliskan satu baris "Analisis Desain" sebelum menghasilkan kode

Sebelum kode apa pun ditulis, nyatakan dalam satu baris: **"Membaca kebutuhan ini sebagai: \<jenis halaman> untuk \<audiens>, dengan bahasa gaya \<nuansa>, mengarah ke \<sistem desain atau keluarga estetika>."**

Contoh pernyataan:
- _"Membaca kebutuhan ini sebagai: Landing page SaaS B2B untuk pembeli teknis, dengan bahasa minimalis bergaya Linear, mengarah ke utilitas Tailwind + Geist + animasi terkendali."_
- _"Membaca kebutuhan ini sebagai: Portofolio desainer solo untuk manajer perekrutan, dengan bahasa editorial / tipografi kinetik, mengarah ke CSS native + animasi berbasis gulir + tipografi kustom."_
- _"Membaca kebutuhan ini sebagai: Desain ulang situs layanan sektor publik, dengan bahasa berbasis kepercayaan, mengarah ke GOV.UK Frontend atau USWDS."_

### 0.C Jika brief ambigu, tanyakan SATU hal, jangan menebak liar

Ajukan tepat **satu** pertanyaan klarifikasi - jangan pernah membanjiri dengan daftar pertanyaan panjang - dan hanya jika arah desain benar-benar bercabang. Contoh: _"Apakah tampilan ini sebaiknya lebih mendekati gaya bersih minimalis ala Linear atau eksperimental ala Awwwards?"_

Jika Anda dapat menyimpulkan dengan yakin dari konteks, **jangan bertanya**. Cukup nyatakan analisis desain Anda dan langsung lanjutkan.

### 0.D Disiplin Anti-Default

Jangan pernah menggunakan pola bawaan umum AI: gradien ungu di atas mesh gelap, hero rata tengah di atas latar gelap, tiga kartu fitur yang identik, efek glassmorphism murahan di mana-mana, animasi mikro berulang tanpa henti, atau kombinasi Inter + slate-900. Ini semua adalah ciri khas keluaran AI yang membosankan. Lampaui kebiasaan ini secara sengaja berdasarkan analisis desain.

---

## 1. TIGA TOMBOL PENGATUR (*THE THREE DIALS*) (Konfigurasi Inti)

Setelah analisis desain ditentukan, atur tiga nilai pengatur ini. Setiap keputusan tata letak, gerakan, dan kepadatan visual di bawah dikendalikan oleh nilai-nilai ini.

- **`DESIGN_VARIANCE: 8`** - 1 = Simetri Sempurna, 10 = Kekacauan Artistik Bebas
- **`MOTION_INTENSITY: 6`** - 1 = Statis, 10 = Sinematik / Fisika Penuh
- **`VISUAL_DENSITY: 4`** - 1 = Galeri Seni / Sangat Lapang, 10 = Kokpit Pesawat / Data Sangat Padat

**Titik Awal Default:** `8 / 6 / 4`. Gunakan ini kecuali analisis desain mengharuskan penyesuaian. Jangan meminta pengguna mengedit file ini - penyesuaian dilakukan langsung dalam alur obrolan.

### 1.A Inferensi Tombol (analisis desain → nilai tombol)

| Sinyal Masukan                                                     | VARIANCE       | MOTION | DENSITY        |
| ------------------------------------------------------------------ | -------------- | ------ | -------------- |
| "minimalis / bersih / tenang / editorial / gaya Linear"            | 5-6            | 3-4    | 2-3            |
| "konsumen premium / ala Apple / kemewahan / branding kuat"         | 7-8            | 5-7    | 3-4            |
| "playful / liar / Dribbble / Awwwards / eksperimental / agensi"    | 9-10           | 8-10   | 3-4            |
| "landing page / portofolio / situs pemasaran (default umum)"       | 7-9            | 6-8    | 3-5            |
| "fokus kepercayaan / sektor publik / regulasi ketat / aksesibilitas"| 3-4           | 2-3    | 4-5            |
| "desain ulang - pertahankan identitas (preserve)"                  | samakan yang ada| +1     | samakan yang ada|
| "desain ulang - perombakan total (overhaul)"                       | +2             | +2     | samakan yang ada|

### 1.B Preset Skenario Penggunaan

| Skenario Penggunaan           | VARIANCE | MOTION  | DENSITY |
| ----------------------------- | -------- | ------- | ------- |
| Landing Page (SaaS komersial) | 7        | 6       | 4       |
| Landing Page (Agensi / kreatif)| 9       | 8       | 3       |
| Landing Page (Konsumen premium)| 7       | 6       | 3       |
| Portofolio (Desainer / studio)| 8        | 7       | 3       |
| Portofolio (Developer)        | 6        | 5       | 4       |
| Editorial / Blog              | 6        | 4       | 3       |
| Layanan sektor publik         | 3        | 2       | 5       |
| Desain ulang - pertahankan    | samakan  | sama+1  | samakan |
| Desain ulang - perombakan     | +2       | +2      | samakan |

### 1.C Bagaimana Nilai Pengatur Mengendalikan Keluaran

Gunakan nama-nama variabel ini (atau nilai yang disesuaikan pengguna) secara konsisten. Referensi silang di seluruh dokumen ini merujuk ke nama variabel eksak ini - jangan pernah membuat alias baru seperti `LAYOUT_VARIANCE` atau `ANIM_LEVEL`.

---

## 2. PETA BRIEF → SISTEM DESAIN

Setelah Anda memiliki analisis desain (Bagian 0) dan nilai tombol (Bagian 1), pilih fondasi yang tepat. Jangan membuat CSS manual untuk hal-hal yang sudah memiliki paket resmi. Jangan berpura-pura bahwa sebuah tren estetika adalah sistem desain resmi.

### 2.A Kapan menggunakan sistem desain nyata (gunakan paket resmi)

| Karakteristik Brief                       | Pilihan Utama                                              | Alasan                                                       |
| ----------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| Microsoft / SaaS perusahaan / dasbor      | `@fluentui/react-components` atau `@fluentui/web-components`| Fluent UI resmi, token Microsoft, aksesibilitas matang       |
| Bernuansa Google, produk rasa Material    | `@material/web` + token Material 3                         | Resmi, mendukung kustomisasi tema Material Theming           |
| Analitik B2B / korporat gaya IBM          | `@carbon/react` + `@carbon/styles`                         | Carbon resmi, pola kepadatan data yang sangat matang         |
| Permukaan aplikasi Shopify                | Web components `polaris.js` / Polaris React                | Standar wajib antarmuka admin Shopify                        |
| Produk bergaya Atlassian / Jira           | `@atlaskit/*` + `@atlaskit/tokens`                         | Sistem Desain Atlassian resmi                                |
| Devtool atau komunitas ala GitHub         | `@primer/css` atau `@primer/react-brand`                   | Primer resmi; varian Brand khusus untuk pemasaran            |
| Layanan sektor publik Inggris (UK)        | `govuk-frontend`                                           | Standar wajib secara regulasi hukum                          |
| Sektor publik AS / utilitas terpercaya    | `uswds`                                                    | Standar sistem desain pemerintah AS                          |
| MVP cepat untuk bisnis lokal / agensi     | Bootstrap 5.3                                              | Klasik, cepat dikembangkan, stabil                           |
| Fondasi React modern yang aksesibel       | `@radix-ui/themes`                                         | Komponen primitif dengan tema visual yang rapi               |
| SaaS modern dengan kepemilikan komponen   | shadcn/ui (`npx shadcn@latest add ...`)                    | Kode dimiliki sendiri, mudah dimodifikasi, jangan biarkan default|
| Pemasaran SaaS modern / AI berbasis Tailwind| Utilitas Tailwind v4 + varian `dark:`                    | Pilihan default untuk indie hacker dan tim tangkas           |

**Aturan Kejujuran Teknis:** jika brief mengarah ke salah satu sistem di atas, pasang dan gunakan paket **resmi**. Jangan meniru CSS-nya secara manual. Jangan mengimpor token sistem tetapi menimpa 90% isinya secara acak.

**Satu sistem per proyek.** Jangan mencampur Fluent React dengan Carbon di pohon komponen yang sama. Jangan mengimpor komponen shadcn/ui ke dalam aplikasi Material 3.

### 2.B Kapan brief merupakan estetika, bukan sistem desain

Untuk arah estetika di bawah ini, **tidak ada satu paket resmi tunggal**. Bangun dengan CSS native + Tailwind + pustaka komponen yang terawat. Berikan komentar jujur di kode tentang bagian mana yang merupakan inspirasi estetika vs materi resmi.

| Estetika                        | Implementasi yang Jujur & Benar                                                                                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Glassmorphism / efek kaca       | `backdrop-filter`, garis tepi berlapis, lapisan sorotan (*highlight overlays*). Sediakan warna solid untuk preferensi `prefers-reduced-transparency`.                                                                       |
| Bento Grid (grid ala Apple)     | CSS Grid dengan variasi ukuran sel. Tidak ada satu pustaka khusus yang memilikinya.                                                                                                                                        |
| Brutalisme                      | CSS native, tipografi monospace, garis tepi tegas tanpa pembulatan. Tanpa pustaka khusus.                                                                                                                                  |
| Editorial / Majalah             | Tipografi serif terkurasi, grid asimetris, ruang kosong luas. Tanpa pustaka khusus.                                                                                                                                        |
| Dark tech / Peretas             | Font mono + aksen neon terukur, motif terminal. Tanpa pustaka khusus.                                                                                                                                                      |
| Gradien Aurora / Mesh           | SVG atau kombinasi gradien radial bertumpuk. Tanpa pustaka khusus.                                                                                                                                                         |
| Tipografi Kinetik               | Animasi CSS native, animasi berbasis gulir, GSAP untuk efek pembajakan gulir (*scroll hijack*).                                                                                                                            |
| **Apple Liquid Glass**          | Apple mendokumentasikan ini hanya untuk platform Apple native. **Tidak ada berkas resmi `liquid-glass.css` untuk web.** Implementasi web adalah aproksimasi menggunakan `backdrop-filter` + border berlapis + refleksi. Berikan label aproksimasi secara jelas di komentar kode. |

---

## 3. ARSITEKTUR & KONVENSI DEFAULT

Kecuali analisis desain memilih sistem desain resmi (Bagian 2.A), gunakan konvensi default berikut:

### 3.A Tumpukan Teknologi (*Stack*)

- **Framework:** React atau Next.js. Utamakan Server Components (RSC) secara default.
  - **KEAMANAN RSC:** State global HANYA bekerja di Client Components. Di Next.js, bungkus penyedia konteks (*providers*) dalam komponen dengan direktif `"use client"`.
  - **ISOLASI INTERAKTIVITAS:** Komponen apa pun yang menggunakan Motion, listener gulir, atau interaksi kursor WAJIB diisolasi di komponen daun (*leaf component*) terpisah dengan `'use client'` di baris paling atas. Server Components hanya me-render tata letak statis.
- **Styling:** **Tailwind v4** (default). Gunakan Tailwind v3 hanya jika proyek yang ada mengharuskannya.
  - Untuk v4: JANGAN gunakan plugin `tailwindcss` lama di `postcss.config.js`. Gunakan `@tailwindcss/postcss` atau plugin Vite resmi.
- **Animasi:** **Motion** (pustaka yang sebelumnya bernama Framer Motion). Impor dari `motion/react` (`import { motion } from "motion/react"`). Paket `framer-motion` tetap berfungsi sebagai alias lama, namun prioritaskan `motion/react` untuk kode baru.
- **Font:** Selalu gunakan `next/font` (Next.js) atau pasang mandiri (*self-host*) dengan `@font-face` + `font-display: swap`. Jangan pernah memuat Google Fonts melalui tag `<link>` di produksi.

### 3.B Manajemen State

- Gunakan `useState` / `useReducer` lokal untuk UI yang terisolasi.
- State global HANYA untuk menghindari *prop-drilling* yang dalam - gunakan Zustand, Jotai, atau React Context.
- **DILARANG KERAS** menggunakan `useState` untuk melacak nilai kontinu yang dipicu gerakan pengguna (posisi mouse, progres gulir, inersia pointer, efek magnetik hover). Gunakan `useMotionValue` / `useTransform` / `useScroll` dari Motion. Penggunaan `useState` akan memicu render ulang seluruh pohon React di setiap frame dan membuat performa anjlok di perangkat seluler.

### 3.C Ikonografi

- **Pustaka yang diizinkan (urutan prioritas):** `@phosphor-icons/react`, `hugeicons-react`, `@radix-ui/react-icons`, `@tabler/icons-react`.
- **Kurang disarankan:** `lucide-react`. Gunakan hanya jika pengguna secara spesifik memintanya atau proyek sudah terlanjur menggunakannya.
- **JANGAN PERNAH membuat path SVG ikon secara manual.** Jika ada simbol yang kurang, instal pustaka kedua atau susun dari bentuk dasar - jangan menggambar path ikon dari nol.
- **Satu keluarga ikon per proyek.** Jangan mencampur Phosphor dan Lucide dalam satu pohon komponen.
- **Standarkan `strokeWidth` secara konsisten** (misalnya selalu `1.5` atau `2.0`).

### 3.D Kebijakan Emoji

Hindari emoji sebagai default dalam kode, markup, dan teks antarmuka. Gantikan simbol dengan ikon dari pustaka ikon resmi. **Pengecualian:** emoji hanya diizinkan jika pengguna meminta nuansa santai, chat, atau media sosial - dan tetap gunakan secara terukur dan bertujuan.

### 3.E Responsivitas & Mekanisme Tata Letak

- Standarkan breakpoint layar (`sm 640px`, `md 768px`, `lg 1024px`, `xl 1280px`, `2xl 1536px`).
- Batasi lebar tata letak halaman menggunakan `max-w-[1400px] mx-auto` atau `max-w-7xl`.
- **Stabilitas Viewport:** JANGAN PERNAH gunakan `h-screen` untuk Hero satu layar penuh. SELALU gunakan `min-h-[100dvh]` untuk mencegah lonjakan tata letak saat bilah alamat peramban seluler (seperti Safari iOS) muncul dan hilang.
- **CSS Grid di atas Perhitungan Flex:** JANGAN PERNAH gunakan perhitungan persentase rumit pada flexbox (`w-[calc(33%-1rem)]`). SELALU gunakan CSS Grid bawaan (`grid grid-cols-1 md:grid-cols-3 gap-6`).

### 3.F Verifikasi Dependensi (Wajib)

Sebelum mengimpor pustaka pihak ketiga APA PUN, periksa `package.json`. Jika paket belum terpasang, tampilkan perintah instalasinya terlebih dahulu. **Jangan pernah** berasumsi bahwa suatu pustaka sudah ada di proyek.

---

## 4. PANDUAN REKAYASA DESAIN (Koreksi Bias AI)

Model LLM cenderung mengulang pola klise yang sama. Ambil langkah proaktif untuk mengoreksi bias ini. Setiap aturan memiliki opsi pengecualian berbasis konteks.

### 4.1 Tipografi

- **Judul Utama / Display:** Standar `text-4xl md:text-6xl tracking-tighter leading-none`.
- **Isi Paragraf / Body:** Standar `text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-[65ch]`.
- **Pemilihan Font Sans-Serif:**
  - **Dihindari sebagai default:** `Inter`. Pilihlah `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`, atau font sans yang berkarakter kuat.
  - **Pengecualian:** Inter dapat diterima bila pengguna secara eksplisit meminta nuansa standar, netral, atau gaya Linear, atau saat membangun situs sektor publik yang mementingkan kejelasan murni.
- **Pasangan Font Rekomendasi:** `Geist` + `Geist Mono`, `Satoshi` + `JetBrains Mono`, `Cabinet Grotesk` + `Inter Tight`, `GT America` + `IBM Plex Mono`.

- **DISIPLIN FONT SERIF (SANGAT DIHINDARI SEBAGAI DEFAULT):**
  - Font serif **sangat tidak disarankan sebagai font default untuk proyek apa pun.** Anggapan bahwa "tampak kreatif / premium / editorial" BUKAN alasan yang valid untuk otomatis memilih serif. Kebiasaan AI menganggap bahwa "brief kreatif = harus font serif" adalah ciri khas AI yang paling sering tertangkap dalam pengujian produksi.
  - **Serif hanya boleh digunakan jika SALAH SATU syarat ini terpenuhi secara eksplisit:**
    - Brief merek secara spesifik menyebutkan nama font serif tertentu, ATAU
    - Karakter estetika proyek memang benar-benar editorial, barang mewah (*luxury*), publikasi sastra, naskah kuno, atau warisan klasik (*heritage/vintage*), DAN Anda mampu menjelaskan alasan kuat mengapa font serif tersebut cocok untuk merek ini.
  - Untuk kebutuhan lainnya (agensi kreatif, studio desain, merek modern, produk konsumen premium, portofolio digital, gaya hidup kontemporer), **gunakan font sans-serif display sebagai default** (Geist Display, ABC Diatype, Söhne Breit, Cabinet Grotesk Display, Migra Sans, GT Walsheim, Inter Display, PP Neue Montreal). Font sans display bukanlah font yang membosankan — font ini menjadi standar utama dengan alasan yang sama mengapa warna hitam menjadi standar dalam dunia mode.
  - **ATURAN PENEKANAN KATA (Terkait):** Saat ingin memberi penekanan pada kata tertentu di dalam judul, gunakan varian **cetak miring (*italic*) atau tebal (*bold*) dari font yang SAMA**. JANGAN menyisipkan satu kata serif tiba-tiba di tengah judul sans-serif (atau sebaliknya) hanya demi variasi visual. Mencampur keluarga font dalam satu kalimat adalah tanda desain amatir. Penekanan miring/tebal dalam satu keluarga font adalah langkah yang elegan dan benar.
  - **DILARANG KERAS sebagai default:** `Fraunces` dan `Instrument_Serif` (dua font serif favorit yang terlalu sering dimunculkan AI).
  - **Jika font serif memang beralasan kuat untuk digunakan**, variasikan dari daftar ini dan jangan memakai font yang sama di proyek berurutan: PP Editorial New, GT Sectra Display, Cardinal Grotesque, Reckless Neue, Tiempos Headline, Recoleta, Cormorant Garamond, Playfair Display, EB Garamond, IvyPresto, Migra, Editorial Old, Saol Display, Söhne Breit Kursiv, Domaine Display, Canela, Schnyder, Tobias, NB Architekt, ITC Galliard.

- **RUANG DESENDER HURUF MIRING (Wajib):** Ketika gaya miring (*italic*) digunakan pada font display besar dan kata tersebut mengandung huruf dengan kaki ke bawah (*descenders*: `y g j p q`), pemakaian `leading-[1]` atau `leading-none` akan memotong bagian bawah huruf tersebut. Gunakan minimal `leading-[1.1]` dan tambahkan bantalan bawah `pb-1` atau `mb-1` pada elemen pembungkus. Periksa setiap kata miring pada judul utama sebelum rilis.

### 4.2 Kalibrasi Warna

- Maksimal 1 warna aksen dominan. Saturasi < 80% secara default.
- **ATURAN ANTI-UNGU AI (*THE LILA RULE*):** Estetika "kilau ungu AI / biru neon" dilarang keras sebagai default. Jangan gunakan tombol bercahaya ungu otomatis atau gradien neon acak. Gunakan basis netral (Zinc / Slate / Stone) dengan satu warna aksen berdaya kontras tinggi (Emerald, Electric Blue, Deep Rose, Burnt Orange, dll.).
- **Pengecualian:** jika identitas merek atau brief secara eksplisit meminta warna ungu / violet / lila, terapkan dengan penuh komitmen: palet yang konsisten, warna netral yang selaras, dan gradien yang sangat halus terkontrol, bukan sekadar cipratan ungu AI klise.
- **Satu palet per proyek.** Jangan berganti-ganti antara abu-abu bernuansa hangat (*warm grays*) dan dingin (*cool grays*) di dalam satu proyek yang sama.
- **PENGUNCIAN KONSISTENSI WARNA (Wajib):** Sekali warna aksen dipilih untuk sebuah halaman, gunakan warna tersebut di SELURUH halaman. Situs dengan palet abu-abu hangat tidak boleh mendadak memiliki tombol CTA berwarna biru terang di bagian bawah. Situs beraksen mawar tidak boleh mendadak memiliki lencana status berwarna teal di footer. Kunci satu warna aksen dan periksa setiap komponen.

- **LARANGAN PALET KONSUMEN PREMIUM KLISE (Wajib, Ciri AI Paling Sering Muncul):**
  - Untuk proyek bertema konsumen premium (peralatan masak, kesehatan/wellness, kerajinan tangan, barang mewah, perlengkapan rumah DTC, dll.), bawaan default AI selalu jatuh pada **kombinasi krem/beige hangat + kuningan/tanah liat/merah oxblood/oker + teks gelap espresso/tinta**. Kode hex berikut dilarang keras dijadikan default:
    - Warna Latar Belakang: `#f5f1ea`, `#f7f5f1`, `#fbf8f1`, `#efeae0`, `#ece6db`, `#faf7f1`, `#e8dfcb` (semua varian "kertas hangat / krem / kapur / tulang")
    - Warna Aksen: `#b08947`, `#b6553a`, `#9a2436`, `#9c6e2a`, `#bc7c3a`, `#7d5621` (semua varian "kuningan / terakota / oxblood / oker")
    - Warna Teks: `#1a1714`, `#1a1814`, `#1b1814` (semua varian "espresso / hitam hangat")
  - Palet di atas DILARANG KERAS dijadikan pilihan instan. Hampir semua situs buatan AI menggunakan palet yang sama persis sehingga identitas merek menjadi pudar dan tidak berkarakter.
  - **Alternatif Segar (Rotasikan, jangan gunakan yang sama berulang kali):**
    - **Cold Luxury:** abu-abu perak + krom mengilap + abu asap (seperti estetika Tesla atau Apple Watch)
    - **Forest:** hijau hutan pekat + warna tulang + aksen amber hangat (seperti gaya Patagonia atau Filson premium)
    - **Black and Tan:** hitam pekat off-black + cokelat tan hangat dengan kontras tajam tanpa krem lembek
    - **Cobalt + Cream:** biru kobalt jenuh berpadu dengan satu warna netral bersih tanpa nuansa kuningan
    - **Terracotta + Slate:** warna karat hangat berpadu dengan abu-abu batu yang sejuk
    - **Olive + Brick + Paper:** hijau zaitun lembut dengan aksen merah bata
    - **Pure Monochrome + Single Saturated Pop:** putih pudar + hitam pudar + satu warna aksen cerah tunggal (electric blue, zamrud, merah muda menyala, dll.)
  - **Aturan Rotasi Palet:** jika proyek konsumen premium sebelumnya sudah memakai keluarga krem + kuningan, proyek saat ini WAJIB menggunakan palet yang berbeda. Jangan pernah merilis palet hangat kerajinan yang sama dua kali berturut-turut.
  - **Pengecualian:** palet krem + kuningan + espresso hanya diizinkan jika brief merek secara tegas menyebutkan warna-warna tersebut, atau identitas merek memang benar-benar klasik/artisan vintage dan Anda dapat memberikan argumen yang rasional.

### 4.3 Diversifikasi Tata Letak

- **BIAS ANTI-RATA TENGAH:** Hindari Hero atau judul H1 yang serba rata tengah jika nilai `DESIGN_VARIANCE > 4`. Dorong penggunaan tata letak "Layar Terbelah (*Split Screen* 50/50)", "Konten rata kiri dengan aset visual di kanan", "Ruang kosong asimetris terencana", atau struktur konten yang terkunci pada posisi gulir (*scroll-pinned*).
- **Pengecualian:** Hero rata tengah tetap diperbolehkan untuk kebutuhan editorial, manifesto gagasan, atau pengumuman peluncuran di mana pesan teks itu sendiri adalah pusat dari keseluruhan desain.

### 4.4 Materialitas, Bayangan (*Shadows*), dan Kartu (*Cards*)

- Gunakan kartu (*cards*) HANYA jika elevasi atau batas visual memang diperlukan untuk mengomunikasikan hierarki data. Jika tidak, kelompokkan informasi menggunakan garis pembatas tipis `border-t`, `divide-y`, atau ruang kosong negatif.
- Ketika bayangan (*box-shadow*) digunakan, beri sedikit rona warna yang senada dengan warna latar belakang. Jangan gunakan bayangan hitam pekat murni di atas latar belakang terang.
- Untuk `VISUAL_DENSITY > 7`: penggunaan wadah kartu umum dilarang. Metrik data harus dibiarkan bernapas dalam tata letak yang bersih dan terbuka.
- **PENGUNCIAN KONSISTENSI BENTUK (Wajib):** Tentukan SATU skala sudut membulat (*border-radius*) untuk seluruh halaman dan patuhi secara ketat. Pilihan: serba tajam (radius 0), serba membulat sedang (radius 12-16px), atau serba kapsul (full-pill untuk tombol). Sistem kombinasi hanya diizinkan bila ada aturan terdokumentasi (misalnya: "semua tombol berbentuk kapsul penuh, semua kartu 16px, bidang input 8px") dan aturan tersebut diterapkan di seluruh bagian. Menaruh tombol bulat di dalam tata letak kotak tajam, atau kartu kotak kaku di halaman serba kapsul, adalah tanda desain yang rusak.

### 4.5 Status UI Interaktif

Model AI biasanya hanya membuat tampilan untuk "status sukses statis". Selalu implementasikan siklus interaksi lengkap:

- **Pemuatan (*Loading*):** Gunakan pemuat skeleton yang bentuknya persis mencerminkan tata letak konten akhir. Hindari animasi spinner bulat generik.
- **Kondisi Kosong (*Empty States*):** Rancang dengan komposisi yang rapi; beri petunjuk jelas bagaimana pengguna dapat mengisinya.
- **Kondisi Galat (*Error States*):** Pesan kesalahan harus jelas, diletakkan segaris (*inline*) pada formulir, atau gunakan toast hanya untuk kejadian sementara.
- **Umpan Balik Sentuhan (*Tactile Feedback*):** Pada status `:active`, terapkan pergeseran mikro `-translate-y-[1px]` atau `scale-[0.98]` untuk memberikan sensasi tombol fisik yang ditekan.
- **PEMERIKSAAN KONTRAS TOMBOL (Wajib, Aksesibilitas):** Sebelum menyelesaikan kode tombol, pastikan teks tombol terbaca jelas di atas warna latar tombol tersebut. Tombol putih dengan teks putih, tombol `bg-white` dengan label `text-white`, atau tombol transparan tanpa border di atas latar belakang halaman dilarang keras. Pastikan rasio kontras memenuhi WCAG AA (minimal 4.5:1 untuk teks biasa, 3:1 untuk teks besar 18px+). Aturan ini juga berlaku untuk tombol bergaya *ghost* di atas gambar (sediakan lapisan gelap, scrim, atau border tegas).
- **LARANGAN TEKS TOMBOL TERPOTONG MENJADI DUA BARIS (Wajib):** Teks tombol CTA WAJIB muat dalam satu baris tunggal di tampilan desktop. Jika label tombol seperti "LIHAT KARYA PILIHAN" terlipat menjadi 2 atau 3 baris, tombol tersebut dianggap rusak. Perbaiki dengan cara: mempersingkat label (maksimal 3 kata untuk CTA utama, idealnya 1-2 kata) ATAU memperlebar tombol (jangan membatasi `max-width` secara kaku pada tombol tindakan utama). Teks tombol terlipat di desktop adalah kegagalan fatal dalam pemeriksaan sebelum rilis.
- **HINDARI DUPLIKASI TUJUAN CTA (Wajib):** Memasang dua tombol CTA dengan tujuan yang sama di satu halaman adalah kegagalan pemeriksaan. Contoh maksud yang sama: "Hubungi kami" + "Kirim pesan" + "Mari berdiskusi" + "Mulai proyek" = semuanya adalah tujuan kontak → pilih SATU label yang paling tepat dan gunakan secara konsisten di seluruh halaman (navigasi, hero, footer). Begitu pula untuk variasi pendaftaran akun: "Coba gratis" vs "Daftar sekarang" vs "Mulai coba". Satu label untuk satu tujuan aksi.
- **PEMERIKSAAN KONTRAS FORMULIR (Wajib, Aksesibilitas):** Bidang input formulir, teks placeholder, garis fokus (*focus rings*), teks bantuan, dan teks galat semuanya harus lolos uji kontras WCAG AA terhadap latar belakang sekitarnya. Placeholder abu-abu pudar di atas formulir putih, formulir putih di atas bagian halaman putih tanpa batas tegas, atau label formulir yang terlalu tipis dilarang keras.

### 4.6 Pola Data & Formulir

- Letakkan label selalu DI ATAS bidang input (*above input*). Teks bantuan bersifat opsional tetapi harus terstruktur di markup. Teks galat diletakkan DI BAWAH bidang input. Gunakan jarak standar `gap-2` untuk setiap blok input.
- Jangan pernah menjadikan teks placeholder sebagai pengganti label.

### 4.7 Disiplin Tata Letak (Aturan Keras — Melanggar Berarti Menghasilkan Kode Rusak)

- **Hero WAJIB muat dalam viewport awal layar.** Judul maksimal 2 baris di layar desktop, sub-teks maksimal **20 kata** DAN maksimal 3-4 baris, tombol CTA harus terlihat tanpa perlu menggulir layar. Jika teks terlalu panjang: kecilkan ukuran font ATAU pangkas kalimatnya. Jika Anda tidak dapat menjelaskan proposisi nilai produk dalam 20 kata, berarti proposisi nilainya yang belum jelas, bukan aturannya yang terlalu ketat. Jangan biarkan hero meluap sehingga pengguna harus menggulir hanya untuk menemukan tombol aksi.
- **Disiplin Skala Font Hero.** Rencanakan ukuran font dan dimensi aset gambar secara bersamaan. Jika aset visual berukuran besar dan judul lebih dari 6 kata, jangan memulainya dari ukuran raksasa `text-7xl/text-8xl`. Rentang default yang rasional: `text-4xl md:text-5xl lg:text-6xl` untuk sebagian besar kasus; gunakan `text-6xl md:text-7xl` hanya bila judul terdiri dari 3-5 kata singkat. Judul hero yang memanjang hingga 4 baris selalu merupakan kesalahan penentuan ukuran font, bukan kesalahan panjang teks.
- **BATAS PADDING ATAS HERO (Wajib):** Padding bagian atas hero maksimal `pt-24` (sekitar 6rem) di desktop. Lebih dari itu akan membuat konten hero melayang terlalu jauh ke tengah bawah viewport dan terlihat seperti bug tata letak, bukan ruang kosong yang disengaja. Jika hero butuh ruang lebih luas, perbesar ukuran tipografi atau aset visualnya, bukan memperbesar padding atas secara berlebihan.
- **DISIPLIN TUMPUKAN HERO (Maksimal 4 elemen teks).** Bagian hero adalah satu momen fokus yang kuat, bukan daftar rangkuman fitur. Elemen teks yang diizinkan maksimal 4 secara keseluruhan:
  1. Eyebrow (label kecil huruf kapital) ATAU strip nama merek ATAU tidak sama sekali (pilih nol atau satu)
  2. Judul Utama (maksimal 2 baris)
  3. Teks Penjelas (maksimal 20 kata, maksimal 4 baris)
  4. Tombol Aksi CTA (1 tombol utama + maksimal 1 tombol sekunder)
  - **DILARANG di bagian hero:** baris tagline kecil di bawah tombol CTA ("Bekerja dengan GitHub, GitLab..."), strip mikro bukti sosial ("Digunakan oleh tim di..."), cuplikan harga ("Gratis untuk individu, $10 untuk tim"), daftar poin fitur, atau baris avatar pengguna. Semua elemen tersebut harus dipindahkan ke bagian khusus tepat di bawah hero.
  - Jika Anda sudah memiliki eyebrow dan tagline di bawah tombol CTA di hero yang sama, hapus taglinenya. Satu elemen teks kecil per hero adalah batas maksimal.
- **Dinding logo bukti sosial ("Digunakan oleh" / "Dipercaya oleh") berada DI BAWAH hero, bukan di dalamnya.** Hero adalah ruang eksklusif untuk proposisi nilai dan tombol aksi utama. Deretan logo klien atau mitra adalah bagian terpisah tepat di bawahnya. Jangan memaksakan logo ke dalam baris flex yang sama dengan teks hero.
- **Navigasi WAJIB tampil dalam SATU baris di desktop.** Jika tautan menu tidak muat pada resolusi `lg` (1024px), ringkas label teksnya, kurangi menu sekunder, atau alihkan ke menu drawer/hamburger. Bilah navigasi yang melipat menjadi dua baris di desktop adalah tanda antarmuka yang rusak.
- **Batas tinggi navigasi: maksimal 80px di desktop, default 64-72px.** Jangan membuat navigasi raksasa yang memakan 15% dari tinggi layar pengguna.
- **Grid bento HARUS memiliki ritme visual, bukan pengulangan satu arah.** Jangan menumpuk 6 baris kartu yang semuanya berformat gambar di kiri dan teks di kanan. Variasikan komposisinya: padukan kartu satu kolom penuh, ukuran sel asimetris, dan jeda vertikal.
- **ATURAN JUMLAH SEL BENTO (Wajib):** Grid bento harus memiliki TEPAT sejumlah sel sesuai konten yang tersedia. 3 konten → 3 sel (pembagian 1+2, atau 2+1, atau trio asimetris). 5 konten → 5 sel (2+3, 3+2, hero+4, dll.). Jika grid Anda menyisakan sel kosong di tengah atau di ujung, berarti perencanaan tata letak Anda keliru. Bentuk ulang gridnya; jangan pernah menempelkan kartu kosong tanpa isi.
- **Larangan Pengulangan Tata Letak Antar-Bagian.** Sekali sebuah keluarga tata letak digunakan untuk suatu bagian (misalnya: 3 kartu gambar berdampingan, kutipan satu kolom penuh, atau teks-gambar berdampingan), keluarga tata letak tersebut maksimal hanya boleh muncul SATU KALI di halaman. Bagian "Karya Pilihan" tidak boleh terlihat sama persis tata letaknya dengan bagian "Layanan Kami". Halaman landing dengan 8 bagian konten harus menggunakan setidaknya 4 keluarga tata letak yang berbeda.
- **BATAS PENGULANGAN POLA ZIG-ZAG (Wajib).** Tata letak bergantian yang monoton (gambar di kiri + teks di kanan, lalu teks di kiri + gambar di kanan secara berulang) terasa sangat klise. Maksimal hanya boleh ada 2 bagian berturut-turut yang menggunakan pola gambar-teks terpisah ini. Kemunculan ketiga berturut-turut adalah kegagalan pemeriksaan kualitas. Pecah kebosanan ini dengan bagian satu kolom penuh, tumpukan vertikal terpusat, grid bento, teks berjalan (*marquee*), atau pola tata letak lainnya.
- **PENGENDALIAN PENGGUNAAN EYEBROW (Wajib, Aturan Paling Sering Dilanggar dalam Uji Produksi).** "Eyebrow" adalah label teks kecil dengan huruf kapital dan spasi lebar yang diletakkan di atas judul bagian (misalnya: `EMPAT PILIHAN WARNA`, `KARYA TERPILIH`, `PERANGKAT KERAS`). Tanda CSS umumnya: `text-[11px] uppercase tracking-[0.18em]`. Hampir setiap situs buatan AI selalu menaruh eyebrow di ATAS SETIAP judul bagian, menghasilkan ritme template yang sangat seragam dan membosankan. Aturan tegas:
  - **Maksimal 1 eyebrow untuk setiap 3 bagian.** Bagian hero dihitung sebagai 1. Jadi, sebuah halaman dengan 9 bagian maksimal hanya boleh memiliki 3 eyebrow secara keseluruhan.
  - Jika bagian A sudah memiliki eyebrow, 2 bagian berikutnya tidak boleh menggunakannya.
  - **Pemeriksaan dilakukan secara mekanis:** hitung kemunculan kelas `uppercase tracking` di atas judul bagian. Jika jumlahnya > pembulatan ke atas dari (total bagian / 3), maka kode tersebut gagal uji kelayakan.
  - **Solusi terbaik:** hilangkan saja eyebrow tersebut. Judul utama saja sudah lebih dari cukup. Posisi bagian di dalam halaman sudah menjelaskan konteksnya tanpa perlu label kategori kecil.
- **LARANGAN HEADER TERBELAH (*SPLIT-HEADER*) (Wajib).** Pola "judul besar di kolom kiri + paragraf penjelas kecil mengambang di kolom kanan" sebagai kepala sebuah bagian dilarang keras dijadikan default. Setiap bagian harus memiliki satu pesan utama yang terfokus. Jika Anda memang membutuhkan judul dan paragraf penjelas, tumpuklah secara vertikal (judul di atas, paragraf di bawah dengan lebar maksimal 65ch). Gunakan pola header terbelah hanya jika kolom kanan memuat elemen interaktif atau visual konkret, bukan sekadar teks pengisi.
- **Keragaman Latar Belakang Bento (Wajib).** Bagian bento dan grid fitur tidak boleh berupa 6 kartu putih polos dengan teks di dalamnya. Setidaknya 2-3 sel dalam grid multi-sel membutuhkan variasi visual nyata: foto asli, gradien halus yang sesuai dengan merek (bukan gradien ungu AI), tekstur pola halus, atau latar berwarna lembut. Grid bento yang serba putih di atas latar putih hanya dengan tipografi akan terlihat seperti template AI yang malas.
- **Penyesuaian tata letak seluler harus dideklarasikan secara eksplisit di setiap bagian.** Untuk setiap tata letak multi-kolom, deklarasikan perilaku fallback untuk layar `< 768px` langsung di komponen tersebut. Jangan berasumsi bahwa "Tailwind akan otomatis menanganinya".

### 4.8 Strategi Aset Gambar & Visual

Landing page dan portofolio adalah **produk visual**. Halaman yang hanya berisi teks dengan kotak div meniru tangkapan layar adalah produk yang buruk (*slop*).

**Urutan prioritas penyediaan aset visual:**

1. **Alat pembuat gambar (*image-generation tool*) sebagai pilihan pertama.** Jika ada alat pembuat gambar yang tersedia di lingkungan kerja (seperti alat MCP image generator, integrasi IDE, alat pembuat gambar OpenAI/Gemini, dll.), Anda WAJIB menggunakannya untuk membuat aset khusus per bagian: fotografi hero, foto produk, latar belakang bertekstur, atau gambar suasana. Buat dengan rasio aspek yang sesuai untuk bagian tersebut. Jangan melewatkan langkah ini hanya karena membuat kotak CSS terasa lebih cepat.
2. **Gambar web asli sebagai pilihan kedua.** Jika alat pembuat gambar tidak tersedia, gunakan sumber foto asli:
   - `https://picsum.photos/seed/{kata-kunci-deskriptif}/{lebar}/{tinggi}` untuk foto penampung sementara (gunakan kata kunci yang menggambarkan bagian tersebut, misalnya `marrow-cookware-kitchen`)
   - URL aset resmi atau materi promosi jika disediakan dalam brief
   - Sumber berlisensi terbuka (Unsplash atau Pexels via tautan langsung) jika diizinkan secara eksplisit
3. **Pilihan terakhir: jelaskan secara jujur kepada pengguna.** Jika kedua opsi di atas tidak memungkinkan, JANGAN memenuhi halaman dengan ilustrasi SVG buatan tangan yang canggung atau kotak `<div>` yang meniru tangkapan layar. Sediakan penampung yang diberi label jelas (`<!-- TODO: Foto produk hero, 1600x1200 -->`) dan di akhir tanggapan sampaikan: _"Halaman ini memerlukan gambar nyata di: [daftar posisi penempatan]. Silakan sediakan atau buat aset gambar tersebut."_

**Situs minimalis pun tetap membutuhkan gambar nyata.** Halaman yang murni berisi teks bukanlah representasi minimalis; itu adalah pekerjaan yang belum selesai. Bahkan situs bergaya Linear editorial membutuhkan setidaknya 2-3 gambar nyata (hero, satu foto produk/gaya hidup, dan satu gambar pendukung). Buat fotografi minimalis hitam-putih jika brief menuntut kesederhanaan; jangan menghilangkan gambar sama sekali hanya karena nilai tombol pengatur rendah.

**Gunakan logo perusahaan asli untuk bukti sosial.** Saat brief membutuhkan deretan logo "Dipercaya oleh / Pengguna Kami", JANGAN menampilkannya hanya sebagai teks biasa bertuliskan nama merek (`<span>Perusahaan A</span>`). Gunakan logo SVG asli:
- **Sumber: Simple Icons** (`https://cdn.simpleicons.org/{slug}/ffffff` untuk warna apa pun, atau paket npm `simple-icons`). Menyediakan hampir semua merek teknologi ternama.
- **Alternatif: devicon** untuk logo tumpukan teknologi pengembang (`@svgr/cli` atau CDN).
- **Menciptakan nama merek fiktif? Buat juga simbol SVG-nya.** Buat monogram sederhana (satu huruf di dalam lingkaran, ligatur dua huruf, atau bentuk geometris abstrak) yang dirender sebagai tag `<svg>` segaris sesuai gaya halaman. Menulis nama merek fiktif hanya dengan teks biasa terlihat sangat murahan.
- **Pastikan logo tampil sempurna di mode terang maupun gelap** (putih di atas gelap, hitam di atas terang, atau menggunakan variabel warna tema).
- **Aturan Dinding Logo Murni (Wajib):** deretan logo hanya berisi logo, tanpa teks lain. JANGAN mencantumkan label industri atau kategori di bawah masing-masing logo (jangan tulis `Vercel` lalu ada teks `cloud hosting` di bawahnya, jangan tulis `Stripe` lalu `pembayaran`). Kredibilitas berasal dari bentuk logo itu sendiri; label kategori tidak memberi nilai tambah yang belum diketahui pengguna. Tambahan opsional: nama merek sebagai `alt` untuk pembaca layar, atau tautan ke situs merek tersebut.

**Ilustrasi Buatan Tangan (*Hand-rolled illustrations*):**
- Ikon SVG dari pustaka resmi: sangat baik (lihat Bagian 3.C).
- Gambar dekoratif SVG buatan tangan (ilustrasi kompleks, logo rumit): **sangat tidak disarankan**, jangan jadikan pilihan utama. Hanya boleh digunakan bila:
  - Brief secara eksplisit memintanya ("gambarkan logo SVG sederhana")
  - Bentuknya berupa simbol geometris minimalis (persegi, lingkaran, tipografi display)
  - Anda yakin dengan kualitas estetika hasilnya

**Larangan Meniru Tangkapan Layar dengan Kotak Div.** Kotak preview produk yang disusun dari tumpukan elemen `<div>`, daftar tugas palsu, dasbor pura-pura, atau jendela terminal main-main adalah ciri khas utama keluaran AI. Jika Anda perlu menampilkan produk:
- Gunakan URL tangkapan layar asli jika tersedia
- Buat gambar melalui alat pembuat gambar
- Tampilkan komponen UI fungsional nyata (versi mini dari komponen sebenarnya di dalam halaman)
- Atau lewati tampilan produk palsu tersebut dan gunakan fotografi editorial yang elegan

**Hero membutuhkan visual nyata.** Teks yang hanya didampingi gumpalan gradien bukanlah visual hero - itu hanyalah penampung sementara yang malas.

### 4.9 Kepadatan Konten (*Content Density*)

Landing page dinilai dari **kesan pertama**, bukan bacaan detail dari awal sampai akhir. Pangkas teks tanpa ragu.

- **Format konten standar per bagian:** judul singkat (≤ 8 kata) + paragraf penjelas singkat (≤ 25 kata) + satu aset visual ATAU satu tombol CTA. Hal lain di luar ini harus memiliki alasan fungsi yang jelas.
- **Hindari bagian yang membuang data mentah.** Tabel daftar publikasi 20 baris, daftar 30 penghargaan, atau matriks harga raksasa di halaman pemasaran utama adalah pilihan tata letak yang keliru. Gunakan:
  - 3-5 sorotan utama terbaik + tautan "Lihat daftar lengkap"
  - Teks berjalan (*marquee*) atau komidi putar (*carousel*) untuk menampilkan variasi
  - Halaman tersendiri jika kumpulan data tersebut memang merupakan produk intinya
- **Daftar panjang membutuhkan komponen antarmuka yang tepat, bukan sekadar daftar yang diperpanjang.** Menggunakan tag bawaan `<ul>` dengan deretan garis pembatas `divide-y` adalah keputusan yang malas. Jika Anda memiliki lebih dari 5 item, pilih salah satu alternatif berikut:
  - Tata letak 2 kolom terbagi berdasarkan kelompok kategori
  - Grid kartu berisi gambar + label untuk setiap item
  - Tab atau akordeon jika item dapat dikelompokkan
  - Deretan pil (*pills*) horizontal yang dapat digeser
  - Karusel untuk daftar yang membutuhkan variasi visual (testimoni, logo klien, kapabilitas)
  - Marquee untuk kumpulan elemen yang tidak membutuhkan perhatian mendalam per item
  Tabel spesifikasi berisi 10 baris dengan garis tipis di setiap barisnya adalah contoh tata letak terburuk. Kelompokkan menjadi 2-3 klaster logis dengan pemisah minimal, atau ubah menjadi format kartu per spesifikasi.
- **Khusus Lembar Spesifikasi Produk.** Tabel spesifikasi produk panjang dengan `border-b` di setiap baris adalah pola bawaan AI untuk produk fisik/perangkat keras. Dilarang keras. Alternatif nyata:
  - **Grid kartu 2 kolom:** setiap spesifikasi memiliki kartunya sendiri berisi nama spek, angka ukuran besar, dan satu baris penjelasan manfaatnya.
  - **Pil geser horizontal (*scroll-snap*):** setiap spek disajikan dalam bentuk pil yang dapat digeser mulus oleh pengguna.
  - **Kelompok terklaster:** gabungkan 10 spek menjadi 3 klaster tematik (misal: "Material", "Ketahanan", "Garansi"), tiap klaster memiliki satu garis pembatas halus dan judul klaster.
  - **Sorotan vs Detail:** tampilkan 3-4 spek utama dalam ukuran ubin besar, sisanya disembunyikan di balik tombol ekspansi "Lihat spesifikasi lengkap".

- **AUDIT MANDIRI TEKS ANTARMUKA (Wajib Sebelum Rilis):** Sebelum menyatakan pekerjaan selesai, baca ulang setiap teks yang terlihat di layar (judul, sub-judul, eyebrow, label tombol, isi teks, takarir gambar, teks alt, teks footer, pesan galat). Tandai kalimat apa pun yang:
  - **Mengalami kerusakan tata bahasa** (misalnya kalimat terjemahan kaku atau frasa tak bermakna)
  - **Memiliki rujukan yang tidak jelas** (misalnya "kami berkomitmen mempertahankannya" tanpa konteks awal apa yang dipertahankan)
  - **Terdengar seperti halusinasi puitis AI** (permainan kata yang dipaksakan, metafora janggal, kalimat hampa yang sok bijak)
  - **Terdengar seperti AI yang berusaha tampak rendah hati atau puitis** (kerendahan hati pasif-agresif, label pengrajin palsu)
  Tulis ulang setiap kalimat yang ditandai. Jika ragu apakah sebuah kalimat masuk akal, gantilah dengan kalimat fungsional yang lugas. Teks buatan AI yang sok puitis jauh lebih buruk daripada teks sederhana yang jelas.
- **Angka presisi palsu dilarang.** Angka seperti `92%`, `4.1×`, `48k`, `5.8 mm`, `13.4 lb` harus memenuhi salah satu kriteria:
  - Berasal dari data riil (brief, panduan merek, metrik publik) - diperbolehkan
  - Diberi label secara eksplisit sebagai data simulasi (`<!-- mock -->`, "contoh", "data sampel") - diperbolehkan
  - Sengaja dibuat-buat agar terkesan canggih secara teknis - dilarang keras. Jangan memalsukan presisi rekayasa yang tidak dimiliki merek.
- **Satu laras bahasa per halaman.** Jangan mencampuradukkan teks teknis kaku ("47 tugas · 0.6 ctx-switches/hari"), prosa sastra, dan jargon pemasaran bombastis di satu halaman yang sama kecuali ada arahan eksplisit dari kepribadian merek.

### 4.10 Kutipan & Testimoni

- **Maksimal 3 baris** untuk isi kutipan. Jangan pernah membiarkannya memanjang hingga 6 baris. Jika kutipan asli panjang, potong secara cerdas. Kutipan pada landing page adalah cuplikan intisari, bukan ulasan lengkap majalah.
- **Dilarang menggunakan tanda pisah em-dash di dalam teks kutipan** sebagai elemen dekoratif jeda panjang. Tanda em-dash dilarang secara total (lihat Bagian 9.G).
- Atribusi: sebutkan nama + peran + (opsional) nama perusahaan. Jangan hanya nama depan tanpa identitas ("- Sarah").
- Tanda kutip: gunakan tanda kutip tipografi yang elegan ( " " ) atau hilangkan tanda kutip sama sekali. Jangan gunakan tanda kutip lurus ASCII mentah ( " ).

### 4.11 Penguncian Tema Halaman (*Page Theme Lock*)

Halaman antarmuka harus memiliki SATU tema yang konsisten. Bagian-bagian halaman tidak boleh berbalik mode secara acak.

- Jika halaman bertema gelap (*dark mode*), SELURUH bagian halaman harus berada dalam mode gelap. Jangan menyisipkan satu bagian bertema kertas krem terang di antara dua bagian gelap gulita (atau sebaliknya). Pengguna tidak boleh merasa seperti berpindah ke situs web lain di tengah-tengah guliran layar.
- Pengecualian: jika brief secara khusus meminta perangkat naratif "Cerita Blok Warna" atau "Pergantian Tema saat Gulir" DAN hal itu merupakan komposisi terencana (satu pergantian tema penuh dengan transisi tegas, bukan pergantian warna yang acak-acakan), hal ini diizinkan satu kali per halaman.
- Perilaku standar: pilih terang, gelap, atau otomatis (`prefers-color-scheme`) di tingkat akar halaman dan kunci pilihan tersebut. Variasi nuansa latar belakang dalam satu keluarga tema tetap diperbolehkan (`bg-zinc-950` bersanding dengan `bg-zinc-900`); namun melompat ke `bg-amber-50` di tengah halaman `bg-zinc-950` adalah desain yang rusak.
- Saat menggunakan sistem desain dengan tema bawaan (Radix Themes atau shadcn/ui dengan komponen `<Theme>`), tentukan tema SATU KALI di `layout.tsx` atau akar halaman. Jangan biarkan masing-masing komponen menimpanya secara liar.

---

## 5. PROAKTIVITAS TANGGAP KONTEKS

Fitur-fitur ini adalah alat bantu khusus, bukan bawaan default. Gunakan hanya bila analisis desain menuntut kehadirannya. **Tidak ada satupun yang aktif secara otomatis.**

- **Kaca Cair / Glassmorphism:** Tepat untuk produk konsumen premium, gaya ala Apple, barang mewah, atau overlay media visual. Sangat tidak tepat untuk dasbor fungsional, portal layanan publik, atau "B2B konvensional". Saat diterapkan, jangan hanya mengandalkan `backdrop-blur`: tambahkan border dalam 1px tipis (`border-white/10`) dan bayangan dalam halus (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`) untuk menghasilkan refraksi tepi fisik yang meyakinkan. Sediakan warna latar solid untuk preferensi `prefers-reduced-transparency`.
- **Fisika Magnetik Hover:** Gunakan ketika `MOTION_INTENSITY > 5` DAN brief bernuansa premium / kreatif / agensi. Terapkan EKSKLUSIF menggunakan `useMotionValue` / `useTransform` dari Motion di luar siklus render React. Jangan pernah menggunakan `useState`. Lihat Bagian 3.B.
- **Mikro-Interaksi Berkelanjutan** (Denyut/Pulse, Efek Ketik, Melayang/Float, Shimmer, Karusel): Gunakan ketika `MOTION_INTENSITY > 5` DAN bagian tersebut memang mendapatkan nilai tambah dari gerakan terus-menerus (indikator status server, umpan data langsung, nuansa AI). **Tidak semua kartu membutuhkan loop animasi tiada akhir.** Jika suatu bagian hanya bersifat informasional, biarkan diam tenang. Gunakan fisika pegas (`type: "spring", stiffness: 100, damping: 20`) - hindari perlambatan linier.
- **"Klaim Gerakan Berarti Harus Menampilkan Gerakan."** Jika nilai `MOTION_INTENSITY > 4`, halaman harus benar-benar bergerak: transisi masuk pada hero, kemunculan bertahap saat digulir pada bagian kunci, serta inersia hover pada tombol aksi utama. Halaman statis yang mengklaim nilai `MOTION_INTENSITY: 7` adalah kebohongan teknis. Sebaliknya, jika Anda tidak memiliki waktu atau cakupan untuk membuat animasi yang bekerja sempurna, turunkan nilai tombol pengatur ke 3 dan hasilkan halaman statis yang sangat rapi. Jangan pernah membuat animasi setengah jadi yang rusak (ScrollTrigger yang terpotong, gerakan masuk yang tersentak-sentak, atau listener tanpa pembersihan memori).
- **ANIMASI HARUS MEMILIKI TUJUAN YANG JELAS (Wajib).** Sebelum menambahkan animasi apa pun, tanyakan: "apa fungsi komunikasi dari animasi ini?" Jawaban yang sah: hierarki (menarik fokus ke elemen penting), narasi cerita (menampilkan konten secara bertahap sesuai alur), umpan balik (mengonfirmasi tindakan pengguna), transisi status (menunjukkan adanya perubahan sistem). Jawaban yang keliru: "karena terlihat keren". Memasang GSAP di mana-mana hanya karena pustakanya tersedia adalah ciri pengembang amatir. Setiap ScrollTrigger, setiap teks berjalan, dan setiap elemen terkunci harus memiliki alasan fungsional. Jika Anda tidak dapat menjelaskannya dalam satu kalimat, buang animasi tersebut.
- **MAKSIMAL SATU MARQUEE PER HALAMAN (Wajib).** Teks berjalan horizontal (*marquee*) yang meluncur terus-menerus (deretan logo bergulir, manifesto berjalan menyamping) maksimal HANYA BOLEH MUNCUL SATU KALI per halaman. Dua atau lebih teks berjalan di halaman yang sama terbaca sebagai pengisi ruang yang malas. Pilih satu bagian di mana teks berjalan benar-benar mendukung konten; bagian lain harus menggunakan tata letak berbeda.
- **Pola GSAP Sticky-Stack (Saat tumpukan gulir digunakan).** Efek "kartu menumpuk saat layar digulir" harus berupa tumpukan sticky yang NYATA, bukan sekadar daftar biasa yang muncul berurutan. Lihat Bagian 5.A di bawah untuk kerangka kode kanonikal. Kesalahan umum: pemicu aktif di tengah guliran alih-alih mengunci di bagian paling atas viewport. Solusi: gunakan `start: "top top"`, bukan `start: "top center"` atau `"top 80%"`.
- **Pola GSAP Horizontal-Pan (Saat pembajakan gulir horizontal digunakan).** Lihat Bagian 5.B untuk kerangka kanonikalnya. Kesalahan umum: animasi mulai berjalan sebelum pembungkus terkunci sehingga pengguna hanya melihat separuh slide. Solusi: gunakan `start: "top top"`, kunci elemen pembungkus (*pin*), dan gerakkan lintasan dalam dengan opsi *scrub*.

### 5.A Sticky-Stack - Kerangka Kode Kanonikal

```tsx
"use client"
import { useRef, useEffect, useId, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "motion/react"

gsap.registerPlugin(ScrollTrigger)

export function StickyStack({ cards }: { cards: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const instanceId = useId().replace(/:/g, "")
  const cardClass = `stack-card-${instanceId}`
  const innerClass = `stack-card-inner-${instanceId}`

  useEffect(() => {
    if (reduce || !ref.current || cards.length <= 1) return
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(`.${cardClass}`)
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return
        ScrollTrigger.create({
          trigger: card,
          start: "top top", // mengunci tepat di bagian atas viewport
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        })
        const inner = card.querySelector(`.${innerClass}`)
        if (!inner) return
        gsap.to(inner, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [reduce, cards.length, cardClass, innerClass])

  return (
    <div ref={ref} className="relative">
      {cards.map((card, i) => (
        <div
          key={i}
          style={{ zIndex: i + 1 }}
          className={`${cardClass} relative flex min-h-[100dvh] items-center justify-center`}
        >
          <div
            className={`${innerClass} flex w-full items-center justify-center will-change-transform`}
          >
            {card}
          </div>
        </div>
      ))}
    </div>
  )
}
```

Poin-poin krusial: `start: "top top"`, `pin: true`, setiap kartu kecuali yang terakhir dikunci, transformasi skala/opasitas dikendalikan oleh pemicu kartu BERIKUTNYA (sehingga kartu sebelumnya mengecil saat kartu baru tiba). Jangan pernah menggabungkan CSS `position: sticky` dengan `pin: true` pada elemen yang sama: mesin sticky bawaan CSS dan `position: fixed` milik ScrollTrigger akan saling berbenturan dan menyebabkan getaran visual serta pergeseran koordinat. Elemen yang dikunci juga tidak boleh menjadi elemen yang ditransformasikan - kunci pembungkus luar dan animasikan pembungkus dalamnya. Berikan cakupan kelas kartu unik per instans (`useId`) agar dua tumpukan di satu halaman tidak saling mengganggu; tumpuk dengan nilai `zIndex` bertingkat. Jika pengguna mengaktifkan `prefers-reduced-motion`, komponen ini merender daftar biasa tanpa pin dan tanpa transformasi skala sehingga seluruh konten tetap dapat diakses dengan mudah.

### 5.B Horizontal-Pan - Kerangka Kode Kanonikal

```tsx
"use client"
import { useRef, useEffect, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "motion/react"

gsap.registerPlugin(ScrollTrigger)

export function HorizontalPan({ children }: { children: ReactNode }) {
  const wrap = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return
    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.current!.scrollWidth - wrap.current!.clientWidth)
      gsap.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top", // penguncian dimulai saat bagian atas seksi menyentuh batas atas viewport
          end: () => `+=${getDistance()}`, // jarak gulir = lebar lintasan dikurangi lebar viewport
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, wrap)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section
      ref={wrap}
      role="region"
      aria-label="Lintasan konten horizontal"
      tabIndex={reduce ? 0 : undefined}
      className={`relative w-full ${reduce ? "overflow-x-auto scroll-smooth" : "overflow-hidden"}`}
    >
      <div
        ref={track}
        className={`flex h-[100dvh] w-max items-center ${reduce ? "snap-x snap-mandatory" : ""}`}
      >
        {children}
      </div>
    </section>
  )
}
```

Poin-poin krusial: `start: "top top"`, `pin: true`, `end: "+=${getDistance()}"` (panjang gulir = jarak perjalanan horizontal yang dibutuhkan), `scrub: 1`. Pembungkus dikunci, lintasan di dalamnya bergeser ke kiri seiring pengguna menggulir ke bawah. Perhitungan nilai `x` dan `end` harus berbasis fungsi yang dipadukan dengan `invalidateOnRefresh: true` agar nilainya selalu dihitung ulang jika ukuran layar berubah. Berikan kelas `w-max` pada lintasan dan pastikan setiap panel tidak menyusut (`shrink-0` atau lebar eksplisit). Untuk preferensi `prefers-reduced-motion`, ubah pembungkus menjadi `overflow-x-auto` biasa dengan titik snap, jangan biarkan terkunci dalam `overflow-hidden`.

### 5.C Tampilan Bertahap Saat Gulir (*Scroll-Reveal Stagger*) (Alternatif Ringan)

Untuk kebutuhan sederhana di mana elemen hanya perlu muncul bertahap saat masuk ke layar (tanpa penguncian posisi), prioritaskan properti `whileInView` dari Motion daripada GSAP — jauh lebih ringan dan tidak memerlukan ScrollTrigger:

```tsx
"use client"
import { motion, useReducedMotion } from "motion/react"

export function RevealStagger({ items }: { items: string[] }) {
  const reduce = useReducedMotion()
  return (
    <ul className="grid gap-6">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  )
}
```

Gunakan pendekatan ini untuk: daftar fitur, grid testimoni, deretan logo mitra, dan elemen apa pun yang hanya membutuhkan efek masuk saat digulir. Simpan GSAP khusus untuk skenario penguncian dan scrubbing yang rumit.

### 5.D Pola Animasi yang Dilarang Keras

- **`window.addEventListener("scroll", ...)` dilarang keras.** Kode ini dieksekusi pada setiap frame gulir, rentan menimbulkan patah-patah visual (*jank*), dan tidak mendukung pengelompokan batch. Gunakan `useScroll()` dari Motion, `ScrollTrigger` dari GSAP, `IntersectionObserver`, atau animasi CSS berbasis gulir (`animation-timeline: view()`).
- **Perhitungan progres gulir manual menggunakan `window.scrollY` di dalam state React.** Dilarang dengan alasan yang sama karena memicu render ulang komponen di setiap frame pergerakan.
- **Loop `requestAnimationFrame` yang memodifikasi state React.** Gunakan nilai gerak (*motion values* seperti `useMotionValue` + `useTransform`).
- **Transisi Tata Letak:** Gunakan properti `layout` dan `layoutId` dari Motion untuk perubahan status yang terlihat (pengurutan ulang daftar, modal yang membesar dari tombol, elemen bersama antar-rute). Jangan membungkus konten statis dengan properti `layout` hanya "untuk jaga-jaga" karena membutuhkan kalkulasi pengukuran DOM yang mahal.
- **Orkestrasi Bertahap:** Gunakan `staggerChildren` (Motion) atau kaskade CSS (`animation-delay: calc(var(--index) * 100ms)`) untuk adegan kemunculan bertahap. Untuk `staggerChildren`, elemen induk (`variants`) dan anak-anaknya WAJIB berada di dalam pohon Client Component yang sama.

---

## 6. PEMBATAS PERFORMA & AKSESIBILITAS

### 6.A Akselerasi Perangkat Keras (*Hardware Acceleration*)

- HANYA animasikan properti `transform` dan `opacity`. Jangan pernah menganimasikan `top`, `left`, `width`, atau `height`.
- Gunakan `will-change: transform` secara bijak dan hemat — hanya pada elemen yang benar-benar sedang bergerak aktif.

### 6.B Pengurangan Gerakan (*Reduced Motion*) (Wajib)

- **Setiap animasi di atas `MOTION_INTENSITY > 3` WAJIB menghormati preferensi `prefers-reduced-motion`.** Ini tidak dapat ditawar.
- Pada Motion: bungkus logika dengan `useReducedMotion()` dan turunkan menjadi tampilan statis.
- Pada CSS: batasi animasi di balik kueri `@media (prefers-reduced-motion: no-preference)` atau sediakan blok penimpa di `@media (prefers-reduced-motion: reduce)` yang mematikan durasi animasi.
- Loop tak terbatas, efek paralaks, pembajakan gulir, dan fisika magnetik kursor WAJIB dihentikan total saat mode pengurangan gerakan aktif.

### 6.C Mode Gelap (*Dark Mode*) (Wajib untuk Halaman Publik)

- Rancang untuk **kedua mode sejak awal**. Jangan pernah merilis halaman yang hanya mendukung mode terang atau hanya mode gelap tanpa instruksi tegas dari pengguna.
- Gunakan varian Tailwind `dark:` ATAU variabel CSS untuk token warna. Pilih satu strategi per proyek.
- **Jangan menetapkan warna mode gelap yang seragam di sini.** Karakter merek yang menentukan. Jaga hierarki visual, identitas merek, dan standar kontras WCAG AA (target AAA untuk teks isi) di kedua mode.
- Patuhi pengaturan sistem pengguna lewat `prefers-color-scheme: dark`.

### 6.D Target Metrik Core Web Vitals

- **LCP** < 2.5 detik. Gambar pada hero section harus menggunakan `priority` pada `next/image` atau di-preload.
- **INP** < 200 milidetik. Proses komputasi berat harus berada di luar thread utama.
- **CLS** < 0.1. Selalu sediakan ruang dimensi (*aspect-ratio* atau min-height) untuk gambar, font kustom, dan konten sematan.
- Jalankan audit Lighthouse sebelum menyatakan halaman selesai.

### 6.E Beban DOM & Lapisan Visual

- Terapkan filter tekstur noise/grain EKSKLUSIF pada elemen semu yang terkunci dan tidak menerima interaksi mouse (`fixed inset-0 z-[60] pointer-events-none`). JANGAN PERNAH menaruh filter tekstur pada wadah yang ikut bergulir — proses render ulang GPU yang konstan akan menghancurkan FPS di perangkat seluler.
- Perhatikan ukuran bundel JavaScript. Pustaka Motion cukup besar, dan Three.js sangat berat. Lakukan pemuatan tertunda (*lazy-load*) untuk komponen interaktif yang berada di bawah lipatan layar (*below-the-fold*).

### 6.F Pengendalian Z-Index

JANGAN PERNAH menyebarkan kelas sembarangan seperti `z-50` atau `z-10` tanpa struktur. Gunakan nilai z-index secara ketat untuk konteks lapisan sistemik (bilah navigasi melayang, modal dialog, overlay gelap, tekstur grain). Dokumentasikan skala z-index dalam konstanta proyek.

---

## 7. DEFINISI TEKNIS PENGATUR (*DIAL DEFINITIONS*)

### DESIGN_VARIANCE (Level 1-10)

- **1-3 (Dapat Ditebak / Simetris):** CSS Grid simetris (12 kolom, unit fr setara), padding seragam di semua sisi, tata letak rata tengah.
- **4-7 (Bergeser / Dinamis):** Elemen saling bertumpuk halus (`margin-top: -2rem`), variasi rasio aspek gambar (4:3 bersanding dengan 16:9), judul rata kiri di atas data metrik terstruktur.
- **8-10 (Asimetris Artistik):** Tata letak masonry bebas, CSS Grid dengan unit fraksional tak biasa (`grid-template-columns: 2fr 1fr 1fr`), zona ruang kosong luas yang disengaja (`padding-left: 20vw`).
- **PENIMPAAN SELULER:** Untuk level 4-10, tata letak asimetris pada layar desktop (`md:`) WAJIB diratakan menjadi satu kolom tunggal yang tegas (`w-full`, `px-4`, `py-8`) pada layar dengan lebar `< 768px`.

### MOTION_INTENSITY (Level 1-10)

- **1-3 (Statis):** Tanpa animasi otomatis saat halaman dimuat. Hanya status interaksi CSS `:hover` dan `:active`. Mode `prefers-reduced-motion` menjadi standar alami di sini.
- **4-7 (CSS Mengalir):** `transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)` (selalu sebutkan properti spesifik; jangan pernah menggunakan `transition: all` yang membebani kinerja GPU). Kaskade `animation-delay` untuk kemunculan saat pemuatan.
- **8-10 (Koreografi Lanjutan):** Efek gulir sinematik bertahap, paralaks, animasi berbasis linimasa gulir (CSS `animation-timeline` atau GSAP ScrollTrigger). Gunakan hook Motion khusus. **DILARANG KERAS menggunakan `window.addEventListener('scroll')`**.

### VISUAL_DENSITY (Level 1-10)

- **1-3 (Galeri Seni):** Ruang kosong sangat lapang. Jarak antar-bagian sangat besar (`py-32` hingga `py-48`). Nuansa mewah, mahal, dan bersih.
- **4-7 (Aplikasi Sehari-hari):** Jarak standar antarmuka web modern (`py-16` hingga `py-24`).
- **8-10 (Kokpit / Padat):** Jarak padding sangat rapat. Tanpa kotak kartu tebal; data dipisahkan hanya oleh garis 1px tipis. Angka wajib menggunakan font monospace `font-mono`.

---

## 8. PROTOKOL MODE GELAP (*DARK MODE PROTOCOL*)

Dukungan dua mode adalah standar default. Jangan pernah berasumsi hanya mode terang kecuali brief secara spesifik meminta peniruan cetak editorial koran/buku.

### 8.A Strategi Token (Pilih satu, terapkan konsisten)

- **Varian Tailwind `dark:`** (default untuk proyek berbasis utilitas): setiap kelas warna dipasangkan dengan varian gelapnya (`bg-white dark:bg-zinc-950`, `text-gray-900 dark:text-gray-100`).
- **Variabel CSS** (untuk shadcn/ui, Radix Themes, atau pustaka komponen bertema): definisikan token semantik (`--surface`, `--surface-elevated`, `--text-primary`, `--accent`) dan ubah nilainya di bawah selektor `[data-theme="dark"]` atau `@media (prefers-color-scheme: dark)`.

### 8.B Hindari Menentukan Warna Kaku di Sini

Karakter brief dan identitas merek yang menentukan. Prinsip wajib:
- **Kontras** - minimal WCAG AA untuk teks isi, target AAA untuk teks judul utama.
- **Kesetaraan Hierarki** - hierarki visual yang menonjol di mode terang harus tetap menonjol di mode gelap. Jika tombol CTA tampak mencolok di mode terang, ia juga harus sama mencoloknya di mode gelap.
- **Keaslian Merek** - warna identitas merek utama harus tetap mudah dikenali. Jangan menurunkan saturasi warna merek secara berlebihan saat berpindah ke mode gelap.
- **Hindari `#000000` pekat dan `#ffffff` murni** - gunakan hitam pudar (*off-black*, zinc-950, abu-abu gelap hangat) dan putih pudar (*off-white*). Nilai warna ekstrem yang murni merusak kedalaman visual.

### 8.C Mode Bawaan

Patuhi pengaturan peramban pengguna via `prefers-color-scheme`. Sediakan tombol sakelar tema manual jika salah satu mode memiliki ekspresi identitas visual yang penting.

### 8.D Uji di Kedua Mode Sebelum Rilis

Selalu buka dan periksa halaman dalam kedua mode selama proses pengembangan. Jangan pernah merilis antarmuka yang hanya pernah Anda lihat di satu mode saja.

---

## 9. CIRI KHAS AI (*AI TELLS* / Pola Terlarang)

Hindari pola-pola klise di bawah ini kecuali brief secara eksplisit memintanya.

### 9.A Visual & CSS

- **DILARANG menggunakan kilau neon luar (*outer glows*)** secara otomatis. Gunakan border tipis di dalam atau bayangan berwarna lembut yang tersamar.
- **DILARANG menggunakan warna hitam pekat murni (`#000000`).** Gunakan off-black, zinc-950, atau arang (*charcoal*).
- **DILARANG menggunakan warna aksen yang terlampau jenuh.** Turunkan saturasi agar menyatu harmonis dengan warna-warna netral.
- **DILARANG menggunakan teks gradien secara berlebihan** pada judul-judul berukuran besar.
- **DILARANG mengganti kursor mouse bawaan secara kustom.** Ketinggalan zaman, merusak aksesibilitas, dan membebani performa.

### 9.B Tipografi

- **HINDARI menjadikan Inter sebagai font default.** Lihat Bagian 4.1.
- **DILARANG membuat H1 raksasa yang sekadar berteriak tanpa bentuk.** Kendalikan hierarki melalui ketebalan (*weight*) dan warna, bukan semata-mata memperbesar ukuran skala.
- **Batasan Serif:** Font serif untuk karya editorial / kemewahan / publikasi sastra. Bukan untuk dasbor operasional.

### 9.C Tata Letak & Spasi

- **Spasi dan padding yang proporsional.** Hindari elemen melayang canggung dengan celah yang tidak seimbang.
- **DILARANG membuat baris 3 kartu fitur yang berukuran sama persis.** Tiga kartu identik berjajar horizontal adalah ciri klise bawaan AI yang paling kentara. Gunakan alternatif 2 kolom zig-zag, grid asimetris, kartu terkunci gulir, atau lintasan geser horizontal.

### 9.D Konten & Data (Efek "Jane Doe")

- **DILARANG menggunakan nama-nama generik buatan AI.** "John Doe", "Sarah Chan", "Jack Su" → gunakan nama-nama realistis yang kreatif dan sesuai dengan konteks budaya lokal pengguna.
- **DILARANG menggunakan avatar pengguna yang generik.** Jangan memakai gambar siluet telur SVG atau ikon pengguna Lucide standar → gunakan penampung foto yang meyakinkan atau tipografi inisial nama yang dirancang rapi.
- **DILARANG menggunakan angka-angka persentase bulat yang terkesan palsu.** Hindari `99.99%`, `50%`, `1234567`. Gunakan data organik yang realistis (`47.2%`, `+1 (312) 847-1928`).
- **DILARANG menggunakan nama merek startup klise buatan AI.** "Acme", "Nexus", "SmartFlow", "Cloudly" → ciptakan nama-nama kontekstual yang terdengar orisinal dan kredibel.
- **DILARANG menggunakan kata kerja hampa yang bombastis.** "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize" → gunakan kata kerja aksi konkret yang lugas.

### 9.E Sumber Daya Eksternal & Komponen

- **DILARANG menggambar ikon SVG secara manual.** Gunakan pustaka resmi: Phosphor / HugeIcons / Radix / Tabler.
- **Ilustrasi dekoratif SVG buatan tangan sangat tidak disarankan** sebagai pilihan default (lihat Bagian 4.8).
- **DILARANG meniru tangkapan layar produk menggunakan elemen div palsu.** Jangan menyusun antarmuka tiruan dari kotak-kotak div untuk mensimulasikan layar aplikasi. Gunakan foto nyata, gambar hasil generate alat AI visual, atau tampilkan komponen kode aslinya.
- **DILARANG menggunakan tautan foto Unsplash yang rentan rusak.** Gunakan `https://picsum.photos/seed/{kata-kunci}/{lebar}/{tinggi}`, atau foto hasil generate alat visual, atau aset proyek nyata.
- **Kustomisasi shadcn/ui:** Diizinkan, tetapi JANGAN PERNAH dibiarkan dalam kondisi bawaan default. Sesuaikan sudut border, palet warna, bayangan, dan tipografinya dengan karakter proyek.

### 9.F Ciri Khas Pengujian Produksi (Dilarang Mutlak)

Pola-pola ini ditemukan langsung dari pengujian evaluasi landing page buatan AI. Ini adalah tanda tangan visual yang secara otomatis dimunculkan model saat mencoba terlihat "artistik". Perlakukan daftar ini sebagai larangan mutlak kecuali brief secara spesifik memintanya.

**Hero & Bagian Paling Atas Halaman**
- **DILARANG menaruh label versi di hero.** `V0.6`, `v2.0`, `BETA`, `INVITE-ONLY PREVIEW`, `EARLY ACCESS`, `ALPHA` dilarang dijadikan label kecil di atas judul hero. Hanya boleh digunakan jika brief memang tentang peluncuran produk baru.
- **DILARANG menaruh label mikro bergaya "Merek · No. 01".** Hindari baris mikro seperti "Marrow · No. 01 · Panci 6 Liter".

**Penomoran Bagian & Label Mikro**
- **DILARANG memberi nomor pada label kecil di atas judul bagian.** `00 / INDEKS`, `001 · Kapabilitas`, `002 · Karya Pilihan`, `06 · Cara Kerja` dilarang. Label harus menyebutkan topik dalam bahasa wajar tanpa penomoran kaku.
- **DILARANG menaruh pagination bergaya `01 / 4` pada gambar atau kotak bento.** Pengguna dapat melihat jumlahnya sendiri tanpa perlu dilabeli angka.
- **DILARANG menaruh petunjuk gulir seperti `Gulir · 001 Kapabilitas`.** Cukup panah sederhana atau kata "Gulir" jika memang dibutuhkan; jangan tambahkan angka indeks.

**Pemisah Titik Tengah (*Middle-Dot*) & Titik Status**
- **Batasi penggunaan titik tengah (`·`).** Maksimal 1 titik tengah per baris pada metadata teks. JANGAN gunakan titik tengah sebagai pemisah semua kata ("satu · dua · tiga · empat"). Gunakan baris baru, spasi, atau garis vertikal tipis.
- **DILARANG menaruh titik warna status dekoratif di setiap daftar/menu/lencana.** Titik warna kecil sebelum teks menu atau sebelum baris daftar dilarang sebagai hiasan. Hanya boleh digunakan bila titik tersebut menyampaikan status sistem yang sebenarnya (server aktif, ketersediaan jadwal) dan gunakan secara hemat.

**Larangan Tanda Pisah Em-Dash & Hiasan Tipografi Klise**
- **DILARANG KERAS MENGGUNAKAN TANDA PISAH EM-DASH (`—`) SEBAGAI ELEMEN DESAIN MAUPUN DI TEMPAT LAIN.** Lihat Bagian 9.G untuk larangan total ini.
- **DILARANG memecah baris judul dengan `<br>` lalu memiringkan kata terakhirnya** sebagai trik desain bawaan ("selama tiga puluh<br>*tahun.*"). Judul harus terbaca secara wajar.
- **DILARANG memutar teks vertikal 90 derajat** ("DAFTAR KARYA 2018 - 2026"). Ini adalah klise agensi web yang sering mengganggu keterbacaan.
- **DILARANG membuat garis grid rambut atau garis bidik salib (*crosshair*) hanya sebagai dekorasi.** Garis vertikal dan horizontal yang digambar semata-mata agar halaman "terlihat dirancang teknis" dilarang. Gunakan garis hanya jika ia membatasi konten data nyata.

**Pencegahan Tangkapan Layar Tiruan**
- **DILARANG membuat UI produk tiruan di hero dari elemen div** (daftar tugas buatan div, jendela terminal fiktif, dasbor palsu). Ini adalah tanda AI nomor satu yang paling mudah dikenali.
- **DILARANG menaruh footer versi palsu** ("v0.6.2-rc.1", "sinkronisasi 4 detik lalu · main") di dalam gambar produk tiruan.

**Gaya Teks Pemasaran Klise**
- **DILARANG menggunakan frasa seperti "Diam-diam dipercaya oleh" / "Telah digunakan dengan tenang di".** Gunakan bahasa wajar: "Dipercaya oleh", "Digunakan di", atau biarkan baris logo berbicara sendiri tanpa judul.
- **DILARANG menggunakan label puitis yang dibuat-buat** seperti "Catatan Lapangan", "Dari Meja Kerja", atau "Gagasan Lepas" pada bagian kutipan atau blog. Gunakan label fungsional yang lugas ("Testimoni", "Tulisan Terbaru", "Proyek Berjalan").
- **DILARANG menaruh kalimat penjelas mikro bertele-tele di bawah label kategori.** Kalimat seperti _"Masing-masing fitur ini adalah apa yang kami rilis hari ini, bukan janji masa depan. Daftar ini sengaja dibuat ringkas."_ hanya mengotori ruang. Label + Judul + Paragraf sudah cukup.
- **DILARANG menggunakan penomoran langkah generik.** "Tahap 1 / Tahap 2 / Tahap 3", "Langkah 01 / Langkah 02". Konten tindakan itu sendiri adalah labelnya. Gunakan langsung kata kerja dan kata bendanya ("Pasang", "Konfigurasi", "Rilis").

**Lencana Tempel pada Gambar & Footer Versi**
- **DILARANG menempelkan lencana teks di atas gambar.** Hindari meletakkan tag `<span>` di atas foto seperti `Merek · 02`, `Koleksi 01`. Biarkan gambar berbicara sendiri, atau letakkan takarir teks di bawah gambar di luar area foto.
- **DILARANG membuat takarir kredit foto palsu sebagai dekorasi.** Teks seperti `Studi lapangan no. 12 · Ines Caetano`, `Arsip Rumah No. 03` di bawah foto stok terkesan sok artistik. Kredit foto hanya diizinkan jika memang ada fotografer nyata yang diberi atribusi resmi.
- **DILARANG menaruh footer nomor versi aplikasi pada halaman pemasaran publik.** Teks seperti `v1.4.2`, `Build 0048` adalah konsumsi alat pengembang (CLI/devtool), bukan konten yang pantas di halaman landing publik.

**Larangan Teks Strip Dekoratif di Bawah Hero**
- **DILARANG menaruh strip teks huruf kapital di bawah hero.** Pola seperti `MEREK. GERAK. RUANG.`, `DESAIN · BANGUN · RILIS` sebagai pita teks mono kecil di bagian bawah hero adalah klise agensi lama. Dilarang kecuali baris tersebut berisi tautan navigasi nyata atau informasi persetujuan cookie.
- **DILARANG meletakkan paragraf penjelas kecil melayang di sudut kanan atas judul bagian.** Pola ini sering muncul: judul besar rata kiri, lalu di sudut kanan atas ada paragraf kecil melayang tanpa penjajaran yang jelas. Tumpuk paragraf tersebut tepat di bawah judul secara vertikal, atau buat tata letak 2 kolom seimbang yang sejajar rapi.

**Pemisah Daftar & Garis Pembatas Berlebih**
- **DILARANG memasang garis `border-t` dan `border-b` di setiap baris tabel/daftar panjang.** Pilih salah satu (garis bawah antar-baris ATAU garis atas untuk kelompok) dan gunakan secara hemat.
- **DILARANG menggunakan bar progres tebal dengan lintasan berwarna abu-abu** sebagai visual perbandingan di landing page. Bar tebal berisi persentase adalah elemen dasbor operasional yang mengotori landing page. Gunakan angka besar + ikon kecil bila perlu perbandingan.

**Keterangan Waktu & Petunjuk Gulir**
- **Keterangan kota, waktu lokal, dan cuaca dilarang untuk 99% skenario.** "Jakarta, bekerja bersama para pendiri", "Jakarta 14.30 · 28°C" di navigasi. Ini adalah ciri khas klise portofolio agensi. Hanya diizinkan bila brief memang tentang studio terdistribusi multi-negara dengan relevansi zona waktu yang nyata, atau merek perjalanan/pariwisata.
- **Petunjuk gulir layar dilarang.** Teks seperti `Gulir ke bawah`, `↓ scroll`, atau ikon roda mouse beranimasi dilarang. Pengguna web sudah tahu cara menggulir layar. Bagian bawah viewport tidak memerlukan label instruksi.
- **NOL titik status dekoratif sebagai default.** Jangan menaruh titik warna di samping menu navigasi atau lencana teks kecuali benar-benar menunjukkan status sistem yang sedang berjalan langsung.

### 9.G LARANGAN TOTAL TANDA PISAH EM-DASH (Ciri AI Paling Sering Muncul)

**Tanda pisah em-dash (`—`) DILARANG SECARA TOTAL.** Karakter ini adalah kebiasaan gaya bahasa nomor satu dari model AI dan merupakan tanda visual paling kentara dalam pengujian kualitas. Tidak ada toleransi "penggunaan terbatas", tidak ada alasan "frekuensi bahasa alami", dan tidak ada pengecualian "di dalam teks paragraf". Dilarang mutlak.

- **Dilarang di judul utama.** Gunakan titik atau koma.
- **Dilarang di label kategori, lencana, teks tombol, takarir gambar, atau menu navigasi.** Gantikan dengan pemisahan baris, kolom terstruktur, atau spasi.
- **Dilarang di teks isi paragraf.** Susun ulang struktur kalimatnya: gunakan dua kalimat yang dipisahkan titik, atau gunakan tanda koma, atau gunakan tanda kurung, atau gunakan titik dua.
- **Dilarang di atribusi kutipan.** Gunakan tanda hubung biasa dengan spasi (`-`) atau baris baru dengan nama yang diformat lebih ringan.
- **Dilarang juga dalam bentuk en-dash (`–`) bila digunakan sebagai pemisah antarkata.** Rentang tanggal (`2018-2026`) gunakan tanda hubung biasa. Rentang angka (`Rp40-80 ribu`) gunakan tanda hubung biasa.

Karakter tanda hubung yang DIIZINKAN di halaman HANYALAH:
- Tanda hubung biasa `-` (untuk kata majemuk bahasa Indonesia seperti *anak-anak*, rentang nilai, dan garis pembatas pada markup)
- Tanda minus pada operasi matematika atau suhu (`-5°C`)

Jika keluaran Anda memuat satu saja karakter `—` atau `–` yang terlihat oleh pengguna, keluaran tersebut langsung GAGAL dalam Pemeriksaan Sebelum Rilis dan wajib ditulis ulang.

---

## 10. KOSAKATA REFERENSI (Pola Desain yang Wajib Dipahami)

Ini adalah perbendaharaan istilah desain, bukan pustaka kode kaku. Pahami istilah-istilah ini untuk berkomunikasi dan menerapkannya saat analisis desain menuntut kehadirannya.

### Paradigma Bagian Hero

- **Asymmetric Split Hero** - Teks di satu sisi, aset visual di sisi lain, dengan ruang kosong yang lapang dan elegan.
- **Editorial Manifesto Hero** - Tipografi berukuran besar berwibawa, tanpa gambar pengalih perhatian, layaknya sebuah poster gagasan.
- **Video / Media Mask Hero** - Bentuk huruf tipografi dipotong sebagai masker tembus pandang di atas latar belakang video bergerak.
- **Kinetic-Type Hero** - Tipografi beranimasi kinetik sebagai elemen visual utama yang memukau.
- **Curtain-Reveal Hero** - Bagian hero membuka ke samping atau ke atas layaknya tirai panggung saat layar digulir.
- **Scroll-Pinned Hero** - Konten hero tetap terkunci di posisinya sementara konten bagian bawah bergulir di atasnya.

### Navigasi & Menu

- **Mac OS Dock Magnification** - Navigasi tepi dengan ikon yang membesar secara mulus dan proporsional saat kursor mendekat.
- **Magnetic Button** - Tombol yang sedikit tertarik ke arah koordinat kursor mouse saat didekati.
- **Dynamic Island** - Komponen berbentuk kapsul fleksibel yang membesar dan bertransformasi halus untuk menampilkan status atau peringatan.
- **Floating Speed Dial** - Tombol aksi melayang (FAB) yang mekar memunculkan tombol-tombol sekunder secara melengkung dengan pegas.
- **Mega Menu Reveal** - Dropdown layar penuh dengan pemunculan isi secara bertahap dan memudar halus.

### Tata Letak & Grid

- **Bento Grid** - Pengelompokan ubin asimetris dengan ukuran sel bervariasi (terinspirasi dari Pusat Kontrol Apple).
- **Masonry Layout** - Grid bertingkat dengan tinggi baris bebas yang dinamis.
- **Chroma Grid** - Garis tepi atau ubin kartu dengan pancaran gradien halus yang bergerak perlahan.
- **Split-Screen Scroll** - Dua belahan layar yang meluncur ke arah berlawanan saat digulir.
- **Sticky-Stack Sections** - Bagian-bagian halaman yang saling mengunci dan bertumpuk rapi saat digulir ke bawah.

### Kartu & Wadah Konten

- **Parallax Tilt Card** - Kemiringan 3D pada kartu yang merespons koordinat kursor mouse pengguna secara interaktif.
- **Spotlight Border Card** - Garis tepi kartu menyala lembut tepat di bawah posisi kursor mouse.
- **Glassmorphism Panel** - Panel kaca buram dengan refraksi garis tepi dalam yang realistis.
- **Tinder Swipe Stack** - Tumpukan kartu fisik yang dapat disingkirkan dengan gestur lempar ke samping.
- **Morphing Modal** - Tombol pemicu yang bertransformasi langsung membesar menjadi kotak dialog utuh.

### Animasi Gulir (*Scroll Animations*)

- **Sticky Scroll Stack** - Kartu-kartu mengunci di bagian atas layar dan bertumpuk secara fisik satu per satu.
- **Horizontal Scroll Hijack** - Guliran roda mouse vertikal dialihkan menjadi pergerakan lintasan horizontal yang halus.
- **Zoom Parallax** - Gambar latar belakang di bagian tengah yang membesar perlahan seiring layar digulir.
- **Scroll Progress Path** - Garis vektor SVG yang tergambar secara presisi mengikuti progres guliran halaman.

### Pemilihan Pustaka Animasi

- **Motion (`motion/react`)** - Pilihan utama default untuk antarmuka pengguna, grid Bento, dan animasi transisi status.
- **GSAP + ScrollTrigger** - Khusus untuk alur cerita gulir satu halaman penuh (*scrolltelling*) dan pembajakan gulir horizontal. Isolasi dalam komponen daun terpisah dan selalu sertakan fungsi pembersihan (*cleanup*) di dalam `useEffect`.
- **Three.js / WebGL** - Untuk latar belakang kanvas interaktif dan adegan 3D kompleks. Terapkan aturan isolasi yang sama.
- **JANGAN PERNAH mencampur GSAP / Three.js dengan Motion dalam pohon komponen yang sama.** Keduanya akan saling berebut frame render dan menyebabkan penurunan performa drastis.

---

## 11. PROTOKOL DESAIN ULANG (*REDESIGN PROTOCOL*)

Keahlian ini mencakup **pembuatan proyek dari nol (greenfield) DAN desain ulang (redesign)**. Salah mengklasifikasikan skenario adalah penyebab utama kegagalan desain ulang.

### 11.A Deteksi Mode (Tindakan Pertama)

- **Proyek Baru (*Greenfield*)** - Belum ada situs yang berjalan, atau perombakan total dari nol telah disetujui pengguna.
- **Desain Ulang: Pertahankan Identitas (*Redesign - Preserve*)** - Modernisasi antarmuka tanpa merusak identitas merek yang sudah dikenal. Lakukan audit terlebih dahulu, ekstrak token merek, dan kembangkan secara evolusioner.
- **Desain Ulang: Perombakan Visual (*Redesign - Overhaul*)** - Menerapkan bahasa visual baru di atas konten dan arsitektur informasi yang sudah ada. Tetap pertahankan struktur konten dan alur navigasi utama.

Jika ambigu, tanyakan **satu kali**: _"Apakah desain ulang ini bertujuan mempertahankan identitas merek yang sudah ada, atau kita memulai secara visual dari nol?"_

### 11.B Audit Sebelum Mengubah Kode

Dokumentasikan kondisi situs saat ini sebelum mengusulkan perubahan:
- **Token Merek** - warna primer dan aksen, jenis huruf yang digunakan, perlakuan logo, skala sudut border (*radii*).
- **Arsitektur Informasi** - pohon struktur halaman, navigasi utama, jalur konversi terpenting.
- **Blok Konten** - bagian mana yang efektif, bagian mana yang hanya sekadar pengisi.
- **Pola yang Wajib Dipertahankan** - interaksi khas yang disukai pengguna, bagian hero yang ikonik, laras suara teks (*copywriting*).
- **Pola yang Wajib Dipensiunkan** - ciri khas AI klise, tata letak yang rusak di ponsel, tautan mati, foto stok generik.
- **Nilai Tombol Pengatur Eksisting** - perkirakan nilai `DESIGN_VARIANCE`, `MOTION_INTENSITY`, dan `VISUAL_DENSITY` dari situs saat ini sebagai titik tolak awal.
- **Fondasi SEO** - halaman dengan peringkat tinggi di mesin pencari, meta judul, data terstruktur schema.org, dan kartu OpenGraph. **Mempertahankan performa SEO adalah risiko paling kritis dalam desain ulang.**

### 11.C Aturan Pelestarian

- **Jangan mengubah arsitektur informasi** kecuali secara eksplisit diminta. Pertahankan slug URL, ID jangkar tautan (*anchor IDs*), dan label navigasi utama demi menjaga SEO dan memori otot pengguna.
- **Ekstrak warna merek sebelum menerapkan Bagian 4.2.** Merek yang sejak awal memiliki warna ungu tetap dipertahankan warna ungunya — terapkan pengecualian aturan ungu.
- **Pertahankan karakter gaya tulisan** kecuali pengguna meminta penulisan ulang konten. Modernisasi visual bukan berarti menulis ulang teks secara sembarangan.
- **Hormati pencapaian aksesibilitas yang sudah ada.** Jangan menghilangkan status fokus keyboard, teks alt gambar, atau rasio kontras yang sudah baik.
- **Jaga penamaan event analitik.** Jangan sembarangan mengubah nama tombol, nama bidang formulir, atau ID bagian halaman yang dipantau oleh alat pelacak analitik.

### 11.D Tuas Modernisasi (Urutan Prioritas Eksekusi)

Terapkan secara berurutan — berhenti saat kebutuhan brief telah terpenuhi:
1. **Pembaruan Tipografi** - memberikan peningkatan kualitas visual terbesar dengan risiko teknis paling rendah.
2. **Spasi & Ritme Visual** - perbesar padding antar-bagian, rapikan ritme vertikal teks.
3. **Kalibrasi Ulang Warna** - turunkan saturasi warna berlebih, seragamkan palet warna netral, pertahankan aksen utama merek.
4. **Lapisan Animasi Mikro** - tambahkan mikro-interaksi yang sesuai dengan nilai `MOTION_INTENSITY` pada komponen yang ada.
5. **Penyusunan Ulang Hero & Bagian Kunci** - tata ulang bagian atas halaman menggunakan kosakata desain pada Bagian 10.
6. **Penggantian Blok Komponen Utuh** - hanya dilakukan jika blok komponen lama memang sudah tidak dapat diselamatkan.

### 11.E Pohon Keputusan: Evolusi Terarah vs Perombakan Total

- Arsitektur informasi, konten, dan SEO dalam kondisi sehat → lakukan **evolusi terarah** (Tuas 1-4). Memberikan ~70% peningkatan visual dengan hanya ~40% risiko teknis.
- Terdapat utang visual struktural (navigasi berantakan, tanpa sistem desain, rusak parah di ponsel) → lakukan **desain ulang total** dengan pelestarian konten yang ketat.
- Identitas merek itu sendiri sedang berganti haluan → perlakukan sebagai **proyek baru (*greenfield*)**.

### 11.F Hal yang Tidak Boleh Berubah Diam-diam

Jangan pernah memodifikasi hal-hal ini tanpa persetujuan eksplisit dari pengguna:
- Struktur URL dan slug rute halaman
- Label menu navigasi utama
- Nama bidang formulir atau urutannya (berisiko merusak integrasi analitik dan fitur isi-otomatis peramban)
- Logo utama merek atau lambang kata (*wordmark*)
- Teks hukum, syarat ketentuan, dan kebijakan persetujuan privasi/cookie yang sudah ada

---

## 12. PUSTAKA BLOK (*THE BLOCK LIBRARY*)

Kosakata Referensi (Bagian 10) memberi nama pada pola desain. Pustaka Blok mengimplementasikannya dengan properti nyata, spesifikasi animasi nyata, dan kode siap pakai.

### 12.A Struktur Lokasi Berkas

```
skills/taste-skill/blocks/
  hero/
    asymmetric-split.md
    editorial-manifesto.md
    kinetic-type.md
    ...
  feature/
    bento-grid.md
    sticky-scroll-stack.md
    zig-zag.md
    ...
  social-proof/
  pricing/
  cta/
  footer/
  navigation/
  portfolio/
  transition/
```

### 12.B Frontmatter Wajib

```yaml
---
name: asymmetric-split-hero
category: hero
dial_compatibility:
  variance: [6, 10]
  motion: [3, 10]
  density: [2, 5]
when_to_use: "Landing page dengan satu aset visual kuat dan satu pesan utama tegas. Hero standar untuk SaaS, agensi, dan produk konsumen premium."
not_for: "Peluncuran manifesto editorial di mana pesan teks itu sendiri adalah desain utamanya."
stack: ["react", "next", "tailwind", "motion"]
---
```

### 12.C Struktur Isi Bagian Wajib

1. **Sketsa Visual** - deskripsi tata letak atau diagram skematis singkat.
2. **API Properti (*Props*)** - antarmuka TypeScript komponen.
3. **Kerangka Kode** - implementasi minimal yang berfungsi (Server Component secara default, Client Component untuk pulau interaktivitas animasi).
4. **Fallback Seluler** - aturan penyesuaian yang jelas untuk layar `< 768px`.
5. **Varian Animasi** - variasi animasi per rentang nilai `MOTION_INTENSITY` (1-3, 4-7, 8-10) beserta penanganan untuk `prefers-reduced-motion`.
6. **Catatan Mode Gelap** - strategi token warna khusus untuk blok ini.
7. **Pola Keliru (*Anti-patterns*)** - kesalahan umum yang sering terjadi pada blok ini.
8. **Referensi** - tautan contoh nyata di lingkungan produksi.

### 12.D Disiplin Pengelolaan Pustaka Blok

- Satu blok per berkas. Jangan menggabungkan beberapa blok ke dalam satu berkas.
- Setiap blok harus dapat berfungsi mandiri (*standalone*).
- Setiap blok wajib lolos Pemeriksaan Sebelum Rilis (Bagian 14).
- Blok yang bergantung pada sistem desain resmi dari Bagian 2.A ditempatkan di bawah penamaan `blocks/<kategori>/<nama>--<sistem>.md` (contoh: `feature/bento-grid--material.md`).

---

## 13. DI LUAR CAKUPAN (*OUT OF SCOPE*)

Keahlian ini BUKAN diperuntukkan bagi:
- Dasbor analitik padat / antarmuka produk internal / panel admin (gunakan Fluent, Carbon, Atlassian, atau Polaris dari Bagian 2.A).
- Tabel data besar dan kompleks (gunakan TanStack Table atau AG Grid).
- Formulir bertahap panjang (*multi-step wizard*) (gunakan pola khusus formulir terstruktur).
- Editor kode dalam peramban (gunakan Monaco Editor atau CodeMirror dengan tema resmi).
- Aplikasi seluler native (gunakan panduan Apple HIG atau Material Design secara langsung).
- Antarmuka kolaborasi waktu-nyata (kehadiran kursor multi-pengguna, sinkronisasi OT/CRDT).

Jika brief Anda merupakan salah satu dari kategori di atas, **sampaikan secara terbuka**, arahkan ke pustaka atau alat yang tepat, dan terapkan skill ini hanya pada bagian halaman pemasaran, halaman pengenalan (*about*), atau landing page publiknya saja.

---

## 14. PEMERIKSAAN AKHIR SEBELUM RILIS (*FINAL PRE-FLIGHT CHECK*)

Jalankan matriks pemeriksaan ini sebelum mengirimkan kode antarmuka. Ini adalah gerbang penyaring terakhir.

**PEMERIKSAAN INI TIDAK BOLEH DILEWATKAN. Setiap kotak harus dicentang dengan jujur. Jika ada satu saja yang gagal, pekerjaan belum selesai.**

- [ ] **Pernyataan analisis desain** sudah dideklarasikan di awal (satu baris sesuai Bagian 0.B)?
- [ ] **Nilai tombol pengatur** disebutkan secara eksplisit dan didasarkan pada brief, bukan diam-diam memakai nilai bawaan?
- [ ] **Sistem desain** dipilih dari Bagian 2 jika relevan, atau arah estetika dinyatakan secara jujur?
- [ ] **Mode desain ulang** terdeteksi dan proses audit telah dilakukan (bila berlaku, Bagian 11)?
- [ ] **NOL TANDA PISAH EM-DASH (`—`) DI SELURUH HALAMAN.** Pada judul, label kecil, lencana, isi paragraf, kutipan, atribusi, takarir gambar, tombol, dan teks alt. Semuanya nol. (Bagian 9.G - mutlak tanpa kompromi).
- [ ] **Penguncian Tema Halaman (*Page Theme Lock*)**: SATU tema konsisten (terang, gelap, atau auto) untuk seluruh halaman tanpa pembalikan warna acak di tengah guliran (Bagian 4.11)?
- [ ] **Penguncian Konsistensi Warna**: satu warna aksen diterapkan secara terpadu di semua bagian halaman (Bagian 4.2)?
- [ ] **Penguncian Konsistensi Bentuk**: satu skala sudut membulat (*border-radius*) diterapkan konsisten di seluruh elemen (Bagian 4.4)?
- [ ] **Pemeriksaan Kontras Tombol**: setiap teks tombol CTA terbaca jelas di atas warna latarnya (tidak ada putih di atas putih, lolos WCAG AA 4.5:1)?
- [ ] **Pencegahan Teks Tombol Terlipat**: teks tombol CTA muat dalam satu baris tunggal di desktop tanpa terlipat?
- [ ] **Pemeriksaan Kontras Formulir**: bidang input, teks placeholder, garis fokus, dan label formulir semuanya memenuhi rasio kontras WCAG AA terhadap warna latar sekitarnya?
- [ ] **Disiplin Font Serif**: jika font serif digunakan, pastikan BUKAN Fraunces atau Instrument_Serif (atau memiliki justifikasi merek yang sangat kuat), dan berbeda dari proyek sebelumnya?
- [ ] **Pemeriksaan Palet Konsumen Premium**: jika proyek bertema konsumen premium, palet warna BUKAN berasal dari keluarga klise krem+kuningan+oxblood+espresso bawaan AI?
- [ ] **Ruang Desender Huruf Miring**: setiap kata miring pada judul display yang memiliki huruf `y g j p q` menggunakan minimal `leading-[1.1]` dan cadangan padding bawah `pb-1`?
- [ ] **Hero Muat dalam Satu Layar Viewport**: judul maksimal 2 baris, teks penjelas maksimal 20 kata dan maksimal 4 baris, tombol CTA terlihat tanpa perlu menggulir layar?
- [ ] **Batas Padding Atas Hero**: maksimal `pt-24` di desktop, konten hero tidak melayang terlalu jauh ke tengah bawah layar?
- [ ] **Disiplin Elemen Teks Hero**: maksimal 4 elemen teks di bagian hero (eyebrow atau strip merek, judul, teks penjelas, tombol CTA); tanpa tagline kecil di bawah tombol dan tanpa baris logo di dalam hero?
- [ ] **JUMLAH EYEBROW TERKENDALI**: hitung kemunculan label huruf kapital di atas judul bagian. Jumlah keseluruhan ≤ pembulatan ke atas dari (total bagian / 3)? Hero dihitung 1.
- [ ] **Larangan Header Terbelah**: tidak menggunakan pola judul besar di kiri dan paragraf penjelas melayang di kanan atas sebagai kepala bagian (tumpuk vertikal secara rapi)?
- [ ] **Batas Pola Zig-Zag**: tidak ada 3 bagian berturut-turut yang menggunakan pola tata letak gambar-teks terpisah bergantian?
- [ ] **Tidak Ada Duplikasi Tujuan CTA**: tidak ada dua tombol CTA dengan tujuan maksud yang sama di satu halaman (misal: "Hubungi Kami" dan "Kirim Pesan" keduanya muncul = Gagal)?
- [ ] **Deretan Bukti Sosial Logo Murni**: tidak mencantumkan teks label industri/kategori di bawah masing-masing logo mitra/klien?
- [ ] **Keragaman Latar Bento**: setidaknya 2-3 sel dalam grid bento multi-sel memiliki variasi visual nyata (foto asli, gradien terarah, pola halus), bukan hanya kartu putih polos berisi teks?
- [ ] **Dinding Logo Berada di Bawah Hero**, menggunakan logo SVG nyata (Simple Icons / devicon), bukan nama merek yang ditulis dengan teks biasa?
- [ ] **Audit Mandiri Teks Antarmuka**: setiap teks yang terlihat dibaca ulang dengan teliti; bebas dari tata bahasa rancu, rujukan tak jelas, atau gaya bahasa puitis AI yang dipaksakan?
- [ ] **Animasi Memiliki Tujuan Komunikasi Nyata**: setiap pergerakan dapat dijelaskan fungsinya dalam satu kalimat, bukan memasang animasi hanya demi gaya semata?
- [ ] **Maksimal Satu Marquee**: tidak ada dua atau lebih teks berjalan horizontal (*marquee*) di halaman yang sama?
- [ ] **Navigasi Satu Baris di Layar Desktop**, dengan tinggi bilah navigasi ≤ 80px?
- [ ] **Keragaman Tata Letak Antar-Bagian**: tidak ada dua bagian yang menggunakan keluarga tata letak yang sama persis (setidaknya 4 variasi tata letak berbeda dalam 8 bagian halaman)?
- [ ] **Jumlah Sel Bento Presisi**: jumlah sel grid bento persis sama dengan jumlah konten yang tersedia, tanpa ada sel kosong di tengah maupun di ujung?
- [ ] **Daftar Panjang Menggunakan Komponen UI yang Tepat**: daftar lebih dari 5 item tidak disajikan hanya dengan tag `<ul>` bergaris pembatas biasa (gunakan tab, kartu grid, atau akordeon)?
- [ ] **Menggunakan Gambar Nyata**: utamakan alat pembuat gambar AI visual, lalu foto Picsum-seed dengan kata kunci deskriptif, atau penampung bertanda jelas — tanpa kotak div peniru tangkapan layar, tanpa gambar SVG buatan tangan canggung, dan tanpa halaman kosong tanpa gambar?
- [ ] **Tidak Ada Lencana Label yang Menempel di Atas Gambar**?
- [ ] **Tidak Ada Takarir Kredit Foto Fiktif yang Dijadikan Dekorasi**?
- [ ] **Tidak Ada Nomor Versi Aplikasi di Footer Halaman Pemasaran**?
- [ ] **Tidak Ada Kalimat Penjelas Mikro Bertele-tele di Bawah Eyebrow**?
- [ ] **Tidak Ada Pita Teks Huruf Kapital Dekoratif di Bagian Bawah Hero**?
- [ ] **Tidak Ada Paragraf Penjelas Kecil Melayang di Sudut Kanan Atas Judul Bagian**?
- [ ] **Tidak Ada Bar Progres Tebal dengan Jalur Abu-Abu** sebagai elemen perbandingan di landing page?
- [ ] **Tidak Menampilkan Strip Keterangan Waktu, Cuaca, atau Kota Asal** kecuali relevan secara nyata dengan operasional studio?
- [ ] **Tidak Menggunakan Teks Petunjuk Gulir Layar** (`Gulir ke bawah`, panah animasi roda mouse)?
- [ ] **Tidak Menaruh Label Versi di Bagian Hero** (V0.6, BETA, dll.) kecuali acara peluncuran produk?
- [ ] **Tidak Menggunakan Penomoran Angka pada Eyebrow** (`00 / INDEKS`, `01 · Fitur`)?
- [ ] **Nol Titik Status Berwarna sebagai Dekorasi Semata**?
- [ ] **Tidak Memasang Garis Border Atas dan Bawah di Setiap Baris Daftar Panjang**?
- [ ] **Kepadatan Konten Proporsional**: teks penjelas rata-rata ≤ 25 kata per bagian, tanpa tabel data raksasa di halaman pemasaran?
- [ ] **Kutipan Testimoni Maksimal 3 Baris**, dengan atribusi nama dan peran yang jelas tanpa tanda pisah em-dash?
- [ ] **Klaim Gerakan Sesuai Kenyataan**: jika nilai `MOTION_INTENSITY > 4`, halaman benar-benar bergerak mulus dan fungsional?
- [ ] **Komponen GSAP Mengikuti Kerangka Kanonikal** (menggunakan `start: "top top"`, `pin: true`, dan *scrubbing* yang presisi)?
- [ ] **Bebas dari `window.addEventListener('scroll')`** — hanya menggunakan `useScroll()` Motion, ScrollTrigger, IntersectionObserver, atau animasi CSS native berbasis gulir?
- [ ] **Preferensi Pengurangan Gerakan (*Reduced Motion*) Diakomodasi** untuk semua animasi di atas `MOTION_INTENSITY > 3`?
- [ ] **Token Mode Gelap Didefinisikan dan Diuji di Kedua Mode**?
- [ ] **Penyesuaian Tampilan Seluler Dideklarasikan Eksplisit** (`w-full`, `px-4`, `max-w-7xl mx-auto`) untuk semua tata letak asimetris?
- [ ] **Stabilitas Viewport Terjamin**: menggunakan `min-h-[100dvh]`, bukan `h-screen`?
- [ ] **Animasi di dalam `useEffect` Memiliki Fungsi Pembersihan (*Cleanup*) yang Bersih**?
- [ ] **Status Tampilan Kosong, Sedang Memuat, dan Galat Disediakan**?
- [ ] **Mengurangi Wadah Kartu Berlebih** demi tata letak yang bersih dan lapang?
- [ ] **Ikon Diambil dari Pustaka Resmi Terawat** (Phosphor / HugeIcons / Radix / Tabler), tanpa menggambar path SVG ikon sendiri?
- [ ] **Interaktivitas Animasi Diisolasi di Komponen Daun Klien** dengan direktif `'use client'` di baris paling atas?
- [ ] **Bebas dari Ciri Khas AI pada Bagian 9** (Inter sebagai default, gradien ungu AI, 3 kartu identik, nama Jane Doe, merek fiktif Acme, frasa klise pemasaran)?
- [ ] **Target Core Web Vitals Tercapai Secara Masuk Akal** (LCP < 2.5s, INP < 200ms, CLS < 0.1)?
- [ ] **Satu Sistem Desain Konsisten per Proyek** (tanpa mencampuradukkan Material Design dengan komponen shadcn)?

Jika ada satu saja kotak centang yang belum dapat dipenuhi dengan jujur, antarmuka tersebut belum selesai. Perbaiki terlebih dahulu sebelum mengirimkan kode ke pengguna.

---

# LAMPIRAN - Materi Referensi Berdasarkan Sumber Resmi

Bagian di bawah ini menyediakan perintah instalasi nyata, tautan dokumentasi kanonikal, dan contoh kode awal untuk setiap sistem desain yang disebutkan pada Bagian 2.

## Lampiran A - Perintah Instalasi per Sistem Desain

```bash
# Material Web (Material 3)
npm install @material/web

# Fluent UI React (v9)
npm install @fluentui/react-components

# Fluent UI Web Components (bebas framework)
npm install @fluentui/web-components @fluentui/tokens

# IBM Carbon
npm install @carbon/react @carbon/styles

# Radix Themes
npm install @radix-ui/themes

# shadcn/ui (kode terbuka, komponen dimiliki sendiri)
npx shadcn@latest init
npx shadcn@latest add button card badge separator input

# Primer CSS (antarmuka produk/devtool gaya GitHub)
npm install --save @primer/css

# Primer Brand (antarmuka pemasaran gaya GitHub)
npm install @primer/react-brand

# GOV.UK Frontend (layanan publik UK)
npm install govuk-frontend

# USWDS (Sistem Desain Web Pemerintah AS)
npm install uswds

# Atlassian Design System (Atlaskit)
yarn add @atlaskit/css-reset @atlaskit/tokens @atlaskit/button @atlaskit/badge @atlaskit/section-message @atlaskit/card

# Bootstrap 5.3
npm install bootstrap

# Shopify Polaris Web Components (khusus aplikasi Shopify)
# Tambahkan ini ke bagian head HTML aplikasi Anda:
#   <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
#   <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script>
```

## Lampiran B - Sumber Dokumentasi Kanonikal Resmi

### Material Web
- https://github.com/material-components/material-web
- https://material-web.dev/theming/material-theming/
- https://m3.material.io/develop/web

### Fluent UI
- https://fluent2.microsoft.design/get-started/develop
- https://fluent2.microsoft.design/components/web/react/
- https://github.com/microsoft/fluentui
- https://learn.microsoft.com/en-us/fluent-ui/web-components/

### Carbon
- https://carbondesignsystem.com/
- https://github.com/carbon-design-system/carbon
- https://carbondesignsystem.com/developing/react-tutorial/overview/
- https://carbondesignsystem.com/developing/web-components-tutorial/overview/

### Shopify Polaris
- https://shopify.dev/docs/api/app-home/web-components
- https://github.com/Shopify/polaris-react
- https://polaris-react.shopify.com/components

### Atlassian
- https://atlassian.design/get-started/develop
- https://atlassian.design/components/button/examples
- https://atlaskit.atlassian.com/packages/design-system/button/example/disabled
- https://atlassian.design/tokens/design-tokens

### Primer
- https://primer.style/
- https://github.com/primer/css
- https://github.com/primer/brand

### GOV.UK
- https://design-system.service.gov.uk/components/button/
- https://design-system.service.gov.uk/styles/layout/
- https://github.com/alphagov/govuk-frontend

### USWDS
- https://designsystem.digital.gov/documentation/developers/
- https://designsystem.digital.gov/components/button/
- https://designsystem.digital.gov/components/card/
- https://github.com/uswds/uswds

### Bootstrap
- https://getbootstrap.com/docs/5.3/layout/grid/
- https://getbootstrap.com/docs/5.3/components/card/

### Tailwind
- https://tailwindcss.com/docs/dark-mode
- https://tailwindcss.com/blog/tailwindcss-v4

### Radix
- https://www.radix-ui.com/themes/docs/components/theme
- https://www.radix-ui.com/themes/docs/components/card
- https://github.com/radix-ui/themes

### shadcn/ui
- https://ui.shadcn.com/docs
- https://ui.shadcn.com/docs/components/card
- https://github.com/shadcn-ui/ui

### Standar W3C / CSS Native
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
- https://drafts.csswg.org/scroll-animations-1/

### Apple Liquid Glass (Khusus Platform Native Apple)
- https://developer.apple.com/design/human-interface-guidelines/materials
- https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass
- https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass
- https://developer.apple.com/documentation/SwiftUI/Material

---

## Lampiran C - Apple Liquid Glass: Aproksimasi Web yang Jujur

**Jangan** mengklaim cuplikan CSS biasa sebagai Apple Liquid Glass resmi.

### Apa yang Bersifat Resmi

Apple mendokumentasikan Liquid Glass di dalam Panduan Antarmuka Manusia (*Human Interface Guidelines*) dan Dokumentasi Pengembang Apple khusus untuk **platform sistem operasi Apple**. Ini adalah material dinamis yang terintegrasi pada antarmuka sistem operasi native Apple melalui API internal dan komponen sistem bawaan, **bukan paket CSS web publik**.

Dokumentasi resmi terkait:
- Apple Human Interface Guidelines → Materials
- Apple Developer Documentation → Liquid Glass
- Apple Developer Documentation → Adopting Liquid Glass
- SwiftUI → Material

### Apa yang BUKAN Resmi

Tidak ada berkas `liquid-glass.css` resmi dari Apple untuk situs web biasa.

Aproksimasi web dapat memanfaatkan:
- `backdrop-filter`
- Latar belakang transparan
- Garis tepi berlapis (*layered borders*)
- Refleksi sorotan cahaya (*highlight overlays*)
- Gradien warna halus
- Fisika animasi
- Fallback warna solid dengan kontras kuat

Namun itu tetaplah **aproksimasi web glassmorphism / kaca buram**, bukan Liquid Glass resmi milik Apple. Cantumkan keterangan tersebut secara jujur pada komentar kode.

### Kerangka Aproksimasi Web yang Aman

```css
.liquid-glass-web-approx {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / 0.32);
  background:
    linear-gradient(135deg, rgb(255 255 255 / 0.3), rgb(255 255 255 / 0.08)),
    rgb(255 255 255 / 0.12);
  backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  -webkit-backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.48),
    inset 0 -1px 0 rgb(255 255 255 / 0.12),
    0 18px 60px rgb(0 0 0 / 0.18);
}

.liquid-glass-web-approx::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background:
    radial-gradient(circle at 20% 0%, rgb(255 255 255 / 0.55), transparent 34%),
    linear-gradient(
      90deg,
      rgb(255 255 255 / 0.18),
      transparent 42%,
      rgb(255 255 255 / 0.14)
    );
  pointer-events: none;
}

.liquid-glass-web-approx::after {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  border: 1px solid rgb(255 255 255 / 0.14);
  pointer-events: none;
}

@media (prefers-color-scheme: dark) {
  .liquid-glass-web-approx {
    border-color: rgb(255 255 255 / 0.18);
    background:
      linear-gradient(135deg, rgb(255 255 255 / 0.16), rgb(255 255 255 / 0.04)),
      rgb(15 23 42 / 0.42);
    box-shadow:
      inset 0 1px 0 rgb(255 255 255 / 0.22),
      0 18px 60px rgb(0 0 0 / 0.42);
  }
}

@media (prefers-reduced-transparency: reduce) {
  .liquid-glass-web-approx {
    background: rgb(255 255 255 / 0.96);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

**Penting:** Fitur `prefers-reduced-transparency` memiliki tingkat dukungan peramban yang bervariasi; lakukan pengujian langsung. Selalu pastikan kontras teks tetap terbaca dengan nyaman meskipun efek blur tidak bekerja.

---

**Akhir lampiran.** Perintah instalasi di atas adalah pijakan nyata. Kerangka Apple Liquid Glass di atas adalah aproksimasi web yang telah diberi label jujur, bukan paket resmi rilisan Apple. Untuk dokumentasi kanonikal setiap sistem desain, selalu rujuk dokumentasi resmi masing-masing sistem (tautan di Bagian 2 dan Lampiran B).
