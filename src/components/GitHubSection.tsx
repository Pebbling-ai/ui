import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, Users, ArrowRight, Code, Fingerprint, Shield, MessageCircle, Heart, Globe, Sparkles, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const GitHubSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pebbleStars, setPebbleStars] = useState<number | null>(null);
  const [pebbleContributors, setPebbleContributors] = useState<number | null>(null);
  const [hibiscusStars, setHibiscusStars] = useState<number | null>(null);
  const [hibiscusContributors, setHibiscusContributors] = useState<number | null>(null);
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
      const elements = document.querySelectorAll('.github-parallax');
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

  useEffect(() => {
    const fetchData = async (
      repoOwner: string,
      repoName: string,
      setStars: (stars: number) => void,
      setContributors: (contributors: number) => void,
      defaultStars: number,
      defaultContributors: number
    ) => {
      try {
        // Set default values immediately so UI has something to show
        setStars(defaultStars);
        setContributors(defaultContributors);
        
        // Fetch repository details (for stars)
        const repoRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
        if (repoRes.ok) {
          const repoData = await repoRes.json();
          setStars(repoData.stargazers_count);
        }

        // Fetch contributors
        let contributorCount = 0;
        // Try to get count from Link header first (more efficient for many contributors)
        const contributorsResPerPage1 = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors?per_page=1&anon=true`);
        if (contributorsResPerPage1.ok) {
          const linkHeader = contributorsResPerPage1.headers.get('Link');
          if (linkHeader) {
            const match = linkHeader.match(/<[^>]+[?&]page=(\d+)>;\s*rel="last"/);
            if (match) {
              contributorCount = parseInt(match[1], 10);
              setContributors(contributorCount);
            }
          }
        }

        if (contributorCount === 0) {
          // Fallback: if Link header trick didn't work or repo has few contributors, fetch all and count
          const allContributorsRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors?anon=true`);
          if (allContributorsRes.ok) {
            const allContributorsData = await allContributorsRes.json();
            setContributors(allContributorsData.length);
          }
        }
      } catch (error) {
        console.error(`Error fetching data for ${repoName}:`, error);
        // Keep the default values we set earlier
      }
    };

    fetchData("pebbling-ai", "pebble", setPebbleStars, setPebbleContributors, 79, 10);
    fetchData("pebbling-ai", "hibiscus", setHibiscusStars, setHibiscusContributors, 45, 7);
  }, []);

  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-16 animate-on-scroll"
      id="github-section" 
      ref={containerRef}
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[20%] -right-[5%] w-1/2 h-[60%] bg-purple-100 dark:bg-purple-900/20 opacity-60 blur-3xl rounded-full animate-pulse github-parallax" data-speed="0.08"></div>
      <div className="absolute bottom-[10%] -left-[5%] w-1/3 h-[40%] bg-blue-100 dark:bg-blue-900/20 opacity-50 blur-3xl rounded-full animate-pulse github-parallax" data-speed="0.05"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              <Star className="w-3 h-3 mr-1" /> Community-Driven Development
            </span>
          </div>
          
          <h2 
            className="font-subheading text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400"
          >
            From Seed to Hibiscus: Our Open Source Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Join our thriving community in nurturing the ecosystem. Together, we're growing the next generation of agent communication infrastructure.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Pebble Repository Card - The Seed */}
          <div className="github-parallax" data-speed="0.03">
            <Card className="overflow-hidden border-0 transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 shadow-xl hover:shadow-2xl hover:translate-y-[-5px] rounded-2xl">
              <CardContent className="p-0">
                <div className="flex flex-col items-center h-full">
                  <div className="p-6 w-full flex justify-center items-center border-b border-gray-100/50 dark:border-gray-700/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-800/30 dark:to-purple-800/30"></div>
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label="Seed">🌱</span>
                      <Github className="h-14 w-14 text-gray-800 dark:text-white" />
                    </div>
                  </div>
                  <div className="p-8 w-full flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Pebble Protocol</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-left text-lg">
                      The seed of our ecosystem - a core protocol enabling secure, decentralized agent communication for the next generation of AI applications.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 border border-blue-200 dark:border-blue-800">
                        <Star className="h-5 w-5 text-amber-500" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{pebbleStars !== null ? `${pebbleStars} Stars` : 'Loading...'}</span>
                      </div>
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40 border border-purple-200 dark:border-purple-800">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{pebbleContributors !== null ? `${pebbleContributors} Contributors` : 'Loading...'}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200/50 dark:border-blue-800/30">
                        <Fingerprint className="w-5 h-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Decentralized Identity Core</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200/50 dark:border-purple-800/30">
                        <Code className="w-5 h-5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Framework-Agnostic Integration</span>
                      </div>
                    </div>
                    
                    <div className="text-left">
                      <a 
                        href="https://github.com/pebbling-ai/pebble" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg flex items-center justify-center group rounded-full cursor-pointer text-sm font-medium leading-5 py-3 px-6 transition-all duration-300"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Explore Pebble
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Hibiscus Repository Card - In Full Bloom */}
          <div className="github-parallax" data-speed="0.05">
            <Card className="overflow-hidden border-0 transition-all duration-300 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-900/30 dark:to-orange-900/30 shadow-xl hover:shadow-2xl hover:translate-y-[-5px] rounded-2xl">
              <CardContent className="p-0">
                <div className="flex flex-col items-center h-full">
                  <div className="p-6 w-full flex justify-center items-center border-b border-gray-100/50 dark:border-gray-700/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-orange-100/50 dark:from-pink-800/30 dark:to-orange-800/30"></div>
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label="Hibiscus Flower">🌺</span>
                      <Github className="h-14 w-14 text-gray-800 dark:text-white" />
                    </div>
                  </div>
                  <div className="p-8 w-full flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-600 dark:from-pink-400 dark:to-orange-400">Hibiscus Registry</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-left text-lg">
                      The full bloom of our vision - a federated registry enabling thousands of AI agents to discover, communicate and collaborate seamlessly.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/40 dark:to-pink-800/40 border border-pink-200 dark:border-pink-800">
                        <Star className="h-5 w-5 text-amber-500" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{hibiscusStars !== null ? `${hibiscusStars} Stars` : 'Loading...'}</span>
                      </div>
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/40 dark:to-orange-800/40 border border-orange-200 dark:border-orange-800">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{hibiscusContributors !== null ? `${hibiscusContributors} Contributors` : 'Loading...'}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-pink-50 to-pink-100/50 dark:from-pink-900/20 dark:to-pink-800/20 rounded-lg border border-pink-200/50 dark:border-pink-800/30">
                        <Shield className="w-5 h-5 flex-shrink-0 text-pink-600 dark:text-pink-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Federated Agent Registry</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200/50 dark:border-orange-800/30">
                        <span className="text-lg flex-shrink-0" role="img" aria-label="Network">🌐</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Agent Discovery & Orchestration</span>
                      </div>
                    </div>
                    
                    <div className="text-left">
                      <a 
                        href="https://github.com/pebbling-ai/hibiscus" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white shadow-lg flex items-center justify-center group rounded-full cursor-pointer text-sm font-medium leading-5 py-3 px-6 transition-all duration-300"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Explore Hibiscus
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto my-16 px-6 py-10 bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 animate-on-scroll overflow-hidden relative">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-xl"></div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 border border-purple-200/50 dark:border-purple-800/30">
              <Heart className="h-5 w-5 text-pink-500" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Built by the Pebbling team from Amsterdam <span role="img" aria-label="Tulip">🌷</span></span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {/* Card 1: Vision */}
              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-all hover:shadow-md">
                <Globe className="h-8 w-8 text-blue-500 mb-4" />
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A world where agents communicate securely, openly, and effortlessly.
                </p>
              </div>
              
              {/* Card 2: Community */}
              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-all hover:shadow-md">
                <MessageSquare className="h-8 w-8 text-purple-500 mb-4" />
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Join Us</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Have questions or ideas? Connect with us on Discord—we'd love to hear from you!
                </p>
              </div>
              
              {/* Card 3: Future */}
              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-all hover:shadow-md">
                <Sparkles className="h-8 w-8 text-amber-500 mb-4" />
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">The Future</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Together, let's build the foundation for the next generation of AI agent collaboration.
                </p>
              </div>
            </div>
            
            <p className="font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400">
              Happy Pebbling! <span role="img" aria-label="Penguin">🐧</span><span role="img" aria-label="Rocket">🚀</span><span role="img" aria-label="Sparkles">✨</span>
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Every contribution helps our ecosystem flourish. From tiny pebbles to beautiful hibiscus, join us in shaping the future of agent communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/pebbling-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white shadow-md inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Repositories
            </a>
            <a 
              href="https://discord.gg/pebbling-community" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Our Discord Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;