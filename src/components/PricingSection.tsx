
import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Star, Rocket, Shield, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  growthStage: string;
  emoji: string;
  popular?: boolean;
  className?: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  textColor: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  cta,
  growthStage,
  emoji,
  popular = false,
  className,
  gradientFrom,
  gradientTo,
  borderColor,
  textColor,
}) => (
  <Card 
    className={cn(
      "relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300",
      "border-2",
      popular ? `border-${borderColor}` : "border-transparent",
      className
    )}
  >
    <div className={`absolute inset-0 bg-gradient-to-b from-${gradientFrom} to-${gradientTo} opacity-15`}></div>
    
    {popular && (
      <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-blue-500 text-white py-1 px-4 text-xs font-semibold rounded-bl-lg">
        <Sparkles className="inline-block w-3 h-3 mr-1" />
        Most Popular
      </div>
    )}
    
    <CardContent className="p-8 relative z-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl" role="img" aria-label={growthStage}>{emoji}</span>
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500">{growthStage}</div>
          <h3 className={`text-xl font-bold text-${textColor}-700 dark:text-${textColor}-500`}>{name}</h3>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      
      <div className="my-6">
        <span className={`text-4xl font-bold text-${textColor}-700 dark:text-${textColor}-500`}>{price}</span>
        {price !== "Custom" && <span className="text-gray-700 dark:text-gray-300 font-medium ml-2">/month</span>}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className={`h-5 w-5 text-${textColor}-500 mt-0.5 flex-shrink-0`} />
            <span className="text-gray-700 dark:text-gray-200 text-left">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn(
          "w-full group rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
          `bg-gradient-to-r from-${textColor}-500 to-${textColor}-600 hover:from-${textColor}-600 hover:to-${textColor}-700 text-white`
        )}
      >
        {cta}
        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardContent>
  </Card>
);

const PricingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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
      const elements = document.querySelectorAll('.pricing-parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section id="pricing" className="overflow-hidden relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-16 md:pt-24 md:pb-20" ref={containerRef}>
      {/* Background blur gradient elements */}
      <div className="absolute -top-[20%] -left-[10%] w-1/2 h-[70%] bg-purple-100 dark:bg-purple-900/20 opacity-60 blur-3xl rounded-full animate-pulse pricing-parallax" data-speed="0.05"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-1/3 h-[50%] bg-blue-100 dark:bg-blue-900/20 opacity-50 blur-3xl rounded-full animate-pulse pricing-parallax" data-speed="0.08"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            <Star className="w-3 h-3 mr-1" /> Growing with Your Project
          </span>
        </div>
        
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-subheading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400">
            From Seed to Hibiscus: Pricing for Every Stage
          </h2>
          <p className="section-subtitle mx-auto text-gray-700 dark:text-gray-300 max-w-2xl text-lg">
            Nurture your project's growth with plans designed to scale alongside your journey from seedling to full bloom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <PricingTier 
            name="Seed"
            price="Free"
            description="Perfect for developers starting their journey with Pebbling"
            growthStage="SEEDLING"
            emoji="🌱"
            gradientFrom="green-50"
            gradientTo="green-100"
            borderColor="green-300"
            textColor="green"
            features={[
              "Core Pebble Protocol",
              "Up to 10K agent messages/month",
              "Basic decentralized identifiers",
              "Community support",
              "Public registry access",
              "Standard documentation"
            ]}
            cta="Plant Your Seed"
          />
          
          <PricingTier 
            name="Sprout"
            price="$99"
            description="For growing projects ready to blossom into production"
            growthStage="GROWING"
            emoji="🌿"
            gradientFrom="blue-50"
            gradientTo="purple-100"
            borderColor="purple-300"
            textColor="purple"
            features={[
              "Up to 1M agent messages/month",
              "Advanced mLTS security",
              "Priority support (24h response)",
              "All supported SDKs",
              "Enhanced logging & analytics",
              "Custom domain support"
            ]}
            popular={true}
            className="z-10 pricing-parallax"
            cta="Grow Your Project"
          />
          
          <PricingTier 
            name="Hibiscus"
            price="Custom"
            description="For enterprises requiring the full power of the Pebbling ecosystem"
            growthStage="FULL BLOOM"
            emoji="🌺"
            gradientFrom="pink-50"
            gradientTo="rose-100"
            borderColor="pink-300"
            textColor="pink"
            features={[
              "Unlimited agent messages",
              "Dedicated infrastructure",
              "24/7 premium support",
              "Custom implementation support",
              "Advanced compliance features",
              "On-premise deployment option",
              "Custom SLAs"
            ]}
            cta="Reach Full Bloom"
          />
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative p-8 rounded-2xl overflow-hidden pricing-parallax" data-speed="0.15">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-blue-900/30"></div>
            <div className="absolute inset-0 bg-white/80 dark:bg-black/50 backdrop-blur-sm"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Custom Growth Plan</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Need specialized care for your unique project? Our team will craft a tailored solution 
                that provides exactly what you need to thrive in the Pebbling ecosystem.
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg group rounded-full px-6 py-3">
                <Rocket className="mr-2 h-5 w-5" />
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" />
            All plans include core Pebble Protocol features and standard security
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
