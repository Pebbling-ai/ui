
import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:justify-between md:items-center">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to connect your agents?</h3>
            <p className="text-gray-400 mb-6">
              Start building powerful agent communication systems with our protocol today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#get-started" 
                className="bg-gray-800 hover:bg-gray-700 flex items-center justify-center group w-full sm:w-auto text-center" 
                style={{
                  borderRadius: '4px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  padding: '12px 20px',
                }}
              >
                Let's Pebble
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#docs" 
                className="bg-transparent border border-gray-600 hover:border-gray-400 flex items-center justify-center group w-full sm:w-auto text-center" 
                style={{
                  borderRadius: '4px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  padding: '12px 20px',
                }}
              >
                <BookOpen className="mr-2 w-4 h-4" />
                Docs
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-2">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="text-xl font-semibold">Pulse</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Advanced agent communication protocol for the next generation of AI applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover-underline-animation">Security</a></li>
            </ul>
            
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center">
                Need Help?
              </h5>
              <p className="text-gray-400 text-sm mb-3">
                Our support team is here for you 24/7
              </p>
              <a href="#" className="text-white flex items-center hover:underline font-medium">
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Pulse Protocol. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Subscribe to newsletter" 
                className="py-2 px-4 pr-10 rounded-l-md bg-gray-800 border-r-0 border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
              />
              <button 
                className="absolute right-0 top-0 h-full px-3 rounded-r-md bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
