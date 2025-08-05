"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Brain, BarChart3 } from "lucide-react"

export default function LandingDashboardPreviewSection() {
  return (
    <section id="dashboard" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-muted/30 relative overflow-hidden">
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
            Your Mind, Visualized
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl">
            Brain Dashboard Preview
          </h2>
          <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Track your cognitive progress with detailed analytics and personalized insights.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto"
        >
          {/* Brain Fitness Score */}
          <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <div className="size-16 sm:size-20 lg:size-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-xl sm:text-2xl lg:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                85
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2">Brain Fitness Score</h3>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed">Overall cognitive performance rating</p>
              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1 sm:gap-2 text-green-600">
                <TrendingUp className="size-3 sm:size-4" />
                <span className="text-xs sm:text-sm font-medium">+12 this week</span>
              </div>
            </CardContent>
          </Card>
          {/* Skills Spider Chart */}
          <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-center">Cognitive Skills</h3>
              <div className="relative size-24 sm:size-32 lg:size-36 mx-auto mb-4 sm:mb-6">
                {/* Simplified spider chart representation */}
                <div className="absolute inset-0 rounded-full border-2 border-muted"></div>
                <div className="absolute inset-2 rounded-full border border-muted/50"></div>
                <div className="absolute inset-4 rounded-full border border-muted/30"></div>
                {/* Skill points */}
                {["Memory", "Logic", "Focus", "Speed", "Language"].map((skill, i) => (
                  <div
                    key={skill}
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 bg-primary rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 72}deg) translateY(-${30 + i * 4}px) rotate(-${i * 72}deg)`,
                    }}
                  />
                ))}
              </div>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base">
                {["Memory: 92%", "Logic: 78%", "Focus: 85%"].map((stat) => (
                  <div key={stat} className="text-muted-foreground text-center sm:text-left">
                    {stat}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Progress Graph */}
          <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-center">Progress Over Time</h3>
              <div className="h-20 sm:h-24 lg:h-28 flex items-end justify-between gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                {[65, 70, 68, 75, 80, 78, 85].map((height, i) => (
                  <div 
                    key={i} 
                    className="bg-primary/60 hover:bg-primary/80 rounded-t flex-1 transition-colors duration-200" 
                    style={{ height: `${height}%` }} 
                  />
                ))}
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-2">7-day improvement trend</p>
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-green-600">
                  <TrendingUp className="size-3 sm:size-4" />
                  <span className="text-xs sm:text-sm font-medium">+23% improvement</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
