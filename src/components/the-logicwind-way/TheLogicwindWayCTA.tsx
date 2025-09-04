import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CTALink } from "../../../content/types";

interface TheLogicwindWayCTAProps {
  title: string;
  subtitle: string;
  primaryCTA: CTALink;
  secondaryCTA: CTALink;
}

export function TheLogicwindWayCTA({ title, subtitle, primaryCTA, secondaryCTA }: TheLogicwindWayCTAProps) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#0B3B4D' }}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-grey mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            className="px-8 py-6 text-lg font-semibold rounded-full uppercase tracking-wide"
            style={{ backgroundColor: '#D4F620', color: '#000000' }}
          >
            <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-black"
          >
            <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}