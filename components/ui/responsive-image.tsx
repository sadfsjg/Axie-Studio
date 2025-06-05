"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { detectDevice, getOptimalImageQuality } from "@/utils/device-optimization"

interface ResponsiveImageProps extends Omit<ImageProps, "src" | "quality"> {
  mobileSrc?: string
  tabletSrc?: string
  desktopSrc: string
  alt: string
  className?: string
  containerClassName?: string
  fadeIn?: boolean
  priority?: boolean
}

export function ResponsiveImage({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  className,
  containerClassName,
  fadeIn = true,
  priority = false,
  ...props
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [src, setSrc] = useState<string>(desktopSrc)
  const [quality, setQuality] = useState<number>(85)

  useEffect(() => {
    // Determine the appropriate image source based on device
    const device = detectDevice()
    if (device === "mobile" && mobileSrc) {
      setSrc(mobileSrc)
    } else if (device === "tablet" && tabletSrc) {
      setSrc(tabletSrc)
    } else {
      setSrc(desktopSrc)
    }

    // Determine optimal image quality
    const imageQuality = getOptimalImageQuality()
    if (imageQuality === "low") {
      setQuality(60)
    } else if (imageQuality === "medium") {
      setQuality(75)
    } else {
      setQuality(85)
    }
  }, [desktopSrc, mobileSrc, tabletSrc])

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        quality={quality}
        className={cn("transition-opacity duration-500", fadeIn && !loaded ? "opacity-0" : "opacity-100", className)}
        onLoad={() => setLoaded(true)}
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        {...props}
      />
    </div>
  )
}
