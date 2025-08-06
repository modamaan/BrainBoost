"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Check, ArrowRight } from "lucide-react"

export default function LandingHeroSection(){
  return(
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full mb-12 md:mb-16"
        >
          <Badge className="mb-4 md:mb-6 rounded-full px-4 py-2 text-sm md:text-base font-medium" variant="secondary">
            <Brain className="size-3 md:size-4 mr-1" />
            Cognitive Enhancement
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Train Your Brain. Boost Your Brilliance.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
            Interactive brain games and cognitive analytics designed to sharpen your mind daily. Build mental
            strength through scientifically-backed exercises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Button size="lg" className="rounded-full h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-semibold">
              Start Free Trial
              <ArrowRight className="ml-2 size-4 md:size-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 md:h-14 px-8 md:px-10 text-base md:text-lg bg-transparent border-2">
              See How It Works
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-1 md:gap-2">
              <Check className="size-4 md:size-5 text-primary" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Check className="size-4 md:size-5 text-primary" />
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Check className="size-4 md:size-5 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                {/* Animated Brain Visualization */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <Brain className="size-24 sm:size-32 md:size-48 lg:size-56 text-primary/60" />
                  {/* Pulsing dots around brain */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary/40 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: `${40 + i * 8}px 0px`,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3 + i * 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    ></motion.div>
                  ))}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              <div className="absolute inset-0 rounded-xl md:rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl md:blur-3xl opacity-70"></div>
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl md:blur-3xl opacity-70"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
    
