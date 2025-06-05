"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Share, Plus, Menu } from "lucide-react"

interface PwaInstallPopupProps {
  onDismiss: () => void
  onInstall: () => void
  installInstructions: "chrome" | "safari" | "android" | "other" | null
}

export function PwaInstallPopup({ onDismiss, onInstall, installInstructions }: PwaInstallPopupProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = installInstructions === "safari" ? 2 : 2

  const getInstructionContent = () => {
    switch (installInstructions) {
      case "safari":
        return (
          <div className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Tryck på <Share className="h-4 w-4 inline text-blue-600" /> dela-ikonen
                  </p>
                </div>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                      <Share className="h-10 w-10 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm font-medium">Tryck på dela-ikonen i nedre delen av skärmen</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Välj <Plus className="h-4 w-4 inline text-blue-600" /> "Lägg till på hemskärmen"
                  </p>
                </div>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                      <Plus className="h-10 w-10 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm font-medium">Scrolla ner och tryck på "Lägg till på hemskärmen"</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )

      case "android":
        return (
          <div className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Tryck på <Menu className="h-4 w-4 inline text-blue-600" /> menyn
                  </p>
                </div>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                      <Menu className="h-10 w-10 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm font-medium">Tryck på menyn (tre prickar) i övre högra hörnet</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Välj "Installera app"</p>
                </div>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                      <Plus className="h-10 w-10 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm font-medium">Tryck på "Installera app" eller "Lägg till på startskärmen"</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )

      case "chrome":
        return (
          <div className="space-y-4 text-center">
            <p className="text-sm text-gray-600 mb-4">Klicka på knappen nedan för att installera appen</p>
            <button
              onClick={onInstall}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Installera Axie Studio
            </button>
          </div>
        )

      default:
        return (
          <div className="space-y-4 text-center">
            <p className="text-sm text-gray-600 mb-4">Installera vår app för en bättre upplevelse</p>
            <button
              onClick={onInstall}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Installera Axie Studio
            </button>
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fadeIn">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl animate-scaleIn">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Installera Axie Studio</h3>
          <button onClick={onDismiss} className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 overflow-hidden rounded-xl">
              <Image src="/icon.png" alt="Axie Studio" width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Axie Studio</p>
              <p className="text-sm text-gray-500">axiestudio.se</p>
            </div>
          </div>

          <div className="mt-6">{getInstructionContent()}</div>

          <div className="mt-6 flex items-center justify-between">
            {(installInstructions === "safari" || installInstructions === "android") && (
              <div className="flex w-full items-center justify-between">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Föregående
                  </button>
                )}

                {currentStep < totalSteps ? (
                  <button
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    className="ml-auto rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Nästa
                  </button>
                ) : (
                  <button
                    onClick={onDismiss}
                    className="ml-auto rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    Klart
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
