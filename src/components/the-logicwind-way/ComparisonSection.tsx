import type { ComparisonSection as ComparisonSectionType } from "../../../content/types";

interface ComparisonSectionProps {
  content: ComparisonSectionType;
}

export function ComparisonSection({ content }: ComparisonSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Traditional Development */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-destructive mb-6">{content.traditional.title}</h3>
            <div className="space-y-4">
              {content.traditional.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Agentic Development */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">{content.agentic.title}</h3>
            <div className="space-y-4">
              {content.agentic.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}