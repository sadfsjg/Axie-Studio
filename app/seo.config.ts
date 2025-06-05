import type { Metadata } from "next"

export const seoConfig = {
  title: "Axie Studio | Build, Book, Automate",
  description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
  keywords: ["bokningssystem", "webbplatser", "automation", "digital närvaro", "företagswebbplats", "online bokning"],
  url: "https://www.axiestudio.se",
  ogImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Axie%20Studio%2C%20make%20me%20a%20logo.%20this%20is%20the%20slogan_%20Build%2C%20Book%2C%20Automate_%20Your%20Digital%20Success%2C%20Simplified.%20Webdesign%2C%20A%20logo.jpg-WzxPB4vLgVbgwF4DTaTiqteJwHKvrv.jpeg",
}

export const baseMetadata: Metadata = {
  title: {
    default: "Axie Studio | Build, Book, Automate",
    template: "%s | Axie Studio",
  },
  description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
  keywords: ["bokningssystem", "webbplatser", "automation", "digital närvaro", "företagswebbplats", "online bokning"],
  authors: [{ name: "Axie Studio" }],
  creator: "Axie Studio",
  publisher: "Axie Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://axiestudio.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://axiestudio.se",
    title: "Axie Studio | Build, Book, Automate",
    description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
    siteName: "Axie Studio",
    images: [seoConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axie Studio | Build, Book, Automate",
    description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
    images: [seoConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "192x192", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/maskable-icon.png",
        sizes: "512x512",
      },
    ],
  },
}

export function generateMetadata(title: string, description: string, path: string): Metadata {
  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url: `https://axiestudio.se${path}`,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description,
    },
  }
}
