import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none"
  padding?: "none" | "sm" | "md" | "lg"
  centered?: boolean
}

export function ResponsiveContainer({
  children,
  className,
  maxWidth = "xl",
  padding = "md",
  centered = true,
}: ResponsiveContainerProps) {
  // Max width classes
  const maxWidthClasses = {
    none: "",
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  }

  // Padding classes
  const paddingClasses = {
    none: "",
    sm: "px-3 sm:px-4",
    md: "px-4 sm:px-6 md:px-8",
    lg: "px-6 sm:px-8 md:px-12",
  }

  return (
    <div className={cn("w-full", maxWidthClasses[maxWidth], paddingClasses[padding], centered && "mx-auto", className)}>
      {children}
    </div>
  )
}
