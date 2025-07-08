"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterSectionProps {
  copyrightText?: string;
  links?: FooterLink[];
  className?: string;
}
const defaultLinks: FooterLink[] = [{
  label: "Privacy Policy",
  href: "/privacy"
}, {
  label: "Terms of Service",
  href: "/terms"
}, {
  label: "Contact",
  href: "/contact"
}, {
  label: "Support",
  href: "/support"
}];
export default function FooterSection({
  copyrightText = "© 2024 Infinity",
  links = defaultLinks,
  className
}: FooterSectionProps) {
  return <footer className={cn("w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          {/* Copyright Section */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground font-medium">
              {copyrightText}
            </p>
          </div>

          {/* Links Section */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-1 sm:justify-end">
            {links.map((link, index) => <React.Fragment key={link.href}>
                <a href={link.href} className={cn("px-3 py-2 text-sm font-medium text-muted-foreground rounded-md", "hover:text-foreground hover:bg-accent/50 transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", "focus:text-foreground focus:bg-accent/50")} aria-label={`Navigate to ${link.label}`}>
                  {link.label}
                </a>
                {index < links.length - 1 && <span className="hidden sm:inline text-muted-foreground/30 self-center">
                    |
                  </span>}
              </React.Fragment>)}
          </nav>
        </div>

        {/* Additional Footer Content */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Transform your videos with AI-powered analysis. Extract transcripts, metadata, and insights 
            from any video content with our advanced processing technology.
          </p>
        </div>
      </div>
    </footer>;
}