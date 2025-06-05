export const isIOS = (): boolean => {
  if (typeof window === "undefined") return false

  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  )
}

export const isAndroid = (): boolean => {
  if (typeof window === "undefined") return false

  return /Android/.test(navigator.userAgent)
}

export const isMobile = (): boolean => {
  if (typeof window === "undefined") return false

  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    navigator.maxTouchPoints > 0
  )
}

export const isStandalone = (): boolean => {
  if (typeof window === "undefined") return false

  return window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone === true
}

export const isSafari = (): boolean => {
  if (typeof window === "undefined") return false

  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}

export const isChrome = (): boolean => {
  if (typeof window === "undefined") return false

  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

export const isFirefox = (): boolean => {
  if (typeof window === "undefined") return false

  return /Firefox/.test(navigator.userAgent)
}

export const isInstallPromptSupported = (): boolean => {
  return typeof window !== "undefined" && "BeforeInstallPromptEvent" in window
}

export const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
  if (typeof window === "undefined") return "desktop"

  const userAgent = navigator.userAgent

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return "tablet"
  }

  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      userAgent,
    )
  ) {
    return "mobile"
  }

  return "desktop"
}
