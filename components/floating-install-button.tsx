"use client"

import { useState, useEffect } from "react"
import { Download } from "lucide-react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { useI18n } from "@/lib/i18n"

export function FloatingInstallButton() {
  const { canInstall, isInstalled, promptInstall, installPromptVisible } = usePwaInstall()
  const { language } = useI18n()
  const [visible, setVisible] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    // Only show if:
    // 1. Can install
    // 2. Not already installed
    // 3. Main prompt is not visible
    // 4. User has dismissed the main prompt before (stored in localStorage)
    const hasSeenPrompt = localStorage.getItem("pwa-prompt-seen") === "true"

    if (canInstall && !isInstalled && !installPromptVisible && hasSeenPrompt) {
      // Delay appearance for better UX
      const timer = setTimeout(() => {
        setVisible(true)
        // Animate in after a brief delay
        setTimeout(() => setAnimateIn(true), 100)
      }, 5000)

      return () => clearTimeout(timer)
    } else {
      setVisible(false)
      setAnimateIn(false)
    }
  }, [canInstall, isInstalled, installPromptVisible])

  const handleInstall = () => {
    promptInstall()
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        animateIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <button
        onClick={handleInstall}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label={language === "SE" ? "Installera app" : "Install app"}
      >
        <Download className="h-5 w-5" />
        <span className="font-medium">{language === "SE" ? "Installera app" : "Install app"}</span>
      </button>
    </div>
  )
}
