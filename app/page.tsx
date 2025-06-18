"use client"

import { useState } from "react"
import { ModernHeader } from "@/components/modern-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSectionNoI18n } from "@/components/sections/hero-section-no-i18n"
import { FeaturesSectionNoI18n } from "@/components/sections/features-section-no-i18n"
import { AppBenefitsSection } from "@/components/sections/app-benefits-section"
import { MobileAppsSectionNoI18n } from "@/components/sections/mobile-apps-section-no-i18n"
import { PricingSection } from "@/components/sections/pricing-section"
import { AdminAppSection } from "@/components/sections/admin-app-section"
import { DownloadAppSection } from "@/components/sections/download-app-section"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { GoogleCalendarPopup } from "@/components/google-calendar-popup"
import { PerformanceOptimizer } from "@/components/performance-optimizer"
import { DirectPwaInstall } from "@/components/direct-pwa-install"
import Script from "next/script"
import ClientLayout from "./client-layout"

// Define the features data
const features = [
  {
    title: "Anpassade bokningslänkar",
    description:
      "Personliga bokningslänkar som matchar ditt företags varumärke för smidig självbetjäningsschemaläggning.",
    icon: "Calendar",
    benefits: [
      "Skapa obegränsat antal bokningslänkar",
      "Anpassa utseendet efter ditt varumärke",
      "Dela enkelt via e-post eller sociala medier",
    ],
  },
  {
    title: "Varumärkesanpassat gränssnitt",
    description: "Kalenderns bokningsportal är helt anpassningsbar med företagets logotyp, färger och meddelanden.",
    icon: "LayoutGrid",
    benefits: [
      "Anpassa färger och typsnitt",
      "Lägg till din logotyp och bilder",
      "Skapa personliga bekräftelsemeddelanden",
    ],
  },
  {
    title: "Dynamiska tillgänglighetsinställningar",
    description:
      "Ställ in specifika arbetstider, bufferttider och möteslängder för att säkerställa korrekt schemaläggning.",
    icon: "Clock",
    benefits: [
      "Definiera arbetstider för varje veckodag",
      "Ställ in bufferttider mellan möten",
      "Blockera specifika datum och tider",
    ],
  },
  {
    title: "Automatiska påminnelser",
    description:
      "Skickar påminnelser via SMS, e-post eller notiser, anpassade med företagets varumärke och mötesdetaljer.",
    icon: "Mail",
    benefits: [
      "Schemalägg påminnelser vid specifika tidpunkter",
      "Anpassa innehållet i påminnelserna",
      "Välj mellan SMS, e-post eller båda",
    ],
  },
  {
    title: "Betalningsintegrationer",
    description:
      "Säker betalningshantering som låter dig ta emot depositioner eller fullständiga betalningar vid bokning.",
    icon: "CreditCard",
    benefits: [
      "Integrera med populära betalningslösningar",
      "Ta emot depositioner eller fullständiga betalningar",
      "Automatiska kvitton och bokföringsunderlag",
    ],
  },
]

// Updated pricing plans with the specific pricing details
const pricingPlans = [
  {
    title: "Webbplats",
    description: "Professionell webbplats för din verksamhet",
    setupFee: "1 495 kr",
    monthlyPrice: "495 kr/mån",
    oneTimePrice: "8 995 kr",
    features: [
      { name: "Responsiv webbdesign", included: true, tooltip: "Fungerar på alla enheter" },
      { name: "SEO-optimering", included: true, tooltip: "Bättre synlighet i sökmotorer" },
      { name: "Kontaktformulär", included: true },
      { name: "Sociala medier-integration", included: true },
      { name: "Bokningssystem", included: false },
      { name: "Mobilapp", included: false },
    ],
    color: "blue",
    badge: "Bäst för nystartade",
  },
  {
    title: "Bokningswebbapp",
    description: "Professionell webbplats med integrerat bokningssystem (PWA)",
    setupFee: "3 995 kr",
    monthlyPrice: "995 kr/mån",
    oneTimePrice: "14 995 kr",
    features: [
      { name: "Allt i Webbplats-paketet", included: true },
      { name: "Progressiv Webbapp (PWA)", included: true, tooltip: "Fungerar som en native app" },
      { name: "Bokningssystem", included: true, tooltip: "Komplett bokningssystem" },
      { name: "Betalningsintegrationer", included: true },
      { name: "Automatiska påminnelser", included: true },
      { name: "*För native App Store/iOS APK - kontakta oss", included: false },
    ],
    popular: true,
  },
  {
    title: "Commerce",
    description: "Webbplats med webshop",
    setupFee: "3 995 kr",
    monthlyPrice: "995 kr/mån",
    features: [
      { name: "Allt i Webbplats-paketet", included: true },
      { name: "E-handelsfunktionalitet", included: true },
      { name: "Produkthantering", included: true },
      { name: "Betalningshantering", included: true },
      { name: "Orderhantering", included: true },
      { name: "Kundkonton", included: true },
    ],
  },
  {
    title: "Komplett lösning",
    description: "Webbplats, PWA som App, webshop, bokningssystem",
    setupFee: "3 995 kr",
    monthlyPrice: "1495 kr/mån",
    features: [
      { name: "Allt i tidigare paket", included: true },
      { name: "Avancerat bokningssystem", included: true, tooltip: "Fullständigt bokningssystem med alla funktioner" },
      { name: "Dedikerad mobilapp", included: true },
      { name: "Webbplats-inloggning", included: true },
      { name: "Prioriterad support 24/7", included: true },
      { name: "Obegränsade bokningar", included: true },
      { name: "Automatiserad marknadsföring", included: true, tooltip: "E-post och SMS-kampanjer" },
    ],
    color: "purple",
    monthlyOnly: true,
    badge: "Mest värde",
  },
]

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Function to handle booking consultation
  const handleBookConsultation = () => {
    setIsDialogOpen(true)
  }

  // Function to close the booking dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  // Function to handle explore click
  const handleExploreClick = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Create structured data for the whole page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.axiestudio.se/",
    name: "Axie Studio - Bokningssystem som förenklar din vardag",
    description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
    isPartOf: {
      "@type": "WebSite",
      name: "Axie Studio",
      url: "https://www.axiestudio.se/",
    },
    about: {
      "@type": "Service",
      name: "Bokningssystem",
      description: "Skräddarsydda bokningssystem som förenklar din vardag och effektiviserar din verksamhet.",
    },
    mainEntity: {
      "@type": "Organization",
      name: "Axie Studio",
      url: "https://www.axiestudio.se",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Axie%20Studio%2C%20make%20me%20a%20logo.%20this%20is%20the%20slogan_%20Build%2C%20Book%2C%20Automate_%20Your%20Digital%20Success%2C%20Simplified.%20Webdesign%2C%20A%20logo.jpg-9TpSWijKv6YusfcFqgORDfnWmzW9uR.jpeg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+46793436438",
        contactType: "customer service",
        email: "support@jonkoping.site",
      },
    },
  }

  return (
    <ClientLayout>
      <div className="flex flex-col min-h-screen">
        <PerformanceOptimizer />

        <Script
          id="main-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <ModernHeader />

        <main className="flex-1">
          <HeroSectionNoI18n onDemoClick={handleBookConsultation} onExploreClick={handleExploreClick} />
          <FeaturesSectionNoI18n features={features} onDemoClick={handleBookConsultation} />
          <AppBenefitsSection onDemoClick={handleBookConsultation} />
          <AdminAppSection />
          <MobileAppsSectionNoI18n onDemoClick={handleBookConsultation} />
          <PricingSection plans={pricingPlans} onContactClick={handleBookConsultation} />
          <DownloadAppSection />
        </main>

        <SiteFooter />
        <ScrollToTop />
        <DirectPwaInstall />

        {/* Google Calendar Popup */}
        <GoogleCalendarPopup isOpen={isDialogOpen} onClose={handleCloseDialog} />
      </div>
    </ClientLayout>
  )
}