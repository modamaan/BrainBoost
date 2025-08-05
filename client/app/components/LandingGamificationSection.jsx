"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Star, Trophy, Users } from "lucide-react"

const items = [
  {
    title: "Daily Streaks",
    description: "Build consistency with streak tracking",
    icon: <Zap className="size-8 text-yellow-500" />,
    value: "15 days",
  },
  {
    title: "XP Points",
    description: "Earn experience for every game",
    icon: <Star className="size-8 text-blue-500" />,
    value: "2,450 XP",
  },
  {
    title: "Brain Trophies",
    description: "Unlock achievements and badges",
    icon: <Trophy className="size-8 text-amber-500" />,
    value: "12 earned",
  },
  {
    title: "Leaderboards",
    description: "Compete with friends and family",
    icon: <Users className="size-8 text-green-500" />,
    value: "#3 this week",
  },
]

export default function LandingGamificationSection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-muted/30 relative overflow-hidden">
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
            Make Training Addictive
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl">
            Gamification & Motivation
          </h2>
          <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Stay motivated with streaks, achievements, and friendly competition.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md group">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 lg:mb-3 leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-2 sm:mb-3 lg:mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{item.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
