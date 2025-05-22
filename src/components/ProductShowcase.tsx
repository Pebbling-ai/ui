
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight,Bot, Network } from "lucide-react";
import { Link } from "react-router-dom";
const ProductShowcase = () => {
  return (
    <section className="section-container">
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
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-gray-50">
        <Bot className="w-6 h-6 text-black" />
      </div>
      <div>
        <CardTitle className="text-2xl font-bold text-left mb-1">Pebble</CardTitle>
        <CardDescription className="text-left text-gray-500">Humanoid Companion</CardDescription>
      </div>
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
                 
                    <img 
                      src="/hibiscus.png" 
                      alt="Pebble Humanoid" 
                      className="object-cover w-full h-full"
                    />
                  
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Link to="/pebbling">
              <Button 
                variant="ghost" 
                className="bg-gray-100 text-black hover:bg-gray-100 group w-full justify-center sm:w-auto sm:justify-start"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </Link>
            </CardFooter>
          </Card>
          
          {/* Hibiscus Product Card */}
          <Card className="border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-300 hover:scale-[1.02] transition-all duration-300 bg-white overflow-hidden">
            <CardHeader className="pb-0">
  <div className="flex justify-between items-start">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-gray-50">
        <Network className="w-6 h-6 text-black" />
      </div>
      <div>
        <CardTitle className="text-2xl font-bold text-left mb-1">Hibiscus</CardTitle>
        <CardDescription className="text-left text-gray-500">Network Intelligence</CardDescription>
      </div>
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
                
                <div className="w-full md:w-2/5 h-full relative">
                  
                    <img 
                      src="/hibiscus.png" 
                      alt="Hibiscus Network" 
                      className="object-cover w-full h-full"
                    />
                  
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="pt-4">
              <Link to="/hibiscus">
              <Button 
                variant="ghost" 
                className="bg-gray-100 text-black hover:bg-gray-100 group w-full justify-center sm:w-auto sm:justify-start"
              >
                Learn More
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
