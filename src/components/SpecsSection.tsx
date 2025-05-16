
import React from "react";
import { ArrowUpRight, AtomIcon, Layers, Shield, Rocket, Brain, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureItem = ({ text, color = "text-pulse-500" }: { text: string; color?: string }) => (
  <div className="flex items-start gap-2 mb-3">
    <div className={cn("mt-1 flex-shrink-0", color)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-sm sm:text-base text-gray-700">{text}</span>
  </div>
);

const ProductCard = ({ 
  title, 
  description, 
  features, 
  icon, 
  actionText = "Explore",
  color = "bg-pulse-50 text-pulse-500"
}: { 
  title: string; 
  description: string; 
  features: string[];
  icon: React.ReactNode; 
  actionText?: string;
  color?: string;
}) => (
  <div className="bg-white rounded-2xl shadow-elegant p-6 sm:p-8 hover:shadow-elegant-hover transition-all duration-300">
    <div className={cn("w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-6", color)}>
      {icon}
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 text-sm sm:text-base">{description}</p>
    
    <div className="mb-8">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} color={color} />
      ))}
    </div>
    
    <button className="flex items-center text-sm font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">
      {actionText} {title}
      <ArrowUpRight className="ml-2 h-4 w-4" />
    </button>
  </div>
);

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>Products</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Title section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Intelligent Solutions for the Future
          </h2>
          <p className="text-lg text-gray-600">
            Discover our cutting-edge AI platforms designed to transform how you interact with technology
          </p>
        </div>
        
        {/* Two product cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Pebbling Product */}
          <ProductCard
            title="Pebbling"
            description="Quantum-inspired intelligence that adapts to your workflow. Pebbling transcends traditional AI boundaries with fluid learning."
            icon={<AtomIcon className="w-6 h-6" />}
            features={[
              "Autonomous reasoning with zero-shot adaptation",
              "Multi-modal context integration engine",
              "Predictive workflow optimization",
              "Enterprise-grade security and permissions"
            ]}
            color="bg-blue-50 text-blue-500"
          />
          
          {/* Hibiscus Product */}
          <ProductCard
            title="Hibiscus"
            description="Evolutionary neural networks that bloom with every interaction. Hibiscus crafts bespoke cognitive solutions for enterprises."
            icon={<Brain className="w-6 h-6" />}
            features={[
              "Self-evolving neural architecture",
              "Ambient intelligence integration",
              "Cross-domain knowledge synthesis",
              "Adaptive memory crystallization"
            ]}
            color="bg-rose-50 text-rose-500"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
