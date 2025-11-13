import Link from 'next/link';
import { Users, Palette, Layers } from 'lucide-react';

const profileSections = [
  {
    title: 'Tim Kami',
    description: 'Bertemu dengan tim kreatif dan profesional kami',
    href: '/profil/tim',
    icon: Users,
    bg: '/tim.jpg', // simpan di /public/images/...
  },
  {
    title: 'Identitas Visual',
    description: 'Logo, palet warna, dan guidelines branding kami',
    href: '/profil/identitas',
    icon: Palette,
    bg: '/logo.png',
  },
  {
    title: 'Struktur Organisasi',
    description: 'Organisasi dan departemen di ahmat-studio',
    href: '/profil/organisasi',
    icon: Layers,
    bg: '/team.png',
  },
];

export default function ProfilPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Profil EcoScent</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Pelajari lebih lanjut tentang EcoScent, tim kami, dan nilai-nilai yang kami jaga dalam setiap produk yang kami ciptakan.</p>
        </div>

        {/* 3 Card Profil */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profileSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.title} href={section.href}>
                <div
                  className="relative group rounded-lg border border-border overflow-hidden cursor-pointer h-full smooth-transition"
                  style={{
                    backgroundImage: `url(${section.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay supaya teks tetap terbaca */}
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 smooth-transition" />

                  {/* Konten card */}
                  <div className="relative z-10 p-8 flex flex-col">
                    <Icon size={40} className="text-white mb-4 group-hover:scale-110 smooth-transition" />
                    <h3 className="text-2xl font-bold mb-3 text-white">{section.title}</h3>
                    <p className="text-gray-200">{section.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Tentang EcoScent */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-card rounded-lg p-12 border border-border">
          <div>
            <h2 className="text-4xl font-bold mb-6">Tentang EcoScent: Keharuman Alami, Kelestarian Nyata</h2>

            <p className="text-muted-foreground mb-4 leading-relaxed font-poppins">
              EcoScent adalah brand reed diffuser ramah lingkungan yang menghadirkan keharuman alami melalui minyak nilam asli Lampung dan stik diffuser dari limbah rotan. Produk kami dirancang untuk memberikan aroma yang menenangkan
              sekaligus menjaga kelestarian bumi. Dengan EcoScent, keharuman menjadi pengalaman yang sehat, alami, dan penuh makna.
            </p>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              EcoScent hadir sebagai harmoni antara keindahan aroma dan tanggung jawab terhadap lingkungan. Setiap varian dikembangkan dengan memperhatikan kualitas bahan, keamanan penggunaan di dalam ruangan, serta dampaknya terhadap
              ekosistem.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Tim kami terdiri dari peracik aroma, desainer produk, dan kreator yang berdedikasi menciptakan pengalaman wangi terbaik. Dengan kombinasi kreativitas dan komitmen terhadap kelestarian bumi, setiap botol EcoScent dibuat dengan
              penuh perhatian dan standar kualitas yang tinggi.
            </p>
          </div>

          <div className="relative">
            <img src="/umum-profil.jpg" alt="Tim EcoScent" className="w-full rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
