"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EnhancedIframeProps {
  src: string
  title: string
  height?: string | number
  className?: string
  showHeader?: boolean
  headerTitle?: string
}

export function EnhancedIframe({
  src,
  title,
  height = 600,
  className = "",
  showHeader = true,
  headerTitle,
}: EnhancedIframeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to reload the iframe
  const reloadIframe = () => {
    setIsLoading(true)
    setLoadingProgress(0)
    setError(null)

    if (iframeRef.current) {
      iframeRef.current.src = src
    }

    startLoadingAnimation()
  }

  // Start loading animation with simulated progress
  const startLoadingAnimation = () => {
    // Clear any existing intervals
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }

    // Simulate progress
    progressIntervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        // Slow down progress as it gets closer to 90%
        const increment = prev < 30 ? 5 : prev < 60 ? 3 : prev < 80 ? 1 : 0.5
        const newProgress = Math.min(prev + increment, 90)
        return newProgress
      })
    }, 100)

    // Ensure minimum loading time for better UX
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
    }
  }

  useEffect(() => {
    startLoadingAnimation()

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
    }
  }, [src])

  const handleIframeLoad = () => {
    // Ensure a minimum loading time of 1 second for better UX
    loadingTimeoutRef.current = setTimeout(() => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }

      // Complete the progress animation
      setLoadingProgress(100)

      // After progress bar completes, hide loading screen
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }, 1000)
  }

  const handleIframeError = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }
    setError("Det gick inte att ladda innehållet. Vänligen försök igen.")
  }

  return (
    <div className={`enhanced-iframe-container relative rounded-xl overflow-hidden ${className}`} style={{ height }}>
      {/* Header */}
      {showHeader && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 flex items-center justify-between">
          <h3 className="font-medium">{headerTitle || title}</h3>
          <Button variant="ghost" size="sm" onClick={reloadIframe} className="text-white hover:bg-blue-700/50">
            <RefreshCw className="h-4 w-4 mr-1" />
            <span className="text-sm">Uppdatera</span>
          </Button>
        </div>
      )}

      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm z-10 flex flex-col items-center justify-center"
          >
            {error ? (
              <div className="text-center p-6">
                <div className="text-red-500 mb-4">{error}</div>
                <Button onClick={reloadIframe} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Försök igen
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-6 p-6">
                {/* Symmetrical loading spinner */}
                <div className="relative w-16 h-16">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-blue-100 dark:border-blue-900"></div>

                  {/* Progress ring */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-blue-100 dark:text-blue-900"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="48"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-blue-500 dark:text-blue-400"
                      strokeWidth="4"
                      strokeDasharray={300}
                      strokeDashoffset={300 - (loadingProgress / 100) * 300}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="48"
                      cx="50"
                      cy="50"
                    />
                  </svg>

                  {/* Center pulsing dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Loading text */}
                <div className="text-center">
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    Laddar {Math.round(loadingProgress)}%
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    {loadingProgress < 30
                      ? "Förbereder innehåll..."
                      : loadingProgress < 70
                        ? "Hämtar data..."
                        : "Nästan klar..."}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Iframe */}
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="w-full h-full border-0"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        style={{ height: showHeader ? `calc(100% - 48px)` : "100%" }}
      />
    </div>
  )
}
