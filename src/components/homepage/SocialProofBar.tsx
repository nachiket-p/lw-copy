import type { SocialProofContent } from "@/content/types";

interface SocialProofBarProps {
  content: SocialProofContent;
}

export function SocialProofBar({ content }: SocialProofBarProps) {

  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">
            {content.heading}
          </p>
          
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {content.companies.map((company, index) => (
              <div key={index} className="text-lg font-semibold text-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}