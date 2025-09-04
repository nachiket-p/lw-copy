import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";
import type { ResponsibleAIPageContent } from "../../../content/types";

interface PrinciplesOverviewProps {
  principles: ResponsibleAIPageContent['principles'];
}

export function PrinciplesOverview({ principles }: PrinciplesOverviewProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Core Principles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four foundational commitments that ensure our AI solutions serve humanity&apos;s best interests
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = Icons[principle.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <Card key={index} className="p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}