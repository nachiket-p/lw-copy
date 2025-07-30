import { ComponentShowcase, ComponentVariant } from "@/components/custom/ComponentShowcase"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Type, 
  Star, 
  Shield, 
  Users, 
  Award, 
  Plus, 
  BarChart3, 
  TrendingUp, 
  Bell, 
  Clock,
  ArrowRight,
  Eye,
  Play,
  ChevronRight
} from "lucide-react"

export function TypographySection() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <ComponentShowcase
          title="Typography System"
          description="Complete typography hierarchy for fitness and health applications"
          icon={Type}
        >
          {/* Heading Hierarchy */}
          <ComponentVariant
            title="Heading Hierarchy"
            description="Structured heading system for consistent content organization"
            badge="6 levels"
          >
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <h1 className="text-5xl font-bold text-foreground leading-tight mb-2">
                  Unlock your fitness potential
                </h1>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-5xl font-bold
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Hero headlines</span>
                </div>
              </div>
              
              <div className="border-b border-border pb-6">
                <h2 className="text-4xl font-bold text-foreground leading-tight mb-2">
                  Build healthy habits
                </h2>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-4xl font-bold
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Section titles</span>
                </div>
              </div>
              
              <div className="border-b border-border pb-6">
                <h3 className="text-3xl font-semibold text-foreground leading-tight mb-2">
                  Track your progress
                </h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-3xl font-semibold
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Subsection headers</span>
                </div>
              </div>
              
              <div className="border-b border-border pb-6">
                <h4 className="text-2xl font-semibold text-foreground leading-tight mb-2">
                  Daily workouts
                </h4>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-2xl font-semibold
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Card titles</span>
                </div>
              </div>
              
              <div className="border-b border-border pb-6">
                <h5 className="text-xl font-semibold text-foreground leading-tight mb-2">
                  Join our community
                </h5>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-xl font-semibold
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Component headers</span>
                </div>
              </div>
              
              <div>
                <h6 className="text-lg font-semibold text-foreground leading-tight mb-2">
                  Nutrition tips
                </h6>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-lg font-semibold
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Small headers</span>
                </div>
              </div>
            </div>
          </ComponentVariant>

          {/* Body Text Styles */}
          <ComponentVariant
            title="Body Text Styles"
            description="Readable text styles for content and interface copy"
          >
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                  Large body text perfect for introductions and important messages. Transform your fitness journey with our comprehensive health tracking platform designed for modern lifestyles.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-lg text-muted-foreground
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Introductions & highlights</span>
                </div>
              </div>
              
              <div className="border-b border-border pb-6">
                <p className="text-base text-muted-foreground leading-relaxed mb-3">
                  Regular body text for general content. Energize your lifestyle with personalized workout plans, nutrition tracking, and community support that keeps you motivated every step of the way.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-base text-muted-foreground
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">General content</span>
                </div>
              </div>
              
              <div className="border-b border-border pb-6">
                <p className="text-sm text-muted-foreground leading-normal mb-3">
                  Small text for captions, footnotes and secondary information. Available on iOS and Android platforms.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-sm text-muted-foreground
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Captions & footnotes</span>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground leading-normal uppercase tracking-wide mb-3">
                  MY FITNESS JOURNEY
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    text-xs uppercase tracking-wide
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Labels & categories</span>
                </div>
              </div>
            </div>
          </ComponentVariant>

          {/* Dark Background Text */}
          <ComponentVariant
            title="Dark Background Text"
            description="Typography optimized for dark themes and accent backgrounds"
          >
            <Card className="bg-accent text-accent-foreground p-8 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-2xl font-bold leading-tight mb-4 flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    Join our fitness community
                  </h4>
                  <p className="text-base opacity-90 leading-relaxed mb-4">
                    Connect with thousands of fitness enthusiasts, share your progress, and get motivation from people who understand your journey.
                  </p>
                  <p className="text-sm opacity-80">
                    Premium community features with exclusive content and expert guidance
                  </p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="pill">
                  <Plus className="w-4 h-4 mr-2" />
                  JOIN NOW
                </Button>
                <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                  Learn More
                </Button>
              </div>
            </Card>
          </ComponentVariant>

          {/* UI Text & Metrics */}
          <ComponentVariant
            title="UI Text & Metrics"
            description="Specialized typography for interface elements and data display"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Metrics Card */}
              <Card className="bg-primary text-primary-foreground p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wide font-semibold opacity-70">
                      FITNESS SCORE
                    </span>
                  </div>
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">87</span>
                  <span className="text-lg ml-1">%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-semibold flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +2.4%
                  </span>
                  <span className="text-xs opacity-70">This week</span>
                </div>
              </Card>

              {/* Message Card */}
              <Card className="bg-card text-card-foreground p-8 shadow-lg border-2 border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">
                    DAILY MOTIVATION
                  </span>
                  <Bell className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-base font-medium leading-relaxed mb-4">
                  Hey Sarah! You&apos;re crushing your goals this week. Keep up the amazing work and you&apos;ll hit your target by Friday!
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://picsum.photos/32/32?random=1" alt="Coach" />
                      <AvatarFallback>CA</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-muted-foreground">Coach Alex</span>
                  </div>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
              </Card>
            </div>
          </ComponentVariant>

          {/* Button Typography */}
          <ComponentVariant
            title="Button Typography"
            description="Typography styles for interactive elements"
          >
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-border">
                <Button variant="pill" size="lg">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  START JOURNEY
                </Button>
                <div className="text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    Primary CTA
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Uppercase, semibold, tracking-wide</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-border">
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <div className="text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    Secondary
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Normal case, medium weight</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <Button variant="link" className="justify-start p-0">
                  <Play className="w-4 h-4 mr-2" />
                  Watch workout video
                </Button>
                <div className="text-sm text-muted-foreground">
                  <Badge variant="secondary" className="mr-4">
                    Text link
                  </Badge>
                  <span className="text-xs uppercase tracking-wide">Underlined, medium weight</span>
                </div>
              </div>
            </div>
          </ComponentVariant>
        </ComponentShowcase>
      </div>
    </section>
  )
}