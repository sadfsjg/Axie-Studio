"use client"

import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function useResponsive() {
  const isMobileQuery = useMediaQuery("(max-width: 640px)")
  const isTabletQuery = useMediaQuery("(min-width: 641px) and (max-width: 1024px)")
  const isDesktopQuery = useMediaQuery("(min-width: 1025px)")

  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Only update state on client side
    setIsMobile(isMobileQuery)
    setIsTablet(isTabletQuery)
    setIsDesktop(isDesktopQuery)
  }, [isMobileQuery, isTabletQuery, isDesktopQuery])

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}
