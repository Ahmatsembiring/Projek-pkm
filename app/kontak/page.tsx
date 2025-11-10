'use client';

import type React from 'react';
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

// Konfigurasi Kontak
// PENTING: Ganti dengan nomor WhatsApp AKTIF Anda!
// Format: 62 + nomor tanpa 0 di depan
// Contoh: 628123456789 (untuk nomor 08123456789)
const WHATSAPP_NUMBER = '628815831898'; // ⬅️ GANTI DENGAN NOMOR ANDA!
const PRE_FILLED_MESSAGE = 'Halo, saya tertarik dengan layanan Ahmat Studio. Bisakah kita berdiskusi lebih lanjut tentang proyek saya?';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_MESSAGE)}`;

// Ikon WhatsApp yang lebih bagus
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function KontakPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'whatsapp',
      icon: <WhatsAppIcon className="w-8 h-8" />,
      title: 'WhatsApp',
      subtitle: 'Chat Langsung',
      description: 'Respons tercepat! Kami siap membantu Anda',
      value: WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{4})(\d{4})/, '+$1 $2-$3-$4'),
      action: 'Mulai Chat',
      href: WHATSAPP_URL,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      hoverBg: 'hover:bg-green-500/20',
    },
    {
      id: 'email',
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      subtitle: 'Kirim Pesan Detail',
      description: 'Untuk pertanyaan lengkap dan proposal',
      value: 'hello@ahmat-studio.com',
      action: 'Kirim Email',
      href: 'mailto:hello@ahmat-studio.com',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverBg: 'hover:bg-blue-500/20',
    },
    {
      id: 'phone',
      icon: <Phone className="w-8 h-8" />,
      title: 'Telepon',
      subtitle: 'Hubungi Langsung',
      description: 'Senin - Jumat, 09:00 - 17:00 WIB',
      value: '+62 812-3456-7890',
      action: 'Telepon Kami',
      href: 'tel:+628123456789',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBg: 'hover:bg-purple-500/20',
    },
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Alamat Kantor',
      content: (
        <address className="not-italic text-muted-foreground">
          Jl. Kreativitas No. 123
          <br />
          Jakarta Selatan, 12345
          <br />
          Indonesia
        </address>
      ),
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: 'Jam Operasional',
      content: (
        <div className="text-muted-foreground space-y-1">
          <p>Senin - Jumat: 09:00 - 17:00</p>
          <p>Sabtu: 10:00 - 14:00</p>
          <p className="text-sm text-muted-foreground/60">Minggu & Libur: Tutup</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Mari Berkolaborasi
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Hubungi Kami</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">Punya ide proyek atau pertanyaan? Tim kami siap membantu mewujudkan visi digital Anda</p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.id === 'whatsapp' ? '_blank' : undefined}
              rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => setHoveredCard(method.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-card rounded-2xl p-6 border ${method.borderColor} ${method.hoverBg} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon Container */}
              <div className={`${method.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-transparent bg-gradient-to-br ${method.color} bg-clip-text`}>{method.icon}</div>
              </div>

              {/* Content */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-bold">{method.title}</h3>
                <p className="text-sm font-medium text-muted-foreground">{method.subtitle}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
                <p className={`text-sm font-mono font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>{method.value}</p>
              </div>

              {/* Action Button */}
              <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
                <span>{method.action}</span>
                <Send className="w-4 h-4" />
              </div>

              {/* Hover Indicator */}
              {hoveredCard === method.id && <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color}`} />}
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 sm:p-12 border border-primary/20 mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Siap Memulai Proyek Anda?</h2>
            <p className="text-lg text-muted-foreground">Konsultasi gratis untuk membahas kebutuhan dan solusi terbaik untuk bisnis Anda</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Chat via WhatsApp
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Respon &lt; 5 Menit</span>
              </a>
              <a href="mailto:hello@ahmat-studio.com" className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-xl text-lg font-semibold hover:bg-accent hover:shadow-lg transition-all duration-300">
                <Mail className="w-5 h-5" />
                Kirim Email
              </a>
            </div>
          </div>
        </div>

        {/* Office Info */}
        <div className="grid sm:grid-cols-2 gap-6">
          {officeInfo.map((info, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">{info.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                  {info.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Dipercaya oleh 100+ klien dari berbagai industri</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-50">
            <div className="text-2xl font-bold">⭐ 4.9/5.0</div>
            <div className="h-8 w-px bg-border" />
            <div className="text-sm">100+ Proyek Selesai</div>
            <div className="h-8 w-px bg-border" />
            <div className="text-sm">Respon &lt; 5 Menit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
