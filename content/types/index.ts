// Main content type definitions for the Logicwind website

// Common types used across multiple components
export interface CTALink {
  text: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Company {
  name: string;
  logo?: string;
}

// Homepage component types
export interface HeroContent {
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  primaryCTA: CTALink;
  secondaryCTA: CTALink;
  metrics: Metric[];
}

export interface SocialProofContent {
  heading: string;
  companies: string[];
}

export interface ProblemPoint {
  icon: string; // Lucide icon name
  text: string;
}

export interface ProblemSolutionContent {
  headline: string;
  headlineAccent: string;
  problem: {
    title: string;
    description: string;
    points: ProblemPoint[];
  };
  solution: {
    title: string;
    description: string;
    benefits: ProblemPoint[];
  };
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string; // Lucide icon name
  href: string;
}

export interface ServicesOverviewContent {
  headline: string;
  subheadline: string;
  services: ServiceCard[];
}

export interface InnovationIntegrityContent {
  headline: string;
  quote: string;
  principles: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  cta: CTALink;
}

export interface SuccessStoryContent {
  headline: string;
  subheadline: string;
  caseStudy: {
    title: string;
    description: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
    impactMetrics: Array<{
      label: string;
      value: string;
    }>;
  };
  cta: CTALink;
}

export interface FinalCTAContent {
  headline: string;
  headlineAccent: string;
  description: string;
  primaryCTA: CTALink;
  secondaryCTA: CTALink;
  benefits: string;
}

// Complete homepage content structure
export interface HomepageContent {
  hero: HeroContent;
  socialProof: SocialProofContent;
  problemSolution: ProblemSolutionContent;
  servicesOverview: ServicesOverviewContent;
  innovationIntegrity: InnovationIntegrityContent;
  successStory: SuccessStoryContent;
  finalCTA: FinalCTAContent;
}

// Service page types
export interface ServiceHeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface IsThisForYouContent {
  items: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface HowItWorksContent {
  title: string;
  steps: ProcessStep[];
}

export interface WhatYouGetContent {
  title: string;
  items: string[];
}

// Enhanced service content interfaces
export interface ServiceStatsContent {
  title: string;
  metrics: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  layout: "grid" | "timeline" | "dashboard";
}

export interface TechnicalSpecsContent {
  title: string;
  sections: Array<{
    category: string;
    items: string[];
  }>;
  format: "tabs" | "accordion" | "grid";
}

export interface ServiceTestimonialsContent {
  title: string;
  testimonials: Array<{
    quote: string;
    author: string;
    company: string;
    role: string;
    avatar?: string;
  }>;
  display: "single" | "accordion" | "grid" | "carousel";
}

export interface PricingOverviewContent {
  title: string;
  subtitle: string;
  packages?: Array<{
    name: string;
    price: string;
    features: string[];
    highlighted?: boolean;
  }>;
  fixedPrice?: {
    starting: string;
    includes: string[];
    note: string;
  };
  layout: "packages" | "simple" | "comparison";
}

export interface RiskMitigationContent {
  title: string;
  guarantees: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface ServiceComparisonContent {
  title: string;
  subtitle: string;
  comparison: {
    us: {
      title: string;
      points: string[];
    };
    them: {
      title: string;
      points: string[];
    };
  };
  layout: "side-by-side" | "table";
}

export interface TimelineExpectationsContent {
  title: string;
  phases: Array<{
    phase: string;
    duration: string;
    deliverables: string[];
  }>;
  totalDuration: string;
  display: "linear" | "phases" | "gantt";
}

export interface ServiceTeamContent {
  title: string;
  subtitle: string;
  members: Array<{
    name: string;
    role: string;
    expertise: string[];
    bio: string;
    avatar?: string;
  }>;
  structure: "individuals" | "collective" | "expertise-grid";
}

export interface ServicePageContent {
  hero: ServiceHeroContent;
  stats?: ServiceStatsContent;
  isThisForYou: IsThisForYouContent;
  pricing?: PricingOverviewContent;
  howItWorks: HowItWorksContent;
  technicalSpecs?: TechnicalSpecsContent;
  whatYouGet: WhatYouGetContent;
  timeline?: TimelineExpectationsContent;
  comparison?: ServiceComparisonContent;
  team?: ServiceTeamContent;
  caseStudy?: {
    title: string;
    description: string;
  };
  testimonials?: ServiceTestimonialsContent;
  riskMitigation?: RiskMitigationContent;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  finalCTA?: {
    title: string;
    description: string;
    ctaText: string;
  };
}

// Common content types
export interface BrandContent {
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  metrics: Metric[];
  coreValues: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
}

export interface NavigationContent {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  mainNav: Array<{
    name: string;
    href: string;
    dropdown?: Array<{
      title: string;
      href: string;
      description: string;
    }>;
  }>;
  headerCTA: CTALink;
  footerSections: Array<{
    title: string;
    links: Array<{
      name: string;
      href: string;
    }>;
  }>;
  socialLinks: Array<{
    name: string;
    href: string;
    icon: string;
  }>;
  footer: {
    copyright: string;
    tagline: string;
    builtWith: string;
  };
}

// The Logicwind Way page types
export interface TheLogicwindWayHeroContent {
  title: string;
  subtitle: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  imageUrl?: string;
}

export interface ComparisonSection {
  title: string;
  subtitle: string;
  traditional: {
    title: string;
    points: string[];
  };
  agentic: {
    title: string;
    points: string[];
  };
}

export interface AdvantageCardsContent {
  title: string;
  subtitle: string;
  cards: Array<{
    icon: string;
    title: string;
    points: string[];
  }>;
}

export interface AgenticDevelopmentPageContent {
  hero: TheLogicwindWayHeroContent;
  explanation: {
    paragraphs: string[];
  };
  advantages: AdvantageCardsContent;
  comparison: ComparisonSection;
  finalCTA: {
    title: string;
    subtitle: string;
    primaryCTA: CTALink;
    secondaryCTA: CTALink;
  };
}

export interface ResponsibleAIPageContent {
  hero: {
    title: string;
    subtitle: string;
    badge?: string;
  };
  principles: Array<{
    icon: string;
    title: string;
    description: string;
    examples: string[];
  }>;
  commitment: {
    title: string;
    subtitle: string;
    statements: string[];
  };
  finalCTA: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
}

export interface ContactPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  contactInfo: {
    location: {
      city: string;
      country: string;
      note: string;
    };
    email: string;
    responseTime: string;
  };
  scheduleCall: {
    title: string;
    description: string;
    ctaText: string;
  };
  nextSteps: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
}