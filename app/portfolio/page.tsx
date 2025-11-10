"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"

const allProjects = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Branding",
    image: "/brand-identity-system-logo-design.jpg",
    description: "Complete brand identity with logo, colors, and guidelines",
  },
  {
    id: 2,
    title: "Digital Product Design",
    category: "UI/UX",
    image: "/digital-app-interface-design.jpg",
    description: "Comprehensive design system for digital products",
  },
  {
    id: 3,
    title: "Marketing Campaign",
    category: "Marketing",
    image: "/marketing-campaign-creative-design.jpg",
    description: "Integrated marketing campaign across multiple channels",
  },
  {
    id: 4,
    title: "Website Redesign",
    category: "Web Design",
    image: "/modern-responsive-website.png",
    description: "Modern responsive website with interactive elements",
  },
  {
    id: 5,
    title: "Mobile App Design",
    category: "UI/UX",
    image: "/mobile-app-interface.png",
    description: "Beautiful mobile app with smooth interactions",
  },
  {
    id: 6,
    title: "Packaging Design",
    category: "Branding",
    image: "/product-packaging-design.png",
    description: "Stunning product packaging that stands out",
  },
  {
    id: 7,
    title: "Social Media Content",
    category: "Marketing",
    image: "/social-media-content-creative.jpg",
    description: "Engaging social media content and graphics",
  },
  {
    id: 8,
    title: "Illustration Series",
    category: "Graphic Design",
    image: "/digital-illustration-artwork-series.jpg",
    description: "Custom illustration for various projects",
  },
]

const categories = ["All", "Branding", "UI/UX", "Web Design", "Marketing", "Graphic Design"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? allProjects : allProjects.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Koleksi lengkap proyek-proyek kreatif kami</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium smooth-transition ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-card border border-border hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
