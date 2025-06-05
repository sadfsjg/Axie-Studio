"use client"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedImage } from "@/components/ui/animated-image"
import { fadeIn, slideIn } from "@/lib/animation"
import { useMediaQuery } from "@/hooks/use-media-query"
import Script from "next/script"
import { scrollToSection } from "@/utils/scroll-utils"
import { PremiumInstallButton } from "@/components/en/premium-install-button"

interface HeroSectionProps {
  onDemoClick: () => void
  onExploreClick: () => void
}

export function HeroSectionEn({ onDemoClick, onExploreClick }: HeroSectionProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Create structured data for this section
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.axiestudio.se/#hero",
    },
    headline: "Booking System That Simplifies Your Day",
    description:
      "Streamline your business with our customized booking system. Save time, increase customer satisfaction, and gain full control over your calendar.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Axie%20Studio%2C%20make%20me%20a%20logo.%20this%20is%20the%20slogan_%20Build%2C%20Book%2C%20Automate_%20Your%20Digital%20Success%2C%20Simplified.%20Webdesign%2C%20A%20logo.jpg-smGhBbZ9ZtGzrbDsca8Nye70BJ1rGF.jpeg",
  }

  return (
    <section
      id="hero"
      className="relative py-6 md:py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <Script
        id="hero-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl transform animate-float-delayed"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-slate/[0.04] bg-[length:50px_50px] opacity-40"></div>

        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4 md:space-y-8">
            <div className="space-y-3 md:space-y-6">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700 optimize-gpu mx-auto sm:mx-0"
              >
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>The Future of Booking Systems</span>
              </motion.div>

              <AnimatedText
                as="h1"
                text="Booking System That Simplifies Your Day"
                className="text-2xl md:text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900 mobile-heading"
                delay={0.3}
                itemProp="headline"
              />

              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                className="max-w-[600px] text-slate-700 text-sm md:text-xl optimize-gpu mobile-subheading"
                itemProp="description"
              >
                Streamline your business with our customized booking system. Save time, increase customer satisfaction,
                and gain full control over your calendar.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3 optimize-gpu mobile-button-container"
            >
              <PremiumInstallButton className="mobile-button" />
              <Button
                size={isMobile ? "default" : "lg"}
                className="relative group overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 mobile-button"
                onClick={onDemoClick}
              >
                <span className="relative z-10 flex items-center text-base">
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"></span>
              </Button>

              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="rounded-full border-2 border-blue-400/50 bg-white/80 px-6 py-4 text-blue-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-800 mobile-button"
                onClick={() => scrollToSection("features")}
              >
                <span className="text-base">Explore Features</span>
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={slideIn("right", "spring", 0.5, 1)}
            initial="hidden"
            animate="show"
            className="relative flex items-center justify-center mt-4 md:mt-0 optimize-gpu px-4 sm:px-0"
          >
            {/* Decorative elements for the image grid */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              animate="show"
              className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-3xl transform rotate-3 scale-105 optimize-gpu hidden sm:block"
            />

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="relative grid grid-cols-2 gap-2 md:gap-4 p-3 md:p-6 bg-white shadow-xl border border-slate-200/70 rounded-3xl transform -rotate-2 optimize-gpu mobile-image-grid"
            >
              {/* Decorative dots */}
              <div className="absolute -top-2 -left-2 flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <AnimatedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rapportering%21-QVzdcm8fp7AFGe3ThOPHls0vouWgjv.png"
                alt="Reporting"
                width={300}
                height={200}
                className="overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                delay={0.5}
                direction="up"
              />

              <AnimatedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anslut%20Betalning%20F%C3%B6r%20att%20boka-X98fym25BcDBJhWpma1LXPFN5piggd.png"
                alt="Payment Integrations"
                width={300}
                height={200}
                className="overflow-hidden rounded-lg border shadow-sm transition-transform hover:scale-105"
                delay={0.6}
                direction="down"
              />

              <AnimatedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anpassad-IqFBuIfXAyhOds5lulscnpmOHCOVtu.png"
                alt="Custom Booking"
                width={300}
                height={200}
                className="overflow-hidden rounded-lg border shadow-sm transition-transform hover:scale-105"
                delay={0.7}
                direction="left"
              />

              <AnimatedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Standard-Myg9QODlxVMk2iBnGh1JsIXjjIhjjk.png"
                alt="Standard Booking"
                width={300}
                height={200}
                className="overflow-hidden rounded-lg border shadow-sm transition-transform hover:scale-105"
                delay={0.8}
                direction="right"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        animate="show"
        className="absolute bottom-4 md:bottom-8 left-0 right-0 flex flex-col items-center justify-center animate-bounce optimize-gpu"
      >
        <span className="text-sm text-slate-600 mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <ArrowRight className="h-6 w-6 text-slate-600 transform rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
}
