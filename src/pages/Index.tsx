import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompactNetworkMetrics from "@/components/CompactNetworkMetrics";
import ProductShowcase from "@/components/ProductShowcase";
import NetworkMetrics from "@/components/NetworkMetrics";
import AgentRegistry from "@/components/AgentRegistry";
import GitHubSection from "@/components/GitHubSection";
import HumanoidSection from "@/components/HumanoidSection";
import SpecsSection from "@/components/SpecsSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import ProductTimeline from "@/components/ProductTimeline";
import IntegrationSection from "@/components/IntegrationSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8"> {/* Reduced space on mobile */}
        <Hero />
        <CompactNetworkMetrics />
        <ProductShowcase />
        <AgentRegistry />{/*Live preview*/}
        <HumanoidSection />{/*Features*/}
        <GitHubSection />
         <NetworkMetrics />{/*Built for scale*/}
         <ProductTimeline />{/*Changelog*/}
        <IntegrationSection />
        <PricingSection />
        <ImageShowcaseSection />{/*Payoff Section*/}
         <FAQSection />
         <Testimonials />
        <Newsletter />
        {/* <SpecsSection /> */}
        {/* <DetailsSection /> */}
        {/* <Features /> */}
       {/* <MadeByHumans /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
