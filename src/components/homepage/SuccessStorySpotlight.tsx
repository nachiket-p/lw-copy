import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Quote } from "lucide-react";

export function SuccessStorySpotlight() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Results, Delivered.
          </h2>
          <p className="text-xl text-muted-foreground">
            Real outcomes for real businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 border-2 border-primary/20 bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">Case Study</div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Cappital Co: Accelerating Market Leadership
                </h3>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  For Cappital Co, our Agentic Team accelerated their feature deployment by 40%, 
                  allowing them to capture a new market segment ahead of the competition.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">40%</div>
                    <div className="text-sm text-muted-foreground">Faster Deployment</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">6 mo</div>
                    <div className="text-sm text-muted-foreground">Time to Market</div>
                  </div>
                </div>

                <Button asChild>
                  <Link href="/success-stories">
                    View All Success Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="lg:pl-8">
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Impact Metrics</div>
                      <div className="text-sm text-muted-foreground">Cappital Co Results</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Development Speed</span>
                      <span className="font-semibold text-primary">+40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Market Advantage</span>
                      <span className="font-semibold text-primary">6 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Budget Certainty</span>
                      <span className="font-semibold text-primary">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Team Satisfaction</span>
                      <span className="font-semibold text-primary">Excellent</span>
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