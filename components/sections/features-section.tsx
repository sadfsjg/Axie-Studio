"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Check, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/section-background"
import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useResponsive } from "@/hooks/use-responsive"

interface Feature {
  title: string
  description: string
  icon: string
  benefits?: string[]
}

interface FeaturesSectionProps {
  features?: Feature[]
  onDemoClick?: () => void
}

export function FeaturesSection({ features, onDemoClick }: FeaturesSectionProps) {
  const { isMobile, isTablet } = useResponsive()
  const isDesktop = !isMobile && !isTablet

  // Animation controls for staggered animations
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  // Default features if none are provided
  const defaultFeatures: Feature[] = [
    {
      title: "Anpassade bokningslänkar",
      description: "Skapa personliga bokningslänkar som matchar ditt företags varumärke och stil.",
      icon: "Link",
      benefits: [
        "Skräddarsy URL:er för olika tjänster",
        "Integrera med din webbplats",
        "Dela enkelt via sociala medier",
      ],
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
    {
      title: "Detaljerad rapportering",
      description: "Få insikt i din verksamhet med omfattande rapporter och analyser.",
      icon: "BarChart",
      benefits: ["Bokningsstatistik", "Intäktsrapporter", "Kundanalyser"],
    },
    {
      title: "Kalendersynkronisering",
      description: "Synkronisera med Google Calendar, Outlook och andra kalendertjänster.",
      icon: "Calendar",
      benefits: ["Tvåvägssynkronisering", "Automatiska uppdateringar", "Undvik dubbelbokningar"],
    },
  ]

  // Use provided features or default ones
  const displayFeatures = features && features.length > 0 ? features : defaultFeatures

  const handleDemoClick = () => {
    if (onDemoClick) {
      onDemoClick()
    } else {
      // Default behavior if no callback is provided
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <SectionBackground id="features" className="py-20 md:py-28 lg:py-32" variant="gradient">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700"
        >
          <Sparkles className="mr-1 h-3.5 w-3.5" />
          <span>Kraftfulla funktioner</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent"
        >
          Allt du behöver för effektiv bokning
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[800px] text-slate-700 md:text-xl/relaxed"
        >
          Vårt bokningssystem är utformat för att möta alla dina behov med fokus på användarvänlighet och effektivitet.
          Upptäck våra kraftfulla funktioner som hjälper dig optimera din verksamhet.
        </motion.p>
      </div>

      {/* Modern feature grid with interactive cards - responsive grid layout */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
      >
        {displayFeatures.map((feature, index) => {
          // Dynamically get the icon component
          const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons] as LucideIcon

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-blue-100 overflow-hidden h-full"
            >
              {/* Decorative gradient background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 p-3">
                <div className="h-2 w-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 mb-6 transition-colors group-hover:bg-blue-200">
                  {IconComponent && <IconComponent className="h-7 w-7 text-blue-600" />}
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-700 mb-6">{feature.description}</p>

                {/* Feature benefits list */}
                {feature.benefits && (
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-2"></div>
              </div>
            </motion.div>
          )
        })}

        {/* Special highlighted feature card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white sm:col-span-2 lg:col-span-1 overflow-hidden h-full"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-3">
            <div className="h-2 w-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full"></div>

          <div className="relative z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 mb-6 transition-colors group-hover:bg-white/30">
              <Star className="h-7 w-7 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-3">Anpassat för din verksamhet</h3>

            <p className="mb-6">
              Vårt bokningssystem kan anpassas helt efter dina specifika behov och integreras sömlöst med din befintliga
              webbplats.
            </p>

            <Button
              className="mt-4 bg-white hover:bg-gray-100 text-blue-600 rounded-xl shadow-lg shadow-blue-700/20"
              onClick={handleDemoClick}
            >
              Boka Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Statistics section - responsive grid */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "98%", label: "Kundnöjdhet" },
          { value: "24/7", label: "Tillgänglighet" },
          { value: "30%", label: "Ökad effektivitet" },
          { value: "15+", label: "Integrationer" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index + 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</span>
            <span className="text-slate-700">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 flex flex-col items-center"
      >
        <Button
          size="lg"
          onClick={handleDemoClick}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-6 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300 transform hover:scale-105"
        >
          <span className="text-base">Upptäck alla funktioner</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="mt-4 text-sm text-slate-600">Gratis demo – ingen registrering krävs</p>
      </motion.div>

      {/* Additional feature highlights */}
      <div className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Optimerad för alla enheter</h3>
            <p className="text-slate-700 mb-6">
              Vårt bokningssystem fungerar sömlöst på alla enheter - från mobiler och surfplattor till datorer. Dina
              kunder kan boka när som helst, var som helst.
            </p>
            <ul className="space-y-3">
              {["Responsiv design", "Snabb laddningstid", "Intuitiv användarupplevelse"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md"
          >
            <div className="aspect-video rounded-lg bg-white shadow-sm overflow-hidden">
              <img
                src="/responsive-booking-system.png"
                alt="Responsiv bokningssystem på olika enheter"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md"
          >
            <div className="aspect-video rounded-lg bg-white shadow-sm overflow-hidden">
              <img
                src="/business-analytics-dashboard.png"
                alt="Affärsanalys dashboard med diagram"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Kraftfull affärsanalys</h3>
            <p className="text-slate-700 mb-6">
              Få värdefulla insikter om din verksamhet med vår omfattande analysplattform. Spåra bokningar, intäkter och
              kundtrender för att fatta informerade beslut.
            </p>
            <ul className="space-y-3">
              {[
                "Realtidsrapporter",
                "Anpassningsbara dashboards",
                "Exportera data i olika format",
                "Kundlojalitetsanalys",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="mt-32 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Vad våra kunder säger</h3>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Upptäck hur vårt bokningssystem har hjälpt företag att effektivisera sina processer och förbättra
            kundupplevelsen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Anna Johansson",
              business: "Salong Elegance",
              quote:
                "Axie Studio har revolutionerat hur vi hanterar bokningar. Våra kunder älskar hur enkelt det är att boka tider online.",
            },
            {
              name: "Erik Lindberg",
              business: "Lindbergs Massage",
              quote:
                "Sedan vi började använda Axie Studio har antalet missade bokningar minskat med 70%. Automatiska påminnelser är en game-changer!",
            },
            {
              name: "Maria Svensson",
              business: "Skönhetsstudion",
              quote:
                "Integrationen med vår webbplats var sömlös och kunderna kommenterar ofta hur professionellt vårt bokningssystem är.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index + 0.2 }}
              className="bg-blue-50 p-6 rounded-xl shadow-sm"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-slate-700 mb-6 flex-grow">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-32 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Redo att förbättra din bokningsprocess?</h3>
        <p className="text-slate-700 max-w-2xl mx-auto mb-8">
          Kontakta oss idag för att diskutera hur Axie Studio kan anpassas för att möta just dina behov.
        </p>
        <Button
          size="lg"
          onClick={handleDemoClick}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 shadow-lg"
        >
          Boka en gratis konsultation
        </Button>
      </motion.div>
    </SectionBackground>
  )
}
