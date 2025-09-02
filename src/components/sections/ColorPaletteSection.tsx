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
    name: "Logicwind Blue",
    color: "#0E151E",
    description: "Primary brand color",
    icon: Shield,
    usage: "Backgrounds & text"
  },
  {
    name: "Logicwind Red",
    color: "#F04F4B",
    description: "Primary accent color",
    icon: Zap,
    usage: "CTAs & highlights"
  },
  {
    name: "Pure White",
    color: "#FFFFFF",
    description: "Clean backgrounds",
    icon: Star,
    usage: "Cards & content"
  },
  {
    name: "Blue Grey",
    color: "#D2D6E5",
    description: "Secondary text",
    icon: Type,
    usage: "Secondary content"
  },
  {
    name: "Neutral Grey",
    color: "#585E75",
    description: "Neutral elements",
    icon: Home,
    usage: "Borders & muted text"
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
              {/* Logicwind Red Examples */}
              <ColorUsageExample
                title="Logicwind Red Usage"
                description="Primary actions & highlights"
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

              {/* Logicwind Blue Examples */}
              <ColorUsageExample
                title="Logicwind Blue Usage"
                description="Primary backgrounds & text"
                icon={Shield}
                examples={[
                  {
                    component: (
                      <Card className="bg-accent text-accent-foreground p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold">Primary Section</h5>
                          <Users className="w-4 h-4" />
                        </div>
                        <p className="text-sm opacity-90">Brand content areas</p>
                      </Card>
                    ),
                    description: "Primary brand sections"
                  }
                ]}
              />

              {/* Blue Grey Examples */}
              <ColorUsageExample
                title="Blue Grey Usage"
                description="Secondary text & backgrounds"
                icon={Type}
                examples={[
                  {
                    component: (
                      <Card className="bg-secondary text-secondary-foreground p-6">
                        <div className="flex items-center justify-between">
                          <span>Secondary content</span>
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </Card>
                    ),
                    description: "Secondary content areas"
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