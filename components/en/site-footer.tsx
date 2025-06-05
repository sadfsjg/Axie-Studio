"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animation"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={footerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Company info with logo */}
          <motion.div variants={itemAnimation} className="space-y-4">
            <Link href="/en" className="inline-block">
              <Image
                src="/images/axie-studio-logo.png"
                alt="Axie Studio"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Specialists in integrated admin & client booking systems and automation. We also offer modern websites for
              a complete solution.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61573009403109"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                  <Facebook className="h-5 w-5" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/axiestudi0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
                  <Instagram className="h-5 w-5" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/en#features"
                  className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                  Booking System
                </Link>
              </li>
              <li>
                <Link
                  href="/en#admin"
                  className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                  Admin App
                </Link>
              </li>
              <li>
                <Link
                  href="/en#mobile-apps"
                  className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/en#pricing"
                  className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                  Pricing
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@axiestudio.se" className="text-slate-600 hover:text-blue-600 transition-colors">
                  support@axiestudio.se
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:+46793436438" className="text-slate-600 hover:text-blue-600 transition-colors">
                  +46 79 343 64 38
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">Jönköping, Sweden</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/en"
                  className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://admin.axiestudio.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2 group-hover:bg-blue-500 transition-colors"></span>
                  Admin Login
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright bar */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500"
        >
          <div className="mb-4 md:mb-0">© {currentYear} Axie Studio. All rights reserved.</div>
        </motion.div>
      </div>
    </footer>
  )
}
