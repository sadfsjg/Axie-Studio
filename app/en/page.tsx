"use client"

import { useState } from "react"
import { ModernHeader } from "@/components/en/modern-header"
import { SiteFooter } from "@/components/en/site-footer"
import { HeroSectionEnNoI18n } from "@/components/sections/en/hero-section-no-i18n"
import { FeaturesSection } from "@/components/sections/en/features-section"
import { AppBenefitsSectionEn } from "@/components/sections/en/app-benefits-section"
import { MobileAppsSectionEn } from "@/components/sections/en/mobile-apps-section"
import { PricingSectionEn } from "@/components/sections/en/pricing-section"
import { AdminAppSectionEn } from "@/components/sections/en/admin-app-section"
import { DownloadAppSectionEn } from "@/components/sections/en/download-app-section"
import { GoogleCalendarPopup } from "@/components/google-calendar-popup"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { PerformanceOptimizer } from "@/components/performance-optimizer"
import { DirectPwaInstall } from "@/components/en/direct-pwa-install"
import Script from "next/script"
import ClientLayout from "../client-layout"

export default function EnglishHome() {
  const [showCalendarPopup, setShowCalendarPopup] = useState(false)

  // Features data
  const features = [
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

  // Pricing plans data matching Swedish version (keeping SEK currency)
  const pricingPlans = [
    {
      title: "Website",
      description: "Professional website for your business",
      setupFee: "1495 kr",
      monthlyPrice: "295 kr",
      oneTimePrice: "8995 kr",
      features: [
        { name: "Responsive web design", included: true, tooltip: "Works on all devices" },
        { name: "SEO optimization", included: true, tooltip: "Better visibility in search engines" },
        { name: "Contact form", included: true },
        { name: "Social media integration", included: true },
        { name: "Booking system", included: false },
        { name: "Mobile app", included: false },
      ],
      badge: "Best for startups",
    },
    {
      title: "Website + App",
      description: "Website with dedicated mobile app",
      setupFee: "3995 kr",
      monthlyPrice: "495 kr",
      oneTimePrice: "14995 kr",
      features: [
        { name: "Everything in Website package", included: true },
        { name: "Dedicated mobile app", included: true, tooltip: "App with your branding" },
        { name: "Booking system", included: true },
        { name: "Payment integrations", included: true },
        { name: "Automatic reminders", included: true },
        { name: "Custom design", included: true },
      ],
      popular: true,
    },
    {
      title: "Complete solution",
      description: "Everything you need for your business",
      setupFee: "3995 kr",
      monthlyPrice: "995 kr",
      monthlyOnly: true,
      features: [
        { name: "Everything in previous packages", included: true },
        { name: "Website login", included: true },
        { name: "Priority support", included: true },
        { name: "Unlimited bookings", included: true },
        { name: "Custom design", included: true },
        { name: "Payment integrations", included: true },
      ],
      color: "purple",
    }
  ]

  // Create structured data for the English page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.axiestudio.se/en/",
    name: "Axie Studio - Booking System for Salons and Barbers",
    description: "Increase your sales with a modern booking system for salons and barbers.",
    isPartOf: {
      "@type": "WebSite",
      name: "Axie Studio",
      url: "https://www.axiestudio.se/",
    },
    about: {
      "@type": "Service",
      name: "Booking System",
      description: "Customized booking systems that simplify your day and streamline your business.",
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

  const handleDemoClick = () => {
    setShowCalendarPopup(true)
  }

  const handleExploreClick = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ClientLayout>
      <div className="flex min-h-screen flex-col">
        <PerformanceOptimizer />

        <Script
          id="main-structured-data-en"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <ModernHeader />
        <main className="flex-1">
          <HeroSectionEnNoI18n onDemoClick={handleDemoClick} onExploreClick={handleExploreClick} />
          <FeaturesSection features={features} onDemoClick={handleDemoClick} />
          <AppBenefitsSectionEn />
          <AdminAppSectionEn />
          <MobileAppsSectionEn />
          <PricingSectionEn plans={pricingPlans} onContactClick={handleDemoClick} />
          <DownloadAppSectionEn />
        </main>
        <SiteFooter />
        <ScrollToTop />
        <DirectPwaInstall />
        {showCalendarPopup && <GoogleCalendarPopup onClose={() => setShowCalendarPopup(false)} />}
      </div>
    </ClientLayout>
  )
}