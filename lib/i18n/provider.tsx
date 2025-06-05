"use client"

import { createContext, useContext, ReactNode } from "react"
import en from "@/lib/locales/en.json"

const I18nContext = createContext({
  t: (key: string) => key,
  currentLanguage: "en"
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const translations = en

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }
    return value || key
  }

  return (
    <I18nContext.Provider value={{ t, currentLanguage: "en" }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
