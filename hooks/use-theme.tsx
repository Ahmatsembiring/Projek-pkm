"use client"

import { useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = saved || (prefersDark ? "dark" : "light")

    setTheme(initial)
    setMounted(true)
    applyTheme(initial)
  }, [])

  const applyTheme = (theme: "light" | "dark") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  return { theme: mounted ? theme : "light", toggleTheme }
}
