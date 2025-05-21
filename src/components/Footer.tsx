
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
      <div className="flex flex-col">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-6 transform transition-transform duration-300 hover:scale-105">
            <img 
              src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/fajr9stliyz17xsez5nt.png" 
              alt="Pulse Robot Logo" 
              className="h-14 filter drop-shadow-sm" 
            />
          </div>
          <p className="text-gray-600 max-w-md text-center text-sm sm:text-base font-light leading-relaxed mb-6">
            Advanced agent communication protocol for the next generation of AI applications,
            designed to maximize efficiency and security in AI interactions.
          </p>
        </div>
        
        {/* Social Links with improved styling */}
        <div className="flex space-x-8 mb-10">
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
              className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:-translate-y-1`}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        </div>
        {/* Copyright with subtle divider */}
        <div className="relative w-full  flex flex-col items-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} pebble Protocol. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Add Scroll to Top Button */}
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
