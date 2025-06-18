"use client"

import type React from "react"
import { ServiceWorkerRegistration } from "@/app/service-worker"
import { PwaInstallDetector } from "@/components/pwa-install-detector"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceWorkerRegistration />
      <PwaInstallDetector />
    </>
  )
}