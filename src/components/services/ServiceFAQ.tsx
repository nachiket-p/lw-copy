"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does MVP development typically take?",
    answer: "Our Agentic MVP development process typically takes 8-16 weeks, depending on the complexity and scope of your product. We provide a detailed timeline during our initial consultation."
  },
  {
    question: "What happens to the source code and IP?",
    answer: "You own 100% of the source code and intellectual property. We provide complete ownership transfer and documentation upon project completion."
  },
  {
    question: "How is pricing structured?",
    answer: "We offer fixed-price packages based on your specific requirements. After our discovery call, we provide a detailed proposal with transparent pricing and no hidden costs."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various support and maintenance packages. We can also continue working with you on additional features and scaling as your product grows."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS. The specific tech stack is chosen based on your product requirements and future scalability needs."
  }
];

export function ServiceFAQ() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border border-border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}