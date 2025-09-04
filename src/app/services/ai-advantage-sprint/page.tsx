import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { IsThisForYou } from "@/components/services/IsThisForYou";
import { PricingOverview } from "@/components/services/PricingOverview";
import { HowItWorks } from "@/components/services/HowItWorks";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { TimelineExpectations } from "@/components/services/TimelineExpectations";
import { ServiceComparison } from "@/components/services/ServiceComparison";
import { ServiceTestimonials } from "@/components/services/ServiceTestimonials";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { aiAdvantageSprintContent } from "../../../../content/pages/services/ai-advantage-sprint";

export default function AIAdvantageSprint() {
  return (
    <>
      <ServiceHero {...aiAdvantageSprintContent.hero} />
      {aiAdvantageSprintContent.stats && <ServiceStats {...aiAdvantageSprintContent.stats} />}
      <IsThisForYou {...aiAdvantageSprintContent.isThisForYou} />
      {aiAdvantageSprintContent.pricing && <PricingOverview {...aiAdvantageSprintContent.pricing} />}
      <HowItWorks {...aiAdvantageSprintContent.howItWorks} />
      <WhatYouGet {...aiAdvantageSprintContent.whatYouGet} />
      {aiAdvantageSprintContent.timeline && <TimelineExpectations {...aiAdvantageSprintContent.timeline} />}
      {aiAdvantageSprintContent.comparison && <ServiceComparison {...aiAdvantageSprintContent.comparison} />}
      {aiAdvantageSprintContent.testimonials && <ServiceTestimonials {...aiAdvantageSprintContent.testimonials} />}
      <ServiceCTA {...aiAdvantageSprintContent.finalCTA} />
    </>
  );
}