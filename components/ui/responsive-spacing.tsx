import { cn } from "@/lib/utils"

interface ResponsiveSpacingProps {
  className?: string
  mt?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  mb?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  my?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  mx?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  pt?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  pb?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  py?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  px?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
}

export function ResponsiveSpacing({ className, mt, mb, my, mx, pt, pb, py, px }: ResponsiveSpacingProps) {
  // Helper function to generate spacing classes
  const generateSpacingClasses = (
    type: string,
    values?: {
      mobile?: number
      tablet?: number
      desktop?: number
    },
  ) => {
    if (!values) return []

    return [
      values.mobile !== undefined && `${type}-${values.mobile}`,
      values.tablet !== undefined && `md:${type}-${values.tablet}`,
      values.desktop !== undefined && `lg:${type}-${values.desktop}`,
    ].filter(Boolean) as string[]
  }

  // Generate all spacing classes
  const spacingClasses = [
    ...generateSpacingClasses("mt", mt),
    ...generateSpacingClasses("mb", mb),
    ...generateSpacingClasses("my", my),
    ...generateSpacingClasses("mx", mx),
    ...generateSpacingClasses("pt", pt),
    ...generateSpacingClasses("pb", pb),
    ...generateSpacingClasses("py", py),
    ...generateSpacingClasses("px", px),
  ]

  return <div className={cn(spacingClasses, className)} />
}
