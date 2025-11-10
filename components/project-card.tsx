import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.id}`}>
      <div className="group bg-background rounded-lg overflow-hidden border border-border hover:border-primary smooth-transition h-full cursor-pointer">
        <div className="relative h-60 overflow-hidden bg-card">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 smooth-transition" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {project.category}
            </span>
            <ArrowUpRight size={18} className="text-primary opacity-0 group-hover:opacity-100 smooth-transition" />
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-primary smooth-transition">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </Link>
  )
}
