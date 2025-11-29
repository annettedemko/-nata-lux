'use client'

import { ReactNode } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingButtons } from "@/components/FloatingButtons"
import { InstagramSection } from "@/components/InstagramSection"
import { PageParallaxBackground } from "@/components/PageParallaxBackground"
import { GoldenCursor } from "@/components/GoldenCursor"
import { PageTransition } from "@/components/PageTransition"
import { Providers } from './providers'

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LanguageProvider>
          <PageTransition>
            <PageParallaxBackground>
              <div className="flex flex-col min-h-screen m-0 p-0">
                <Header />
                <main className="flex-grow m-0 p-0 pb-24 md:pb-0">
                  {children}
                </main>
                <InstagramSection />
                <Footer />
                <FloatingButtons />
              </div>
            </PageParallaxBackground>
          </PageTransition>
          <GoldenCursor />
        </LanguageProvider>
      </TooltipProvider>
    </Providers>
  )
}
