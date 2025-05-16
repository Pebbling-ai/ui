
import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-16 border-t border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* "Ready to connect" Section moved below the grid and above the bottom section */}
        <div className=" py-12 mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-3">Ready to connect your agents?</h2>
              <p className="text-gray-600 mb-6">
                Start building powerful agent communication systems with our protocol today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
              <a 
                href="#get-started" 
                className="bg-gray-100 flex items-center justify-center group text-center rounded-md hover:bg-gray-200 transition-colors" 
                style={{
                  padding: '12px 24px',
                }}
              >
                Let's Pebble
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#docs" 
                className="bg-transparent flex items-center justify-center group text-center border border-gray-300 rounded-md hover:border-gray-400 hover:bg-gray-50 transition-all" 
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
        {/* Main Link Sections - Moving this section up */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* pebble Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center mr-2">
                 <img 
                  src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1747414029/bl6hrupybi6hqqrbfkib.png" 
                  alt="Pulse Robot Logo" 
                  className="h-10 sm:h-12" 
                />
              </div>
              <h3 className="text-xl font-bold">pebble</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Advanced agent communication protocol for the next generation of AI applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-gray-500 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Case Studies</a></li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Partners</a></li>
            </ul>
          </div>
          
          {/* Legal Section with Help Box */}
          <div>
            <h3 className="text-xl font-bold mb-6">Legal</h3>
            <ul className="space-y-4 mb-8">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Security</a></li>
            </ul>
            
            {/* Help Box */}
            <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-gray-300 transition-all duration-300">
              <h4 className="font-semibold text-lg flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Need Help?
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Our support team is here for you 24/7
              </p>
              <a href="#" className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
                Contact Support
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M7 17l9.2-9.2M17 17V7H7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        
        
        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} pebble Protocol. All rights reserved.</p>
          
          <div className="flex items-center">
            <div className="relative mr-2">
              <input 
                type="email" 
                placeholder="Subscribe to newsletter" 
                className="bg-gray-100 border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 w-56 hover:border-gray-300 transition-all"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
