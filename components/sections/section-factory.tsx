"use client"

import type { ComponentType } from "react"
import { useI18n } from "@/lib/i18n"

// Import all section components
import { HeroSection as SwedishHeroSection } from "./hero-section"
import { HeroSectionEn as EnglishHeroSection } from "./en/hero-section"
import { FeaturesSection as SwedishFeaturesSection } from "./features-section"
import { FeaturesSectionEn as EnglishFeaturesSection } from "./en/features-section"
import { PricingSection as SwedishPricingSection } from "./pricing-section"
import { PricingSectionEn as EnglishPricingSection } from "./en/pricing-section"
import { MobileAppsSection as SwedishMobileAppsSection } from "./mobile-apps-section"
import { MobileAppsSectionEn as EnglishMobileAppsSection } from "./en/mobile-apps-section"
import { CtaSection as SwedishCtaSection } from "./cta-section"
import { CtaSectionEn as EnglishCtaSection } from "./en/cta-section"

// Define section mapping
const sectionComponents = {
  hero: {
    SE: SwedishHeroSection,
    EN: EnglishHeroSection,
  },
  features: {
    SE: SwedishFeaturesSection,
    EN: EnglishFeaturesSection,
  },
  pricing: {
    SE: SwedishPricingSection,
    EN: EnglishPricingSection,
  },
  mobileApps: {
    SE: SwedishMobileAppsSection,
    EN: EnglishMobileAppsSection,
  },
  cta: {
    SE: SwedishCtaSection,
    EN: EnglishCtaSection,
  },
}

// Section factory function
export function createSection<P extends object>(sectionType: keyof typeof sectionComponents, props: P) {
  return function SectionWrapper(additionalProps: Partial<P> = {}) {
    const { language } = useI18n()
    const SectionComponent = sectionComponents[sectionType][language] as ComponentType<P>

    return <SectionComponent {...props} {...additionalProps} />
  }
}
