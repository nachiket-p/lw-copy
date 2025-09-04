interface ResponsibleAIHeroProps {
  title: string;
  subtitle: string;
}

export function ResponsibleAIHero({ title, subtitle }: ResponsibleAIHeroProps) {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-background via-muted to-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-8 leading-relaxed">
            &ldquo;We believe true innovation demands responsibility. Our agentic frameworks are built 
            on a foundation of transparency, ethics, and human-centric design.&rdquo;
          </blockquote>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </div>
    </section>
  );
}