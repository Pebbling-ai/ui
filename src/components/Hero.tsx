
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Volume, Volume2, VolumeX } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  
  return (
    <section 
      className="overflow-hidden relative bg-cover pt-16 md:pt-20" 
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%', 
      }}
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      {/* Bottom blur effect - to create a smooth transition between sections */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#222222] opacity-30 blur-lg"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row items-center py-6 sm:py-8 lg:py-12">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <div 
              className="pulse-chip mb-2 sm:mb-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
              <span>Purpose</span>
            </div>
            
            <h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight opacity-0 animate-fade-in font-display" 
              style={{ animationDelay: "0.3s" }}
            >
              Pebble: Where Code<br className="hidden sm:inline" />Meets Motion
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="mt-2 sm:mt-4 mb-4 sm:mb-6 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-sm sm:text-base md:text-lg text-left"
            >
              The humanoid companion that learns and adapts alongside you.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#get-access" 
                className="flex items-center justify-center group w-full sm:w-auto text-center" 
                style={{
                  backgroundColor: '#FE5C02',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '10px 18px',
                  border: '1px solid white',
                }}
              >
                Request Access
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              {/* Video container with soft shadow at bottom for grounding effect */}
              <div className="relative">
                <video 
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-auto"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    maxHeight: '700px',
                    minHeight: '250px',
                    height: isMobile ? '30vh' : '40vh',
                    clipPath: 'inset(0 0 0 0)',
                  }}
                >
                  <source src="https://res.cloudinary.com/dhjzu51mb/video/upload/v1747336196/me23zatatqnomdco9s85.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Mute/Unmute button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 p-2 bg-black/70 hover:bg-black/90 rounded-full transition-colors duration-200 text-white z-20"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <Volume2 size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
