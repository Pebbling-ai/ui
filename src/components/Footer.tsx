
import React, { useEffect, useState, useRef } from "react";
import { Github, Twitter, Linkedin, ArrowRight, MessageSquare, MapPin, Mail, ShieldCheck } from "lucide-react";
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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.footer-parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-10 md:py-16 z-10">
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -right-[5%] w-1/3 h-[50%] bg-blue-100 dark:bg-blue-900/20 opacity-50 blur-3xl rounded-full animate-pulse footer-parallax" data-speed="0.05"></div>
      <div className="absolute bottom-[10%] -left-[5%] w-1/4 h-[40%] bg-purple-100 dark:bg-purple-900/20 opacity-40 blur-3xl rounded-full animate-pulse footer-parallax" data-speed="0.08"></div>
      <div className="absolute top-[40%] right-[10%] w-[15%] h-[30%] bg-green-100 dark:bg-green-900/20 opacity-30 blur-3xl rounded-full animate-pulse footer-parallax" data-speed="0.07"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {/* Logo and Mission Statement */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6 transform transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo/footerLogo.svg" 
                alt="Pebbling Logo" 
                className="h-12 sm:h-16 filter drop-shadow-sm" 
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 max-w-md text-sm sm:text-base font-light leading-relaxed mb-6">
              Pebbling evolves from a tiny seed to a beautiful hibiscus, just like your AI applications. 
              Our open-source protocol powers secure, decentralized agent communication to help your 
              ideas flourish in the ever-growing AI ecosystem.
            </p>
            <div className="flex gap-5 mt-2">
              {[
                { 
                  icon: Github, 
                  label: "GitHub", 
                  color: "hover:text-gray-900 dark:hover:text-gray-300",
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
                  icon: DiscordIcon,
                  label: "Discord",
                  color: "hover:text-indigo-600",
                  url: SOCIAL_LINKS.DISCORD 
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label} 
                  className={`text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:-translate-y-1 hover:scale-110`}
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 footer-parallax" data-speed="0.04">
            <h4 className="font-medium text-lg mb-4 text-gray-900 dark:text-gray-100">Protocol</h4>
            <ul className="space-y-2">
              {[
                { name: "Documentation", url: "https://docs.pebbling.ai" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-3 footer-parallax" data-speed="0.08">
            <h4 className="font-medium text-lg mb-4 text-gray-900 dark:text-gray-100">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">Amsterdam, Netherlands</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                <a href="mailto:raahul@pebbling.ai" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  raahul@pebbling.ai
                </a>, 
                <a href="mailto:calude@pebbling.ai" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  calude@pebbling.ai
                </a>
              </li>
              <li className="flex items-center">
                <DiscordIcon />
                <a href={SOCIAL_LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors ml-2">
                  Join our Discord
                </a>
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="relative w-full flex flex-col items-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-light text-center">
            © {new Date().getFullYear()} Pebbling Protocol. All rights reserved.
          </p>
        </div>
      </div>
      
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
