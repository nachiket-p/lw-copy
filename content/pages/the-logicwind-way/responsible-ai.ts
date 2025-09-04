import type { ResponsibleAIPageContent } from '../../types';

export const responsibleAIContent: ResponsibleAIPageContent = {
  hero: {
    title: "AI-Generated Code. Production-Ready Standards.",
    subtitle: "At Logicwind, we harness AI to accelerate development without compromising quality. Our commitment to Secure AI Development ensures every line of generated code meets enterprise standards for security, reliability, and maintainability."
  },

  principles: [
    {
      icon: "CheckCircle",
      title: "Mandatory Code Review",
      description: "Every single line of AI-generated code undergoes rigorous human review before deployment. We treat generated code with the same scrutiny as handwritten code, ensuring no shortcuts compromise quality or security.",
      examples: [
        "100% human review of AI output",
        "Multi-layer security scanning",
        "Comprehensive testing protocols"
      ]
    },
    {
      icon: "Lock", 
      title: "Enterprise AI Tools Only",
      description: "We exclusively use paid, enterprise-grade AI services from trusted providers like Claude Pro, OpenAI Plus, and Cursor Pro. Your code never touches free models or untrusted platforms, ensuring maximum security and IP protection.",
      examples: [
        "Paid subscriptions to vetted AI providers",
        "No free or open-source AI models",
        "Complete audit trails of AI usage"
      ]
    },
    {
      icon: "Shield",
      title: "Production-Ready Testing", 
      description: "All AI-generated components undergo comprehensive testing including unit tests, integration tests, security scans, and performance benchmarks. We validate every function as if lives depended on it.",
      examples: [
        "Automated security vulnerability scanning",
        "Performance and load testing",
        "Comprehensive test coverage requirements"
      ]
    },
    {
      icon: "FileCheck",
      title: "Full Development Accountability",
      description: "We take complete responsibility for every line of code we deliver, regardless of its origin. AI accelerates our process, but our accountability standards remain unwavering.",
      examples: [
        "Complete ownership of delivered code",
        "Comprehensive documentation and handover",
        "Ongoing support and maintenance commitments"
      ]
    }
  ],

  commitment: {
    title: "Why This Matters",
    subtitle: "AI can accelerate development exponentially, but without proper standards, it becomes a liability. Our secure development practices ensure you get the speed benefits of AI without the risks.",
    statements: [
      "When every line of AI code is properly reviewed and tested, you can deploy with confidence and sleep peacefully at night.",
      "Enterprise-grade AI tools and rigorous processes ensure your solutions are built to last and scale securely.",
      "Full accountability isn't just good practice—it's essential for maintaining client trust and protecting your business reputation."
    ]
  },

  finalCTA: {
    title: "Build Fast. Deploy Securely.",
    subtitle: "Partner with a team that harnesses AI's speed while maintaining enterprise-grade security standards. Let's create solutions that deliver results without compromising quality.",
    ctaText: "Start Your Secure AI Project"
  }
};