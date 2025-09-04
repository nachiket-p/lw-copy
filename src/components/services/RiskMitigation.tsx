import { RiskMitigationContent } from "../../../content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";

interface RiskMitigationProps extends RiskMitigationContent {}

export function RiskMitigation({ title, guarantees }: RiskMitigationProps) {
  return (
    <section className="py-16 bg-stone-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const IconComponent = Icons[guarantee.icon as keyof typeof Icons] as React.ComponentType<any>;
            
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {IconComponent && (
                      <div className="w-12 h-12 bg-logicwind-red rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-deep-navy" />
                      </div>
                    )}
                    <CardTitle className="text-xl text-deep-navy">
                      {guarantee.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-grey leading-relaxed">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}