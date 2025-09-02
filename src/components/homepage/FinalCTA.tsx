import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Have a project in mind?{" "}
            <span className="text-primary">Let&apos;s build what&apos;s next.</span>
          </h2>

          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Whether you&apos;re a startup with a bold vision or an established business ready to innovate, 
            we&apos;re here to turn your ideas into reality with the power of Agentic Development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-accent hover:bg-white/90">
              <Link href="/contact">
                Schedule Your Free Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              <Link href="/the-logicwind-way/agentic-development">
                Learn About Our Process
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center text-sm opacity-70">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
            <span>Free consultation • No obligation • Expert guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
}