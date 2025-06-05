"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Share, Plus, Download, ArrowRight, Check } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface PremiumPwaInstallPopupProps {
  onDismiss: () => void
  onInstall: () => void
  installInstructions: "ios" | "android" | "chrome" | "other" | null
}

export function PremiumPwaInstallPopup({ onDismiss, onInstall, installInstructions }: PremiumPwaInstallPopupProps) {
  const { t, language } = useI18n()
  const [currentStep, setCurrentStep] = useState(1)
  const [animateIn, setAnimateIn] = useState(false)
  const [animateOut, setAnimateOut] = useState(false)
  const totalSteps = installInstructions === "ios" ? 2 : 1

  // Animation on mount
  useEffect(() => {
    setAnimateIn(true)
  }, [])

  // Handle dismiss with animation
  const handleDismiss = () => {
    setAnimateOut(true)
    setTimeout(() => {
      onDismiss()
    }, 300)
  }

  const getInstructionContent = () => {
    switch (installInstructions) {
      case "ios":
        return (
          <div className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <p className="text-base font-medium text-gray-800">
                    {language === "SE" ? (
                      <>
                        Tryck på <Share className="h-5 w-5 inline text-blue-600 mx-1" /> dela-ikonen
                      </>
                    ) : (
                      <>
                        Tap the <Share className="h-5 w-5 inline text-blue-600 mx-1" /> share icon
                      </>
                    )}
                  </p>
                </div>
                <div className="relative h-56 w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm max-w-[80%]">
                      <div className="relative w-full h-12 mb-4">
                        <div className="w-full h-1 bg-gray-200 absolute top-6"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full border-2 border-blue-500">
                          <Share className="h-8 w-8 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-800">
                        {language === "SE"
                          ? "Tryck på dela-ikonen i nedre delen av skärmen"
                          : "Tap the share icon at the bottom of the screen"}
                      </p>
                      <div className="mt-3 flex justify-center">
                        <ArrowRight className="h-5 w-5 text-blue-600 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <p className="text-base font-medium text-gray-800">
                    {language === "SE" ? (
                      <>
                        Välj <Plus className="h-5 w-5 inline text-blue-600 mx-1" /> "Lägg till på hemskärmen"
                      </>
                    ) : (
                      <>
                        Select <Plus className="h-5 w-5 inline text-blue-600 mx-1" /> "Add to Home Screen"
                      </>
                    )}
                  </p>
                </div>
                <div className="relative h-56 w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm max-w-[80%]">
                      <div className="flex justify-center mb-4">
                        <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                          <Plus className="h-8 w-8 text-blue-600" />
                          <p className="text-xs font-medium mt-1 text-gray-700">
                            {language === "SE" ? "Lägg till på hemskärmen" : "Add to Home Screen"}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-800">
                        {language === "SE"
                          ? 'Scrolla ner och tryck på "Lägg till på hemskärmen"'
                          : 'Scroll down and tap "Add to Home Screen"'}
                      </p>
                      <div className="mt-3 flex justify-center">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )

      case "android":
      case "chrome":
      case "other":
      default:
        return (
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-50"></div>
                <div className="relative flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full">
                  <Download className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>
            <p className="text-base text-gray-700 mb-4">
              {language === "SE"
                ? "Installera vår app för en bättre upplevelse"
                : "Install our app for a better experience"}
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={onInstall}
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                {language === "SE" ? "Installera App" : "Install App"}
              </button>
              <button
                onClick={handleDismiss}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {language === "SE" ? "Inte nu" : "Not now"}
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300 ${
        animateIn ? "opacity-100" : "opacity-0"
      } ${animateOut ? "opacity-0" : ""}`}
    >
      <div
        className={`w-full max-w-md rounded-xl bg-white p-6 shadow-2xl transition-all duration-300 ${
          animateIn ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } ${animateOut ? "scale-95 opacity-0" : ""}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {language === "SE" ? "Installera Axie Studio" : "Install Axie Studio"}
          </h3>
          <button
            onClick={handleDismiss}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-12 w-12 overflow-hidden rounded-xl">
              <Image src="/icon.png" alt="Axie Studio" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Axie Studio</p>
              <p className="text-sm text-gray-500">axiestudio.se</p>
            </div>
          </div>

          <div className="mt-6">{getInstructionContent()}</div>

          {installInstructions === "ios" && (
            <div className="mt-6 flex items-center justify-between">
              <div className="flex w-full items-center justify-between">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {language === "SE" ? "Föregående" : "Previous"}
                  </button>
                )}

                {currentStep < totalSteps ? (
                  <button
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    className="ml-auto rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-1"
                  >
                    {language === "SE" ? "Nästa" : "Next"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleDismiss}
                    className="ml-auto rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors flex items-center gap-1"
                  >
                    {language === "SE" ? "Klart" : "Done"}
                    <Check className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {installInstructions === "ios" && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                {language === "SE"
                  ? "Efter installation, öppna appen från din hemskärm för bästa upplevelse"
                  : "After installation, open the app from your home screen for the best experience"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
