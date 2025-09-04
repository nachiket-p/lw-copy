import type { NavigationContent } from '../types';

export const navigationContent: NavigationContent = {
  brand: {
    name: "Logicwind",
    tagline: "The Principled Pioneer",
    description: "The Principled Pioneer. Building the future with Agentic Development and Secure AI Standards."
  },

  mainNav: [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        {
          title: "The AI Advantage Sprint",
          href: "/services/ai-advantage-sprint",
          description: "Pinpoint the key AI features that will make your product a market leader."
        },
        {
          title: "Agentic MVP Development",
          href: "/services/agentic-mvp-development",
          description: "Go from a bold idea to a robust, market-ready product in record time."
        },
        {
          title: "Intelligent ERP Solutions",
          href: "/services/intelligent-erp-solutions",
          description: "Streamline your operations with a powerful, open-source ERP system built for sustainable growth."
        },
        {
          title: "Agentic Development Teams",
          href: "/services/agentic-development-teams",
          description: "Supercharge your project with a dedicated, hyper-efficient team that integrates seamlessly with yours."
        }
      ]
    },
    {
      name: "The Logicwind Way",
      href: "/the-logicwind-way",
      dropdown: [
        {
          title: "Our Approach: Agentic Development",
          href: "/the-logicwind-way/agentic-development",
          description: "Discover our proprietary methodology for building software at unprecedented speed."
        },
        {
          title: "Our Standards: Secure AI Development",
          href: "/the-logicwind-way/responsible-ai",
          description: "Learn about our commitment to production-ready code, enterprise security, and rigorous development practices."
        }
      ]
    },
    {
      name: "Success Stories",
      href: "/success-stories"
    },
    {
      name: "Insights",
      href: "/insights"
    },
    {
      name: "Contact",
      href: "/contact"
    }
  ],

  headerCTA: {
    text: "Schedule Discovery Call",
    href: "/contact"
  },

  footerSections: [
    {
      title: "Services",
      links: [
        { name: "The AI Advantage Sprint", href: "/services/ai-advantage-sprint" },
        { name: "Agentic MVP Development", href: "/services/agentic-mvp-development" },
        { name: "Intelligent ERP Solutions", href: "/services/intelligent-erp-solutions" },
        { name: "Agentic Development Teams", href: "/services/agentic-development-teams" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Approach", href: "/the-logicwind-way/agentic-development" },
        { name: "Our Standards", href: "/the-logicwind-way/responsible-ai" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "About Us", href: "/about" },
        { name: "Team", href: "/about#team" },
        { name: "Careers", href: "/about#careers" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Insights Hub", href: "/insights" },
        { name: "Contact", href: "/contact" },
        { name: "Style Guide", href: "/style-guide" },
        { name: "Privacy Policy", href: "/privacy" }
      ]
    }
  ],

  socialLinks: [
    {
      name: "Twitter",
      href: "#",
      icon: "Twitter"
    },
    {
      name: "LinkedIn", 
      href: "#",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      href: "#",
      icon: "Github"
    }
  ],

  footer: {
    copyright: "© 2024 Logicwind. All rights reserved.",
    tagline: "The Agentic Advantage. Responsibly Delivered.",
    builtWith: "Built with Next.js 15, React 19, and shadcn/ui"
  }
};