
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
      className="overflow-hidden relative bg-white py-16 lg:py-24 flex flex-col min-h-screen" 
      id="hero" 
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] blur-3xl rounded-full"></div>
      
      {/* Center aligned content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center flex-1 z-10" ref={containerRef}>
        <div className="max-w-4xl mx-auto mb-8">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.3s" }}
          >
            Leave it to Pebble
          </h1>
          
          <p 
            style={{ animationDelay: "0.5s" }} 
            className="mt-4 sm:mt-6 mb-8 text-gray-600 opacity-0 animate-fade-in text-base sm:text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Pebble is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Pebble excels at various tasks in work and life, getting everything done while you rest.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <a 
              href="#get-access" 
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
              Request Access
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Video container with square aspect ratio and centered play button */}
        <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden aspect-square mb-12 shadow-lg">
          <video 
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dhjzu51mb/video/upload/v1747336196/me23zatatqnomdco9s85.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play/Pause button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-full bg-white/80 hover:bg-white/90 transition-colors duration-200 flex items-center justify-center z-20 shadow-md"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause size={36} className="text-black" />
            ) : (
              <Play size={36} className="text-black ml-1" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
