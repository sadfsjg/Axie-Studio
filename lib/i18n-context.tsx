"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"

type Language = "sv" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isLoading: boolean
}

const translations = {
  sv: {
    "header.login": "Logga in",
    "hero.title": "Bokningssystem för salonger och frisörer",
    "hero.subtitle": "Öka din försäljning med ett modernt bokningssystem",
    "hero.cta.demo": "Boka demo",
    "hero.cta.explore": "Utforska funktioner",
    "features.title": "Allt du behöver för effektiv bokning",
    "features.subtitle": "Vårt bokningssystem är utformat för att möta alla dina behov",
    "pricing.title": "Enkla och transparenta priser",
    "pricing.subtitle": "Välj den plan som passar ditt företag bäst",
    "footer.copyright": "© 2023 Axie Studio. Alla rättigheter förbehållna.",
    "footer.newsletter": "Prenumerera på vårt nyhetsbrev",
    "footer.newsletter.placeholder": "Din e-postadress",
    "footer.newsletter.button": "Prenumerera",
    "footer.contact": "Kontakta oss",
    "footer.links": "Snabblänkar",
    "footer.social": "Följ oss",
    // Add more translations as needed
  },
  en: {
    "header.login": "Log in",
    "hero.title": "Booking System for Salons and Barbers",
    "hero.subtitle": "Increase your sales with a modern booking system",
    "hero.cta.demo": "Book Demo",
    "hero.cta.explore": "Explore Features",
    "features.title": "Everything You Need For Efficient Booking",
    "features.subtitle": "Our booking system is designed to meet all your needs",
    "pricing.title": "Simple and Transparent Pricing",
    "pricing.subtitle": "Choose the plan that best fits your business",
    "footer.copyright": "© 2023 Axie Studio. All rights reserved.",
    "footer.newsletter": "Subscribe to our newsletter",
    "footer.newsletter.placeholder": "Your email address",
    "footer.newsletter.button": "Subscribe",
    "footer.contact": "Contact us",
    "footer.links": "Quick links",
    "footer.social": "Follow us",
    // Add more translations as needed
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [language, setLanguageState] = useState<Language>("sv")
  const [isLoading, setIsLoading] = useState(false)

  // Initialize language based on pathname
  useEffect(() => {
    const lang = pathname?.startsWith("/en") ? "en" : "sv"
    setLanguageState(lang)

    // Preload the opposite language resources
    const oppositeLanguage = lang === "sv" ? "en" : "sv"
    // This could be expanded to preload other resources if needed
  }, [pathname])

  const setLanguage = (lang: Language) => {
    setIsLoading(true)

    // Update language state
    setLanguageState(lang)

    // Navigate to the appropriate path
    const currentPath = pathname || "/"
    let newPath: string

    if (lang === "en") {
      // If switching to English
      newPath = currentPath === "/" ? "/en" : `/en${currentPath.replace(/^\/en/, "")}`
    } else {
      // If switching to Swedish
      newPath = currentPath.replace(/^\/en/, "")
      if (newPath === "") newPath = "/"
    }

    // Use router.push for navigation
    router.push(newPath)

    // Reset loading state after a short delay
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
