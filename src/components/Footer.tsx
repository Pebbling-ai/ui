
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Github,MessageSquare } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";
import { Link } from "react-router-dom";
const SOCIAL_LINKS = {
  GITHUB: "https://github.com/Pebbling-ai",
  TWITTER: "https://twitter.com/pebblingprotocol",
  LINKEDIN: "https://www.linkedin.com/company/pebbling-ai/",
  DISCORD: "https://discord.gg/m6ndEkce"
};
const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4 sm:h-5 sm:w-5"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);
const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 right-0 bg-gradient-to-b from-white to-gray-50 text-gray-900 py-5 border-t border-gray-100 z-10">
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
                alt="Pebbling Logo" 
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
              
    { 
      icon: Github, 
      label: "GitHub", 
      color: "hover:text-gray-900",
      url: SOCIAL_LINKS.GITHUB 
    },
    { 
      icon: Twitter, 
      label: "Twitter", 
      color: "hover:text-blue-400",
      url: SOCIAL_LINKS.TWITTER 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      color: "hover:text-blue-700",
      url: SOCIAL_LINKS.LINKEDIN 
    },
    { 
    icon: DiscordIcon, // Using MessageSquare for Discord
    label: "Discord",
    color: "hover:text-indigo-600",
    url: SOCIAL_LINKS.DISCORD 
  }
    
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank"
                aria-label={social.label} 
                className={`text-black ${social.color} transition-all duration-300 transform hover:-translate-y-1`}
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright section - now responsive */}
        <div className="relative w-full flex flex-col items-center mt-8 md:mt-5">
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
