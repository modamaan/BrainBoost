"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import LandingHeader from "./components/LandingHeader"
import LandingHeroSection from "./components/LandingHeroSection"
import LandingFeaturesSection from "./components/LandingFeaturesSection"
import LandingDashboardPreviewSection from "./components/LandingDashboardPreviewSection"
import LandingHowItWorksSection from "./components/LandingHowItWorksSection"
import LandingGamificationSection from "./components/LandingGamificationSection"
import LandingTestimonialsSection from "./components/LandingTestimonialsSection"
import LandingPricingSection from "./components/LandingPricingSection"
import LandingFAQSection from "./components/LandingFAQSection"
import LandingFooter from "./components/LandingFooter"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex min-h-[100dvh] flex-col w-full">
      <LandingHeader
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mounted={mounted}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="flex-1 w-full">
        <LandingHeroSection />
        <LandingFeaturesSection />
        <LandingDashboardPreviewSection />
        <LandingHowItWorksSection />
        <LandingGamificationSection />
        <LandingTestimonialsSection />
        <LandingPricingSection />
        <LandingFAQSection />
      </main>
      <LandingFooter />
    </div>
  )
}

