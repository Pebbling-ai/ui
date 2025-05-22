
import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-container">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-12 md:p-16" style={{ 
          background: "linear-gradient(to right, #222222, #000000)" 
        }}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="max-w-xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Ready to connect your agents?</h2>
              <p className="text-gray-300 mb-6">
                Start building powerful agent communication systems with our protocol today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/hibiscus" 
                className="bg-white text-black hover:bg-gray-200 flex items-center justify-center group text-center rounded-md transition-colors" 
                style={{
                  padding: '12px 24px',
                }}
              >
                Let's explore hibiscus
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#docs" 
                className="bg-transparent text-white flex items-center justify-center group text-center border border-gray-300 rounded-md hover:bg-gray-800 transition-all" 
                style={{
                  padding: '12px 24px',
                }}
              >
                Docs
                <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
