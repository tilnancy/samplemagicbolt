"use client";

import * as React from "react";
import { useState } from "react";
import { Loader2, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export interface VideoInputSectionProps {
  onSubmit?: (url: string) => void;
  isLoading?: boolean;
  className?: string;
  mpid?: string;
}
export default function VideoInputSection({
  onSubmit,
  isLoading = false,
  className
}: VideoInputSectionProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const validateUrl = (inputUrl: string): boolean => {
    try {
      const urlObj = new URL(inputUrl);
      // Check for common video platforms
      const validDomains = ['youtube.com', 'youtu.be', 'vimeo.com', 'dailymotion.com', 'twitch.tv', 'facebook.com', 'instagram.com', 'tiktok.com'];
      return validDomains.some(domain => urlObj.hostname.includes(domain) || urlObj.hostname === domain);
    } catch {
      return false;
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!url.trim()) {
      setError("Please enter a video URL");
      return;
    }
    if (!validateUrl(url)) {
      setError("Please enter a valid video URL from supported platforms");
      return;
    }
    onSubmit?.(url);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (error) setError(""); // Clear error when user starts typing
  };
  return <section className={cn("w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20", className)} data-magicpath-id="0" data-magicpath-path="VideoInputSection.tsx">
      <div className="text-center mb-8 sm:mb-12" data-magicpath-id="1" data-magicpath-path="VideoInputSection.tsx">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4" data-magicpath-id="2" data-magicpath-path="VideoInputSection.tsx">
          Transform Your Videos
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed" data-magicpath-id="3" data-magicpath-path="VideoInputSection.tsx">
          Extract transcripts, metadata, and insights from any video with AI-powered analysis
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate data-magicpath-id="4" data-magicpath-path="VideoInputSection.tsx">
        <div className="space-y-2" data-magicpath-id="5" data-magicpath-path="VideoInputSection.tsx">
          <Label htmlFor="video-url" className="text-base font-medium text-foreground sr-only" data-magicpath-id="6" data-magicpath-path="VideoInputSection.tsx">
            Video URL
          </Label>
          <div className="relative" data-magicpath-id="7" data-magicpath-path="VideoInputSection.tsx">
            <Input id="video-url" type="url" value={url} onChange={handleInputChange} placeholder="Paste your video URL here (YouTube, Vimeo, etc.)" disabled={isLoading} className={cn("h-14 text-lg px-6 rounded-xl border-2 transition-all duration-200", "placeholder:text-muted-foreground/60", "focus:border-primary focus:ring-2 focus:ring-primary/20", error && "border-destructive focus:border-destructive focus:ring-destructive/20", isLoading && "opacity-50 cursor-not-allowed")} aria-describedby={error ? "url-error" : undefined} aria-invalid={!!error} data-magicpath-id="8" data-magicpath-path="VideoInputSection.tsx" />
          </div>
          {error && <p id="url-error" className="text-sm text-destructive mt-2 px-2" role="alert" aria-live="polite" data-magicpath-id="9" data-magicpath-path="VideoInputSection.tsx">
              {error}
            </p>}
        </div>

        <Button type="submit" disabled={isLoading || !url.trim()} className={cn("w-full h-14 text-lg font-semibold rounded-xl", "bg-primary hover:bg-primary/90 text-primary-foreground", "focus:ring-2 focus:ring-primary/20 focus:ring-offset-2", "transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]", "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none")} data-magicpath-id="10" data-magicpath-path="VideoInputSection.tsx">
          {isLoading ? <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" data-magicpath-id="11" data-magicpath-path="VideoInputSection.tsx" />
              Processing...
            </> : <>
              <Play className="mr-2 h-5 w-5" data-magicpath-id="12" data-magicpath-path="VideoInputSection.tsx" />
              Analyze Video
            </>}
        </Button>
      </form>

      <div className="mt-8 text-center" data-magicpath-id="13" data-magicpath-path="VideoInputSection.tsx">
        <p className="text-sm text-muted-foreground" data-magicpath-id="14" data-magicpath-path="VideoInputSection.tsx">
          Supports YouTube, Vimeo, and other major video platforms
        </p>
      </div>
    </section>;
}