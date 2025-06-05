"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LoadingAnimation } from "@/components/ui/loading-animation"

interface EnhancedIframeProps {
  src: string
  title: string
  height?: string | number
  className?: string
  onLoad?: () => void
  loadingMessage?: string
  loadingDuration?: number
  minLoadingTime?: number
}

export function EnhancedIframe({
  src,
  title,
  height = "600px",
  className = "",
  onLoad,
  loadingMessage = "Loading...",
  loadingDuration = 2000, // Minimum time to show loading animation
  minLoadingTime = 800, // Minimum time to show loading animation even if iframe loads faster
}: EnhancedIframeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const loadStartTime = useRef<number>(Date.now())
  const progressInterval = useRef<NodeJS.Timeout | null>(null)

  // Simulate progress for perceived performance
  useEffect(() => {
    if (isLoading) {
      loadStartTime.current = Date.now()

      // Clear any existing interval
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }

      // Start at 0
      setLoadingProgress(0)

      // Simulate progress in a non-linear way to feel more natural
      progressInterval.current = setInterval(() => {
        setLoadingProgress((prev) => {
          // Progress gets slower as it approaches 90%
          const increment = Math.max(0.5, (90 - prev) / 10)
          const newProgress = Math.min(90, prev + increment)
          return newProgress
        })
      }, 100)
    } else {
      // When loaded, jump to 100%
      setLoadingProgress(100)

      // Clear interval
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
        progressInterval.current = null
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
        progressInterval.current = null
      }
    }
  }, [isLoading])

  const handleIframeLoad = () => {
    const loadTime = Date.now() - loadStartTime.current

    // Ensure minimum loading time for better UX
    if (loadTime < minLoadingTime) {
      setTimeout(() => {
        setIsLoading(false)
        if (onLoad) onLoad()
      }, minLoadingTime - loadTime)
    } else {
      setIsLoading(false)
      if (onLoad) onLoad()
    }
  }

  // Intersection Observer to load iframe only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${className}`}
      style={{ height }}
      ref={iframeRef}
    >
      {/* Elegant backdrop pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm z-10"
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Symmetrical loading animation */}
              <div className="relative">
                <LoadingAnimation size="lg" color="blue" />

                {/* Circular progress indicator */}
                <svg className="absolute top-0 left-0 w-16 h-16 -rotate-90">
                  <circle
                    className="text-gray-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="32"
                    cy="32"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="4"
                    strokeDasharray={188.5}
                    strokeDashoffset={188.5 - (188.5 * loadingProgress) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="32"
                    cy="32"
                  />
                </svg>
              </div>

              {/* Loading message with progress */}
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">{loadingMessage}</p>
                <p className="text-xs text-gray-500 mt-1">{Math.round(loadingProgress)}%</p>
              </div>

              {/* Horizontal progress bar */}
              <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Only render iframe when in viewport */}
      {isVisible && (
        <iframe
          src={src}
          title={title}
          className={`w-full h-full transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={handleIframeLoad}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  )
}
