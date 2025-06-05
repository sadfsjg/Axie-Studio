"use client"

import { Download } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { usePwaInstall } from "./install-context"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface InstallButtonProps extends ButtonProps {
  variant?: "default" | "premium" | "minimal"
  showIcon?: boolean
}

export function InstallButton({ variant = "default", showIcon = true, className, ...props }: InstallButtonProps) {
  const { canInstall, isInstalled, showInstallPrompt } = usePwaInstall()
  const { t } = useI18n()

  if (isInstalled || !canInstall) return null

  const handleClick = () => {
    showInstallPrompt("popup")
  }

  // Style variants
  const styles = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    premium:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-900/20",
    minimal: "bg-transparent border border-blue-500 text-blue-600 hover:bg-blue-50",
  }

  return (
    <Button onClick={handleClick} className={cn(styles[variant], className)} {...props}>
      {showIcon && <Download className="mr-2 h-4 w-4" />}
      {t("common.installApp")}
    </Button>
  )
}
