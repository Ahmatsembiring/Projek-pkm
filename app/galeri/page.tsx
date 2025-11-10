"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryItems = [
  { id: 1, type: "image", src: "/placeholder.svg?height=500&width=500" },
  { id: 2, type: "image", src: "/placeholder.svg?height=500&width=500" },
  { id: 3, type: "image", src: "/placeholder.svg?height=500&width=500" },
  { id: 4, type: "image", src: "/placeholder.svg?height=500&width=500" },
  { id: 5, type: "image", src: "/placeholder.svg?height=500&width=500" },
  { id: 6, type: "image", src: "/placeholder.svg?height=500&width=500" },
  { id: 7, type: "image", src: "/placeholder.svg?height=500&width=500" },
  { id: 8, type: "image", src: "/placeholder.svg?height=500&width=500" },
]

export default function GaleriPage() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Galeri</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Koleksi visual dari semua karya dan proyek kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="group relative h-64 overflow-hidden rounded-lg cursor-pointer bg-card border border-border hover:border-primary smooth-transition"
            >
              <img
                src={item.src || "/placeholder.svg"}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 smooth-transition flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 smooth-transition">
                  <span className="text-lg font-medium">View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <img
              src={galleryItems.find((item) => item.id === selectedItem)?.src || "/placeholder.svg"}
              alt="Full size"
              className="w-full h-auto rounded-lg animate-in fade-in zoom-in-95"
            />
          </div>
        </div>
      )}
    </div>
  )
}
