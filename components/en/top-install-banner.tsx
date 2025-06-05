"use client"

interface TopInstallBannerProps {
  onInstall: () => void
  onDismiss: () => void
}

export function TopInstallBanner({ onInstall, onDismiss }: TopInstallBannerProps) {
  // Always return null since we're using the popup approach instead
  return null
}
