type DeviceType = "mobile" | "tablet" | "desktop"

/**
 * Detects the current device type based on window width
 * @returns The current device type
 */
export const detectDevice = (): DeviceType => {
  if (typeof window === "undefined") return "desktop" // Default for SSR

  const width = window.innerWidth

  if (width < 640) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}

/**
 * Optimizes image quality based on device type and connection speed
 * @returns The appropriate image quality
 */
export const getOptimalImageQuality = (): "low" | "medium" | "high" => {
  if (typeof window === "undefined") return "high" // Default for SSR

  const device = detectDevice()
  const connection =
    (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

  // If we can detect connection type, optimize based on that
  if (connection) {
    const type = connection.effectiveType

    if (type === "4g") return "high"
    if (type === "3g") return "medium"
    return "low"
  }

  // Otherwise, optimize based on device type
  if (device === "mobile") return "medium"
  return "high"
}

/**
 * Determines if animations should be reduced based on device and user preferences
 * @returns Whether animations should be reduced
 */
export const shouldReduceAnimations = (): boolean => {
  if (typeof window === "undefined") return false // Default for SSR

  // Check user preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (prefersReducedMotion) return true

  // Check device and connection
  const device = detectDevice()
  const connection =
    (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

  if (connection && (connection.effectiveType === "2g" || connection.saveData)) {
    return true
  }

  return false
}

/**
 * Gets the optimal number of items to display in a grid or list based on device
 * @returns The optimal number of items
 */
export const getOptimalItemCount = (): number => {
  const device = detectDevice()

  if (device === "mobile") return 2
  if (device === "tablet") return 4
  return 6
}

/**
 * Applies device-specific CSS classes
 * @returns CSS classes for the current device
 */
export const getDeviceClasses = (): string => {
  const device = detectDevice()

  if (device === "mobile") return "mobile-optimized"
  if (device === "tablet") return "tablet-optimized"
  return "desktop-optimized"
}
