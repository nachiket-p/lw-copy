import { Card } from "@/components/ui/card";
import type { ResponsibleAIPageContent } from "../../../content/types";

interface WhyThisMattersProps {
  commitment: ResponsibleAIPageContent['commitment'];
}

export function WhyThisMatters({ commitment }: WhyThisMattersProps) {
  const topics = [
    { title: "Trust", description: commitment.statements[0] },
    { title: "Sustainability", description: commitment.statements[1] },
    { title: "Competitive Advantage", description: commitment.statements[2] }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {commitment.title}
          </h2>
          <p className="text-xl text-neutral-grey max-w-3xl mx-auto leading-relaxed">
            {commitment.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Card key={index} className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">{topic.title}</h3>
              <p className="text-neutral-grey">
                {topic.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}