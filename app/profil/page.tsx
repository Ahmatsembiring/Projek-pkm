import Link from 'next/link';
import { Users, Palette, Layers } from 'lucide-react';

const profileSections = [
  {
    title: 'Tim Kami',
    href: '/profil/tim',
    icon: Users,
    bg: '/tim.JPG',
    description: 'Kenali tim kreatif di balik EcoScent',
  },
  {
    title: 'Identitas Visual',
    href: '/profil/identitas',
    icon: Palette,
    bg: '/logo.png',
    description: 'Logo, warna, dan visual brand kami',
  },
  {
    title: 'Legalitas & Sertifikasi',
    href: '/profil/legalitas',
    icon: Layers,
    bg: '/team.png',
    description: 'Dokumen resmi dan sertifikat produk',
  },
];

export default function ProfilPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Profil EcoScent</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Pelajari lebih lanjut tentang EcoScent, tim kami, dan nilai-nilai yang kami jaga dalam setiap produk yang kami ciptakan.</p>
        </div>

        {/* 3 Card Profil */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profileSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.title} href={section.href}>
                <div className="group rounded-lg border border-gray-200 overflow-hidden cursor-pointer h-full hover:shadow-xl transition-all duration-300 bg-white">
                  {/* Gambar Container - tidak terpotong */}
                  <div className="relative w-full h-48 bg-gray-50 overflow-hidden">
                    <img src={section.bg} alt={section.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Konten card - Icon & Text di tengah */}
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                        <Icon size={32} className="text-emerald-600" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-800">{section.title}</h3>

                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Tentang EcoScent - REVISI RESPONSIVITAS: Judul Tengah, Gambar, Lalu Teks (di Mobile) */}
        <div className="bg-white rounded-lg p-12 border border-gray-200 shadow-sm">
          {/* Judul Teks - Selalu di Tengah di Mobile, dan Rata Kiri di Desktop */}
          <div className={`mb-8 ${'md:text-left'} text-center`}>
            <h2 className="text-4xl font-bold">Tentang EcoScent: Keharuman Alami, Kelestarian Nyata</h2>
          </div>

          {/* Konten Utama: Menggunakan Grid untuk Desktop, menumpuk di Mobile */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* KOLOM 1: Gambar dan Teks di Mobile. Di Desktop, hanya Teks. */}
            <div className="md:order-first">
              {/* Gambar (Muncul di Mobile setelah Judul, dan menjadi Kolom Kanan di Desktop) */}
              {/* Kami menempatkan Gambar di sini, lalu menyembunyikannya di mobile, dan menampilkannya di desktop. */}
              <div className="relative md:hidden mb-8">
                <img src="/umum-profil.jpg" alt="Tim EcoScent" className="w-full rounded-lg object-cover shadow-lg" />
              </div>

              {/* Paragraf Deskripsi (Di bawah Gambar di Mobile, dan menjadi Kolom Kiri di Desktop) */}
              <p className="text-gray-600 mb-4 leading-relaxed md:text-left text-center">
                EcoScent adalah brand reed diffuser ramah lingkungan yang menghadirkan keharuman alami melalui minyak nilam asli Lampung dan stik diffuser dari limbah rotan. Produk kami dirancang untuk memberikan aroma yang menenangkan
                sekaligus menjaga kelestarian bumi. Dengan EcoScent, keharuman menjadi pengalaman yang sehat, alami, dan penuh makna.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed md:text-left text-center">
                EcoScent hadir sebagai harmoni antara keindahan aroma dan tanggung jawab terhadap lingkungan. Setiap varian dikembangkan dengan memperhatikan kualitas bahan, keamanan penggunaan di dalam ruangan, serta dampaknya terhadap
                ekosistem.
              </p>

              <p className="text-gray-600 leading-relaxed md:text-left text-center">
                Tim kami terdiri dari peracik aroma, desainer produk, dan kreator yang berdedikasi menciptakan pengalaman wangi terbaik. Dengan kombinasi kreativitas dan komitmen terhadap kelestarian bumi, setiap botol EcoScent dibuat
                dengan penuh perhatian dan standar kualitas yang tinggi.
              </p>
            </div>

            {/* KOLOM 2: Gambar Khusus Desktop */}
            <div className="md:order-last hidden md:block">
              <div className="relative">
                <img src="/umum-profil.jpg" alt="Tim EcoScent" className="w-full rounded-lg object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
