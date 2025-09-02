import { Card } from "@/components/ui/card";
import { X, Check, Clock, DollarSign, Eye, Zap, Target, TrendingUp } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Old Way is Too Slow. The Future is{" "}
            <span className="text-primary">Agentic</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* The Problem */}
          <Card className="p-8 border-2 border-destructive/30 bg-destructive/5">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mr-4">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The Problem</h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Traditional development is plagued by slow timelines, budget uncertainty, 
              and a lack of transparency. It wasn&apos;t built for the speed of today&apos;s market.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Slow, unpredictable timelines</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Budget uncertainty and surprise costs</span>
              </li>
              <li className="flex items-start">
                <Eye className="w-5 h-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Lack of transparency in the process</span>
              </li>
            </ul>
          </Card>

          {/* The Solution */}
          <Card className="p-8 border-2 border-primary/30 bg-primary/5">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The Solution</h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our Agentic approach changes the equation. We deliver with unparalleled speed, 
              fixed-cost certainty, and intelligent insights, giving you a definitive competitive edge.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Unparalleled development speed</span>
              </li>
              <li className="flex items-start">
                <Target className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Fixed-cost certainty and clear budgets</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Intelligent insights and full transparency</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}