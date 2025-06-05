"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface GoogleCalendarPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function GoogleCalendarPopup({ isOpen, onClose }: GoogleCalendarPopupProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Reset iframe loaded state when dialog opens
      setIframeLoaded(false)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-4 flex flex-row items-center justify-between">
          <DialogTitle>Boka en tid som passar dig</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
            <span className="sr-only">Stäng</span>
          </Button>
        </DialogHeader>
        <div className="relative w-full h-full min-h-[500px] bg-gray-100">
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}
          <iframe
            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0QR3uRxVB7rb4ZHqJ1qYmz-T0e2CFtV5MYekvGDq1qyWxsV_Av3nP3zEGk0DrH2HqpTLoXuK0h"
            frameBorder="0"
            scrolling="yes"
            className="w-full h-full"
            onLoad={() => setIframeLoaded(true)}
            title="Boka konsultation"
            allow="fullscreen"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
