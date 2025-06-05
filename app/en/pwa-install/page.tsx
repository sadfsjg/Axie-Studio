import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Smartphone, Zap, Wifi, Clock, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Install Axie Studio App",
  description: "Learn how to install Axie Studio as an app on your device for faster access and better experience.",
}

export default function PwaInstallPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/en" className="mb-8 inline-flex items-center text-blue-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to homepage
      </Link>

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Install Axie Studio App</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Get a better experience by installing Axie Studio as an app on your device. Follow the instructions below
          based on your device.
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Faster</h3>
          <p className="text-gray-600">The app loads faster than the website and provides a smoother experience.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Wifi className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Offline Support</h3>
          <p className="text-gray-600">Use the app even when you don't have an internet connection.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Save Time</h3>
          <p className="text-gray-600">Direct access from your home screen without having to open the browser.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Star className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Better Experience</h3>
          <p className="text-gray-600">The app provides a more integrated and app-like experience.</p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Installation Guides</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* iOS Installation */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">iOS (iPhone & iPad)</h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-medium">1. Open Safari</p>
                <p className="text-sm text-gray-600">
                  Axie Studio must be opened in the Safari browser to be installed.
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium">2. Tap the share icon</p>
                <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/ios-safari-add-to-home-screen.png"
                    alt="Tap the share icon in Safari"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 font-medium">3. Tap "Add to Home Screen"</p>
                <p className="text-sm text-gray-600">Scroll down in the menu if you don't see the option right away.</p>
              </div>

              <div>
                <p className="mb-2 font-medium">4. Tap "Add"</p>
                <p className="text-sm text-gray-600">The app will now be installed on your home screen.</p>
              </div>
            </div>
          </div>

          {/* Android Installation */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Android</h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-medium">1. Open Chrome</p>
                <p className="text-sm text-gray-600">
                  Axie Studio must be opened in the Chrome browser to be installed.
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium">2. Tap the menu (three dots)</p>
                <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image src="/android-pwa-install.png" alt="Tap the menu in Chrome" fill className="object-contain" />
                </div>
              </div>

              <div>
                <p className="mb-2 font-medium">3. Tap "Add to Home screen"</p>
                <p className="text-sm text-gray-600">On some devices, it might say "Install app" or similar.</p>
              </div>

              <div>
                <p className="mb-2 font-medium">4. Follow the instructions</p>
                <p className="text-sm text-gray-600">Confirm the installation when prompted.</p>
              </div>
            </div>
          </div>

          {/* Desktop Installation */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Desktop (Windows, Mac, Linux)</h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-medium">1. Open Chrome, Edge, or other Chromium-based browser</p>
                <p className="text-sm text-gray-600">
                  Firefox and Safari on desktop unfortunately don't support installing web apps.
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium">2. Look for the installation icon in the address bar</p>
                <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="/desktop-pwa-installation.png"
                    alt="Installation icon in address bar"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 font-medium">3. Click the icon and select "Install"</p>
                <p className="text-sm text-gray-600">
                  The app will be installed and can be launched from your desktop or start menu.
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
        <h2 className="mb-4 text-2xl font-bold">Ready to install?</h2>
        <p className="mb-6 mx-auto max-w-2xl text-gray-600">
          Go back to the homepage and follow the instructions above to install Axie Studio as an app.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          <Download className="mr-2 h-5 w-5" />
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
