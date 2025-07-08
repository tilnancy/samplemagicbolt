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
  mpid?: string;
}
export interface TabbedContentProps {
  data?: VideoData;
  isLoading?: boolean;
  className?: string;
  mpid?: string;
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
  }) => <div className="flex flex-col items-center justify-center h-64 text-center px-4" data-magicpath-id="0" data-magicpath-path="TabbedContent.tsx">
      <Icon className="h-12 w-12 text-muted-foreground/50 mb-4" data-magicpath-id="1" data-magicpath-path="TabbedContent.tsx" />
      <h3 className="text-lg font-semibold text-foreground mb-2" data-magicpath-id="2" data-magicpath-path="TabbedContent.tsx">{title}</h3>
      <p className="text-muted-foreground max-w-sm" data-magicpath-id="3" data-magicpath-path="TabbedContent.tsx">{description}</p>
    </div>;
  const LoadingState = () => <div className="flex items-center justify-center h-64" data-magicpath-id="4" data-magicpath-path="TabbedContent.tsx">
      <div className="text-center" data-magicpath-id="5" data-magicpath-path="TabbedContent.tsx">
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" data-magicpath-id="6" data-magicpath-path="TabbedContent.tsx" />
        <p className="text-muted-foreground" data-magicpath-id="7" data-magicpath-path="TabbedContent.tsx">Processing your video...</p>
      </div>
    </div>;
  return <section className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12", className)} data-magicpath-id="8" data-magicpath-path="TabbedContent.tsx">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" data-magicpath-id="9" data-magicpath-path="TabbedContent.tsx">
        <TabsList className="grid w-full grid-cols-3 mb-8 h-12 bg-muted/50 rounded-xl p-1" data-magicpath-id="10" data-magicpath-path="TabbedContent.tsx">
          <TabsTrigger value="transcript" className="flex items-center gap-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm" data-magicpath-id="11" data-magicpath-path="TabbedContent.tsx">
            <FileText className="h-4 w-4" data-magicpath-id="12" data-magicpath-path="TabbedContent.tsx" />
            <span className="hidden sm:inline" data-magicpath-id="13" data-magicpath-path="TabbedContent.tsx">Transcript</span>
          </TabsTrigger>
          <TabsTrigger value="metadata" className="flex items-center gap-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm" data-magicpath-id="14" data-magicpath-path="TabbedContent.tsx">
            <Video className="h-4 w-4" />
            <span className="hidden sm:inline" data-magicpath-id="15" data-magicpath-path="TabbedContent.tsx">Metadata</span>
          </TabsTrigger>
          <TabsTrigger value="output" className="flex items-center gap-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-background data-[state=active]:shadow-sm" data-magicpath-id="16" data-magicpath-path="TabbedContent.tsx">
            <Lightbulb className="h-4 w-4" data-magicpath-id="17" data-magicpath-path="TabbedContent.tsx" />
            <span className="hidden sm:inline" data-magicpath-id="18" data-magicpath-path="TabbedContent.tsx">Output</span>
          </TabsTrigger>
        </TabsList>

        <div className="bg-card border border-border rounded-xl shadow-sm" data-magicpath-id="19" data-magicpath-path="TabbedContent.tsx">
          <TabsContent value="transcript" className="m-0 p-0" data-magicpath-id="20" data-magicpath-path="TabbedContent.tsx">
            <Card className="border-0 shadow-none" data-magicpath-id="21" data-magicpath-path="TabbedContent.tsx">
              <CardHeader className="pb-4" data-magicpath-id="22" data-magicpath-path="TabbedContent.tsx">
                <CardTitle className="flex items-center gap-2 text-xl" data-magicpath-id="23" data-magicpath-path="TabbedContent.tsx">
                  <FileText className="h-5 w-5 text-primary" data-magicpath-id="24" data-magicpath-path="TabbedContent.tsx" />
                  Video Transcript
                </CardTitle>
              </CardHeader>
              <CardContent data-magicpath-id="25" data-magicpath-path="TabbedContent.tsx">
                {isLoading ? <LoadingState data-magicpath-id="26" data-magicpath-path="TabbedContent.tsx" /> : data?.transcript ? <ScrollArea className="h-96 w-full rounded-lg border bg-muted/20 p-4" data-magicpath-id="27" data-magicpath-path="TabbedContent.tsx">
                    <article className="prose prose-sm max-w-none text-foreground" data-magicpath-id="28" data-magicpath-path="TabbedContent.tsx">
                      <p className="leading-relaxed whitespace-pre-wrap" data-magicpath-id="29" data-magicpath-path="TabbedContent.tsx">
                        {data.transcript}
                      </p>
                    </article>
                  </ScrollArea> : <EmptyState icon={FileText} title="No transcript available" description="Submit a video URL to generate a transcript with AI-powered speech recognition." data-magicpath-id="30" data-magicpath-path="TabbedContent.tsx" />}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metadata" className="m-0 p-0" data-magicpath-id="31" data-magicpath-path="TabbedContent.tsx">
            <Card className="border-0 shadow-none" data-magicpath-id="32" data-magicpath-path="TabbedContent.tsx">
              <CardHeader className="pb-4" data-magicpath-id="33" data-magicpath-path="TabbedContent.tsx">
                <CardTitle className="flex items-center gap-2 text-xl" data-magicpath-id="34" data-magicpath-path="TabbedContent.tsx">
                  <Video className="h-5 w-5 text-primary" />
                  Video Details
                </CardTitle>
              </CardHeader>
              <CardContent data-magicpath-id="35" data-magicpath-path="TabbedContent.tsx">
                {isLoading ? <div className="space-y-4" data-magicpath-id="36" data-magicpath-path="TabbedContent.tsx">
                    <div className="space-y-2" data-magicpath-id="37" data-magicpath-path="TabbedContent.tsx">
                      <Skeleton className="h-4 w-20" data-magicpath-id="38" data-magicpath-path="TabbedContent.tsx" />
                      <Skeleton className="h-6 w-full" data-magicpath-id="39" data-magicpath-path="TabbedContent.tsx" />
                    </div>
                    <div className="space-y-2" data-magicpath-id="40" data-magicpath-path="TabbedContent.tsx">
                      <Skeleton className="h-4 w-24" data-magicpath-id="41" data-magicpath-path="TabbedContent.tsx" />
                      <Skeleton className="h-6 w-3/4" data-magicpath-id="42" data-magicpath-path="TabbedContent.tsx" />
                    </div>
                    <div className="space-y-2" data-magicpath-id="43" data-magicpath-path="TabbedContent.tsx">
                      <Skeleton className="h-4 w-20" data-magicpath-id="44" data-magicpath-path="TabbedContent.tsx" />
                      <Skeleton className="h-20 w-full" data-magicpath-id="45" data-magicpath-path="TabbedContent.tsx" />
                    </div>
                  </div> : data?.metadata ? <ScrollArea className="h-96 w-full" data-magicpath-id="46" data-magicpath-path="TabbedContent.tsx">
                    <dl className="space-y-6" data-magicpath-id="47" data-magicpath-path="TabbedContent.tsx">
                      <div data-magicpath-id="48" data-magicpath-path="TabbedContent.tsx">
                        <dt className="text-sm font-medium text-muted-foreground mb-2" data-magicpath-id="49" data-magicpath-path="TabbedContent.tsx">Title</dt>
                        <dd className="text-lg font-semibold text-foreground leading-relaxed" data-magicpath-id="50" data-magicpath-path="TabbedContent.tsx">
                          {data.metadata.title}
                        </dd>
                      </div>
                      
                      <div data-magicpath-id="51" data-magicpath-path="TabbedContent.tsx">
                        <dt className="text-sm font-medium text-muted-foreground mb-2" data-magicpath-id="52" data-magicpath-path="TabbedContent.tsx">Channel</dt>
                        <dd className="text-base text-foreground" data-magicpath-id="53" data-magicpath-path="TabbedContent.tsx">
                          {data.metadata.channel}
                        </dd>
                      </div>
                      
                      <div data-magicpath-id="54" data-magicpath-path="TabbedContent.tsx">
                        <dt className="text-sm font-medium text-muted-foreground mb-2" data-magicpath-id="55" data-magicpath-path="TabbedContent.tsx">Published</dt>
                        <dd className="text-base text-foreground" data-magicpath-id="56" data-magicpath-path="TabbedContent.tsx">
                          {data.metadata.date}
                        </dd>
                      </div>
                      
                      {data.metadata.duration && <div data-magicpath-id="57" data-magicpath-path="TabbedContent.tsx">
                          <dt className="text-sm font-medium text-muted-foreground mb-2" data-magicpath-id="58" data-magicpath-path="TabbedContent.tsx">Duration</dt>
                          <dd className="text-base text-foreground" data-magicpath-id="59" data-magicpath-path="TabbedContent.tsx">
                            {data.metadata.duration}
                          </dd>
                        </div>}
                      
                      {data.metadata.views && <div data-magicpath-id="60" data-magicpath-path="TabbedContent.tsx">
                          <dt className="text-sm font-medium text-muted-foreground mb-2" data-magicpath-id="61" data-magicpath-path="TabbedContent.tsx">Views</dt>
                          <dd className="text-base text-foreground" data-magicpath-id="62" data-magicpath-path="TabbedContent.tsx">
                            {data.metadata.views}
                          </dd>
                        </div>}
                      
                      <div data-magicpath-id="63" data-magicpath-path="TabbedContent.tsx">
                        <dt className="text-sm font-medium text-muted-foreground mb-2" data-magicpath-id="64" data-magicpath-path="TabbedContent.tsx">Summary</dt>
                        <dd className="text-base text-foreground leading-relaxed" data-magicpath-id="65" data-magicpath-path="TabbedContent.tsx">
                          {data.metadata.summary}
                        </dd>
                      </div>
                    </dl>
                  </ScrollArea> : <EmptyState icon={Video} title="No metadata available" description="Submit a video URL to extract detailed metadata and information." data-magicpath-id="66" data-magicpath-path="TabbedContent.tsx" />}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="output" className="m-0 p-0" data-magicpath-id="67" data-magicpath-path="TabbedContent.tsx">
            <Card className="border-0 shadow-none" data-magicpath-id="68" data-magicpath-path="TabbedContent.tsx">
              <CardHeader className="pb-4" data-magicpath-id="69" data-magicpath-path="TabbedContent.tsx">
                <CardTitle className="flex items-center gap-2 text-xl" data-magicpath-id="70" data-magicpath-path="TabbedContent.tsx">
                  <Lightbulb className="h-5 w-5 text-primary" data-magicpath-id="71" data-magicpath-path="TabbedContent.tsx" />
                  AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent data-magicpath-id="72" data-magicpath-path="TabbedContent.tsx">
                {isLoading ? <LoadingState data-magicpath-id="73" data-magicpath-path="TabbedContent.tsx" /> : data?.output ? <ScrollArea className="h-96 w-full" data-magicpath-id="74" data-magicpath-path="TabbedContent.tsx">
                    <div className="space-y-6" data-magicpath-id="75" data-magicpath-path="TabbedContent.tsx">
                      <div data-magicpath-id="76" data-magicpath-path="TabbedContent.tsx">
                        <h3 className="text-lg font-semibold text-foreground mb-3" data-magicpath-id="77" data-magicpath-path="TabbedContent.tsx">
                          Content Type: {data.output.classification}
                        </h3>
                      </div>
                      
                      {data.output.takeaways && data.output.takeaways.length > 0 && <div data-magicpath-id="78" data-magicpath-path="TabbedContent.tsx">
                          <h4 className="text-base font-medium text-foreground mb-3" data-magicpath-id="79" data-magicpath-path="TabbedContent.tsx">Key Takeaways</h4>
                          <ul className="space-y-2" data-magicpath-id="80" data-magicpath-path="TabbedContent.tsx">
                            {data.output.takeaways.map((takeaway, index) => <li key={index} className="flex items-start gap-3" data-magicpath-id="81" data-magicpath-path="TabbedContent.tsx">
                                <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" data-magicpath-id="82" data-magicpath-path="TabbedContent.tsx" />
                                <span className="text-foreground leading-relaxed" data-magicpath-id="83" data-magicpath-path="TabbedContent.tsx">{takeaway}</span>
                              </li>)}
                          </ul>
                        </div>}
                      
                      {data.output.insights && data.output.insights.length > 0 && <div data-magicpath-id="84" data-magicpath-path="TabbedContent.tsx">
                          <h4 className="text-base font-medium text-foreground mb-3" data-magicpath-id="85" data-magicpath-path="TabbedContent.tsx">Insights</h4>
                          <ul className="space-y-2" data-magicpath-id="86" data-magicpath-path="TabbedContent.tsx">
                            {data.output.insights.map((insight, index) => <li key={index} className="flex items-start gap-3" data-magicpath-id="87" data-magicpath-path="TabbedContent.tsx">
                                <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" data-magicpath-id="88" data-magicpath-path="TabbedContent.tsx" />
                                <span className="text-foreground leading-relaxed" data-magicpath-id="89" data-magicpath-path="TabbedContent.tsx">{insight}</span>
                              </li>)}
                          </ul>
                        </div>}
                    </div>
                  </ScrollArea> : <EmptyState icon={Lightbulb} title="No analysis available" description="Submit a video URL to get AI-powered insights and key takeaways." data-magicpath-id="90" data-magicpath-path="TabbedContent.tsx" />}
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </section>;
}