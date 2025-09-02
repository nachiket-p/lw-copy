import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface IsThisForYouProps {
  items: string[];
}

export function IsThisForYou({ items }: IsThisForYouProps) {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            This is for you if...
          </h2>

          <Card className="p-8 border-2 border-primary/20">
            <ul className="space-y-6">
              {items.map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg text-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}