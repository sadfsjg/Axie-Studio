"use client"

import { useState, useEffect } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingInstallButton() {
  const { canInstall, promptInstall, isInstalled } = usePwaInstall()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button if installation is possible
    if (canInstall && !isInstalled) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [canInstall, isInstalled])

  if (!isVisible) return null

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={promptInstall}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
    >
      <Download className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
        NEW
      </span>

      {/* Pulsing effect */}
      <span className="absolute inset-0 rounded-full bg-blue-600 opacity-30 animate-ping"></span>
    </motion.button>
  )
}
