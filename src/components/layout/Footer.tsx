import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Zap, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Logicwind</span>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              The Principled Pioneer. Building the future with Agentic Development and Responsible AI.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/services/ai-advantage-sprint" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                The AI Advantage Sprint
              </Link>
              <Link href="/services/agentic-mvp-development" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Agentic MVP Development
              </Link>
              <Link href="/services/intelligent-erp-solutions" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Intelligent ERP Solutions
              </Link>
              <Link href="/services/agentic-development-teams" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Agentic Development Teams
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/the-logicwind-way/agentic-development" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Our Approach
              </Link>
              <Link href="/the-logicwind-way/responsible-ai" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Our Principles
              </Link>
              <Link href="/success-stories" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Success Stories
              </Link>
              <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link href="/about#team" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Team
              </Link>
              <Link href="/about#careers" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Careers
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/insights" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Insights Hub
              </Link>
              <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </Link>
              <Link href="/style-guide" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Style Guide
              </Link>
              <Link href="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm opacity-60">© 2024 Logicwind. All rights reserved.</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs opacity-60">The Agentic Advantage. Responsibly Delivered.</span>
            </div>
          </div>
          
          <div className="text-xs opacity-40">
            Built with Next.js 15, React 19, and shadcn/ui
          </div>
        </div>
      </div>
    </footer>
  );
}