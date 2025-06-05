"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type AnnouncerContextType = {
  announce: (message: string, politeness?: "assertive" | "polite") => void
}

const AnnouncerContext = createContext<AnnouncerContextType | undefined>(undefined)

export function A11yAnnouncerProvider({ children }: { children: ReactNode }) {
  const [assertiveMessage, setAssertiveMessage] = useState("")
  const [politeMessage, setPoliteMessage] = useState("")

  const announce = useCallback((message: string, politeness: "assertive" | "polite" = "polite") => {
    if (politeness === "assertive") {
      setAssertiveMessage("")
      setTimeout(() => setAssertiveMessage(message), 50)
    } else {
      setPoliteMessage("")
      setTimeout(() => setPoliteMessage(message), 50)
    }
  }, [])

  return (
    <AnnouncerContext.Provider value={{ announce }}>
      {children}
      <div aria-live="assertive" aria-atomic="true" className="sr-only">
        {assertiveMessage}
      </div>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {politeMessage}
      </div>
    </AnnouncerContext.Provider>
  )
}

export function useAnnouncer() {
  const context = useContext(AnnouncerContext)

  if (context === undefined) {
    throw new Error("useAnnouncer must be used within an A11yAnnouncerProvider")
  }

  return context
}
