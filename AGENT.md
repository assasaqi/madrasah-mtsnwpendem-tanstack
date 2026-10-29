# AGENT.MD — Panduan & Aturan AI Coding Agent (Universal)

Dokumen ini berisi standar teknis rekayasa perangkat lunak, aturan kualitas kode, dan pedoman kerja global untuk **AI Coding Agent** (seperti Antigravity, Cursor, GitHub Copilot, Windsurf, Claude Code, Devin, dsb.). Panduan ini dirancang **100% universal dan agnostik teknologi** sehingga berlaku langsung untuk berbagai jenis proyek perangkat lunak (Web, Mobile, Backend API, Desktop, CLI, Microservices, maupun Monorepo) tanpa terkunci pada satu aplikasi tertentu.

---

# BAGIAN I: PEDOMAN KUALITAS KODE & ANTI-AI SLOP (UNIVERSAL)

Setiap AI Agent yang membaca, membuat, atau memodifikasi kode dalam repositori ini **WAJIB** mematuhi pedoman inti berikut:

## 1. Minimalisme & Kesederhanaan Arsitektur (KISS & YAGNI)
* **Dilarang Abstraksi Berlebihan:**  
  Jangan membuat fungsi utilitas generik, kelas pembungkus (*wrapper*), atau lapisan perantara (*middleware/adapter*) jika kode tersebut hanya digunakan pada satu tempat. Tulis kode yang langsung, jelas, dan mudah dibaca.
* **Hindari Komentar Basa-Basi Sintaks:**  
  Dilarang menulis komentar yang sekadar mengulang kode (contoh buruk: `// fungsi untuk render tombol`, `// handle click event`, `// import react`). Tulis komentar **hanya** jika menjelaskan alasan bisnis yang krusial (*why*), batasan teknis lingkungan, atau algoritma non-trivial.
* **Pertahankan Integritas Kode Eksisting:**  
  Jangan melakukan penulisan ulang (*rewrite*) menyeluruh pada berkas yang sudah stabil jika permintaan hanya perbaikan kecil atau penambahan fitur spesifik. Pertahankan komentar penting dan catatan arsitektur yang sudah ada.
* **Dilarang *Hardcoding* Data Dinamis:**  
  Jangan pernah melakukan *hardcode* pada status respon, data master, atau nilai transaksi demi mempermudah tugas, kecuali pengguna meminta pembuatan mock data awal secara eksplisit.

## 2. Standar UI/UX Bersih & Berorientasi Pengguna (Jika Proyek Berbasis UI)
* **DILARANG Membocorkan Istilah Teknis Backend ke UI Pengguna:**  
  Jangan pernah menampilkan pesan galat mentah seperti *"Internal Server Error 500"*, *"Database query failed: ECONNREFUSED"*, atau detail ORM/driver pada antarmuka pengguna. Gunakan pesan yang ramah, sopan, dan berorientasi pada tindakan solusi bagi pengguna.
* **DILARANG Membuat *Decorative Pill Badge* Klise Khas AI:**  
  Hindari menyisipkan elemen kapsul dekoratif klise (`rounded-full` dengan titik berkedip `animate-pulse` atau ikon kecil beserta teks pengantar basa-basi seperti *"Tersedia untuk Pekerjaan"*, *"Open to Opportunities"*, *"Mengenal Lebih Dekat"*, *"Solusi Terbaik"*, dsb.) di atas judul utama maupun kartu. Gunakan hierarki tipografi judul (`h1`, `h2`, `h3`) secara lugas, profesional, dan bersih.
* **Kerapian & Responsivitas Layar (Mobile & Desktop):**  
  Pastikan tata letak (*layout*) beradaptasi secara optimal di seluruh ukuran layar target (mobile, tablet, desktop). Dilarang meninggalkan elemen yang terpotong secara tidak wajar (*unwanted horizontal scroll*), teks yang tumpang tindih (*overlap*), atau tombol yang terlalu kecil untuk disentuh di perangkat ponsel.
* **Jangan Tambahkan Popup / Alert yang Tidak Diminta:**  
  Jangan menyisipkan modal konfirmasi ganda, alert browser, atau popup sukses/gagal yang tidak dirancang dalam spesifikasi alur fitur.

## 3. Keamanan Kredensial & Sanitasi Data
* **Dilarang Keras Menyimpan Kunci Rahasia dalam Kode (Hardcoded Secrets):**  
  Kunci API, token JWT, sandi database, dan kredensial rahasia wajib dibaca melalui variabel lingkungan (`.env` atau secret manager platform).
* **Sanitasi Masukan & Parameterized Queries:**  
  Seluruh input dari pengguna atau klien eksternal wajib divalidasi dan disanitasi. Operasi database wajib menggunakan parameter query atau query builder terenkapsulasi untuk mencegah celah injeksi (*SQL/NoSQL Injection*).

---

# BAGIAN II: DISIPLIN TERMINAL & PERFORMA LINGKUNGAN (UNIVERSAL)

## 1. DILARANG Menjalankan Script Build Penuh Secara Otomatis
* Agen **DILARANG KERAS** mengeksekusi perintah build produksi secara otomatis (seperti `npm run build`, `vite build`, `next build`, `cargo build --release`, `go build`, `gradle build`, dsb.) setelah mengedit berkas, **KECUALI diminta secara eksplisit oleh pengguna**.
* Perintah build otomatis menghabiskan sumber daya komputasi secara ekstrem, berpotensi memicu *timeout/hang* pada terminal sandbox, dan memperlambat alur kerja interaktif.
* Untuk memverifikasi sintaks dan tipe data, prioritaskan pemeriksaan statis yang ringan (contoh: `npx tsc --noEmit` untuk TypeScript, linter ringan, atau inspeksi logika berkas secara cermat).

## 2. Hormati Ekosistem & Package Manager Bawaan Proyek
* **Deteksi Manifes Proyek Secara Mandiri:**  
  Sebelum menjalankan perintah instalasi paket, periksa berkas lockfile yang sudah ada di repositori:
  * Jika ada `pnpm-lock.yaml` → gunakan `pnpm`
  * Jika ada `yarn.lock` → gunakan `yarn`
  * Jika ada `package-lock.json` → gunakan `npm`
  * Jika ada `bun.lockb` → gunakan `bun`
  * Jika Python: periksa `poetry.lock`, `Pipfile.lock`, atau `requirements.txt`
  * Jika Go: gunakan `go` module
  * Jika Rust: gunakan `cargo`
* **Dilarang mencampur package manager** dalam satu repositori yang dapat menyebabkan konflik dependensi dan korupsi lockfile.
* **Utamakan Skrip Resmi:** Selalu periksa skrip yang terdaftar di berkas konfigurasi proyek (`package.json`, `Makefile`, `Taskfile`) sebelum meracik perintah terminal manual.

## 3. Kehati-hatian Operasi Berkas & Sistem
* Dilarang menghapus direktori atau berkas di luar cakupan tugas tanpa konfirmasi eksplisit dari pengguna.
* Jangan mengubah file konfigurasi inti repositori (`.gitignore`, `.env`, `docker-compose.yml`, `tsconfig.json`, dll.) kecuali secara spesifik diinstruksikan oleh pengguna.

---

# BAGIAN III: STANDAR PENGEMBANGAN FITUR & ADAPTASI KODE

Ketika diberi tugas dalam repositori apa pun, AI Agent harus beroperasi dengan prinsip berikut:

1. **Observasi Sebelum Bertindak (Explore First):**
   * Pahami arsitektur repositori terlebih dahulu: struktur folder, pola arsitektur yang digunakan (misal: Modular, Clean Architecture, Layered/MVC, Monorepo), dan konvensi penamaan berkas.
   * Ikuti konvensi penamaan yang sudah mapan (*kebab-case*, *camelCase*, atau *snake_case*).
2. **Keterisolasian Masalah (Scoped Changes):**
   * Fokus hanya pada berkas dan komponen yang relevan dengan tugas. Jangan menyentuh atau memformat ulang berkas lain yang tidak berkaitan (*avoid cosmetic refactoring noise*).
3. **Penanganan Galat yang Andal (Defensive Programming):**
   * Selalu pertimbangkan skenario kegagalan: apa yang terjadi jika koneksi jaringan putus, database belum siap, nilai array kosong/undefined, atau input bernilai null? Tambahkan *graceful fallback* agar aplikasi tidak mengalami *crash* mendadak.

---

# BAGIAN IV: CHECKLIST SEBELUM MENYELESAIKAN TUGAS

Sebelum AI Agent menyatakan suatu tugas telah selesai dan menyerahkannya kepada pengguna, lakukan audit mandiri terhadap checklist berikut:

- [ ] **Anti-AI Slop:** Apakah kode bebas dari komentar basa-basi sintaks, abstraksi tak perlu, dan elemen dekoratif klise?
- [ ] **Keamanan UI:** Apakah tidak ada pesan error teknis backend atau detail rahasia database yang bocor ke antarmuka pengguna?
- [ ] **Responsivitas & Kerapian Visual (Jika Berbasis UI):** Apakah tata letak di layar ponsel (*mobile*) dan komputer (*desktop*) sudah teruji rapi, proporsional, dan bebas dari overflow tak diinginkan?
- [ ] **Preservasi Repositori:** Apakah kode baru konsisten dengan gaya penulisan, pola struktur, dan konvensi proyek yang sudah ada?
- [ ] **Perlindungan Secrets:** Apakah tidak ada token, API key, atau sandi yang di-hardcode ke dalam kode sumber?
- [ ] **Disiplin Build:** Apakah agen mematuhi aturan untuk **TIDAK menjalankan script build otomatis** (`npm run build`, dsb.) tanpa instruksi pengguna?
