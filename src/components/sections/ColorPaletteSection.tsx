import { ColorPalette, ColorUsageExample } from "@/components/custom/ColorSwatch"
import { ComponentShowcase } from "@/components/custom/ComponentShowcase"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" 
import { 
  Palette, 
  Zap, 
  Shield, 
  Home, 
  Star, 
  Type,
  Target,
  Activity,
  Users,
  Calendar
} from "lucide-react"

const brandColors = [
  {
    name: "Hero Lime",
    color: "#D4F620",
    description: "Primary accent color",
    icon: Zap,
    usage: "CTAs & highlights"
  },
  {
    name: "Deep Navy",
    color: "#0B3B4D",
    description: "Dark sections & premium",
    icon: Shield,
    usage: "Community & premium"
  },
  {
    name: "Light Beige",
    color: "#F5F0E8",
    description: "Neutral backgrounds",
    icon: Home,
    usage: "Subtle backgrounds"
  },
  {
    name: "Pure White",
    color: "#FFFFFF",
    description: "Clean backgrounds",
    icon: Star,
    usage: "Cards & content"
  },
  {
    name: "Pure Black",
    color: "#000000",
    description: "Primary text",
    icon: Type,
    usage: "Typography"
  }
]

export function ColorPaletteSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <ComponentShowcase
          title="Brand Colors"
          description="The Logicwind color palette designed for fitness and health applications"
          icon={Palette}
        >
          <ColorPalette colors={brandColors} />

          {/* Usage Examples */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              Color Usage in Practice
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Hero Lime Examples */}
              <ColorUsageExample
                title="Hero Lime Usage"
                description="Primary actions & achievements"
                icon={Zap}
                examples={[
                  {
                    component: (
                      <Button variant="pill" className="w-full">
                        <Target className="w-4 h-4 mr-2" />
                        PRIMARY CTA
                      </Button>
                    ),
                    description: "Primary call-to-action buttons"
                  },
                  {
                    component: (
                      <Card className="bg-primary text-primary-foreground p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">87%</span>
                          <Activity className="w-5 h-5" />
                        </div>
                      </Card>
                    ),
                    description: "Achievement and metric cards"
                  }
                ]}
              />

              {/* Deep Navy Examples */}
              <ColorUsageExample
                title="Deep Navy Usage"
                description="Dark sections & community"
                icon={Shield}
                examples={[
                  {
                    component: (
                      <Card className="bg-accent text-accent-foreground p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold">Premium Section</h5>
                          <Users className="w-4 h-4" />
                        </div>
                        <p className="text-sm opacity-90">Community content</p>
                      </Card>
                    ),
                    description: "Premium and community sections"
                  }
                ]}
              />

              {/* Light Beige Examples */}
              <ColorUsageExample
                title="Light Beige Usage"
                description="Subtle backgrounds & cards"
                icon={Home}
                examples={[
                  {
                    component: (
                      <Card className="bg-secondary text-secondary-foreground p-6">
                        <div className="flex items-center justify-between">
                          <span>Neutral content</span>
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </Card>
                    ),
                    description: "Neutral content areas"
                  }
                ]}
              />
            </div>
          </div>
        </ComponentShowcase>
      </div>
    </section>
  )
}