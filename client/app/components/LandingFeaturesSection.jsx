"use client"
import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Puzzle, Target, MessageSquare } from "lucide-react"

const features = [
  {
    title: "Memory Games",
    description: "Strengthen your recall abilities with pattern recognition and sequence challenges.",
    icon: <Brain className="size-5" />,
  },
  {
    title: "Logic Challenges",
    description: "Enhance problem-solving skills with puzzles that test reasoning and deduction.",
    icon: <Puzzle className="size-5" />,
  },
  {
    title: "Attention Boosters",
    description: "Improve focus and concentration through targeted attention training exercises.",
    icon: <Target className="size-5" />,
  },
  {
    title: "Language & Reasoning",
    description: "Develop verbal skills and critical thinking through word games and logic tests.",
    icon: <MessageSquare className="size-5" />,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function LandingFeaturesSection() {
  return (
    <section id="features" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium" variant="secondary">
            Core Features
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl">
            Comprehensive Brain Training
          </h2>
          <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Target every aspect of cognitive function with our scientifically-designed training modules.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all duration-300 hover:shadow-lg hover:border-primary/20 group">
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col h-full text-center">
                  <div className="size-10 sm:size-12 md:size-14 lg:size-16 xl:size-18 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-3 sm:mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
                    <div className="scale-100 sm:scale-110 md:scale-125 lg:scale-150">
                      {React.cloneElement(feature.icon, { className: "size-4 sm:size-5 md:size-6 lg:size-7" })}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 leading-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
