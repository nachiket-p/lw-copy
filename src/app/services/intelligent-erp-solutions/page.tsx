import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { IsThisForYou } from "@/components/services/IsThisForYou";
import { ServiceComparison } from "@/components/services/ServiceComparison";
import { HowItWorks } from "@/components/services/HowItWorks";
import { TechnicalSpecs } from "@/components/services/TechnicalSpecs";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { TimelineExpectations } from "@/components/services/TimelineExpectations";
import { ServiceTeam } from "@/components/services/ServiceTeam";
import { ServiceCaseStudy } from "@/components/services/ServiceCaseStudy";
import { ServiceTestimonials } from "@/components/services/ServiceTestimonials";
import { RiskMitigation } from "@/components/services/RiskMitigation";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { intelligentErpSolutionsContent } from "../../../../content/pages/services/intelligent-erp-solutions";

export default function IntelligentERPSolutions() {
  return (
    <>
      <ServiceHero {...intelligentErpSolutionsContent.hero} />
      {intelligentErpSolutionsContent.stats && <ServiceStats {...intelligentErpSolutionsContent.stats} />}
      <IsThisForYou {...intelligentErpSolutionsContent.isThisForYou} />
      {intelligentErpSolutionsContent.comparison && <ServiceComparison {...intelligentErpSolutionsContent.comparison} />}
      <HowItWorks {...intelligentErpSolutionsContent.howItWorks} />
      {intelligentErpSolutionsContent.technicalSpecs && <TechnicalSpecs {...intelligentErpSolutionsContent.technicalSpecs} />}
      <WhatYouGet {...intelligentErpSolutionsContent.whatYouGet} />
      {intelligentErpSolutionsContent.timeline && <TimelineExpectations {...intelligentErpSolutionsContent.timeline} />}
      {intelligentErpSolutionsContent.team && <ServiceTeam {...intelligentErpSolutionsContent.team} />}
      <ServiceCaseStudy caseStudy={intelligentErpSolutionsContent.caseStudy} />
      {intelligentErpSolutionsContent.testimonials && <ServiceTestimonials {...intelligentErpSolutionsContent.testimonials} />}
      {intelligentErpSolutionsContent.riskMitigation && <RiskMitigation {...intelligentErpSolutionsContent.riskMitigation} />}
      <ServiceFAQ faqs={intelligentErpSolutionsContent.faq} />
      <ServiceCTA {...intelligentErpSolutionsContent.finalCTA} />
    </>
  );
}