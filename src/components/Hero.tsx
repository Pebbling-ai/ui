import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Play, ExternalLink, Star, Fingerprint, MessageSquare, Code, Rocket, Shield } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
            className="font-subheading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400" 
            style={{ animationDelay: '0.3s' }}
          >
            Leave it to Pebble
          </h1>
          <p 
            style={{ animationDelay: "0.5s" }} 
            className="font-subheading mt-4 sm:mt-6 mb-20 text-gray-700 dark:text-gray-300 opacity-0 animate-fade-in text-base sm:text-xl md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            <br/> Pebbling, all you need. <br/> Write your logic, let Pebble handle the rest.
          </p>
          
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {/* Feature Badge - Decentralised Identifier */}
            <div className="flex items-center gap-3 min-h-[56px] px-7 py-4 bg-gradient-to-r from-purple-50 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg shadow-sm border border-purple-200 dark:border-purple-800 hover:shadow-md transition-all">
              <Fingerprint className="w-6 h-6 flex-shrink-0 text-purple-700 dark:text-purple-300" />
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                Decentralised <span className="font-semibold text-purple-700 dark:text-purple-300">Identifier</span>
              </span>
            </div>
            
            {/* Feature Badge - mLTS Communication */}
            <div className="flex items-center gap-3 min-h-[56px] px-7 py-4 bg-gradient-to-r from-blue-50 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg shadow-sm border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all">
              <MessageSquare className="w-6 h-6 flex-shrink-0 text-blue-700 dark:text-blue-300" />
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                <span className="font-semibold text-blue-700 dark:text-blue-300">mLTS</span> Communication
              </span>
            </div>
            
            {/* Feature Badge - Framework Agnostic */}
            <div className="flex items-center gap-3 min-h-[56px] px-7 py-4 bg-gradient-to-r from-green-50 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg shadow-sm border border-green-200 dark:border-green-800 hover:shadow-md transition-all">
              <Code className="w-6 h-6 flex-shrink-0 text-green-700 dark:text-green-300" />
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                Framework <span className="font-semibold text-green-700 dark:text-green-300">Agnostic</span>
              </span>
            </div>
            
            {/* Feature Badge - One Click Deployment */}
            <div className="flex items-center gap-3 min-h-[56px] px-7 py-4 bg-gradient-to-r from-pink-50 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-lg shadow-sm border border-pink-200 dark:border-pink-800 hover:shadow-md transition-all">
              <Rocket className="w-6 h-6 flex-shrink-0 text-pink-700 dark:text-pink-300" />
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                One Click <span className="font-semibold text-pink-700 dark:text-pink-300">Deployment</span>
              </span>
            </div>
            
            {/* Feature Badge - No Hassle */}
            <div className="flex items-center gap-3 min-h-[56px] px-7 py-4 bg-gradient-to-r from-yellow-50 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 rounded-lg shadow-sm border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all">
              <Shield className="w-6 h-6 flex-shrink-0 text-yellow-700 dark:text-yellow-300" />
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                No <span className="font-semibold text-yellow-700 dark:text-yellow-300">Hassle</span>
              </span>
            </div>
            
            {/* Feature Badge - Federated Registry */}
            <div className="flex items-center gap-3 min-h-[56px] px-7 py-4 bg-gradient-to-r from-orange-50 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-lg shadow-sm border border-orange-200 dark:border-orange-800 hover:shadow-md transition-all">
              <span className="text-xl flex-shrink-0" role="img" aria-label="Hibiscus Flower">🌺</span>
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                Federated <span className="font-semibold text-orange-700 dark:text-orange-300">Registry - Hibiscus</span>
              </span>
            </div>
          </div>
          
                    <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="https://docs.pebbling.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg flex items-center justify-center group w-full sm:w-auto text-center rounded-full cursor-pointer text-sm font-medium leading-5 py-4 px-8 min-h-[56px] min-w-[220px] transition-all duration-300"
            >
              Dive In with Pebbling <span className="ml-1 text-lg" role="img" aria-label="Penguin">🐧</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
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
                    aria-label="Play video"
                    className="w-[56px] h-[56px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
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
        
        {/* Pebbling Story Section - Refactored for spacing and readability */}
        <div className="flex flex-col items-center justify-center py-10 md:py-14 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-subheading text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400">From Seed to Hibiscus: The Pebbling Story</h3>
          {/* Data-driven story cards */}
          <div className="flex flex-col md:flex-row gap-y-8 gap-x-8 w-full max-w-5xl justify-center">
            {[
              {
                emoji: '🌱',
                label: 'Seed',
                title: 'The Seed is Planted',
                titleClass: 'text-gray-800 dark:text-gray-100',
                desc: 'Pebbling began as a vision to empower secure, decentralized communication for all.'
              },
              {
                emoji: '🌺',
                label: 'Hibiscus',
                title: 'The Hibiscus Blooms',
                titleClass: 'text-orange-700 dark:text-orange-300',
                desc: 'Our federated registry, symbolized by the hibiscus, brings global trust and vibrant connection to the ecosystem.'
              },
              {
                emoji: '🔗',
                label: 'MCP',
                title: 'Powered by MCP',
                titleClass: 'text-blue-700 dark:text-blue-300',
                desc: 'Multi-Channel Protocol (MCP) bridges worlds—connecting agents, frameworks, and communities seamlessly.'
              },
              {
                emoji: '🛡️',
                label: 'Open Source',
                title: 'Open, Always',
                titleClass: 'text-green-700 dark:text-green-300',
                desc: 'Open source, always available, and community-driven. Pebbling is here for you, 24/7.'
              }
            ].map((card, idx) => (
              <div
                key={card.label}
                className="flex flex-col items-center bg-white/90 dark:bg-zinc-800/90 rounded-2xl shadow-lg px-8 py-7 min-w-[220px] max-w-xs mx-auto border border-gray-100 dark:border-zinc-700 transition-all hover:shadow-xl"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <span className="text-4xl mb-3" role="img" aria-label={card.label}>{card.emoji}</span>
                <div className={`font-semibold mb-2 text-lg md:text-xl ${card.titleClass}`}>{card.title}</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
