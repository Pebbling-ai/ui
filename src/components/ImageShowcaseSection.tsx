
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
  <Card className="overflow-hidden rounded-xl shadow-elegant">
    <div className="relative">
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-all cursor-pointer">
          <Play className="h-6 w-6 text-white fill-white" />
        </div>
      </div>
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </CardContent>
  </Card>
);

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience the Future Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Our cutting-edge humanoid robot is designed to transform how we interact 
            with technology in everyday environments.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl animate-on-scroll">
          <Carousel className="mx-auto">
            <CarouselContent>
              <CarouselItem>
                <VideoCard 
                  thumbnail="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  title="Next Gen Interaction"
                  description="See how our robots seamlessly interact with humans in collaborative environments"
                />
              </CarouselItem>
              <CarouselItem>
                <VideoCard 
                  thumbnail="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  title="Office Assistant Demo"
                  description="Witness productivity enhancements through intelligent task management"
                />
              </CarouselItem>
              <CarouselItem>
                <VideoCard 
                  thumbnail="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                  title="Adaptive Learning"
                  description="Our AI continuously improves through real-world interactions"
                />
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static mx-2 translate-y-0" />
              <CarouselNext className="static mx-2 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
