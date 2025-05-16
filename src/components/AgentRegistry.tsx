
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const agentsData = [
  {
    id: 1,
    name: "Assistant",
    description: "General purpose AI agent",
    category: "general",
    status: "verified",
    stats: { users: "1.2M", rating: 4.9, reviews: 23421 },
  },
  {
    id: 2,
    name: "Coder",
    description: "Engineering and development specialist",
    category: "developer",
    status: "verified",
    stats: { users: "890K", rating: 4.8, reviews: 18945 },
  },
  {
    id: 3,
    name: "Data Analyst",
    description: "Data processing and visualization",
    category: "data",
    status: "verified",
    stats: { users: "654K", rating: 4.7, reviews: 12378 },
  },
  {
    id: 4,
    name: "Marketer",
    description: "Marketing strategy and content creation",
    category: "business",
    status: "pending",
    stats: { users: "456K", rating: 4.6, reviews: 8765 },
  },
  {
    id: 5,
    name: "Designer",
    description: "Visual and UX/UI design specialist",
    category: "creative",
    status: "verified",
    stats: { users: "789K", rating: 4.8, reviews: 15432 },
  },
  {
    id: 6,
    name: "Researcher",
    description: "Academic and scientific research",
    category: "academic",
    status: "beta",
    stats: { users: "234K", rating: 4.5, reviews: 5432 },
  },
];

type Agent = (typeof agentsData)[0];

const categories = [
  { id: "all", name: "All Agents" },
  { id: "general", name: "General" },
  { id: "developer", name: "Developer" },
  { id: "data", name: "Data" },
  { id: "business", name: "Business" },
  { id: "creative", name: "Creative" },
  { id: "academic", name: "Academic" },
];

const AgentRegistry = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agentsData[0]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleAgents, setVisibleAgents] = useState(agentsData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    let filtered = agentsData;
    if (selectedCategory !== "all") {
      filtered = filtered.filter((agent) => agent.category === selectedCategory);
    }
    
    if (term) {
      filtered = filtered.filter(
        (agent) =>
          agent.name.toLowerCase().includes(term) ||
          agent.description.toLowerCase().includes(term)
      );
    }
    
    setVisibleAgents(filtered);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    
    let filtered = agentsData;
    if (categoryId !== "all") {
      filtered = filtered.filter((agent) => agent.category === categoryId);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(
        (agent) =>
          agent.name.toLowerCase().includes(searchTerm) ||
          agent.description.toLowerCase().includes(searchTerm)
      );
    }
    
    setVisibleAgents(filtered);
  };

  const statusColors = {
    verified: "text-green-600",
    pending: "text-amber-600",
    beta: "text-blue-600",
  };
  
  const statusIcons = {
    verified: <Check size={16} className="text-green-600" />,
    pending: <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="w-4 h-4 rounded-full bg-amber-400" />,
    beta: <motion.div className="text-blue-600 text-xs font-bold">β</motion.div>,
  };

  return (
    <section id="registry" className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hibiscus Registry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse and deploy AI models and agents for various specialized tasks
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column: Categories and Search */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              
              <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={cn(
                      "text-left w-full px-3 py-2 rounded-md transition-all",
                      selectedCategory === category.id
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column: Agents display in iPhone frame */}
          <div className="lg:col-span-8">
            <div className="relative mx-auto">
              {/* iPhone Frame */}
              <div className="relative mx-auto bg-black rounded-[38px] shadow-xl h-[600px] max-w-[300px] sm:max-w-[320px] overflow-hidden border-[14px] border-black">
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 w-[40%] mx-auto bg-black rounded-b-3xl z-50"></div>
                
                {/* iPhone Screen Content */}
                <div className="h-full w-full bg-white rounded-[24px] overflow-hidden relative">
                  {/* App Header */}
                  <div className="sticky top-0 bg-white p-4 border-b z-10">
                    <h3 className="text-lg font-bold text-center">Hibiscus Registry</h3>
                  </div>
                  
                  {/* Scrollable Content */}
                  <div className="h-[calc(100%-56px)] overflow-y-auto p-3">
                    <div className="space-y-3">
                      {visibleAgents.map((agent) => (
                        <div 
                          key={agent.id}
                          onClick={() => setSelectedAgent(agent)}
                          className={cn(
                            "p-4 rounded-xl transition-all cursor-pointer",
                            selectedAgent.id === agent.id
                              ? "bg-gray-100 border-2 border-gray-300"
                              : "bg-gray-50 border border-gray-200 hover:border-gray-300"
                          )}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold">{agent.name}</h3>
                            <div className="flex items-center gap-1 text-sm">
                              {statusIcons[agent.status as keyof typeof statusIcons]}
                              <span className={statusColors[agent.status as keyof typeof statusColors]}>
                                {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">
                            {agent.description}
                          </p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{agent.stats.users} users</span>
                            <span>{agent.stats.rating} rating ({agent.stats.reviews})</span>
                          </div>
                        </div>
                      ))}
                      
                      {visibleAgents.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          <X className="mx-auto mb-2" size={24} />
                          <p>No agents found matching your criteria</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Selected Agent Details */}
                    {selectedAgent && (
                      <div className="mt-6 bg-white p-4 rounded-xl border border-gray-200">
                        <h4 className="font-bold mb-2">
                          {selectedAgent.name} Details
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {selectedAgent.description}
                        </p>
                        <Button className="w-full">
                          Deploy Agent
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Home Button or Bottom Bar */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentRegistry;
