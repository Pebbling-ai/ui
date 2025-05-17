
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
      <main className="w-full">
        <section className="py-7 animate-on-scroll opacity-0">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            
            
            <PricingSection />
            
            <div className="mt-24 animate-on-scroll opacity-0">
              <div className="text-center mb-14">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">FEATURES BREAKDOWN</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Compare Plans</h2>
              </div>
              
              <div className="overflow-x-auto">
                

                <table className="w-full border-collapse">
                  <thead>
  <tr className="bg-[#f8f5f0]">
    <th className="py-6 px-6 text-left font-bold text-xl text-black">Features</th>

    {/* Developer Column */}
    <th className="py-6 px-6 text-center">
      <div className="text-[#6a5acd] font-medium text-base mb-1">Get Started</div>
      <div className="text-black font-semibold text-xl mb-2">Free</div>
      <button className="bg-black text-white py-2 px-4 rounded-full text-sm font-semibold">Start for Free</button>
    </th>

    {/* Business Column */}
    <th className="py-6 px-6 text-center">
      <div className="text-[#6a5acd] font-medium text-base mb-1">Pro</div>
      <div className="text-black font-semibold text-xl mb-2">$249 <span className="text-sm font-normal">/month</span></div>
      <button className="bg-black text-white py-2 px-4 rounded-full text-sm font-semibold">Build With Your Team</button>
    </th>

    {/* Enterprise Column */}
    <th className="py-6 px-6 text-center">
      <div className="text-[#6a5acd] font-medium text-base mb-1">Enterprise</div>
      <div className="text-black font-semibold text-xl mb-2">Contact Us</div>
      <button className="border border-black text-black py-2 px-4 rounded-full text-sm font-semibold">Get a Custom Plan</button>
    </th>
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
            
            
            
           
            

          </div>
        </section>
        <section className="w-full mt-10 bg-gradient-to-r from-gray-700 to-zinc-900 py-20 px-4 text-center text-white">
  <div className="max-w-3xl mx-auto">
    <div className="flex justify-center items-center gap-2 text-gray-400 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
      </svg>
      <span className="uppercase text-sm tracking-wide font-medium">
        Are you ready?
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
      Enhance your applications <br /> with powerful AI capabilities
    </h2>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-md font-medium">
        Try for Free
      </Button>
      <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black px-6 py-2 rounded-md font-medium">
        Talk to Us
      </Button>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
