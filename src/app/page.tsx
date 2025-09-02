import { HeroSection } from "@/components/homepage/HeroSection";
import { SocialProofBar } from "@/components/homepage/SocialProofBar";
import { ProblemSolutionSection } from "@/components/homepage/ProblemSolutionSection";
import { ServicesOverview } from "@/components/homepage/ServicesOverview";
import { InnovationWithIntegrity } from "@/components/homepage/InnovationWithIntegrity";
import { SuccessStorySpotlight } from "@/components/homepage/SuccessStorySpotlight";
import { FinalCTA } from "@/components/homepage/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ProblemSolutionSection />
      <ServicesOverview />
      <InnovationWithIntegrity />
      <SuccessStorySpotlight />
      <FinalCTA />
    </>
  );
}