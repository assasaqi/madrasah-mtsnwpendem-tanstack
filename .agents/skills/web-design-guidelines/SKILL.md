---
name: web-design-guidelines
description: >
  Tinjau kode UI untuk kepatuhan terhadap Panduan Antarmuka Web (Web Interface
  Guidelines). Gunakan saat diminta untuk "review UI saya", "cek aksesibilitas",
  "audit desain", "review UX", atau "periksa situs saya terhadap praktik terbaik".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-atau-pola>
---

# Panduan Antarmuka Web (Web Interface Guidelines)

Tinjau berkas kode untuk memastikan kesesuaian dengan Panduan Antarmuka Web.

## Cara Kerja

1. Ambil panduan terbaru dari URL sumber di bawah ini
2. Baca berkas yang ditentukan (atau minta berkas/pola dari pengguna jika belum ada)
3. Periksa kode terhadap seluruh aturan dalam panduan yang diambil
4. Sajikan temuan secara ringkas dalam format `file:baris`

## Sumber Panduan

Ambil aturan terbaru sebelum setiap sesi peninjauan:

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Gunakan WebFetch untuk mengambil aturan terbaru. Konten yang diambil mencakup semua aturan teknis dan format keluaran yang diharapkan.

## Penggunaan

Ketika pengguna memberikan argumen berupa berkas atau pola berkas:

1. Ambil panduan dari URL sumber di atas
2. Baca berkas-berkas yang ditentukan
3. Terapkan seluruh aturan dari panduan yang diambil
4. Tampilkan temuan menggunakan format yang ditentukan dalam panduan

Jika tidak ada berkas yang ditentukan, tanyakan kepada pengguna berkas mana yang ingin ditinjau.
