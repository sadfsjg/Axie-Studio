import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveFlexProps {
  children: React.ReactNode
  className?: string
  direction?: {
    mobile?: "row" | "column" | "row-reverse" | "column-reverse"
    tablet?: "row" | "column" | "row-reverse" | "column-reverse"
    desktop?: "row" | "column" | "row-reverse" | "column-reverse"
  }
  align?: "start" | "center" | "end" | "stretch" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: boolean
  gap?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
}

export function ResponsiveFlex({
  children,
  className,
  direction = {
    mobile: "column",
    tablet: "row",
    desktop: "row",
  },
  align = "start",
  justify = "start",
  wrap = false,
  gap = {
    mobile: 4,
    tablet: 6,
    desktop: 8,
  },
}: ResponsiveFlexProps) {
  // Convert direction values to Tailwind classes
  const directionClasses = {
    mobile: `flex-${direction.mobile}`,
    tablet: `md:flex-${direction.tablet}`,
    desktop: `lg:flex-${direction.desktop}`,
  }

  // Convert align values to Tailwind classes
  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  }

  // Convert justify values to Tailwind classes
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }

  // Convert gap values to Tailwind classes
  const gapClasses = {
    mobile: `gap-${gap.mobile}`,
    tablet: `md:gap-${gap.tablet}`,
    desktop: `lg:gap-${gap.desktop}`,
  }

  return (
    <div
      className={cn(
        "flex",
        directionClasses.mobile,
        directionClasses.tablet,
        directionClasses.desktop,
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
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
