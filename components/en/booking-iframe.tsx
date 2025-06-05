"use client"

import { useState } from "react"
import { EnhancedIframe } from "@/components/en/enhanced-iframe"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, RefreshCw } from "lucide-react"

interface BookingIframeProps {
  src: string
  title?: string
  height?: string | number
  className?: string
}

export function BookingIframe({
  src,
  title = "Booking Calendar",
  height = "700px",
  className = "",
}: BookingIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isReloading, setIsReloading] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleReload = () => {
    setIsReloading(true)
    setIsLoaded(false)

    // Reset after a short delay to trigger reload animation
    setTimeout(() => {
      setIsReloading(false)
    }, 100)
  }

  return (
    <div className={`booking-container ${className}`}>
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        </div>

        <div className="flex items-center space-x-2">
          {isLoaded && !hasError && (
            <span className="flex items-center text-sm text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Calendar loaded</span>
            </span>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={handleReload}
            className="text-gray-600 hover:text-blue-600"
            disabled={isReloading}
          >
            <RefreshCw className={`w-4 h-4 mr-1 ${isReloading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </Button>
        </div>
      </div>

      {!isReloading && (
        <EnhancedIframe
          src={src}
          title={title}
          height={height}
          className="w-full"
          onLoad={handleLoad}
          loadingMessage="Loading booking calendar..."
        />
      )}
    </div>
  )
}
