"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Calendar, Bell, Clock, CreditCard, BarChart, LayoutGrid, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { fadeIn } from "@/lib/animation"
import { SectionBackground } from "@/components/section-background"
import { useResponsive } from "@/hooks/use-responsive"

interface Feature {
  title: string
  description: string
  icon: string
  benefits: string[]
}

interface FeaturesSectionProps {
  features?: Feature[]
  onDemoClick?: () => void
}

// Default features if none are provided
const defaultFeatures: Feature[] = [
  {
    title: "Anpassade bokningslänkar",
    description: "Skapa personliga bokningslänkar som matchar ditt företags varumärke och stil.",
    icon: "Calendar",
    benefits: ["Anpassa URL:er för olika tjänster", "Integrera med din webbplats", "Dela enkelt via sociala medier"],
  },
  {
    title: "Automatiska påminnelser",
    description: "Minska antalet missade bokningar med automatiska påminnelser till dina kunder.",
    icon: "Bell",
    benefits: ["SMS-påminnelser", "E-postnotifieringar", "Anpassningsbara meddelanden"],
  },
  {
    title: "Flexibla tidsinställningar",
    description: "Konfigurera ditt schema precis som du vill ha det med detaljerade inställningar.",
    icon: "Clock",
    benefits: [
      "Ställ in tillgängliga tider",
      "Definiera bufferttider mellan bokningar",
      "Blockera tider för lunch och pauser",
    ],
  },
  {
    title: "Betalningsintegrationer",
    description: "Ta betalt direkt vid bokning eller efteråt med flera betalningsalternativ.",
    icon: "CreditCard",
    benefits: ["Förskottsbetalning", "Depositioner", "Flera betalningsmetoder"],
  },
]

export function FeaturesSectionNoI18n({ features = defaultFeatures, onDemoClick }: FeaturesSectionProps) {
  const { isMobile, isTablet } = useResponsive()
  const [activeFeature, setActiveFeature] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "h-5 w-5", "aria-hidden": true }
    switch (iconName) {
      case "Calendar":
        return <Calendar {...iconProps} />
      case "Bell":
        return <Bell {...iconProps} />
      case "Clock":
        return <Clock {...iconProps} />
      case "CreditCard":
        return <CreditCard {...iconProps} />
      case "BarChart":
        return <BarChart {...iconProps} />
      case "LayoutGrid":
        return <LayoutGrid {...iconProps} />
      case "Mail":
        return <Mail {...iconProps} />
      default:
        return <Calendar {...iconProps} />
    }
  }

  // Animation variants for the subtitle
  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  }

  // Split the subtitle into words for animation
  const subtitleWords = "Allt du behöver för effektiv bokning".split(" ")

  // Ensure features is an array before using it
  const displayFeatures = Array.isArray(features) ? features : defaultFeatures

  return (
    <SectionBackground id="features" className="bg-white" ref={containerRef}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0)}
            className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 mb-4"
          >
            <span>Kraftfulla funktioner</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtitleVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 flex flex-wrap justify-center gap-x-2"
          >
            {subtitleWords.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0.2)}
            className="max-w-3xl mx-auto text-lg text-slate-600"
          >
            Vårt bokningssystem är utformat för att möta alla dina behov med fokus på användarvänlighet och
            effektivitet. Upptäck våra kraftfulla funktioner som hjälper dig optimera din verksamhet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Feature cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("right", 0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {displayFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
                className="group"
              >
                <Card
                  className={`border transition-all duration-500 cursor-pointer relative overflow-hidden ${
                    activeFeature === index
                      ? "bg-gradient-to-br from-blue-50 to-blue-100/80 border-blue-300 shadow-2xl shadow-blue-200/50 ring-2 ring-blue-300/50"
                      : "bg-white hover:bg-gradient-to-br hover:from-slate-50 hover:to-blue-50/30 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/5 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700 delay-200"></div>
                    <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-600 delay-100"></div>
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <motion.div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                        activeFeature === index
                          ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white scale-110 shadow-lg shadow-blue-500/30"
                          : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 group-hover:from-blue-100 group-hover:to-blue-200 group-hover:text-blue-700 group-hover:scale-105"
                      }`}
                      whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                    >
                      {renderIcon(feature.icon)}
                    </motion.div>

                    <motion.h3
                      className="text-lg font-bold mb-3 text-slate-900 group-hover:text-blue-800 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      className="text-slate-600 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {feature.description}
                    </motion.p>

                    {/* Active feature indicator */}
                    {activeFeature === index && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-3 right-3 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                      >
                        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced video showcase */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("left", 0.2)}
            className="relative"
          >
            {/* Video container with enhanced styling */}
            <motion.div
              className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 p-8 rounded-3xl border border-blue-100/50 shadow-2xl shadow-blue-100/20 overflow-hidden"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Enhanced decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-300/20 to-cyan-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-200/10 to-blue-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>

              {/* Video section with enhanced animations */}
              <div className="relative z-10 mb-6">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-900/20 bg-black"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <video
                    className="w-full h-auto max-h-80 object-cover"
                    controls
                    poster="/placeholder.svg?height=320&width=480&text=Axie+Studio+Demo"
                    preload="metadata"
                  >
                    <source
                      src="https://g5qjuo0ajiikqbv5.public.blob.vercel-storage.com/Axie%20Studio-K40BFhGBmAFP9XGLGhvaIbkZGYmVZB.mp4"
                      type="video/mp4"
                    />
                    Din webbläsare stöder inte videouppspelning.
                  </video>

                  {/* Enhanced video overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-blue-500/10 pointer-events-none"></div>
                </motion.div>

                {/* Enhanced video caption */}
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Badge
                      variant="outline"
                      className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-blue-200 px-4 py-2 mb-3 shadow-sm"
                    >
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        Live Demo
                      </span>
                    </Badge>
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-slate-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Se Axie Studio i aktion
                  </motion.h3>
                  <motion.p
                    className="text-slate-600 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Upptäck hur enkelt det är att hantera bokningar med vårt system
                  </motion.p>
                </motion.div>
              </div>

              {/* Enhanced feature highlights */}
              <div className="relative z-10">
                <motion.div
                  className="grid grid-cols-2 gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { value: "98%", label: "Nöjda kunder", color: "from-green-400 to-green-600" },
                    { value: "24/7", label: "Tillgänglighet", color: "from-blue-400 to-blue-600" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={onDemoClick}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        Boka demo
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        >
                          →
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-200 text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300"
                      onClick={() => {
                        const pricingSection = document.getElementById("pricing")
                        if (pricingSection) {
                          pricingSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      Läs mer
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.3)}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-50 rounded-full px-4 py-1.5 text-sm text-blue-700 font-medium mb-4 border border-blue-100">
            Anpassat för din verksamhet
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Vårt bokningssystem kan anpassas helt efter dina specifika behov
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Oavsett om du driver en frisörsalong, ett gym eller en konsultverksamhet kan vårt system anpassas för att
            passa just dina behov och integreras sömlöst med din befintliga webbplats.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="#pricing">Upptäck alla funktioner</a>
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="outline" size="lg">
                    <a href="#demo">Gratis demo – ingen registrering krävs</a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Prova vårt system utan förpliktelser</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.div>
      </div>
    </SectionBackground>
  )
}
