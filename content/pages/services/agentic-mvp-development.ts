import type { ServicePageContent } from '../../types';

export const agenticMvpDevelopmentContent: ServicePageContent = {
  hero: {
    title: "Agentic MVP Development",
    subtitle: "Go from idea to a market-ready product with unparalleled speed and a fixed budget.",
    ctaText: "Get My MVP Quote"
  },

  stats: {
    title: "MVP Success Metrics",
    metrics: [
      { value: "6-12", label: "Weeks to Launch", description: "From concept to market-ready product" },
      { value: "40%", label: "Faster Delivery", description: "Compared to traditional development" },
      { value: "100%", label: "Code Ownership", description: "Complete IP rights and source code" },
      { value: "95%", label: "On-Time Delivery", description: "Fixed deadlines, guaranteed results" }
    ],
    layout: "dashboard"
  },

  isThisForYou: {
    items: [
      "You're a founder with a game-changing idea who needs to get to market, fast.",
      "You need to prove your concept to investors with a high-quality, functional product.",
      "You're tired of vague timelines and surprise costs from traditional developers.",
      "You believe your first product should be built on a modern, scalable foundation."
    ]
  },

  pricing: {
    title: "MVP Investment Packages",
    subtitle: "Choose the package that matches your vision and budget",
    packages: [
      {
        name: "Essential MVP",
        price: "Starting at $45,000",
        features: [
          "Core feature development",
          "User authentication",
          "Basic dashboard",
          "Mobile responsive design",
          "6-8 week delivery"
        ],
        highlighted: false
      },
      {
        name: "Complete MVP",
        price: "Starting at $75,000",
        features: [
          "Everything in Essential",
          "Advanced user management",
          "Payment integration",
          "Admin panel",
          "API development",
          "8-10 week delivery"
        ],
        highlighted: true
      },
      {
        name: "Enterprise MVP",
        price: "Starting at $120,000",
        features: [
          "Everything in Complete",
          "Multi-tenant architecture",
          "Advanced analytics",
          "Third-party integrations",
          "Custom AI features",
          "10-12 week delivery"
        ],
        highlighted: false
      }
    ],
    layout: "packages"
  },

  howItWorks: {
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
  },

  technicalSpecs: {
    title: "Technology Stack & Architecture",
    sections: [
      {
        category: "Frontend Technologies",
        items: ["Next.js 15 with React 19", "TypeScript for type safety", "Tailwind CSS for styling", "Responsive design patterns"]
      },
      {
        category: "Backend & Database",
        items: ["Node.js with Express/Fastify", "PostgreSQL or MongoDB", "Prisma ORM", "RESTful APIs with OpenAPI docs"]
      },
      {
        category: "Infrastructure & DevOps",
        items: ["Vercel/AWS/Google Cloud deployment", "CI/CD pipelines", "Environment management", "Monitoring and analytics"]
      },
      {
        category: "Security & Standards",
        items: ["Authentication (Auth0/Clerk)", "Data encryption", "GDPR compliance", "Security best practices"]
      }
    ],
    format: "tabs"
  },

  whatYouGet: {
    title: "Your Complete MVP Package",
    items: [
      "A fully functional, market-ready product",
      "Complete ownership of the source code and IP",
      "A scalable architecture built for future growth",
      "A fixed-cost, on-time delivery guarantee"
    ]
  },

  timeline: {
    title: "Development Phases",
    phases: [
      {
        phase: "Discovery & Planning",
        duration: "Week 1-2",
        deliverables: ["Requirements analysis", "Technical architecture", "UI/UX wireframes", "Project roadmap"]
      },
      {
        phase: "Core Development",
        duration: "Week 3-8",
        deliverables: ["Core features built", "User authentication", "Database setup", "API development"]
      },
      {
        phase: "Integration & Testing",
        duration: "Week 9-10",
        deliverables: ["Third-party integrations", "Comprehensive testing", "Performance optimization", "Security audit"]
      },
      {
        phase: "Launch & Handover",
        duration: "Week 11-12",
        deliverables: ["Production deployment", "Documentation", "Source code transfer", "Training session"]
      }
    ],
    totalDuration: "6-12 weeks",
    display: "phases"
  },

  team: {
    title: "Meet Your Development Team",
    subtitle: "The experts who will bring your vision to life",
    members: [
      {
        name: "Alex Rodriguez",
        role: "Lead Full-Stack Developer",
        expertise: ["React/Next.js", "Node.js", "Database Design", "API Architecture"],
        bio: "10+ years building scalable web applications, former senior developer at two successful startups.",
        avatar: "/team/alex.jpg"
      },
      {
        name: "Sarah Kim",
        role: "Frontend Specialist",
        expertise: ["UI/UX Implementation", "TypeScript", "Responsive Design", "Performance Optimization"],
        bio: "Expert in creating beautiful, fast user interfaces that convert visitors into customers.",
        avatar: "/team/sarah.jpg"
      },
      {
        name: "Marcus Chen",
        role: "DevOps Engineer",
        expertise: ["Cloud Infrastructure", "CI/CD", "Security", "Monitoring"],
        bio: "Ensures your MVP launches flawlessly and scales seamlessly as you grow.",
        avatar: "/team/marcus.jpg"
      }
    ],
    structure: "individuals"
  },

  caseStudy: {
    title: "StartupLaunch's 8-Week Success Story",
    description: "We took StartupLaunch from concept to a fully functional SaaS platform in just 8 weeks, helping them secure their Series A funding with a product that impressed investors."
  },

  testimonials: {
    title: "Founder Success Stories",
    testimonials: [
      {
        quote: "Logicwind turned our idea into a market-ready product faster than we ever imagined. The fixed-price model gave us budget certainty, and the quality exceeded our expectations.",
        author: "Jessica Park",
        company: "StartupLaunch",
        role: "Founder & CEO"
      },
      {
        quote: "What impressed me most was their attention to scalability. Six months after launch, we're handling 10x the traffic with zero performance issues.",
        author: "David Chen",
        company: "GrowthTech",
        role: "CTO & Co-founder"
      },
      {
        quote: "The complete code ownership was a game-changer. We own everything and aren't locked into any vendor relationships. That's exactly what every startup needs.",
        author: "Amanda Rodriguez",
        company: "InnovateNow",
        role: "Founder"
      }
    ],
    display: "accordion"
  },

  riskMitigation: {
    title: "Your Investment is Protected",
    guarantees: [
      {
        title: "Complete Code Ownership",
        description: "You own 100% of the source code, IP rights, and all project assets. No vendor lock-in, no ongoing licensing fees.",
        icon: "FileText"
      },
      {
        title: "Fixed-Price Guarantee",
        description: "Your price is locked in from day one. No scope creep charges, no surprise costs, no budget overruns.",
        icon: "DollarSign"
      },
      {
        title: "On-Time Delivery Commitment",
        description: "We deliver on schedule or provide compensation. Our track record: 95% on-time delivery rate.",
        icon: "Clock"
      },
      {
        title: "Quality Assurance Promise",
        description: "Comprehensive testing, security audits, and performance optimization included. We stand behind our work.",
        icon: "Shield"
      }
    ]
  },


  finalCTA: {
    title: "Ready to Build Your MVP?",
    description: "Turn your vision into reality with a fixed-cost, fast-track development process. Get your quote today and see how quickly we can bring your idea to market.",
    ctaText: "Get Started Now"
  }
};