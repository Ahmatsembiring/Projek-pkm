import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Ahmad Suryana",
    role: "Creative Director",
    bio: "Visioner kreatif dengan pengalaman 10+ tahun di industri design",
    image: "/creative-director-portrait.png",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    role: "Lead Designer",
    bio: "Desainer berbakat dengan fokus pada UI/UX dan branding",
    image: "/professional-designer-portrait-woman.jpg",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Lead Developer",
    bio: "Developer fullstack dengan expertise dalam web modern",
    image: "/professional-developer-portrait-man.jpg",
  },
  {
    id: 4,
    name: "Rina Wijaya",
    role: "Content Strategist",
    bio: "Strategist berpengalaman dalam marketing dan content creation",
    image: "/professional-strategist-portrait-woman.jpg",
  },
  {
    id: 5,
    name: "Doni Pratama",
    role: "Project Manager",
    bio: "Manager berpengalaman dalam mengelola proyek besar",
    image: "/professional-project-manager.png",
  },
  {
    id: 6,
    name: "Lisa Andika",
    role: "Graphic Designer",
    bio: "Desainer grafis dengan passion untuk visual storytelling",
    image: "/graphic-designer-portrait.png",
  },
]

export default function TimPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Tim Kami</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesional berbakat yang siap membuat visi Anda menjadi kenyataan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary smooth-transition group"
            >
              <div className="relative h-64 overflow-hidden bg-background">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                <div className="flex gap-3">
                  <a href="#" className="p-2 hover:bg-background rounded-lg smooth-transition">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="p-2 hover:bg-background rounded-lg smooth-transition">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="p-2 hover:bg-background rounded-lg smooth-transition">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
