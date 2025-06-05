"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Smartphone } from "lucide-react"
import { fadeIn, slideIn } from "@/lib/animation"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import Image from "next/image"
import { useState, useEffect } from "react"

export function DownloadAppSection() {
  const { promptInstall, canInstall } = usePwaInstall()
  const [buttonText, setButtonText] = useState("Ladda ner nu")
  const [isInstalling, setIsInstalling] = useState(false)
  const [installSuccess, setInstallSuccess] = useState(false)
  const [installError, setInstallError] = useState(false)

  useEffect(() => {
    if (canInstall) {
      setButtonText("Installera App")
    }
  }, [canInstall])

  const handleDownloadClick = async () => {
    setIsInstalling(true)
    setInstallError(false)
    setInstallSuccess(false)

    try {
      // Add timeout for installation
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Installation timeout')), 10000)
      )
      
      const success = await Promise.race([
        promptInstall(),
        timeoutPromise
      ])
      
      if (success) {
        setInstallSuccess(true)
        setTimeout(() => setInstallSuccess(false), 3000)
      }
    } catch (error) {
      console.error("PWA installation failed:", error)
      setInstallError(true)
      // Fallback: show manual installation modal
      const installModal = document.getElementById("pwa-install-modal")
      if (installModal) {
        installModal.classList.remove("hidden")
      }
    } finally {
      setIsInstalling(false)
    }
  }

  return (
    <section id="download-app" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Boka enkelt var du än är med vår app</h2>
              <p className="text-lg text-slate-700">
                Med vår mobilapp kan du enkelt boka, omboka och avboka tider direkt från din telefon. Få påminnelser och
                håll koll på dina kommande bokningar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleDownloadClick}
                  disabled={isInstalling}
                  className="rounded-full bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 group-hover:scale-105 transition-transform duration-300"></span>
                  <span className="relative flex items-center">
                    {isInstalling ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Download className="mr-2 h-5 w-5 animate-bounce" />
                    )}
                    {isInstalling ? "Installerar..." : buttonText}
                  </span>
                </Button>
                {installSuccess && (
                  <div className="text-green-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Appen installerad!
                  </div>
                )}
                {installError && (
                  <div className="text-red-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Installation misslyckades
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              variants={slideIn("left", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto max-w-[300px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-[40px] blur-xl transform rotate-6 scale-105"></div>
                <div className="relative bg-white p-4 rounded-[32px] shadow-2xl border-4 border-slate-200/50 overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/axie-studio-logo.png"
                      alt="Axie Studio Logo"
                      width={200}
                      height={200}
                      className="w-3/4 h-auto"
                    />
                  </div>
                </div>

                <div className="absolute -right-4 -bottom-4 bg-white p-3 rounded-full shadow-lg border border-slate-200">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hidden modal for installation instructions */}
      <div
        id="pwa-install-modal"
        className="hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      >
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <h3 className="text-xl font-bold mb-4">Installera Axie Studio App</h3>
          <p className="mb-4">För att installera appen på din enhet:</p>
          <ol className="list-decimal pl-5 mb-6 space-y-2">
            <li>Öppna denna webbplats i Safari (iOS) eller Chrome (Android)</li>
            <li>Tryck på "Dela" ikonen</li>
            <li>Välj "Lägg till på hemskärmen" eller "Installera app"</li>
          </ol>
          <Button
            onClick={() => {
              const modal = document.getElementById("pwa-install-modal")
              if (modal) modal.classList.add("hidden")
            }}
            className="w-full"
          >
            Stäng
          </Button>
        </div>
      </div>
    </section>
  )
}
