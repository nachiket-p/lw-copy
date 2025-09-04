import { TechnicalSpecsContent } from "../../../content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

interface TechnicalSpecsProps extends TechnicalSpecsContent {}

export function TechnicalSpecs({ title, sections, format }: TechnicalSpecsProps) {
  if (format === "tabs") {
    return (
      <section className="py-16 bg-pure-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue={sections[0]?.category.toLowerCase().replace(/\s+/g, '-')} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {sections.map((section, index) => (
                  <TabsTrigger 
                    key={index} 
                    value={section.category.toLowerCase().replace(/\s+/g, '-')}
                    className="text-sm"
                  >
                    {section.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {sections.map((section, index) => (
                <TabsContent 
                  key={index} 
                  value={section.category.toLowerCase().replace(/\s+/g, '-')}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-deep-navy">
                        {section.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-logicwind-red flex-shrink-0" />
                            <span className="text-deep-navy">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    );
  }

  if (format === "accordion") {
    return (
      <section className="py-16 bg-pure-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="w-full">
              {sections.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-deep-navy">
                    {section.category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-logicwind-red flex-shrink-0" />
                          <span className="text-deep-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }

  if (format === "grid") {
    return (
      <section className="py-16 bg-pure-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-deep-navy">
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-logicwind-red flex-shrink-0" />
                        <span className="text-deep-navy">{item}</span>
                      </div>
                    ))}
                  </div>
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