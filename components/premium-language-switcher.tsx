"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguageSwitcher } from "@/lib/language-utils"
import { saveLanguagePreference } from "@/lib/language-persistence"
import { cn } from "@/lib/utils"
import { Globe } from "lucide-react"
import { setLanguageCookie } from "@/lib/language-cookie"

export function PremiumLanguageSwitcher() {
  const { currentLanguage, isTransitioning, switchLanguage } = useLanguageSwitcher()
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Reset interaction state when transitioning completes
  useEffect(() => {
    if (!isTransitioning && hasInteracted) {
      const timer = setTimeout(() => {
        setHasInteracted(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning, hasInteracted])

  // Handle language switch with visual feedback
  const handleLanguageSwitch = (lang: "sv" | "en") => {
    if (currentLanguage !== lang) {
      setHasInteracted(true)
      switchLanguage(lang)

      // Save user preference in both localStorage and cookie
      saveLanguagePreference(lang)
      setLanguageCookie(lang)
    }
  }

  // Toggle expanded state on mobile
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative z-50">
      {/* Desktop version */}
      <div
        className="hidden md:flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 px-1 py-0.5 transition-all duration-300 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => handleLanguageSwitch("sv")}
          className={cn(
            "relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
            currentLanguage === "sv"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
          )}
          disabled={isTransitioning}
          aria-label="Byt till svenska"
        >
          <span className="relative z-10">SV</span>
          {currentLanguage === "sv" && (
            <motion.div
              className="absolute inset-0 bg-blue-50 rounded-full"
              layoutId="languageIndicator"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>

        <div className="h-4 w-px bg-gray-200 mx-0.5" />

        <button
          onClick={() => handleLanguageSwitch("en")}
          className={cn(
            "relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
            currentLanguage === "en"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
          )}
          disabled={isTransitioning}
          aria-label="Switch to English"
        >
          <span className="relative z-10">EN</span>
          {currentLanguage === "en" && (
            <motion.div
              className="absolute inset-0 bg-blue-50 rounded-full"
              layoutId="languageIndicator"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>

        {/* Hover effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <button
          onClick={toggleExpanded}
          className="flex items-center space-x-1 px-2 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
          aria-expanded={isExpanded}
          aria-haspopup="true"
        >
          <Globe className="h-4 w-4" />
          <span>{currentLanguage === "sv" ? "SV" : "EN"}</span>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute mt-1 right-0 w-32 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => {
                  handleLanguageSwitch("sv")
                  setIsExpanded(false)
                }}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm",
                  currentLanguage === "sv" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50",
                )}
              >
                Svenska
              </button>
              <button
                onClick={() => {
                  handleLanguageSwitch("en")
                  setIsExpanded(false)
                }}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm",
                  currentLanguage === "en" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50",
                )}
              >
                English
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Transition indicator */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
