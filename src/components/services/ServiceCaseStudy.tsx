import { Card } from "@/components/ui/card";
import { Quote, TrendingUp } from "lucide-react";

interface ServiceCaseStudyProps {
  content: string;
}

export function ServiceCaseStudy({ content }: ServiceCaseStudyProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Success Story
          </h2>

          <Card className="p-8 lg:p-12 border-2 border-primary/20 bg-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="font-semibold text-foreground">Client Testimonial</div>
                </div>

                <blockquote className="text-xl text-foreground mb-6 italic leading-relaxed">
                  &ldquo;Logicwind transformed our ambitious idea into a market-ready product in just 12 weeks. 
                  Their agentic approach delivered exactly what we needed, when we needed it.&rdquo;
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">CC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Cappital Co</div>
                    <div className="text-sm text-muted-foreground">Fintech Startup</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-background p-6 rounded-2xl border">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary mr-3" />
                    <div className="font-semibold text-foreground">Project Results</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-sm text-muted-foreground">Weeks to Market</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">On Budget</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Features Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5⭐</div>
                      <div className="text-sm text-muted-foreground">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}