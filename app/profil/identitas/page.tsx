'use client';

export default function IdentitasPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 mt-12">Identitas Visual</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Keharuman Alami, Kelestarian Nyata.</p>
        </div>

        {/* Logo */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center bg-card rounded-lg p-8 border border-border">
          {/* Logo - Tampil di atas untuk mobile, di kanan untuk desktop */}
          <div className="flex justify-center md:order-2">
            <div className="w-48 h-48 bg-white to-teal-500 rounded-lg flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="Logo EcoScent" className="w-32 h-32 object-contain" />
            </div>
          </div>

          {/* Teks - Tampil di bawah untuk mobile, di kiri untuk desktop */}
          <div className="space-y-4 md:order-1 text-center md:text-left">
            <h2 className="text-3xl font-bold">Filosofi Logo EcoScent</h2>

            <p className="text-muted-foreground leading-relaxed font-poppins text-xl">
              Logo EcoScent menampilkan ilustrasi daun hijau yang tumbuh subur melambangkan hubungan kuat antara aroma alami dan kelestarian lingkungan. Setiap elemen dalam logo memiliki makna yang mencerminkan karakter, nilai, dan tujuan
              EcoScent sebagai brand reed diffuser alami dan ramah lingkungan.
            </p>
          </div>
        </div>

        {/* Foto Berjalan */}
        <div className="mb-16 overflow-hidden">
          <h2 className="text-3xl font-bold mb-8 text-center">Produk EcoScent</h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-scroll-infinite">
              {/* Foto 1 */}
              <img src="/jadi.jpg" alt="Produk Jadi" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
              {/* Foto 2 */}
              <img src="/tumbuhan.jpg" alt="Tumbuhan" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
              {/* Foto 3 */}
              <img src="/produksi.jpg" alt="Produksi" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
              {/* Foto 4 */}
              <img src="/bahan-baku.jpg" alt="Bahan Baku" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
              {/* Foto 5 */}
              <img src="/Pengolahan.png" alt="Pengolahan" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />

              {/* Duplikasi untuk looping */}
              <img src="/jadi.jpg" alt="Produk Jadi" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
              <img src="/tumbuhan.jpg" alt="Tumbuhan" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
              <img src="/produksi.jpg" alt="Produksi" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
              <img src="/bahan-baku.jpg" alt="Bahan Baku" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
              <img src="/Pengolahan.png" alt="Pengolahan" className="w-60 h-40 object-cover rounded-xl flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
