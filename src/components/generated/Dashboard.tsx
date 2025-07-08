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
}
export interface Category {
  name: string;
  icon: React.ElementType;
  count: number;
  videos: VideoItem[];
}
export interface DashboardData {
  totalVideos: number;
  categories: Category[];
}
export interface DashboardProps {
  className?: string;
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
      duration: "45:12"
    }, {
      id: "2",
      title: "The Future of Work",
      duration: "30:05"
    }]
  }, {
    name: "Educational",
    icon: BookOpen,
    count: 42,
    videos: [{
      id: "3",
      title: "React Hooks Explained",
      duration: "22:40"
    }]
  }, {
    name: "News and Updates",
    icon: Newspaper,
    count: 23,
    videos: []
  }, {
    name: "Prompt Engineering",
    icon: BrainCircuit,
    count: 18,
    videos: []
  }, {
    name: "Practical Applications of AI",
    icon: Lightbulb,
    count: 20,
    videos: []
  }, {
    name: "Tools",
    icon: Wrench,
    count: 7,
    videos: []
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
  return <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12", className)}>
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8">Dashboard</h1>
      
      {isLoading ? <Card className="mb-8">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-12 w-24" />
          </CardContent>
        </Card> : <Card className="mb-8 bg-card/50">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-muted-foreground">Total Videos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-primary">{data?.totalVideos}</p>
          </CardContent>
        </Card>}

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Categories</h2>
        {isLoading ? Array.from({
        length: 6
      }).map((_, i) => <Card key={i} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-6 w-40" />
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
            </Card>) : data?.categories.map(category => <Collapsible key={category.name} open={openCategory === category.name} onOpenChange={() => handleOpenChange(category.name)} className="w-full">
              <Card className="border transition-all duration-300 hover:border-primary/50">
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <category.icon className="h-6 w-6 text-primary" />
                    <span className="text-lg font-medium text-foreground">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-muted-foreground">{category.count}</span>
                    <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform duration-300", openCategory === category.name && "rotate-180")} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <div className="border-t border-border/50 pt-4">
                    {category.videos.length > 0 ? <ul className="space-y-2">
                        {category.videos.map(video => <li key={video.id} className="flex justify-between items-center p-2 rounded-md hover:bg-accent">
                            <span className="text-sm text-foreground">{video.title}</span>
                            <span className="text-sm text-muted-foreground">{video.duration}</span>
                          </li>)}
                      </ul> : <p className="text-sm text-muted-foreground text-center py-4">No videos in this category yet.</p>}
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>)}
      </div>
    </div>;
}