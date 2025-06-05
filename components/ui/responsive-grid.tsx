import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveGridProps {
  children: React.ReactNode
  className?: string
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
}

export function ResponsiveGrid({
  children,
  className,
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  gap = {
    mobile: 4,
    tablet: 6,
    desktop: 8,
  },
}: ResponsiveGridProps) {
  // Convert gap values to Tailwind classes
  const gapClasses = {
    mobile: `gap-${gap.mobile}`,
    tablet: `md:gap-${gap.tablet}`,
    desktop: `lg:gap-${gap.desktop}`,
  }

  // Convert column values to Tailwind grid classes
  const columnClasses = {
    mobile: `grid-cols-${columns.mobile}`,
    tablet: `md:grid-cols-${columns.tablet}`,
    desktop: `lg:grid-cols-${columns.desktop}`,
  }

  return (
    <div
      className={cn(
        "grid w-full",
        columnClasses.mobile,
        columnClasses.tablet,
        columnClasses.desktop,
        gapClasses.mobile,
        gapClasses.tablet,
        gapClasses.desktop,
        className,
      )}
    >
      {children}
    </div>
  )
}
