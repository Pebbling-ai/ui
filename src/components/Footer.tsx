
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full  pt-16 pb-8 border-t border-gray-200">
      <div className="section-container">
        {/* CTA Section */}
        <div className="mb-12 bg-gradient-to-r from-pulse-500/10 to-pulse-600/10 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
            <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="156.5" cy="156.5" r="156.5" fill="#F97316" fillOpacity="0.2"/>
            </svg>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-2">Ready to connect your agents?</h3>
              <p className="text-gray-600 max-w-md">Start building powerful agent communication systems with our protocol today.</p>
            </div>
            <Button className="bg-pulse-500 hover:bg-pulse-600 text-white px-6 py-3 h-auto flex items-center gap-2">
              Get Started <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company & Logo */}
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#F97316" fillOpacity="0.2" stroke="#F97316" strokeWidth="2"/>
                  <path d="M7 13L10 16L17 9" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-display text-xl font-bold">Pulse</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-left text-sm">
              Advanced agent communication protocol for the next generation of AI applications.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-500 hover:text-pulse-500 transition-colors" 
                aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-500 hover:text-pulse-500 transition-colors" 
                aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-pulse-500 transition-colors" 
                aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Resources */}
          <div className="flex flex-col text-left">
            <h3 className="font-semibold mb-4 text-gray-800">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Case Studies</a></li>
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div className="flex flex-col text-left">
            <h3 className="font-semibold mb-4 text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Partners</a></li>
            </ul>
          </div>
          
          {/* Column 4: Legal & Help */}
          <div className="flex flex-col text-left">
            <h3 className="font-semibold mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm">Security</a></li>
            </ul>
            
            <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle size={16} className="text-pulse-500" />
                <h4 className="font-medium text-gray-800">Need Help?</h4>
              </div>
              <p className="text-gray-600 text-sm mb-3">Our support team is here for you 24/7</p>
              <a href="#" className="text-pulse-500 text-sm font-medium flex items-center gap-1 hover:underline">
                Contact Support <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Pulse Protocol. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-gray-500 text-xs">
              Built with ❤️ by{" "}
              <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
                Rezaul Arif
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
