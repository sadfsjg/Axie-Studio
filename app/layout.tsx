"use client"

import type React from "react"
import "./globals.css"
import { I18nProvider } from "@/lib/i18n/provider"
import { ServiceWorkerRegistration } from "@/app/service-worker"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          {children}
          <ServiceWorkerRegistration />
        </I18nProvider>
      </body>
    </html>
  )
}
