import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";
import * as Icons from "lucide-react";
import { navigationContent } from "../../../content/common/navigation";

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
              <span className="font-bold text-xl">{navigationContent.brand.name}</span>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              {navigationContent.brand.description}
            </p>
            <div className="flex items-center space-x-4">
              {navigationContent.socialLinks.map((social) => {
                const IconComponent = Icons[social.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                return (
                  <Link key={social.name} href={social.href} className="opacity-60 hover:opacity-100 transition-opacity">
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Dynamic Footer Sections */}
          {navigationContent.footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <nav className="flex flex-col space-y-2">
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm opacity-60">{navigationContent.footer.copyright}</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs opacity-60">{navigationContent.footer.tagline}</span>
            </div>
          </div>
          
          <div className="text-xs opacity-40">
            {navigationContent.footer.builtWith}
          </div>
        </div>
      </div>
    </footer>
  );
}