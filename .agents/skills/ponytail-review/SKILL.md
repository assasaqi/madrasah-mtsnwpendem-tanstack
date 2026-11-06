---
name: ponytail-review
description: >
  Tinjauan kualitas (*code review*) sebuah perubahan: apakah logikanya benar,
  apakah aman, apakah kuat di bawah beban nyata, apakah kode berisiko diuji,
  apakah cukup cepat, dan apakah setiap baris benar-benar diperlukan. Membaca
  kode yang terhubung, bukan hanya diff. Setiap temuan dijelaskan dengan bahasa
  yang lugas dan mudah dipahami. Gunakan untuk "review this", "code review",
  "review commit terakhir", "review PR saya", "apakah ini over-engineered",
  /ponytail-review.
---

Tinjau sebuah perubahan kode layaknya pengembang senior yang akan dihubungi (*on-call*) saat sistem mengalami gangguan.
Urutan prioritas: benar, aman, tahan beban, teruji, cepat, ramping (*lean*).
Kode yang ramping tetap penting: setiap baris tambahan harus dibaca, diuji, dan diperbaiki di masa mendatang.
Ini adalah laporan yang diminta pengguna, jadi berikan secara lengkap.

## 1. Pahami terlebih dahulu

- Tinjau apa yang disebutkan pengguna: perubahan yang belum di-commit atau ada di staging, cabang (*branch*), tautan PR, atau file tertentu. Jika tidak ada yang disebutkan: perubahan yang belum di-commit, atau commit terakhir jika tidak ada perubahan tertunda.
- Baca perbedaannya (*diff*), lalu baca kode yang disentuhnya: pemanggil dari setiap fungsi yang diubah, fungsi-fungsi yang dipanggilnya, unit test, dan README.
- Telusuri alur data yang sebenarnya: dari mana data masuk, apa yang disimpan, apa yang dikeluarkan.
- Sebuah perubahan dapat merusak kode yang tidak disentuhnya secara langsung. Saat tanda tangan fungsi (*signature*), nilai kembalian, atau perilakunya berubah, telusuri semua pemanggilnya dengan grep.
- Temukan perkiraan beban sistem di repositori (README, konfigurasi deployment): satu orang yang menjalankan skrip, atau banyak pengguna dan proses bersamaan. Nilai skalabilitas berdasarkan hal itu, dan sebutkan asumsi beban yang Anda gunakan.

## 2. Hal yang dicari

1. **Bug:** hasil yang salah, *crash*, kasus ekstrem terlewat (kosong, nol, elemen terakhir, pembulatan, zona waktu), pemanggil yang rusak akibat perubahan, atau perbaikan yang hanya diterapkan pada satu pemanggil sementara fungsi bersamanya tetap rusak.
2. **Risiko Keamanan & Data:** celah keamanan (injeksi, keacakan lemah, *secret*/kredensial di kode, kurangnya validasi input pengguna), kehilangan data (galat yang diabaikan/ditelan diam-diam, operasi tulis dengan urutan yang salah, ketiadaan transaksi basis data).
3. **Skala Beban:** aman untuk satu pengguna tetapi bermasalah untuk banyak pengguna: *race condition* cek-lalu-tulis (*check-then-write*), pekerjaan identik yang dijalankan oleh setiap proses, memori atau daftar yang terus membengkak tanpa batas, query basis data per item (masalah N+1), atau *state* per proses yang seharusnya dibagikan.
4. **Kurang Pengujian (*Missing test*):** logika baru yang berisiko (percabangan, parser, modul keuangan, keamanan, penulisan data, perbaikan bug) tanpa pengujian yang gagal saat kode tersebut rusak. Cukup satu pengujian yang bermutu, bukan mengejar persentase *coverage*.
5. **Kecepatan:** perlambatan drastis adalah masalah nyata. Efisiensi kecil (operasi berulang dalam loop panas) adalah saran opsional; beberapa perangkat lunak memang menghitung setiap milidetik.
6. **Ramping (*Lean*):** kode yang seharusnya tidak ada atau bisa dibuat lebih kecil.
   - **Hapus (delete):** kode mati, opsi yang tidak dipakai, fitur spekulatif.
   - **Gunakan ulang (reuse):** repositori sudah memiliki fungsi pembantu ini (sebutkan jalurnya).
   - **Stdlib / Bawaan:** pustaka standar atau platform sudah menyediakannya; hindari dependensi baru hanya untuk beberapa baris kode.
   - **YAGNI:** abstraksi dengan satu implementasi saja, konfigurasi yang tidak pernah diubah siapa pun.
   - **Gabung (merge):** kode yang hampir identik dan selalu harus diubah bersamaan.
   - **Pisah (split):** satu fungsi yang melakukan beberapa tugas yang tidak saling terkait sehingga sulit dibaca atau diuji. Pisahkan berdasarkan tugasnya, jangan pernah memisahkan hanya karena batasan jumlah baris, dan jangan membuat fungsi pembantu yang tujuannya hanya memperpendek fungsi utama.

## 3. Periksa sebelum melapor

- Setiap temuan harus memiliki skenario konkret: "input atau situasi ini menghasilkan hasil keliru ini". Tanpa skenario nyata, jangan dijadikan temuan.
- Baca ulang baris kodenya dan pastikan: pemanggilnya memang ada, nilainya memang bisa kosong, kodenya memang terbukti tidak terpakai.
- Solusi pintas yang ditandai dengan komentar `shortcut:` (atau `ponytail:`) yang menyebutkan batasannya adalah sebuah keputusan sadar, bukan temuan masalah, kecuali beban nyata yang diharapkan sudah melampaui batas tersebut.
- Usulkan perbaikan terkecil yang berhasil. Utamakan perbaikan yang menghapus kode. Jangan pernah menambah lapisan abstraksi, framework, atau konfigurasi yang tidak dibutuhkan masalah tersebut.
- Tanpa kritik selera gaya bahasa, tanpa kata "pertimbangkan untuk...", tanpa kekhawatiran yang tidak berdasar.

## 4. Format Laporan

Gunakan bahasa Indonesia yang sangat lugas: kalimat-kalimat pendek dan kata-kata sehari-hari. Jelaskan istilah teknis saat pertama kali digunakan. Pembaca mungkin belum pernah melihat kode ini sebelumnya.

Awali dengan `Apa yang dilakukan perubahan ini:` dalam dua atau tiga kalimat.

Kemudian sampaikan temuan dalam tiga kelompok (lewati kelompok yang kosong):

- **Wajib diperbaiki (Must fix):** bug, celah keamanan, kehilangan data, rusak pada perkiraan beban normal.
- **Sebaiknya diperbaiki (Should fix):** kode berisiko tanpa pengujian, kelambatan nyata, duplikasi, fungsi yang mencampuradukkan tanggung jawab, kode yang tidak perlu ada.
- **Bagus jika ada (Nice to have):** percepatan kecil, penulisan kode yang lebih ringkas.

Beri nomor temuan secara berurutan di seluruh kelompok agar pengguna dapat merespons dengan mudah, misalnya: "perbaiki nomor 2 dan 5".
Setiap temuan harus memiliki keempat bagian berikut, masing-masing dalam satu atau dua kalimat ringkas:

2. **Pesanan tercatat pada tanggal yang salah** (`billing/close_day.py:L40-52`)
   - **Bagian apa ini:** Pada tengah malam, tugas terjadwal ini menutup hari dan menagih semua pesanan pada hari tersebut.
   - **Masalah:** Waktu "hari ini" diambil dari jam server yang menggunakan UTC. Pesanan yang dibuat pukul 00.30 di Jakarta akan ditagih pada hari sebelumnya.
   - **Solusi:** Hitung tanggal sekali menggunakan zona waktu operasional toko:
     `datetime.now(ZoneInfo("Asia/Jakarta")).date()`. Cukup satu baris, tidak ada yang perlu diubah selain itu.
   - **Dampak jika dilewati:** Pesanan larut malam menampilkan tanggal keliru, dan tim akuntansi harus memperbaikinya secara manual.

Akhiri dengan:

- `Keputusan: Siap rilis (Ship).` atau `Keputusan: Perbaiki nomor 1 dan 3 terlebih dahulu.`
- `Potensi perampingan: Mengurangi <N> baris.` jika ada temuan kategori perampingan.
- `Belum diperiksa:` satu baris, jika ada hal penting yang tidak dapat Anda periksa atau verifikasi.

Jika tidak ada masalah yang ditemukan: `Apa yang dilakukan perubahan ini:`, diikuti `Kondisi baik. Siap rilis (Ship).` dan satu baris tentang apa saja yang telah Anda periksa.

Laporan ini hanya memaparkan temuan dan tidak mengubah kode secara sepihak.
