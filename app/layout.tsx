import "./globals.css"
import { inter, montserrat } from "./fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#0c8de0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Axie Studio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Axie Studio" />
        <meta name="msapplication-TileColor" content="#0c8de0" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-navbutton-color" content="#0c8de0" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}