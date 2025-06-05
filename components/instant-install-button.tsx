"use client"

import { useState, useEffect } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { Download } from "lucide-react"

export function InstantInstallButton() {
  const { canInstall, promptInstall, isInstalled } = usePwaInstall()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Show button immediately if installation is possible
    if (canInstall && !isInstalled) {
      setShowButton(true)
    }
  }, [canInstall, isInstalled])

  if (!showButton) return null

  return (
    <button
      onClick={promptInstall}
      className="group relative flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700"
    >
      <span className="absolute -right-1 -top-1 flex h-5 w-5 animate-ping items-center justify-center rounded-full bg-red-500"></span>
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
        NY
      </span>
      <Download className="h-5 w-5" />
      <span>Installera appen</span>
      <span className="ml-1 rounded bg-white/20 px-1.5 py-0.5 text-xs">Snabb</span>
    </button>
  )
}
