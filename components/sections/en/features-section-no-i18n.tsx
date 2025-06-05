"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/section-background"
import { fadeIn } from "@/lib/animation"
import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Feature {
  title: string
  description: string
  icon: string
  benefits?: string[]
}

interface FeaturesSectionProps {
  features: Feature[]
  onDemoClick: () => void
}

export function FeaturesSectionNoI18nEn({ features, onDemoClick }: FeaturesSectionProps) {
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

  // Animation for title words
  const titleWords = ["Everything", "You", "Need", "For", "Efficient", "Booking"]

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1 * i,
      },
    }),
  }

  // Default features if none are provided
  const defaultFeatures: Feature[] = [
    {
      title: "Custom Booking Links",
      description: "Create personalized booking links that match your company's brand and style.",
      icon: "Link",
      benefits: [
        "Customize URLs for different services",
        "Integrate with your website",
        "Easily share via social media",
      ],
    },
    {
      title: "Automatic Reminders",
      description: "Reduce missed appointments with automatic reminders sent to your customers.",
      icon: "Bell",
      benefits: ["SMS reminders", "Email notifications", "Customizable messages"],
    },
    {
      title: "Flexible Time Settings",
      description: "Configure your schedule exactly how you want it with detailed settings.",
      icon: "Clock",
      benefits: ["Set available times", "Define buffer times between bookings", "Block time for lunch and breaks"],
    },
    {
      title: "Payment Integrations",
      description: "Take payments directly at booking or afterward with multiple payment options.",
      icon: "CreditCard",
      benefits: ["Upfront payments", "Deposits", "Multiple payment methods"],
    },
    {
      title: "Detailed Reporting",
      description: "Gain insight into your business with comprehensive reports and analytics.",
      icon: "BarChart",
      benefits: ["Booking statistics", "Revenue reports", "Customer analytics"],
    },
    {
      title: "Calendar Sync",
      description: "Sync with Google Calendar, Outlook, and other calendar services.",
      icon: "Calendar",
      benefits: ["Two-way synchronization", "Automatic updates", "Avoid double bookings"],
    },
  ]

  // Use provided features or default ones
  const displayFeatures = features && features.length > 0 ? features : defaultFeatures

  const renderIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcon
    return IconComponent ? <IconComponent className="h-6 w-6 text-blue-600" /> : null
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
          <span>Powerful Features</span>
        </motion.div>

        {/* Animated title with words appearing one by one */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p variants={fadeIn("up", 0.3)} className="max-w-[800px] text-slate-700 md:text-xl/relaxed">
          Our booking system is designed to meet all your needs with a focus on user-friendliness and efficiency.
          Discover our powerful features that help you optimize your business.
        </motion.p>
      </div>

      {/* Modern feature grid with enhanced animations and video showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Feature cards with enhanced animations */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {displayFeatures.slice(0, 4).map((feature, index) => {
            const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons] as LucideIcon

            return (
              <motion.div
                key={index}
                variants={itemVariants}
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
                className="group relative bg-white rounded-2xl shadow-md border border-slate-100 p-6 transition-all duration-500 hover:shadow-2xl hover:border-blue-200 overflow-hidden h-full cursor-pointer"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700 delay-200"></div>
                  <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-600 delay-100"></div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 p-3">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  ></motion.div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 mb-6 transition-all duration-500 group-hover:from-blue-200 group-hover:to-blue-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50"
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                  >
                    {IconComponent && <IconComponent className="h-7 w-7 text-blue-600" />}
                  </motion.div>

                  <motion.h3
                    className="text-lg font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-slate-700 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
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
                  Your browser does not support video playback.
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
                  See Axie Studio in Action
                </motion.h3>
                <motion.p
                  className="text-slate-600 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Discover how easy it is to manage bookings with our system
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
                  { value: "98%", label: "Satisfaction", color: "from-green-400 to-green-600" },
                  { value: "24/7", label: "Availability", color: "from-blue-400 to-blue-600" },
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
                      Book Demo
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
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Statistics section */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "98%", label: "Customer Satisfaction" },
          { value: "24/7", label: "Availability" },
          { value: "30%", label: "Increased Efficiency" },
          { value: "15+", label: "Integrations" },
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
          onClick={onDemoClick}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-6 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300 transform hover:scale-105"
        >
          <span className="text-base">Discover All Features</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="mt-4 text-sm text-slate-600">Free demo – no registration required</p>
      </motion.div>
    </SectionBackground>
  )
}
