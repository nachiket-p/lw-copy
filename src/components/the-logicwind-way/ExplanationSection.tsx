interface ExplanationSectionProps {
  paragraphs: string[];
}

export function ExplanationSection({ paragraphs }: ExplanationSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-xl text-foreground leading-relaxed mb-8">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}