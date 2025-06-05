"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function useLanguageDetection() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Only run on the root path
    if (pathname !== "/") return

    // Get browser language
    const browserLang = navigator.language.toLowerCase()
    const isEnglishBrowser = browserLang.startsWith("en")

    // If browser is English and we're on the root path, redirect to English version
    if (isEnglishBrowser) {
      router.replace("/en")
    }
  }, [pathname, router])
}
