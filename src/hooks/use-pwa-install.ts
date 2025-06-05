"use client"

import { useState, useEffect } from 'react'

export function usePwaInstall() {
  const [canInstall, setCanInstall] = useState(false)
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const handler = (e: BeforeInstallPromptEvent) => {
        e.preventDefault()
        setPromptEvent(e)
        setCanInstall(true)
      }

      window.addEventListener('beforeinstallprompt', handler)

      return () => {
        window.removeEventListener('beforeinstallprompt', handler)
      }
    }
  }, [])

  const promptInstall = async () => {
    if (!promptEvent) return false
    
    try {
      await promptEvent.prompt()
      const { outcome } = await promptEvent.userChoice
      return outcome === 'accepted'
    } catch (err) {
      console.error('PWA installation failed:', err)
      return false
    }
  }

  return {
    canInstall,
    promptInstall
  }
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
  }
}