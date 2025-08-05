"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/components/ui/tabs"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const monthlyPlans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Perfect for casual brain training.",
    features: ["5 games per day", "Basic progress tracking", "Mobile app access", "Email support"],
    cta: "Start Free Trial",
  },
  {
    name: "Premium",
    price: "$19.99",
    description: "Ideal for serious cognitive enhancement.",
    features: [
      "Unlimited games",
      "Advanced analytics",
      "Personalized training plans",
      "Priority support",
      "Family sharing (up to 4)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "$39.99",
    description: "For professionals and researchers.",
    features: [
      "Everything in Premium",
      "Detailed cognitive reports",
      "Custom training programs",
      "1-on-1 coaching sessions",
      "API access for researchers",
    ],
    cta: "Contact Sales",
  },
]

const annualPlans = [
  {
    name: "Basic",
    price: "$6.99",
    description: "Perfect for casual brain training.",
    features: ["5 games per day", "Basic progress tracking", "Mobile app access", "Email support"],
    cta: "Start Free Trial",
  },
  {
    name: "Premium",
    price: "$13.99",
    description: "Ideal for serious cognitive enhancement.",
    features: [
      "Unlimited games",
      "Advanced analytics",
      "Personalized training plans",
      "Priority support",
      "Family sharing (up to 4)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "$27.99",
    description: "For professionals and researchers.",
    features: [
      "Everything in Premium",
      "Detailed cognitive reports",
      "Custom training programs",
      "1-on-1 coaching sessions",
      "API access for researchers",
    ],
    cta: "Contact Sales",
  },
]

export default function LandingPricingSection() {
  return (
    <section id="pricing" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium" variant="secondary">
            Pricing
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl">
            Invest in Your Mind
          </h2>
          <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Choose the plan that fits your cognitive enhancement goals. All plans include a 7-day free trial.
          </p>
        </motion.div>
        <div className="mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="rounded-full p-1">
                <TabsTrigger value="monthly" className="rounded-full px-6">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annually" className="rounded-full px-6">
                  Annually (Save 30%)
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {monthlyPlans.map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground ml-1">/month</span>
                        </div>
                        <p className="text-muted-foreground mt-2">{plan.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="annually">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {annualPlans.map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground ml-1">/month</span>
                        </div>
                        <p className="text-muted-foreground mt-2">{plan.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
