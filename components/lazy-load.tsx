"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface LazyLoadProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  placeholder?: ReactNode
  className?: string
  once?: boolean
}

export function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = "200px 0px",
  placeholder,
  className,
  once = true,
}: LazyLoadProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: once,
  })

  useEffect(() => {
    if (inView) {
      setShouldRender(true)
    }
  }, [inView])

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : placeholder || <div className="min-h-[100px]" />}
    </div>
  )
}
