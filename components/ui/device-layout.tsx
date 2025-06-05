"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { detectDevice } from "@/utils/device-optimization"

interface DeviceLayoutProps {
  children: React.ReactNode
  mobileLayout?: React.ReactNode
  tabletLayout?: React.ReactNode
  desktopLayout?: React.ReactNode
  className?: string
}

export function DeviceLayout({ children, mobileLayout, tabletLayout, desktopLayout, className }: DeviceLayoutProps) {
  const [currentDevice, setCurrentDevice] = useState<"mobile" | "tablet" | "desktop">("desktop")

  useEffect(() => {
    // Set initial device
    setCurrentDevice(detectDevice())

    // Update on resize
    const handleResize = () => {
      setCurrentDevice(detectDevice())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Render device-specific layout if provided, otherwise render children
  if (currentDevice === "mobile" && mobileLayout) {
    return <div className={cn("device-layout mobile-layout", className)}>{mobileLayout}</div>
  }

  if (currentDevice === "tablet" && tabletLayout) {
    return <div className={cn("device-layout tablet-layout", className)}>{tabletLayout}</div>
  }

  if (currentDevice === "desktop" && desktopLayout) {
    return <div className={cn("device-layout desktop-layout", className)}>{desktopLayout}</div>
  }

  // Default layout
  return <div className={cn("device-layout", `${currentDevice}-layout`, className)}>{children}</div>
}
