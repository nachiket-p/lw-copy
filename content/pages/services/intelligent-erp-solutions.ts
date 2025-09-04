import type { ServicePageContent } from '../../types';

export const intelligentErpSolutionsContent: ServicePageContent = {
  hero: {
    title: "Intelligent ERP Solutions",
    subtitle: "Streamline your operations with a powerful, open-source ERP system built for sustainable growth.",
    ctaText: "Transform My Operations"
  },

  stats: {
    title: "ERP Transformation Results",
    metrics: [
      { value: "300%", label: "Efficiency Gain", description: "Average operational efficiency improvement" },
      { value: "80%", label: "Process Automation", description: "Manual tasks eliminated through automation" },
      { value: "99.2%", label: "Data Accuracy", description: "Inventory and operational data precision" },
      { value: "$0", label: "Licensing Fees", description: "No ongoing software licensing costs" }
    ],
    layout: "grid"
  },

  isThisForYou: {
    items: [
      "You're struggling with disconnected systems that don't talk to each other.",
      "You need real-time visibility into your entire business operation.",
      "You want an ERP that grows with you without massive licensing costs.",
      "You're tired of rigid systems that don't adapt to how you actually work."
    ]
  },

  comparison: {
    title: "Open-Source ERP vs. Enterprise Giants",
    subtitle: "Why custom-built solutions outperform expensive, rigid platforms",
    comparison: {
      us: {
        title: "Logicwind ERP Solution",
        points: [
          "Custom-built for your exact processes",
          "No ongoing licensing or user fees",
          "Complete source code ownership",
          "Unlimited customization and integration",
          "Rapid deployment (12-20 weeks)"
        ]
      },
      them: {
        title: "SAP, Salesforce, Oracle",
        points: [
          "One-size-fits-all approach",
          "Expensive per-user licensing ($100-500/user/month)",
          "Vendor lock-in and dependency",
          "Limited customization options",
          "Complex implementations (6-18 months)"
        ]
      }
    },
    layout: "side-by-side"
  },

  howItWorks: {
    title: "Your Journey to Operational Excellence",
    steps: [
      {
        title: "Business Process Analysis",
        description: "We map your current workflows and identify optimization opportunities across all departments."
      },
      {
        title: "Custom ERP Design & Build",
        description: "We develop a tailored ERP solution using open-source technologies, built specifically for your processes."
      },
      {
        title: "Integration & Migration",
        description: "We seamlessly integrate with your existing tools and migrate your data without business disruption."
      },
      {
        title: "Training & Optimization",
        description: "We train your team and continuously optimize the system based on real usage patterns."
      }
    ]
  },

  technicalSpecs: {
    title: "Enterprise Integration Capabilities",
    sections: [
      {
        category: "Core ERP Modules",
        items: ["Financial Management", "Inventory Management", "Order Processing", "Customer Relationship Management", "Human Resources", "Project Management"]
      },
      {
        category: "Integration Standards",
        items: ["RESTful APIs", "GraphQL endpoints", "Webhook notifications", "Real-time data sync", "Third-party connectors", "ETL data pipelines"]
      },
      {
        category: "Security & Compliance",
        items: ["Role-based access control", "Data encryption (at rest & in transit)", "Audit trails", "GDPR compliance", "SOC 2 Type II preparation", "Regular security assessments"]
      },
      {
        category: "Technology Foundation",
        items: ["Modern web framework (React/Vue)", "Scalable backend (Node.js/Python)", "High-performance database (PostgreSQL)", "Cloud-native architecture", "Containerized deployment", "Monitoring & analytics"]
      }
    ],
    format: "accordion"
  },

  whatYouGet: {
    title: "Your Complete Business Operating System",
    items: [
      "A fully integrated ERP system tailored to your workflows",
      "Real-time dashboards and business intelligence",
      "Automated processes that eliminate manual work",
      "Scalable architecture that grows with your business",
      "Full source code ownership with no licensing fees"
    ]
  },

  timeline: {
    title: "Phased Implementation Timeline",
    phases: [
      {
        phase: "Discovery & Design",
        duration: "Week 1-4",
        deliverables: ["Business process mapping", "System architecture design", "Integration planning", "User experience wireframes"]
      },
      {
        phase: "Core Development",
        duration: "Week 5-12",
        deliverables: ["Core ERP modules built", "Database setup and migration", "User interface development", "Business logic implementation"]
      },
      {
        phase: "Integration & Testing",
        duration: "Week 13-16",
        deliverables: ["Third-party system integration", "Data migration from legacy systems", "Comprehensive testing", "Performance optimization"]
      },
      {
        phase: "Training & Launch",
        duration: "Week 17-20",
        deliverables: ["User training programs", "Documentation completion", "Phased rollout", "Go-live support"]
      }
    ],
    totalDuration: "12-20 weeks",
    display: "gantt"
  },

  team: {
    title: "Your ERP Implementation Specialists",
    subtitle: "Domain experts who understand both technology and business operations",
    members: [
      {
        name: "Michael Torres",
        role: "ERP Solution Architect",
        expertise: ["Enterprise Architecture", "Business Process Optimization", "System Integration", "Data Migration"],
        bio: "15+ years implementing ERP systems for manufacturing and service companies.",
        avatar: "/team/michael.jpg"
      },
      {
        name: "Lisa Wang",
        role: "Integration Specialist", 
        expertise: ["API Development", "Data Warehousing", "Third-party Connectors", "ETL Processes"],
        bio: "Expert in connecting disparate systems and ensuring seamless data flow.",
        avatar: "/team/lisa.jpg"
      },
      {
        name: "Robert Kim",
        role: "Business Analyst",
        expertise: ["Process Mapping", "Requirements Analysis", "Change Management", "User Training"],
        bio: "Bridges the gap between technical solutions and business needs.",
        avatar: "/team/robert.jpg"
      }
    ],
    structure: "expertise-grid"
  },

  caseStudy: {
    title: "ManufactureCorp's 300% Efficiency Gain",
    description: "Our intelligent ERP solution helped ManufactureCorp reduce manual processes by 80%, improve inventory accuracy to 99.2%, and increase overall operational efficiency by 300%."
  },

  testimonials: {
    title: "Executive Testimonials",
    testimonials: [
      {
        quote: "The ERP system Logicwind built for us has transformed our operations. We now have real-time visibility into every aspect of our business, and our efficiency has increased dramatically.",
        author: "Jennifer Hayes",
        company: "ManufactureCorp",
        role: "CEO"
      },
      {
        quote: "What sets Logicwind apart is their understanding of both technology and business processes. They didn't just build software; they optimized our entire operation.",
        author: "Thomas Chen", 
        company: "GrowthDynamics",
        role: "COO"
      },
      {
        quote: "The cost savings have been incredible. No licensing fees, no user limits, and we own everything. Our ROI was achieved within 8 months.",
        author: "Maria Rodriguez",
        company: "ScaleUp Industries",
        role: "CFO"
      }
    ],
    display: "grid"
  },

  riskMitigation: {
    title: "Business Continuity Assurance",
    guarantees: [
      {
        title: "Zero Downtime Migration",
        description: "We ensure your business operations continue without interruption during system transition and data migration.",
        icon: "Activity"
      },
      {
        title: "Data Security Guarantee",
        description: "Enterprise-grade security measures and compliance frameworks protect your sensitive business data.",
        icon: "Shield"
      },
      {
        title: "Performance Benchmarks",
        description: "We guarantee measurable improvements in operational efficiency and process automation within 90 days.",
        icon: "TrendingUp"
      },
      {
        title: "Ongoing Support Commitment",
        description: "Comprehensive training, documentation, and post-launch support to ensure long-term success.",
        icon: "Users"
      }
    ]
  },

  faq: [
    {
      question: "How is this different from Salesforce or SAP?",
      answer: "Unlike expensive, rigid platforms, our solutions are custom-built for your specific processes using open-source technology. You own everything and pay no ongoing licensing fees."
    },
    {
      question: "How long does implementation take?",
      answer: "Most implementations take 12-20 weeks depending on complexity. We work in phases so you can start seeing benefits early in the process."
    },
    {
      question: "What about data security?",
      answer: "Security is built-in from day one. We implement enterprise-grade security measures, regular backups, and compliance frameworks as needed."
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "Absolutely. We specialize in seamless integrations with accounting software, CRMs, e-commerce platforms, and any other tools critical to your business."
    }
  ],

  finalCTA: {
    title: "Ready to Streamline Your Operations?",
    description: "Stop wrestling with disconnected systems. Get a powerful, integrated ERP solution that actually works the way your business does.",
    ctaText: "Schedule Consultation"
  }
};