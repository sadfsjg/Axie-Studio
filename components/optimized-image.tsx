"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { getOptimalImageQuality } from "@/utils/device-optimization"

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  fadeIn?: boolean
  lowQualitySrc?: string
  blurhash?: string
  aspectRatio?: number
  lazyLoad?: boolean
}

export function OptimizedImage({
  src,
  alt,
  className,
  fadeIn = true,
  lowQualitySrc,
  blurhash,
  aspectRatio,
  lazyLoad = true,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [quality, setQuality] = useState(85)
  const imageRef = useRef<HTMLImageElement>(null)

  // Reset state when src changes
  useEffect(() => {
    setIsLoaded(false)
    setError(false)
  }, [src])

  // Set optimal image quality based on device and connection
  useEffect(() => {
    const imageQuality = getOptimalImageQuality()
    if (imageQuality === "low") {
      setQuality(60)
    } else if (imageQuality === "medium") {
      setQuality(75)
    } else {
      setQuality(85)
    }
  }, [])

  // Implement intersection observer for lazy loading
  useEffect(() => {
    if (!lazyLoad || !imageRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When image is in viewport, load it
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
            }
            observer.unobserve(img)
          }
        })
      },
      { rootMargin: "200px 0px" }, // Start loading when image is 200px from viewport
    )

    observer.observe(imageRef.current)

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [lazyLoad])

  // Generate placeholder
  const placeholder = blurhash ? "blur" : "empty"
  const blurDataURL = blurhash || lowQualitySrc

  // Calculate aspect ratio styles
  const aspectRatioStyle = aspectRatio ? { aspectRatio: String(aspectRatio) } : {}

  return (
    <div className={cn("relative overflow-hidden", className)} style={aspectRatioStyle}>
      {/* Low quality placeholder */}
      {!isLoaded && lowQualitySrc && !error && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover absolute inset-0 scale-105 blur-md"
          aria-hidden="true"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      {/* Main image */}
      <Image
        ref={imageRef as any}
        src={error ? "/placeholder.svg" : src}
        alt={alt}
        className={cn("transition-opacity duration-300", fadeIn && !isLoaded ? "opacity-0" : "opacity-100")}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={quality}
        {...props}
      />
    </div>
  )
}
