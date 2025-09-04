import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { ResponsibleAIPageContent } from "../../../content/types";

interface ResponsibleAICTAProps {
  finalCTA: ResponsibleAIPageContent['finalCTA'];
}

export function ResponsibleAICTA({ finalCTA }: ResponsibleAICTAProps) {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
          {finalCTA.title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {finalCTA.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            variant="default"
            className="px-8 py-6 text-lg font-semibold rounded-full uppercase tracking-wide"
          >
            <Link href="/contact">{finalCTA.ctaText}</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="px-8 py-6 text-lg font-semibold rounded-full"
          >
            <Link href="/the-logicwind-way/agentic-development">Learn About Our Approach</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}