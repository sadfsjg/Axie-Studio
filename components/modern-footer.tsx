"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/animation"

export function ModernFooter() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full border-t bg-white dark:bg-gray-950"
    >
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeIn("up", 0.1)} className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/axie-studio-logo.png-NuqchLn54kB9iWfTXSPNMBColqGIom.jpeg"
                alt="Axie Studio"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <motion.p variants={fadeIn("up", 0.2)} className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Skräddarsydda digitala lösningar för att effektivisera din verksamhet och öka din digitala närvaro.
            </motion.p>
            <motion.div variants={staggerContainer(0.1, 0.3)} className="flex gap-5 mt-4">
              <motion.div variants={fadeIn("up", 0.1)}>
                <Link
                  href="https://www.instagram.com/axies_studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-110"
                  aria-label="Följ oss på Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div variants={fadeIn("up", 0.2)}>
                <Link
                  href="https://www.facebook.com/profile.php?id=61573009403109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-110"
                  aria-label="Följ oss på Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.2)} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Tjänster</h3>
            <motion.ul variants={staggerContainer(0.05, 0)} className="grid gap-3">
              <motion.li variants={fadeIn("right", 0.1)}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Webbplatser
                </Link>
              </motion.li>
              <motion.li variants={fadeIn("right", 0.15)}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Bokningssystem
                </Link>
              </motion.li>
              <motion.li variants={fadeIn("right", 0.2)}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Automation
                </Link>
              </motion.li>
              <motion.li variants={fadeIn("right", 0.25)}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Digitala lösningar
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.3)} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Företag</h3>
            <motion.ul variants={staggerContainer(0.05, 0)} className="grid gap-3">
              <motion.li variants={fadeIn("right", 0.1)}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Om oss
                </Link>
              </motion.li>
              <motion.li variants={fadeIn("right", 0.15)}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Kontakt
                </Link>
              </motion.li>
              <motion.li variants={fadeIn("right", 0.2)}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Karriär
                </Link>
              </motion.li>
              <motion.li variants={fadeIn("right", 0.25)}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                  Integritetspolicy
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.4)} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <motion.ul variants={staggerContainer(0.05, 0)} className="grid gap-3">
              <motion.li
                variants={fadeIn("right", 0.1)}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 group"
              >
                <Phone className="h-5 w-5 mt-0.5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                <a href="tel:+46793436438" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +46 793 436 438
                </a>
              </motion.li>
              <motion.li
                variants={fadeIn("right", 0.15)}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 group"
              >
                <Mail className="h-5 w-5 mt-0.5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                <a
                  href="mailto:support@jonkoping.site"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  support@jonkoping.site
                </a>
              </motion.li>
              <motion.li
                variants={fadeIn("right", 0.2)}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 group"
              >
                <MapPin className="h-5 w-5 mt-0.5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                <address className="not-italic hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Norra Strandgatan
                  <br />
                  Jönköping, Jönköping
                </address>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.5)} className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Axie Studio. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Integritetspolicy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Användarvillkor
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
