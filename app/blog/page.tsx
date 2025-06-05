"use client"

export const dynamic = 'force-dynamic'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { fadeIn, staggerContainer } from "@/lib/animation"

// Sample blog posts data
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
  },
  {
    id: 3,
    title: "Integrera betalningslösningar i ditt bokningssystem",
    excerpt:
      "Lär dig hur du kan integrera olika betalningslösningar för att förenkla bokningsprocessen för dina kunder.",
    date: "2023-06-18",
    author: "Erik Svensson",
    readTime: "6 min",
    image: "/placeholder.svg?height=400&width=600",
    category: "Betalningslösningar",
  },
  {
    id: 4,
    title: "Anpassa ditt bokningssystem efter din bransch",
    excerpt: "Olika branscher har olika behov. Upptäck hur du kan anpassa ditt bokningssystem för just din verksamhet.",
    date: "2023-07-05",
    author: "Anna Lindberg",
    readTime: "7 min",
    image: "/placeholder.svg?height=400&width=600",
    category: "Anpassning",
  },
  {
    id: 5,
    title: "Öka din digitala närvaro med en professionell webbplats",
    excerpt: "En professionell webbplats är avgörande för att bygga förtroende och attrahera nya kunder online.",
    date: "2023-07-22",
    author: "Peter Karlsson",
    readTime: "5 min",
    image: "/placeholder.svg?height=400&width=600",
    category: "Webbdesign",
  },
  {
    id: 6,
    title: "Så optimerar du ditt bokningssystem för mobila enheter",
    excerpt:
      "Med allt fler som bokar via mobilen är det viktigt att ditt bokningssystem är optimerat för alla enheter.",
    date: "2023-08-10",
    author: "Sofia Berg",
    readTime: "4 min",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobiloptimering",
  },
]

export default function BlogPage() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  const postsPerPage = 3
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <SiteHeader />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Axie Studio <span className="text-gradient">Blogg</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Insikter, tips och nyheter om bokningssystem, webbdesign och digitala lösningar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              animate="show"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentPosts.map((post, index) => (
                <motion.div key={post.id} variants={fadeIn("up", 0.1 * index)}>
                  <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardHeader className="flex-1">
                      <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3 mt-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t pt-4">
                      <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString("sv-SE")}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    size="icon"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Vill du veta mer om våra tjänster?</h2>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Kontakta oss för en kostnadsfri konsultation om hur vi kan hjälpa din verksamhet.
                </p>
              </div>
              <Link href="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Tillbaka till startsidan
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
