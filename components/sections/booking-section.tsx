"use client"

import { motion } from "framer-motion"
import { BookingIframe } from "@/components/booking-iframe"
import { fadeIn } from "@/lib/animation"

export function BookingSection() {
  return (
    <section id="booking" className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f610_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.03)_20%,rgba(59,130,246,0.05)_50%,rgba(59,130,246,0.03)_80%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Boka en demo</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Boka en tid för att se hur vårt bokningssystem kan hjälpa din verksamhet. Vi visar hur du kan effektivisera
            din bokning och administration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <BookingIframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0QR3uRxVB7rb4ZHqJ1qYmz-T0e2CFtV5MYekvGDq1qyWxsV_Av3nP3zEGk0DrH2HqpTLoXuK0h"
            title="Boka en demonstration"
            height="650px"
            className="shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
