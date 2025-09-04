import type { ContactPageContent } from '../types';

export const contactContent: ContactPageContent = {
  hero: {
    title: "Let's Start a Conversation.",
    subtitle: "Whether you have a specific project in mind or you're just starting to explore what's possible with AI, we'd love to connect."
  },

  contactInfo: {
    location: {
      city: "Surat",
      country: "India",
      note: "Serving clients worldwide"
    },
    email: "hello@logicwind.com",
    responseTime: "Within 24 hours"
  },

  scheduleCall: {
    title: "Schedule a Call",
    description: "Prefer to talk directly? Schedule a free 30-minute discovery call with our strategy team.",
    ctaText: "Book Discovery Call"
  },

  nextSteps: {
    title: "What Happens Next?",
    steps: [
      {
        title: "We Review Your Inquiry",
        description: "Our team reviews your project details within 24 hours."
      },
      {
        title: "Discovery Call", 
        description: "We schedule a call to understand your goals and requirements."
      },
      {
        title: "Custom Proposal",
        description: "We create a tailored proposal with timeline and fixed pricing."
      }
    ]
  }
};