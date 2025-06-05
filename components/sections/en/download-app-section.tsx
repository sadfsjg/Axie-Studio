"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DownloadAppSectionEn() {
  const { canInstall, promptInstall } = usePwaInstall()
  const [isInstalling, setIsInstalling] = useState(false)
  const [showIosInstructions, setShowIosInstructions] = useState(false)

  const handleDownloadClick = async () => {
    if (!canInstall) {
      // iOS devices
      setShowIosInstructions(true)
      return
    }

    try {
      setIsInstalling(true)
      await promptInstall()
    } catch (error) {
      console.error("PWA installation failed:", error)
    } finally {
      setIsInstalling(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Download our app and book easily wherever you are
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With our app, you can easily book appointments, receive reminders, and manage your bookings directly
                from your mobile. Available for Android.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={handleDownloadClick}
                disabled={isInstalling}
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 group-hover:scale-105 transition-transform duration-300"></span>
                <span className="relative flex items-center">
                  {isInstalling ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Download className="mr-2 h-5 w-5 animate-bounce" />
                  )}
                  {isInstalling ? "Installing..." : "Download Now"}
                </span>
              </Button>

              <Dialog open={showIosInstructions} onOpenChange={setShowIosInstructions}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Install App on iOS</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p>To install this app on your iPhone or iPad:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Tap the Share button in Safari</li>
                      <li>Select "Add to Home Screen"</li>
                      <li>Tap "Add" in the top right corner</li>
                    </ol>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur-md opacity-25" />
              <Card className={cn("relative border-0 bg-white/80 backdrop-blur-sm")}>
                <CardContent className="p-6">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="/images/axie-studio-logo.png"
                      alt="Axie Studio App"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
