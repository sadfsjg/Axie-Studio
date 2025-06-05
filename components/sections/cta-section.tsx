"use client"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/section-background"
import { AnimatedText } from "@/components/ui/animated-text"
import { fadeIn, slideIn } from "@/lib/animation"
import { SectionSEO } from "@/components/section-seo"

interface CtaSectionProps {
  onDemoClick: () => void
}

export function CtaSection({ onDemoClick }: CtaSectionProps) {
  return (
    <SectionBackground
      className="py-16 md:py-24 lg:py-32"
      id="cta"
      data-section-type="cta"
      itemScope
      itemType="https://schema.org/Action"
    >
      <SectionSEO
        title="Boka en kostnadsfri konsultation | Axie Studio"
        description="Låt oss diskutera hur vårt bokningssystem kan anpassas för att effektivisera just din verksamhet."
        slug="cta"
        type="Action"
      />

      <motion.div
        variants={slideIn("up", "spring", 0.1, 0.8)}
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 text-center">
          <AnimatedText
            as="h2"
            text="Boka en kostnadsfri konsultation"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
            delay={0.2}
            itemProp="name"
          />

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-slate-300 text-lg mx-auto max-w-2xl"
            itemProp="description"
          >
            Låt oss diskutera hur vårt bokningssystem kan anpassas för att effektivisera just din verksamhet.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.4)} className="flex justify-center mt-8">
            <Button
              size="lg"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-6 text-white font-bold text-lg shadow-lg shadow-blue-900/30 transition-all hover:shadow-blue-900/50 transform hover:scale-105"
              onClick={onDemoClick}
              itemProp="target"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                Boka Konsultation
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>

          <motion.p variants={fadeIn("up", 0.5)} className="text-slate-400 text-sm mt-4">
            Kostnadsfri demo – ingen registrering krävs
          </motion.p>
        </div>
      </div>
    </SectionBackground>
  )
}
