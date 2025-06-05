"use client"

import { useEffect } from "react"

export function usePerformanceMonitoring() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return
    }

    // Report Web Vitals
    const reportWebVitals = async () => {
      const { onCLS, onFID, onLCP, onTTFB, onFCP } = await import("web-vitals")

      const sendToAnalytics = ({ name, delta, id }: { name: string; delta: number; id: string }) => {
        // This would normally send to your analytics service
        console.log({ name, delta, id })
      }

      onCLS(sendToAnalytics)
      onFID(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
      onFCP(sendToAnalytics)
    }

    reportWebVitals()

    // Monitor long tasks
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 50) {
              console.warn(`Long task detected: ${entry.duration}ms`, entry)
            }
          })
        })
        observer.observe({ entryTypes: ["longtask"] })
        return () => observer.disconnect()
      } catch (e) {
        console.error("PerformanceObserver for longtask not supported", e)
      }
    }
  }, [])
}
