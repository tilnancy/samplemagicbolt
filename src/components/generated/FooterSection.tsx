"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
export interface FooterLink {
  label: string;
  href: string;
  mpid?: string;
}
export interface FooterSectionProps {
  copyrightText?: string;
  links?: FooterLink[];
  className?: string;
  mpid?: string;
}
const defaultLinks: FooterLink[] = [{
  label: "Privacy Policy",
  href: "/privacy",
  mpid: "765a527d-f43a-466e-80e7-4f7d850a2dbf"
}, {
  label: "Terms of Service",
  href: "/terms",
  mpid: "1c252ff6-db84-4231-b637-992f483985af"
}, {
  label: "Contact",
  href: "/contact",
  mpid: "4a2eb66d-3383-4e7b-9fe6-534c79712b3c"
}, {
  label: "Support",
  href: "/support",
  mpid: "ed711190-d731-4fe8-bb2c-7693d382341c"
}];
export default function FooterSection({
  copyrightText = "© 2024 Infinity",
  links = defaultLinks,
  className
}: FooterSectionProps) {
  return <footer className={cn("w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto", className)} data-magicpath-id="0" data-magicpath-path="FooterSection.tsx">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12" data-magicpath-id="1" data-magicpath-path="FooterSection.tsx">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0" data-magicpath-id="2" data-magicpath-path="FooterSection.tsx">
          {/* Copyright Section */}
          <div className="text-center sm:text-left" data-magicpath-id="3" data-magicpath-path="FooterSection.tsx">
            <p className="text-sm text-muted-foreground font-medium" data-magicpath-id="4" data-magicpath-path="FooterSection.tsx">
              {copyrightText}
            </p>
          </div>

          {/* Links Section */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-1 sm:justify-end" data-magicpath-id="5" data-magicpath-path="FooterSection.tsx">
            {links.map((link, index) => <React.Fragment key={link.href} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="FooterSection.tsx">
                <a href={link.href} className={cn("px-3 py-2 text-sm font-medium text-muted-foreground rounded-md", "hover:text-foreground hover:bg-accent/50 transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", "focus:text-foreground focus:bg-accent/50")} aria-label={`Navigate to ${link.label}`}>
                  {link.label}
                </a>
                {index < links.length - 1 && <span className="hidden sm:inline text-muted-foreground/30 self-center" data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="FooterSection.tsx">
                    |
                  </span>}
              </React.Fragment>)}
          </nav>
        </div>

        {/* Additional Footer Content */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center" data-magicpath-id="8" data-magicpath-path="FooterSection.tsx">
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto" data-magicpath-id="9" data-magicpath-path="FooterSection.tsx">
            Transform your videos with AI-powered analysis. Extract transcripts, metadata, and insights 
            from any video content with our advanced processing technology.
          </p>
        </div>
      </div>
    </footer>;
}