---
name: ponytail-audit
description: >
  Audit kualitas untuk seluruh repositori: bug, celah keamanan, apa yang rusak
  di bawah beban nyata, kode berisiko tanpa pengujian, jalur yang lambat, serta
  apa yang perlu dihapus, digabung, atau dipisah. Berperingkat, setiap temuan
  dijelaskan dengan bahasa yang lugas dan mudah dipahami. Laporan langsung sekali
  jalan, tidak mengubah kode apa pun. Gunakan untuk "audit this codebase",
  "review seluruh repo", "cari bloat", "apa yang bisa dihapus", /ponytail-audit.
---

Audit seluruh repositori layaknya pengembang senior yang baru mewarisi proyek ini dan akan dihubungi (*on-call*) saat terjadi insiden.
Urutan prioritas: benar, aman, tahan beban, teruji, cepat, ramping (*lean*).
Kode yang ramping tetap penting: setiap baris tambahan harus dibaca, diuji, dan dirawat di kemudian hari.
Ini adalah laporan komprehensif yang diminta pengguna, jadi berikan secara lengkap.

## 1. Petakan terlebih dahulu

- Audit apa yang ditentukan pengguna: sebuah folder, sebuah paket, atau seluruh repositori. Jika tidak ada yang disebutkan: seluruh repositori.
- Baca README, konfigurasi deployment dan build, daftar dependensi, titik masuk aplikasi (*entry points*: main, rute, pengendali/handlers, antrean kerja/jobs, perintah CLI), serta unit/e2e test.
- Temukan perkiraan beban sistem: satu orang yang menjalankan skrip, atau banyak pengguna dan proses yang berjalan bersamaan. Nilai skalabilitas berdasarkan hal itu, dan sebutkan asumsi beban yang Anda gunakan.
- Telusuri alur utama dari ujung ke ujung: dari mana data masuk, apa yang disimpan, dan apa yang dikirim ke luar. Baca jalur-jalur kritis tersebut secara menyeluruh: input dari pengguna, alur pembayaran/uang, autentikasi, operasi penulisan data, latar belakang (*background jobs*), dan apa pun yang dibagikan antar-proses.
- Untuk repositori besar: lakukan pendalaman pada bagian di mana kesalahan akan berdampak paling fatal, jangan membaca file per file tanpa arah. Sebutkan secara jujur bagian mana saja yang tidak Anda baca.

## 2. Hal yang dicari

1. **Bug:** hasil yang salah, sistem mati mendadak (*crash*), kasus ekstrem terlewat (kosong, nol, item terakhir, pembulatan, zona waktu), pemanggil fungsi yang tidak sesuai dengan tipe kembalian, atau aturan bisnis yang sama diterapkan secara berbeda di dua tempat.
2. **Risiko Keamanan & Data:** celah keamanan (injeksi SQL/perintah, keacakan kriptografi lemah, kredensial rahasia di dalam kode, tidak adanya validasi input pengguna), kehilangan data (galat yang ditelan diam-diam, urutan penulisan yang salah, transaksi database yang terlewat).
3. **Skala Beban:** aman untuk satu pengguna tetapi rusak saat digunakan banyak orang: *race condition* periksa-lalu-tulis (*check-then-write*), pekerjaan identik yang dieksekusi berulang oleh setiap proses latar belakang, konsumsi memori atau ukuran list yang terus bertambah tanpa batas, masalah query per item (N+1 query), atau *state* per proses yang seharusnya tersinkronisasi.
4. **Kurang Pengujian (*Missing test*):** logika berisiko (percabangan kompleks, parser, modul keuangan, keamanan, penulisan data) tanpa pengujian yang gagal saat kode tersebut tidak berfungsi. Cukup satu pengujian berkualitas tinggi yang menguji skenario nyata, bukan mengejar metrik *coverage*.
5. **Kecepatan:** penurunan performa yang signifikan adalah masalah nyata. Efisiensi mikro (operasi berulang dalam loop kritis) adalah saran opsional; hanya beberapa sistem khusus yang menghitung setiap milidetik.
6. **Ramping (*Lean*):** kode yang seharusnya tidak ada atau bisa diperkecil.
   - **Hapus (delete):** kode mati, opsi yang tidak terpakai, flag dan konfigurasi tak bertuan, fitur spekulatif.
   - **Gunakan ulang (reuse):** dua fungsi pembantu melakukan hal yang persis sama (pertahankan satu, sebutkan jalurnya).
   - **Stdlib / Bawaan:** pustaka standar atau fitur bawaan platform sudah menyediakannya; hindari dependensi pihak ketiga untuk tugas yang bisa diselesaikan beberapa baris kode bawaan.
   - **YAGNI:** *interface* dengan hanya satu implementasi, *factory* dengan hanya satu produk, *wrapper* yang hanya meneruskan pemanggilan fungsi tanpa nilai tambah.
   - **Gabung (merge):** salinan kode yang hampir serupa dan harus selalu diubah bersamaan.
   - **Pisah (split):** satu fungsi atau kelas yang melakukan beberapa tugas yang tidak saling berhubungan sehingga sulit dipahami atau diuji. Pisahkan berdasarkan tanggung jawabnya, jangan pernah memisahkan hanya demi mengejar batas jumlah baris kode, dan jangan membuat fungsi bantuan yang hanya bertujuan memangkas panjang fungsi utama.

## 3. Periksa sebelum melapor

- Setiap temuan harus memiliki kasus nyata: "input atau kondisi ini menghasilkan dampak buruk ini". Tanpa contoh konkret, jangan jadikan temuan.
- Sebelum mengklaim suatu kode tidak terpakai, cari ke seluruh repositori dengan grep, termasuk di dalam pengujian, fixtures, file konfigurasi, serta referensi string/dinamis.
- Solusi pintas yang ditandai dengan komentar `shortcut:` (atau `ponytail:`) yang menyebutkan batasannya adalah sebuah keputusan arsitektural yang disengaja, bukan masalah, kecuali beban operasional saat ini sudah melampaui batasan tersebut.
- Ajukan perbaikan terkecil yang terbukti bekerja. Utamakan solusi yang membuang kode berlebih. Jangan pernah menyarankan penambahan lapisan, kerangka kerja, atau konfigurasi rumit yang tidak dibutuhkan masalah.
- Hindari perdebatan selera gaya penulisan (*style taste*), hindari kata "pertimbangkan untuk...", dan hindari kekhawatiran yang tidak memiliki dasar teknis.

## 4. Format Laporan

Gunakan bahasa Indonesia yang sangat lugas: kalimat pendek dan kata-kata yang mudah dimengerti. Jelaskan istilah teknis saat pertama kali digunakan. Pembaca laporan Anda mungkin baru pertama kali melihat repositori ini.

Awali dengan `Apa yang dilakukan repositori ini:` dalam dua atau tiga kalimat, beserta asumsi beban sistem yang Anda gunakan.

Kemudian paparkan temuan dalam tiga kelompok, urutkan dari yang paling krusial, dan lewati kelompok yang kosong:

- **Wajib diperbaiki (Must fix):** bug, celah keamanan, risiko kehilangan data, kegagalan pada beban kerja normal.
- **Sebaiknya diperbaiki (Should fix):** kode berisiko tanpa pengujian, kelambatan nyata, duplikasi, fungsi dengan tanggung jawab ganda, kode yang seharusnya tidak ada.
- **Bagus jika ada (Nice to have):** optimasi kecepatan kecil, penyederhanaan bentuk penulisan kode.

Beri nomor temuan secara berurutan di seluruh kelompok agar pengguna dapat merujuk dengan mudah, misalnya "perbaiki nomor 2 dan 5". Maksimal 20 temuan; jika ada temuan kecil yang sengaja tidak dimasukkan, sebutkan jumlahnya.
Setiap temuan harus memiliki keempat elemen berikut, masing-masing dalam satu atau dua kalimat ringkas:

2. **Pesanan tercatat pada tanggal yang salah** (`billing/close_day.py:L40-52`)
   - **Bagian apa ini:** Pada tengah malam, tugas terjadwal ini menutup hari dan menagih semua pesanan pada hari tersebut.
   - **Masalah:** Waktu "hari ini" diambil dari jam server yang berjalan di UTC. Pesanan yang dibuat pukul 00.30 di Jakarta akan ditagih pada hari sebelumnya.
   - **Solusi:** Hitung tanggal sekali menggunakan zona waktu operasional toko:
     `datetime.now(ZoneInfo("Asia/Jakarta")).date()`. Cukup satu baris, tidak ada hal lain yang perlu diubah.
   - **Dampak jika dilewati:** Pesanan larut malam menampilkan tanggal keliru, dan tim akuntansi harus memperbaikinya secara manual.

Akhiri dengan:

- `Keputusan:` satu baris ringkas: kondisi sehat, atau bagian mana yang harus diperbaiki terlebih dahulu.
- `Potensi perampingan: Mengurangi <N> baris, mengurangi <M> dependensi.` jika ditemukan kode berlebih.
- `Belum diperiksa:` bagian-bagian kode yang tidak Anda baca atau tidak dapat Anda jalankan.

Jika tidak ada masalah yang ditemukan: `Apa yang dilakukan repositori ini:`, diikuti `Sehat. Tidak ada masalah mendesak untuk diperbaiki.` dan satu baris tentang apa saja yang telah Anda periksa.

Laporan ini bersifat evaluatif sekali jalan dan tidak melakukan perubahan kode langsung.
