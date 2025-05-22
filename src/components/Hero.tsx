import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Play, ExternalLink, Star, Terminal, Bot } from "lucide-react";
import { Button } from "./ui/button";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // If you know the type, use it instead of 'unknown'. For now, using 'unknown'.
const [lottieData, setLottieData] = useState<unknown>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
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
      const elements = document.querySelectorAll('.parallax');
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

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-16 md:pt-32 md:pb-8 flex flex-col"
      id="hero" 
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-blue-100 dark:bg-blue-900/20 opacity-60 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-[10%] -left-[5%] w-1/3 h-[50%] bg-purple-100 dark:bg-purple-900/20 opacity-50 blur-3xl rounded-full animate-pulse"></div>
      
      {/* Center aligned content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center flex-1 z-10" ref={containerRef}>
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            <Star className="w-3 h-3 mr-1" /> Open Source Decentralised Peer-to-Peer Secured Agent to Agent Communication Platform
          </span>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8 mt-2 md:mt-0">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400" 
            style={{ animationDelay: "0.3s" }}
          >
            Your AI Agent, <br/> Your Digital Companion
          </h1>
          
          <p 
            style={{ animationDelay: "0.5s" }} 
            className="font-subheading mt-4 sm:mt-6 mb-8 text-gray-700 dark:text-gray-300 opacity-0 animate-fade-in text-base sm:text-xl md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Pebbling is more than just an AI—it's your digital companion that <span className="font-semibold text-blue-600 dark:text-blue-400">thinks</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">plans</span>, and <span className="font-semibold text-indigo-600 dark:text-indigo-400">executes</span> tasks for you. From research to coding, from planning to problem-solving—Pebbling handles it all.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm">
              <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium">Proactive Thinking</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm">
              <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium">24/7 Availability</span>
            </div>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#get-started"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg flex items-center justify-center group w-full sm:w-auto text-center rounded-full cursor-pointer text-sm font-medium leading-5 py-4 px-8 transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#learn-more"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg flex items-center justify-center group w-full sm:w-auto text-center rounded-full cursor-pointer text-sm font-medium leading-5 py-4 px-8 transition-all duration-300 border-0"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Video container with shadow and border */}
        <div className="relative w-full h-fit max-w-4xl mx-auto overflow-hidden mb-8 px-4 sm:px-0">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 transform hover:scale-[1.01] transition-transform duration-300">
            {!isPlaying ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1747420581/gtp6paxjnunylrjljyzx.png"
                  alt="Pebbling Demo"
                  className="object-cover w-full h-full brightness-[1.05] filter"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 z-20 text-left">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 drop-shadow-md">See Pebbling in Action</h3>
                  <p className="text-gray-200 text-sm sm:text-base max-w-md drop-shadow-md">Watch how Pebbling helps you accomplish tasks effortlessly</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src="https://res.cloudinary.com/dhjzu51mb/video/upload/v1747419984/ebzhckqpysiwxlaalbid.mp4"
                title="Pebbling Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            )}
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">79+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
          </div>
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Availability</div>
          </div>
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
