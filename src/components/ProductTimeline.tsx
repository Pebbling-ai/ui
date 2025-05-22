
import React, { useEffect, useState } from "react";
import { Clock, Calendar, Star, Sparkles, Rocket, Shield, Fingerprint, Code, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string | React.ReactNode;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "current" | "upcoming";
  isLast?: boolean;
  isFirst?: boolean;
  accentColor: string;
}

const TimelineItem = ({ 
  date, 
  title, 
  description, 
  icon, 
  status, 
  isLast = false, 
  isFirst = false, 
  accentColor 
}: TimelineItemProps) => {
  const getIconBackgroundClass = () => {
    const baseClasses = "flex items-center justify-center w-12 h-12 rounded-full z-10 shadow-md transition-all duration-300";
    
    switch (status) {
      case "completed":
        if (accentColor === "bg-green") return `${baseClasses} bg-green-500 text-white`;
        if (accentColor === "bg-emerald") return `${baseClasses} bg-emerald-500 text-white`;
        if (accentColor === "bg-blue") return `${baseClasses} bg-blue-500 text-white`;
        if (accentColor === "bg-pink") return `${baseClasses} bg-pink-500 text-white`;
        if (accentColor === "bg-purple") return `${baseClasses} bg-purple-500 text-white`;
        return `${baseClasses} bg-blue-500 text-white`;
      case "current":
        if (accentColor === "bg-green") return `${baseClasses} bg-white border-2 border-green-500 text-green-500`;
        if (accentColor === "bg-emerald") return `${baseClasses} bg-white border-2 border-emerald-500 text-emerald-500`;
        if (accentColor === "bg-blue") return `${baseClasses} bg-white border-2 border-blue-500 text-blue-500`;
        if (accentColor === "bg-pink") return `${baseClasses} bg-white border-2 border-pink-500 text-pink-500`;
        if (accentColor === "bg-purple") return `${baseClasses} bg-white border-2 border-purple-500 text-purple-500`;
        return `${baseClasses} bg-white border-2 border-blue-500 text-blue-500`;
      case "upcoming":
        return `${baseClasses} bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500`;
      default:
        return baseClasses;
    }
  };
  
  const getLineClass = (direction: "top" | "bottom") => {
    const baseClass = "w-0.5";
    const heightClass = direction === "top" ? "h-8 mb-2" : "h-full mt-2";
    
    switch (status) {
      case "completed":
        if (accentColor === "bg-green") return `${baseClass} ${heightClass} bg-gradient-to-b from-green-500 to-green-400`;
        if (accentColor === "bg-emerald") return `${baseClass} ${heightClass} bg-gradient-to-b from-emerald-500 to-emerald-400`;
        if (accentColor === "bg-blue") return `${baseClass} ${heightClass} bg-gradient-to-b from-blue-500 to-blue-400`;
        if (accentColor === "bg-pink") return `${baseClass} ${heightClass} bg-gradient-to-b from-pink-500 to-pink-400`;
        if (accentColor === "bg-purple") return `${baseClass} ${heightClass} bg-gradient-to-b from-purple-500 to-purple-400`;
        return `${baseClass} ${heightClass} bg-gradient-to-b from-blue-500 to-blue-400`;
      case "current":
        if (accentColor === "bg-green") return `${baseClass} ${heightClass} bg-gradient-to-${direction === "top" ? "t" : "b"} from-green-500 to-gray-300 dark:to-gray-700`;
        if (accentColor === "bg-emerald") return `${baseClass} ${heightClass} bg-gradient-to-${direction === "top" ? "t" : "b"} from-emerald-500 to-gray-300 dark:to-gray-700`;
        if (accentColor === "bg-blue") return `${baseClass} ${heightClass} bg-gradient-to-${direction === "top" ? "t" : "b"} from-blue-500 to-gray-300 dark:to-gray-700`;
        if (accentColor === "bg-pink") return `${baseClass} ${heightClass} bg-gradient-to-${direction === "top" ? "t" : "b"} from-pink-500 to-gray-300 dark:to-gray-700`;
        if (accentColor === "bg-purple") return `${baseClass} ${heightClass} bg-gradient-to-${direction === "top" ? "t" : "b"} from-purple-500 to-gray-300 dark:to-gray-700`;
        return `${baseClass} ${heightClass} bg-gradient-to-${direction === "top" ? "t" : "b"} from-blue-500 to-gray-300 dark:to-gray-700`;
      case "upcoming":
        return `${baseClass} ${heightClass} bg-gray-300 dark:bg-gray-700`;
      default:
        return `${baseClass} ${heightClass} bg-gray-300 dark:bg-gray-700`;
    }
  };

  return (
    <div className="flex w-full mx-auto max-w-2xl gap-4 md:gap-8 group">
      <div className="flex flex-col items-center">
        {isFirst && (
          <div className={getLineClass("top")} />
        )}
        <div className={getIconBackgroundClass()}>
          {icon}
        </div>
        {!isLast && (
          <div className={getLineClass("bottom")} />
        )}
      </div>
      <div className={cn(
        "pb-12 transition-all duration-300 flex-1",
        isLast ? "pb-0" : ""
      )}>
        <time className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{date}</time>
        <h3 className={cn(
          "text-xl font-semibold mb-3 transition-colors duration-300",
          status === "completed" && accentColor === "bg-green" && "text-green-600 dark:text-green-400",
          status === "completed" && accentColor === "bg-emerald" && "text-emerald-600 dark:text-emerald-400",
          status === "completed" && accentColor === "bg-blue" && "text-blue-600 dark:text-blue-400",
          status === "completed" && accentColor === "bg-pink" && "text-pink-600 dark:text-pink-400",
          status === "completed" && accentColor === "bg-purple" && "text-purple-600 dark:text-purple-400",
          status === "current" && accentColor === "bg-green" && "text-green-500 dark:text-green-300",
          status === "current" && accentColor === "bg-emerald" && "text-emerald-500 dark:text-emerald-300",
          status === "current" && accentColor === "bg-blue" && "text-blue-500 dark:text-blue-300",
          status === "current" && accentColor === "bg-pink" && "text-pink-500 dark:text-pink-300",
          status === "current" && accentColor === "bg-purple" && "text-purple-500 dark:text-purple-300",
          status === "upcoming" && "text-gray-800 dark:text-gray-200"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-gray-700 dark:text-gray-300",
          status === "upcoming" && "text-gray-500 dark:text-gray-500"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};

const ProductTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  // Initialize animation as component mounts
  useEffect(() => {
    const timelineSection = document.getElementById('roadmap');
    if (timelineSection && timelineSection.classList.contains('opacity-0')) {
      setTimeout(() => {
        timelineSection.classList.add('animate-fade-in');
        timelineSection.classList.remove('opacity-0');
      }, 300);
    }
  }, []);

  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-20 md:py-32" 
      id="roadmap"
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -left-[5%] w-1/2 h-[50%] bg-purple-100 dark:bg-purple-900/20 opacity-60 blur-3xl rounded-full animate-pulse parallax" data-speed="0.05"></div>
      <div className="absolute -bottom-[10%] -right-[5%] w-1/3 h-[50%] bg-blue-100 dark:bg-blue-900/20 opacity-50 blur-3xl rounded-full animate-pulse parallax" data-speed="0.07"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              <Star className="w-3 h-3 mr-1" /> From Antarctica to Tropical Islands
            </span>
          </div>
          <h2 
            className="font-subheading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400"
          >
            From Penguin Chatter to <span className="italic">Hibiscus Harmony</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2 mb-4">
            <span className="text-2xl" role="img" aria-label="Penguin">🐧</span>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="text-2xl" role="img" aria-label="Hibiscus">🌺</span>
          </div>
          <p 
            className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Witness our evolution from penguin communication protocols to a flourishing Hibiscus ecosystem
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0 flex flex-col items-center">
            <TimelineItem 
              date="May 2025"
              title={<>
<div className="flex items-center justify-start">
                  <span className="text-2xl mr-3" role="img" aria-label="Penguin">🐧</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 font-semibold">First Calls - Penguin Communication Protocol</span>
                </div>
              </>}
              description="Establishing the foundational penguin-to-penguin communication protocol with mTLS security and decentralized identity management for our flightless friends."
              icon={<Fingerprint className="h-6 w-6" />}
              status="completed"
              isFirst={true}
              accentColor="bg-green"
            />
            
            <TimelineItem 
              date="June 2025"
              title={<>
<div className="flex items-center justify-start">
                  <span className="text-2xl mr-3" role="img" aria-label="Penguin">🐧🔊</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400 font-semibold">Colony Chat - Multi-Framework Support</span>
                </div>
              </>}
              description="Private alpha release enabling penguin colonies to communicate across frameworks with seamless integration across different codebases and languages."
              icon={<Code className="h-6 w-6" />}
              status="current"
              accentColor="bg-emerald"
            />
            
            <TimelineItem 
              date="July 2025"
              title={<>
<div className="flex items-center justify-start">
                  <span className="text-2xl mr-3" role="img" aria-label="Shield">🛡️</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 font-semibold">Antarctic Shield - Security Framework</span>
                </div>
              </>}
              description="Enhanced security features protecting penguin communications with robust encryption, secure authentication, and industry-standard compliance across icy terrains."
              icon={<Shield className="h-6 w-6" />}
              status="completed"
              accentColor="bg-blue"
            />
            
            <TimelineItem 
              date="July 2025"
              title={<>
<div className="flex items-center justify-start">
                  <span className="text-2xl mr-3" role="img" aria-label="Hibiscus">🌸</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-400 font-semibold">Hibiscus Awakening - Federated Registry</span>
                </div>
              </>}
              description="Introduction of Hibiscus, the tropical registry system enabling penguin agent discovery, verification, and seamless peer-to-peer connections across colony boundaries."
              icon={<MessageSquare className="h-6 w-6" />}
              status="completed"
              accentColor="bg-pink"
            />
            
            <TimelineItem 
              date="August 2025"
              title={<>
<div className="flex items-center justify-start">
                  <span className="text-2xl mr-3" role="img" aria-label="Penguin and Hibiscus">🐧🌺</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-400 font-semibold">Tropical Migration - Enterprise Ecosystem</span>
                </div>
              </>}
              description="Complete enterprise ecosystem with advanced deployment options, monitoring tools, and the Hibiscus Garden for managing complex penguin communication networks at scale."
              icon={<Rocket className="h-6 w-6" />}
              status="completed"
              accentColor="bg-purple"
              isLast={true}
            />
          </div>
        </div>
        
        {/* Timeline Bottom CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://docs.pebbling.ai/roadmap" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Explore the full roadmap
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductTimeline;
