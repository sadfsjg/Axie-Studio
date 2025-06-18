"use client"

import type { Variants } from "framer-motion"

// Fade in animation
export const fadeIn = (direction: string, delay: number): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  }
}

// Slide in animation
export const slideIn = (direction: string, type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  }
}

// Slide in from left animation (commonly used shorthand)
export const slideInFromLeft = (delay = 0, duration = 0.5): Variants => {
  return {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
        ease: "easeOut",
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  }
}

// Slide in from right animation (commonly used shorthand)
export const slideInFromRight = (delay = 0, duration = 0.5): Variants => {
  return {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
        ease: "easeOut",
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  }
}

// Slide in from top animation (commonly used shorthand)
export const slideInFromTop = (delay = 0, duration = 0.5): Variants => {
  return {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
        ease: "easeOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  }
}

// Slide in from bottom animation (commonly used shorthand)
export const slideInFromBottom = (delay = 0, duration = 0.5): Variants => {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
        ease: "easeOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  }
}

// Stagger container
export const staggerContainer = (staggerChildren: number, delayChildren: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}

// Zoom in animation
export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  }
}

// Text variant
export const textVariant = (delay: number): Variants => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  }
}

// Float animation
export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "loop",
  },
}