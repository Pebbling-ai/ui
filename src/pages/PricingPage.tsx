
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const PricingPage = () => {
  // Apply animations when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
              entry.target.classList.remove("opacity-0");
            }, 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700", "ease-out");
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28">
        <section className="py-16 animate-on-scroll opacity-0">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            
            
            <PricingSection />
            
            <div className="mt-24 animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-6 text-left font-medium text-lg">Feature</th>
                      <th className="py-4 px-6 text-center font-medium text-lg">Developer</th>
                      <th className="py-4 px-6 text-center font-medium text-lg">Business</th>
                      <th className="py-4 px-6 text-center font-medium text-lg">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800">Agent Messages</td>
                      <td className="py-4 px-6 text-center">10,000/month</td>
                      <td className="py-4 px-6 text-center">1M/month</td>
                      <td className="py-4 px-6 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800">Support Level</td>
                      <td className="py-4 px-6 text-center">Community</td>
                      <td className="py-4 px-6 text-center">Priority (24h)</td>
                      <td className="py-4 px-6 text-center">Premium (24/7)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800">Authentication</td>
                      <td className="py-4 px-6 text-center">Basic</td>
                      <td className="py-4 px-6 text-center">Advanced</td>
                      <td className="py-4 px-6 text-center">Enterprise-grade</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800">Dedicated Infrastructure</td>
                      <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-500" /></td>
                      <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-500" /></td>
                      <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800">Custom SLAs</td>
                      <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-500" /></td>
                      <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-500" /></td>
                      <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800">Custom Domain</td>
                      <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-500" /></td>
                      <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                      <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800">On-premise Deployment</td>
                      <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-500" /></td>
                      <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-500" /></td>
                      <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-20 bg-gray-50 rounded-2xl p-10 max-w-4xl mx-auto animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">How do I determine which plan is right for me?</h3>
                  <p className="text-gray-600">We recommend starting with the Developer plan to explore the Pebbling Protocol's capabilities. As your agent communication needs grow, you can upgrade to the Business or Enterprise plan for additional features and support.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Can I switch plans later?</h3>
                  <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be available immediately. When downgrading, changes will take effect at the start of the next billing cycle.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">What happens if I exceed my monthly agent message limit?</h3>
                  <p className="text-gray-600">If you exceed your monthly agent message limit, you'll be notified and given the option to upgrade to a higher tier. We won't cut off your service abruptly, but repeated overages may require an upgrade.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Do you offer any discounts for startups or educational institutions?</h3>
                  <p className="text-gray-600">Yes, we offer special pricing for qualified startups, educational institutions, and non-profit organizations. Please contact our sales team for more information.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
              <div className="flex gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-gray-700 to-zinc-900 text-white rounded-full"
                  style={{
                    padding: '16px 24px',
                    fontSize: '14px',
                    lineHeight: '20px',
                  }}
                >
                  Start with Free Plan
                </Button>
                <Button 
                  variant="outline"
                  className="rounded-full"
                  style={{
                    padding: '16px 24px',
                    fontSize: '14px',
                    lineHeight: '20px',
                  }}
                >
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
