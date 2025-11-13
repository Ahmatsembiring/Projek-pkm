export default function IdentitasPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 mt-12">Identitas Visual</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto te">Keharuman Alami, Kelestarian Nyata.</p>
        </div>

        {/* Logo */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center bg-card rounded-lg p-8 border border-border">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Filosofi Logo EcoScent</h2>

            <p className="text-muted-foreground leading-relaxed font-poppins text-xl ">
              Logo EcoScent menampilkan ilustrasi daun hijau yang tumbuh subur melambangkan hubungan kuat antara aroma alami dan kelestarian lingkungan. Setiap elemen dalam logo memiliki makna yang mencerminkan karakter, nilai, dan tujuan
              EcoScent sebagai brand reed diffuser alami dan ramah lingkungan.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-48 h-48 bg-white to-teal-500 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Logo Ahmat Studio" className="w-32 h-32 object-contain" />
            </div>
          </div>
        </div>

        {/* Color Palette */}
        {/* Foto Berjalan */}
        <div className="mb-16 overflow-hidden">
          <h2 className="text-3xl font-bold mb-8 text-center">Produk EcoScient</h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {/* Foto 1 */}
              <img src="/jadi.jpg" className="w-60 h-40 object-cover rounded-xl" />
              {/* Foto 2 */}
              <img src="/jadi-produk.jpg" className="w-60 h-40 object-cover rounded-xl" />
              {/* Foto 3 */}
              <img src="/tumbuhan.jpg" className="w-60 h-40 object-cover rounded-xl" />
              {/* Foto 4 */}
              <img src="/produksi.jpg" className="w-60 h-40 object-cover rounded-xl" />
              {/* Foto 5 */}
              <img src="/bahan-baku.jpg" className="w-60 h-40 object-cover rounded-xl" />
              {/* Foto 6 */}
              <img src="/Pengolahan.png" className="w-60 h-40 object-cover rounded-xl" />

              {/* Duplikasi untuk looping */}
              <img src="/jadi.jpg" className="w-60 h-40 object-cover rounded-xl" />
              <img src="/jadi-produk.jpg" className="w-60 h-40 object-cover rounded-xl" />
              <img src="/tumbuhan.jpg" className="w-60 h-40 object-cover rounded-xl" />
              <img src="/produksi.jpg" className="w-60 h-40 object-cover rounded-xl" />
              <img src="/bahan-Background.jpg" className="w-60 h-40 object-cover rounded-xl" />
              <img src="/Pengolahan.png" className="w-60 h-40 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
