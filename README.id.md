# Hai — Saya Adika Rafi 👋
**Junior Full-Stack Developer** • Indonesia  
Proyek sederhana dibuat dari hati — membangun pengalaman web yang bersih dan berguna dengan Next.js, TypeScript, Tailwind, dan backend sederhana.

---

[![GitHub followers](https://img.shields.io/github/followers/AdikaRafi?label=Follow&style=social)](https://github.com/AdikaRafi)  
---

## Tentang Saya
Saya membangun aplikasi web yang sederhana, cepat, dan mudah dipelihara dengan fokus pada ergonomi pengembang, aksesibilitas, dan solusi pragmatis. Saya suka mengubah ide kecil menjadi proyek yang rapi dan terus belajar alat baru.

- 🔭 Proyek sekarang: NewsSimpleWebsite — situs berita ringan dibuat dengan Next.js & Tailwind  
- 🌱 Sedang mempelajari: pola TypeScript modern, integrasi backend dengan Python & MySQL  
- ⚡ Pendekatan: proyek dari hati — praktis, dapat diuji, dan aksesibel

---

## Teknologi
- Frontend: Next.js, React, Tailwind CSS, TypeScript, JavaScript  
- Backend & Data: Next JS 
- Tooling & Deploy: Git, Vercel / Netlify, ESLint, Prettier

---

## Proyek Unggulan

| Proyek | Deskripsi singkat | Repo / Demo | Screenshot |
|---|---|---:|---:|
| NewsSimpleWebsite | Simple news website focused on speed and readability. Built with Next.js + Tailwind + TypeScript. | https://github.com/AdikaRafi/NewsSimpleWebsite | ![news-home](./screenshot/lm1.png) <br> ![news-article](./screenshot/lm2.png) <br> ![news-home](./screenshot/dm1.png) <br> ![news-article](./screenshot/dm2.png) |
Catatan:
- Upload screenshot Anda ke folder repo: `/screenshot/` (sesuai folder yang ada). Gunakan nama file deskriptif seperti `news-home.png` dan `news-article.png`.
- Ganti placeholder sertifikat Dicoding di atas dengan URL sertifikat yang sebenarnya.

---

## Cara menjalankan & konfigurasi API key

Prasyarat:
- Node.js 18+ (atau versi LTS yang kompatibel)
- npm atau pnpm
- API key untuk penyedia berita yang dipakai (mis. [NewsData](https://newsdata.io/))

Langkah:
1. Clone repo  
   git clone https://github.com/AdikaRafi/NewsSimpleWebsite.git  
   cd NewsSimpleWebsite
2. Install dependensi  
   npm install
3. Buat file environment  
   Salin .env.example menjadi .env.local (atau buat `.env.local`)
4. Konfigurasi variabel environment (contoh)
   ```
   NEWSIO_APIKEY=your_news_api_key_here
   ```
   - Jangan commit kunci rahasia. Gunakan secrets manager di produksi.
5. Jalankan dev server  
   npm run dev  
   Buka http://localhost:3000
6. Build produksi  
   npm run build  
   npm run start (atau deploy ke Vercel/Netlify)

Konfigurasi API keys:
- Jika menggunakan  [NewsData](https://newsdata.io/):
  - Daftar dan dapatkan API key.
  - Letakkan key pada `NEWSIO_APIKEY` (jika digunakan di client) atau sebagai secret server-side.
- Untuk melindungi kunci, lebih baik panggil API dari server (API routes) dan simpan kunci sebagai server-only env var.

---

## Kontak
- Email: adikarafi2605@gmail.com  
- GitHub: https://github.com/AdikaRafi  
- Lokasi: Indonesia

Terbuka untuk:
- Open to freelance  
- Open to collaborate
