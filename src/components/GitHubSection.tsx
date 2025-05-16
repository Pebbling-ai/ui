
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, Users } from "lucide-react";

const GitHubSection = () => {
  return (
    <section className="py-12  animate-on-scroll opacity-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
         
          <h2 className="section-title mb-2">Proudly Open Source</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pebble is built with transparency and collaboration in mind. Join our growing community of contributors on GitHub.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden border-2 border-gray-200 hover:border-pulse-300 transition-all duration-300 bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className=" p-8 w-full md:w-1/3 flex justify-center items-center">
                  <Github className="h-24 w-24 text-gray-800" />
                </div>
                <div className="p-8 w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-left">Pebble on GitHub</h3>
                  <p className="text-gray-600 mb-6 text-left">
                    We believe in the power of community-driven development. Check out our repository, star it, or even contribute to the project.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2  px-4 py-2 rounded-full">
                      <Star className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">4 Stars</span>
                    </div>
                    <div className="flex items-center gap-2  px-4 py-2 rounded-full">
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
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
