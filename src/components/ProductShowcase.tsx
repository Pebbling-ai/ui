
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Next Generation AI Integration
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our flagship products designed to revolutionize how you interact with technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Pebble Product Card */}
          <Card className="border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-300 hover:scale-[1.02] transition-all duration-300 bg-white overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold text-left mb-1">Pebble</CardTitle>
                  <CardDescription className="text-left text-gray-500">Humanoid Companion</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <p className="text-gray-700 mb-6 text-left">
                    The humanoid companion that learns and adapts alongside you, bringing a new dimension to human-machine interaction through advanced motion and cognitive capabilities.
                  </p>
                  <ul className="space-y-3 text-left">
                    {[
                      "Code-driven motion control",
                      "Adaptive learning algorithms",
                      "Advanced security protocols"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 w-1.5 h-1.5 bg-[#3A5BA0] rounded-full"></span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full md:w-2/5 relative">
                  <div className="aspect-square overflow-hidden rounded-lg p-4 bg-gray-50">
                    <img 
                      src="/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png" 
                      alt="Pebble Humanoid" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Button 
                variant="ghost" 
                className="text-black hover:bg-gray-100 group w-full justify-center sm:w-auto sm:justify-start"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Hibiscus Product Card */}
          <Card className="border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-300 hover:scale-[1.02] transition-all duration-300 bg-white overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold text-left mb-1">Hibiscus</CardTitle>
                  <CardDescription className="text-left text-gray-500">Network Intelligence</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <p className="text-gray-700 mb-6 text-left">
                    Our advanced network intelligence platform that connects devices and systems seamlessly, enabling unprecedented levels of automation and data-driven insights.
                  </p>
                  <ul className="space-y-3 text-left">
                    {[
                      "Global network integration",
                      "End-to-end encryption",
                      "Multi-layered architecture"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 w-1.5 h-1.5 bg-[#3A5BA0] rounded-full"></span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full md:w-2/5 relative">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-50 p-4 relative">
                    <img 
                      src="/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png" 
                      alt="Hibiscus Network" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Button 
                variant="ghost" 
                className="text-black hover:bg-gray-100 group w-full justify-center sm:w-auto sm:justify-start"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
