import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveTypographyProps {
  children: React.ReactNode
  as?: React.ElementType
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "large"
  className?: string
  responsive?: boolean
}

export function ResponsiveTypography({
  children,
  as: Component = "p",
  variant = "p",
  className,
  responsive = true,
}: ResponsiveTypographyProps) {
  // Define typography variants with responsive scaling
  const variants = {
    h1: "text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl tracking-tight",
    h2: "text-2xl font-bold sm:text-3xl md:text-4xl tracking-tight",
    h3: "text-xl font-bold sm:text-2xl md:text-3xl tracking-tight",
    h4: "text-lg font-bold sm:text-xl md:text-2xl tracking-tight",
    h5: "text-base font-bold sm:text-lg md:text-xl tracking-tight",
    h6: "text-sm font-bold sm:text-base md:text-lg tracking-tight",
    p: "text-base sm:text-base md:text-lg",
    small: "text-xs sm:text-sm md:text-base",
    large: "text-lg sm:text-xl md:text-2xl",
  }

  // Non-responsive variants (for specific cases)
  const staticVariants = {
    h1: "text-4xl font-bold tracking-tight",
    h2: "text-3xl font-bold tracking-tight",
    h3: "text-2xl font-bold tracking-tight",
    h4: "text-xl font-bold tracking-tight",
    h5: "text-lg font-bold tracking-tight",
    h6: "text-base font-bold tracking-tight",
    p: "text-base",
    small: "text-sm",
    large: "text-lg",
  }

  return (
    <Component className={cn(responsive ? variants[variant] : staticVariants[variant], className)}>
      {children}
    </Component>
  )
}
