"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeIn } from "@/lib/animation"
import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  delay?: number
  className?: string
  iconClassName?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
  className = "",
  iconClassName = "",
}: FeatureCardProps) {
  // Dynamically get the icon component
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon

  return (
    <motion.div
      variants={fadeIn("up", delay)}
      className={cn(
        "group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-800 hover-card",
        className,
      )}
    >
      <div className="absolute top-0 right-0 p-3">
        <div className="h-2 w-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 mb-4 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50",
          iconClassName,
        )}
      >
        {IconComponent && <IconComponent className="h-6 w-6 text-blue-500" />}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}
