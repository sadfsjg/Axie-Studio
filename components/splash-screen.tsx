"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if running as PWA
    const isPWA = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true

    // Only show splash screen in PWA mode
    if (!isPWA) {
      setIsVisible(false)
      return
    }

    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-64 h-64"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg"
              alt="Axie Studio"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-xl font-medium text-blue-600 dark:text-blue-400"
          >
            Build, Book, Automate
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
