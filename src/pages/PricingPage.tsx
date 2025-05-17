
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Users } from "lucide-react";

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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Choose the perfect plan for your needs
              </h1>
              <p className="text-xl text-gray-600">
                Scale your agent communication as your business grows.
                All plans include core Pebbling Protocol features.
              </p>
            </div>
            
            <PricingSection />
            
            <div className="mt-24 animate-on-scroll opacity-0">
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-10 w-10 p-2 bg-gray-100 rounded-lg mr-4" />
                    <h3 className="text-xl font-bold">Schedule a Demo</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Learn how the Pebbling Protocol can help your business create more efficient agent communication systems.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black mt-0.5" />
                      <span className="text-gray-700">Personalized walkthrough</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black mt-0.5" />
                      <span className="text-gray-700">Q&A with our engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black mt-0.5" />
                      <span className="text-gray-700">Implementation guidance</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white border-2 border-black text-black hover:bg-gray-50">
                    Book a Demo
                  </Button>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all">
                  <div className="flex items-center mb-4">
                    <Users className="h-10 w-10 p-2 bg-gray-100 rounded-lg mr-4" />
                    <h3 className="text-xl font-bold">Talk to Sales</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our team is ready to help you find the right solution and answer any questions about our enterprise offerings.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black mt-0.5" />
                      <span className="text-gray-700">Custom pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black mt-0.5" />
                      <span className="text-gray-700">Volume discounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black mt-0.5" />
                      <span className="text-gray-700">Enterprise SLAs</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">
                    Contact Sales
                  </Button>
                </div>
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
              <h2 className="text-3xl font-bold mb-8">Ready to transform your agent communication?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg"
                >
                  Start with Free Plan
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-black hover:bg-gray-50 rounded-full px-8 py-6 text-lg"
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
