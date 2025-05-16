
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Rocket, Layers, Globe, Shield } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background blur elements for aesthetics */}
      <div className="absolute -bottom-[10%] -left-[5%] w-1/3 h-[50%] bg-pulse-gradient opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute top-[20%] -right-[5%] w-1/4 h-[40%] bg-pulse-gradient opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4 opacity-0 animate-fade-in">
            <span>Our Products</span>
          </div>
          <h2 className="section-title mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Next Generation AI Integration
          </h2>
          <p className="section-subtitle mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Meet our flagship products designed to revolutionize how you interact with technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Pebble Product Card */}
          <div className="relative group">
            <Card className="overflow-hidden border-0 shadow-lg h-full transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pulse-gradient opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity"></div>
              
              <CardHeader className="pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-display font-bold text-left mb-2">Pebble</CardTitle>
                    <CardDescription className="text-left text-pulse-600 font-medium">Humanoid Companion</CardDescription>
                  </div>
                  <div className="p-3 bg-pulse-50 rounded-full text-pulse-500">
                    <Rocket size={24} />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <p className="text-gray-700 mb-6 text-left">
                      The humanoid companion that learns and adapts alongside you, bringing a new dimension to human-machine interaction through advanced motion and cognitive capabilities.
                    </p>
                    <ul className="space-y-3 text-left">
                      {[
                        { icon: Code, text: "Code-driven motion control" },
                        { icon: Layers, text: "Adaptive learning algorithms" },
                        { icon: Shield, text: "Advanced security protocols" }
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 p-1 rounded-full bg-pulse-50 text-pulse-500">
                            <item.icon size={16} />
                          </span>
                          <span className="text-sm text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="w-full md:w-2/5 relative">
                    <div className="aspect-square overflow-hidden rounded-2xl  p-4 relative">
                      <img 
                        src="/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png" 
                        alt="Pebble Humanoid" 
                        className="object-contain w-full h-full"
                      />
                      <div className="absolute inset-0  rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4">
                <Button 
                  variant="ghost" 
                  className="text-pulse-600 hover:text-pulse-700 hover:bg-pulse-50 group w-full justify-center sm:w-auto sm:justify-start"
                >
                  Learn More About Pebble 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Hibiscus Product Card */}
          <div className="relative group">
            <Card className="overflow-hidden border-0 shadow-lg h-full transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pulse-gradient opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity"></div>
              
              <CardHeader className="pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-display font-bold text-left mb-2">Hibiscus</CardTitle>
                    <CardDescription className="text-left text-pulse-600 font-medium">Network Intelligence</CardDescription>
                  </div>
                  <div className="p-3 bg-pulse-50 rounded-full text-pulse-500">
                    <Globe size={24} />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <p className="text-gray-700 mb-6 text-left">
                      Our advanced network intelligence platform that connects devices and systems seamlessly, enabling unprecedented levels of automation and data-driven insights.
                    </p>
                    <ul className="space-y-3 text-left">
                      {[
                        { icon: Globe, text: "Global network integration" },
                        { icon: Shield, text: "End-to-end encryption" },
                        { icon: Layers, text: "Multi-layered architecture" }
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 p-1 rounded-full bg-pulse-50 text-pulse-500">
                            <item.icon size={16} />
                          </span>
                          <span className="text-sm text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="w-full md:w-2/5 relative">
                    <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-b from-pulse-50 to-transparent p-4 relative">
                      <img 
                        src="/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png" 
                        alt="Hibiscus Network" 
                        className="object-contain w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4">
                <Button 
                  variant="ghost" 
                  className="text-pulse-600 hover:text-pulse-700 hover:bg-pulse-50 group w-full justify-center sm:w-auto sm:justify-start"
                >
                  Learn More About Hibiscus
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
