"use client"

import { useEffect, useState } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { X, Download, CheckCircle } from "lucide-react"
import Image from "next/image"

export function DirectPwaInstall() {
  const { canInstall, promptInstall, isInstalled, installInstructions } = usePwaInstall()
  const [showInstallPopup, setShowInstallPopup] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [hasAutoPrompted, setHasAutoPrompted] = useState(false)
  const [installSuccess, setInstallSuccess] = useState(false)
  const [installAttempted, setInstallAttempted] = useState(false)

  useEffect(() => {
    // Show floating button after 1.5 seconds if the app can be installed
    if (canInstall && !isInstalled) {
      const timer = setTimeout(() => {
        setShowFloatingButton(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [canInstall, isInstalled])

  useEffect(() => {
    // Auto-prompt installation on first eligible visit
    if (canInstall && !isInstalled && !hasAutoPrompted) {
      const timer = setTimeout(() => {
        setShowInstallPopup(true)
        setHasAutoPrompted(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [canInstall, isInstalled, hasAutoPrompted])

  // Don't show anything if already installed
  if (isInstalled) return null

  const handleInstallClick = async () => {
    setInstallAttempted(true)
    const success = await promptInstall()
    
    if (success) {
      setInstallSuccess(true)
      setTimeout(() => {
        setShowInstallPopup(false)
      }, 1000)
    }
  }

  return (
    <>
      {/* Floating install button */}
      {showFloatingButton && !installSuccess && (
        <div className="fixed bottom-6 right-6 z-40 flex animate-fadeIn items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg transition-all hover:bg-blue-700">
          <button onClick={() => setShowInstallPopup(true)} className="flex items-center gap-2 text-sm font-medium">
            <Download className="h-4 w-4" />
            Install app
          </button>
        </div>
      )}

      {/* Enhanced Install popup */}
      {showInstallPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Header */}
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

            <div className="p-6">
              {/* App info section */}
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-xl shadow-md">
                  <Image
                    src="/icon.png"
                    alt="Axie Studio"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Axie Studio</p>
                  <p className="text-sm text-gray-500">axiestudio.se • Booking System</p>
                  <div className="mt-1 flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">5.0</span>
                  </div>
                </div>
              </div>

              {/* Device mockup */}
              <div className="mb-6 overflow-hidden rounded-lg bg-gray-100 p-2">
                <div className="relative mx-auto w-full max-w-[280px]">
                  <div className="relative rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
                    <div className="absolute -top-1 left-1/2 h-4 w-20 -translate-x-1/2 rounded-b-lg bg-gray-800"></div>
                    <Image
                      src="/axie-studio-booking.png"
                      alt="Axie Studio App Preview"
                      width={280}
                      height={500}
                      className="rounded-lg"
                    />
                    <div className="absolute bottom-4 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full border border-gray-300 bg-white"></div>
                  </div>
                </div>
              </div>

              {/* Benefits section */}
              <div className="mb-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                  <p className="text-sm text-gray-700">Faster access to the booking system</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                  <p className="text-sm text-gray-700">Works even when offline</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                  <p className="text-sm text-gray-700">Direct access from your home screen</p>
                </div>
              </div>

              {/* Install button - make it more prominent */}
              <button
                onClick={handleInstallClick}
                disabled={installSuccess}
                className={`mt-2 flex w-full items-center justify-center gap-2 rounded-lg ${
                  installSuccess ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
                } px-4 py-4 text-lg font-bold text-white transition`}
              >
                {installSuccess ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Installed!
                  </>
                ) : installAttempted && installInstructions === "ios" ? (
                  "Follow the instructions above"
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    Install Now
                  </>
                )}
              </button>

              {/* iOS specific instructions */}
              {installInstructions === "ios" && installAttempted && (
                <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <h4 className="mb-2 font-medium text-blue-800">To install on iOS:</h4>
                  <ol className="ml-5 list-decimal space-y-2 text-sm text-blue-700">
                    <li>Tap the <span className="inline-flex items-center rounded bg-gray-200 px-1">Share <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.68 13.313a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0l2.25-2.25a.75.75 0 0 0 0-1.06l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97H3.75a.75.75 0 0 0 0 1.5h5.94l-.97.97Z" fill="currentColor"/><path d="M12.75 3.75a.75.75 0 0 0-1.5 0v.75c0 .414.336.75.75.75h7.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0-.75.75v.75a.75.75 0 0 0 1.5 0 .75.75 0 0 0 .75-.75h7.5A2.25 2.25 0 0 0 21 18v-12a2.25 2.25 0 0 0-2.25-2.25h-6Z" fill="currentColor"/></svg></span> icon in Safari</li>
                    <li>Scroll down and tap <strong>Add to Home Screen</strong></li>
                    <li>Tap <strong>Add</strong> in the top right corner</li>
                  </ol>
                </div>
              )}

              {/* Trust badge */}
              <div className="mt-4 flex items-center justify-center gap-1 text-xs text-gray-500">
                <svg className="h-4 w-4 fill-current text-gray-400" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                <span>Secure installation • No app store required</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}