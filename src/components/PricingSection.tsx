
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  className?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  cta,
  popular = false,
  className,
}) => (
  <Card 
    className={cn(
      "relative transition-all duration-300 hover:-translate-y-1",
      popular ? "border-black shadow-lg" : "border-gray-200",
      className
    )}
  >
    
    <CardContent className="p-6">
      <div className="mb-5">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="my-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-left">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn(
          "w-full",
          popular ? "bg-white text-black border-2 border-black rounded-md" : "bg-gray-800 hover:bg-gray-900"
        )}
      >
        {cta}
      </Button>
    </CardContent>
  </Card>
);

const PricingSection = () => {
  return (
    <section className="py-16 animate-on-scroll opacity-0" id="pricing">
      <div className="section-container">
        <div className="text-center mb-12">
         
          <h2 className="section-title mb-4">Simple, Transparent Pricing</h2>
          <p className="section-subtitle mx-auto">
            Choose the plan that best fits your needs. All plans include core protocol features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier 
            name="Developer"
            price="Free"
            description="Perfect for hobbyists and small projects"
            features={[
              "Up to 10,000 agent messages/month",
              "Basic authentication",
              "Community support",
              "JavaScript & Python SDKs",
              "Public documentation"
            ]}
            cta="Start Building"
          />
          
          <PricingTier 
            name="Business"
            price="$99"
            description="For growing teams and applications"
            features={[
              "Up to 1M agent messages/month",
              "Advanced security features",
              "Priority support (24h response)",
              "All supported SDKs",
              "Enhanced logging & analytics",
              "Custom domain support"
            ]}
            popular={true}
            className="md:scale-105 z-10"
            cta="Upgrade Now"
          />
          
          <PricingTier 
            name="Enterprise"
            price="Custom"
            description="For mission-critical deployments"
            features={[
              "Unlimited agent messages",
              "Dedicated infrastructure",
              "24/7 premium support",
              "Custom implementation support",
              "Advanced compliance features",
              "On-premise deployment option",
              "Custom SLAs"
            ]}
            cta="Contact Sales"
          />
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-center gap-2 mb-4 text-pulse-600">
            <Info className="text-black" size={24} />
            <h3 className="text-black text-xl font-medium">Need a custom solution?</h3>
          </div>
          <p className="text-gray-600 mb-4">
            We understand that every project has unique requirements. Our team is ready to create
            a tailored solution that perfectly matches your specific needs.
          </p>
          <Button className="bg-gray-800 hover:bg-gray-900">
            <DollarSign className="mr-2 h-4 w-4" />
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
