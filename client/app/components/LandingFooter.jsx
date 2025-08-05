"use client"
import Link from "next/link"

export default function LandingFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/80 backdrop-blur py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="space-y-3 sm:space-y-4 lg:col-span-2">
            <h4 className="text-sm sm:text-base lg:text-lg font-bold">BrainBoost</h4>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md">
              Cognitive training for all ages. Unlock your mind's full potential with daily brain games and analytics.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base lg:text-lg font-bold">Training</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Brain Games
                </Link>
              </li>
              <li>
                <Link href="#dashboard" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Cognitive Science
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base lg:text-lg font-bold">Resources</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Training Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base lg:text-lg font-bold">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row justify-between items-center border-t border-border/40 pt-6 sm:pt-8 lg:pt-10">
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground text-center lg:text-left">
            &copy; {new Date().getFullYear()} BrainBoost. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-end">
            <Link href="#" className="text-xs sm:text-sm lg:text-base text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs sm:text-sm lg:text-base text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs sm:text-sm lg:text-base text-muted-foreground hover:text-foreground hover:underline transition-all duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
