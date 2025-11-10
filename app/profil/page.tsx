import Link from "next/link"
import { Users, Palette, Layers } from "lucide-react"

const profileSections = [
  {
    title: "Tim Kami",
    description: "Bertemu dengan tim kreatif dan profesional kami",
    href: "/profil/tim",
    icon: Users,
  },
  {
    title: "Identitas Visual",
    description: "Logo, palet warna, dan guidelines branding kami",
    href: "/profil/identitas",
    icon: Palette,
  },
  {
    title: "Struktur Organisasi",
    description: "Organisasi dan departemen di ahmat-studio",
    href: "/profil/organisasi",
    icon: Layers,
  },
]

export default function ProfilPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Profil Studio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pelajari lebih lanjut tentang ahmat-studio, tim kami, dan nilai-nilai yang kami anut
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profileSections.map((section) => {
            const Icon = section.icon
            return (
              <Link key={section.title} href={section.href}>
                <div className="group bg-card rounded-lg p-8 border border-border hover:border-primary hover:shadow-lg smooth-transition h-full cursor-pointer">
                  <Icon size={40} className="text-primary mb-4 group-hover:scale-110 smooth-transition" />
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary smooth-transition">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* About Studio */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-card rounded-lg p-12 border border-border">
          <div>
            <h2 className="text-4xl font-bold mb-6">Tentang ahmat-studio</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              ahmat-studio adalah studio kreatif yang berdedikasi untuk memberikan solusi desain dan branding
              berkualitas tinggi. Kami percaya bahwa desain yang baik bukan hanya tentang estetika, tetapi juga tentang
              komunikasi yang efektif dan nilai bisnis.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Sejak didirikan, kami telah bekerja dengan berbagai klien dari berbagai industri, mulai dari startup
              hingga perusahaan besar. Pengalaman kami mencakup branding, design UI/UX, web design, dan strategi
              pemasaran digital.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tim kami terdiri dari desainer, developer, dan strategist yang berpengalaman dan passionate tentang
              menciptakan karya terbaik.
            </p>
          </div>
          <div className="relative">
            <img src="/creative-team-collaboration.png" alt="Team working" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
