"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  imagePaths: string[]
}

export function ImagePreloader({ imagePaths }: ImagePreloaderProps) {
  useEffect(() => {
    // Only preload in production
    if (process.env.NODE_ENV !== "production") return

    // Create a hidden container for preloaded images
    const preloadContainer = document.createElement("div")
    preloadContainer.style.display = "none"
    document.body.appendChild(preloadContainer)

    // Preload images
    const preloadedImages = imagePaths.map((path) => {
      const img = new Image()
      img.src = path
      preloadContainer.appendChild(img)
      return img
    })

    // Clean up
    return () => {
      preloadedImages.forEach((img) => img.remove())
      preloadContainer.remove()
    }
  }, [imagePaths])

  // This component doesn't render anything
  return null
}
