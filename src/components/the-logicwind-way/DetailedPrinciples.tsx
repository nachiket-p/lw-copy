import { CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import type { ResponsibleAIPageContent } from "../../../content/types";

interface DetailedPrinciplesProps {
  principles: ResponsibleAIPageContent['principles'];
}

export function DetailedPrinciples({ principles }: DetailedPrinciplesProps) {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          {principles.map((principle, index) => {
            const IconComponent = Icons[principle.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={isEven ? "" : "order-first md:order-last"}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{principle.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {principle.description}
                  </p>
                  <ul className="space-y-3">
                    {principle.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={isEven ? "order-first md:order-last" : ""}>
                  <img 
                    src={`https://picsum.photos/600/400?random=${index + 2}`}
                    alt={`${principle.title} illustration`} 
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}