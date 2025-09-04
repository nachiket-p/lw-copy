import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { IsThisForYou } from "@/components/services/IsThisForYou";
import { ServiceTeam } from "@/components/services/ServiceTeam";
import { HowItWorks } from "@/components/services/HowItWorks";
import { TechnicalSpecs } from "@/components/services/TechnicalSpecs";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { TimelineExpectations } from "@/components/services/TimelineExpectations";
import { ServiceTestimonials } from "@/components/services/ServiceTestimonials";
import { RiskMitigation } from "@/components/services/RiskMitigation";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { agenticDevelopmentTeamsContent } from "../../../../content/pages/services/agentic-development-teams";

export default function AgenticDevelopmentTeams() {
  return (
    <>
      <ServiceHero {...agenticDevelopmentTeamsContent.hero} />
      {agenticDevelopmentTeamsContent.stats && <ServiceStats {...agenticDevelopmentTeamsContent.stats} />}
      <IsThisForYou {...agenticDevelopmentTeamsContent.isThisForYou} />
      {agenticDevelopmentTeamsContent.team && <ServiceTeam {...agenticDevelopmentTeamsContent.team} />}
      <HowItWorks {...agenticDevelopmentTeamsContent.howItWorks} />
      {agenticDevelopmentTeamsContent.technicalSpecs && <TechnicalSpecs {...agenticDevelopmentTeamsContent.technicalSpecs} />}
      <WhatYouGet {...agenticDevelopmentTeamsContent.whatYouGet} />
      {agenticDevelopmentTeamsContent.timeline && <TimelineExpectations {...agenticDevelopmentTeamsContent.timeline} />}
      {agenticDevelopmentTeamsContent.testimonials && <ServiceTestimonials {...agenticDevelopmentTeamsContent.testimonials} />}
      {agenticDevelopmentTeamsContent.riskMitigation && <RiskMitigation {...agenticDevelopmentTeamsContent.riskMitigation} />}
      <ServiceFAQ faqs={agenticDevelopmentTeamsContent.faq} />
      <ServiceCTA {...agenticDevelopmentTeamsContent.finalCTA} />
    </>
  );
}