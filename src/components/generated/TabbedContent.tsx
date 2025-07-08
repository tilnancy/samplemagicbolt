"use client";

import * as React from "react";
import { useState } from "react";
import { FileText, Video, Lightbulb, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export interface VideoData {
  transcript?: string;
  metadata?: {
    title: string;
    channel: string;
    summary: string;
    date: string;
    duration?: string;
    views?: string;
  };
  output?: {
    classification: string;
    takeaways: string[];
    insights: string[];
  };
}
export interface TabbedContentProps {
  data?: VideoData;
  isLoading?: boolean;
  className?: string;
}
export default function TabbedContent({
  data,
  isLoading = false,
  className
}: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState("transcript");
  const EmptyState = ({
    icon: Icon,
    title,
    description
  }: {
    icon: React.ComponentType<{
      className?: string;
    }>;
    title: string;
    description: string;
  }) => <div className="flex flex-col items-center justify-center h-64 text-center px-4">
      <Icon className="h-12 w-12 text-muted-foreground/50 mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm">{description}</p>
    </div>;
  const LoadingState = () => <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Processing your video...</p>
      </div>
    </div>;
  return <section className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12", className)}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 h-12 bg-muted/50 rounded-xl p-1">
          <TabsTrigger value="transcript" className="flex items-center gap-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Transcript</span>
          </TabsTrigger>
          <TabsTrigger value="metadata" className="flex items-center gap-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Video className="h-4 w-4" />
            <span className="hidden sm:inline">Metadata</span>
          </TabsTrigger>
          <TabsTrigger value="output" className="flex items-center gap-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Lightbulb className="h-4 w-4" />
            <span className="hidden sm:inline">Output</span>
          </TabsTrigger>
        </TabsList>

        <div className="bg-card border border-border rounded-xl shadow-sm">
          <TabsContent value="transcript" className="m-0 p-0">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <FileText className="h-5 w-5 text-primary" />
                  Video Transcript
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? <LoadingState /> : data?.transcript ? <ScrollArea className="h-96 w-full rounded-lg border bg-muted/20 p-4">
                    <article className="prose prose-sm max-w-none text-foreground">
                      <p className="leading-relaxed whitespace-pre-wrap">
                        {data.transcript}
                      </p>
                    </article>
                  </ScrollArea> : <EmptyState icon={FileText} title="No transcript available" description="Submit a video URL to generate a transcript with AI-powered speech recognition." />}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metadata" className="m-0 p-0">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Video className="h-5 w-5 text-primary" />
                  Video Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? <div className="space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-6 w-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-6 w-3/4" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-20 w-full" />
                    </div>
                  </div> : data?.metadata ? <ScrollArea className="h-96 w-full">
                    <dl className="space-y-6">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground mb-2">Title</dt>
                        <dd className="text-lg font-semibold text-foreground leading-relaxed">
                          {data.metadata.title}
                        </dd>
                      </div>
                      
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground mb-2">Channel</dt>
                        <dd className="text-base text-foreground">
                          {data.metadata.channel}
                        </dd>
                      </div>
                      
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground mb-2">Published</dt>
                        <dd className="text-base text-foreground">
                          {data.metadata.date}
                        </dd>
                      </div>
                      
                      {data.metadata.duration && <div>
                          <dt className="text-sm font-medium text-muted-foreground mb-2">Duration</dt>
                          <dd className="text-base text-foreground">
                            {data.metadata.duration}
                          </dd>
                        </div>}
                      
                      {data.metadata.views && <div>
                          <dt className="text-sm font-medium text-muted-foreground mb-2">Views</dt>
                          <dd className="text-base text-foreground">
                            {data.metadata.views}
                          </dd>
                        </div>}
                      
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground mb-2">Summary</dt>
                        <dd className="text-base text-foreground leading-relaxed">
                          {data.metadata.summary}
                        </dd>
                      </div>
                    </dl>
                  </ScrollArea> : <EmptyState icon={Video} title="No metadata available" description="Submit a video URL to extract detailed metadata and information." />}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="output" className="m-0 p-0">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? <LoadingState /> : data?.output ? <ScrollArea className="h-96 w-full">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Content Type: {data.output.classification}
                        </h3>
                      </div>
                      
                      {data.output.takeaways && data.output.takeaways.length > 0 && <div>
                          <h4 className="text-base font-medium text-foreground mb-3">Key Takeaways</h4>
                          <ul className="space-y-2">
                            {data.output.takeaways.map((takeaway, index) => <li key={index} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                                <span className="text-foreground leading-relaxed">{takeaway}</span>
                              </li>)}
                          </ul>
                        </div>}
                      
                      {data.output.insights && data.output.insights.length > 0 && <div>
                          <h4 className="text-base font-medium text-foreground mb-3">Insights</h4>
                          <ul className="space-y-2">
                            {data.output.insights.map((insight, index) => <li key={index} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
                                <span className="text-foreground leading-relaxed">{insight}</span>
                              </li>)}
                          </ul>
                        </div>}
                    </div>
                  </ScrollArea> : <EmptyState icon={Lightbulb} title="No analysis available" description="Submit a video URL to get AI-powered insights and key takeaways." />}
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </section>;
}