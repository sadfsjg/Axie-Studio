import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Supported languages
const supportedLanguages = ["en", "sv"]
const defaultLanguage = "sv"

// Middleware function
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip for static files, api routes, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts")
  ) {
    return NextResponse.next()
  }

  // Handle direct access to English pages
  if (pathname.startsWith("/en")) {
    return NextResponse.next()
  }

  // All other paths default to Swedish - no automatic redirection
  return NextResponse.next()
}

// Configure middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts, /images (static files)
     * 4. /_vercel (Vercel internals)
     * 5. all root files inside public (robots.txt, favicon.ico, etc.)
     */
    "/((?!api|_next|_vercel|fonts|images|[\\w-]+\\.\\w+).*)",
  ],
}
