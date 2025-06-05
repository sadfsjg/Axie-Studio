"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

// Sample blog posts data (same as in blog/page.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Hur bokningssystem kan effektivisera din verksamhet",
    excerpt: "Upptäck hur ett skräddarsytt bokningssystem kan spara tid och öka kundnöjdheten i din verksamhet.",
    date: "2023-05-15",
    author: "Johan Andersson",
    readTime: "5 min",
    image: "/placeholder.svg?height=400&width=600",
    category: "Bokningssystem",
    content: `
      <p>I dagens digitala värld är effektivitet nyckeln till framgång för alla verksamheter. Ett av de mest effektiva sätten att optimera din verksamhet är genom att implementera ett skräddarsytt bokningssystem.</p>
      
      <h2>Fördelar med ett skräddarsytt bokningssystem</h2>
      
      <p>Ett väldesignat bokningssystem kan revolutionera hur du hanterar tidsbokning och kundrelationer. Här är några av de viktigaste fördelarna:</p>
      
      <ul>
        <li><strong>Tidsbesparingar:</strong> Automatisera bokningsprocessen och minska administrativt arbete.</li>
        <li><strong>Ökad kundnöjdhet:</strong> Ge dina kunder möjlighet att boka när det passar dem, dygnet runt.</li>
        <li><strong>Minskade uteblivna besök:</strong> Automatiska påminnelser minskar antalet missade bokningar.</li>
        <li><strong>Bättre resursplanering:</strong> Få en tydlig överblick över din kalender och optimera din schemaläggning.</li>
      </ul>
      
      <h2>Anpassning efter din verksamhet</h2>
      
      <p>Olika verksamheter har olika behov när det gäller bokningssystem. En frisörsalong har andra krav än ett konsultföretag eller en läkarmottagning. Därför är det viktigt att välja ett bokningssystem som kan anpassas efter just din verksamhets specifika behov.</p>
      
      <p>Med ett skräddarsytt bokningssystem kan du:</p>
      
      <ul>
        <li>Definiera exakt vilka tjänster som ska kunna bokas</li>
        <li>Ställa in specifika tidsintervall för olika typer av bokningar</li>
        <li>Integrera med andra system som betalningslösningar eller CRM</li>
        <li>Anpassa utseendet så att det matchar din varumärkesidentitet</li>
      </ul>
      
      <h2>Implementering i din verksamhet</h2>
      
      <p>Att implementera ett nytt bokningssystem kan verka överväldigande, men med rätt partner blir processen smidig. Här är de viktigaste stegen:</p>
      
      <ol>
        <li>Analys av din verksamhets behov och processer</li>
        <li>Design och utveckling av ett skräddarsytt bokningssystem</li>
        <li>Integration med befintliga system</li>
        <li>Testning för att säkerställa att allt fungerar som det ska</li>
        <li>Utbildning av personal</li>
        <li>Lansering och kontinuerlig support</li>
      </ol>
      
      <h2>Slutsats</h2>
      
      <p>Ett skräddarsytt bokningssystem är en investering som snabbt betalar sig genom ökad effektivitet, bättre kundupplevelse och minskad administrativ börda. I en allt mer digitaliserad värld är det ett viktigt verktyg för att hålla din verksamhet konkurrenskraftig.</p>
    `,
  },
  {
    id: 2,
    title: "5 fördelar med automatiserade påminnelser",
    excerpt: "Minska antalet uteblivna besök och öka kundnöjdheten med automatiserade påminnelser via SMS och e-post.",
    date: "2023-06-02",
    author: "Maria Johansson",
    readTime: "4 min",
    image: "/placeholder.svg?height=400&width=600",
    category: "Automation",
    content: `
      <p>Automatiserade påminnelser är en av de mest värdefulla funktionerna i moderna bokningssystem. De hjälper inte bara till att minska antalet uteblivna besök utan förbättrar också den övergripande kundupplevelsen.</p>
      
      <h2>1. Minskade uteblivna besök</h2>
      
      <p>Den mest uppenbara fördelen med automatiserade påminnelser är att de drastiskt minskar antalet uteblivna besök. Studier visar att verksamheter som implementerar automatiserade påminnelser kan se en minskning av uteblivna besök med upp till 30-40%.</p>
      
      <h2>2. Förbättrad kundupplevelse</h2>
      
      <p>Påminnelser visar att du värdesätter dina kunders tid och hjälper dem att hålla koll på sina bokningar. Detta leder till en bättre kundupplevelse och stärker relationen mellan dig och dina kunder.</p>
      
      <h2>3. Tidsbesparing för personal</h2>
      
      <p>Att manuellt ringa eller skicka meddelanden till kunder för att påminna om bokningar är tidskrävande. Automatiserade påminnelser frigör värdefull tid för din personal som kan användas till mer produktiva uppgifter.</p>
      
      <h2>4. Möjlighet till ombokning</h2>
      
      <p>Moderna påminnelsesystem kan inkludera alternativ för kunder att bekräfta, omboka eller avboka sina tider direkt via påminnelsen. Detta gör det enklare för kunder att hantera sina bokningar och för dig att fylla eventuella luckor i schemat.</p>
      
      <h2>5. Anpassningsbar kommunikation</h2>
      
      <p>Automatiserade påminnelser kan anpassas efter din verksamhets behov och varumärkesidentitet. Du kan välja när påminnelser ska skickas, vilken kanal som ska användas (SMS, e-post, push-notiser) och hur meddelandet ska formuleras.</p>
      
      <h2>Implementering av automatiserade påminnelser</h2>
      
      <p>För att få ut maximalt av automatiserade påminnelser bör du tänka på följande:</p>
      
      <ul>
        <li>Välj rätt timing för påminnelser (t.ex. 24 timmar och 1 timme före bokad tid)</li>
        <li>Använd en kombination av kommunikationskanaler för bästa resultat</li>
        <li>Inkludera all relevant information i påminnelsen (tid, plats, förberedelser)</li>
        <li>Ge tydliga instruktioner för ombokning eller avbokning</li>
        <li>Anpassa tonen i meddelandet efter din målgrupp</li>
      </ul>
      
      <h2>Slutsats</h2>
      
      <p>Automatiserade påminnelser är en enkel men kraftfull funktion som kan ha en betydande positiv inverkan på din verksamhet. Genom att minska antalet uteblivna besök, förbättra kundupplevelsen och spara tid för din personal bidrar de till både ökad kundnöjdhet och förbättrad lönsamhet.</p>
    `,
  },
  // Add content for other blog posts as needed
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const postId = Number(params.id)

  const post = blogPosts.find((post) => post.id === postId)

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Inlägget kunde inte hittas</h1>
        <Button onClick={() => router.push("/blog")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Tillbaka till bloggen
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <SiteHeader />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/blog" className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Tillbaka till bloggen
              </Link>

              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
                {post.category}
              </div>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-[800px]">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString("sv-SE")}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime} läsning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="prose prose-blue max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-12 pt-6 border-t flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                      <Share className="mr-2 h-4 w-4" /> Dela
                    </Button>
                  </div>

                  <Link href="/blog">
                    <Button variant="outline" size="sm">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Tillbaka till bloggen
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Relaterade inlägg</h3>
                  <div className="space-y-6">
                    {blogPosts
                      .filter((relatedPost) => relatedPost.id !== post.id)
                      .slice(0, 3)
                      .map((relatedPost) => (
                        <div key={relatedPost.id} className="flex gap-4 group">
                          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <Link
                              href={`/blog/${relatedPost.id}`}
                              className="font-medium group-hover:text-blue-600 transition-colors line-clamp-2"
                            >
                              {relatedPost.title}
                            </Link>
                            <div className="flex items-center mt-1 text-xs text-muted-foreground">
                              <Calendar className="mr-1 h-3 w-3" />
                              <span>{new Date(relatedPost.date).toLocaleDateString("sv-SE")}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Vill du veta mer?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Kontakta oss för en kostnadsfri konsultation om hur vi kan hjälpa din verksamhet.
                    </p>
                    <Link href="/">
                      <Button className="w-full">Tillbaka till startsidan</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
