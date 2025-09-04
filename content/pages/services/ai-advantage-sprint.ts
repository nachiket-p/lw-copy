import type { ServicePageContent } from '../../types';

export const aiAdvantageSprintContent: ServicePageContent = {
  hero: {
    title: "The AI Advantage Sprint",
    subtitle: "Uncover the critical AI features that will secure your product's future in a competitive market.",
    ctaText: "Discover Your AI Edge"
  },

  stats: {
    title: "Sprint Success Metrics",
    metrics: [
      { value: "2-3", label: "Weeks to Insights", description: "From kickoff to strategic roadmap" },
      { value: "85%", label: "Implementation Rate", description: "Of our recommendations get built" },
      { value: "3-5", label: "High-Impact Features", description: "Identified per sprint on average" },
      { value: "60%", label: "Faster Feature Planning", description: "Compared to internal analysis" }
    ],
    layout: "timeline"
  },

  isThisForYou: {
    items: [
      "You have an existing product but see competitors leveraging AI.",
      "You know you need to innovate with AI but don't know where to start.",
      "You want a clear, data-driven roadmap before committing to a large development project.",
      "You need to show your board or investors a concrete plan for future growth."
    ]
  },

  pricing: {
    title: "Sprint Investment",
    subtitle: "Transparent, fixed-price engagement with no hidden costs",
    fixedPrice: {
      starting: "$15,000",
      includes: [
        "Complete product and data analysis",
        "Strategic workshop sessions",
        "Feasibility and ROI assessment", 
        "Detailed implementation roadmap",
        "Executive presentation materials"
      ],
      note: "One-time investment. No ongoing commitments required."
    },
    layout: "simple"
  },

  howItWorks: {
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
  },

  whatYouGet: {
    title: "Your Strategic AI Blueprint",
    items: [
      "A prioritized list of high-impact AI features",
      "A technical feasibility report",
      "A comprehensive ROI projection",
      "A phased implementation roadmap"
    ]
  },

  timeline: {
    title: "Sprint Timeline",
    phases: [
      {
        phase: "Discovery & Analysis",
        duration: "Week 1",
        deliverables: ["Product audit", "Data assessment", "Stakeholder interviews"]
      },
      {
        phase: "Opportunity Workshop",
        duration: "Week 2",
        deliverables: ["Feature ideation", "Feasibility analysis", "ROI calculations"]
      },
      {
        phase: "Strategic Roadmap",
        duration: "Week 3",
        deliverables: ["Implementation plan", "Timeline", "Final presentation"]
      }
    ],
    totalDuration: "2-3 weeks",
    display: "linear"
  },

  comparison: {
    title: "Sprint vs. Internal Analysis",
    subtitle: "Why our focused approach delivers better results faster",
    comparison: {
      us: {
        title: "AI Advantage Sprint",
        points: [
          "Proven framework from 50+ AI implementations",
          "External perspective spots blind spots",
          "Dedicated team focused solely on your project",
          "Access to latest AI trends and technologies",
          "Actionable roadmap ready for development"
        ]
      },
      them: {
        title: "Internal Analysis",
        points: [
          "Limited by current team knowledge",
          "Internal biases affect decision-making",
          "Competing priorities dilute focus",
          "May miss emerging AI opportunities",
          "Often results in vague recommendations"
        ]
      }
    },
    layout: "side-by-side"
  },

  caseStudy: {
    title: "TechFlow's Competitive Transformation",
    description: "Through our AI Advantage Sprint, TechFlow identified three game-changing AI features that increased their user engagement by 60% and reduced operational costs by 35%."
  },

  testimonials: {
    title: "Sprint Success Stories",
    testimonials: [
      {
        quote: "The AI Advantage Sprint gave us the clarity we needed to make confident decisions about our AI strategy. The roadmap was so detailed, we started implementation immediately.",
        author: "Sarah Chen",
        company: "TechFlow",
        role: "CTO"
      }
    ],
    display: "single"
  },


  finalCTA: {
    title: "Ready to Discover Your AI Advantage?",
    description: "Get a clear, actionable roadmap to AI success with no long-term commitment. Let's identify the features that will set you apart.",
    ctaText: "Start Your Sprint"
  }
};