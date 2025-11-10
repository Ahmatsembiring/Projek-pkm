"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    alert("Terima kasih! Pesan Anda telah dikirim.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami siap mendengarkan ide dan pertanyaan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <Mail className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:hello@ahmat-studio.com"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                hello@ahmat-studio.com
              </a>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <Phone className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Telepon</h3>
              <a href="tel:+628123456789" className="text-muted-foreground hover:text-primary smooth-transition">
                +62 812 3456 789
              </a>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <MapPin className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Alamat</h3>
              <address className="text-muted-foreground not-italic">
                Jl. Kreativitas No. 123
                <br />
                Jakarta Selatan, 12345
                <br />
                Indonesia
              </address>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 border border-border space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary smooth-transition"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary smooth-transition"
                placeholder="Email Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telepon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary smooth-transition"
                placeholder="Nomor Telepon"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subjek</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary smooth-transition"
              >
                <option value="">Pilih Subjek</option>
                <option value="Design">Design Inquiry</option>
                <option value="Branding">Branding Inquiry</option>
                <option value="Web">Web Development</option>
                <option value="Other">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary smooth-transition resize-none"
                placeholder="Ceritakan tentang proyek Anda..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark smooth-transition font-medium"
            >
              Kirim Pesan
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
