'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProjectCard from '@/components/project-card';
import NewsCard from '@/components/news-card';
import { reducer } from './../hooks/use-toast';

const featuredProjects = [
  {
    id: 1,
    title: 'Brand Identity System',
    category: 'Branding',
    image: '/tumbuhan.jpg',
    description: 'Complete brand identity with logo, colors, and guidelines',
  },
  {
    id: 2,
    title: 'Digital Product Design',
    category: 'UI/UX',
    image: '/produk.jpg',
    description: 'Comprehensive design system for digital products',
  },
  {
    id: 3,
    title: 'Marketing Campaign',
    category: 'Marketing',
    image: '/bahan-1.jpg',
    description: 'Integrated marketing campaign across multiple channels',
  },
  {
    id: 4,
    title: 'Website Redesign',
    category: 'Web Design',
    image: '/packing.jpg',
    description: 'Modern responsive website with interactive elements',
  },
];

const recentNews = [
  {
    id: 1,
    title: 'Launching New Design Services',
    date: '07 Nov 2025',
    category: 'Announcement',
    views: 124,
    image: '/akmal.jpg',
  },
  {
    id: 2,
    title: 'Winning International Design Award',
    date: '05 Nov 2025',
    category: 'Achievement',
    views: 89,
    image: '/bersama.jpg',
  },
  {
    id: 3,
    title: 'Studio Expansion to New Office',
    date: '02 Nov 2025',
    category: 'News',
    views: 156,
    image: '/bahan.jpg',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }} // taruh gambar di /public/bg.jpg
      >
        {/* overlay gradasi tipis biar teks kontras */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-white/70 to-white dark:from-black/30 dark:via-black/40 dark:to-background -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-black/40 rounded-full border border-white/50 dark:border-white/10 backdrop-blur">
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-sm font-medium">Welcome to EcoScent</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-5xl font-poppins  font-bold leading-tight text-center text-blue">
            <span className="block text-emerald-200">EcoScent</span>
            <span className="block text-white mt-2 ">Sustainable Reed Diffuser</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-emerald-50 font-poppins">"Keharuman Alami, Kelestarian Nyata"</p>

          <p className="font-poppins text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
            Reed Diffuser premium 100% bahan alami, memadukan keharuman terapi minyak nilam asli Lampung dan stik diffuser inovatif dari limbah rotan. Sehat untuk Anda, lestari untuk Bumi.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-12 max-w-md mx-auto text-sm">
            <div>
              <p className="font-bold text-3xl text-white">15+</p>
              <p className="text-white text-xs">Produk Terjual</p>
            </div>
            <div>
              <p className="font-bold text-3xl text-white">10+</p>
              <p className="text-white text-xs">Happy Clients</p>
            </div>
            <div>
              <p className="font-bold text-3xl text-white">5</p>
              <p className="text-white text-xs">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pt-15 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Karya Terbaik yang Kami Hadirkan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Produk pilihan EcoScent yang dirancang untuk memberikan pengalaman aroma terbaik</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Recent News</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {recentNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">"Saatnya Wujudkan Ruangan yang Harum Alami & Ramah Lingkungan"</h2>
          <p className="text-lg opacity-90">Soft, elegan, menenangkan.</p>
          <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-emerald-600 hover:bg-emerald-50 rounded-lg smooth-transition font-medium shadow-lg">
            Contact Us Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
