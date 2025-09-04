import { Card } from "@/components/ui/card";
import { X, Check, Clock, DollarSign, Eye, Zap, Target, TrendingUp } from "lucide-react";
import type { ProblemSolutionContent } from "@/content/types";
import * as Icons from "lucide-react";

interface ProblemSolutionSectionProps {
  content: ProblemSolutionContent;
}

export function ProblemSolutionSection({ content }: ProblemSolutionSectionProps) {

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {content.headline}{" "}
            <span className="text-primary">{content.headlineAccent}</span>.
          </h2>
        </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* The Problem */}
              <Card className="p-8 border-2 border-destructive/30 bg-destructive/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{content.problem.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {content.problem.description}
                </p>

                <ul className="space-y-4">
                  {content.problem.points.map((point: { icon: string; text: string }, index: number) => {
                    const IconComponent = Icons[point.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                    return (
                      <li key={index} className="flex items-start">
                        <IconComponent className="w-5 h-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{point.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>

              {/* The Solution */}
              <Card className="p-8 border-2 border-primary/30 bg-primary/5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{content.solution.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {content.solution.description}
                </p>

                <ul className="space-y-4">
                  {content.solution.benefits.map((benefit: { icon: string; text: string }, index: number) => {
                    const IconComponent = Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                    return (
                      <li key={index} className="flex items-start">
                        <IconComponent className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </div>
      </div>
    </section>
  );
}