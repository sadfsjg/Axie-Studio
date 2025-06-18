import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface SectionBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  id?: string
  variant?: "default" | "gradient" | "dark" | "light" | "blue" | "purple" | "green" | "subtle"
  shape?: "default" | "rounded" | "curved" | "wave"
  pattern?: "none" | "grid" | "dots" | "lines"
  glow?: boolean
  "data-section-type"?: string
  itemScope?: boolean
  itemType?: string
}

export const SectionBackground = forwardRef<HTMLDivElement, SectionBackgroundProps>(
  ({ children, className, variant = "default", shape = "default", pattern = "none", glow = false, ...props }, ref) => {
    // Background styles based on variant
    const getBackgroundClasses = () => {
      switch (variant) {
        case "gradient":
          return "bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-800"
        case "dark":
          return "bg-slate-900 text-white"
        case "light":
          return "bg-white text-slate-800"
        case "blue":
          return "bg-gradient-to-b from-blue-50 to-blue-100/50 text-slate-800"
        case "purple":
          return "bg-gradient-to-b from-purple-50 to-purple-100/50 text-slate-800"
        case "green":
          return "bg-gradient-to-b from-emerald-50 to-emerald-100/50 text-slate-800"
        case "subtle":
          return "bg-slate-50 text-slate-800"
        default:
          return "bg-white text-slate-800"
      }
    }

    // Shape styles
    const getShapeClasses = () => {
      switch (shape) {
        case "rounded":
          return "rounded-xl sm:rounded-2xl md:rounded-3xl"
        case "curved":
          return "rounded-[2rem] sm:rounded-[3rem]"
        case "wave":
          return "rounded-none" // Wave shape is handled by pseudo-elements
        default:
          return "rounded-none"
      }
    }

    // Pattern styles
    const getPatternElement = () => {
      switch (pattern) {
        case "grid":
          return (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(#00000011_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]"></div>
            </div>
          )
        case "dots":
          return (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(#00000022_2px,transparent_2px)] [background-size:32px_32px] opacity-[0.1]"></div>
            </div>
          )
        case "lines":
          return (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(0,0,0,0.05)_49%,rgba(0,0,0,0.05)_51%,transparent_51%,transparent_100%)] [background-size:24px_24px] opacity-[0.1]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_49%,rgba(0,0,0,0.05)_49%,rgba(0,0,0,0.05)_51%,transparent_51%,transparent_100%)] [background-size:24px_24px] opacity-[0.1]"></div>
            </div>
          )
        default:
          return null
      }
    }

    // Glow effect
    const getGlowElement = () => {
      if (!glow) return null

      return (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          {variant !== "dark" && (
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.03)_20%,rgba(59,130,246,0.04)_50%,rgba(59,130,246,0.03)_80%,transparent_100%)]"></div>
          )}
        </div>
      )
    }

    // Wave shape
    const getWaveElement = () => {
      if (shape !== "wave") return null

      return (
        <>
          <div
            className="absolute -top-1 left-0 right-0 h-8 bg-white dark:bg-gray-900"
            style={{ borderRadius: "0 0 50% 50% / 100%" }}
          ></div>
          <div
            className="absolute -bottom-1 left-0 right-0 h-8 bg-white dark:bg-gray-900"
            style={{ borderRadius: "50% 50% 0 0 / 100%" }}
          ></div>
        </>
      )
    }

    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden py-12 md:py-24 my-4",
          getBackgroundClasses(),
          getShapeClasses(),
          variant === "dark" ? "shadow-xl" : "shadow-sm",
          className,
        )}
        {...props}
      >
        {getPatternElement()}
        {getGlowElement()}
        {getWaveElement()}

        {/* Content container with improved spacing and max width */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl xl:max-w-7xl">{children}</div>
      </section>
    )
  },
)

SectionBackground.displayName = "SectionBackground"