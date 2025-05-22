
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-900 py-12 border-t border-gray-100 relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gray-100 opacity-50"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gray-100 opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Updated flex container for responsive layout */}
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
          {/* Logo and description section */}
          <div className="flex flex-col md:items-start items-center text-center md:text-left">
            <div className="mb-6 transform transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo/footerLogo.svg" 
                alt="Pulse Robot Logo" 
                className="h-10 sm:h-14 filter drop-shadow-sm" 
              />
            </div>
            <p className="text-black max-w-md text-sm sm:text-base font-light leading-relaxed mb-6 md:mb-0">
              Advanced agent communication protocol for the next generation of AI applications,
              designed to maximize efficiency and security in AI interactions.
            </p>
          </div>
          
          {/* Social Links - now responsive */}
          <div className="flex flex-wrap gap-6 md:gap-8 items-center justify-center md:justify-end">
            {[
              { icon: Github, label: "GitHub", color: "hover:text-gray-900" },
              { icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
              { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-700" },
              { icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
              { icon: Instagram, label: "Instagram", color: "hover:text-pink-600" }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                aria-label={social.label} 
                className={`text-black ${social.color} transition-all duration-300 transform hover:-translate-y-1`}
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright section - now responsive */}
        <div className="relative w-full flex flex-col items-center mt-8 md:mt-12">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>
          <p className="text-black text-xs sm:text-sm font-light text-center">
            © {new Date().getFullYear()} pebble Protocol. All rights reserved.
          </p>
        </div>
      </div>
      
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
