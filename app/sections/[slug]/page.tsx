import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ChevronRight, Home } from "lucide-react"

// Define the section data with enhanced SEO information
const sections = {
  hero: {
    title: "Bokningssystem som förenklar din vardag | Axie Studio",
    description:
      "Effektivisera din verksamhet med vårt skräddarsydda bokningssystem. Spara tid, öka kundnöjdheten och få full kontroll över din kalender.",
    type: "WebPage",
    keywords: ["bokningssystem", "effektivisera verksamhet", "kundnöjdhet", "kalenderhantering"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
    datePublished: "2023-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    content:
      "Vårt bokningssystem hjälper dig att effektivisera din verksamhet genom att automatisera bokningsprocessen, minska administrativt arbete och öka kundnöjdheten. Med vårt system får du full kontroll över din kalender och kan enkelt hantera bokningar, ombokningar och avbokningar.",
  },
  features: {
    title: "Kraftfulla funktioner för bokningssystem | Axie Studio",
    description:
      "Upptäck våra kraftfulla funktioner som hjälper dig att optimera din verksamhet med anpassade bokningslänkar, automatiska påminnelser och betalningsintegrationer.",
    type: "ItemList",
    keywords: [
      "bokningssystem funktioner",
      "anpassade bokningslänkar",
      "automatiska påminnelser",
      "betalningsintegrationer",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
    datePublished: "2023-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    content:
      "Vårt bokningssystem erbjuder en rad kraftfulla funktioner som hjälper dig att optimera din verksamhet. Med anpassade bokningslänkar, automatiska påminnelser, betalningsintegrationer, dynamiska tillgänglighetsinställningar och varumärkesanpassat gränssnitt får du ett komplett system som möter alla dina behov.",
  },
  "app-benefits": {
    title: "Fördelar med vår bokningsapp | Axie Studio",
    description:
      "Med vårt bokningssystem får du en dedikerad app som förenklar din vardag och förbättrar kundupplevelsen.",
    type: "ItemList",
    keywords: [
      "bokningsapp",
      "dedikerad app",
      "mobilapp",
      "kalendersynkronisering",
      "automatiska påminnelser",
      "kundhantering",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720.jpg-MfPWigKKVAqAKfhcIwZeDtYBdmjb3H.jpeg",
    datePublished: "2023-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    content:
      "Med vårt bokningssystem får du en dedikerad mobilapp som förenklar din vardag och förbättrar kundupplevelsen. Appen ger dina kunder en professionell bokningsupplevelse med ditt varumärke, synkroniserar bokningar med din kalender, skickar automatiska påminnelser, ger detaljerad statistik, hjälper dig att bygga en kunddatabas och möjliggör integrerad kommunikation med dina kunder.",
  },
  "mobile-apps": {
    title: "Mobilappar för dina kunder | Axie Studio",
    description: "Ge dina kunder en professionell bokningsupplevelse med en skräddarsydd mobilapp i ditt varumärke.",
    type: "ItemList",
    keywords: ["mobilappar", "kundapp", "bokningsapp", "varumärkesanpassad app", "iOS app", "Android app"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hq720.jpg-1yYwbjuXDIeQD7myqQFmwqBLFv6eug.jpeg",
    datePublished: "2023-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    content:
      "Våra skräddarsydda mobilappar ger dina kunder en professionell bokningsupplevelse med ditt varumärke. Apparna är anpassade efter din grafiska profil, erbjuder säker inloggning, snabb bokning, och fungerar på både iOS och Android. Du kan även skicka personliga erbjudanden direkt till dina kunders mobiler.",
  },
  cta: {
    title: "Boka en kostnadsfri konsultation | Axie Studio",
    description: "Låt oss diskutera hur vårt bokningssystem kan anpassas för att effektivisera just din verksamhet.",
    type: "Service",
    keywords: ["kostnadsfri konsultation", "bokningssystem", "effektivisera verksamhet", "skräddarsydda lösningar"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
    datePublished: "2023-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    content:
      "Boka en kostnadsfri konsultation med oss för att diskutera hur vårt bokningssystem kan anpassas för att effektivisera just din verksamhet. Under konsultationen går vi igenom dina specifika behov och visar hur vårt system kan hjälpa dig att spara tid, öka kundnöjdheten och få full kontroll över din kalender.",
  },
  pricing: {
    title: "Priser för bokningssystem och webbplatser | Axie Studio",
    description: "Skräddarsydda lösningar för alla typer av verksamheter. Välj det paket som passar dig bäst.",
    type: "Offer",
    keywords: ["bokningssystem priser", "webbplats priser", "skräddarsydda lösningar", "prispaket"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
    datePublished: "2023-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    content:
      "Vi erbjuder skräddarsydda lösningar för alla typer av verksamheter. Välj mellan våra olika prispaket: Webbplats, Webbplats + Bokningssystem, eller Komplett lösning med automation. Kontakta oss för en personlig prisuppgift baserad på dina specifika behov.",
  },
}

// Generate metadata for the page with enhanced SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug
  const section = sections[slug as keyof typeof sections]

  if (!section) {
    return {
      title: "Section Not Found | Axie Studio",
      description: "The requested section could not be found.",
    }
  }

  return {
    title: section.title,
    description: section.description,
    keywords: section.keywords,
    alternates: {
      canonical: `https://www.axiestudio.se/sections/${slug}`,
    },
    openGraph: {
      title: section.title,
      description: section.description,
      url: `https://www.axiestudio.se/sections/${slug}`,
      siteName: "Axie Studio",
      images: [
        {
          url: section.image,
          width: 1200,
          height: 630,
          alt: section.title,
        },
      ],
      locale: "sv_SE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: section.title,
      description: section.description,
      images: [section.image],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: "Axie Studio", url: "https://www.axiestudio.se" }],
    publisher: "Axie Studio",
    creator: "Axie Studio",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  }
}

export default function SectionPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const section = sections[slug as keyof typeof sections]

  if (!section) {
    notFound()
  }

  // Create enhanced structured data for this section
  const structuredData = {
    "@context": "https://schema.org",
    "@type": section.type,
    "@id": `https://www.axiestudio.se/sections/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.axiestudio.se/sections/${slug}`,
    },
    headline: section.title,
    name: section.title.split("|")[0].trim(),
    description: section.description,
    image: {
      "@type": "ImageObject",
      url: section.image,
      width: 1200,
      height: 630,
    },
    datePublished: section.datePublished,
    dateModified: section.dateModified,
    author: {
      "@type": "Organization",
      name: "Axie Studio",
      url: "https://www.axiestudio.se",
      logo: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
        width: 600,
        height: 60,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Axie Studio",
      url: "https://www.axiestudio.se",
      logo: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
        width: 600,
        height: 60,
      },
    },
    keywords: section.keywords.join(", "),
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.axiestudio.se/#website",
      name: "Axie Studio",
      url: "https://www.axiestudio.se",
    },
  }

  // Add structured breadcrumbs data
  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hem",
        item: "https://www.axiestudio.se",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: section.title.split("|")[0].trim(),
        item: `https://www.axiestudio.se/sections/${slug}`,
      },
    ],
  }

  // Add FAQ schema for specific sections
  const faqSchema =
    slug === "features" || slug === "pricing" || slug === "app-benefits" || slug === "mobile-apps"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name:
                slug === "features"
                  ? "Vilka funktioner ingår i bokningssystemet?"
                  : slug === "pricing"
                    ? "Vad kostar bokningssystemet?"
                    : slug === "app-benefits"
                      ? "Vad är fördelarna med er bokningsapp?"
                      : "Hur fungerar mobilapparna för kunderna?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  slug === "features"
                    ? "Vårt bokningssystem inkluderar anpassade bokningslänkar, varumärkesanpassat gränssnitt, dynamiska tillgänglighetsinställningar, automatiska påminnelser och betalningsintegrationer."
                    : slug === "pricing"
                      ? "Vi erbjuder skräddarsydda lösningar baserade på dina behov. Kontakta oss för en personlig prisuppgift."
                      : slug === "app-benefits"
                        ? "Med vår bokningsapp får du en dedikerad mobilapp med ditt varumärke, kalendersynkronisering, automatiska påminnelser, detaljerad statistik, kundhantering och integrerad kommunikation."
                        : "Våra mobilappar är skräddarsydda efter ditt varumärke och ger dina kunder en professionell bokningsupplevelse med säker inloggning, snabb bokning och personliga erbjudanden.",
              },
            },
            {
              "@type": "Question",
              name:
                slug === "features"
                  ? "Kan jag anpassa bokningssystemet efter mitt varumärke?"
                  : slug === "pricing"
                    ? "Finns det olika prispaket?"
                    : slug === "app-benefits"
                      ? "Är appen tillgänglig för både iOS och Android?"
                      : "Kan jag skicka meddelanden till kunderna via appen?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  slug === "features"
                    ? "Ja, vårt bokningssystem är helt anpassningsbart med ditt företags logotyp, färger och meddelanden."
                    : slug === "pricing"
                      ? "Ja, vi erbjuder olika paket: Webbplats, Webbplats + Bokningssystem, och Komplett lösning med automation."
                      : slug === "app-benefits"
                        ? "Ja, vår bokningsapp är tillgänglig för både iOS och Android, vilket gör att alla dina kunder kan använda den oavsett vilken typ av smartphone de har."
                        : "Ja, du kan skicka personliga erbjudanden och meddelanden direkt till dina kunders mobiler via appen.",
              },
            },
          ],
        }
      : null

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="breadcrumbs-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {faqSchema && (
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <SiteHeader />

      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb Navigation - Visible for both users and search engines */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol
              className="inline-flex items-center space-x-1 md:space-x-3"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li
                className="inline-flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  itemProp="item"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span itemProp="name">Hem</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-400" itemProp="name">
                    {section.title.split("|")[0].trim()}
                  </span>
                  <meta itemProp="position" content="2" />
                  <link itemProp="item" href={`https://www.axiestudio.se/sections/${slug}`} />
                </div>
              </li>
            </ol>
          </nav>

          {/* Logo for brand recognition in search results */}
          <div className="flex items-center mb-8">
            <div className="relative h-12 w-48 mr-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg"
                alt="Axie Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-6" itemProp="headline">
            {section.title.split("|")[0].trim()}
          </h1>
          <p className="text-lg mb-8" itemProp="description">
            {section.description}
          </p>

          {/* Main content with rich text for better SEO */}
          <div className="mb-8 prose prose-blue max-w-none" itemProp="articleBody">
            <h2 className="text-2xl font-semibold mb-4">Om denna sektion</h2>
            <p>{section.content}</p>
            <p>
              Detta är en dedikerad sida för {section.title.split("|")[0].trim()} sektionen på Axie Studio's webbplats.
              För att se hela webbplatsen och alla sektioner i sitt sammanhang, besök vår{" "}
              <Link href="/" className="text-blue-600 hover:underline">
                hemsida
              </Link>
              .
            </p>
          </div>

          {/* Related sections for internal linking */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Relaterade sektioner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(sections)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, value]) => (
                  <Link
                    key={key}
                    href={`/sections/${key}`}
                    className="p-4 border rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <h3 className="font-medium text-blue-600 dark:text-blue-400">{value.title.split("|")[0].trim()}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{value.description}</p>
                  </Link>
                ))}
            </div>
          </div>

          <div className="mt-8">
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Tillbaka till hemsidan
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
