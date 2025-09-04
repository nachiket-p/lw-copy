import { PricingOverviewContent } from "../../../content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingOverviewProps extends PricingOverviewContent {
  // This interface extends PricingOverviewContent with any additional props if needed
}

export function PricingOverview({ title, subtitle, packages, fixedPrice, layout }: PricingOverviewProps) {
  if (layout === "simple" && fixedPrice) {
    return (
      <section className="py-16 bg-stone-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
            <p className="text-lg text-neutral-grey max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-logicwind-red">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-deep-navy mb-2">
                  {fixedPrice.starting}
                </CardTitle>
                <p className="text-neutral-grey">{fixedPrice.note}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {fixedPrice.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-logicwind-red flex-shrink-0" />
                    <span className="text-deep-navy">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "packages" && packages) {
    return (
      <section className="py-16 bg-stone-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
            <p className="text-lg text-neutral-grey max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.highlighted ? 'border-2 border-logicwind-red scale-105' : ''}`}>
                {pkg.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-hero-lime text-deep-navy">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-deep-navy mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-logicwind-red mb-2">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-logicwind-red flex-shrink-0" />
                      <span className="text-sm text-deep-navy">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}