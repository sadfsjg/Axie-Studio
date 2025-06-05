"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { AxieLogoSvg } from "./axie-logo-svg"

interface AxieLogoProps {
  className?: string
}

export function AxieLogo({ className }: AxieLogoProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return <AxieLogoSvg className={cn("h-6 w-auto", className)} />
  }

  return (
    <div className={cn("relative", className)}>
      <Image
        src="/images/ax-logo.png"
        alt="Axie Studio"
        width={40}
        height={40}
        className="h-auto w-auto max-h-8"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  )
}
