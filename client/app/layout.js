import React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import { ThemeProvider } from "./theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BrainBoost - Cognitive Training & Brain Games",
  description: "Enhance your memory, focus, and problem-solving skills with our science-backed brain training exercises and games.",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
