import { ServiceHero } from "@/components/services/ServiceHero";
import { IsThisForYou } from "@/components/services/IsThisForYou";
import { HowItWorks } from "@/components/services/HowItWorks";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { ServiceCaseStudy } from "@/components/services/ServiceCaseStudy";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

const heroData = {
  title: "Agentic MVP Development",
  subtitle: "Go from idea to a market-ready product with unparalleled speed and a fixed budget.",
  ctaText: "Get My MVP Quote"
};

const isThisForYouData = {
  items: [
    "You're a founder with a game-changing idea who needs to get to market, fast.",
    "You need to prove your concept to investors with a high-quality, functional product.",
    "You're tired of vague timelines and surprise costs from traditional developers.",
    "You believe your first product should be built on a modern, scalable foundation."
  ]
};

const howItWorksData = {
  title: "Our Path to Your Product",
  steps: [
    {
      title: "Deep Dive & Strategy",
      description: "We immerse ourselves in your vision and map out the core features for maximum impact."
    },
    {
      title: "Agentic Build Sprints",
      description: "Our hyper-efficient teams build, test, and iterate on your product with incredible speed."
    },
    {
      title: "Launch & Handover",
      description: "We deploy your MVP and hand over a clean, scalable codebase that is 100% yours."
    }
  ]
};

const whatYouGetData = {
  title: "Your Complete MVP Package",
  items: [
    "A fully functional, market-ready product",
    "Complete ownership of the source code and IP",
    "A scalable architecture built for future growth",
    "A fixed-cost, on-time delivery guarantee"
  ]
};

export default function AgenticMVPDevelopmentPage() {
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