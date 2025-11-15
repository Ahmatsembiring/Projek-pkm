'use client';

import { useState } from 'react';
import { X, Award } from 'lucide-react';

const certificates = [
  { id: 1, src: '/haki1.jpg', title: 'Sertifikat Hak Kekayaan Intelektual', alt: 'Sertifikat HAKI' },
  { id: 2, src: '/haki2.jpg', title: 'Sertifikat HAKI Lampiran 2', alt: 'Sertifikat HAKI Lampiran 2' },
  { id: 3, src: '/nib1.jpg', title: 'Dokumen Nomor Induk Berusaha ', alt: 'NIB' },
  { id: 4, src: '/nib2.jpg', title: 'Dokumen Nomor Induk Berusaha Lampiran 2', alt: 'NIB Lampiran 2' },
];

export default function LegalitasPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 mt-10">Legalitas & Sertifikasi</h1>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto mt-8">
            Dokumen resmi yang memastikan bahwa EcoScent telah terdaftar, terlindungi, dan memenuhi standar legalitas sebagai brand reed diffuser yang terpercaya
          </p>
        </div>

        {/* Certificates Section */}
        <div className="bg-card rounded-lg p-8 md:p-12 border border-border">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold font-poppins">Identitas Resmi</h2>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCertificate(cert.id)}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-white border-2 border-border hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {/* Certificate Image Container */}
                <div className="aspect-[3/4] relative bg-gray-100">
                  <img src={cert.src} alt={cert.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-base md:text-lg font-semibold">Lihat Detail</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Title */}
                <div className="p-3 md:p-4 bg-gradient-to-t from-primary/10 to-transparent">
                  <p className="font-semibold text-center text-sm md:text-base">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Text */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm md:text-base">Klik pada sertifikat untuk melihat detail lengkap</p>
          </div>
        </div>
      </div>

      {/* Lightbox/Popup Modal */}
      {selectedCertificate !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setSelectedCertificate(null)}>
          {/* Close Button */}
          <button onClick={() => setSelectedCertificate(null)} className="fixed top-4 right-4 z-[60] bg-red-500 hover:bg-red-600 text-white rounded-full p-2 md:p-3 transition-all duration-200 shadow-2xl hover:scale-110" aria-label="Tutup">
            <X size={20} className="md:w-7 md:h-7" strokeWidth={3} />
          </button>

          {/* Certificate Content */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* Certificate Image */}
            <img
              src={certificates.find((cert) => cert.id === selectedCertificate)?.src}
              alt={certificates.find((cert) => cert.id === selectedCertificate)?.alt || 'Sertifikat'}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Certificate Title in Modal */}
            <div className="mt-6 text-center">
              <h3 className="text-white text-xl md:text-2xl font-bold">{certificates.find((cert) => cert.id === selectedCertificate)?.title}</h3>
            </div>

            {/* Instruction Text */}
            <p className="text-center text-white/70 mt-4 text-sm">Klik di luar gambar atau tombol merah untuk menutup</p>
          </div>
        </div>
      )}
    </div>
  );
}
