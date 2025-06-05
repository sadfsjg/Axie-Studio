"use client"
import { useState, useEffect } from "react"
import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ExternalLink,
  Menu,
  LayoutDashboard,
  Calendar,
  Users,
  Smartphone,
  CreditCard,
  Mail,
  Phone,
  Star,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { GoogleCalendarPopup } from "../google-calendar-popup"

export function ModernHeader() {
  const [scrollY, setScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [showCalendar, setShowCalendar] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["hero", "features", "pricing", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Features", href: "#features", id: "features", icon: <LayoutDashboard className="h-4 w-4" /> },
    { name: "Pricing", href: "#pricing", id: "pricing", icon: <CreditCard className="h-4 w-4" /> },
    { name: "Contact", href: "#contact", id: "contact", icon: <Mail className="h-4 w-4" /> },
  ]

  const quickLinks = [
    {
      name: "Booking Features",
      href: "#booking-features",
      icon: <Calendar className="h-4 w-4" />,
      description: "Seamless online booking for your customers",
    },
    {
      name: "Admin Features",
      href: "#admin-features",
      icon: <LayoutDashboard className="h-4 w-4" />,
      description: "Powerful tools to manage your business",
    },
    {
      name: "Client Features",
      href: "#client-features",
      icon: <Users className="h-4 w-4" />,
      description: "Enhance customer experience with smart features",
    },
    {
      name: "Mobile Apps",
      href: "#mobile-apps",
      icon: <Smartphone className="h-4 w-4" />,
      description: "Access your system from anywhere",
    },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
      setActiveSection(targetId)
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 z-50 w-full backdrop-blur transition-all duration-300",
          scrollY > 10 ? "bg-white/90 dark:bg-gray-950/90 border-b shadow-sm" : "bg-transparent border-transparent",
        )}
      >
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/en" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-NuqchLn54kB9iWfTXSPNMBColqGIom.jpeg"
                alt="Axie Studio"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center border rounded-full overflow-hidden">
              <Link
                href="/"
                className="px-3 py-1 text-sm font-medium transition-colors hover:bg-blue-700"
                style={{
                  backgroundColor: pathname === "/" || !pathname?.startsWith("/en") ? "#2563eb" : "transparent",
                  color: pathname === "/" || !pathname?.startsWith("/en") ? "white" : "#374151",
                }}
              >
                SV
              </Link>
              <Link
                href="/en"
                className="px-3 py-1 text-sm font-medium transition-colors hover:bg-blue-700"
                style={{
                  backgroundColor: pathname?.startsWith("/en") ? "#2563eb" : "transparent",
                  color: pathname?.startsWith("/en") ? "white" : "#374151",
                }}
              >
                EN
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    activeSection === link.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link
              href="https://app.axiestudio.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-1"
            >
              App Login <ExternalLink className="ml-2 h-4 w-4" />
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-white">
                    <div className="flex items-center justify-center mb-6">
                      <Image
                        src="/images/axie-studio-logo.png"
                        alt="Axie Studio"
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                      />
                    </div>

                    <div className="flex items-center justify-center border rounded-full overflow-hidden shadow-sm">
                      <Link
                        href="/"
                        className="px-4 py-1.5 text-sm font-medium transition-colors flex-1 text-center"
                        style={{
                          backgroundColor: pathname === "/" || !pathname?.startsWith("/en") ? "#2563eb" : "transparent",
                          color: pathname === "/" || !pathname?.startsWith("/en") ? "white" : "#374151",
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        SV
                      </Link>
                      <Link
                        href="/en"
                        className="px-4 py-1.5 text-sm font-medium transition-colors flex-1 text-center"
                        style={{
                          backgroundColor: pathname?.startsWith("/en") ? "#2563eb" : "transparent",
                          color: pathname?.startsWith("/en") ? "white" : "#374151",
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        EN
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 overflow-auto py-6 px-4">
                    {/* What's New Section */}
                    <div className="mb-6 bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-blue-600" />
                        <h3 className="font-medium text-blue-700">New in Axie Studio</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        We've updated our booking engine for even faster performance!
                      </p>
                      <Link
                        href="#whats-new"
                        className="text-xs font-medium text-blue-600 hover:text-blue-800 inline-flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        Read more <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>

                    {/* Main Navigation */}
                    <nav className="space-y-1 mb-6">
                      <h3 className="font-medium text-sm text-gray-500 px-2 mb-2">Main Menu</h3>
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                            activeSection === link.id
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50",
                          )}
                          onClick={(e) => {
                            handleNavClick(e, link.href)
                            setIsOpen(false)
                          }}
                        >
                          {link.icon}
                          {link.name}
                        </Link>
                      ))}
                    </nav>

                    {/* Quick Links */}
                    <div className="mb-6">
                      <h3 className="font-medium text-sm text-gray-500 px-2 mb-2">Quick Links</h3>
                      <div className="space-y-2">
                        {quickLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center gap-3 mb-1">
                              {link.icon}
                              <span className="font-medium text-sm">{link.name}</span>
                            </div>
                            <p className="text-xs text-gray-500 pl-7">{link.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t pt-4 mb-6">
                      <h3 className="font-medium text-sm text-gray-500 px-2 mb-2">Contact Us</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span>info@axiestudio.se</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>+46 70 123 45 67</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>Mon-Fri: 09:00 - 17:00</span>
                        </div>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex justify-center gap-4 mb-4">
                      <Link
                        href="https://www.instagram.com/axiestudio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://www.facebook.com/axiestudio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-6 border-t bg-gradient-to-r from-blue-50 to-white">
                    <Link
                      href="https://app.axiestudio.se"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700"
                      onClick={() => setIsOpen(false)}
                    >
                      App Login <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                    <div className="mt-3 text-center">
                      <Link
                        href="#demo"
                        className="text-xs font-medium text-gray-600 hover:text-blue-600"
                        onClick={(e) => {
                          e.preventDefault()
                          setIsOpen(false)
                          setShowCalendar(true)
                        }}
                      >
                        Book a demo with us
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <GoogleCalendarPopup isOpen={showCalendar} onClose={() => setShowCalendar(false)} />
    </>
  )
}
