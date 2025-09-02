import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Heart, Eye, Users } from "lucide-react";

export function InnovationWithIntegrity() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Principles, Your Peace of Mind
            </h2>
          </div>

          <Card className="bg-accent text-accent-foreground p-12 rounded-3xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              <blockquote className="text-2xl md:text-3xl font-semibold text-center mb-8 leading-relaxed italic">
                &ldquo;We believe true innovation demands responsibility. Our agentic frameworks are built 
                on a foundation of transparency, ethics, and human-centric design.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Transparency</h4>
                  <p className="text-sm opacity-90">No black boxes. You always know how our systems work.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Ethics</h4>
                  <p className="text-sm opacity-90">Every decision guided by strong moral principles.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Human-Centric</h4>
                  <p className="text-sm opacity-90">Technology that empowers people, not replaces them.</p>
                </div>
              </div>

              <div className="text-center">
                <Button asChild variant="secondary" size="lg" className="bg-white text-accent hover:bg-white/90">
                  <Link href="/the-logicwind-way/responsible-ai">
                    Explore Our Principles
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}