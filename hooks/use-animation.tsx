"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Hook to trigger animations when element is in view
export function useAnimateInView(threshold = 0.1) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  return { ref, isInView }
}

// Hook to delay animation start
export function useDelayedAnimation(delay = 0) {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return shouldAnimate
}

// Hook to stagger animations of multiple elements
export function useStaggeredAnimation(count: number, staggerDelay = 0.1) {
  return Array.from({ length: count }).map((_, i) => i * staggerDelay)
}
