import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompactNetworkMetrics from "@/components/CompactNetworkMetrices";
import ProductShowcase from "@/components/ProductShowcase";
import GitHubSection from "@/components/GitHubSection";
import ProductTimeline from "@/components/ProductTimeline";
import IntegrationSection from "@/components/IntegrationSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ExampleUseCases from "@/components/ExampleUseCases";
import CTASection from "@/components/CTASection";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered animation with a small delay based on position
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
              entry.target.classList.remove("opacity-0");
            }, 150); // Small delay for a smoother reveal
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      // Set initial state (invisible)
      el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700", "ease-out");
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Apply Satoshi font to all headings using a global effect
  useEffect(() => {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
      if (!heading.classList.contains('font-satoshi')) {
        heading.classList.add('font-satoshi');
      }
    });
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="space-y-0 bg-white"> 
        <Hero />
        <CompactNetworkMetrics />
        
        <ProductShowcase />
        <ExampleUseCases />
        <ProductTimeline />
        <GitHubSection />
        <IntegrationSection />
        <PricingSection />
        <FAQSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
