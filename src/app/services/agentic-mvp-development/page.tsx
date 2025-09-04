import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { IsThisForYou } from "@/components/services/IsThisForYou";
import { PricingOverview } from "@/components/services/PricingOverview";
import { HowItWorks } from "@/components/services/HowItWorks";
import { TechnicalSpecs } from "@/components/services/TechnicalSpecs";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { TimelineExpectations } from "@/components/services/TimelineExpectations";
import { ServiceTeam } from "@/components/services/ServiceTeam";
import { ServiceCaseStudy } from "@/components/services/ServiceCaseStudy";
import { ServiceTestimonials } from "@/components/services/ServiceTestimonials";
import { RiskMitigation } from "@/components/services/RiskMitigation";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { agenticMvpDevelopmentContent } from "../../../../content/pages/services/agentic-mvp-development";

export default function AgenticMVPDevelopmentPage() {
  return (
    <>
      <ServiceHero {...agenticMvpDevelopmentContent.hero} />
      {agenticMvpDevelopmentContent.stats && <ServiceStats {...agenticMvpDevelopmentContent.stats} />}
      <IsThisForYou {...agenticMvpDevelopmentContent.isThisForYou} />
      {agenticMvpDevelopmentContent.pricing && <PricingOverview {...agenticMvpDevelopmentContent.pricing} />}
      <HowItWorks {...agenticMvpDevelopmentContent.howItWorks} />
      {agenticMvpDevelopmentContent.technicalSpecs && <TechnicalSpecs {...agenticMvpDevelopmentContent.technicalSpecs} />}
      <WhatYouGet {...agenticMvpDevelopmentContent.whatYouGet} />
      {agenticMvpDevelopmentContent.timeline && <TimelineExpectations {...agenticMvpDevelopmentContent.timeline} />}
      {agenticMvpDevelopmentContent.team && <ServiceTeam {...agenticMvpDevelopmentContent.team} />}
      <ServiceCaseStudy caseStudy={agenticMvpDevelopmentContent.caseStudy} />
      {agenticMvpDevelopmentContent.testimonials && <ServiceTestimonials {...agenticMvpDevelopmentContent.testimonials} />}
      {agenticMvpDevelopmentContent.riskMitigation && <RiskMitigation {...agenticMvpDevelopmentContent.riskMitigation} />}
      <ServiceCTA {...agenticMvpDevelopmentContent.finalCTA} />
    </>
  );
}