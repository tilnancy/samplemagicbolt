"use client";

import * as React from "react";
import { useState } from "react";
import { Check, Loader2, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
export interface ApprovalVideo {
  id: string;
  title: string;
  category: string;
  thumbnailUrl?: string;
}
export interface ApprovalProps {
  className?: string;
}
const demoApprovalData: ApprovalVideo[] = [{
  id: "v1",
  title: "Understanding Quantum Computing",
  category: "Educational"
}, {
  id: "v2",
  title: "Live Q&A with AI Experts",
  category: "Interviews"
}, {
  id: "v3",
  title: "Latest AI Model Release",
  category: "News and Updates"
}, {
  id: "v4",
  title: "Advanced Prompting Techniques",
  category: "Prompt Engineering"
}, {
  id: "v5",
  title: "AI in Drug Discovery",
  category: "Practical Applications of AI"
}, {
  id: "v6",
  title: "Figma Plugins for Designers",
  category: "Tools"
}, {
  id: "v7",
  title: "A Deep Dive into Neural Networks",
  category: "Educational"
}];
export default function Approval({
  className
}: ApprovalProps) {
  const [videos, setVideos] = useState<ApprovalVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [approving, setApproving] = useState<string | null>(null);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(demoApprovalData);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const handleApprove = (videoId: string) => {
    setApproving(videoId);
    setTimeout(() => {
      setVideos(prev => prev.filter(v => v.id !== videoId));
      setApproving(null);
    }, 1000);
  };
  const videosByCategory = videos.reduce((acc, video) => {
    (acc[video.category] = acc[video.category] || []).push(video);
    return acc;
  }, {} as Record<string, ApprovalVideo[]>);
  return <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12", className)}>
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8">Approval Queue</h1>
      
      {isLoading ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({
        length: 6
      }).map((_, i) => <Card key={i}>
              <CardHeader>
                <Skeleton className="h-40 w-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/4" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>)}
        </div> : Object.keys(videosByCategory).length > 0 ? <div className="space-y-12">
          {Object.entries(videosByCategory).map(([category, categoryVideos]) => <section key={category}>
              <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-2">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryVideos.map(video => <Card key={video.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        {video.thumbnailUrl ? <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" /> : <Video className="h-12 w-12 text-muted-foreground/50" />}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-4">
                      <CardTitle className="text-base font-semibold leading-snug mb-2">{video.title}</CardTitle>
                      <Badge variant="secondary">{video.category}</Badge>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full" onClick={() => handleApprove(video.id)} disabled={approving === video.id}>
                        {approving === video.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Check className="mr-2 h-4 w-4" />}
                        Approve
                      </Button>
                    </CardFooter>
                  </Card>)}
              </div>
            </section>)}
        </div> : <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-foreground">All clear!</h2>
          <p className="text-muted-foreground mt-2">There are no videos pending approval.</p>
        </div>}
    </div>;
}