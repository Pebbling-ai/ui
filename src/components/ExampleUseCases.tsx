
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Book, FileSearch, BarChart3, Briefcase, BookOpen, Users, Shield, MessageSquare, Code, Rocket, Fingerprint, Flower2 } from "lucide-react";

// Define the categories for filtering
const categories = [
  { id: "featured", name: "Featured" },
  { id: "pebble", name: "Pebble" },
  { id: "hibiscus", name: "Hibiscus" },
  { id: "integration", name: "Integrations" },
  { id: "use-cases", name: "Use Cases" },
  { id: "security", name: "Security" },
];

// Define the use cases with their icons showcasing Pebble and Hibiscus capabilities
const useCases = [
  {
    id: 1,
    title: "Decentralized Identity Management",
    description: "Pebble creates and manages decentralized identifiers, allowing secure peer-to-peer connections without relying on central authorities, giving you complete control over your digital identity.",
    icon: <Fingerprint className="w-6 h-6 text-purple-700 dark:text-purple-300" />,
    categories: ["featured", "pebble", "security"],
    color: "purple"
  },
  {
    id: 2,
    title: "Secure Agent Communication",
    description: "Using mLTS communication protocols, Pebble enables end-to-end encrypted messaging between agents, ensuring your data remains private and tamper-proof across all interactions.",
    icon: <MessageSquare className="w-6 h-6 text-blue-700 dark:text-blue-300" />,
    categories: ["featured", "pebble", "security"],
    color: "blue"
  },
  {
    id: 3,
    title: "Framework-Agnostic Integration",
    description: "Pebble works seamlessly with any codebase or development environment. Whether you're using React, Angular, Vue, or any other framework, Pebble adapts to your workflow.",
    icon: <Code className="w-6 h-6 text-green-700 dark:text-green-300" />,
    categories: ["featured", "pebble", "integration"],
    color: "green"
  },
  {
    id: 4,
    title: "One-Click Deployment",
    description: "Deploy your Pebble applications with a single click. The streamlined process handles all the complex configurations, server setups, and security protocols automatically.",
    icon: <Rocket className="w-6 h-6 text-pink-700 dark:text-pink-300" />,
    categories: ["pebble", "integration"],
    color: "pink"
  },
  {
    id: 5,
    title: "Federated Registry with Hibiscus",
    description: "Hibiscus provides a federated registry that enables discovery and verification of Pebble agents across networks, creating a trustworthy ecosystem for decentralized applications.",
    icon: <div className="flex justify-center items-center text-xl">🌺</div>,
    categories: ["featured", "hibiscus"],
    color: "orange"
  },
  {
    id: 6,
    title: "Cross-Network Agent Discovery",
    description: "Hibiscus's powerful discovery mechanism allows agents to find and connect with each other across different networks, enabling truly decentralized and interoperable applications.",
    icon: <Users className="w-6 h-6 text-yellow-700 dark:text-yellow-300" />,
    categories: ["hibiscus", "integration"],
    color: "yellow"
  },
  {
    id: 7,
    title: "Collaborative AI Networks",
    description: "Build resilient AI agent networks that collaborate securely through Pebble's communication layer and Hibiscus's registry, creating powerful systems that can solve complex problems together.",
    icon: <Flower2 className="w-6 h-6 text-indigo-700 dark:text-indigo-300" />,
    categories: ["use-cases", "integration"],
    color: "indigo"
  },
  {
    id: 8,
    title: "Zero-Trust Security Model",
    description: "Implement a zero-trust security architecture with Pebble's authentication and Hibiscus's verification systems, ensuring that all connections are authenticated and encrypted end-to-end.",
    icon: <Shield className="w-6 h-6 text-red-700 dark:text-red-300" />,
    categories: ["security", "pebble", "hibiscus"],
    color: "red"
  }
];

const ExampleUseCases = () => {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [isMobile, setIsMobile] = useState(false);
  
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

  const filteredUseCases = useCases.filter(
    useCase => useCase.categories.includes(activeCategory)
  );
  


  const getBackgroundClass = (color: string) => {
    const colorMap: Record<string, string> = {
      purple: "bg-gradient-to-r from-purple-50 to-purple-200 dark:from-purple-900 dark:to-purple-800 border-purple-200 dark:border-purple-800",
      blue: "bg-gradient-to-r from-blue-50 to-blue-200 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-800",
      green: "bg-gradient-to-r from-green-50 to-green-200 dark:from-green-900 dark:to-green-800 border-green-200 dark:border-green-800",
      pink: "bg-gradient-to-r from-pink-50 to-pink-200 dark:from-pink-900 dark:to-pink-800 border-pink-200 dark:border-pink-800",
      yellow: "bg-gradient-to-r from-yellow-50 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 border-yellow-200 dark:border-yellow-800",
      orange: "bg-gradient-to-r from-orange-50 to-orange-200 dark:from-orange-900 dark:to-orange-800 border-orange-200 dark:border-orange-800",
      indigo: "bg-gradient-to-r from-indigo-50 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 border-indigo-200 dark:border-indigo-800",
      red: "bg-gradient-to-r from-red-50 to-red-200 dark:from-red-900 dark:to-red-800 border-red-200 dark:border-red-800",
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="overflow-hidden relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-16 md:py-20" style={{ minHeight: '900px' }}>
      {/* Anchor tag for navigation */}
      <div id="use-cases" className="absolute -top-20"></div>
      {/* Background accent elements - reduced opacity and blur */}
      <div className="absolute top-[5%] right-[10%] w-1/4 h-[30%] bg-blue-100 dark:bg-blue-900/10 opacity-30 blur-xl rounded-full"></div>
      <div className="absolute bottom-[10%] left-[10%] w-1/4 h-[30%] bg-purple-100 dark:bg-purple-900/10 opacity-30 blur-xl rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <span className="text-2xl flex-shrink-0" role="img" aria-label="Pebble and Hibiscus">🐧 + 🌺</span>
            </div>
          </div>
          <h2 className="font-subheading text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400">
            Power of Pebble & Hibiscus
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore the capabilities and use cases of our decentralized agent communication platform
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-6 py-3 rounded-full transition-all text-sm md:text-base shadow-sm",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                  : "bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Use cases grid with content-fit sizing */}
        <div style={{ minHeight: '600px' }} className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
          {filteredUseCases.map((useCase, index) => (
            <Card 
              key={useCase.id} 
              className={cn(
                "shadow-sm hover:shadow-lg border overflow-hidden h-fit",
                getBackgroundClass(useCase.color || 'blue')
              )}
            >
              <CardHeader className="p-5 pb-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm">
                    {useCase.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">{useCase.title}</h3>
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{useCase.description}</p>
                
                {/* Stylized image placeholder */}
                <div className="mt-4 h-40 rounded-lg overflow-hidden shadow-inner relative bg-white/50 dark:bg-black/20 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div aria-hidden="true">
                      {useCase.id === 5 ? (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 15C38.5 15 35.5 19 34 21C31 25 26 31 26 37C26 43 30 48 40 48C50 48 54 43 54 37C54 31 49 25 46 21C44.5 19 41.5 15 40 15Z" fill="#FF9D66"/>
                          <path d="M40 15C38.5 15 37 18 35.5 21C39 23 41 25 40 28C39 31 35 33 30 32C28 37 30 42 40 42C50 42 52 37 50 32C45 33 41 31 40 28C39 25 41 23 44.5 21C43 18 41.5 15 40 15Z" fill="#FF785A"/>
                          <path d="M35 52C33 52 31 57 31 62C31 67 35 71 40 71C45 71 49 67 49 62C49 57 47 52 45 52" stroke="#00A75D" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M30 46C30 46 28 49 28 52C28 55 30 57 33 57C36 57 38 55 38 52C38 49 36 46 36 46" stroke="#00A75D" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M44 46C44 46 42 49 42 52C42 55 44 57 47 57C50 57 52 55 52 52C52 49 50 46 50 46" stroke="#00A75D" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      ) : useCase.id === 1 ? (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M55 30L40 20L25 30V50L40 60L55 50V30Z" fill="#9333EA" fillOpacity="0.2" stroke="#9333EA" strokeWidth="2"/>
                          <path d="M40 20V40M40 40V60M40 40L25 30M40 40L55 30" stroke="#9333EA" strokeWidth="2"/>
                          <circle cx="40" cy="40" r="6" fill="white" stroke="#9333EA" strokeWidth="2"/>
                          <circle cx="25" cy="30" r="4" fill="white" stroke="#9333EA" strokeWidth="2"/>
                          <circle cx="55" cy="30" r="4" fill="white" stroke="#9333EA" strokeWidth="2"/>
                          <circle cx="40" cy="20" r="4" fill="white" stroke="#9333EA" strokeWidth="2"/>
                          <circle cx="40" cy="60" r="4" fill="white" stroke="#9333EA" strokeWidth="2"/>
                          <circle cx="25" cy="50" r="4" fill="white" stroke="#9333EA" strokeWidth="2"/>
                          <circle cx="55" cy="50" r="4" fill="white" stroke="#9333EA" strokeWidth="2"/>
                        </svg>
                      ) : useCase.id === 2 ? (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25 25H55V55H25V25Z" fill="#60A5FA" fillOpacity="0.2"/>
                          <path d="M35 35L45 45M45 35L35 45" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M25 25H55V55H25V25Z" stroke="#2563EB" strokeWidth="2"/>
                          <path d="M25 25L20 20M55 25L60 20M55 55L60 60M25 55L20 60" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M30 20H50M30 60H50" stroke="#2563EB" strokeWidth="2"/>
                          <path d="M20 30V50M60 30V50" stroke="#2563EB" strokeWidth="2"/>
                        </svg>
                      ) : useCase.id === 3 ? (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30 25L40 20L50 25V35L40 40L30 35V25Z" fill="#22C55E" fillOpacity="0.2" stroke="#16A34A" strokeWidth="2"/>
                          <path d="M30 45L40 40L50 45V55L40 60L30 55V45Z" fill="#22C55E" fillOpacity="0.2" stroke="#16A34A" strokeWidth="2"/>
                          <path d="M20 35L30 30L40 35V45L30 50L20 45V35Z" fill="#22C55E" fillOpacity="0.2" stroke="#16A34A" strokeWidth="2"/>
                          <path d="M40 35L50 30L60 35V45L50 50L40 45V35Z" fill="#22C55E" fillOpacity="0.2" stroke="#16A34A" strokeWidth="2"/>
                          <circle cx="40" cy="20" r="3" fill="white" stroke="#16A34A" strokeWidth="2"/>
                          <circle cx="40" cy="60" r="3" fill="white" stroke="#16A34A" strokeWidth="2"/>
                          <circle cx="20" cy="40" r="3" fill="white" stroke="#16A34A" strokeWidth="2"/>
                          <circle cx="60" cy="40" r="3" fill="white" stroke="#16A34A" strokeWidth="2"/>
                        </svg>
                      ) : useCase.id === 4 ? (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 20L20 30V50L40 60L60 50V30L40 20Z" fill="#EC4899" fillOpacity="0.2" stroke="#DB2777" strokeWidth="2"/>
                          <path d="M40 20V60" stroke="#DB2777" strokeWidth="2" strokeDasharray="4 4"/>
                          <path d="M20 30L60 30" stroke="#DB2777" strokeWidth="2" strokeDasharray="4 4"/>
                          <path d="M20 50L60 50" stroke="#DB2777" strokeWidth="2" strokeDasharray="4 4"/>
                          <path d="M30 25L30 55" stroke="#DB2777" strokeWidth="2" strokeDasharray="4 4"/>
                          <path d="M50 25L50 55" stroke="#DB2777" strokeWidth="2" strokeDasharray="4 4"/>
                          <circle cx="40" cy="40" r="8" fill="white" stroke="#DB2777" strokeWidth="2"/>
                          <path d="M40 36V44M36 40H44" stroke="#DB2777" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      ) : useCase.id === 6 ? (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="40" cy="40" r="20" fill="#FBBF24" fillOpacity="0.2" stroke="#D97706" strokeWidth="2"/>
                          <circle cx="30" cy="35" r="6" fill="white" stroke="#D97706" strokeWidth="2"/>
                          <circle cx="50" cy="35" r="6" fill="white" stroke="#D97706" strokeWidth="2"/>
                          <circle cx="30" cy="55" r="6" fill="white" stroke="#D97706" strokeWidth="2"/>
                          <circle cx="50" cy="55" r="6" fill="white" stroke="#D97706" strokeWidth="2"/>
                          <path d="M30 35L50 35M30 35L30 55M30 55L50 55M50 35L50 55" stroke="#D97706" strokeWidth="2"/>
                          <circle cx="40" cy="25" r="6" fill="white" stroke="#D97706" strokeWidth="2"/>
                          <path d="M30 35L40 25L50 35" stroke="#D97706" strokeWidth="2"/>
                        </svg>
                      ) : useCase.id === 7 ? (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 20C42.7614 20 45 22.2386 45 25C45 27.7614 42.7614 30 40 30C37.2386 30 35 27.7614 35 25C35 22.2386 37.2386 20 40 20Z" fill="#818CF8" fillOpacity="0.2" stroke="#4F46E5" strokeWidth="2"/>
                          <path d="M25 35C27.7614 35 30 37.2386 30 40C30 42.7614 27.7614 45 25 45C22.2386 45 20 42.7614 20 40C20 37.2386 22.2386 35 25 35Z" fill="#818CF8" fillOpacity="0.2" stroke="#4F46E5" strokeWidth="2"/>
                          <path d="M40 50C42.7614 50 45 52.2386 45 55C45 57.7614 42.7614 60 40 60C37.2386 60 35 57.7614 35 55C35 52.2386 37.2386 50 40 50Z" fill="#818CF8" fillOpacity="0.2" stroke="#4F46E5" strokeWidth="2"/>
                          <path d="M55 35C57.7614 35 60 37.2386 60 40C60 42.7614 57.7614 45 55 45C52.2386 45 50 42.7614 50 40C50 37.2386 52.2386 35 55 35Z" fill="#818CF8" fillOpacity="0.2" stroke="#4F46E5" strokeWidth="2"/>
                          <path d="M30 30L40 30M35 40L25 40M30 50L40 50M55 40L45 40" stroke="#4F46E5" strokeWidth="2"/>
                          <path d="M35 30L25 37M25 43L35 50M45 50L55 43M55 37L45 30" stroke="#4F46E5" strokeWidth="2"/>
                        </svg>
                      ) : (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30 25C30 22.2386 32.2386 20 35 20H45C47.7614 20 50 22.2386 50 25V55C50 57.7614 47.7614 60 45 60H35C32.2386 60 30 57.7614 30 55V25Z" fill="#F87171" fillOpacity="0.2" stroke="#DC2626" strokeWidth="2"/>
                          <path d="M30 32H50M30 48H50" stroke="#DC2626" strokeWidth="2"/>
                          <path d="M40 25V55" stroke="#DC2626" strokeWidth="2"/>
                          <path d="M35 25C35 27.7614 37.2386 30 40 30C42.7614 30 45 27.7614 45 25" stroke="#DC2626" strokeWidth="2"/>
                          <path d="M45 55C45 52.2386 42.7614 50 40 50C37.2386 50 35 52.2386 35 55" stroke="#DC2626" strokeWidth="2"/>
                          <circle cx="35" cy="40" r="2" fill="#DC2626"/>
                          <circle cx="45" cy="40" r="2" fill="#DC2626"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white/70 dark:bg-black/70 text-xs px-2 py-1 rounded-md text-gray-700 dark:text-gray-300">
                    {useCase.categories.includes("pebble") && useCase.categories.includes("hibiscus") ? "Pebble + Hibiscus" : 
                     useCase.categories.includes("pebble") ? "Pebble" : 
                     useCase.categories.includes("hibiscus") ? "Hibiscus" : "Integration"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleUseCases;
