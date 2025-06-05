import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, Cog, Laptop } from "lucide-react"

import { Button } from "@/components/ui/button"
import { generateMetadata } from "@/app/seo.config.ts"

export const metadata: Metadata = generateMetadata(
  "Våra tjänster | Axie Studio",
  "Upptäck våra skräddarsydda tjänster för webbplatser, bokningssystem och automation.",
  "/services",
)

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 section-gradient-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none hero-title">
                Våra <span className="text-gradient">tjänster</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl hero-subtitle">
                Skräddarsydda digitala lösningar för att effektivisera din verksamhet och öka din digitala närvaro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-100 dark:bg-brand-800/30 px-3 py-1 text-sm text-brand-800 dark:text-brand-300">
                  Webbplatser
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Moderna webbplatser som konverterar
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Vi skapar skräddarsydda webbplatser som är optimerade för att konvertera besökare till kunder.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span>Responsiv design som fungerar på alla enheter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span>SEO-optimerad för bättre synlighet i sökmotorer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span>Snabb laddningstid för bättre användarupplevelse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span>Integrationer med sociala medier och andra verktyg</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/blog">
                    <Button>
                      Läs mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full md:h-[400px] overflow-hidden rounded-lg border bg-background">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Laptop className="h-24 w-24 text-brand-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="order-2 md:order-1 flex items-center justify-center">
                <div className="relative h-[300px] w-full md:h-[400px] overflow-hidden rounded-lg border bg-background">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="h-24 w-24 text-accent1-500" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-block rounded-lg bg-accent1-100 dark:bg-accent1-800/30 px-3 py-1 text-sm text-accent1-800 dark:text-accent1-300">
                  Bokningssystem
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Effektiva bokningssystem
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Vi implementerar bokningssystem som sparar tid och ökar kundnöjdheten.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent1-500"></div>
                    <span>Online-bokning dygnet runt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent1-500"></div>
                    <span>Automatiska påminnelser via SMS och e-post</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent1-500"></div>
                    <span>Integrationer med betalningslösningar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent1-500"></div>
                    <span>Anpassad efter din verksamhets behov</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/blog">
                    <Button>
                      Läs mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-accent2-100 dark:bg-accent2-800/30 px-3 py-1 text-sm text-accent2-800 dark:text-accent2-300">
                  Automation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Automatisera repetitiva uppgifter
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Vi hjälper dig att automatisera repetitiva uppgifter så att du kan fokusera på det som är viktigt.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent2-500"></div>
                    <span>Arbetsflödesautomation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent2-500"></div>
                    <span>Integrationer mellan olika system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent2-500"></div>
                    <span>Automatiserad datahantering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent2-500"></div>
                    <span>Anpassade lösningar för din verksamhet</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/blog">
                    <Button>
                      Läs mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full md:h-[400px] overflow-hidden rounded-lg border bg-background">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cog className="h-24 w-24 text-accent2-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-brand-600 to-accent1-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl section-title">
                Redo att ta din verksamhet till nästa nivå?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Boka en kostnadsfri konsultation med oss idag och upptäck hur vi kan hjälpa dig att växa.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
                Boka konsultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Kontakta oss
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
