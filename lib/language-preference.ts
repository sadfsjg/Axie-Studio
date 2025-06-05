"use client"

// Save language preference to localStorage
export function saveLanguagePreference(language: string): void {
  try {
    localStorage.setItem("preferred-language", language)
  } catch (error) {
    console.error("Failed to save language preference:", error)
  }
}

// Get language preference from localStorage
export function getLanguagePreference(): string | null {
  try {
    return localStorage.getItem("preferred-language")
  } catch (error) {
    console.error("Failed to get language preference:", error)
    return null
  }
}

// Clear language preference
export function clearLanguagePreference(): void {
  try {
    localStorage.removeItem("preferred-language")
  } catch (error) {
    console.error("Failed to clear language preference:", error)
  }
}

// Detect browser language
export function getBrowserLanguage(): string {
  try {
    const browserLang = navigator.language || (navigator as any).userLanguage
    return browserLang ? browserLang.substring(0, 2).toLowerCase() : "sv"
  } catch (error) {
    console.error("Failed to detect browser language:", error)
    return "sv"
  }
}

// Get the best language based on preferences and browser settings
export function getBestLanguage(): "sv" | "en" {
  // First check saved preference
  const savedPreference = getLanguagePreference()
  if (savedPreference === "sv" || savedPreference === "en") {
    return savedPreference as "sv" | "en"
  }

  // Then check browser language
  const browserLang = getBrowserLanguage()
  if (browserLang.startsWith("en")) {
    return "en"
  }

  // Default to Swedish
  return "sv"
}
