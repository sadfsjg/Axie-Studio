import type { Metadata } from "next"

/**
 * Base metadata configuration for the entire site
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL("https://www.axiestudio.se"),
  title: {
    template: "%s | Axie Studio",
    default: "Axie Studio - Bokningssystem som förenklar din vardag",
  },
  description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
  applicationName: "Axie Studio",
  authors: [{ name: "Axie Studio", url: "https://www.axiestudio.se" }],
  generator: "Next.js",
  keywords: [
    "bokningssystem",
    "webbplatser",
    "automation",
    "digital närvaro",
    "företagsbokningar",
    "online bokning",
    "kalenderhantering",
    "kundbokning",
    "bokningslösning",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Axie Studio",
  publisher: "Axie Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      me: ["support@jonkoping.site"],
    },
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
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://www.axiestudio.se",
    siteName: "Axie Studio",
    title: "Axie Studio - Bokningssystem som förenklar din vardag",
    description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
        width: 1200,
        height: 630,
        alt: "Axie Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axie Studio - Bokningssystem som förenklar din vardag",
    description: "Skräddarsydda bokningssystem och webbplatser för att effektivisera din verksamhet.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
    ],
    creator: "@axiestudio",
    site: "@axiestudio",
  },
  alternates: {
    canonical: "https://www.axiestudio.se",
    languages: {
      "sv-SE": "https://www.axiestudio.se",
      "en-US": "https://www.axiestudio.se/en",
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-config": "/browserconfig.xml",
  },
}
