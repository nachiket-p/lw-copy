import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface ServiceCTAProps {
  content: string;
}

export function ServiceCTA({ content }: ServiceCTAProps) {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Let&apos;s discuss your project and create a custom proposal that fits your needs and timeline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="default" className="text-lg px-8 py-6">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/the-logicwind-way/agentic-development">
                Learn More About Our Process
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-70">
            Free consultation • Custom proposal • Fixed pricing
          </div>
        </div>
      </div>
    </section>
  );
}