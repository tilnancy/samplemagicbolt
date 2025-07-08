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
  mpid?: string;
}
export interface ApprovalProps {
  className?: string;
  mpid?: string;
}
const demoApprovalData: ApprovalVideo[] = [{
  id: "v1",
  title: "Understanding Quantum Computing",
  category: "Educational",
  mpid: "9eee4a2c-4c5f-4373-8d41-95d19e94e571"
}, {
  id: "v2",
  title: "Live Q&A with AI Experts",
  category: "Interviews",
  mpid: "8b858d6c-9ad4-4c40-b70e-d9b2f5fa97c5"
}, {
  id: "v3",
  title: "Latest AI Model Release",
  category: "News and Updates",
  mpid: "65102be0-900c-409d-9a2a-f41d6ecdbe48"
}, {
  id: "v4",
  title: "Advanced Prompting Techniques",
  category: "Prompt Engineering",
  mpid: "1fb14379-e8d9-47f3-8d90-e0c2d88526c8"
}, {
  id: "v5",
  title: "AI in Drug Discovery",
  category: "Practical Applications of AI",
  mpid: "0da399ef-817d-4a8d-a491-87bfacdb5aa5"
}, {
  id: "v6",
  title: "Figma Plugins for Designers",
  category: "Tools",
  mpid: "f3f4fa83-b3c9-475e-83d0-31a6413273b4"
}, {
  id: "v7",
  title: "A Deep Dive into Neural Networks",
  category: "Educational",
  mpid: "180d31ab-1497-4fe4-94b4-1512e8c6abd5"
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
  return <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12", className)} data-magicpath-id="0" data-magicpath-path="Approval.tsx">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8" data-magicpath-id="1" data-magicpath-path="Approval.tsx">Approval Queue</h1>
      
      {isLoading ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="2" data-magicpath-path="Approval.tsx">
          {Array.from({
        length: 6
      }).map((_, i) => <Card key={i} data-magicpath-id="3" data-magicpath-path="Approval.tsx">
              <CardHeader data-magicpath-id="4" data-magicpath-path="Approval.tsx">
                <Skeleton className="h-40 w-full" data-magicpath-id="5" data-magicpath-path="Approval.tsx" />
              </CardHeader>
              <CardContent data-magicpath-id="6" data-magicpath-path="Approval.tsx">
                <Skeleton className="h-5 w-3/4 mb-2" data-magicpath-id="7" data-magicpath-path="Approval.tsx" />
                <Skeleton className="h-4 w-1/4" data-magicpath-id="8" data-magicpath-path="Approval.tsx" />
              </CardContent>
              <CardFooter data-magicpath-id="9" data-magicpath-path="Approval.tsx">
                <Skeleton className="h-10 w-full" data-magicpath-id="10" data-magicpath-path="Approval.tsx" />
              </CardFooter>
            </Card>)}
        </div> : Object.keys(videosByCategory).length > 0 ? <div className="space-y-12" data-magicpath-id="11" data-magicpath-path="Approval.tsx">
          {Object.entries(videosByCategory).map(([category, categoryVideos]) => <section key={category} data-magicpath-id="12" data-magicpath-path="Approval.tsx">
              <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-2" data-magicpath-id="13" data-magicpath-path="Approval.tsx">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-magicpath-id="14" data-magicpath-path="Approval.tsx">
                {categoryVideos.map(video => <Card key={video.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="Approval.tsx">
                    <CardHeader className="p-0" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="Approval.tsx">
                      <div className="aspect-video bg-muted flex items-center justify-center" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="Approval.tsx">
                        {video.thumbnailUrl ? <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-field="thumbnailUrl:unknown" data-magicpath-id="18" data-magicpath-path="Approval.tsx" /> : <Video className="h-12 w-12 text-muted-foreground/50" />}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-4" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="Approval.tsx">
                      <CardTitle className="text-base font-semibold leading-snug mb-2" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="20" data-magicpath-path="Approval.tsx">{video.title}</CardTitle>
                      <Badge variant="secondary" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="21" data-magicpath-path="Approval.tsx">{video.category}</Badge>
                    </CardContent>
                    <CardFooter className="p-4 pt-0" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="Approval.tsx">
                      <Button className="w-full" onClick={() => handleApprove(video.id)} disabled={approving === video.id} data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="Approval.tsx">
                        {approving === video.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="Approval.tsx" /> : <Check className="mr-2 h-4 w-4" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="Approval.tsx" />}
                        Approve
                      </Button>
                    </CardFooter>
                  </Card>)}
              </div>
            </section>)}
        </div> : <div className="text-center py-20" data-magicpath-id="26" data-magicpath-path="Approval.tsx">
          <h2 className="text-2xl font-semibold text-foreground" data-magicpath-id="27" data-magicpath-path="Approval.tsx">All clear!</h2>
          <p className="text-muted-foreground mt-2" data-magicpath-id="28" data-magicpath-path="Approval.tsx">There are no videos pending approval.</p>
        </div>}
    </div>;
}