'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', href: '/' },
    {
      label: 'Profil',
      href: '/profil',
      submenu: [
        { label: 'Tim Kami', href: '/profil/tim' },
        { label: 'Identitas', href: '/profil/identitas' },
        { label: 'Organisasi', href: '/profil/organisasi' },
      ],
    },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Kontak', href: '/kontak' },
  ];

  const headerBg = scrolled ? 'bg-emerald-600/95 dark:bg-emerald-800/95 backdrop-blur-md border-b border-emerald-700 shadow-md' : 'bg-transparent';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${headerBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <img src="/logo.png" alt="Logo EcoScent" className="w-6 h-6" />
            </div>
            <span className={`font-bold text-lg hidden sm:inline transition-colors duration-500 ${scrolled ? 'text-white' : 'text-white drop-shadow-lg'}`}>EcoScent</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link href={item.href} className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-white hover:text-emerald-100' : 'text-white drop-shadow-md'}`}>
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 bg-white dark:bg-neutral-900">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.label} href={subitem.href} className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button onClick={toggleTheme} className={`p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-white hover:bg-white/10' : 'text-white drop-shadow-md'}`}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* Mobile Button */}
            <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 text-white">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className="block px-3 py-2 hover:bg-white/10 rounded-lg">
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.label} href={subitem.href} className="block px-3 py-2 text-sm hover:bg-white/10 rounded-lg">
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
