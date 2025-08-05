"use client"
import Link from "next/link"
import { Brain, Sun, Moon, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function LandingHeader({ isScrolled, mobileMenuOpen, setMobileMenuOpen, mounted, theme, toggleTheme }) {
  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex h-20 items-center justify-between">
        <div className="flex items-center gap-3 font-bold">
          <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground shadow-lg">
            <Brain className="size-5" />
          </div>
          <span className="text-xl font-bold">BrainBoost</span>
        </div>
        <nav className="hidden lg:flex gap-10">
          <Link href="#features" className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105">Features</Link>
          <Link href="#dashboard" className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105">Dashboard</Link>
          <Link href="#testimonials" className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105">Success Stories</Link>
          <Link href="#pricing" className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105">Pricing</Link>
        </nav>
        <div className="hidden lg:flex gap-6 items-center">
          <Button variant="ghost" size="lg" onClick={toggleTheme} className="rounded-full h-12 w-12">
            {mounted && theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="#" className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105">Log in</Link>
          <Button size="lg" className="rounded-full px-8 py-3 text-base font-semibold">
            Start Training
            <ChevronRight className="ml-2 size-5" />
          </Button>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="#features" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#dashboard" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="#testimonials" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link 
                href="#pricing" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </nav>
            <div className="pt-4 border-t border-border/40 space-y-3">
              <Link 
                href="#" 
                className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Button 
                className="w-full rounded-full" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Training
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
