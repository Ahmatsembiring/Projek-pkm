import Link from "next/link"
import { Eye } from "lucide-react"

interface News {
  id: number
  title: string
  date: string
  category: string
  views: number
  image: string
}

export default function NewsCard({ news }: { news: News }) {
  return (
    <Link href={`/profil/${news.id}`}>
      <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary smooth-transition h-full cursor-pointer">
        <div className="relative h-48 overflow-hidden bg-background">
          <img
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
          />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-primary">{news.category}</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Eye size={12} /> {news.views}
            </span>
          </div>

          <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary smooth-transition">{news.title}</h3>

          <p className="text-xs text-muted-foreground">{news.date}</p>
        </div>
      </div>
    </Link>
  )
}
