'use client';

import type React from 'react';
import { Mail, MapPin, Phone, Clock, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

// Konfigurasi Kontak
const WHATSAPP_NUMBER = '6285840663868';
const PRE_FILLED_MESSAGE = 'Halo, saya tertarik dengan produk EcoScent. Bisakah kita berdiskusi lebih lanjut?';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_MESSAGE)}`;

// Ikon WhatsApp Custom
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
      description: 'Respons tercepat! Kami siap membantu Anda 24/7',
      value: WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{4})(\d{4})/, '+$1 $2-$3-$4'),
      action: 'Mulai Chat',
      href: WHATSAPP_URL,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      hoverBg: 'hover:bg-green-50',
      iconBg: 'bg-green-100',
      textGradient: 'from-green-600 to-emerald-600',
    },
    {
      id: 'email',
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      subtitle: 'Kirim Pesan Detail',
      description: 'Untuk pertanyaan lengkap dan proposal bisnis',
      value: 'rihan.123420028@student.itera.ac.id',
      action: 'Kirim Email',
      href: 'mailto:rihan.123420028@student.itera.ac.id',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverBg: 'hover:bg-blue-50',
      iconBg: 'bg-blue-100',
      textGradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 'phone',
      icon: <Phone className="w-8 h-8" />,
      title: 'Telepon',
      subtitle: 'Hubungi Langsung',
      description: 'Senin - Jumat, 09:00 - 17:00 WIB',
      value: '+62 858-4066-3868',
      action: 'Telepon Kami',
      href: 'tel:+6285840663868',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBg: 'hover:bg-purple-50',
      iconBg: 'bg-purple-100',
      textGradient: 'from-purple-600 to-pink-600',
    },
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      title: 'Alamat Kantor',
      content: (
        <address className="not-italic text-gray-600 leading-relaxed">
          Asrama TB 2 ITERA
          <br />
          Jalan Terusan Ryacudu, Way Hui
          <br />
          Kecamatan Jati Agung, Lampung Selatan
          <br />
          Lampung 35145, Indonesia
        </address>
      ),
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: 'Jam Operasional',
      content: (
        <div className="text-gray-600 space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">Senin - Jumat</span>
            <span className="text-emerald-600 font-semibold">09:00 - 17:00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Sabtu</span>
            <span className="text-emerald-600 font-semibold">10:00 - 14:00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Minggu</span>
            <span className="text-emerald-600 font-semibold">10:00 - 14:00</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50/50 via-white to-emerald-50/30">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-lime-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Hubungi Kami
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent leading-tight">
            Mari Berdiskusi
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Punya pertanyaan tentang produk EcoScent? Tim kami siap membantu Anda menemukan keharuman alami yang tepat.
          </p>
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
              className={`group relative bg-white rounded-2xl p-6 border-2 ${method.borderColor} ${method.hoverBg} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden`}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Decorative Corner Elements */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${method.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
              <div className={`absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr ${method.color} opacity-5 rounded-full group-hover:scale-125 transition-transform duration-500`} />

              {/* Icon Container */}
              <div className="relative flex justify-center mb-5">
                <div className={`${method.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                  <div className={`bg-gradient-to-br ${method.color} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }}>
                    {method.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 mb-5 relative z-10 text-center">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
                  {method.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${method.textGradient} bg-clip-text text-transparent`}>
                  {method.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {method.description}
                </p>
                <div className="pt-2">
                  <p className="text-sm font-mono font-semibold text-gray-700 bg-gray-50 px-4 py-2 rounded-lg inline-block">
                    {method.value}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold">
                <span className={`bg-gradient-to-r ${method.textGradient} bg-clip-text text-transparent`}>
                  {method.action}
                </span>
                <Send className={`w-4 h-4 text-${method.id === 'whatsapp' ? 'green' : method.id === 'email' ? 'blue' : 'purple'}-600 group-hover:translate-x-1 transition-transform duration-300`} />
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </a>
          ))}
        </div>

        {/* CTA Section - WhatsApp Featured */}
        <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden shadow-2xl">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-white rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 text-white">
            <div className="text-5xl mb-4 animate-bounce">🌿</div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Siap Merasakan Keharuman Alami?
            </h2>
            <p className="text-lg text-white/95 leading-relaxed">
              Konsultasi gratis untuk mengetahui produk terbaik untuk ruangan Anda. 
              Dapatkan rekomendasi personal dari tim ahli kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-green-600 rounded-xl text-lg font-bold hover:bg-green-50 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Chat via WhatsApp
              </a>
              <a
                href="mailto:ecoscent@email.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl text-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Kirim Email
              </a>
            </div>
          </div>
        </div>

        {/* Office Info */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {officeInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-4 text-emerald-900">
                    {info.title}
                  </h3>
                  {info.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
          <p className="text-sm text-gray-600 mb-4 font-semibold max-w-2xl mx-auto leading-relaxed">
            Dipercaya oleh Masyarakat Lokal dalam memadukan keharuman terapi minyak nilam asli Lampung
          </p>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">
                ⭐
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 font-medium">
            Rating 5.0 dari pelanggan setia kami
          </p>
        </div>
      </div>
    </div>
  );
}