import { ServiceHero } from "@/components/services/ServiceHero";
import { IsThisForYou } from "@/components/services/IsThisForYou";
import { HowItWorks } from "@/components/services/HowItWorks";
import { WhatYouGet } from "@/components/services/WhatYouGet";
import { ServiceCaseStudy } from "@/components/services/ServiceCaseStudy";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

const heroData = {
  title: "Intelligent ERP Solutions",
  subtitle: "Streamline your entire operation with a powerful, open-source ERP system built for sustainable, intelligent growth.",
  ctaText: "Optimize My Operations"
};

const isThisForYouData = {
  items: [
    "You're buried in spreadsheets and manual processes that are prone to error.",
    "You're paying expensive, per-user license fees for software that doesn't fit your needs.",
    "Your different departments can't share information seamlessly.",
    "You want a single source of truth to make smarter, data-driven business decisions."
  ]
};

const howItWorksData = {
  title: "Our Path to Operational Excellence",
  steps: [
    {
      title: "Business Process Analysis",
      description: "We map your current workflows to identify bottlenecks and opportunities for optimization."
    },
    {
      title: "ERPNext Implementation & Customization",
      description: "We implement and configure the open-source ERPNext platform, tailored to your exact business needs."
    },
    {
      title: "Data Migration & Training",
      description: "We securely migrate your existing data and train your team to maximize the new system's potential."
    }
  ]
};

const whatYouGetData = {
  title: "Your Foundation for Growth",
  items: [
    "A fully configured ERPNext system",
    "Successful data migration from your existing systems",
    "Comprehensive team training and documentation",
    "A scalable platform that grows with you, free from per-user license fees"
  ]
};

export default function IntelligentERPSolutions() {
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