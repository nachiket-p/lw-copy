"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Zap, Users, Cog, Target } from "lucide-react";

export default function AgenticDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              What is Agentic Development?
            </h1>
            <p className="text-xl text-neutral-grey max-w-4xl mx-auto leading-relaxed">
              Our proprietary methodology that combines elite human talent with intelligent AI agents 
              to deliver software at unprecedented speed and quality.
            </p>
          </div>
          
          {/* Visual representation */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4F620' }}>
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">Hyper-Productive Teams</h3>
                    <p className="text-neutral-grey">AI agents handle repetitive tasks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4F620' }}>
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">Elite Human Focus</h3>
                    <p className="text-neutral-grey">Developers focus on innovation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4F620' }}>
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">Intelligent Results</h3>
                    <p className="text-neutral-grey">Higher quality, faster delivery</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://picsum.photos/600/400?random=1" 
                  alt="Modern development team collaboration" 
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-black leading-relaxed mb-8">
              Agentic Development is our proprietary methodology for building software. It&apos;s a paradigm 
              shift from traditional team structures. We combine elite human talent with a suite of custom 
              AI agents that handle repetitive coding, automated testing, and intelligent project management.
            </p>
            
            <p className="text-xl text-black leading-relaxed mb-8">
              This frees up our developers to focus exclusively on high-level problem-solving and innovation. 
              The result is a hyper-productive team that delivers higher quality software, faster than you 
              thought possible.
            </p>
            
            <p className="text-xl text-black leading-relaxed mb-12">
              It&apos;s not just about adding AI; it&apos;s about fundamentally redesigning the development 
              process for the modern era.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              The Agentic Advantage
            </h2>
            <p className="text-xl text-neutral-grey max-w-3xl mx-auto">
              See how our revolutionary approach transforms every aspect of software development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Agents */}
            <Card className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#D4F620' }}>
                <Cog className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">AI Agents Handle</h3>
              <ul className="space-y-3 text-neutral-grey">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Repetitive coding tasks
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Automated testing & QA
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Project management
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Code optimization
                </li>
              </ul>
            </Card>

            {/* Human Developers */}
            <Card className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#D4F620' }}>
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Humans Focus On</h3>
              <ul className="space-y-3 text-neutral-grey">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Strategic planning
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Creative problem-solving
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Architecture decisions
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Innovation & features
                </li>
              </ul>
            </Card>

            {/* Results */}
            <Card className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#D4F620' }}>
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">You Get</h3>
              <ul className="space-y-3 text-neutral-grey">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  3x faster development
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Higher code quality
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Predictable timelines
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-0.5 mr-3 text-logicwind-red flex-shrink-0" />
                  Transparent process
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Traditional vs Agentic Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              The Old Way vs. The Agentic Way
            </h2>
            <p className="text-xl text-neutral-grey max-w-3xl mx-auto">
              See the dramatic difference our approach makes in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Traditional Development */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Traditional Development</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-neutral-grey">Slow, manual coding processes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-neutral-grey">Unpredictable timelines and budgets</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-neutral-grey">Limited transparency into progress</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-neutral-grey">Human resources wasted on repetitive tasks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-neutral-grey">Inconsistent code quality</p>
                </div>
              </div>
            </div>

            {/* Agentic Development */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#D4F620' }}>Agentic Development</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#D4F620' }}></div>
                  <p className="text-neutral-grey">AI-accelerated development velocity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#D4F620' }}></div>
                  <p className="text-neutral-grey">Fixed-cost, on-time delivery guarantee</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#D4F620' }}></div>
                  <p className="text-neutral-grey">Complete visibility with intelligent insights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#D4F620' }}></div>
                  <p className="text-neutral-grey">Human creativity focused on innovation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#D4F620' }}></div>
                  <p className="text-neutral-grey">Consistent, enterprise-grade quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#0B3B4D' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Agentic Advantage?
          </h2>
          <p className="text-xl text-blue-grey mb-8 max-w-3xl mx-auto">
            Join forward-thinking companies who have already transformed their development process. 
            Let&apos;s discuss how Agentic Development can accelerate your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="px-8 py-6 text-lg font-semibold rounded-full uppercase tracking-wide"
              style={{ backgroundColor: '#D4F620', color: '#000000' }}
            >
              <Link href="/contact">Schedule Discovery Call</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/the-logicwind-way/responsible-ai">Explore Our Principles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}