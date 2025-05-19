
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, Users } from "lucide-react";

const GitHubSection = () => {
  return (
    <section className="py-12 animate-on-scroll opacity-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title mb-2">Proudly Open Source</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our projects are built with transparency and collaboration in mind. Join our growing community of contributors on GitHub.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Pebble Repository Card */}
          <Card className="overflow-hidden border-2 border-gray-200 hover:border-pulse-300 transition-all duration-300 bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col items-center h-full">
                <div className="p-6 w-full flex justify-center items-center border-b border-gray-100">
                  <Github className="h-16 w-16 text-gray-800" />
                </div>
                <div className="p-6 w-full flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-left">Pebble Protocol</h3>
                  <p className="text-gray-600 mb-6 text-left">
                    An advanced agent communication protocol for the next generation of AI applications.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
                      <Star className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">4 Stars</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">5 Contributors</span>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <a 
                      href="https://github.com/pebble/repository" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-primary inline-flex items-center"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Hibiscus Repository Card */}
          <Card className="overflow-hidden border-2 border-gray-200 hover:border-pulse-300 transition-all duration-300 bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col items-center h-full">
                <div className="p-6 w-full flex justify-center items-center border-b border-gray-100">
                  <Github className="h-16 w-16 text-gray-800" />
                </div>
                <div className="p-6 w-full flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-left">Hibiscus</h3>
                  <p className="text-gray-600 mb-6 text-left">
                    A platform enabling thousands of AI agents to communicate and provide assistance to users.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
                      <Star className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">7 Stars</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">8 Contributors</span>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <a 
                      href="https://github.com/hibiscus/repository" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-primary inline-flex items-center"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
