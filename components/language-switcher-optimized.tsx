"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcherOptimized() {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentLang, setCurrentLang] = useState<"SE" | "EN">("SE")

  // Determine current language based on pathname
  useEffect(() => {
    if (pathname?.startsWith("/en")) {
      setCurrentLang("EN")
    } else {
      setCurrentLang("SE")
    }
  }, [pathname])

  // Preload the opposite language page
  useEffect(() => {
    const targetPath = currentLang === "SE" ? "/en" : "/"
    try {
      // Use prefetch to make switching faster
      router.prefetch(targetPath)
    } catch (e) {
      console.error("Failed to prefetch:", e)
    }
  }, [currentLang, router])

  const switchLanguage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)

    // Navigate to the target path
    const targetPath = currentLang === "SE" ? "/en" : "/"

    // Update current language before navigation
    const newLang = currentLang === "SE" ? "EN" : "SE"
    setCurrentLang(newLang)

    // Use router.push with a callback to ensure navigation completes
    router.push(targetPath, undefined, {
      scroll: false, // Prevent automatic scrolling to top
    })

    // Reset transition state after navigation
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Increased timeout to ensure transition completes
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      disabled={isTransitioning}
      className={`flex items-center gap-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors ${
        isTransitioning ? "opacity-50" : ""
      }`}
      aria-label={currentLang === "SE" ? "Switch to English" : "Byt till Svenska"}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{currentLang === "SE" ? "EN" : "SE"}</span>
    </Button>
  )
}
