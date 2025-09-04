import { AgenticDevelopmentHero } from "@/components/the-logicwind-way/AgenticDevelopmentHero";
import { ExplanationSection } from "@/components/the-logicwind-way/ExplanationSection";
import { AdvantageCards } from "@/components/the-logicwind-way/AdvantageCards";
import { ComparisonSection } from "@/components/the-logicwind-way/ComparisonSection";
import { TheLogicwindWayCTA } from "@/components/the-logicwind-way/TheLogicwindWayCTA";
import { agenticDevelopmentContent } from "../../../../content/pages/the-logicwind-way/agentic-development";

export default function AgenticDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <AgenticDevelopmentHero content={agenticDevelopmentContent.hero} />
      <ExplanationSection paragraphs={agenticDevelopmentContent.explanation.paragraphs} />
      <AdvantageCards content={agenticDevelopmentContent.advantages} />
      <ComparisonSection content={agenticDevelopmentContent.comparison} />
      <TheLogicwindWayCTA {...agenticDevelopmentContent.finalCTA} />
    </div>
  );
}