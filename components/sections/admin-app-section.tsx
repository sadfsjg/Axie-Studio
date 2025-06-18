"use client"

import { motion } from "framer-motion"
import { Bell, Calendar, Clock, Users, BarChart, Settings, CheckCircle, Edit, X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/animation"

export function AdminAppSection() {
  return (
    <section id="admin-app" className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-100 to-white">
      {/* Symmetrical grid pattern overlay */}
      <div className="absolute inset-0">
        {/* Perfectly centered grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]"></div>

        {/* Horizontal lines with perfect spacing */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_12.5%,rgba(148,163,184,0.05)_12.5%,rgba(148,163,184,0.05)_calc(12.5%+1px),transparent_calc(12.5%+1px),transparent_25%,rgba(148,163,184,0.05)_25%,rgba(148,163,184,0.05)_calc(25%+1px),transparent_calc(25%+1px),transparent_37.5%,rgba(148,163,184,0.05)_37.5%,rgba(148,163,184,0.05)_calc(37.5%+1px),transparent_calc(37.5%+1px),transparent_50%,rgba(148,163,184,0.05)_50%,rgba(148,163,184,0.05)_calc(50%+1px),transparent_calc(50%+1px),transparent_62.5%,rgba(148,163,184,0.05)_62.5%,rgba(148,163,184,0.05)_calc(62.5%+1px),transparent_calc(62.5%+1px),transparent_75%,rgba(148,163,184,0.05)_75%,rgba(148,163,184,0.05)_calc(75%+1px),transparent_calc(75%+1px),transparent_87.5%,rgba(148,163,184,0.05)_87.5%,rgba(148,163,184,0.05)_calc(87.5%+1px),transparent_calc(87.5%+1px),transparent_100%)]"></div>

        {/* Vertical lines for perfect grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_12.5%,rgba(148,163,184,0.04)_12.5%,rgba(148,163,184,0.04)_calc(12.5%+1px),transparent_calc(12.5%+1px),transparent_25%,rgba(148,163,184,0.04)_25%,rgba(148,163,184,0.04)_calc(25%+1px),transparent_calc(25%+1px),transparent_37.5%,rgba(148,163,184,0.04)_37.5%,rgba(148,163,184,0.04)_calc(37.5%+1px),transparent_calc(37.5%+1px),transparent_50%,rgba(148,163,184,0.04)_50%,rgba(148,163,184,0.04)_calc(50%+1px),transparent_calc(50%+1px),transparent_62.5%,rgba(148,163,184,0.04)_62.5%,rgba(148,163,184,0.04)_calc(62.5%+1px),transparent_calc(62.5%+1px),transparent_75%,rgba(148,163,184,0.04)_75%,rgba(148,163,184,0.04)_calc(75%+1px),transparent_calc(75%+1px),transparent_87.5%,rgba(148,163,184,0.04)_87.5%,rgba(148,163,184,0.04)_calc(87.5%+1px),transparent_calc(87.5%+1px),transparent_100%)]"></div>

        {/* Symmetrical horizontal glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.03)_20%,rgba(59,130,246,0.05)_50%,rgba(59,130,246,0.03)_80%,transparent_100%)]"></div>

        {/* Symmetrical vertical glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(16,185,129,0.02)_20%,rgba(16,185,129,0.03)_50%,rgba(16,185,129,0.02)_80%,transparent_100%)]"></div>
      </div>

      {/* Symmetrical radial gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.06),transparent_50%)]"></div>

      {/* Symmetrical animated blobs - lighter and more subtle for the light background */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 -z-10 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-1/4 right-1/5 w-96 h-96 -z-10 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-1/4 left-1/5 w-96 h-96 -z-10 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 -z-10 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 -z-10 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Kraftfull administratörsapp</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            En kraftfull administratörsapp som ger dig full kontroll över din verksamhet. Hantera bokningar, kunder och
            tider direkt från din mobil eller dator.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInFromLeft}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Allt du behöver för att hantera din verksamhet</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Hantera bokningar</h4>
                    <p className="text-sm text-slate-600">Acceptera, avvisa eller ändra bokningar med ett klick</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:shadow-md hover:border-amber-200 transition-all duration-300">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-amber-100 p-2 rounded-full">
                    <Bell className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Realtidsnotiser</h4>
                    <p className="text-sm text-slate-600">Få direkta notiser när nya bokningar kommer in</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:shadow-md hover:border-red-200 transition-all duration-300">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-red-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Blockera tider</h4>
                    <p className="text-sm text-slate-600">Markera tider som otillgängliga i din kalender</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:shadow-md hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-purple-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Kundhantering</h4>
                    <p className="text-sm text-slate-600">Se kundhistorik och hantera kundrelationer</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:shadow-md hover:border-green-200 transition-all duration-300">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                    <BarChart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Statistik & rapporter</h4>
                    <p className="text-sm text-slate-600">Få insikter om din verksamhet med detaljerade rapporter</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-300">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-slate-100 p-2 rounded-full">
                    <Settings className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Anpassade inställningar</h4>
                    <p className="text-sm text-slate-600">Konfigurera appen efter dina specifika behov</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center sm:text-left">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Boka demo av administratörsappen
              </Button>
              <p className="text-sm text-slate-500 mt-2">Fungerar på alla enheter - iPhone, Android och datorer</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight}
            className="relative"
          >
            <div className="relative mx-auto max-w-[320px]">
              {/* Phone frame */}
              <div className="relative z-10 overflow-hidden rounded-[32px] border-8 border-gray-800 bg-gray-800 shadow-xl">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 z-20">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1 w-16 bg-gray-700 rounded-full"></div>
                </div>

                {/* Phone screen content */}
                <div className="relative pt-6 h-[600px] bg-slate-100 overflow-hidden">
                  {/* Status bar */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 flex items-center justify-between px-4 text-white text-xs">
                    <span>09:41</span>
                    <div className="flex space-x-1">
                      <Bell size={12} />
                      <span className="font-semibold">3</span>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="bg-blue-600 text-white p-4 pt-8">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg">Admin Dashboard</h3>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 p-1 h-8 w-8">
                        <Settings className="h-5 w-5" />
                      </Button>
                    </div>
                    <p className="text-blue-100 text-sm">Tisdag, 9 maj 2023</p>
                  </div>

                  {/* Notification */}
                  <div className="absolute top-24 right-4 z-30 bg-white rounded-lg shadow-lg p-3 max-w-[250px] border border-slate-200 animate-pulse">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Bell className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Ny bokning!</h4>
                        <p className="text-xs text-slate-600">Anders Svensson har bokat en tid kl 14:30</p>
                      </div>
                    </div>
                    <div className="flex justify-end mt-2 space-x-2">
                      <Button variant="outline" size="sm" className="h-7 text-xs px-2 py-0">
                        <X className="h-3 w-3 mr-1" /> Avvisa
                      </Button>
                      <Button size="sm" className="h-7 text-xs px-2 py-0 bg-blue-600">
                        <CheckCircle className="h-3 w-3 mr-1" /> Acceptera
                      </Button>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="h-full pt-4 overflow-y-auto">
                    <div className="px-4 mb-6">
                      <h4 className="font-medium text-slate-900 mb-3">Dagens bokningar</h4>

                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg border border-slate-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-sm font-medium">09:00 - 09:45</span>
                              <h5 className="font-medium">Maria Andersson</h5>
                              <p className="text-xs text-slate-500">Klippning & färg</p>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle className="h-3 w-3 mr-1" /> Bekräftad
                            </span>
                          </div>
                        </div>

                        <div className="bg-white p-3 rounded-lg border border-slate-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-sm font-medium">11:30 - 12:15</span>
                              <h5 className="font-medium">Johan Karlsson</h5>
                              <p className="text-xs text-slate-500">Herrklippning</p>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                              <Clock className="h-3 w-3 mr-1" /> Väntar på bekräftelse
                            </span>
                          </div>
                        </div>

                        <div className="bg-white p-3 rounded-lg border border-slate-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-sm font-medium">14:30 - 15:15</span>
                              <h5 className="font-medium">Anders Svensson</h5>
                              <p className="text-xs text-slate-500">Skägg & klippning</p>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-500">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                              <Bell className="h-3 w-3 mr-1" /> Ny bokning
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-slate-900">Snabbåtgärder</h4>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm" className="h-auto py-2 flex flex-col items-center">
                          <Calendar className="h-5 w-5 mb-1" />
                          <span className="text-xs">Blockera tid</span>
                        </Button>

                        <Button variant="outline" size="sm" className="h-auto py-2 flex flex-col items-center">
                          <Users className="h-5 w-5 mb-1" />
                          <span className="text-xs">Kunder</span>
                        </Button>

                        <Button variant="outline" size="sm" className="h-auto py-2 flex flex-col items-center">
                          <BarChart className="h-5 w-5 mb-1" />
                          <span className="text-xs">Statistik</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification badges */}
              <div className="absolute -right-4 top-1/4 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold border-2 border-white shadow-lg">
                3
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}