"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  priority?: boolean
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  priority = false,
}: AnimatedImageProps) {
  // Set initial and animate values based on direction
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: 40 }, animate: { y: 0 } }
      case "down":
        return { initial: { y: -40 }, animate: { y: 0 } }
      case "left":
        return { initial: { x: 40 }, animate: { x: 0 } }
      case "right":
        return { initial: { x: -40 }, animate: { x: 0 } }
      default:
        return { initial: { y: 40 }, animate: { y: 0 } }
    }
  }

  const { initial, animate } = getDirectionValues()

  return (
    <motion.div
      initial={{ ...initial, opacity: 0 }}
      whileInView={{ ...animate, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
      }}
      className={cn("optimize-gpu", className)}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full h-auto", className)}
        priority={priority}
      />
    </motion.div>
  )
}
