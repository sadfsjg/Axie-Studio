"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, changeLanguage, isTransitioning } = useI18n()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-8 px-2 text-xs font-medium transition-colors",
          language === "SE" ? "text-blue-600" : "text-slate-600",
          isTransitioning && "opacity-50 pointer-events-none",
        )}
        onClick={() => changeLanguage("SE")}
        disabled={isTransitioning}
      >
        SE
      </Button>
      <span className="text-slate-300 mx-0.5">/</span>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-8 px-2 text-xs font-medium transition-colors",
          language === "EN" ? "text-blue-600" : "text-slate-600",
          isTransitioning && "opacity-50 pointer-events-none",
        )}
        onClick={() => changeLanguage("EN")}
        disabled={isTransitioning}
      >
        EN
      </Button>

      {/* Hover indicator */}
      {isHovered && (
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full transform origin-center animate-pulse-soft"></div>
      )}
    </div>
  )
}
