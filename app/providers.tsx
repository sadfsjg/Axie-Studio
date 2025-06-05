"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n"
import { PwaInstallProvider } from "@/components/pwa/install-context"
import { AutoInstallPwa } from "@/components/auto-install-pwa"
import { PwaInstallDetector } from "@/components/pwa-install-detector"
import { FloatingInstallButton } from "@/components/floating-install-button"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <I18nProvider>
        <PwaInstallProvider>
          {children}
          <AutoInstallPwa autoPrompt={true} delay={3000} />
          <PwaInstallDetector />
          <FloatingInstallButton />
        </PwaInstallProvider>
      </I18nProvider>
    </ThemeProvider>
  )
}
