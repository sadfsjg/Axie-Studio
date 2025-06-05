"use client"

import { useState } from "react"
import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface PremiumPwaInstallPopupProps {
  onClose: () => void
  onInstall: () => Promise<boolean>
  installInstructions: "chrome" | "safari" | "android" | "other" | null
}

export function PremiumPwaInstallPopup({ onClose, onInstall, installInstructions }: PremiumPwaInstallPopupProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = installInstructions === "safari" ? 3 : 2
  const [isInstalling, setIsInstalling] = useState(false)

  const handleInstall = async () => {
    if (installInstructions === "chrome" || installInstructions === "android") {
      setIsInstalling(true)
      const success = await onInstall()
      setIsInstalling(false)
      if (success) {
        onClose()
      }
    }
  }

  const getInstructionContent = () => {
    switch (installInstructions) {
      case "safari":
        return (
          <div className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">1. Tap the share icon in Safari</p>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/ios-safari-add-to-home-screen.png"
                    alt="Tap the share icon in Safari"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">2. Scroll down and tap "Add to Home Screen"</p>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/ios-safari-add-to-home-screen.png"
                    alt="Tap Add to Home Screen"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">3. Tap "Add" in the top right corner</p>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                  <Image src="/ios-safari-add-to-home-screen.png" alt="Tap Add" fill className="object-contain" />
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
                <p className="text-sm text-gray-600">1. Tap the menu (three dots) in Chrome</p>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                  <Image src="/android-pwa-install.png" alt="Tap the menu in Chrome" fill className="object-contain" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">2. Tap "Add to Home screen"</p>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                  <Image src="/android-pwa-install.png" alt="Tap Add to Home screen" fill className="object-contain" />
                </div>
              </div>
            )}
          </div>
        )

      case "chrome":
        return (
          <div className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">1. Click the installation icon in the address bar</p>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/desktop-pwa-installation.png"
                    alt="Click the installation icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">2. Click "Install" in the dialog</p>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
                  <Image src="/desktop-pwa-installation.png" alt="Click Install" fill className="object-contain" />
                </div>
              </div>
            )}
          </div>
        )

      default:
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Install our app for a better experience. Open the page in Chrome or Safari for detailed instructions.
            </p>
          </div>
        )
    }
  }

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Install Axie Studio</DialogTitle>
          <DialogDescription>Get a better experience with our app</DialogDescription>
        </DialogHeader>

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

          <div className="mt-4">{getInstructionContent()}</div>

          <div className="mt-6 flex items-center justify-between">
            {installInstructions === "chrome" || installInstructions === "android" ? (
              <Button onClick={handleInstall} disabled={isInstalling} className="w-full">
                <Download className="mr-2 h-4 w-4" />
                {isInstalling ? "Installing..." : "Install app"}
              </Button>
            ) : (
              <div className="flex w-full items-center justify-between">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={() => setCurrentStep((prev) => prev - 1)}>
                    Previous
                  </Button>
                )}

                {currentStep < totalSteps ? (
                  <Button className="ml-auto" onClick={() => setCurrentStep((prev) => prev + 1)}>
                    Next
                  </Button>
                ) : (
                  <Button className="ml-auto" variant="default" onClick={onClose}>
                    Done
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
