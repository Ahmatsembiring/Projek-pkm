export default function IdentitasPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Identitas Visual</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Logo, palet warna, dan guidelines visual branding ahmat-studio
          </p>
        </div>

        {/* Logo */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center bg-card rounded-lg p-8 border border-border">
          <div>
            <h2 className="text-3xl font-bold mb-4">Logo ahmat-studio</h2>
            <p className="text-muted-foreground mb-4">
              Logo kami dirancang untuk mencerminkan kreativitas, profesionalisme, dan inovasi. Warna hijau melambangkan
              pertumbuhan dan kesegaran ide.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-6xl font-bold">
              AS
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Palet Warna</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-full h-32 bg-emerald-500 rounded-lg mb-3" />
              <p className="font-semibold">Primary Green</p>
              <p className="text-sm text-muted-foreground">#10b981</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-emerald-600 rounded-lg mb-3" />
              <p className="font-semibold">Dark Green</p>
              <p className="text-sm text-muted-foreground">#059669</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-teal-500 rounded-lg mb-3" />
              <p className="font-semibold">Accent Teal</p>
              <p className="text-sm text-muted-foreground">#06b6d4</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 border border-border" />
              <p className="font-semibold">Neutral Light</p>
              <p className="text-sm text-muted-foreground">#f3f4f6</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gray-900 rounded-lg mb-3" />
              <p className="font-semibold">Dark Neutral</p>
              <p className="text-sm text-muted-foreground">#111827</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="bg-card rounded-lg p-8 border border-border">
          <h2 className="text-3xl font-bold mb-8">Tipografi</h2>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">HEADING / 48PX</p>
              <p className="text-5xl font-bold">Kreativitas Tanpa Batas</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">SUBHEADING / 24PX</p>
              <p className="text-2xl font-semibold">Solusi desain yang inovatif dan profesional</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">BODY / 16PX</p>
              <p className="text-base">
                Kami menggunakan font Geist untuk seluruh elemen tipografi. Dengan kombinasi tebal dan reguler untuk
                menciptakan hierarki visual yang jelas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
