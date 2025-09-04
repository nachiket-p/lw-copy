import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { AdvantageCardsContent } from "../../../content/types";

interface AdvantageCardsProps {
  content: AdvantageCardsContent;
}

export function AdvantageCards({ content }: AdvantageCardsProps) {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.cards.map((card, index) => {
            const IconComponent = Icons[card.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <Card key={index} className="p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">{card.title}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}