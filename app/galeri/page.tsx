'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'image', src: '/gambar16.JPG', alt: 'Logo EcoScent' },
  { id: 2, type: 'image', src: '/bahan-1.JPG', alt: 'Bahan Produksi' },
  { id: 3, type: 'image', src: '/bersam.JPG', alt: 'Tim Bersama' },
  { id: 4, type: 'image', src: '/produksii.JPG', alt: 'Proses Produksi2' },
  { id: 5, type: 'image', src: '/alatt.jpg', alt: 'Produk EcoScent21' },
  { id: 6, type: 'image', src: '/bahannn.png', alt: 'Bahan Baku2' },
  { id: 7, type: 'image', src: '/alat-bahan.jpg', alt: 'Alat dan Baha2n' },
  { id: 8, type: 'image', src: '/gambar1.JPG', alt: 'Galeri Produk1' },
  { id: 9, type: 'image', src: '/alat1.jpg', alt: 'Galeri Produk2' },
  { id: 10, type: 'image', src: '/gambar2.JPG', alt: 'Galeri Produk32' },
  { id: 11, type: 'image', src: '/gambar3.JPG', alt: 'Galeri Produk4w' },
  { id: 12, type: 'image', src: '/gambar4.JPG', alt: 'Galeri Produk5' },
  { id: 13, type: 'image', src: '/gambar5.JPG', alt: 'Galeri Produk6' },
  { id: 14, type: 'image', src: '/gambar6.JPG', alt: 'Galeri Produk7' },
  { id: 15, type: 'image', src: '/gambar7.JPG', alt: 'Galeri Produk8' },
  { id: 16, type: 'image', src: '/gambar8.JPG', alt: 'Galeri Produk9' },
  { id: 17, type: 'image', src: '/gambar9.JPG', alt: 'Galeri Produk10' },
  { id: 18, type: 'image', src: '/gambar18.JPG', alt: 'Galeri Produk11' },
  { id: 19, type: 'image', src: '/gambar11.JPG', alt: 'Galeri Produk12' },
  { id: 20, type: 'image', src: '/gambar12.JPG', alt: 'Galeri Produk13' },
  { id: 21, type: 'image', src: '/gambar13.JPG', alt: 'Galeri Produk14' },
  { id: 22, type: 'image', src: '/gambar14.JPG', alt: 'Galeri Produk15' },
  { id: 23, type: 'image', src: '/gambar17.JPG', alt: 'Galeri Produk16' },
  { id: 24, type: 'image', src: '/gambar15.JPG', alt: 'Galeri Produk17' },
];

export default function GaleriPage() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Galeri</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Koleksi visual dari semua karya dan proyek kami</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="group relative h-64 overflow-hidden rounded-lg cursor-pointer bg-card border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-lg font-semibold">Lihat</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setSelectedItem(null)}>
          {/* Close button */}
          <button onClick={() => setSelectedItem(null)} className="fixed top-4 right-4 z-[60] bg-red-500 hover:bg-red-600 text-white rounded-full p-2 md:p-3 transition-all duration-200 shadow-2xl hover:scale-110" aria-label="Tutup">
            <X size={20} className="md:w-7 md:h-7" strokeWidth={3} />
          </button>

          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <img src={galleryItems.find((item) => item.id === selectedItem)?.src} alt={galleryItems.find((item) => item.id === selectedItem)?.alt || 'Gallery image'} className="w-full h-auto rounded-lg shadow-2xl" />

            {/* Teks instruksi */}
            <p className="text-center text-white/70 mt-4 text-sm">Klik di luar gambar atau tombol merah untuk menutup</p>
          </div>
        </div>
      )}
    </div>
  );
}
