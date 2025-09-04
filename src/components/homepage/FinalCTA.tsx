import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import type { FinalCTAContent } from "@/content/types";

interface FinalCTAProps {
  content: FinalCTAContent;
}

export function FinalCTA({ content }: FinalCTAProps) {

  return (
    <section className="py-20 lg:py-32 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {content.headline}{" "}
            <span className="text-primary">{content.headlineAccent}</span>
          </h2>

          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="default" className="text-lg px-8 py-6">
              <Link href={content.primaryCTA.href}>
                {content.primaryCTA.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href={content.secondaryCTA.href}>
                {content.secondaryCTA.text}
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center text-sm opacity-70">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
            <span>{content.benefits}</span>
          </div>
        </div>
      </div>
    </section>
  );
}