import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Play, Eye } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground">Logicwind Design System</h1>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A comprehensive design system showcasing all key design elements, components, and patterns for the Logicwind brand. Built for modern fitness and health applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="pill" size="lg">
              <Play className="w-4 h-4 mr-2" />
              EXPLORE COMPONENTS
            </Button>
            <Button variant="outline" size="lg">
              <Eye className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="fitness">
              Next.js 15
            </Badge>
            <Badge variant="fitness">
              React 19
            </Badge>
            <Badge variant="fitness">
              Tailwind CSS 4
            </Badge>
            <Badge variant="fitness">
              shadcn/ui
            </Badge>
            <Badge variant="fitness">
              TypeScript
            </Badge>
          </div>
        </header>
      </div>
    </section>
  )
}