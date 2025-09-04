import * as Icons from "lucide-react";
import type { TheLogicwindWayHeroContent } from "../../../content/types";

interface AgenticDevelopmentHeroProps {
  content: TheLogicwindWayHeroContent;
}

export function AgenticDevelopmentHero({ content }: AgenticDevelopmentHeroProps) {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-xl text-neutral-grey max-w-4xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {content.features.map((feature, index) => {
                const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4F620' }}>
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black">{feature.title}</h3>
                      <p className="text-neutral-grey">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="relative">
              <img 
                src={content.imageUrl || "https://picsum.photos/600/400?random=1"}
                alt="Modern development team collaboration" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}