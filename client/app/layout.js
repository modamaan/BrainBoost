import React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import { ThemeProvider } from "./theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SaaSify - Streamline Your Workflow",
  description: "Boost productivity, reduce costs, and scale your business with our all-in-one SaaS platform.",
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
