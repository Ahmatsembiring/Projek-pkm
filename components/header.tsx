"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { label: "Beranda", href: "/" },
    {
      label: "Profil",
      href: "/profil",
      submenu: [
        { label: "Tim Kami", href: "/profil/tim" },
        { label: "Identitas", href: "/profil/identitas" },
        { label: "Organisasi", href: "/profil/organisasi" },
      ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Galeri", href: "/galeri" },
    { label: "Kontak", href: "/kontak" },
  ]

  return (
    <header className="sticky top-0 z-50 glass border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 smooth-transition">
              AS
            </div>
            <span className="font-bold text-lg hidden sm:inline">ahmat-studio</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link href={item.href} className="px-3 py-2 text-sm font-medium hover:text-primary smooth-transition">
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 glass rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm hover:text-primary smooth-transition"
                      >
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
              <button onClick={toggleTheme} className="p-2 hover:bg-card rounded-lg smooth-transition">
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className="block px-3 py-2 hover:bg-card rounded-lg smooth-transition">
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-3 py-2 text-sm hover:bg-card rounded-lg smooth-transition"
                      >
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
  )
}
