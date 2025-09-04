import { ResponsibleAIHero } from "@/components/the-logicwind-way/ResponsibleAIHero";
import { PrinciplesOverview } from "@/components/the-logicwind-way/PrinciplesOverview";
import { DetailedPrinciples } from "@/components/the-logicwind-way/DetailedPrinciples";
import { WhyThisMatters } from "@/components/the-logicwind-way/WhyThisMatters";
import { ResponsibleAICTA } from "@/components/the-logicwind-way/ResponsibleAICTA";
import { responsibleAIContent } from "../../../../content/pages/the-logicwind-way/responsible-ai";

export default function ResponsibleAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsibleAIHero {...responsibleAIContent.hero} />
      <PrinciplesOverview principles={responsibleAIContent.principles} />
      <DetailedPrinciples principles={responsibleAIContent.principles} />
      <WhyThisMatters commitment={responsibleAIContent.commitment} />
      <ResponsibleAICTA finalCTA={responsibleAIContent.finalCTA} />
    </div>
  );
}