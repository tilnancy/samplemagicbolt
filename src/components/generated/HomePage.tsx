"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import VideoInputSection from "./VideoInputSection";
import TabbedContent, { VideoData } from "./TabbedContent";
export interface HomePageProps {
  className?: string;
  mpid?: string;
}

// Demo data for showcase purposes
const demoVideoData: VideoData = {
  transcript: `Welcome to this comprehensive tutorial on React development. In this video, we'll explore the fundamentals of building modern web applications using React and TypeScript.

First, let's discuss the importance of component-based architecture. React allows us to break down complex user interfaces into smaller, reusable components. This approach makes our code more maintainable and easier to test.

Next, we'll cover state management. React provides several ways to manage state, from the built-in useState hook for local component state to more advanced solutions like useContext for global state management.

We'll also explore the concept of props, which allow us to pass data between components. Props are read-only and help maintain the unidirectional data flow that makes React applications predictable and easier to debug.

Finally, we'll discuss best practices for React development, including proper component structure, naming conventions, and performance optimization techniques. These practices will help you write cleaner, more efficient React code.

Thank you for watching, and I hope you found this tutorial helpful for your React development journey.`,
  metadata: {
    title: "Complete React Development Tutorial - From Basics to Advanced",
    channel: "TechEducation Pro",
    summary: "A comprehensive tutorial covering React fundamentals, component architecture, state management, and best practices for modern web development. Perfect for developers looking to master React and TypeScript.",
    date: "December 15, 2024",
    duration: "45:32",
    views: "127,543"
  },
  output: {
    classification: "Educational Tutorial",
    takeaways: ["React uses component-based architecture for building maintainable UIs", "State management can be handled with useState for local state and useContext for global state", "Props enable data flow between components while maintaining unidirectional data flow", "Following best practices improves code quality and performance", "TypeScript integration enhances development experience with type safety"],
    insights: ["Component-based architecture significantly reduces code complexity in large applications", "Proper state management is crucial for application scalability and maintainability", "Understanding React's data flow patterns prevents common debugging issues", "Performance optimization should be considered from the early stages of development", "TypeScript adoption leads to more robust and self-documenting code"]
  }
};
export default function HomePage({
  className
}: HomePageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | undefined>(undefined);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleVideoSubmit = async (url: string) => {
    setIsLoading(true);
    setHasSubmitted(true);

    // Simulate API call delay
    setTimeout(() => {
      setVideoData(demoVideoData);
      setIsLoading(false);
    }, 2000);
  };
  return <main className={cn("flex-1 flex flex-col", className)} data-magicpath-id="0" data-magicpath-path="HomePage.tsx">
      {/* Hero/Input Section */}
      <section className="flex-shrink-0" data-magicpath-id="1" data-magicpath-path="HomePage.tsx">
        <VideoInputSection onSubmit={handleVideoSubmit} isLoading={isLoading} data-magicpath-id="2" data-magicpath-path="HomePage.tsx" />
      </section>

      {/* Tabbed Content Section */}
      <section className="flex-1" data-magicpath-id="3" data-magicpath-path="HomePage.tsx">
        <TabbedContent data={videoData} isLoading={isLoading} data-magicpath-id="4" data-magicpath-path="HomePage.tsx" />
      </section>

      {/* Spacer for better layout when no content */}
      {!hasSubmitted && <div className="flex-1 min-h-[20vh]" data-magicpath-id="5" data-magicpath-path="HomePage.tsx" />}
    </main>;
}