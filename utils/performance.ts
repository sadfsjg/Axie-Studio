/**
 * Utility functions for performance optimization
 */

// Debounce function to limit how often a function can be called
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function to limit the rate at which a function can fire
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Detect if the device has reduced motion preference
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Detect if the device is a low-end device
export function isLowEndDevice(): boolean {
  if (typeof navigator === "undefined") return false

  // Check for hardware concurrency (CPU cores)
  const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4

  // Check for device memory (if available)
  const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4

  return lowCPU || lowMemory
}

// Optimize animations based on device capabilities
export function getOptimizedAnimationSettings() {
  const reducedMotion = prefersReducedMotion()
  const lowEndDevice = isLowEndDevice()

  if (reducedMotion || lowEndDevice) {
    return {
      duration: 0.2,
      staggerChildren: 0.05,
      disableEffects: true,
    }
  }

  return {
    duration: 0.5,
    staggerChildren: 0.1,
    disableEffects: false,
  }
}

// Lazy load images with Intersection Observer
export function setupLazyLoading() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return

  const lazyImages = document.querySelectorAll("img.lazy")

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      }
    })
  })

  lazyImages.forEach((img) => imageObserver.observe(img))
}
