import type { ContactContent } from '../types';

export const contactContent: ContactContent = {
  email: "hello@logicwind.com",
  phone: "+1 (555) 123-4567",
  
  address: {
    street: "123 Innovation Drive",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States"
  },

  businessHours: [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM PST" },
    { day: "Sunday", hours: "Closed" }
  ],

  ctaOptions: {
    primary: "Schedule Your Free Discovery Call",
    secondary: "Get In Touch",
    consultation: "Book Free Consultation",
    quote: "Get Quote"
  },

  formLabels: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "How can we help?",
    serviceInterest: "Service Interest",
    budgetRange: "Budget Range",
    timeline: "Project Timeline",
    submit: "Submit Inquiry"
  }
};