// Define the translation type
export type TranslationKey = string

// Define the translations
export const translations = {
  sv: {
    // Navigation
    "nav.features": "Funktioner",
    "nav.appBenefits": "App-fördelar",
    "nav.mobileApps": "Mobilappar",
    "nav.pricing": "Priser",
    "nav.contact": "Kontakt",
    "nav.admin": "Admin",
    "nav.customerApps": "Kundappar",

    // Common
    "common.installApp": "Installera App",
    "common.appLogin": "App Login",
    "common.bookDemo": "Boka Demo",
    "common.exploreFeatures": "Utforska funktioner",

    // Hero
    "hero.title": "Bokningssystem som förenklar din vardag",
    "hero.subtitle":
      "Effektivisera din verksamhet med vårt skräddarsydda bokningssystem. Spara tid, öka kundnöjdheten och få full kontroll över din kalender.",
    "hero.futureBooking": "Framtidens bokningssystem",

    // Footer
    "footer.copyright": "© {year} Axie Studio. Alla rättigheter förbehållna.",
    "footer.navigation": "Navigering",
    "footer.contact": "Kontakt",
    "footer.newsletter": "Prenumerera på vårt nyhetsbrev",
    "footer.newsletter.placeholder": "Din e-postadress",
    "footer.newsletter.button": "Prenumerera",
    "footer.links": "Snabblänkar",
    "footer.social": "Följ oss",
  },
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.appBenefits": "App Benefits",
    "nav.mobileApps": "Mobile Apps",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.admin": "Admin",
    "nav.customerApps": "Customer Apps",

    // Common
    "common.installApp": "Install App",
    "common.appLogin": "App Login",
    "common.bookDemo": "Book Demo",
    "common.exploreFeatures": "Explore Features",

    // Hero
    "hero.title": "Booking System That Simplifies Your Day",
    "hero.subtitle":
      "Streamline your business with our customized booking system. Save time, increase customer satisfaction, and gain full control over your calendar.",
    "hero.futureBooking": "The Future of Booking Systems",

    // Footer
    "footer.copyright": "© {year} Axie Studio. All rights reserved.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.newsletter": "Subscribe to our newsletter",
    "footer.newsletter.placeholder": "Your email address",
    "footer.newsletter.button": "Subscribe",
    "footer.links": "Quick links",
    "footer.social": "Follow us",
  },
}

// Function to get a translation
export function getTranslation(
  language: "sv" | "en",
  key: TranslationKey,
  params?: Record<string, string | number>,
): string {
  // Get the translation
  const translation = translations[language][key as keyof (typeof translations)[typeof language]] || key

  // Replace parameters if any
  if (params) {
    return Object.entries(params).reduce(
      (acc, [paramKey, paramValue]) => acc.replace(`{${paramKey}}`, String(paramValue)),
      translation,
    )
  }

  return translation
}
