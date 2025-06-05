"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export function LanguagePreloader() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Determine the current language from the pathname
    const isEnglish = pathname?.startsWith("/en")

    // Preload the alternate language version
    const alternatePathname = isEnglish
      ? pathname === "/en"
        ? "/"
        : pathname.replace(/^\/en/, "")
      : pathname === "/"
        ? "/en"
        : `/en${pathname}`

    try {
      router.prefetch(alternatePathname)
    } catch (error) {
      console.error("Failed to prefetch alternate language path:", error)
    }
  }, [pathname, router])

  return null
}
