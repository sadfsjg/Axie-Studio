"use client"

import { usePathname } from "next/navigation"
import { ServiceWorkerRegistration } from "@/app/service-worker"

export default function PWARegistration() {
  const pathname = usePathname()
  return (
    <ServiceWorkerRegistration 
      key={pathname?.startsWith('/en') ? 'en' : 'default'} 
    />
  )
}