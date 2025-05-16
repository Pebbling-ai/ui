
import React from "react";
import { Clock, Calendar, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "current" | "upcoming";
  isLast?: boolean;
  isFirst?: boolean;
}

const TimelineItem = ({ date, title, description, icon, status, isLast = false, isFirst = false }: TimelineItemProps) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        {isFirst && (
          <div 
            className={cn(
              "w-0.5 h-8 mb-2",
              status === "completed" ? "bg-pulse-500" : 
              status === "current" ? "bg-gradient-to-t from-pulse-500 to-gray-300" : 
              "bg-gray-300"
            )}
          />
        )}
        <div 
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full z-10",
            status === "completed" ? "bg-pulse-500 text-white" : 
            status === "current" ? "bg-white border-2 border-pulse-500 text-pulse-500" : 
            "bg-gray-100 border-2 border-gray-300 text-gray-400"
          )}
        >
          {icon}
        </div>
        {!isLast && (
          <div 
            className={cn(
              "w-0.5 h-full mt-2",
              status === "completed" ? "bg-pulse-500" : 
              status === "current" ? "bg-gradient-to-b from-pulse-500 to-gray-300" : 
              "bg-gray-300"
            )}
          />
        )}
      </div>
      <div className={cn(
        "pb-8",
        isLast ? "pb-0" : "",
        "group"
      )}>
        <time className="text-sm text-black mb-1">{date}</time>
        <h3 className={cn(
          "text-lg font-semibold mb-2 transition-colors duration-300 ",
          status === "upcoming" && "text-black"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-black",
          status === "upcoming" && "text-gray-400"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};

const ProductTimeline = () => {
  return (
    <section className="py-16 bg-white animate-on-scroll opacity-0" id="roadmap">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Product Launch Timeline</h2>
          <p className="section-subtitle mx-auto">
            Our step-by-step journey to revolutionize AI communication with Pebble
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            <TimelineItem 
              date="April 2024"
              title="Research & Planning"
              description="Initial research phase and protocol design specifications, establishing the foundation for Pebble's capabilities."
              icon={<Clock className="h-5 w-5" />}
              status="upcoming"
              isFirst={true}
            />
            
            <TimelineItem 
              date="May 2024"
              title="Alpha Release"
              description="Private release to select partners. Initial implementation of mTLS security and core protocol features."
              icon={<Clock className="h-5 w-5" />}
              status="upcoming"
            />
            
            <TimelineItem 
              date="June 2024"
              title="Beta Launch"
              description="Public beta with expanded features including framework adapters and improved developer tools."
              icon={<Clock className="h-5 w-5" />}
              status="upcoming"
            />
            
            <TimelineItem 
              date="August 2024"
              title="Developer SDK"
              description="Launch of comprehensive SDK with documentation, examples, and plugins for popular frameworks."
              icon={<Calendar className="h-5 w-5" />}
              status="upcoming"
            />
            
            <TimelineItem 
              date="Q4 2024"
              title="Enterprise Release"
              description="Full production release with SLAs, advanced security features, and enterprise support plans."
              icon={<Calendar className="h-5 w-5" />}
              status="upcoming"
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTimeline;
