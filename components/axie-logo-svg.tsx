import { cn } from "@/lib/utils"

interface AxieLogoSvgProps {
  className?: string
}

export function AxieLogoSvg({ className }: AxieLogoSvgProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
    >
      <path d="M20 60L40 10H50L55 20H45L30 60H20Z" fill="currentColor" />
      <path d="M50 10L45 20H55L60 10H50Z" fill="currentColor" />
      <path d="M80 60L60 10H50L45 20H55L70 60H80Z" fill="currentColor" />
    </svg>
  )
}
