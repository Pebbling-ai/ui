
import React from "react";
import { Laptop, Smartphone } from "lucide-react";

interface DeviceFeatureShowcaseProps {
  title: string;
  description: string;
  imageUrl: string;
  deviceType: "macbook" | "iphone";
  websiteUrl: string;
}

const DeviceFeatureShowcase = ({
  title,
  description,
  imageUrl,
  deviceType,
  websiteUrl,
}: DeviceFeatureShowcaseProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-12 items-center my-16">
      <div className="flex-1 text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex items-center">
          {deviceType === "macbook" ? (
            <Laptop className="h-6 w-6 text-gray-700 mr-3" />
          ) : (
            <Smartphone className="h-6 w-6 text-gray-700 mr-3" />
          )}
          <span className="font-medium">{websiteUrl}</span>
        </div>
      </div>
      
      <div className="flex-1">
        {deviceType === "macbook" ? (
          <div className="macbook-screen relative w-full aspect-[16/10] p-3 pb-8 bg-gray-900 rounded-t-lg">
            <div className="absolute top-1 left-0 right-0 flex justify-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            
            <div className="h-full bg-white rounded-t overflow-hidden">
              <div className="w-full h-8 bg-gray-100 flex items-center px-4 border-b border-gray-200">
                <div className="flex items-center space-x-3 w-full">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 text-center overflow-hidden">
                      {websiteUrl}
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <img 
                  src={imageUrl}
                  alt={`${title} demo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-2.5 bg-gray-800 rounded-b"></div>
          </div>
        ) : (
          <div className="iphone-screen relative w-[280px] mx-auto aspect-[9/19] bg-gray-900 rounded-[3rem] p-2">
            <div className="absolute top-2 left-1/3 right-1/3 h-6 bg-black rounded-b-xl"></div>
            <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden">
              <div className="w-full h-7 bg-gray-100 flex items-center px-4 border-b border-gray-200">
                <div className="text-xs text-gray-600 text-center w-full overflow-hidden">
                  {websiteUrl}
                </div>
              </div>
              <div className="overflow-hidden">
                <img 
                  src={imageUrl}
                  alt={`${title} demo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-1/3 h-1.5 bg-black rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceFeatureShowcase;
