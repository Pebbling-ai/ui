
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Book, FileSearch, BarChart3, Briefcase, BookOpen, Users } from "lucide-react";

// Define the categories for filtering
const categories = [
  { id: "featured", name: "Featured" },
  { id: "research", name: "Research" },
  { id: "productivity", name: "Productivity" },
  { id: "education", name: "Education" },
  { id: "data-analysis", name: "Data Analysis" },
  { id: "life", name: "Life" },
];

// Define the use cases with their icons
const useCases = [
  {
    id: 1,
    title: "Trip to Japan in April",
    description: "Pebble integrates comprehensive travel information to create personalized itineraries and produces a custom travel handbook tailored specifically for your Japanese adventure.",
    icon: <BookOpen className="w-6 h-6" />,
    categories: ["featured", "life"]
  },
  {
    id: 2,
    title: "Interactive Course on Momentum Theorem",
    description: "Pebble develops engaging video presentations for middle school educators, clearly explaining the momentum theorem through accessible and educational content.",
    icon: <Book className="w-6 h-6" />,
    categories: ["featured", "education"]
  },
  {
    id: 3,
    title: "Comparative Analysis of Insurance Policies",
    description: "Looking to compare insurance options? Pebble generates clear, structured comparison tables highlighting key policy information with optimal visualization.",
    icon: <FileSearch className="w-6 h-6" />,
    categories: ["featured", "research"]
  },
  {
    id: 4,
    title: "B2B Supplier Sourcing",
    description: "Pebble conducts comprehensive research across extensive networks to identify the most suitable suppliers for your specific requirements as your dedicated agent.",
    icon: <Briefcase className="w-6 h-6" />,
    categories: ["featured", "research", "productivity"]
  },
  {
    id: 5,
    title: "Research on AI Products for the Clothing Industry",
    description: "Pebble conducted in-depth research on AI search products in the clothing industry with comprehensive product analysis and competitive positioning.",
    icon: <FileSearch className="w-6 h-6" />,
    categories: ["research"]
  },
  {
    id: 6,
    title: "Online Store Operation Analysis",
    description: "Upload your Amazon store sales data and Pebble delivers actionable insights, detailed visualizations, and customized strategies designed to increase revenue.",
    icon: <BarChart3 className="w-6 h-6" />,
    categories: ["data-analysis", "productivity"]
  },
  {
    id: 7,
    title: "Campaign Explanation Maps",
    description: "Custom-designed visualization maps that bring historical events like the Battle of Lexington to life, enhancing student understanding through intuitive visual storytelling.",
    icon: <Users className="w-6 h-6" />,
    categories: ["education"]
  },
  {
    id: 8,
    title: "List of YC Companies",
    description: "Pebble expertly navigated the YC W25 database to identify all qualifying B2B companies, meticulously compiling this valuable information into a structured table.",
    icon: <Briefcase className="w-6 h-6" />,
    categories: ["research", "productivity"]
  }
];

const ExampleUseCases = () => {
  const [activeCategory, setActiveCategory] = useState("featured");

  const filteredUseCases = useCases.filter(
    useCase => useCase.categories.includes(activeCategory)
  );

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore use cases from our official collection.
          </h2>
          <p className="text-lg text-gray-600">
            Learn how Pebble handles real-world tasks through step-by-step replays.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-6 py-3 rounded-full transition-all text-sm md:text-base",
                activeCategory === category.id
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUseCases.map((useCase) => (
            <Card 
              key={useCase.id} 
              className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden"
            >
              <CardHeader className="p-5 pb-0 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                  {useCase.icon}
                </div>
                <h3 className="font-bold text-xl">{useCase.title}</h3>
              </CardHeader>
              <CardContent className="p-5">
                <p className="text-gray-600">{useCase.description}</p>
                
                {/* Placeholder for an image that would be here */}
                <div className="mt-4 h-32 bg-gray-100 rounded-lg overflow-hidden">
                  {/* This would be where an image would go */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleUseCases;
