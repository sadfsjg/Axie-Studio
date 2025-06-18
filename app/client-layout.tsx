"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader as EnSiteHeader } from "@/components/en/site-header"
import { SiteFooter as EnSiteFooter } from "@/components/en/site-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ServiceWorkerRegistration } from "./service-worker"
import { AutoInstallPwa } from "@/components/auto-install-pwa"
import { DirectPwaInstall } from "@/components/direct-pwa-install"
import { DirectPwaInstall as EnDirectPwaInstall } from "@/components/en/direct-pwa-install"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith("/en")

  useEffect(() => {
    // Simulate loading for a smoother experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ServiceWorkerRegistration />
      <AutoInstallPwa autoPrompt={false} />

      {isEnglish ? (
        <>
          <EnSiteHeader />
          <main>{children}</main>
          <EnSiteFooter />
          <EnDirectPwaInstall />
        </>
      ) : (
        <>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <DirectPwaInstall />
        </>
      )}

      <ScrollToTop />
    </>
  )
}