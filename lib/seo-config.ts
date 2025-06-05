// Swedish cities for local SEO targeting
export const SWEDISH_CITIES = [
  "Stockholm",
  "Göteborg",
  "Malmö",
  "Uppsala",
  "Västerås",
  "Örebro",
  "Linköping",
  "Helsingborg",
  "Jönköping",
  "Norrköping",
  "Lund",
  "Umeå",
  "Gävle",
  "Borås",
  "Södertälje",
  "Eskilstuna",
  "Halmstad",
  "Växjö",
  "Karlstad",
  "Sundsvall",
  "Trollhättan",
  "Östersund",
  "Borlänge",
  "Falun",
  "Skövde",
  "Karlskrona",
  "Kristianstad",
  "Kalmar",
  "Vänersborg",
  "Nyköping",
  "Mölndal",
  "Örnsköldsvik",
  "Landskrona",
  "Åkersberga",
  "Falköping",
  "Trelleborg",
  "Lidköping",
  "Uddevalla",
]

// Core business keywords
export const CORE_KEYWORDS = {
  sv: [
    "bokningssystem",
    "webbplats",
    "mobilapp",
    "företag",
    "digitalisering",
    "online bokning",
    "kalenderhantering",
    "kundbokning",
    "digital närvaro",
    "automatiserade påminnelser",
    "företagslösningar",
    "bokningsapp",
    "salong bokningssystem",
    "frisör bokningssystem",
    "skönhetssalong app",
    "företagswebbplats",
    "responsiv design",
    "SEO optimering",
  ],
  en: [
    "booking system",
    "website",
    "mobile app",
    "business",
    "digitalization",
    "online booking",
    "calendar management",
    "customer booking",
    "digital presence",
    "automated reminders",
    "business solutions",
    "booking app",
    "salon booking system",
    "barber booking system",
    "beauty salon app",
    "business website",
    "responsive design",
    "SEO optimization",
  ],
}

// Enhanced metadata configuration
export const createSEOConfig = (language: "sv" | "en") => {
  const isSwedish = language === "sv"

  const baseConfig = {
    title: isSwedish
      ? "Axie Studio - Bokningssystem som förenklar din vardag"
      : "Axie Studio - Booking System That Simplifies Your Day",
    description: isSwedish
      ? "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet. Öka kundnöjdheten och få full kontroll över din kalender med våra anpassade lösningar."
      : "Customized booking systems and websites to streamline your business. Increase customer satisfaction and gain full control over your calendar with our tailored solutions.",
    keywords: CORE_KEYWORDS[language],
    url: isSwedish ? "https://www.axiestudio.se" : "https://www.axiestudio.se/en",
    locale: isSwedish ? "sv_SE" : "en_US",
    ogImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
  }

  // Enhanced keywords with city targeting for local SEO
  const enhancedKeywords = [
    ...baseConfig.keywords,
    ...SWEDISH_CITIES.map((city) => `${isSwedish ? "bokningssystem" : "booking system"} ${city}`),
    ...SWEDISH_CITIES.map((city) => `${isSwedish ? "webbplats" : "website"} ${city}`),
  ]

  return {
    ...baseConfig,
    enhancedKeywords,
  }
}

// Browser-specific optimizations
export const BROWSER_OPTIMIZATIONS = {
  edge: {
    "msapplication-TileColor": "#0c8de0",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-navbutton-color": "#0c8de0",
    "msapplication-starturl": "/",
    "msapplication-window": "width=1024;height=768",
  },
  safari: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Axie Studio",
    "apple-touch-fullscreen": "yes",
  },
  chrome: {
    "mobile-web-app-capable": "yes",
    "application-name": "Axie Studio",
  },
  firefox: {
    "theme-color": "#0c8de0",
  },
}

// AI-friendly metadata
export const AI_METADATA = {
  "ai:content-type": "business-website",
  "ai:crawlable": "true",
  "ai:indexable": "true",
  "ai:business-type": "booking-system-provider",
  "ai:service-area": SWEDISH_CITIES.join(", "),
  "ai:primary-services": "booking-systems,websites,mobile-apps",
  "ai:target-audience": "business-owners,salons,barbers,service-providers",
  "ai:content-structure": "sections,features,pricing,benefits",
  "ai:last-updated": new Date().toISOString().split("T")[0],
  "ai:data-format": "json-ld,microdata,rdfa",
  "ai:machine-readable": "true",
}
