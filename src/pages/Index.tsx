import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import GitHubSection from "@/components/GitHubSection";
import ProductTimeline from "@/components/ProductTimeline";
import IntegrationSection from "@/components/IntegrationSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ExampleUseCases from "@/components/ExampleUseCases";

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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden relative">
      {/* Background blur gradient elements similar to Hero component */}
      <div className="fixed -top-[20%] -right-[10%] w-2/3 h-[80%] bg-blue-100 dark:bg-blue-900/20 opacity-30 blur-3xl rounded-full animate-pulse z-0"></div>
      <div className="fixed top-[30%] -left-[10%] w-2/3 h-[60%] bg-purple-100 dark:bg-purple-900/20 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>
      <div className="fixed -bottom-[20%] right-[5%] w-1/2 h-[50%] bg-pink-100 dark:bg-pink-900/20 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>
      
      {/* Main content with z-index to appear above background gradients */}
      <div className="relative z-10">
        <Navbar />
        <main className="space-y-0"> 
          <Hero />
          <ProductShowcase />
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
            <ExampleUseCases />
          </div>
          <ProductTimeline />
          <div className="bg-white/90 dark:bg-zinc-900/90">
            <GitHubSection />
          </div>
          <IntegrationSection />
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
            <PricingSection />
          </div>
          <FAQSection />
          <div className="bg-white/90 dark:bg-zinc-900/90">
            <Testimonials />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
