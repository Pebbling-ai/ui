
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Shield, Layers, Database, Zap, Rocket } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
              entry.target.classList.remove("opacity-0");
            }, 100 * index); // Staggered delay based on index
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      // Set initial state
      cardRef.current.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "p-6 rounded-lg shadow-sm border border-gray-100 bg-white",
        "transition-all duration-300 hover:shadow-md"
      )}
    >
      <div className="rounded-full bg-gray-50 w-12 h-12 flex items-center justify-center text-[#3A5BA0] mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
                el.classList.remove("opacity-0");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      // Set initial state for fade-in elements
      const elements = sectionRef.current.querySelectorAll(".fade-in-element");
      elements.forEach(el => {
        el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
      });
      
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-24 relative bg-white" id="features" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 fade-in-element">
            Advanced Intelligence, <br className="hidden sm:block" />Human-Like Intuition
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto fade-in-element">
            Built with cutting-edge technology to understand, learn, and adapt to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Security First"
            description="Built on mutual TLS (mTLS) for end-to-end trust, ensuring your agent communications remain secure and authenticated."
            index={0}
          />
          <FeatureCard
            icon={<Layers className="w-6 h-6" />}
            title="Framework-Agnostic"
            description="Adapters bridge internal APIs across ecosystems, allowing you to integrate with any existing technology stack."
            index={1}
          />
          <FeatureCard
            icon={<Database className="w-6 h-6" />}
            title="Stateful by Default"
            description="Maintain agent memory and cognition across requests, enabling complex multi-step reasoning and contextual awareness."
            index={2}
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Blazing Fast"
            description="Lightweight protocol optimized for distributed deployments with minimal latency, perfect for real-time applications."
            index={3}
          />
          <FeatureCard
            icon={<Rocket className="w-6 h-6" />}
            title="Future-Proof"
            description="Built for the coming wave of autonomous applications with an architecture designed to evolve with AI advancements."
            index={4}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 6H3v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2"></path><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></path><line x1="12" x2="12" y1="11" y2="15"></line><line x1="10" x2="14" y1="13" y2="13"></line></svg>}
            title="Task Assistance"
            description="From simple reminders to complex multi-step tasks, Atlas can assist with a wide range of activities."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
