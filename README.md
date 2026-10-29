# Madrasah MTsN Wpendem — TanStack Architecture

Aplikasi Sistem Informasi & Profil Madrasah yang telah dimigrasi ke ekosistem **TanStack** (TanStack Router & TanStack Query) dengan struktur monorepo modern yang memisahkan **client** dan **server** secara bersih.

---

## 📁 Struktur Folder & Berkas Proyek

```text
madrasah-mtsnwpendem-tanstack/
├── client/                     # Frontend SPA berbasis Vite + React 19 + TanStack
│   ├── public/                 # Aset statis client
│   ├── src/
│   │   ├── assets/             # Gambar & ikon
│   │   ├── components/         # Komponen UI modular
│   │   │   ├── admin/          # Komponen panel admin & SPMB verifikasi
│   │   │   ├── auth/           # Formulir & layout autentikasi (ProtectedRoute)
│   │   │   ├── public/         # Kartu pengumuman, berita, navbar, footer
│   │   │   ├── spmb/           # Komponen portal SPMB (sidebar, topbar, cetak surat)
│   │   │   └── ui.jsx          # Komponen primitif UI
│   │   ├── context/            # AuthContext (state sesi & manajemen akun)
│   │   ├── hooks/
│   │   │   ├── queries/        # Hook TanStack Query (sekolah, pendaftar, berita, dsb.)
│   │   │   ├── usePendaftarSPMB.js
│   │   │   └── useSchoolProfile.js
│   │   ├── layouts/            # AdminLayout, PublicLayout, SPMBLayout
│   │   ├── lib/                # Konfigurasi QueryClient & Axios API
│   │   │   ├── api.js
│   │   │   └── queryClient.js
│   │   ├── pages/              # Halaman publik, autentikasi, SPMB, dan admin
│   │   │   ├── admin/
│   │   │   ├── public/
│   │   │   ├── spmb/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── routes/             # Pohon rute terstruktur TanStack Router
│   │   │   ├── adminRoutes.jsx
│   │   │   ├── authRoutes.jsx
│   │   │   ├── index.jsx
│   │   │   ├── legacyRoutes.jsx
│   │   │   ├── publicRoutes.jsx
│   │   │   ├── rootRoute.jsx
│   │   │   └── spmbRoutes.jsx
│   │   ├── services/           # Lapisan pemanggil API REST
│   │   ├── utils/              # Helper tanggal, format angka, dan meta status
│   │   ├── App.jsx             # RouterProvider TanStack Router
│   │   ├── router.jsx          # Instansiasi createRouter TanStack
│   │   ├── index.css           # Styling Tailwind CSS
│   │   └── main.jsx            # Entrypoint dengan QueryClientProvider & AuthProvider
│   ├── package.json
│   └── vite.config.js          # Konfigurasi Vite & proxy backend
│
├── server/                     # Backend REST API berbasis Express & Prisma ORM
│   ├── prisma/
│   │   ├── schema.prisma       # Skema MariaDB/MySQL
│   │   ├── migrations/
│   │   └── seed.js             # Data master awal
│   ├── src/                    # Seluruh kode sumber backend terisolasi
│   │   ├── app.js              # Inisialisasi Express, middleware, CORS, Swagger
│   │   ├── server.js           # Server runner & port listener
│   │   ├── config/             # env.js & prisma.js
│   │   ├── controllers/        # Pengendali logika bisnis API
│   │   ├── middleware/         # Autentikasi JWT, validasi, rate limiter, upload
│   │   ├── routes/             # Definisi rute Express API
│   │   └── utils/              # AppError, catchAsync, pengaturan PPDB
│   ├── uploads/                # Direktori berkas fisik hasil unggahan
│   ├── .env                    # Variabel lingkungan server
│   ├── nodemon.json
│   ├── package.json
│   └── server.js               # Entrypoint wrapper untuk kompatibilitas
│
├── package.json                # Root package.json dengan workspace npm
└── AGENT.md                    # Standar teknis & aturan AI coding agent
```

---

## ⚡ Perintah Menjalankan Aplikasi

Aplikasi dikelola menggunakan **npm workspace** dari direktori utama (*root*):

| Perintah | Deskripsi |
|---|---|
| `npm run dev:client` | Menjalankan Vite dev server untuk client di port `5173` |
| `npm run dev:server` | Menjalankan Express dev server dengan nodemon di port `5000` |
| `npm run start:server` | Menjalankan Express server produksi |
| `npm run lint:client` | Memeriksa sintaks dan aturan linter pada client |
| `npm run prisma:generate` | Menghasilkan client Prisma ORM |
| `npm run install:all` | Memasang seluruh dependensi di semua workspace |

---

## 🚀 Fitur & Integrasi TanStack

1. **TanStack Router (`@tanstack/react-router`)**:
   - Menggantikan `react-router-dom` sepenuhnya.
   - Pohon rute terstruktur di `client/src/routes/` mencakup rute publik, autentikasi, portal SPMB, panel admin, serta penanganan rute warisan (*legacy redirects*).
   - Penjagaan hak akses peran (*Role-Based Access Control*) terpusat pada `ProtectedRoute` menggunakan komponen `Navigate` dan `Outlet`.

2. **TanStack Query (`@tanstack/react-query`)**:
   - `QueryClient` terkonfigurasi dengan caching cerdas (`staleTime: 5 menit`, `gcTime: 30 menit`, auto-invalidation pada mutasi).
   - Pengambilan data profil madrasah, pendaftar SPMB, berita, pengumuman, agenda, galeri, prestasi, unduhan, dan FAQ terintegrasi dengan TanStack Query hooks.

