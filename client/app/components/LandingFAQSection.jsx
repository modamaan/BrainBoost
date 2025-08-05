"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does brain training actually work?",
    answer:
      "Our brain training games are based on cognitive science research. They target specific mental skills like memory, attention, and processing speed through repeated practice and progressive difficulty increases, helping to strengthen neural pathways.",
  },
  {
    question: "How much time should I spend training daily?",
    answer:
      "We recommend 10-15 minutes of daily training for optimal results. Consistency is more important than duration - regular short sessions are more effective than occasional long ones.",
  },
  {
    question: "Will I see real-world improvements in my daily life?",
    answer:
      "Many users report improvements in focus, memory, and problem-solving in their daily activities. While individual results vary, the cognitive skills you develop can transfer to real-world tasks and situations.",
  },
  {
    question: "Is brain training suitable for all ages?",
    answer:
      "Yes! Our platform is designed for users from teenagers to seniors. We offer age-appropriate challenges and difficulty levels that adapt to your cognitive abilities and progress.",
  },
]

export default function LandingFAQSection() {
  return (
    <section id="faq" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium" variant="secondary">
            FAQ
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight max-w-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Find answers to common questions about brain training and our platform.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-4xl lg:max-w-5xl"
        >
          <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem 
                value={`faq-${i}`} 
                key={i}
                className="border border-border/40 rounded-lg sm:rounded-xl px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10 backdrop-blur hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold py-4 sm:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
