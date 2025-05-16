
import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Pulse Robot</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pulse is a next-generation AI capable of reasoning about the world and taking actions on your behalf.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Hibiscus</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Brain</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Agent Registry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Integrations</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center md:text-left md:flex md:justify-between md:items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to connect your agents?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#get-started" 
                  className="bg-gradient-to-r from-gray-700 to-zinc-900 flex items-center justify-center group w-full sm:w-auto text-center" 
                  style={{
                    borderRadius: '1440px',
                    boxSizing: 'border-box',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    fontSize: '14px',
                    lineHeight: '20px',
                    padding: '16px 24px',
                    border: '1px solid white',
                  }}
                >
                  Let's Pebble
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a 
                  href="#docs" 
                  className="bg-transparent flex items-center justify-center group w-full sm:w-auto text-center" 
                  style={{
                    borderRadius: '1440px',
                    boxSizing: 'border-box',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    fontSize: '14px',
                    lineHeight: '20px',
                    padding: '16px 24px',
                    border: '1px solid white',
                  }}
                >
                  Docs
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Pulse Robot, Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
