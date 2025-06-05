"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Search, Smartphone, Wifi, Bell, Calendar, Award, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { fadeIn } from "@/lib/animation"
import { SectionBackground } from "@/components/section-background"

export function MobileAppsSectionNoI18n({ onDemoClick }: { onDemoClick?: () => void }) {
  const [activeTab, setActiveTab] = useState("affes")
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const salonApps = [
    {
      id: "affes",
      name: "Affes Salong",
      logo: "/images/affes-salong-logo.jpeg",
      url: "https://affessalong.axiestudio.se/",
      description: "Professionell frisörsalong med fokus på kvalitet och kundservice.",
    },
    {
      id: "viking",
      name: "Viking Salong",
      logo: "/images/viking-salong-logo.jpeg",
      url: "https://vikingsalong.axiestudio.se/",
      description: "Modern herrsalong med traditionella värderingar och expertis.",
    },
    {
      id: "torget",
      name: "Torgets Barbershop",
      logo: "/images/torgets-logo.jpeg",
      url: "https://torgetsbarbershop.axiestudio.se/",
      description: "Klassisk barbershop med fokus på skäggvård och herrklippning.",
    },
    {
      id: "bellavida",
      name: "Bella Vida Barbershop",
      logo: "/images/bella-vida-logo.png",
      url: "https://bellavidabarbershop.axiestudio.se/",
      description: "Exklusiv barbershop med personlig service och avslappnad atmosfär.",
    },
  ]

  const activeApp = salonApps.find((app) => app.id === activeTab) || salonApps[0]

  const customerBenefits = [
    {
      title: "Boka direkt från din hemskärm",
      description: "Kunder kan enkelt boka tider direkt från sin hemskärm utan att behöva söka på webben.",
    },
    {
      title: "Få påminnelser om din bokning",
      description: "Automatiska påminnelser minskar risken för missade tider och förbättrar kundupplevelsen.",
    },
    {
      title: "Enkelt att avboka eller omboka",
      description: "Kunder kan enkelt hantera sina bokningar när som helst, vilket ger ökad flexibilitet.",
    },
    {
      title: "Fungerar även utan internetanslutning",
      description: "PWA-tekniken gör att appen fungerar även med begränsad eller ingen internetanslutning.",
    },
  ]

  const businessBenefits = [
    {
      icon: <Search className="h-5 w-5 text-blue-600" />,
      title: "Synlig i sökresultat",
      description: "Din app syns direkt när kunder söker efter dig online",
      bgColor: "bg-blue-100",
    },
    {
      icon: <Award className="h-5 w-5 text-green-600" />,
      title: "Ökad konvertering",
      description: "Upp till 300% högre bokningsfrekvens",
      bgColor: "bg-green-100",
    },
    {
      icon: <Bell className="h-5 w-5 text-amber-600" />,
      title: "Minskade avbokningar",
      description: "Automatiska påminnelser minskar uteblivna besök",
      bgColor: "bg-amber-100",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-purple-600" />,
      title: "Förbättrad kundupplevelse",
      description: "Smidig bokning ökar kundlojaliteten",
      bgColor: "bg-purple-100",
    },
  ]

  // Animation variants for section titles
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <SectionBackground id="mobile-apps" ref={containerRef} className="bg-gradient-to-b from-white to-slate-50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0)}
        className="text-center mb-12 md:mb-16"
      >
        <motion.h2
          variants={titleAnimation}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
        >
          Mobil App
        </motion.h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Låt dina kunder enkelt boka tider direkt från sin hemskärm för högre konvertering och tillgänglighet
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
        {/* Phone mockup with app inside - 5 columns on large screens */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("left", 0)}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-[280px] md:max-w-[320px]">
            {/* Phone frame */}
            <div className="relative z-10 overflow-hidden rounded-[40px] border-[14px] border-gray-900 bg-gray-900 shadow-xl">
              {/* Phone notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 flex justify-center">
                <div className="w-40 h-6 bg-gray-900 rounded-b-xl"></div>
              </div>

              {/* Status bar */}
              <div className="relative pt-7 bg-white">
                <div className="absolute top-0 inset-x-0 h-7 bg-gray-900 flex items-center justify-between px-6 text-white text-xs">
                  <span>09:41</span>
                  <div className="flex space-x-2">
                    <Wifi className="h-3 w-3" />
                    <span className="font-semibold text-xs">4G</span>
                  </div>
                </div>

                {/* App content */}
                <div className="h-[520px] md:h-[580px] overflow-hidden">
                  {/* App header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                    <div className="flex justify-center mb-3">
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white p-1 shadow-lg">
                        <Image
                          src={activeApp.logo || "/placeholder.svg"}
                          alt={`${activeApp.name} logo`}
                          width={64}
                          height={64}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-center text-lg font-bold">{activeApp.name}</h3>
                    <p className="text-center text-xs text-blue-100">Boka tid online</p>
                  </div>

                  {/* App body */}
                  <div className="p-4">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Välj tjänst</h4>
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                        <span className="text-sm font-medium">Herrklippning - 350 kr</span>
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Välj datum</h4>
                      <div className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                        <span className="text-sm font-medium">15 maj 2023</span>
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Välj tid</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center py-2 border rounded-lg bg-gray-50 text-sm">09:00</div>
                        <div className="text-center py-2 border rounded-lg bg-blue-50 border-blue-500 text-blue-700 font-medium text-sm shadow-sm">
                          10:30
                        </div>
                        <div className="text-center py-2 border rounded-lg bg-gray-50 text-sm">12:00</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Dina uppgifter</h4>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Namn"
                          className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                          defaultValue="Anders Andersson"
                        />
                        <input
                          type="tel"
                          placeholder="Telefon"
                          className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                          defaultValue="070-123 45 67"
                        />
                      </div>
                    </div>

                    <button className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors text-sm shadow-lg">
                      Boka nu
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Add to homescreen tooltip */}
            <div className="absolute -top-16 right-0 bg-white rounded-lg p-3 shadow-lg max-w-[200px] border border-gray-200">
              <div className="text-sm font-medium">Lägg till på hemskärmen för enkel åtkomst!</div>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
            </div>

            {/* Phone bottom bar */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </motion.div>

        {/* Benefits and examples - 7 columns on large screens */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("right", 0)}
          className="lg:col-span-7"
        >
          <div className="mb-8">
            <motion.h3 variants={titleAnimation} className="text-2xl font-bold text-slate-800 mb-4 md:mb-6">
              Se i Verkligen
            </motion.h3>
            <p className="text-slate-600 mb-6">
              Klicka på logotyperna nedan för att se hur olika salonger använder våra appar:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {salonApps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setActiveTab(app.id)}
                  className={`relative p-3 rounded-lg transition-all flex flex-col items-center ${
                    activeTab === app.id
                      ? "bg-blue-50 ring-2 ring-blue-500 shadow-lg shadow-blue-100"
                      : "bg-white hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-white shadow-md mb-2 overflow-hidden">
                    <Image
                      src={app.logo || "/placeholder.svg"}
                      alt={`${app.name} logo`}
                      width={64}
                      height={64}
                      className="object-contain max-w-[80%] max-h-[80%]"
                    />
                  </div>
                  <span
                    className={`block text-xs md:text-sm font-medium text-center ${
                      activeTab === app.id ? "text-blue-700" : "text-slate-700"
                    }`}
                  >
                    {app.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <motion.h3 variants={titleAnimation} className="text-2xl font-bold text-slate-800 mb-4 text-center">
              Vad förväntas?
            </motion.h3>
            <div className="space-y-3 flex flex-col items-center text-center">
              {customerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start justify-center w-full max-w-lg mx-auto">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-slate-800 font-medium">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <motion.h3 variants={titleAnimation} className="text-2xl font-bold text-slate-800 mb-4">
              Får du!
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {businessBenefits.map((benefit, index) => (
                <Card key={index} className="bg-white border border-slate-200">
                  <CardContent className="p-4 flex items-start">
                    <div className={`mr-4 mt-1 ${benefit.bgColor} p-2 rounded-full`}>{benefit.icon}</div>
                    <div>
                      <h4 className="font-medium mb-1 text-slate-800">{benefit.title}</h4>
                      <p className="text-sm text-slate-600">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href={activeApp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white h-10 md:h-11 px-6 md:px-8 py-5 md:py-6"
            >
              Se demo av {activeApp.name}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="text-sm text-slate-500 mt-2">Fungerar på alla enheter - iPhone, Android och datorer</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.2)}
        className="mt-12 md:mt-16 text-center"
      >
        <div className="inline-block bg-blue-50 rounded-full px-4 py-1.5 text-sm text-blue-700 font-medium mb-4 border border-blue-100">
          <Search className="inline-block h-4 w-4 mr-1 -mt-0.5" /> Synlig i Google-sökningar
        </div>
        <motion.h3 variants={titleAnimation} className="text-2xl font-bold text-slate-800 mb-4">
          Din Webplats är Sökbar
        </motion.h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          När kunder söker efter din salong online hittar de enkelt din app och kan boka direkt - utan att behöva ladda
          ner något från App Store eller Google Play.
        </p>

        <div className="bg-white rounded-xl p-4 md:p-6 max-w-3xl mx-auto border border-slate-200 shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-white rounded-full p-2 mr-3 border border-slate-200">
              <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="currentColor"
                />
                <path
                  d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                  fill="#EA4335"
                />
                <path
                  d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
                  fill="#34A853"
                />
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.785L18.7045 19.404C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#4A90E2"
                />
                <path
                  d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                  fill="#FBBC05"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="h-8 rounded-full bg-slate-100 flex items-center px-4">
                <span className="text-slate-600 text-sm">{activeApp.name}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4 mb-3 border border-slate-200">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-md overflow-hidden bg-white mr-3 flex-shrink-0 border border-slate-200">
                <Image
                  src={activeApp.logo || "/placeholder.svg"}
                  alt={`${activeApp.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-slate-800 font-medium">{activeApp.name} - Boka tid online</h4>
                <p className="text-slate-500 text-sm">{activeApp.url}</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm mt-2">
              {activeApp.description} Boka tid online direkt från vår app utan att behöva ringa.
            </p>
          </div>

          <div className="text-center">
            <a
              href={activeApp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Besök exempel &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </SectionBackground>
  )
}
