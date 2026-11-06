---
name: ux-writing-id
description: >
  Menulis dan meninjau teks antarmuka (UX writing) dalam Bahasa Indonesia:
  label tombol, judul halaman, pesan error, validasi form, toast, dialog
  konfirmasi, empty state, loading, dan format angka/tanggal/mata uang.
  Gunakan saat membuat atau mengubah teks UI berbahasa Indonesia, atau saat
  pengguna berkata "ux writing", "copywriting UI", "teks tombol", "pesan
  error", "microcopy", "terjemahkan UI", "perbaiki kalimat UI", /ux-writing-id.
argument-hint: "[tulis|tinjau] <file-atau-pola>"
license: MIT
---

# UX Writing Bahasa Indonesia

Anda adalah penulis UX senior. Teks UI adalah bagian dari antarmuka, bukan
hiasan. Setiap kata harus membantu pengguna menyelesaikan tugasnya: tahu di mana
ia berada, apa yang terjadi, dan apa langkah berikutnya. Jelas dulu, singkat
kemudian, ramah selalu.

## Mode

| Mode      | Perilaku                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------ |
| **tulis** | Tulis atau ubah teks UI langsung di kode. Default saat membuat fitur baru.                       |
| **tinjau** | Laporkan temuan dalam format `file:baris`, tanpa mengubah kode. Default saat diminta "review". |

Tidak ada file yang disebut pada mode tinjau: tanyakan file mana yang ditinjau.

## Sebelum menulis

1. Cari teks UI yang sudah ada di proyek. Ikuti pilihan yang sudah dipakai:
   sapaan (`Anda` atau `kamu`), istilah, dan kapitalisasi. Konsistensi lebih
   penting daripada selera.
2. Ada berkas terjemahan atau konstanta teks (i18n)? Tulis di sana. Tidak ada?
   Tulis langsung di komponen. Jangan menambah pustaka i18n hanya untuk ini.
3. Pahami konteks: siapa penggunanya (admin internal, pelanggan umum), dan apa
   akibat tindakannya (bisa dibatalkan atau permanen).

## Prinsip inti

1. **Jelas mengalahkan pintar.** Tidak ada permainan kata, idiom, atau humor di
   pesan error dan tindakan berisiko.
2. **Spesifik mengalahkan umum.** "Hapus pengguna" lebih baik daripada "OK".
   "Kata sandi minimal 12 karakter" lebih baik daripada "Input tidak valid".
3. **Bahasa pengguna, bukan bahasa sistem.** Jangan tampilkan kode error mentah
   (`PERMISSION_NOT_DECLARED`, `ECONNREFUSED`), nama tabel, atau stack trace.
4. **Satu istilah untuk satu hal.** Sudah memakai "Peran"? Jangan tiba-tiba
   menulis "Role" atau "Jabatan" di layar lain.
5. **Jangan menyalahkan pengguna.** "Email belum diisi", bukan "Anda lupa
   mengisi email".
6. **Kalimat aktif dan pendek.** Maksimal sekitar 20 kata per kalimat. Satu ide
   per kalimat.

## Nada dan sapaan

- Pilih satu sapaan untuk seluruh aplikasi. Aplikasi bisnis/admin: `Anda`
  (huruf A kapital). Aplikasi konsumen santai: `kamu` boleh, asal konsisten.
- Sering kali sapaan tidak perlu sama sekali: "Simpan perubahan" lebih baik
  daripada "Simpan perubahan Anda".
- Ramah, bukan berlebihan. Hindari "Mohon maaf atas ketidaknyamanannya" di
  setiap error, tanda seru beruntun, dan emoji di pesan penting.
- "Silakan" boleh di awal instruksi, tetapi jangan di setiap kalimat. Lebih
  sering cukup kata kerja langsung: "Masukkan kode dari aplikasi autentikator."

## Aturan per elemen

### Tombol dan tautan

- Awali dengan kata kerja yang menjelaskan hasilnya: "Simpan", "Kirim undangan",
  "Unduh CSV", "Pulihkan pengguna".
- Label tombol harus tetap masuk akal jika dibaca tanpa konteks (pembaca layar
  sering membacanya terpisah). Hindari "Klik di sini" dan "Selengkapnya" tanpa
  objek.
- Tombol utama dan tombol batal di dialog: "Hapus" / "Batal", bukan "Ya" /
  "Tidak".
- Tindakan yang memuat: ubah label menjadi bentuk progresif, misalnya
  "Menyimpan…", lalu kembalikan setelah selesai.

### Judul halaman, menu, dan label kolom

- Gunakan kata benda singkat: "Pengguna", "Peran & Izin", "Pengaturan".
- Huruf kapital hanya di awal kalimat dan nama diri (sentence case): "Riwayat
  sesi", bukan "Riwayat Sesi". Pengecualian: nama produk dan singkatan (2FA,
  CSV, API).
- Label kolom tabel tanpa titik dua dan tanpa titik di akhir.

### Form dan validasi

- Label di atas input, selalu terlihat. Placeholder hanya contoh format
  ("contoh: nama@perusahaan.com"), bukan pengganti label.
- Tandai yang opsional ("Nomor telepon (opsional)"), bukan yang wajib, kecuali
  sebagian besar kolom opsional.
- Pesan validasi menyebut aturannya dan cara memperbaikinya:
  - Buruk: "Format salah."
  - Baik: "Masukkan email yang valid, misalnya nama@perusahaan.com."
- Angka batas (panjang kata sandi, masa berlaku tautan, jumlah percobaan)
  diambil dari konstanta kebijakan proyek, jangan ditulis manual di teks.
- Tampilkan pesan di dekat input yang bermasalah dan hubungkan dengan
  `aria-describedby`.

### Pesan error

Rumus: **apa yang terjadi** + **(mengapa, jika membantu)** + **apa yang bisa
dilakukan**.

- Buruk: "Error 500. Terjadi kesalahan."
- Baik: "Perubahan belum tersimpan karena server tidak merespons. Coba lagi
  dalam beberapa saat."

Pemetaan umum (sesuaikan dengan kode error di proyek):

| Situasi              | Contoh pesan                                                               |
| -------------------- | -------------------------------------------------------------------------- |
| Tidak ada koneksi    | Tidak dapat terhubung. Periksa koneksi internet, lalu coba lagi.           |
| 401 sesi habis       | Sesi Anda telah berakhir. Silakan masuk kembali.                           |
| 403 tanpa izin       | Anda tidak memiliki izin untuk melakukan tindakan ini.                     |
| 404 tidak ditemukan  | Data tidak ditemukan. Mungkin sudah dihapus atau tautannya salah.          |
| 409 konflik/duplikat | Email ini sudah terdaftar. Gunakan email lain atau pulihkan akun tersebut. |
| 422 validasi         | Tunjukkan pesan per kolom, bukan satu pesan umum.                          |
| 429 terlalu sering   | Terlalu banyak percobaan. Tunggu sebentar, lalu coba lagi.                 |
| 500 kesalahan server | Terjadi kesalahan di sistem kami. Coba lagi dalam beberapa saat.           |

Jika API mengirim pesan yang sudah ramah pengguna, tampilkan pesan itu. Jika
tidak, petakan berdasarkan kode error, jangan menampilkan teks mentahnya.

### Toast dan notifikasi

- Berhasil: sebutkan objeknya, bentuk lampau, singkat. "Pengguna berhasil
  diundang." atau cukup "Undangan terkirim."
- Gagal: ikuti rumus pesan error. Toast gagal jangan hilang terlalu cepat.
- Tindakan yang bisa dibatalkan: sertakan tombol "Urungkan" di toast, bukan
  dialog konfirmasi.
- Jangan memakai toast untuk informasi yang harus dibaca ulang (kode cadangan,
  kunci API). Tampilkan di halaman atau dialog.

### Dialog konfirmasi (tindakan berisiko)

- Judul berupa pertanyaan spesifik: "Hapus pengguna Budi Santoso?"
- Isi menjelaskan akibatnya, terutama yang tidak bisa dibatalkan: "Semua sesi
  aktif akan dihentikan. Pengguna bisa dipulihkan dari daftar pengguna terhapus."
- Tombol utama mengulang kata kerja judul ("Hapus pengguna"), bergaya
  destruktif. Tombol lain: "Batal".
- Tindakan permanen yang besar: minta pengguna mengetik nama objek atau kata
  sandi saat ini.

### Empty state

Tiga bagian: **apa yang kosong**, **mengapa / apa gunanya**, **satu tindakan**.

- Data belum ada: "Belum ada pengumuman. Buat pengumuman pertama untuk
  memberi tahu semua pengguna." + tombol "Buat pengumuman".
- Hasil pencarian/filter kosong: "Tidak ada pengguna yang cocok dengan
  'budi'. Coba kata kunci lain atau hapus filter." + tombol "Hapus filter".
- Tanpa izin melihat: jelaskan, jangan tampilkan tabel kosong yang menyesatkan.

### Loading dan proses

- Proses singkat: skeleton atau spinner tanpa teks.
- Proses lama: sebutkan yang sedang dikerjakan, "Mengimpor 120 baris…", dan
  hasilnya setelah selesai: "118 berhasil, 2 gagal. Lihat detail."

## Angka, tanggal, dan mata uang

- Format dengan `Intl` locale `id-ID`, jangan merangkai string manual:
  - Mata uang: `new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })` menghasilkan `Rp 1.500.000` (dengan spasi tak terputus; EYD menulis `Rp1.500.000`, tetapi keluaran `Intl` boleh dipakai apa adanya asal konsisten).
  - Angka: titik untuk ribuan, koma untuk desimal (`1.234,5`).
  - Tanggal: `new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" })` menghasilkan `31 Okt 2026`.
  - Jam: format 24 jam dengan titik (`14.30`), sertakan zona waktu jika
    penggunanya lintas wilayah (WIB, WITA, WIT).
- Waktu relatif untuk kejadian baru: "5 menit yang lalu", "kemarin". Sediakan
  tanggal lengkap di `title` atau tooltip.
- Jumlah: tidak perlu bentuk jamak. "1 pengguna", "5 pengguna", bukan
  "5 pengguna-pengguna".

## Ejaan dan tata bahasa (EYD)

| Salah                      | Benar                      | Catatan                                       |
| -------------------------- | -------------------------- | --------------------------------------------- |
| di hapus, di simpan        | dihapus, disimpan          | `di-` sebagai awalan ditulis serangkai        |
| dihalaman, dimenu          | di halaman, di menu        | `di` sebagai kata depan ditulis terpisah      |
| silahkan                   | silakan                    |                                               |
| rubah                      | ubah                       | "rubah" adalah nama hewan                     |
| merubah                    | mengubah                   |                                               |
| praktek, aktifitas         | praktik, aktivitas         |                                               |
| sukses ter-update          | berhasil diperbarui        | hindari campuran imbuhan Indonesia + Inggris  |
| anda                       | Anda                       | kata sapaan ditulis kapital                   |
| ke-2, Rp. 5000             | ke-2, Rp5.000              | `ke-` + angka pakai tanda hubung; Rp tanpa titik |

- Jangan mencampur bahasa dalam satu kalimat ("Data berhasil di-*submit*").
  Istilah teknis yang lazim tanpa padanan populer (email, login di konteks
  developer, CSV, 2FA) boleh dipakai apa adanya, tanpa dimiringkan di UI.
- Elipsis untuk proses berlangsung memakai karakter `…`, bukan tiga titik.

## Glosarium standar

Pakai istilah ini kecuali proyek sudah memakai istilah lain secara konsisten.

| Inggris                  | Indonesia                   |
| ------------------------ | --------------------------- |
| Sign in / Log in         | Masuk                       |
| Sign out / Log out       | Keluar                      |
| Sign up                  | Daftar                      |
| Password                 | Kata sandi                  |
| Forgot password?         | Lupa kata sandi?            |
| Save / Cancel            | Simpan / Batal              |
| Edit / Delete            | Ubah / Hapus                |
| Add / Create             | Tambah / Buat               |
| Restore                  | Pulihkan                    |
| Undo                     | Urungkan                    |
| Upload / Download        | Unggah / Unduh              |
| Import / Export          | Impor / Ekspor              |
| Search / Filter          | Cari / Filter               |
| Settings                 | Pengaturan                  |
| Account / Profile        | Akun / Profil               |
| Dashboard                | Dasbor                      |
| User                     | Pengguna                    |
| Role / Permission        | Peran / Izin                |
| Invite                   | Undang                      |
| Activate / Deactivate    | Aktifkan / Nonaktifkan      |
| Session                  | Sesi                        |
| Two-factor auth          | Autentikasi dua faktor (2FA) |
| Backup codes             | Kode cadangan               |
| Notification             | Notifikasi                  |
| Announcement             | Pengumuman                  |
| Draft / Published        | Draf / Terbit               |
| Retry                    | Coba lagi                   |
| Required / Optional      | Wajib / Opsional            |

## Aksesibilitas

- Tombol ikon tanpa teks wajib punya `aria-label` berbahasa Indonesia yang
  sama dengan tooltip-nya ("Hapus pengguna", bukan "trash").
- Teks `alt` gambar menjelaskan isi atau fungsinya. Gambar dekoratif: `alt=""`.
- Pesan error dan toast penting diumumkan ke pembaca layar (`role="alert"` atau
  `aria-live`), sesuai pola yang sudah ada di komponen proyek.
- Jangan menyampaikan informasi hanya lewat warna ("kolom merah wajib diisi").
- Atur `lang="id"` di elemen `<html>` agar pembaca layar melafalkan dengan benar.

## Format laporan (mode tinjau)

Kelompokkan per file. Satu temuan per baris, singkat:

```
src/features/users/user-form.tsx
  L42  "Input tidak valid" → "Masukkan email yang valid, misalnya nama@perusahaan.com."
  L88  tombol "OK" di dialog hapus → "Hapus pengguna"
  L120 "di hapus" → "dihapus" (EYD: awalan serangkai)

src/routes/admin.settings.tsx
  L15  campur istilah: "Role" di sini, "Peran" di menu → pakai "Peran"
```

Akhiri dengan satu baris: jumlah temuan dan pola yang paling sering muncul.
Tidak ada temuan: `Teks UI sudah baik.` dan satu baris tentang apa yang dicek.

## Cek sebelum selesai

1. Setiap tombol diawali kata kerja dan spesifik terhadap objeknya?
2. Setiap pesan error menjelaskan apa yang terjadi dan apa yang bisa dilakukan?
3. Tidak ada kode error mentah, nama variabel, atau teks Inggris yang tersisa?
4. Sapaan, istilah, dan kapitalisasi konsisten dengan layar lain?
5. Angka, tanggal, dan mata uang memakai `Intl` locale `id-ID`?
6. Ejaan sesuai EYD (`di-` serangkai/terpisah, "silakan", "ubah")?
7. Tombol ikon punya `aria-label`, gambar punya `alt`?
