"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function useLanguage() {
  const pathname = usePathname()
  const [language, setLanguage] = useState<"sv" | "en">("sv")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Determine language from pathname
    const isEnglish = pathname?.startsWith("/en")
    setLanguage(isEnglish ? "en" : "sv")
    setIsLoaded(true)
  }, [pathname])

  // Get translation function
  const t = (key: string, fallback?: string): string => {
    // This is a simplified version - in a real app, you'd load translations from a file or API
    const translations: Record<string, Record<string, string>> = {
      sv: {
        "header.login": "Logga in",
        "hero.title": "Bokningssystem för salonger och frisörer",
        "hero.subtitle": "Öka din försäljning med ett modernt bokningssystem",
        "hero.cta.demo": "Boka demo",
        "hero.cta.explore": "Utforska funktioner",
        // Add more translations as needed
      },
      en: {
        "header.login": "Log in",
        "hero.title": "Booking System for Salons and Barbers",
        "hero.subtitle": "Increase your sales with a modern booking system",
        "hero.cta.demo": "Book Demo",
        "hero.cta.explore": "Explore Features",
        // Add more translations as needed
      },
    }

    return translations[language]?.[key] || fallback || key
  }

  return {
    language,
    isLoaded,
    t,
    isEnglish: language === "en",
    isSwedish: language === "sv",
  }
}
