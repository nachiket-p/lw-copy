import { ServiceStatsContent } from "../../../content/types";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceStatsProps extends ServiceStatsContent {
  // This interface extends ServiceStatsContent with any additional props if needed
}

export function ServiceStats({ title, metrics, layout }: ServiceStatsProps) {
  const layoutClasses = {
    grid: "grid grid-cols-2 md:grid-cols-4 gap-6",
    timeline: "flex flex-col md:flex-row gap-6 md:gap-8",
    dashboard: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
  };

  const cardClasses = {
    grid: "text-center",
    timeline: "flex-1 text-center md:text-left",
    dashboard: "bg-gradient-to-br from-white to-light-beige border-2"
  };

  return (
    <section className="py-16 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
            {title}
          </h2>
        </div>
        
        <div className={layoutClasses[layout]}>
          {metrics.map((metric, index) => (
            <Card key={index} className={cardClasses[layout]}>
              <CardContent className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-logicwind-red mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-deep-navy mb-2">
                  {metric.label}
                </div>
                {metric.description && (
                  <div className="text-sm text-neutral-grey">
                    {metric.description}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}