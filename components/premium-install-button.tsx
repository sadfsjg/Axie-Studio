"use client"

import { useState, useEffect } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { Download, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface PremiumInstallButtonProps {
  className?: string
}

export function PremiumInstallButton({ className }: PremiumInstallButtonProps) {
  const { canInstall, isInstalled, promptInstall } = usePwaInstall()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start animation after a delay
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isInstalled) {
    return null
  }

  if (!canInstall) {
    return null
  }

  return (
    <button
      onClick={promptInstall}
      className={cn(
        "relative group overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 md:px-8 md:py-4 text-blue-900 font-semibold shadow-lg shadow-yellow-500/25 transition-all hover:shadow-yellow-500/40",
        isAnimating && "animate-pulse",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"></span>
      <span className="relative z-10 flex items-center justify-center text-base">
        <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
        <span className="mr-1">Installera</span>
        <span className="hidden sm:inline">Direkt</span>
        <span className="hidden md:inline"> Nu</span>
        <Sparkles className="ml-1 h-4 w-4" />
      </span>
    </button>
  )
}
