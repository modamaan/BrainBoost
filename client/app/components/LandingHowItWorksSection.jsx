"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Brain, BarChart3, TrendingUp } from "lucide-react"

export default function LandingHowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Play Daily Games",
      description: "Engage with fun, scientifically-designed brain games for just 10-15 minutes daily.",
      icon: <Brain className="size-6" />,
    },
    {
      step: "02",
      title: "Get Cognitive Insights",
      description: "Receive detailed analytics on your performance and personalized recommendations.",
      icon: <BarChart3 className="size-6" />,
    },
    {
      step: "03",
      title: "Improve Over Time",
      description: "Watch your cognitive abilities strengthen as you build consistent training habits.",
      icon: <TrendingUp className="size-6" />,
    },
  ]
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium" variant="secondary">
            How It Works
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl">
            Simple Process, Powerful Results
          </h2>
          <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Start your cognitive enhancement journey in just three easy steps.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center space-y-3 sm:space-y-4"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-lg sm:text-xl md:text-2xl font-bold shadow-lg">
                {step.step}
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-muted/30 flex items-center justify-center">{step.icon}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight">{step.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
