"use client"
import { motion } from "framer-motion"
import { ArrowRight, Check, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { fadeIn } from "@/lib/animation"
import { SectionSEO } from "@/components/section-seo"

interface ComparisonFeature {
  name: string
  values: (boolean | string)[]
}

interface ComparisonSectionProps {
  columnHeaders: string[]
  features: ComparisonFeature[]
  onCtaClick: () => void
}

export function ComparisonSectionEn({ columnHeaders, features, onCtaClick }: ComparisonSectionProps) {
  // Function to get the appropriate color class based on the column index
  const getColumnColorClass = (index: number, type: "text" | "bg" | "border") => {
    const colors = ["blue", "purple", "green", "orange", "red", "teal", "indigo"]
    const color = colors[index % colors.length]

    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        text: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
      },
      purple: {
        text: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
      },
      green: {
        text: "text-green-600 dark:text-green-400",
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
      },
      orange: {
        text: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
      },
      red: {
        text: "text-red-600 dark:text-red-400",
        bg: "bg-red-50 dark:bg-red-900/20",
        border: "border-red-200 dark:border-red-800",
      },
      teal: {
        text: "text-teal-600 dark:text-teal-400",
        bg: "bg-teal-50 dark:bg-teal-900/20",
        border: "border-teal-200 dark:border-teal-800",
      },
      indigo: {
        text: "text-indigo-600 dark:text-indigo-400",
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        border: "border-indigo-200 dark:border-indigo-800",
      },
    }

    return colorMap[color][type]
  }

  return (
    <AnimatedSection
      className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-green-50 dark:from-blue-950/10 dark:to-green-950/10"
      id="comparison"
      data-section-type="comparison"
      itemScope
      itemType="https://schema.org/Table"
    >
      <SectionSEO
        title="Comparison of Booking System Types | Axie Studio"
        description="Find the perfect solution for your business by comparing different types of booking systems and their features."
        slug="comparison"
        type="Table"
      />

      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900/50 dark:to-purple-950/10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:border-blue-800/30 dark:bg-blue-900/30 dark:text-blue-300"
          >
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            <span>Comparison</span>
          </motion.div>

          <AnimatedText
            as="h2"
            text="Comparison of Booking System Types"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            delay={0.2}
            itemProp="name"
          />

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed"
            itemProp="description"
          >
            Find the perfect solution for your business
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="mt-12 overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800 shadow-xl"
          itemProp="about"
          itemScope
          itemType="https://schema.org/Dataset"
        >
          <Table>
            <TableHeader className="bg-gray-50 dark:bg-gray-900/50">
              <TableRow>
                <TableHead className="w-[200px] font-bold">Feature</TableHead>
                {columnHeaders.map((header, index) => (
                  <TableHead
                    key={index}
                    className={`font-bold ${getColumnColorClass(index, "text")}`}
                    itemProp="variableMeasured"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  itemScope
                  itemType="https://schema.org/PropertyValue"
                >
                  <TableCell className="font-medium" itemProp="name">
                    {feature.name}
                  </TableCell>
                  {feature.values.map((value, cellIndex) => (
                    <TableCell key={cellIndex} itemProp="value">
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check
                            className={`h-5 w-5 ${getColumnColorClass(cellIndex, "text").replace("text-", "text-")}`}
                          />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )
                      ) : (
                        value
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.5)} className="flex justify-center mt-12">
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-6"
            onClick={onCtaClick}
          >
            <span className="text-base">Find the right solution for you</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
