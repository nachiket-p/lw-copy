import { ServiceComparisonContent } from "../../../content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface ServiceComparisonProps extends ServiceComparisonContent {
  // This interface extends ServiceComparisonContent with any additional props if needed
}

export function ServiceComparison({ title, subtitle, comparison, layout }: ServiceComparisonProps) {
  if (layout === "side-by-side") {
    return (
      <section className="py-16 bg-pure-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
            <p className="text-lg text-neutral-grey max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-logicwind-red">
              <CardHeader className="text-center bg-logicwind-red">
                <CardTitle className="text-xl text-deep-navy">
                  {comparison.us.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {comparison.us.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-logicwind-red flex-shrink-0 mt-0.5" />
                      <span className="text-deep-navy">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-neutral-grey">
              <CardHeader className="text-center bg-neutral-grey/10">
                <CardTitle className="text-xl text-neutral-grey">
                  {comparison.them.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {comparison.them.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-neutral-grey flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-grey">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return null;
}