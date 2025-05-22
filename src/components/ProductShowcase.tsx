
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Network, BarChart3, Server, Users, Activity, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  // State for statistics data (would be fetched from API later)
  const [stats, setStats] = useState({
    totalAgents: 1358,
    activeAgents: 842,
    mcpServers: 127,
    globalNodes: 86
  });

  // Dummy function to simulate future API call
  useEffect(() => {
    // This would be replaced with a real API call in the future
    const fetchNetworkStats = () => {
      // Mock data for now
      console.log("Future implementation: This will fetch real network data");
    };

    fetchNetworkStats();
  }, []);

  // Calculate percentage for bar chart visualization
  const getPercentage = (value, max) => {
    return Math.min(100, (value / max) * 100);
  };

  return (
    <section className="overflow-hidden relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-20">
      {/* Background blur gradient elements similar to Hero.tsx */}
      <div className="absolute -top-[10%] -left-[5%] w-1/3 h-[50%] bg-blue-100 dark:bg-blue-900/20 opacity-40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-[10%] -right-[5%] w-1/4 h-[40%] bg-purple-100 dark:bg-purple-900/20 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Decorative hibiscus emoji above the heading */}
          <div className="relative mb-6 inline-block">
            <div className="absolute left-1/2 -top-14 transform -translate-x-1/2 pointer-events-none">
              <div className="relative">
                {/* Glowing background for the emoji */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/30 via-orange-400/30 to-red-500/30 blur-xl w-24 h-24 animate-pulse"></div>
                {/* Animated emoji */}
                <span 
                  className="text-5xl md:text-6xl inline-block animate-float" 
                  role="img" 
                  aria-label="Hibiscus Flower"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 150, 150, 0.5))',
                    transform: 'translateZ(0)', // hardware acceleration
                  }}
                >
                  🌺
                </span>
              </div>
            </div>
          </div>
          
          <h2 className="font-subheading text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400">
            The Growing Hibiscus
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of developers and organizations harnessing the power of Pebbling's decentralized agent network
          </p>
        </div>

        {/* Network Statistics with Bar Charts */}
        <div className="mb-20">
          {/* Hexagonal/Honeycomb-inspired Network Statistics */}
          <div className="relative py-10">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none"></div>
            
            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {/* Total Agents - Circular Progress */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="relative mb-4">
                  {/* Background circle */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-600/20 flex items-center justify-center"></div>
                  
                  {/* Circular progress - using conic-gradient */}
                  <div 
                    className="absolute top-0 left-0 w-32 h-32 rounded-full overflow-hidden" 
                    style={{
                      background: `conic-gradient(from 0deg, #3b82f6 ${getPercentage(stats.totalAgents, 2000) * 3.6}deg, transparent 0deg)`,
                      transform: 'rotate(-90deg)',
                    }}
                  ></div>
                  
                  {/* Inner circle with text */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white dark:bg-zinc-800 rounded-full flex flex-col items-center justify-center border-4 border-white dark:border-zinc-800 shadow-inner">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">{stats.totalAgents.toLocaleString()}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Agents</span>
                  </div>
                  
                  {/* Small decorative dots around the circle */}
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute w-2 h-2 bg-blue-500 rounded-full"
                      style={{
                        top: `calc(50% + ${Math.sin(i * Math.PI / 4) * 60}px)`,
                        left: `calc(50% + ${Math.cos(i * Math.PI / 4) * 60}px)`,
                        opacity: i % 2 === 0 ? 0.8 : 0.4,
                        transform: `scale(${i % 3 === 0 ? 1.2 : 1})`,
                      }}
                    ></div>
                  ))}
                </div>
                <span className="text-center text-sm font-semibold text-gray-800 dark:text-gray-200">Total Agents</span>
              </div>
              
              {/* Active Agents - Hexagon Style */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="relative mb-4">
                  {/* Hexagon shape using clip-path */}
                  <div className="relative w-32 h-32 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-500/20 before:to-emerald-600/20 before:clip-path-hexagon"></div>
                  
                  {/* Radial progress overlay */}
                  <div 
                    className="absolute top-0 left-0 w-32 h-32 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-500 before:to-emerald-600 before:clip-path-hexagon" 
                    style={{clipPath: `polygon(50% 0%, 50% 0%, 50% ${getPercentage(stats.activeAgents, stats.totalAgents)}%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% ${getPercentage(stats.activeAgents, stats.totalAgents)}%)`}}
                  ></div>
                  
                  {/* Center content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white dark:bg-zinc-800 rounded-full flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-green-600 dark:text-green-400 tracking-tight">{stats.activeAgents.toLocaleString()}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Active</span>
                  </div>
                  
                  {/* Animated particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-green-500 rounded-full animate-float"
                        style={{
                          top: `${10 + (i * 15)}%`,
                          left: `${20 + (i * 10)}%`,
                          animationDelay: `${i * 0.8}s`,
                          opacity: 0.7,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <span className="text-center text-sm font-semibold text-gray-800 dark:text-gray-200">Active Agents</span>
              </div>
              
              {/* MCP Servers - Flower-inspired (Hibiscus theme) */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="relative mb-4">
                  {/* Flower petals background */}
                  <div className="relative w-32 h-32">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500/20 rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2 transform-gpu"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-14px) scale(${1 + (i % 2) * 0.1})`,
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Active petals based on percentage */}
                  <div className="absolute top-0 left-0 w-32 h-32">
                    {[...Array(Math.ceil(5 * getPercentage(stats.mcpServers, 200) / 100))].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full blur-[1px] -translate-x-1/2 -translate-y-1/2 transform-gpu"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-14px)`,
                          opacity: 0.6,
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Center content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white dark:bg-zinc-800 rounded-full flex flex-col items-center justify-center border-4 border-white dark:border-zinc-800">
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400 tracking-tight">{stats.mcpServers.toLocaleString()}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Servers</span>
                  </div>
                </div>
                <span className="text-center text-sm font-semibold text-gray-800 dark:text-gray-200">MCP Servers</span>
              </div>
              
              {/* Global Nodes - World Map Inspired */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="relative mb-4">
                  {/* World map dots pattern */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-orange-500/10 to-amber-600/10 flex items-center justify-center">
                    {/* World map dot pattern - simplified representation */}
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-orange-500/40 rounded-full"
                        style={{
                          top: `${15 + Math.sin(i * 0.5) * 40 + (i % 5) * 10}%`,
                          left: `${15 + Math.cos(i * 0.7) * 40 + (i % 4) * 10}%`,
                          transform: `scale(${0.5 + (i % 3) * 0.5})`,
                        }}
                      ></div>
                    ))}
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
                      {[...Array(6)].map((_, i) => {
                        const x1 = 16 + Math.sin(i * 0.9) * 40 + (i % 3) * 10;
                        const y1 = 16 + Math.cos(i * 0.7) * 40 + (i % 4) * 5;
                        const x2 = 16 + Math.sin((i + 2) * 0.8) * 40 + ((i + 1) % 3) * 15;
                        const y2 = 16 + Math.cos((i + 2) * 0.6) * 40 + ((i + 1) % 4) * 10;
                        
                        return (
                          <line 
                            key={i} 
                            x1={`${x1}%`} 
                            y1={`${y1}%`} 
                            x2={`${x2}%`} 
                            y2={`${y2}%`} 
                            stroke="#f97316" 
                            strokeWidth="1" 
                            strokeDasharray="3,2"
                          />
                        );
                      })}
                    </svg>
                  </div>
                  
                  {/* Center content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white dark:bg-zinc-800 rounded-full flex flex-col items-center justify-center border-4 border-white dark:border-zinc-800">
                    <span className="text-xl font-bold text-orange-600 dark:text-orange-400 tracking-tight">{stats.globalNodes.toLocaleString()}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Nodes</span>
                  </div>
                </div>
                <span className="text-center text-sm font-semibold text-gray-800 dark:text-gray-200">Global Nodes</span>
              </div>
            </div>
          </div>

          {/* Network Status Banner */}
          <div className="relative w-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center justify-between overflow-hidden group hover:shadow-md transition-all duration-300">
            {/* Animated pulse wave on hover */}
            <div className="absolute inset-0 bg-green-400/5 scale-0 group-hover:scale-100 rounded-full transition-all duration-700 origin-center"></div>
            
            <div className="flex items-center relative z-10">
              <div className="relative">
                <div className="absolute -inset-1 bg-green-400/30 rounded-full blur-sm animate-pulse"></div>
                <Activity className="w-5 h-5 text-green-600 dark:text-green-400 relative" />
              </div>
              <span className="ml-2 text-sm text-green-800 dark:text-green-300 font-medium">Network Status: Operational</span>
            </div>
            
            <div className="flex items-center relative z-10">
              <div className="p-1 rounded-full bg-blue-400/10">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="ml-2 text-sm text-blue-800 dark:text-blue-300 font-medium">Hibiscus Registry: 
                <span className="inline-flex items-center bg-blue-100/50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full ml-1">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse mr-1"></span>
                  {stats.mcpServers} Servers Online
                </span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Pebble Product Card */}
          <Card className="border border-gray-100 dark:border-zinc-700 shadow-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-zinc-800/90 overflow-hidden">
           <CardHeader className="pb-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-xl flex-shrink-0" role="img" aria-label="Penguin">🐧</span>
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-left mb-1 text-gray-900 dark:text-white">Pebble</CardTitle>
                  <CardDescription className="text-left text-gray-500 dark:text-gray-400">Intelligent Agent Framework</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
            
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-left">
                    The intelligent agent framework that adapts to your needs, bringing a new dimension to software development through advanced autonomy and interoperability.
                  </p>
                  <ul className="space-y-3 text-left">
                    {[
                      "End-to-end encrypted communication",
                      "Decentralized identity management",
                      "Framework-agnostic integration"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full md:w-2/5 relative rounded-xl overflow-hidden aspect-square">
                  <img 
                    src="/hibiscus.png" 
                    alt="Pebble Agent" 
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Link to="/pebbling">
                <Button 
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-md group w-full sm:w-auto rounded-full"
                >
                  Explore Pebble
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          {/* Hibiscus Product Card */}
          <Card className="border border-gray-100 dark:border-zinc-700 shadow-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-zinc-800/90 overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                    <span className="text-xl flex-shrink-0" role="img" aria-label="Hibiscus Flower">🌺</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-left mb-1 text-gray-900 dark:text-white">Hibiscus</CardTitle>
                    <CardDescription className="text-left text-gray-500 dark:text-gray-400">Federated Registry</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-left">
                    Our advanced federated registry that connects agents and systems seamlessly, enabling unprecedented levels of discovery and secure communication.
                  </p>
                  <ul className="space-y-3 text-left">
                    {[
                      "Global agent discovery",
                      "Multi-Channel Protocol (MCP) support",
                      "Decentralized verification system"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 w-1.5 h-1.5 bg-orange-600 dark:bg-orange-400 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full md:w-2/5 relative rounded-xl overflow-hidden aspect-square">
                  <img 
                    src="/hibiscus.png" 
                    alt="Hibiscus Registry" 
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Link to="/hibiscus">
                <Button 
                  className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white shadow-md group w-full sm:w-auto rounded-full"
                >
                  Discover Hibiscus
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
