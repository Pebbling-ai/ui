
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
      className="overflow-hidden relative bg-white py-16 lg:py-24 flex flex-col min-h-screen" 
      id="hero" 
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] blur-3xl rounded-full"></div>
      
      {/* Center aligned content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center flex-1" ref={containerRef}>
        <div className="max-w-4xl mx-auto mb-16">
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
      </div>
      
      {/* Video container positioned at the bottom */}
      <div className="relative w-full max-w-6xl mx-auto rounded-t-3xl overflow-hidden">
        <div className="relative mx-auto">
          <video 
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-auto rounded-t-3xl"
            style={{ 
              transformStyle: 'preserve-3d',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              maxHeight: '70vh',
            }}
          >
            <source src="https://res.cloudinary.com/dhjzu51mb/video/upload/v1747336196/me23zatatqnomdco9s85.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
          {/* Mute/Unmute button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-6 right-6 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-colors duration-200 text-white z-20"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
