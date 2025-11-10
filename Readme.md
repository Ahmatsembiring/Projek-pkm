# Website PKM

Sebuah website modern yang dibangun dengan Next.js, TypeScript, dan berbagai teknologi web terkini.

## 🚀 Teknologi yang Digunakan

* **Next.js** - Framework React untuk production
* **TypeScript** (96.0%) - Type-safe JavaScript
* **React** - Library UI
* **Tailwind CSS** - Utility-first CSS framework
* **Vercel Analytics** - Analytics tool
* **Google Fonts (Geist)** - Typography

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstall:

* **Node.js** versi 18.x atau lebih baru
* **npm** atau **yarn** atau **pnpm** sebagai package manager
* **Git** untuk version control

Cek versi Node.js Anda:

```bash
node --version
```

## 🛠️ Cara Setup dan Install

### 1. Clone Repository

```bash
git clone https://github.com/Ahmatsembiring/projek-pkm.git
cd website-pkm
```

### 2. Install Dependencies

Pilih salah satu package manager yang Anda gunakan:

**Menggunakan npm:**

```bash
npm install
```

**Menggunakan yarn:**

```bash
yarn install
```

**Menggunakan pnpm:**

```bash
pnpm install
```

### 3. Setup Environment Variables

Buat file `.env.local` di root directory:

```bash
cp .env.example .env.local
```

Kemudian isi variabel environment yang diperlukan (jika ada).

## 🚀 Cara Menjalankan Projek

### Development Mode

Untuk menjalankan projek dalam mode development:

**Menggunakan npm:**

```bash
npm run dev
```

**Menggunakan yarn:**

```bash
yarn dev
```

**Menggunakan pnpm:**

```bash
pnpm dev
```

Aplikasi akan berjalan di `http://localhost:3000`

### Build untuk Production

Untuk membuat build production:

```bash
npm run build
```

### Menjalankan Production Build

Setelah build selesai, jalankan:

```bash
npm run start
```

## 📁 Struktur Folder

```
website-pkm/
├── app/                    # App directory (Next.js 13+)
│   ├── galeri/            # Halaman galeri
│   ├── kontak/            # Halaman kontak
│   ├── portfolio/         # Halaman portfolio
│   ├── profil/            # Halaman profil
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI components
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header component
│   ├── news-card.tsx     # News card component
│   ├── project-card.tsx  # Project card component
│   └── theme-provider.tsx # Theme provider
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── node_modules/         # Dependencies
├── public/               # Static assets
├── styles/               # Global styles
├── .gitignore           # Git ignore file
├── components.json      # Components config
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration
└── tailwind.config.ts   # Tailwind configuration
```

## 🔧 Scripts yang Tersedia

* `npm run dev` - Menjalankan development server
* `npm run build` - Membuat production build
* `npm run start` - Menjalankan production server
* `npm run lint` - Menjalankan ESLint untuk cek code quality

## 🌐 Deployment

### Deploy ke Vercel (Recommended)

1. Push code Anda ke GitHub
2. Import projek di [Vercel](https://vercel.com/)
3. Vercel akan otomatis detect Next.js dan deploy

Atau gunakan Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy ke Platform Lain

Projek ini dapat di-deploy ke platform hosting lain yang support Node.js seperti:

* Netlify
* Railway
* Render
* AWS
* Digital Ocean

## 🐛 Troubleshooting

### Port sudah digunakan

Jika port 3000 sudah digunakan, Anda bisa menjalankan di port lain:

```bash
npm run dev -- -p 3001
```

### Error saat install dependencies

Coba hapus folder `node_modules` dan `package-lock.json`, lalu install ulang:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build error

Pastikan semua dependencies ter-install dengan benar dan tidak ada error pada kode TypeScript:

```bash
npm run lint
```

## 📝 Kontribusi

Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

[Tambahkan lisensi projek Anda di sini]

## 👥 Tim Pengembang

[Tambahkan informasi tim pengembang di sini]

## 📧 Kontak

Untuk pertanyaan atau saran, silakan hubungi:

* Email: [email Anda]
* Website: [website Anda]

---

Dibuat dengan ❤️ menggunakan Next.js dan TypeScript
