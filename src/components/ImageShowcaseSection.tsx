
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoCard = ({ thumbnail, title, description }: { thumbnail: string, title: string, description: string }) => (
  <Card className="overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-300 hover:scale-[1.03] transition-all duration-300 bg-white">
    <div className="relative">
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center hover:bg-white/90 hover:scale-110 transition-all cursor-pointer">
          <Play className="h-6 w-6 text-[#3A5BA0]" />
        </div>
      </div>
    </div>
    <CardContent className="p-6 bg-white">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </CardContent>
  </Card>
);

const ImageShowcaseSection = () => {
  return (
    <section className="w-full py-24 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
         
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              See our AI agents in action
            </h2>
            <p className="text-lg text-gray-600">
              Each agent learns and adapts with every interaction, making your team more efficient and effective.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-5xl animate-on-scroll">
          <Carousel className="mx-auto">
            <CarouselContent>
              <CarouselItem className="animate-on-scroll">
                <VideoCard 
                  thumbnail="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  title="Next Gen Interaction"
                  description="See how our robots seamlessly interact with humans in collaborative environments"
                />
              </CarouselItem>
              <CarouselItem className="animate-on-scroll">
                <VideoCard 
                  thumbnail="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  title="Office Assistant Demo"
                  description="Witness productivity enhancements through intelligent task management"
                />
              </CarouselItem>
              <CarouselItem className="animate-on-scroll">
                <VideoCard 
                  thumbnail="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                  title="Adaptive Learning"
                  description="Our AI continuously improves through real-world interactions"
                />
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mx-2 translate-y-0 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300" />
              <CarouselNext className="static mx-2 translate-y-0 border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
