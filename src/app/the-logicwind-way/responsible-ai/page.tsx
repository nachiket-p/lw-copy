"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Eye, Users, Lock, ArrowRight, CheckCircle } from "lucide-react";

export default function ResponsibleAIPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Innovation with a Conscience
            </h1>
            <p className="text-xl text-neutral-grey max-w-4xl mx-auto leading-relaxed">
              At Logicwind, we believe that the most powerful innovations are those built on a 
              strong ethical foundation. Our commitment to Responsible AI isn&apos;t a marketing 
              slogan; it&apos;s a set of actionable principles that guide every project we undertake.
            </p>
          </div>
          
          {/* Quote Section */}
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-black italic mb-8 leading-relaxed">
              &ldquo;We believe true innovation demands responsibility. Our agentic frameworks are built 
              on a foundation of transparency, ethics, and human-centric design.&rdquo;
            </blockquote>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4F620' }}></div>
          </div>
        </div>
      </section>

      {/* Core Principles Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-neutral-grey max-w-3xl mx-auto">
              Four foundational commitments that ensure our AI solutions serve humanity&apos;s best interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Transparency */}
            <Card className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#D4F620' }}>
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Transparency</h3>
              <p className="text-neutral-grey">No black boxes. You always know how our AI systems work.</p>
            </Card>

            {/* Human-in-the-Loop */}
            <Card className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#D4F620' }}>
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Human-in-the-Loop</h3>
              <p className="text-neutral-grey">Critical decisions always have human oversight and approval.</p>
            </Card>

            {/* Fairness & Equity */}
            <Card className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#D4F620' }}>
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Fairness & Equity</h3>
              <p className="text-neutral-grey">We actively work to identify and mitigate bias in algorithms.</p>
            </Card>

            {/* Security & Privacy */}
            <Card className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#D4F620' }}>
                <Lock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Security & Privacy</h3>
              <p className="text-neutral-grey">Bank-grade security with deep respect for user privacy.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Principles */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {/* Transparency */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#D4F620' }}>
                    <Eye className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-black">Transparency</h3>
                </div>
                <p className="text-lg text-neutral-grey mb-6 leading-relaxed">
                  You will always know how our AI systems work and what data they are using. 
                  We provide clear documentation, explain our models&apos; decision-making processes, 
                  and maintain open communication about capabilities and limitations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Complete model documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Regular progress reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Open communication channels</span>
                  </li>
                </ul>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src="https://picsum.photos/600/400?random=2" 
                  alt="Transparent development process" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Human-in-the-Loop */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://picsum.photos/600/400?random=3" 
                  alt="Human oversight in AI development" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#D4F620' }}>
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-black">Human-in-the-Loop</h3>
                </div>
                <p className="text-lg text-neutral-grey mb-6 leading-relaxed">
                  Critical decisions are always subject to human oversight and approval. We build tools 
                  to empower people, not replace them. Our AI agents enhance human capabilities while 
                  keeping humans firmly in control of important choices.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Human approval for critical decisions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">AI augments, never replaces, human judgment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Clear escalation pathways</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fairness & Equity */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#D4F620' }}>
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-black">Fairness & Equity</h3>
                </div>
                <p className="text-lg text-neutral-grey mb-6 leading-relaxed">
                  We actively work to identify and mitigate bias in our algorithms to ensure fair outcomes 
                  for all users. Our development process includes rigorous testing for discriminatory patterns 
                  and continuous monitoring for equitable results.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Bias detection and mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Diverse testing scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Continuous equity monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src="https://picsum.photos/600/400?random=4" 
                  alt="Fair and equitable AI systems" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Security & Privacy */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://picsum.photos/600/400?random=5" 
                  alt="Secure AI development practices" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#D4F620' }}>
                    <Lock className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-black">Security & Privacy</h3>
                </div>
                <p className="text-lg text-neutral-grey mb-6 leading-relaxed">
                  Protecting your data is paramount. We build with bank-grade security and a deep respect 
                  for user privacy from day one. Every system is designed with privacy by default and 
                  security as a fundamental requirement, not an afterthought.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">End-to-end encryption</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Privacy by design architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" style={{ color: '#D4F620' }} />
                    <span className="text-neutral-grey">Regular security audits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why This Matters
            </h2>
            <p className="text-xl text-neutral-grey max-w-3xl mx-auto leading-relaxed">
              Technology doesn&apos;t exist in a vacuum. The choices we make today about AI development 
              will shape the future for generations. We&apos;re committed to ensuring that future is bright, 
              equitable, and human-centered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">Trust</h3>
              <p className="text-neutral-grey">
                When you work with ethical AI systems, you can trust the results and defend 
                your decisions with confidence.
              </p>
            </Card>
            
            <Card className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">Sustainability</h3>
              <p className="text-neutral-grey">
                Responsible AI practices ensure your solutions remain viable and beneficial 
                as technology and society evolve.
              </p>
            </Card>
            
            <Card className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">Competitive Advantage</h3>
              <p className="text-neutral-grey">
                Ethical AI isn&apos;t just good for society—it&apos;s better business, attracting 
                customers and talent who share your values.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#0B3B4D' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build the Future Responsibly
          </h2>
          <p className="text-xl text-blue-grey mb-8 max-w-3xl mx-auto">
            Partner with a team that shares your commitment to ethical innovation. Let&apos;s create 
            AI solutions that not only drive business results but make the world better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="px-8 py-6 text-lg font-semibold rounded-full uppercase tracking-wide"
              style={{ backgroundColor: '#D4F620', color: '#000000' }}
            >
              <Link href="/contact">Start Your Ethical AI Journey</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/the-logicwind-way/agentic-development">Learn About Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}