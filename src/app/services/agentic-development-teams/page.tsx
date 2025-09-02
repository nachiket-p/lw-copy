import { ServiceHero } from "@/components/services/ServiceHero";
import { IsThisForYou } from "@/components/services/IsThisForYou";
import { HowItWorks } from "@/components/services/HowItWorks";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { ServiceCaseStudy } from "@/components/services/ServiceCaseStudy";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

const heroData = {
  title: "Agentic Development Teams",
  subtitle: "Supercharge your project with a dedicated, hyper-efficient team that operates on the principles of the future.",
  ctaText: "Assemble My Pioneer Team"
};

const isThisForYouData = {
  items: [
    "You have an ambitious project or feature backlog and need to increase your development velocity.",
    "You're looking for more than just \"coders\"; you need a strategic partner who contributes to your product vision.",
    "You value transparency and want a team that integrates seamlessly with your own.",
    "You need to scale your development capabilities without the overhead of traditional hiring."
  ]
};

const howItWorksData = {
  title: "Our Path to Seamless Integration",
  steps: [
    {
      title: "Team Integration & Alignment",
      description: "We embed our team into your project, aligning on goals, workflows, and communication channels."
    },
    {
      title: "Agentic Sprints",
      description: "Our team, augmented by AI agents, tackles your backlog, delivering high-quality, tested features with incredible speed."
    },
    {
      title: "Continuous Reporting & Collaboration",
      description: "You get full transparency into our progress with regular demos and direct communication."
    }
  ]
};

const whatYouGetData = {
  title: "Your Unfair Advantage",
  items: [
    "A dedicated team of elite developers and strategists",
    "Dramatically increased development velocity",
    "Consistent high-quality code delivery",
    "A flexible partnership that scales to your needs"
  ]
};

export default function AgenticDevelopmentTeams() {
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