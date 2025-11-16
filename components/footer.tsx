import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img className="w-10 h-10 object-contain" src="/logo.png" alt="EcoScent Logo" />
              </div>
            </div>
            <p className="text-sm text-emerald-100">EcoScent: Keharuman Alami, Kelestarian Nyata.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-emerald-100 hover:text-white smooth-transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/profil" className="text-emerald-100 hover:text-white smooth-transition">
                  Profil
                </Link>
              </li>
              <li>
                <Link href="/" className="text-emerald-100 hover:text-white smooth-transition">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-emerald-100 hover:text-white smooth-transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-emerald-100 hover:text-white smooth-transition">
                  EcoScent Reed Diffuser
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-100 hover:text-white smooth-transition">
                  Custom Aromatherapy Blend
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-100 hover:text-white smooth-transition">
                  Eco-Friendly Gift Set
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-emerald-100">
              <li>
                <a href="mailto:rihan.123420028@student.itera.ac.id" className="hover:text-white smooth-transition">
                  rihan.123420028@student.itera.ac.id
                </a>
              </li>
              <li>
                <a href="tel:+6285840663868" className="hover:text-white smooth-transition">
                  +6285 840 663 868
                </a>
              </li>
              <li>
                <span>Lampung, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons - Centered */}
        <div className="border-t border-emerald-500/30 pt-8 pb-4">
          <div className="flex justify-center gap-6 mb-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6285840663868"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-full flex items-center justify-center smooth-transition"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/ecoscent.diffuser"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-full flex items-center justify-center smooth-transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@ecoscent.diffuser"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white hover:text-emerald-600 rounded-full flex items-center justify-center smooth-transition"
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                <path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11188 112.2v89.9a74.6 74.6 0 1052.2 71.2V0h88a121.2 121.2 0 001.9 22.2 122.2 122.2 0 0034.6 65.4A120.3 120.3 0 00381 102a122.3 122.3 0 0067-20.1z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-emerald-100">©2025 - EcoScent: Keharuman Alami, Kelestarian Nyata</p>
        </div>
      </div>
    </footer>
  );
}
