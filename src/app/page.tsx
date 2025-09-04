import { HeroSection } from "@/components/homepage/HeroSection";
import { SocialProofBar } from "@/components/homepage/SocialProofBar";
import { ProblemSolutionSection } from "@/components/homepage/ProblemSolutionSection";
import { ServicesOverview } from "@/components/homepage/ServicesOverview";
import { InnovationWithIntegrity } from "@/components/homepage/InnovationWithIntegrity";
import { SuccessStorySpotlight } from "@/components/homepage/SuccessStorySpotlight";
import { FinalCTA } from "@/components/homepage/FinalCTA";
import { homepageContent } from "../../content/pages/homepage";

export default function HomePage() {
  return (
    <>
      <HeroSection content={homepageContent.hero} />
      <SocialProofBar content={homepageContent.socialProof} />
      <ProblemSolutionSection content={homepageContent.problemSolution} />
      <ServicesOverview content={homepageContent.servicesOverview} />
      <InnovationWithIntegrity content={homepageContent.innovationIntegrity} />
      <SuccessStorySpotlight content={homepageContent.successStory} />
      <FinalCTA content={homepageContent.finalCTA} />
    </>
  );
}