"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

// Define supported languages
export type SupportedLanguage = "sv" | "en"

// Function to get the current language from pathname
export function getCurrentLanguageFromPathname(pathname: string): SupportedLanguage {
  return pathname.startsWith("/en") ? "en" : "sv"
}

// Function to get the path for a specific language
export function getLanguagePath(currentPath: string, targetLanguage: SupportedLanguage): string {
  // If we're already on the target language, don't change anything
  const currentLanguage = getCurrentLanguageFromPathname(currentPath)
  if (currentLanguage === targetLanguage) {
    return currentPath
  }

  // Handle switching from English to Swedish
  if (currentLanguage === "en" && targetLanguage === "sv") {
    return currentPath.replace(/^\/en/, "") || "/"
  }

  // Handle switching from Swedish to English
  if (currentLanguage === "sv" && targetLanguage === "en") {
    return `/en${currentPath === "/" ? "" : currentPath}`
  }

  // Fallback
  return targetLanguage === "sv" ? "/" : "/en"
}

// Custom hook for language switching
export function useLanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>("sv")

  // Update current language based on pathname
  useEffect(() => {
    if (pathname) {
      const detectedLanguage = getCurrentLanguageFromPathname(pathname)
      setCurrentLanguage(detectedLanguage)
    }
  }, [pathname])

  // Function to switch language
  const switchLanguage = useCallback(
    (language: SupportedLanguage) => {
      if (language === currentLanguage) return

      setIsTransitioning(true)
      const targetPath = getLanguagePath(pathname || "/", language)

      // Navigate to the new path
      router.push(targetPath)

      // Reset transition state after navigation
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    },
    [currentLanguage, pathname, router],
  )

  return {
    currentLanguage,
    isTransitioning,
    switchLanguage,
  }
}
