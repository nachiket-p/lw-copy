import type { ServicePageContent } from '../../types';

export const agenticDevelopmentTeamsContent: ServicePageContent = {
  hero: {
    title: "Agentic Development Teams",
    subtitle: "Supercharge your project with a dedicated, hyper-efficient team that integrates seamlessly with yours.",
    ctaText: "Scale My Team"
  },

  stats: {
    title: "Team Performance Metrics",
    metrics: [
      { value: "200%", label: "Velocity Increase", description: "Average improvement in feature delivery speed" },
      { value: "1-2", label: "Weeks to Start", description: "From engagement to productive development" },
      { value: "98%", label: "Client Satisfaction", description: "Long-term partnership success rate" },
      { value: "5+", label: "Years Experience", description: "Minimum experience for all team members" }
    ],
    layout: "dashboard"
  },

  isThisForYou: {
    items: [
      "You need to scale development fast but hiring takes too long.",
      "Your current team is overwhelmed and missing deadlines.",
      "You want proven developers who can hit the ground running.",
      "You need the flexibility to scale up or down based on project needs."
    ]
  },

  team: {
    title: "Your Team Awaits",
    subtitle: "Meet some of our senior developers ready to integrate with your project",
    members: [
      {
        name: "Elena Vasquez",
        role: "Senior Full-Stack Developer",
        expertise: ["React", "Node.js", "AWS", "PostgreSQL", "TypeScript"],
        bio: "8 years building scalable applications. Previously at two unicorn startups, expert in rapid feature development.",
        avatar: "/team/elena.jpg"
      },
      {
        name: "James Patterson", 
        role: "Senior Backend Engineer",
        expertise: ["Python", "Django", "Microservices", "Docker", "Kubernetes"],
        bio: "10 years in backend development. Specialized in high-performance systems and API architecture.",
        avatar: "/team/james.jpg"
      },
      {
        name: "Priya Sharma",
        role: "Senior Frontend Developer",
        expertise: ["React", "Vue.js", "Next.js", "Design Systems", "Performance"],
        bio: "7 years creating exceptional user experiences. Expert in modern frontend tooling and optimization.",
        avatar: "/team/priya.jpg"
      },
      {
        name: "Carlos Rivera",
        role: "DevOps Engineer",
        expertise: ["AWS", "CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
        bio: "9 years in DevOps and infrastructure. Ensures reliable deployments and scalable systems.",
        avatar: "/team/carlos.jpg"
      }
    ],
    structure: "collective"
  },

  howItWorks: {
    title: "Your Path to Enhanced Development Velocity",
    steps: [
      {
        title: "Team Matching & Onboarding",
        description: "We match you with developers who fit your tech stack, culture, and project requirements."
      },
      {
        title: "Seamless Integration",
        description: "Our team integrates with your workflows, tools, and processes from day one."
      },
      {
        title: "Accelerated Development",
        description: "We work as an extension of your team, delivering features at incredible speed with full transparency."
      },
      {
        title: "Knowledge Transfer",
        description: "We document everything and can train your internal team to maintain and extend the work."
      }
    ]
  },

  technicalSpecs: {
    title: "Team Capabilities & Methodologies",
    sections: [
      {
        category: "Frontend Expertise",
        items: ["React, Vue.js, Next.js, Svelte", "TypeScript and modern JavaScript", "Component libraries and design systems", "Performance optimization", "Mobile-responsive development"]
      },
      {
        category: "Backend Proficiency",
        items: ["Node.js, Python, Go, Java", "RESTful APIs and GraphQL", "Microservices architecture", "Database design and optimization", "Real-time systems (WebSocket, SSE)"]
      },
      {
        category: "DevOps & Infrastructure",
        items: ["AWS, Google Cloud, Azure", "Docker and Kubernetes", "CI/CD pipeline setup", "Infrastructure as Code", "Monitoring and logging"]
      },
      {
        category: "Development Practices",
        items: ["Agile/Scrum methodologies", "Test-driven development", "Code review processes", "Documentation standards", "Security best practices"]
      }
    ],
    format: "grid"
  },

  whatYouGet: {
    title: "Your Extended Development Powerhouse",
    items: [
      "Senior developers with 5+ years of experience",
      "Full integration with your existing team and processes",
      "Flexible scaling - add or reduce team members as needed",
      "Complete transparency with daily updates and demos",
      "Knowledge transfer and documentation for long-term success"
    ]
  },

  timeline: {
    title: "Engagement Phases",
    phases: [
      {
        phase: "Team Assembly",
        duration: "Week 1",
        deliverables: ["Requirements analysis", "Developer matching", "Team formation", "Initial kickoff meeting"]
      },
      {
        phase: "Integration",
        duration: "Week 2",
        deliverables: ["Tool and process setup", "Access provisioning", "First sprint planning", "Team introductions"]
      },
      {
        phase: "Productive Development",
        duration: "Week 3+",
        deliverables: ["Feature development", "Regular sprint deliveries", "Continuous integration", "Progress reporting"]
      }
    ],
    totalDuration: "Ongoing",
    display: "phases"
  },

  testimonials: {
    title: "Partnership Success Stories",
    testimonials: [
      {
        quote: "The Logicwind team integrated so seamlessly, it felt like they were part of our company from day one. They delivered features faster than we ever imagined possible.",
        author: "Mark Johnson",
        company: "TechScale",
        role: "VP of Engineering"
      },
      {
        quote: "What impressed me most was their proactive communication. Daily updates, weekly demos, and always available when we needed them. True partnership.",
        author: "Sarah Kim",
        company: "InnovateNow",
        role: "Product Manager"
      },
      {
        quote: "They didn't just write code - they understood our business and suggested improvements that saved us months of development time.",
        author: "David Chen",
        company: "GrowthTech",
        role: "CTO"
      }
    ],
    display: "carousel"
  },

  riskMitigation: {
    title: "Partnership Guarantees",
    guarantees: [
      {
        title: "Quality Commitment",
        description: "Every team member is senior-level with proven track records. We guarantee the quality of work and can replace any team member if needed.",
        icon: "Award"
      },
      {
        title: "Seamless Integration",
        description: "We adapt to your workflows, tools, and communication style. If integration isn't seamless, we'll adjust until it is.",
        icon: "Users"
      },
      {
        title: "Flexible Scaling",
        description: "Scale your team up or down with 30-day notice. No long-term contracts or commitments required.",
        icon: "TrendingUp"
      },
      {
        title: "Knowledge Retention",
        description: "Comprehensive documentation and knowledge transfer ensure your team can continue without us when ready.",
        icon: "BookOpen"
      }
    ]
  },

  faq: [
    {
      question: "How quickly can the team start?",
      answer: "Most teams can start within 1-2 weeks. We maintain a pool of available senior developers and can rapidly assemble the right team for your project."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every developer is senior-level with proven track records. We use code reviews, automated testing, and continuous integration to maintain the highest quality standards."
    },
    {
      question: "What time zones do you work in?",
      answer: "We can provide teams that work in your preferred time zone or provide follow-the-sun development for 24/7 progress on critical projects."
    },
    {
      question: "Can I hire team members full-time?",
      answer: "Yes, if you find team members you'd like to hire, we offer talent acquisition services to help you bring them on board permanently."
    }
  ],

  finalCTA: {
    title: "Ready to Supercharge Your Development?",
    description: "Don't let talent constraints slow you down. Scale your development team with proven experts who can deliver results from day one.",
    ctaText: "Build My Team"
  }
};