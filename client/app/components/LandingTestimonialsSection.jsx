"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "My memory has improved dramatically since starting BrainBoost. I can remember names and details much better at work meetings.",
    author: "Sarah Chen",
    role: "Marketing Executive, 32",
    category: "Professional",
    rating: 5,
  },
  {
    quote:
      "The logic games helped me improve my problem-solving skills. My grades in math and science have gone up significantly!",
    author: "Marcus Johnson",
    role: "High School Student, 16",
    category: "Student",
    rating: 5,
  },
  {
    quote:
      "The attention training exercises have helped me focus better during long coding sessions. My productivity has increased noticeably.",
    author: "David Kim",
    role: "Software Developer, 29",
    category: "Professional",
    rating: 5,
  }
]

export default function LandingTestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium" variant="secondary">
            Success Stories
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl">
            Real Results from Real Users
          </h2>
          <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            See how brain training has transformed the lives of students, professionals, and seniors.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, j) => (
                          <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.category}
                    </Badge>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-auto pt-4 border-t border-border/40">
                    <div className="size-8 sm:size-10 md:size-12 rounded-full bg-muted flex items-center justify-center text-foreground font-medium text-xs sm:text-base md:text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
