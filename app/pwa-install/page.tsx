import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Smartphone, Zap, Wifi, Clock, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Installera Axie Studio App",
  description:
    "Lär dig hur du installerar Axie Studio som en app på din enhet för snabbare åtkomst och bättre upplevelse.",
}

export default function PwaInstallPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="mb-8 inline-flex items-center text-blue-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tillbaka till startsidan
      </Link>

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Installera Axie Studio App</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Få en bättre upplevelse genom att installera Axie Studio som en app på din enhet. Följ instruktionerna nedan
          baserat på din enhet.
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Snabbare</h3>
          <p className="text-gray-600">Appen laddas snabbare än webbsidan och ger en smidigare upplevelse.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Wifi className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Offline-stöd</h3>
          <p className="text-gray-600">Använd appen även när du inte har internetanslutning.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Spara tid</h3>
          <p className="text-gray-600">Direktåtkomst från din hemskärm utan att behöva öppna webbläsaren.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Star className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Bättre upplevelse</h3>
          <p className="text-gray-600">Appen ger en mer integrerad och app-liknande upplevelse.</p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Installationsguider</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* iOS Installation */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">iOS (iPhone & iPad)</h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-medium">1. Öppna Safari</p>
                <p className="text-sm text-gray-600">
                  Axie Studio måste öppnas i Safari-webbläsaren för att kunna installeras.
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium">2. Tryck på dela-ikonen</p>
                <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/ios-safari-add-to-home-screen.png"
                    alt="Tryck på dela-ikonen i Safari"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 font-medium">3. Tryck på "Lägg till på hemskärmen"</p>
                <p className="text-sm text-gray-600">Scrolla ner i menyn om du inte ser alternativet direkt.</p>
              </div>

              <div>
                <p className="mb-2 font-medium">4. Tryck på "Lägg till"</p>
                <p className="text-sm text-gray-600">Appen kommer nu att installeras på din hemskärm.</p>
              </div>
            </div>
          </div>

          {/* Android Installation */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Android</h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-medium">1. Öppna Chrome</p>
                <p className="text-sm text-gray-600">
                  Axie Studio måste öppnas i Chrome-webbläsaren för att kunna installeras.
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium">2. Tryck på menyn (tre prickar)</p>
                <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image src="/android-pwa-install.png" alt="Tryck på menyn i Chrome" fill className="object-contain" />
                </div>
              </div>

              <div>
                <p className="mb-2 font-medium">3. Tryck på "Lägg till på startskärmen"</p>
                <p className="text-sm text-gray-600">På vissa enheter kan det heta "Installera app" eller liknande.</p>
              </div>

              <div>
                <p className="mb-2 font-medium">4. Följ instruktionerna</p>
                <p className="text-sm text-gray-600">Bekräfta installationen när du blir tillfrågad.</p>
              </div>
            </div>
          </div>

          {/* Desktop Installation */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Desktop (Windows, Mac, Linux)</h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-medium">1. Öppna Chrome, Edge eller annan Chromium-baserad webbläsare</p>
                <p className="text-sm text-gray-600">
                  Firefox och Safari på desktop stödjer tyvärr inte installation av webbappar.
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium">2. Titta efter installationsikonen i adressfältet</p>
                <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/desktop-pwa-installation.png"
                    alt="Installationsikon i adressfältet"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 font-medium">3. Klicka på ikonen och välj "Installera"</p>
                <p className="text-sm text-gray-600">
                  Appen kommer att installeras och kan startas från skrivbordet eller startmenyn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-blue-50 p-8 text-center">
        <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <Smartphone className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="mb-4 text-2xl font-bold">Redo att installera?</h2>
        <p className="mb-6 mx-auto max-w-2xl text-gray-600">
          Gå tillbaka till startsidan och följ instruktionerna ovan för att installera Axie Studio som en app.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          <Download className="mr-2 h-5 w-5" />
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  )
}
