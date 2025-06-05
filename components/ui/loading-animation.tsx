"use client"

import { motion } from "framer-motion"

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg"
  color?: string
  variant?: "spinner" | "pulse" | "dots"
}

export function LoadingAnimation({ size = "md", color = "blue", variant = "spinner" }: LoadingAnimationProps) {
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }

  const colorMap = {
    blue: "border-blue-500",
    green: "border-green-500",
    red: "border-red-500",
    purple: "border-purple-500",
    gray: "border-gray-500",
  }

  // Spinner variant
  if (variant === "spinner") {
    const circleVariants = {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
        },
      },
    }

    const spinTransition = {
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
      duration: 1.5,
    }

    return (
      <div className="flex items-center justify-center">
        <motion.div
          className={`${sizeMap[size]} rounded-full border-4 border-t-transparent ${colorMap[color as keyof typeof colorMap]}`}
          initial="hidden"
          animate="visible"
          variants={circleVariants}
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
      </div>
    )
  }

  // Pulse variant
  if (variant === "pulse") {
    return (
      <div className="flex items-center justify-center">
        <motion.div
          className={`${sizeMap[size]} rounded-full bg-${color}-500`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    )
  }

  // Dots variant
  if (variant === "dots") {
    const dotSize = size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4"
    const containerSize = size === "sm" ? "w-12" : size === "md" ? "w-20" : "w-28"

    return (
      <div className={`flex items-center justify-center space-x-2 ${containerSize}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`${dotSize} rounded-full bg-${color}-500`}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    )
  }

  // Default fallback
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeMap[size]} rounded-full border-4 border-t-transparent ${colorMap[color as keyof typeof colorMap]}`}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          duration: 1.5,
        }}
      />
    </div>
  )
}
