# Panduan Lengkap Deployment ke Hosting cPanel
## Sistem Informasi Madrasah & Portal SPMB (TanStack + Express + MySQL)

Dokumen ini memandu proses deployment sistem ke hosting cPanel shared hosting / Cloud hosting yang mendukung **"Setup Node.js App"** (CloudLinux / Phusion Passenger) dan **MySQL Database**.

---

### Arsitektur Deployment di cPanel

| Komponen | Lokasi di cPanel | Keterangan |
|---|---|---|
| **Frontend (React/Vite)** | `public_html/` (Domain Utama, misal: `madrasah.sch.id`) | File statis hasil build (`client/dist/`) + file `.htaccess` untuk SPA Routing. |
| **Backend (Express API)** | Subdomain (misal: `api.madrasah.sch.id`) | Dijalankan via menu cPanel **"Setup Node.js App"** menggunakan `server/app.js`. |
| **Database (MySQL)** | cPanel MySQL & phpMyAdmin | Basis data relasional dengan konfigurasi Prisma ORM. |
| **Penyimpanan Uploads** | `server/uploads/` | Disajikan langsung oleh Express melalui `https://api.madrasah.sch.id/uploads/...` |

---

## Tahap 1: Persiapan Lokal (Build & Environment)

### 1.1 Persiapan Frontend (`/client`)
1. Di komputer lokal Anda, buka folder `client/`.
2. Buat file `.env.production` di dalam folder `client/` dengan isi URL backend produksi Anda:
   ```env
   VITE_API_URL="https://api.namamadrasah.sch.id/api"
   ```
   *(Ganti `namamadrasah.sch.id` dengan nama domain asli Anda)*

3. Jalankan perintah build di terminal lokal:
   ```bash
   cd client
   npm run build
   ```
4. Periksa folder `client/dist/`. Pastikan di dalamnya terdapat:
   - `index.html`
   - `assets/` (file js & css terkompilasi)
   - `.htaccess` (sudah otomatis disiapkan untuk menangani routing halaman tanpa error 404 saat di-refresh).
5. Kompres seluruh isi di **dalam** folder `client/dist/` menjadi file `frontend-dist.zip`.

---

### 1.2 Persiapan Backend (`/server`)
File yang perlu diunggah ke hosting:
- `server/src/` (seluruh kode controller, routes, middleware, config, utils)
- `server/prisma/` (`schema.prisma` dan migrations jika ada)
- `server/uploads/` (folder kosong untuk menampung file upload)
- `server/package.json`
- `server/app.js` (entry point cPanel yang sudah disiapkan)

> [!IMPORTANT]
> **JANGAN mengunggah folder `node_modules` lokal**. Dependensi npm akan diinstal langsung di cPanel agar kompatibel dengan lingkungan Linux hosting.

Kompres folder `server` (tanpa `node_modules` dan `.env` lokal) menjadi `backend.zip`.

---

## Tahap 2: Membuat Database MySQL di cPanel

1. Masuk ke dasbor **cPanel**.
2. Cari dan buka menu **MySQL® Databases** (atau **MySQL Database Wizard**).
3. **Buat Database Baru**:
   - Nama database: misalnya `u1234567_madrasah`
4. **Buat User Database Baru**:
   - Username: misalnya `u1234567_dbuser`
   - Password: buat password yang kuat dan catat.
5. **Hubungkan User ke Database**:
   - Pilih User dan Database yang baru dibuat, lalu klik **Add**.
   - Centang **ALL PRIVILEGES**, lalu klik **Make Changes**.
6. Simpan informasi koneksi Anda:
   ```text
   Database Host: localhost
   Database Port: 3306
   Database Name: u1234567_madrasah
   Database User: u1234567_dbuser
   Database Pass: password_yang_dibuat_tadi
   ```

---

## Tahap 3: Menyiapkan Subdomain Backend

1. Di cPanel, buka menu **Domains**.
2. Klik **Create A New Domain**.
3. Masukkan domain: `api.namamadrasah.sch.id`.
4. Hapus centang pada *Share document root*, tentukan document root-nya (misalnya: `api_backend`).
5. Klik **Submit**.

---

## Tahap 4: Setup Backend di "Setup Node.js App"

1. Di cPanel, cari dan buka menu **Setup Node.js App**.
2. Klik tombol **Create Application**:
   - **Node.js version**: Pilih versi **18.x**, **20.x**, atau **22.x** (disarankan versi 20 atau 22).
   - **Application mode**: Pilih **Production**.
   - **Application root**: Masukkan path folder backend yang akan Anda upload (misalnya `api_backend` atau `server`).
   - **Application URL**: Pilih subdomain `api.namamadrasah.sch.id`.
   - **Application startup file**: Ketik `app.js`.
3. Klik **Create**.
4. Setelah aplikasi dibuat, buka **File Manager** cPanel:
   - Masuk ke folder root aplikasi backend Anda (misalnya `api_backend`).
   - Unggah file `backend.zip` dan ekstrak di sana. Pastikan struktur filenya berada tepat di folder tersebut (`app.js`, `package.json`, `src/`, `prisma/`, `uploads/`).
5. Kembali ke menu **Setup Node.js App**, klik tombol edit (ikon pensil) pada aplikasi backend Anda:
   - Tambahkan **Environment Variables** berikut di bagian bawah:
     - `NODE_ENV` = `production`
     - `DATABASE_URL` = `mysql://u1234567_dbuser:password_anda@localhost:3306/u1234567_madrasah?connection_limit=10&pool_timeout=30`
     - `JWT_ACCESS_SECRET` = *(string acak panjang minimal 32 karakter)*
     - `JWT_REFRESH_SECRET` = *(string acak panjang minimal 32 karakter)*
     - `FRONTEND_URL` = `https://namamadrasah.sch.id`
     - `COOKIE_SAMESITE` = `none`
   - Klik **Save**.
6. **Instalasi Package & Prisma**:
   - Klik tombol **Run NPM Install** di halaman Setup Node.js App. Tunggu hingga proses instalasi dependensi selesai.
   - Buka menu **Terminal** di cPanel (atau jalankan perintah virtualenv cPanel yang tertera di bagian atas halaman Node.js App):
     ```bash
     # Masuk ke virtualenv cPanel (salin perintah dari bagian atas halaman cPanel Node.js)
     source /home/username/nodevenv/api_backend/20/bin/activate && cd /home/username/api_backend

     # Generate Prisma Client & Dorong Skema ke MySQL
     npx prisma generate
     npx prisma db push
     ```
7. Klik tombol **Restart** pada aplikasi Node.js Anda.
8. Buka di browser: `https://api.namamadrasah.sch.id/`. Jika muncul status server atau dokumentasi API, backend berhasil aktif!

---

## Tahap 5: Deploy Frontend ke `public_html`

1. Buka **File Manager** di cPanel.
2. Masuk ke direktori `public_html/`.
3. Unggah file `frontend-dist.zip` yang telah disiapkan pada Tahap 1.
4. Ekstrak file tersebut langsung di dalam `public_html/`.
5. Pastikan susunan file di `public_html/` adalah:
   - `index.html`
   - `.htaccess`
   - folder `assets/`
   *(Bukan folder `dist/` di dalam `public_html/`, melainkan isi langsung dari `dist/`)*.
6. Periksa isi file `.htaccess` di `public_html/` (pastikan fitur *Show Hidden Files* aktif di File Manager):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Tahap 6: Pasang SSL (HTTPS) Gratis

Agar fitur otentikasi login, cookie JWT, dan proteksi pendaftaran berjalan normal, HTTPS wajib aktif:
1. Di cPanel, buka menu **SSL/TLS Status**.
2. Centang domain utama `namamadrasah.sch.id` dan subdomain `api.namamadrasah.sch.id`.
3. Klik **Run AutoSSL**.
4. Tunggu beberapa menit hingga kedua domain memiliki sertifikat SSL aktif (berwarna hijau).

---

## Tahap 7: Pengujian & Verifikasi Akhir

Lakukan pengujian berikut di browser:
- [ ] Buka `https://namamadrasah.sch.id` (Halaman publik memuat logo, slider, berita, profil).
- [ ] Refresh halaman pada rute selain beranda (contoh: `/berita`, `/profil`, `/spmb/panduan`). Halaman tidak boleh menampilkan error 404 Apache.
- [ ] Buka `/spmb/daftar` dan coba buat akun pendaftar baru.
- [ ] Buka `/login` dan masuk sebagai akun Admin.
- [ ] Coba unggah berita baru atau berkas gambar di panel admin untuk memastikan folder `server/uploads/` memiliki izin tulis (permission `755`).
