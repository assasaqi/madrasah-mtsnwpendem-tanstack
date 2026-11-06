# caveman

Bicara seperti manusia purba pintar. Otak yang sama, token lebih hemat.

## Apa fungsinya

Membuat model menjawab langsung di awal dan membuang basa-basi: tanpa salam, tanpa keraguan, tanpa kata pengisi, tanpa rekap, dan tanpa penutup klise. Kata-kata yang tidak perlu dihilangkan selama kalimat tetap terbaca dalam sekali lewat. Kode, perintah terminal, path direktori, angka, dan pesan error persis tidak pernah diubah.

Hasil bervariasi bergantung pada model dan beban kerja. Diuji pada teks skill 3.1.0 (`evals/snapshots/results.json`: claude-opus-5-5, sepuluh prompt, eksekusi tunggal, panjang output saja, perkiraan tiktoken o200k): mode caveman menghasilkan 3% lebih sedikit token output pada nilai median dibandingkan kontrol `Answer concisely.`, dalam rentang noise; ultracave 35%; megacave 9%. Tidak ada klaim kesetaraan kualitas yang dipublikasikan. Mode bertahan sampai diubah atau dihentikan.

Caveman adalah salah satu dari tiga skill bersaudara:

| Skill       | Perintah     | Apa perubahannya                                                                      |
| ----------- | ------------ | ------------------------------------------------------------------------------------- |
| `caveman`   | `/caveman`   | Gaya bicara utama. Default. Jawab dulu, basa-basi hilang, semua fakta teknis terjaga. |
| `ultracave` | `/ultracave` | Tata bahasa dipangkas. Fragmen kalimat, satu kata jika cukup, setiap fakta satu kali. |
| `megacave`  | `/megacave`  | Bahasa Tionghoa Klasik (文言文). Karakter jauh lebih sedikit, istilah teknis verbatim.|

`/caveman ultra` dan `/caveman wenyan` tetap berfungsi sebagai alias.

Klarifikasi otomatis: setiap skill beralih ke prosa normal untuk peringatan keamanan, konfirmasi tindakan yang tidak dapat dibatalkan, urutan langkah berisiko salah tafsir, dan pengguna yang mengulang pertanyaan. Kembali ke gaya ringkas setelah bagian penting selesai.

## Cara memanggil

```bash
/caveman              # gaya bicara utama (default)
/caveman status       # lihat mode saat ini tanpa mengubahnya
/ultracave            # tata bahasa dipangkas ekstrem
/megacave             # bahasa Tionghoa klasik
stop caveman          # kembali ke gaya bicara normal
```

Claude Code dan plugin OpenCode mandiri membaca status mode yang tersimpan. Lingkungan lain menjawab langsung dari konteks percakapan dan menandainya dengan `(not tracked by this host)`.

Ingin sesi Claude Code selalu mulai dengan gaya normal? Atur `{"defaultMode":"manual"}` di file `.caveman.json` untuk satu proyek atau di `~/.config/caveman/config.json` untuk pengguna Anda. Anda juga bisa mengatur variabel lingkungan `CAVEMAN_DEFAULT_MODE=manual`. Setelah itu, `/caveman` mengaktifkan gaya suara ini dan `/ultracave` memilih ultracave. Perintah berhenti tetap bertahan meski ada pemadatan konteks (*compaction*); sesi baru akan mulai dalam kondisi mati. Kebijakan startup ini khusus Claude Code: OpenCode tetap menggunakan default caveman karena penginstalnya juga menyediakan aturan aktivasi statis.

## Contoh keluaran

Pertanyaan: "Kenapa komponen React saya me-render ulang?"

Prosa normal:
> Komponen Anda me-render ulang karena Anda membuat referensi objek baru di setiap proses render. Membungkusnya dengan `useMemo` akan mengatasi masalah ini.

caveman:
> Referensi objek baru setiap render, jadi React render ulang. Bungkus prop pakai `useMemo`.

ultracave:
> Prop objek inline, referensi baru, re-render. `useMemo`.

megacave:
> 每繪新生對象參照，故重繪；以 `useMemo` 包之則免。

## Lihat juga

- [`SKILL.md`](./SKILL.md): instruksi lengkap untuk LLM
- [`../ultracave/`](../ultracave/) dan [`../megacave/`](../megacave/): skill terkait
- [Caveman README](../../README.md): ringkasan repositori, instalasi, dan tolak ukur
