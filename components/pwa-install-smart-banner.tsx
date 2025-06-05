"use client"

import { X } from "lucide-react"
import Image from "next/image"

interface PwaInstallSmartBannerProps {
  onDismiss: () => void
  onInstall: () => void
  installInstructions: "chrome" | "safari" | "android" | "other" | null
}

export function PwaInstallSmartBanner({ onDismiss, onInstall, installInstructions }: PwaInstallSmartBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-200 p-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12 overflow-hidden rounded-xl">
          <Image src="/icon.png" alt="Axie Studio" width={48} height={48} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="font-medium text-gray-900">Axie Studio</p>
          <p className="text-xs text-gray-500">Installera vår app för bättre upplevelse</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={onInstall}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Installera
        </button>

        <button onClick={onDismiss} className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
