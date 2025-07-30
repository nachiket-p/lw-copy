import { ComponentShowcase, ComponentVariant, ComponentGrid } from "@/components/custom/ComponentShowcase"
import { MetricCard, SimpleMetricCard } from "@/components/custom/MetricCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  MousePointer, 
  Target, 
  Zap, 
  Eye, 
  Shield, 
  Type, 
  Activity, 
  Star, 
  Heart, 
  Users, 
  Plus, 
  Settings, 
  Calendar, 
  Mail, 
  ChevronRight,
  Award,
  BarChart3,
  TrendingUp,
  Bell,
  ArrowRight,
  Play,
  Search
} from "lucide-react"

export function ComponentsSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <ComponentShowcase
          title="UI Components"
          description="Reusable components built with shadcn/ui and Logicwind theming"
          icon={MousePointer}
        >
          {/* Buttons */}
          <ComponentVariant
            title="Interactive Buttons"
            description="Button variants with Logicwind styling and theming"
          >
            {/* Primary Buttons */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Primary Actions (Hero Lime)
              </h4>
              <ComponentGrid columns={4}>
                <Button variant="pill" size="lg">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  START JOURNEY
                </Button>
                <Button variant="pill">
                  <Plus className="w-4 h-4 mr-2" />
                  JOIN NOW
                </Button>
                <Button variant="fitness">
                  <Play className="w-4 h-4 mr-2" />
                  WATCH DEMO
                </Button>
                <Button variant="pill" size="sm">
                  <Search className="w-3 h-3 mr-2" />
                  EXPLORE
                </Button>
              </ComponentGrid>
            </div>

            {/* Secondary Buttons */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Secondary Actions
              </h4>
              <ComponentGrid columns={3}>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="secondary">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button variant="ghost">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </ComponentGrid>
            </div>

            {/* Dark Background Buttons */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Dark Background Buttons
              </h4>
              <Card className="bg-accent text-accent-foreground p-8">
                <ComponentGrid columns={3}>
                  <Button variant="pill">
                    <Users className="w-4 h-4 mr-2" />
                    JOIN COMMUNITY
                  </Button>
                  <Button variant="secondary">
                    <Mail className="w-4 h-4 mr-2" />
                    Get Updates
                  </Button>
                  <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </ComponentGrid>
              </Card>
            </div>

            {/* Button States */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                Interactive States
              </h4>
              <ComponentGrid columns={4}>
                <div className="text-center">
                  <Button variant="pill" className="w-full mb-3">
                    DEFAULT
                  </Button>
                  <span className="text-xs text-muted-foreground font-medium">Normal State</span>
                </div>
                <div className="text-center">
                  <Button variant="pill" className="w-full mb-3 brightness-110">
                    HOVER
                  </Button>
                  <span className="text-xs text-muted-foreground font-medium">Hover State</span>
                </div>
                <div className="text-center">
                  <Button variant="pill" className="w-full mb-3 brightness-90">
                    ACTIVE
                  </Button>
                  <span className="text-xs text-muted-foreground font-medium">Active State</span>
                </div>
                <div className="text-center">
                  <Button disabled className="w-full mb-3">
                    DISABLED
                  </Button>
                  <span className="text-xs text-muted-foreground font-medium">Disabled State</span>
                </div>
              </ComponentGrid>
            </div>
          </ComponentVariant>

          {/* Cards */}
          <ComponentVariant
            title="Interactive Cards"
            description="Card components with Logicwind theming and variants"
          >
            {/* Metric Cards */}
            <div className="mb-16">
              <h4 className="text-lg font-semibold mb-8 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                Fitness Score & Progress Cards
              </h4>
              <ComponentGrid columns={3}>
                <MetricCard
                  title="FITNESS SCORE"
                  value={92}
                  unit="%"
                  trend={{
                    value: "+2.4%",
                    direction: "up",
                    period: "this week"
                  }}
                  users={[
                    { name: "User 1", avatar: "https://picsum.photos/32/32?random=2" },
                    { name: "User 2", avatar: "https://picsum.photos/32/32?random=3" },
                    { name: "User 3", avatar: "https://picsum.photos/32/32?random=4" }
                  ]}
                  usersCount="+247 friends"
                  icon={Activity}
                  chart={
                    <img 
                      src="https://picsum.photos/300/96?random=10" 
                      alt="Fitness chart" 
                      className="w-full h-full object-cover"
                    />
                  }
                />

                <Card className="p-8 rounded-2xl shadow-xl bg-card text-card-foreground border-2 border-border transform hover:scale-105 transition-all duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">
                        DAILY MOTIVATION
                      </p>
                      <Bell className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="mb-6">
                      <p className="text-base font-medium leading-relaxed">
                        Amazing progress this week, Sarah! You&apos;ve completed 5 workouts and burned 2,847 calories. Keep crushing those goals! 💪
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="https://picsum.photos/32/32?random=5" alt="Coach" />
                          <AvatarFallback>CM</AvatarFallback>
                        </Avatar>
                        <div>
                          <span className="text-sm font-medium">Coach Maria</span>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-3 h-3 mr-1" />
                        VIEW
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <MetricCard
                  title="Weekly Goals"
                  value="4/5"
                  description="Goals completed"
                  icon={Target}
                  action={{
                    label: "VIEW DETAILS",
                    onClick: () => console.log("View details clicked")
                  }}
                  chart={
                    <img 
                      src="https://picsum.photos/80/96?random=11" 
                      alt="Workout" 
                      className="w-full h-full object-cover"
                    />
                  }
                />
              </ComponentGrid>
            </div>

            {/* Feature Cards */}
            <div className="mb-16">
              <h4 className="text-lg font-semibold mb-8 flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Feature Showcase Cards
              </h4>
              <ComponentGrid columns={2}>
                <Card className="rounded-2xl shadow-xl overflow-hidden bg-primary text-primary-foreground transform hover:scale-105 transition-all duration-200">
                  <CardContent className="flex p-0">
                    <div className="flex-1 p-8">
                      <div className="flex items-center mb-4">
                        <Zap className="w-6 h-6 mr-3" />
                        <h5 className="text-2xl font-bold">AI-Powered Training</h5>
                      </div>
                      <p className="text-sm opacity-80 mb-6">
                        Get personalized workout recommendations powered by AI that adapts to your fitness level and goals.
                      </p>
                      <div className="mb-6">
                        <div className="flex items-baseline mb-3">
                          <span className="text-4xl font-bold">95</span>
                          <span className="text-lg ml-1">%</span>
                          <span className="text-sm opacity-70 ml-2">Success Rate</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="opacity-70 flex items-center">
                              <Calendar className="w-3 h-3 mr-2" />
                              This Week
                            </span>
                            <span className="font-semibold">7 workouts</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="opacity-70 flex items-center">
                              <Activity className="w-3 h-3 mr-2" />
                              Calories Burned
                            </span>
                            <span className="font-semibold">3,240 kcal</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-40 bg-black/5 flex items-center justify-center p-4">
                      <img 
                        src="https://picsum.photos/120/200?random=12" 
                        alt="AI Training" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8 rounded-2xl shadow-xl bg-card text-card-foreground border-2 border-border transform hover:scale-105 transition-all duration-200">
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <Heart className="w-6 h-6 text-red-500 mr-3" />
                        <h5 className="text-2xl font-semibold">Wellness Community</h5>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Join thousands of fitness enthusiasts sharing their journey, tips, and motivation. Connect, compete, and celebrate together!
                      </p>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2" />
                          <span>12,847 members</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-4 h-4 mr-2" />
                          <span>4.9 rating</span>
                        </div>
                      </div>
                      <Button variant="pill">
                        <Plus className="w-4 h-4 mr-2" />
                        JOIN COMMUNITY
                      </Button>
                    </div>
                    <div className="w-full h-32 rounded-2xl overflow-hidden">
                      <img 
                        src="https://picsum.photos/400/128?random=13" 
                        alt="Community" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </ComponentGrid>
            </div>

            {/* Dark Cards */}
            <div>
              <h4 className="text-lg font-semibold mb-8 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Premium Dark Cards
              </h4>
              <ComponentGrid columns={2}>
                <Card className="bg-accent text-accent-foreground p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <Users className="w-8 h-8 text-primary mr-4" />
                        <div>
                          <h5 className="text-2xl font-bold mb-2">
                            Premium Community Access
                          </h5>
                          <p className="text-xs uppercase tracking-wide font-semibold opacity-70">
                            EXCLUSIVE MEMBERSHIP
                          </p>
                        </div>
                      </div>
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <p className="opacity-90 mb-8 leading-relaxed text-base">
                      Join our elite fitness community with exclusive workout plans, nutrition guides, and personal coaching from certified trainers.
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center text-sm opacity-80">
                        <Star className="w-4 h-4 mr-2 text-primary" />
                        <span>VIP Content</span>
                      </div>
                      <div className="flex items-center text-sm opacity-80">
                        <Play className="w-4 h-4 mr-2 text-primary" />
                        <span>Live Sessions</span>
                      </div>
                    </div>
                    <Button variant="pill">
                      <Plus className="w-4 h-4 mr-2" />
                      UPGRADE NOW
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-accent text-accent-foreground p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h6 className="text-xs uppercase tracking-wide font-semibold opacity-70 mb-2">
                          PLATFORM STATISTICS
                        </h6>
                        <h5 className="text-xl font-bold">Real-time metrics</h5>
                      </div>
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <SimpleMetricCard
                        label="Active Users"
                        value="24.8K"
                        icon={Users}
                        variant="accent"
                        className="bg-white/10"
                      />
                      <SimpleMetricCard
                        label="Satisfaction"
                        value="99.2%"
                        icon={Heart}
                        variant="accent"
                        className="bg-white/10"
                      />
                      <SimpleMetricCard
                        label="Workouts"
                        value="1.2M"
                        icon={Activity}
                        variant="accent"
                        className="bg-white/10"
                      />
                      <SimpleMetricCard
                        label="Coaches"
                        value="847"
                        icon={Award}
                        variant="accent"
                        className="bg-white/10"
                      />
                    </div>
                  </CardContent>
                </Card>
              </ComponentGrid>
            </div>
          </ComponentVariant>
        </ComponentShowcase>
      </div>
    </section>
  )
}