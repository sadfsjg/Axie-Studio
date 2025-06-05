"use client"
import { motion } from "framer-motion"
import { Check, Sparkles, X, AlertCircle, Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/section-background"
import { AnimatedText } from "@/components/ui/animated-text"
import { fadeIn, staggerContainer } from "@/lib/animation"
import { SectionSEO } from "@/components/section-seo"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

interface PricingFeature {
  name: string
  included: boolean
  tooltip?: string
}

interface PricingPlan {
  title: string
  description: string
  setupFee?: string
  monthlyPrice?: string
  yearlyPrice?: string
  oneTimePrice?: string
  features: PricingFeature[]
  popular?: boolean
  color?: string
  gradient?: boolean
  monthlyOnly?: boolean
  badge?: string
}

interface PricingSectionProps {
  plans: PricingPlan[]
  onContactClick: () => void
}

export function PricingSectionEn({ plans, onContactClick }: PricingSectionProps) {
  // Default pricing plans if none are provided
  const defaultPlans: PricingPlan[] = [
    {
      title: "Website",
      description: "Professional website for your business",
      setupFee: "1495 kr",
      monthlyPrice: "295 kr",
      oneTimePrice: "8995 kr",
      features: [
        { name: "Responsive web design", included: true, tooltip: "Works on all devices" },
        { name: "SEO optimization", included: true, tooltip: "Better visibility in search engines" },
        { name: "Contact form", included: true },
        { name: "Social media integration", included: true },
        { name: "Booking system", included: false },
        { name: "Mobile app", included: false },
      ],
      badge: "Best for startups",
    },
    {
      title: "Website + App",
      description: "Website with dedicated mobile app",
      setupFee: "3995 kr",
      monthlyPrice: "495 kr",
      oneTimePrice: "14995 kr",
      features: [
        { name: "Everything in Website package", included: true },
        { name: "Dedicated mobile app", included: true, tooltip: "App with your branding" },
        { name: "Booking system", included: true },
        { name: "Payment integrations", included: true },
        { name: "Automatic reminders", included: true },
        { name: "Custom design", included: true },
      ],
      popular: true,
    },
    {
      title: "Complete solution",
      description: "Everything you need for your business",
      setupFee: "3995 kr",
      monthlyPrice: "995 kr",
      monthlyOnly: true,
      features: [
        { name: "Everything in previous packages", included: true },
        { name: "Website login", included: true },
        { name: "Priority support", included: true },
        { name: "Unlimited bookings", included: true },
        { name: "Custom design", included: true },
        { name: "Payment integrations", included: true },
      ],
      color: "purple",
    },
  ]

  // Use provided plans or default ones
  const displayPlans = plans && plans.length > 0 ? plans : defaultPlans

  return (
    <SectionBackground
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50"
      id="pricing"
      data-section-type="pricing"
      itemScope
      itemType="https://schema.org/Offer"
    >
      <SectionSEO
        title="Pricing for booking systems and websites | Axie Studio"
        description="Choose the package that suits you - customized solutions for all types of businesses."
        slug="pricing"
        type="Offer"
      />

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
        <motion.div
          variants={fadeIn("up", 0.1)}
          className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
        >
          <Sparkles className="mr-1 h-3.5 w-3.5 text-blue-600" />
          <span>Pricing</span>
        </motion.div>

        <AnimatedText
          as="h2"
          text="Choose the package that suits you"
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800"
          delay={0.2}
          itemProp="name"
        />

        <motion.p
          variants={fadeIn("up", 0.3)}
          className="max-w-[900px] text-slate-600 md:text-xl/relaxed"
          itemProp="description"
        >
          Customized solutions for all types of businesses
        </motion.p>
      </div>

      <TooltipProvider>
        <motion.div
          variants={staggerContainer(0.1, 0.4)}
          className="relative"
        >
          <motion.div
            className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide scroll-fade scroll-snap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex space-x-8 min-w-max px-4"
              itemProp="itemOffered"
              itemScope
              itemType="https://schema.org/Service"
            >
          {displayPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", 0.1 * index)}
              className="relative group flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[400px]"
              itemScope
              itemType="https://schema.org/Offer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${
                  plan.popular
                    ? "from-blue-100 to-indigo-100 opacity-70"
                    : `from-${plan.color || "blue"}-50 to-${plan.color || "blue"}-50/0 opacity-0`
                } rounded-2xl blur-xl group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              <div
                className={`border-2 ${
                  plan.popular ? "border-blue-400 shadow-lg" : "border-slate-200 hover:border-blue-200"
                } transition-all duration-300 hover:shadow-xl rounded-2xl overflow-hidden h-full bg-white`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 text-white px-4 py-1 text-xs font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                {/* Custom badge if provided */}
                {plan.badge && (
                  <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
                    <Badge
                      className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-3 py-1 rounded-full shadow-lg"
                      variant="outline"
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className="p-6 pb-4 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-800" itemProp="name">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm" itemProp="description">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="p-6 pb-4 border-b border-slate-100">
                  {/* Setup fee */}
                  {plan.setupFee && (
                    <div className="flex items-center mb-2">
                      <span className="text-slate-600 text-sm">Setup fee:</span>
                      <span className="ml-auto font-semibold text-slate-800">{plan.setupFee}</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 ml-2 text-slate-400 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">One-time fee when choosing monthly payment</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  )}

                  {/* Monthly price */}
                  {plan.monthlyPrice && (
                    <div className="flex items-center mb-2">
                      <span className="text-slate-600 text-sm">Monthly:</span>
                      <span className="ml-auto font-semibold text-slate-800">{plan.monthlyPrice}</span>
                    </div>
                  )}

                  {/* One-time price */}
                  {plan.oneTimePrice && (
                    <div className="flex items-center mb-2">
                      <span className="text-slate-600 text-sm">One-time payment:</span>
                      <span className="ml-auto font-semibold text-slate-800">{plan.oneTimePrice}</span>
                      {plan.setupFee && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2 text-slate-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">No setup fee for one-time payment</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  )}

                  {/* Monthly only notice */}
                  {plan.monthlyOnly && (
                    <div className="mt-2 flex items-center text-amber-600 text-xs">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      <span>Only monthly payment available</span>
                    </div>
                  )}

                  {/* Domain not included notice */}
                  <div className="mt-3 text-xs text-slate-500 italic">* Domain name not included in price</div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <motion.ul variants={staggerContainer(0.05, 0)} className="space-y-3" itemProp="hasFeature">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        variants={fadeIn("right", 0.05 * featureIndex)}
                        className="flex items-center"
                        itemScope
                        itemType="https://schema.org/PropertyValue"
                      >
                        <div
                          className={`h-5 w-5 rounded-full ${
                            feature.included ? `bg-${plan.color || "blue"}-100` : "bg-red-100"
                          } flex items-center justify-center mr-2 flex-shrink-0`}
                        >
                          {feature.included ? (
                            <Check className={`h-3 w-3 text-${plan.color || "blue"}-600`} />
                          ) : (
                            <X className="h-3 w-3 text-red-500" />
                          )}
                        </div>
                        <span className={feature.included ? "text-slate-700" : "text-slate-500"} itemProp="name">
                          {feature.name}
                        </span>
                        {feature.tooltip && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 ml-1 text-slate-400 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="mt-6">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-200"
                          : "bg-white hover:bg-slate-50 text-blue-700 border border-blue-200"
                      } flex items-center justify-center rounded-xl py-6`}
                      onClick={onContactClick}
                      itemProp="url"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            ))}
            </div>
          </motion.div>
        </motion.div>
      </TooltipProvider>

      {/* Additional information */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        className="mt-16 max-w-3xl mx-auto text-center bg-white rounded-xl p-6 border border-slate-200 shadow-md"
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Need a custom solution?</h3>
        <p className="text-slate-600 mb-4">
          We also offer customized solutions for businesses with specific needs. Contact us for a personalized quote.
        </p>
        <Button
          onClick={onContactClick}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-200 rounded-xl py-6 px-8"
        >
          Book free consultation
        </Button>
      </motion.div>
    </SectionBackground>
  )
}
