import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Rocket, Settings, Users } from "lucide-react";

const services = [
  {
    title: "The AI Advantage Sprint",
    description: "Pinpoint the key AI features that will make your product a market leader.",
    icon: Zap,
    href: "/services/ai-advantage-sprint"
  },
  {
    title: "Agentic MVP Development",
    description: "Go from a bold idea to a robust, market-ready product in record time.",
    icon: Rocket,
    href: "/services/agentic-mvp-development"
  },
  {
    title: "Intelligent ERP Solutions",
    description: "Streamline your operations with a powerful, open-source ERP system built for sustainable growth.",
    icon: Settings,
    href: "/services/intelligent-erp-solutions"
  },
  {
    title: "Agentic Development Teams",
    description: "Supercharge your project with a dedicated, hyper-efficient team that integrates seamlessly with yours.",
    icon: Users,
    href: "/services/agentic-development-teams"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Solutions to Build, Grow, and Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect solution for your stage of growth and ambition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}