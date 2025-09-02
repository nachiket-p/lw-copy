import { ServiceHero } from "@/components/services/ServiceHero";
import { IsThisForYou } from "@/components/services/IsThisForYou";
import { HowItWorks } from "@/components/services/HowItWorks";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { ServiceCaseStudy } from "@/components/services/ServiceCaseStudy";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

const heroData = {
  title: "The AI Advantage Sprint",
  subtitle: "Uncover the critical AI features that will secure your product's future in a competitive market.",
  ctaText: "Discover Your AI Edge"
};

const isThisForYouData = {
  items: [
    "You have an existing product but see competitors leveraging AI.",
    "You know you need to innovate with AI but don't know where to start.",
    "You want a clear, data-driven roadmap before committing to a large development project.",
    "You need to show your board or investors a concrete plan for future growth."
  ]
};

const howItWorksData = {
  title: "Your Path to a Competitive Edge",
  steps: [
    {
      title: "Product & Data Deep Dive",
      description: "We analyze your product, architecture, and available data to understand the landscape."
    },
    {
      title: "Opportunity Mapping",
      description: "We workshop with your team to identify the highest-impact AI opportunities."
    },
    {
      title: "Feasibility & ROI Analysis",
      description: "We validate the technical feasibility and project the return on investment for top ideas."
    },
    {
      title: "Strategic AI Roadmap",
      description: "We deliver a detailed roadmap outlining features, timelines, and a clear path forward."
    }
  ]
};

const whatYouGetData = {
  title: "Your Strategic AI Blueprint",
  items: [
    "A prioritized list of high-impact AI features",
    "A technical feasibility report",
    "A comprehensive ROI projection",
    "A phased implementation roadmap"
  ]
};

export default function AIAdvantageSprint() {
  return (
    <>
      <ServiceHero {...heroData} />
      <IsThisForYou {...isThisForYouData} />
      <HowItWorks {...howItWorksData} />
      <WhatYouGet {...whatYouGetData} />
      <ServiceCaseStudy />
      <ServiceFAQ />
      <ServiceCTA />
    </>
  );
}