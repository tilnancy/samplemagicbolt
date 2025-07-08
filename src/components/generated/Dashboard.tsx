"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown, Video, BookOpen, Newspaper, BrainCircuit, Lightbulb, Wrench, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";
export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  mpid?: string;
}
export interface Category {
  name: string;
  icon: React.ElementType;
  count: number;
  videos: VideoItem[];
  mpid?: string;
}
export interface DashboardData {
  totalVideos: number;
  categories: Category[];
  mpid?: string;
}
export interface DashboardProps {
  className?: string;
  mpid?: string;
}
const demoDashboardData: DashboardData = {
  totalVideos: 125,
  categories: [{
    name: "Interviews",
    icon: Video,
    count: 15,
    videos: [{
      id: "1",
      title: "AI in Healthcare",
      duration: "45:12",
      mpid: "a361fde4-ee2e-4d32-beb5-627842f9e473"
    }, {
      id: "2",
      title: "The Future of Work",
      duration: "30:05",
      mpid: "f7dbbc9e-5616-4bed-9a30-b6b74949bd7e"
    }],
    mpid: "48a8a900-4f04-401c-8849-f8bedfa5f2b9"
  }, {
    name: "Educational",
    icon: BookOpen,
    count: 42,
    videos: [{
      id: "3",
      title: "React Hooks Explained",
      duration: "22:40",
      mpid: "2844e389-a417-4217-b72f-5801e086a068"
    }],
    mpid: "cdd5497b-f26c-4f64-9d39-046ab0cc649b"
  }, {
    name: "News and Updates",
    icon: Newspaper,
    count: 23,
    videos: [],
    mpid: "ab54bfe1-1b61-497b-87aa-ec63793dd6dc"
  }, {
    name: "Prompt Engineering",
    icon: BrainCircuit,
    count: 18,
    videos: [],
    mpid: "3114f050-bcba-482e-bf01-58df9c3a91d6"
  }, {
    name: "Practical Applications of AI",
    icon: Lightbulb,
    count: 20,
    videos: [],
    mpid: "b94ea276-c9cf-4f5e-a6b0-e61b17840b97"
  }, {
    name: "Tools",
    icon: Wrench,
    count: 7,
    videos: [],
    mpid: "1ac3d055-80eb-489a-a059-15b3a5b5a3ab"
  }]
};
export default function Dashboard({
  className
}: DashboardProps) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setData(demoDashboardData);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const handleOpenChange = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };
  return <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12", className)} data-magicpath-id="0" data-magicpath-path="Dashboard.tsx">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8" data-magicpath-id="1" data-magicpath-path="Dashboard.tsx">Dashboard</h1>
      
      {isLoading ? <Card className="mb-8" data-magicpath-id="2" data-magicpath-path="Dashboard.tsx">
          <CardHeader data-magicpath-id="3" data-magicpath-path="Dashboard.tsx">
            <Skeleton className="h-6 w-32" data-magicpath-id="4" data-magicpath-path="Dashboard.tsx" />
          </CardHeader>
          <CardContent data-magicpath-id="5" data-magicpath-path="Dashboard.tsx">
            <Skeleton className="h-12 w-24" data-magicpath-id="6" data-magicpath-path="Dashboard.tsx" />
          </CardContent>
        </Card> : <Card className="mb-8 bg-card/50" data-magicpath-id="7" data-magicpath-path="Dashboard.tsx">
          <CardHeader data-magicpath-id="8" data-magicpath-path="Dashboard.tsx">
            <CardTitle className="text-lg font-medium text-muted-foreground" data-magicpath-id="9" data-magicpath-path="Dashboard.tsx">Total Videos</CardTitle>
          </CardHeader>
          <CardContent data-magicpath-id="10" data-magicpath-path="Dashboard.tsx">
            <p className="text-5xl font-bold text-primary" data-magicpath-id="11" data-magicpath-path="Dashboard.tsx">{data?.totalVideos}</p>
          </CardContent>
        </Card>}

      <div className="space-y-4" data-magicpath-id="12" data-magicpath-path="Dashboard.tsx">
        <h2 className="text-2xl font-semibold text-foreground" data-magicpath-id="13" data-magicpath-path="Dashboard.tsx">Categories</h2>
        {isLoading ? Array.from({
        length: 6
      }).map((_, i) => <Card key={i} className="p-4" data-magicpath-id="14" data-magicpath-path="Dashboard.tsx">
              <div className="flex items-center justify-between" data-magicpath-id="15" data-magicpath-path="Dashboard.tsx">
                <div className="flex items-center gap-4" data-magicpath-id="16" data-magicpath-path="Dashboard.tsx">
                  <Skeleton className="h-8 w-8 rounded-full" data-magicpath-id="17" data-magicpath-path="Dashboard.tsx" />
                  <Skeleton className="h-6 w-40" data-magicpath-id="18" data-magicpath-path="Dashboard.tsx" />
                </div>
                <Skeleton className="h-6 w-16" data-magicpath-id="19" data-magicpath-path="Dashboard.tsx" />
              </div>
            </Card>) : data?.categories.map(category => <Collapsible key={category.name} open={openCategory === category.name} onOpenChange={() => handleOpenChange(category.name)} className="w-full" data-magicpath-id="20" data-magicpath-path="Dashboard.tsx">
              <Card className="border transition-all duration-300 hover:border-primary/50" data-magicpath-id="21" data-magicpath-path="Dashboard.tsx">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between cursor-pointer" data-magicpath-id="22" data-magicpath-path="Dashboard.tsx">
                  <div className="flex items-center gap-4" data-magicpath-id="23" data-magicpath-path="Dashboard.tsx">
                    <category.icon className="h-6 w-6 text-primary" data-magicpath-id="24" data-magicpath-path="Dashboard.tsx" />
                    <span className="text-lg font-medium text-foreground" data-magicpath-id="25" data-magicpath-path="Dashboard.tsx">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-4" data-magicpath-id="26" data-magicpath-path="Dashboard.tsx">
                    <span className="text-lg font-semibold text-muted-foreground" data-magicpath-id="27" data-magicpath-path="Dashboard.tsx">{category.count}</span>
                    <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform duration-300", openCategory === category.name && "rotate-180")} data-magicpath-id="28" data-magicpath-path="Dashboard.tsx" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4" data-magicpath-id="29" data-magicpath-path="Dashboard.tsx">
                  <div className="border-t border-border/50 pt-4" data-magicpath-id="30" data-magicpath-path="Dashboard.tsx">
                    {category.videos.length > 0 ? <ul className="space-y-2" data-magicpath-id="31" data-magicpath-path="Dashboard.tsx">
                        {category.videos.map(video => <li key={video.id} className="flex justify-between items-center p-2 rounded-md hover:bg-accent" data-magicpath-id="32" data-magicpath-path="Dashboard.tsx">
                            <span className="text-sm text-foreground" data-magicpath-id="33" data-magicpath-path="Dashboard.tsx">{video.title}</span>
                            <span className="text-sm text-muted-foreground" data-magicpath-id="34" data-magicpath-path="Dashboard.tsx">{video.duration}</span>
                          </li>)}
                      </ul> : <p className="text-sm text-muted-foreground text-center py-4" data-magicpath-id="35" data-magicpath-path="Dashboard.tsx">No videos in this category yet.</p>}
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>)}
      </div>
    </div>;
}