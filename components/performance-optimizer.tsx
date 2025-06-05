"use client"

import { useEffect } from "react"
import { useResponsive } from "@/hooks/use-responsive"

export function PerformanceOptimizer() {
  const { isMobile, isTablet } = useResponsive()

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Optimize animations based on device
    const optimizeAnimations = () => {
      if (isMobile || isTablet) {
        document.documentElement.style.setProperty("--animation-duration", "0.2s")
      } else {
        document.documentElement.style.setProperty("--animation-duration", "0.3s")
      }
    }

    // Run optimizations
    optimizeAnimations()

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      document.documentElement.classList.add("reduce-motion")
    }
  }, [isMobile, isTablet])

  return null
}
