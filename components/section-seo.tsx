"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

interface SectionSEOProps {
  title: string
  description: string
  slug: string
  type?: string
  image?: string
  datePublished?: string
  dateModified?: string
  keywords?: string[]
  author?: string
}

export function SectionSEO({
  title,
  description,
  slug,
  type = "WebPage",
  image = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  keywords = ["bokningssystem", "webbplatser", "automation", "digital närvaro"],
  author = "Axie Studio",
}: SectionSEOProps) {
  const pathname = usePathname()
  const baseUrl = "https://www.axiestudio.se"
  const fullUrl = `${baseUrl}${pathname}${slug ? `#${slug}` : ""}`
  const sectionPageUrl = `${baseUrl}/sections/${slug}`

  // Create enhanced structured data for this section
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": sectionPageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
    headline: title,
    name: title.split("|")[0].trim(),
    description: description,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Organization",
      name: author,
      url: baseUrl,
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
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
        width: 600,
        height: 60,
      },
    },
    isPartOf: {
      "@type": "WebPage",
      "@id": baseUrl,
      name: "Axie Studio - Bokningssystem som förenklar din vardag",
      description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
    },
    potentialAction: {
      "@type": "ReadAction",
      target: [sectionPageUrl],
    },
    keywords: keywords.join(", "),
  }

  return (
    <>
      <Script
        id={`structured-data-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="hidden">
        <h2 id={slug}>{title}</h2>
        <meta name="description" content={description} />
        <link rel="canonical" href={sectionPageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={sectionPageUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Axie Studio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="keywords" content={keywords.join(", ")} />
      </div>
    </>
  )
}
