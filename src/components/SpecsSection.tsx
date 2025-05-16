
import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="mt-1 flex-shrink-0 bg-dark-900 text-white rounded-full p-1">
      <Check className="w-4 h-4" />
    </div>
    <span className="text-base text-gray-800">{text}</span>
  </div>
);

const ProductCard = ({ 
  title, 
  description, 
  features
}: { 
  title: string; 
  description: string; 
  features: string[];
}) => (
  <div className="bg-gradient-to-br from-[#F97316] via-[#F97316]/70 to-[#0EA5E9]/90 rounded-2xl p-8 hover:shadow-elegant-hover transition-all duration-300">
    <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-white/90 mb-8 text-lg">{description}</p>
    
    <div className="mb-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </div>
    
    <button className="flex items-center text-sm font-medium bg-white/90 text-dark-900 px-4 py-2 rounded-full transition-colors hover:bg-white">
      Learn more about {title}
      <ArrowUpRight className="ml-2 h-4 w-4" />
    </button>
  </div>
);

const SpecsSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">2</span>
              <span>Products</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Title section */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            The details
          </h2>
          <p className="text-lg text-gray-600">
            Our cutting-edge AI platforms are designed to transform how you interact with technology
          </p>
        </div>
        
        {/* Two product cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Pebbling Product */}
          <ProductCard
            title="Pebbling"
            description="Quantum-inspired intelligence that adapts to your workflow. Pebbling transcends traditional AI boundaries with fluid learning."
            features={[
              "Height: 5'8\"",
              "Capacity: 55lbs",
              "Weight: 140lbs",
              "Enterprise-grade security and permissions"
            ]}
          />
          
          {/* Hibiscus Product */}
          <ProductCard
            title="Hibiscus"
            description="Evolutionary neural networks that bloom with every interaction. Hibiscus crafts bespoke cognitive solutions for enterprises."
            features={[
              "Height: 5'10\"",
              "Capacity: 60lbs",
              "Weight: 150lbs",
              "Advanced neural processing"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
