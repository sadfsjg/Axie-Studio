import type React from "react"
import { cn } from "@/lib/utils"

interface DeviceVisibilityProps {
  children: React.ReactNode
  className?: string
  hideOnMobile?: boolean
  hideOnTablet?: boolean
  hideOnDesktop?: boolean
  showOnlyOn?: "mobile" | "tablet" | "desktop" | "mobile-tablet" | "tablet-desktop"
}

export function DeviceVisibility({
  children,
  className,
  hideOnMobile = false,
  hideOnTablet = false,
  hideOnDesktop = false,
  showOnlyOn,
}: DeviceVisibilityProps) {
  // Handle showOnlyOn prop (takes precedence over hide props)
  if (showOnlyOn) {
    switch (showOnlyOn) {
      case "mobile":
        return <div className={cn("block md:hidden", className)}>{children}</div>
      case "tablet":
        return <div className={cn("hidden md:block lg:hidden", className)}>{children}</div>
      case "desktop":
        return <div className={cn("hidden lg:block", className)}>{children}</div>
      case "mobile-tablet":
        return <div className={cn("block lg:hidden", className)}>{children}</div>
      case "tablet-desktop":
        return <div className={cn("hidden md:block", className)}>{children}</div>
    }
  }

  // Handle hide props
  const visibilityClasses = cn(
    hideOnMobile && "hidden sm:block",
    hideOnTablet && "sm:hidden md:block",
    hideOnDesktop && "md:hidden",
    className,
  )

  return <div className={visibilityClasses}>{children}</div>
}
