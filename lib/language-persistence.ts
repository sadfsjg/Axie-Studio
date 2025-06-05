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
