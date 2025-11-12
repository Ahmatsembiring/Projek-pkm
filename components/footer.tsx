import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">AS</div>
              <span className="font-bold">EcoScent</span>
            </div>
            <p className="text-sm text-muted-foreground">EcoScent: Keharuman Alami, Kelestarian Nyata.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary smooth-transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-primary smooth-transition">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-primary smooth-transition">
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary smooth-transition">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary smooth-transition">
                  Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary smooth-transition">
                  Web
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary smooth-transition">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Mail size={16} className="text-primary mt-0.5" />
                <a href="mailto:hello@ahmat-studio.com" className="hover:text-primary smooth-transition">
                  hello@ahmat-studio.com
                </a>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="text-primary mt-0.5" />
                <a href="tel:+628123456789" className="hover:text-primary smooth-transition">
                  +62 812 3456 789
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 projek-pkkm. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary smooth-transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
