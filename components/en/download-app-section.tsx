"use client"

import { useState } from "react"
import Image from "next/image"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { Download, Smartphone, X } from "lucide-react"

export function DownloadAppSection() {
  const { canInstall, isInstalled, promptInstall, installInstructions } = usePwaInstall()
  const [showInstallPopup, setShowInstallPopup] = useState(false)

  const handleInstallClick = () => {
    setShowInstallPopup(true)
  }

  if (isInstalled) {
    return null // Don't show if already installed
  }

  return (
    <section
      id="download-app"
      className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-16 md:py-20 text-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-12">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold leading-tight">
              Get Axie Studio <span className="text-yellow-300">directly on your device</span>
            </h2>
            <p className="mb-6 md:mb-8 text-base md:text-lg text-white/90 max-w-md mx-auto md:mx-0">
              Install our app for faster access, offline functionality, and a smoother experience. No app store
              downloads required!
            </p>

            {canInstall && (
              <button
                onClick={handleInstallClick}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-6 py-3 md:px-8 md:py-4 font-semibold text-blue-700 shadow-lg transition-all hover:shadow-xl mx-auto md:mx-0"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"></span>
                <Download className="relative z-10 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110" />
                <span className="relative z-10">Install Axie Studio</span>
              </button>
            )}

            {!canInstall && (
              <button
                onClick={() => setShowInstallPopup(true)}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-6 py-3 md:px-8 md:py-4 font-semibold text-blue-700 shadow-lg transition-all hover:shadow-xl mx-auto md:mx-0"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"></span>
                <Smartphone className="relative z-10 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110" />
                <span className="relative z-10">Show Installation Guide</span>
              </button>
            )}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-white/10 blur-xl"></div>
            <div className="relative flex h-64 w-64 md:h-80 md:w-80 items-center justify-center rounded-full bg-white/5 p-4 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-full animate-pulse rounded-full bg-white/5"></div>
              </div>
              <div className="relative flex h-52 w-52 md:h-64 md:w-64 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                <Image
                  src="/icon.png"
                  alt="Axie Studio App"
                  width={140}
                  height={140}
                  className="rounded-2xl shadow-lg transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showInstallPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-5 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Install Axie Studio</h3>
                <button
                  onClick={() => setShowInstallPopup(false)}
                  className="rounded-full bg-white/10 p-1.5 text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 overflow-hidden rounded-xl shadow-md">
                  <Image
                    src="/icon.png"
                    alt="Axie Studio"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Axie Studio</p>
                  <p className="text-sm text-gray-500">axiestudio.se</p>
                </div>
              </div>

              <button
                onClick={() => {
                  promptInstall()
                  setShowInstallPopup(false)
                }}
                className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Install Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
