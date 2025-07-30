"use client";

import { HeroSection } from "@/components/sections/HeroSection"
import { ColorPaletteSection } from "@/components/sections/ColorPaletteSection"
import { TypographySection } from "@/components/sections/TypographySection"
import { ComponentsSection } from "@/components/sections/ComponentsSection"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { 
  Palette, 
  MousePointer, 
  Type, 
  Zap 
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Hero Section */}
      <HeroSection />

      <main className="space-y-0">
        {/* Color Palette Section */}
        <ColorPaletteSection />
        
        {/* Typography Section */}
        <TypographySection />
        
        {/* Components Section */}
        <ComponentsSection />

        {/* Footer Section */}
        <footer className="bg-accent text-accent-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-2">Logicwind Design System</h3>
                  <p className="opacity-80">Professional fitness & health UI components</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white/5 p-6 rounded-2xl">
                  <CardContent className="p-0 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Palette className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Brand Colors</h4>
                    <p className="opacity-70 text-sm">Consistent color palette for all fitness applications</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 p-6 rounded-2xl">
                  <CardContent className="p-0 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <MousePointer className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">UI Components</h4>
                    <p className="opacity-70 text-sm">Ready-to-use buttons, cards, and interactive elements</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 p-6 rounded-2xl">
                  <CardContent className="p-0 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Type className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Typography</h4>
                    <p className="opacity-70 text-sm">Complete type system for health and fitness content</p>
                  </CardContent>
                </Card>
              </div>

              <Separator className="my-8 bg-white/20" />

              <div className="pt-8">
                <p className="opacity-60 text-sm mb-4">
                  Built with React 19, Next.js 15, Tailwind CSS 4, shadcn/ui, and Lucide Icons
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <span className="opacity-40 text-xs">© 2024 Logicwind Design System</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="opacity-60 text-xs">Ready for production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}