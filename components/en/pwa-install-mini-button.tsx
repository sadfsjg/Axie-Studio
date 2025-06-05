"use client"

import { Download } from "lucide-react"

interface PwaInstallMiniButtonProps {
  onClick: () => void
}

export function PwaInstallMiniButton({ onClick }: PwaInstallMiniButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
      aria-label="Install app"
    >
      <Download className="h-6 w-6" />
    </button>
  )
}
