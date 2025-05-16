
import React from "react";
import { Clock, Calendar, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "current" | "upcoming";
  isLast?: boolean;
}

const TimelineItem = ({ date, title, description, icon, status, isLast = false }: TimelineItemProps) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
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
        <time className="text-sm text-gray-500 mb-1">{date}</time>
        <h3 className={cn(
          "text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-pulse-500",
          status === "upcoming" && "text-gray-500"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-gray-600",
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
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-0">
            <TimelineItem 
              date="May 2024"
              title="Alpha Release"
              description="Private release to select partners. Initial implementation of mTLS security and core protocol features."
              icon={<Star className="h-5 w-5" />}
              status="completed"
            />
            
            <TimelineItem 
              date="June 2024"
              title="Beta Launch"
              description="Public beta with expanded features including framework adapters and improved developer tools."
              icon={<Clock className="h-5 w-5" />}
              status="current"
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
