import Head from "next/head"

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogUrl?: string
  ogType?: string
}

export function MetaTags({
  title = "Axie Studio - Bokningssystem som förenklar din vardag",
  description = "Effektivisera din verksamhet med vårt skräddarsydda bokningssystem. Spara tid, öka kundnöjdheten och få full kontroll över din kalender.",
  keywords = ["bokningssystem", "webbplatser", "automation", "digital närvaro", "företagswebbplats", "online bokning"],
  ogImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-o0KJHjlQG9dIPQPW9CLptlYLWxjpsa.jpeg",
  ogUrl = "https://www.axiestudio.se",
  ogType = "website",
}: MetaTagsProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* PWA Meta Tags */}
      <meta name="application-name" content="Axie Studio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Axie Studio" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#0c8de0" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#0c8de0" />

      {/* PWA Icons */}
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  )
}
