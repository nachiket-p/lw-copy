import type { BrandContent, Metric } from '../types';

// Shared brand metrics used across multiple pages
export const brandMetrics: Metric[] = [
  { value: "40%", label: "Faster Development" },
  { value: "100%", label: "Fixed Budget" },
  { value: "∞", label: "Transparent Process" }
];

// Core brand content
export const brandContent: BrandContent = {
  name: "Logicwind",
  tagline: "The Agentic Advantage. Responsibly Delivered.",
  positioning: "The Principled Pioneer",
  description: "The Principled Pioneer in Agentic Development. We build future-proof software for visionary startups and established businesses using AI with enterprise-grade security standards.",
  metrics: brandMetrics,
  coreValues: [
    {
      name: "Code Security",
      description: "Every AI-generated line undergoes rigorous review and testing.",
      icon: "Shield"
    },
    {
      name: "Enterprise Standards",
      description: "Only paid, enterprise-grade AI tools for production code.",
      icon: "Lock"
    },
    {
      name: "Full Accountability",
      description: "Complete responsibility for all generated code quality.",
      icon: "CheckCircle"
    }
  ]
};

// Brand messaging variations
export const brandMessages = {
  tagline: "The Agentic Advantage. Responsibly Delivered.",
  shortDescription: "We're a new breed of development partner, using Agentic teams and AI to build future-proof software for visionary startups and established businesses.",
  missionStatement: "Building the future with Agentic Development and Secure AI Standards.",
  brandPromise: "Whether you're a startup with a bold vision or an established business ready to innovate, we're here to turn your ideas into reality with the power of Agentic Development.",
  coreQuote: "We believe true innovation demands accountability. Our agentic frameworks are built on a foundation of security, code quality, and production-ready standards."
};

// Service definitions (used in navigation and overviews)
export const coreServices = [
  {
    title: "The AI Advantage Sprint",
    description: "Pinpoint the key AI features that will make your product a market leader.",
    icon: "Zap",
    href: "/services/ai-advantage-sprint"
  },
  {
    title: "Agentic MVP Development",
    description: "Go from a bold idea to a robust, market-ready product in record time.",
    icon: "Rocket",
    href: "/services/agentic-mvp-development"
  },
  {
    title: "Intelligent ERP Solutions",
    description: "Streamline your operations with a powerful, open-source ERP system built for sustainable growth.",
    icon: "Settings",
    href: "/services/intelligent-erp-solutions"
  },
  {
    title: "Agentic Development Teams",
    description: "Supercharge your project with a dedicated, hyper-efficient team that integrates seamlessly with yours.",
    icon: "Users",
    href: "/services/agentic-development-teams"
  }
];

// Common CTAs
export const commonCTAs = {
  primary: { text: "Build Your Product", href: "/contact" },
  secondary: { text: "Optimize Your Business", href: "/services/intelligent-erp-solutions" },
  consultation: { text: "Schedule Your Free Discovery Call", href: "/contact" },
  learnMore: { text: "Learn About Our Process", href: "/the-logicwind-way/agentic-development" },
  principles: { text: "Explore Our Standards", href: "/the-logicwind-way/responsible-ai" },
  successStories: { text: "View All Success Stories", href: "/success-stories" }
};