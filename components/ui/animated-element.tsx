"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import * as animations from "@/lib/animation"

type AnimationType = keyof typeof animations

interface AnimatedElementProps {
  children: ReactNode
  animation: AnimationType | "none"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
  // Additional animation parameters
  direction?: "up" | "down" | "left" | "right"
  type?: "spring" | "tween"
}

export function AnimatedElement({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  threshold = 0.1,
  direction = "up",
  type = "spring",
}: AnimatedElementProps) {
  // Skip animation if "none" is specified
  if (animation === "none") {
    return <div className={className}>{children}</div>
  }

  // Get the animation function
  const animationFn = animations[animation as keyof typeof animations]

  // Handle different animation function signatures
  let variants

  if (animation === "fadeIn") {
    variants = animationFn(direction, delay)
  } else if (animation === "slideIn") {
    variants = animationFn(direction, type, delay, duration)
  } else if (animation.startsWith("slideInFrom")) {
    variants = animationFn(delay, duration)
  } else if (animation === "zoomIn" || animation === "textVariant") {
    variants = animationFn(delay, duration)
  } else if (animation === "staggerContainer") {
    variants = animationFn(0.1, delay)
  } else {
    // Default case
    variants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { delay, duration },
      },
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, threshold }}
      variants={variants}
      className={cn("optimize-gpu", className)}
    >
      {children}
    </motion.div>
  )
}
