"use client"

import { useRouter, usePathname } from "next/navigation"

export function getLanguageFromPathname(pathname: string | null): "sv" | "en" {
  return pathname?.startsWith("/en") ? "en" : "sv"
}

export function getAlternateLanguagePath(pathname: string | null): string {
  if (!pathname) return "/en"

  if (pathname.startsWith("/en")) {
    // Convert English path to Swedish
    return pathname === "/en" ? "/" : pathname.replace(/^\/en/, "")
  } else {
    // Convert Swedish path to English
    return pathname === "/" ? "/en" : `/en${pathname}`
  }
}

export function useLanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const currentLanguage = getLanguageFromPathname(pathname)
  const alternateLanguagePath = getAlternateLanguagePath(pathname)

  const switchLanguage = () => {
    router.push(alternateLanguagePath)
  }

  return {
    currentLanguage,
    alternateLanguagePath,
    switchLanguage,
  }
}
