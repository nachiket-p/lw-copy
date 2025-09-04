import type { HomepageContent } from '../types';
import { brandMetrics, brandMessages, commonCTAs, coreServices } from '../common/brand';

export const homepageContent: HomepageContent = {
  hero: {
    badge: "The Principled Pioneer",
    headline: "The Agentic Advantage.",
    headlineAccent: "Responsibly Delivered.",
    subheadline: brandMessages.shortDescription,
    primaryCTA: commonCTAs.primary,
    secondaryCTA: commonCTAs.secondary,
    metrics: brandMetrics
  },

  socialProof: {
    heading: "Trusted by innovative companies",
    companies: ["Cappital Co", "InnovateTech", "FutureScale", "AgileGrow"]
  },

  problemSolution: {
    headline: "The Old Way is Too Slow. The Future is",
    headlineAccent: "Agentic",
    problem: {
      title: "The Problem",
      description: "Traditional development is plagued by slow timelines, budget uncertainty, and a lack of transparency. It wasn't built for the speed of today's market.",
      points: [
        { icon: "Clock", text: "Slow, unpredictable timelines" },
        { icon: "DollarSign", text: "Budget uncertainty and surprise costs" },
        { icon: "Eye", text: "Lack of transparency in the process" }
      ]
    },
    solution: {
      title: "The Solution",
      description: "Our Agentic approach changes the equation. We deliver with unparalleled speed, fixed-cost certainty, and intelligent insights, giving you a definitive competitive edge.",
      benefits: [
        { icon: "Zap", text: "Unparalleled development speed" },
        { icon: "Target", text: "Fixed-cost certainty and clear budgets" },
        { icon: "TrendingUp", text: "Intelligent insights and full transparency" }
      ]
    }
  },

  servicesOverview: {
    headline: "Solutions to Build, Grow, and Scale",
    subheadline: "Choose the perfect solution for your stage of growth and ambition",
    services: coreServices
  },

  innovationIntegrity: {
    headline: "Our Standards, Your Assurance",
    quote: brandMessages.coreQuote,
    principles: [
      {
        title: "Code Security",
        description: "Every AI-generated line undergoes rigorous review and testing.",
        icon: "Shield"
      },
      {
        title: "Enterprise Standards",
        description: "Only paid, enterprise-grade AI tools for production code.",
        icon: "Lock"
      },
      {
        title: "Full Accountability",
        description: "Complete responsibility for all generated code quality.",
        icon: "CheckCircle"
      }
    ],
    cta: commonCTAs.principles
  },

  successStory: {
    headline: "Results, Delivered.",
    subheadline: "Real outcomes for real businesses",
    caseStudy: {
      title: "Cappital Co: Accelerating Market Leadership",
      description: "For Cappital Co, our Agentic Team accelerated their feature deployment by 40%, allowing them to capture a new market segment ahead of the competition.",
      metrics: [
        { value: "40%", label: "Faster Deployment" },
        { value: "6 mo", label: "Time to Market" }
      ],
      impactMetrics: [
        { label: "Development Speed", value: "+40%" },
        { label: "Market Advantage", value: "6 months" },
        { label: "Budget Certainty", value: "100%" },
        { label: "Team Satisfaction", value: "Excellent" }
      ]
    },
    cta: commonCTAs.successStories
  },

  finalCTA: {
    headline: "Have a project in mind?",
    headlineAccent: "Let's build what's next.",
    description: brandMessages.brandPromise,
    primaryCTA: commonCTAs.consultation,
    secondaryCTA: commonCTAs.learnMore,
    benefits: "Free consultation • No obligation • Expert guidance"
  }
};