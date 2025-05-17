
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface PricingTierProps {
  name: string;
  price: string | { monthly: string; annual: string };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  className?: string;
  disabled?: boolean;
  comingSoon?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  cta,
  popular = false,
  className,
  disabled = false,
  comingSoon = false,
}) => (
  <Card 
    className={cn(
      "relative flex flex-col h-full transition-all duration-300 hover:-translate-y-1",
      popular ? "border-black shadow-lg" : "border-gray-200",
      className
    )}
  >
    {popular && (
      <div className="absolute -top-4 left-0 right-0 flex justify-center">
        <span className="bg-black text-white text-xs font-medium py-1 px-3 rounded-full">
          MOST POPULAR
        </span>
      </div>
    )}
    
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-5">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      <div className="my-6">
        {typeof price === 'string' ? (
          <>
            <span className="text-3xl font-bold">{price}</span>
            {price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
          </>
        ) : (
          <div className="tabbed-pricing">
            <span className="text-3xl font-bold" id={`${name}-price`}>
              {price.monthly}
              <span className="text-gray-600 text-lg ml-1">/month</span>
            </span>
          </div>
        )}
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn(
          "w-full mt-auto",
          popular 
            ? "bg-black hover:bg-gray-800 text-white" 
            : "bg-white border-2 border-black text-black hover:bg-gray-50",
          disabled && "opacity-60 cursor-not-allowed hover:bg-transparent"
        )}
        disabled={disabled}
      >
        {comingSoon ? "Coming Soon" : cta}
      </Button>
    </CardContent>
  </Card>
);

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "annual">("monthly");

  const handleBillingChange = (value: string) => {
    setBillingPeriod(value as "monthly" | "annual");
    
    // Update displayed prices
    document.querySelectorAll('[id$="-price"]').forEach(element => {
      const name = element.id.split('-')[0];
      if (name === "Developer") return; // Free tier doesn't change
      
      const monthlyPrice = name === "Business" ? "$99" : "Custom";
      const annualPrice = name === "Business" ? "$79" : "Custom";
      
      element.innerHTML = value === "monthly" 
        ? `${monthlyPrice}<span class="text-gray-600 text-lg ml-1">/month</span>` 
        : `${annualPrice}<span class="text-gray-600 text-lg ml-1">/month</span>`;
    });
  };

  return (
    <section className="py-16 animate-on-scroll opacity-0" id="pricing">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Simple, Transparent Pricing</h2>
          <p className="section-subtitle mx-auto">
            Choose the plan that best fits your needs. All plans include core Pebbling Protocol features.
          </p>
          
          <div className="mt-8 inline-flex justify-center">
            <Tabs 
              defaultValue="monthly" 
              className="w-[300px]"
              onValueChange={handleBillingChange}
            >
              <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual (20% off)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
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
            price={{ monthly: "$99", annual: "$79" }}
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
        
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-6 px-6 text-left font-medium text-lg whitespace-nowrap">Features</th>
                  <th className="py-6 px-6 text-center font-medium text-lg whitespace-nowrap">Developer</th>
                  <th className="py-6 px-6 text-center font-medium text-lg whitespace-nowrap bg-gray-50">Business</th>
                  <th className="py-6 px-6 text-center font-medium text-lg whitespace-nowrap">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Agent Messages</td>
                  <td className="py-4 px-6 text-center">10,000/month</td>
                  <td className="py-4 px-6 text-center bg-gray-50">1M/month</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Authentication</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center bg-gray-50">Advanced</td>
                  <td className="py-4 px-6 text-center">Enterprise-grade</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="py-4 px-6 text-center">Community</td>
                  <td className="py-4 px-6 text-center bg-gray-50">Priority (24h)</td>
                  <td className="py-4 px-6 text-center">Premium (24/7)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">SDKs</td>
                  <td className="py-4 px-6 text-center">JS & Python</td>
                  <td className="py-4 px-6 text-center bg-gray-50">All SDKs</td>
                  <td className="py-4 px-6 text-center">All SDKs + Custom</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Analytics & Logging</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center bg-gray-50">Enhanced</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Custom Domain</td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><Check className="mx-auto text-green-500" /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Dedicated Infrastructure</td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X className="mx-auto text-gray-400" /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">On-premise Deployment</td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X className="mx-auto text-gray-400" /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Custom SLAs</td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X className="mx-auto text-gray-400" /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
