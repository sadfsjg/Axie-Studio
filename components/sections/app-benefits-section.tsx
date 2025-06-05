"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Smartphone,
  Calendar,
  Bell,
  BarChart,
  Users,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/section-background"

interface AppBenefitProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const AppBenefit = ({ icon, title, description, index }: AppBenefitProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-5 flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-200">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        </div>
        <div className="text-blue-500">{isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-5 pt-0"
          >
            <div className="pt-2 border-t border-slate-100">
              <p className="text-slate-600">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface AppBenefitsSectionProps {
  onDemoClick: () => void
}

export function AppBenefitsSection({ onDemoClick }: AppBenefitsSectionProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Dedikerad mobilapp",
      description:
        "Ge dina kunder en professionell bokningsupplevelse med en app i ditt varumärke. Appen kan anpassas med dina färger, logotyp och företagsidentitet för att skapa en sömlös varumärkesupplevelse.",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Kalendersynkronisering",
      description:
        "Synkronisera bokningar med din Google, Outlook eller Apple-kalender automatiskt. Alla ändringar uppdateras i realtid så att du aldrig missar en bokning eller riskerar dubbelbokningar.",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Automatiska påminnelser",
      description:
        "Minska antalet uteblivna bokningar med automatiska SMS och e-postpåminnelser. Du kan anpassa när och hur påminnelser skickas för att maximera närvaron vid bokade tider.",
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Detaljerad statistik",
      description:
        "Få insikt i din verksamhet med realtidsrapporter och bokningsstatistik. Analysera trender, upptäck populära tider och optimera ditt schema baserat på faktiska data.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Kundhantering",
      description:
        "Bygg en kunddatabas med bokningshistorik och preferenser. Förbättra kundrelationer genom att spara viktig information och erbjuda personlig service baserad på tidigare interaktioner.",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Integrerad kommunikation",
      description:
        "Kommunicera med kunder direkt i appen via SMS, e-post eller chattmeddelanden. Håll all kommunikation samlad på ett ställe för enkel uppföljning och bättre kundservice.",
    },
  ]

  return (
    <SectionBackground id="app-benefits" className="bg-gradient-to-b from-white to-slate-50">
      <div className="text-center mb-16">
        <motion.div
          className="mx-auto mb-6 relative w-[180px] h-[70px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Axie%20Studio%2C%20make%20me%20a%20logo.%20this%20is%20the%20slogan_%20Build%2C%20Book%2C%20Automate_%20Your%20Digital%20Success%2C%20Simplified.%20Webdesign%2C%20A%20logo.jpg-smGhBbZ9ZtGzrbDsca8Nye70BJ1rGF.jpeg"
            alt="Axie Studio Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-slate-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Bokningssystem för webb och mobil
        </motion.h2>

        <motion.p
          className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Klicka på varje fördel för att läsa mer
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* App image - Now in a card for better visual balance */}
        <motion.div
          className="w-full lg:w-1/2 relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          ref={containerRef}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 relative overflow-hidden max-w-md mx-auto lg:ml-auto lg:mr-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>

            <motion.div
              className="relative z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720.jpg-1yYwbjuXDIeQD7myqQFmwqBLFv6eug.jpeg"
                alt="Bokningssystem app på mobila enheter"
                width={500}
                height={500}
                className="object-contain mx-auto"
                priority
              />
            </motion.div>

            {/* App store badges - Simplified and inside the card */}
            <div className="flex justify-center gap-3 mt-4">
              <motion.a
                href="#"
                className="transform transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Ladda ner på Google Play"
                  width={120}
                  height={36}
                  className="h-[36px] w-auto"
                />
              </motion.a>
              <motion.a
                href="#"
                className="transform transition-all duration-300 hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Ladda ner på App Store"
                  width={120}
                  height={36}
                  className="h-[36px] w-auto"
                />
              </motion.a>
            </div>
          </div>

          {/* CTA button - Moved below the app image */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={onDemoClick}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300"
            >
              Boka en demo av appen
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Benefits list - Now with expandable items */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="grid grid-cols-1 gap-4 max-w-md mx-auto lg:ml-0 lg:mr-auto">
            {benefits.map((benefit, index) => (
              <AppBenefit
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  )
}
