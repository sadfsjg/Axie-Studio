"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string | ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  delay?: number
  duration?: number
  itemProp?: string
}

export function AnimatedText({
  text,
  className,
  as: Component = "div",
  delay = 0.1,
  duration = 0.05,
  itemProp,
}: AnimatedTextProps) {
  // If text is a ReactNode, render it directly with animation
  if (typeof text !== "string") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={className}
        itemProp={itemProp}
      >
        {text}
      </motion.div>
    )
  }

  // For string text, animate each word
  const words = text.split(" ")

  // Variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("optimize-gpu", className)}
      itemProp={itemProp}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ display: "inline-block", marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}