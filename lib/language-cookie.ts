"use client"

// Set a cookie for language preference
export function setLanguageCookie(language: string): void {
  try {
    document.cookie = `userLanguagePreference=${language}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
  } catch (error) {
    console.error("Failed to set language cookie:", error)
  }
}

// Get language preference from cookie
export function getLanguageCookie(): string | null {
  try {
    const cookies = document.cookie.split(";")
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=")
      if (name === "userLanguagePreference") {
        return value
      }
    }
    return null
  } catch (error) {
    console.error("Failed to get language cookie:", error)
    return null
  }
}

// Clear language preference cookie
export function clearLanguageCookie(): void {
  try {
    document.cookie = "userLanguagePreference=; path=/; max-age=0; SameSite=Lax"
  } catch (error) {
    console.error("Failed to clear language cookie:", error)
  }
}
