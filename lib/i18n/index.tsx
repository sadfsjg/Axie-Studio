"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"

// Define supported languages
export type Language = "SE" | "EN"

// Define translation structure
export type TranslationKey =
  | "common.installApp"
  | "common.appLogin"
  | "common.bookDemo"
  | "common.exploreFeatures"
  | "nav.admin"
  | "nav.customerApps"
  | "nav.pricing"
  | "nav.features"
  | "nav.appBenefits"
  | "nav.mobileApps"
  | "nav.contact"
  | "hero.title"
  | "hero.subtitle"
  | "hero.futureBooking"
  | "footer.copyright"
  | "footer.navigation"
  | "footer.contact"
  | "features.explore"
  | "features.scrollLeft"
  | "features.scrollRight"
  | "mobile.title"
  | "mobile.subtitle"
  | "mobile.appsInPractice"
  | "mobile.customerBenefits"
  | "mobile.businessBenefits"
  | "mobile.searchVisible"
  | "mobile.appInSearchResults"
  | "admin.title"
  | "admin.subtitle"

// Translation dictionaries
const translations: Record<Language, Record<TranslationKey, string>> = {
  SE: {
    "common.installApp": "Installera App",
    "common.appLogin": "App Login",
    "common.bookDemo": "Boka Demo",
    "common.exploreFeatures": "Utforska funktioner",
    "nav.admin": "Admin",
    "nav.customerApps": "Kundappar",
    "nav.pricing": "Priser",
    "nav.features": "Funktioner",
    "nav.appBenefits": "Fördelar",
    "nav.mobileApps": "Kundappar",
    "nav.contact": "Kontakt",
    "hero.title": "Bokningssystem som förenklar din vardag",
    "hero.subtitle":
      "Effektivisera din verksamhet med vårt skräddarsydda bokningssystem. Spara tid, öka kundnöjdheten och få full kontroll över din kalender.",
    "hero.futureBooking": "Framtidens bokningssystem",
    "footer.copyright": "© {year} Axie Studio. Alla rättigheter förbehållna.",
    "footer.navigation": "Navigering",
    "footer.contact": "Kontakt",
    "features.explore": "Utforska fler funktioner",
    "features.scrollLeft": "Bläddra vänster",
    "features.scrollRight": "Bläddra höger",
    "mobile.title": "Mobilappar för dina kunder",
    "mobile.subtitle":
      "Låt dina kunder enkelt boka tider direkt från sin hemskärm för högre konvertering och tillgänglighet",
    "mobile.appsInPractice": "Våra kundappar i praktiken",
    "mobile.customerBenefits": "Fördelar för dina kunder",
    "mobile.businessBenefits": "Fördelar för din verksamhet",
    "mobile.searchVisible": "Synlig i Google-sökningar",
    "mobile.appInSearchResults": "Din app syns direkt i sökresultaten",
    "admin.title": "Kraftfull administratörsapp",
    "admin.subtitle": "Bokningssystem för webb och mobil",
  },
  EN: {
    "common.installApp": "Install App",
    "common.appLogin": "App Login",
    "common.bookDemo": "Book Demo",
    "common.exploreFeatures": "Explore Features",
    "nav.admin": "Admin",
    "nav.customerApps": "Customer Apps",
    "nav.pricing": "Pricing",
    "nav.features": "Features",
    "nav.appBenefits": "Benefits",
    "nav.mobileApps": "Customer Apps",
    "nav.contact": "Contact",
    "hero.title": "Booking System That Simplifies Your Day",
    "hero.subtitle":
      "Streamline your business with our customized booking system. Save time, increase customer satisfaction, and gain full control over your calendar.",
    "hero.futureBooking": "The Future of Booking Systems",
    "footer.copyright": "© {year} Axie Studio. All rights reserved.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "features.explore": "Explore more features",
    "features.scrollLeft": "Scroll left",
    "features.scrollRight": "Scroll right",
    "mobile.title": "Mobile Apps for Your Customers",
    "mobile.subtitle":
      "Let your customers easily book appointments directly from their home screen for higher conversion and accessibility",
    "mobile.appsInPractice": "Our Customer Apps in Practice",
    "mobile.customerBenefits": "Benefits for Your Customers",
    "mobile.businessBenefits": "Benefits for Your Business",
    "mobile.searchVisible": "Visible in Google searches",
    "mobile.appInSearchResults": "Your app appears directly in search results",
    "admin.title": "Powerful Admin Application",
    "admin.subtitle": "Booking System for Web and Mobile",
  },
}

// Create context
type I18nContextType = {
  language: Language
  t: (key: TranslationKey, params?: Record<string, string | number>) => string
  changeLanguage: (lang: Language) => void
  isTransitioning: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Provider component
export function I18nProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname() || ""
  const [language, setLanguage] = useState<Language>(pathname.startsWith("/en") ? "EN" : "SE")
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Update language when path changes
  useEffect(() => {
    if (!pathname) return

    const newLang: Language = pathname.startsWith("/en") ? "EN" : "SE"
    if (language !== newLang) {
      setLanguage(newLang)
      setIsTransitioning(false)
    }
  }, [pathname, language])

  // Translation function
  const t = (key: TranslationKey, params?: Record<string, string | number>): string => {
    // Check if the key exists in the translations
    if (!translations[language][key]) {
      console.warn(`Translation key "${key}" not found for language "${language}"`)
      return key // Return the key as fallback
    }

    let text = translations[language][key]

    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(`{${paramKey}}`, String(paramValue))
      })
    }

    return text
  }

  // Language switcher
  const changeLanguage = (newLang: Language) => {
    if (language === newLang || isTransitioning) return

    setIsTransitioning(true)
    setLanguage(newLang)

    const hash = window.location.hash
    const targetPath = newLang === "SE" ? "/" : "/en"
    const fullPath = hash ? `${targetPath}${hash}` : targetPath

    router.push(fullPath, { scroll: false })

    setTimeout(() => {
      setIsTransitioning(false)
    }, 100)
  }

  return (
    <I18nContext.Provider value={{ language, t, changeLanguage, isTransitioning }}>{children}</I18nContext.Provider>
  )
}

// Hook for using translations
export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
