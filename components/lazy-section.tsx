"use client"

import type React from "react"

import { useState, useEffect, type ComponentType, Suspense } from "react"
import { useInView } from "react-intersection-observer"
import { Loader2 } from "lucide-react"

interface LazyLoadProps {
  threshold?: number
  rootMargin?: string
  fallback?: React.ReactNode
}

// Higher-order component for lazy loading sections
export function createLazySection<P extends object>(Component: ComponentType<P>, options: LazyLoadProps = {}) {
  const {
    threshold = 0.1,
    rootMargin = "200px 0px",
    fallback = (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    ),
  } = options

  return function LazyLoadedSection(props: P) {
    const [shouldRender, setShouldRender] = useState(false)
    const { ref, inView } = useInView({
      threshold,
      rootMargin,
      triggerOnce: true,
    })

    useEffect(() => {
      if (inView) {
        setShouldRender(true)
      }
    }, [inView])

    return (
      <div ref={ref}>
        {shouldRender ? (
          <Suspense fallback={fallback}>
            <Component {...props} />
          </Suspense>
        ) : (
          <div className="min-h-[200px]">{fallback}</div>
        )}
      </div>
    )
  }
}
