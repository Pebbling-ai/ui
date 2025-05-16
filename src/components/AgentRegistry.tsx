import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { toast } from "sonner";
import { Search, User, Network, Database, Activity, Zap } from "lucide-react";

// Sample agents data
const agents = [
  {
    id: "agent-1",
    name: "DataAnalyst-01",
    type: "Analytics",
    status: "Active",
    capabilities: ["Data processing", "Statistical analysis", "Visualization"],
    icon: <Database className="h-6 w-6 text-blue-500" />,
    description: "Specialized in processing large datasets and extracting valuable insights through advanced statistical methods."
  },
  {
    id: "agent-2",
    name: "NetworkGuard-42",
    type: "Security",
    status: "Active",
    capabilities: ["Threat detection", "Traffic analysis", "Authentication"],
    icon: <Network className="h-6 w-6 text-green-500" />,
    description: "Monitors network traffic in real-time to identify and neutralize potential security threats before they cause damage."
  },
  {
    id: "agent-3",
    name: "ProcessMonitor-7",
    type: "Monitoring",
    status: "Idle",
    capabilities: ["Resource tracking", "Performance optimization", "Anomaly detection"],
    icon: <Activity className="h-6 w-6 text-pulse-500" />,
    description: "Tracks system resources and performance metrics to identify bottlenecks and optimize overall system performance."
  },
  {
    id: "agent-4",
    name: "UserAssistant-23",
    type: "Support",
    status: "Active",
    capabilities: ["Query response", "Knowledge retrieval", "Task automation"],
    icon: <User className="h-6 w-6 text-amber-500" />,
    description: "Assists users by providing instant responses to queries, retrieving relevant information, and automating routine tasks."
  },
  {
    id: "agent-5",
    name: "PowerOptimizer-9",
    type: "Utilities",
    status: "Standby",
    capabilities: ["Energy management", "Load balancing", "Consumption analysis"],
    icon: <Zap className="h-6 w-6 text-purple-500" />,
    description: "Optimizes energy usage through intelligent load balancing and in-depth consumption analysis to reduce costs."
  },
  {
    id: "agent-6",
    name: "DataSync-15",
    type: "Integration",
    status: "Active",
    capabilities: ["Data synchronization", "Format conversion", "Schema mapping"],
    icon: <Database className="h-6 w-6 text-indigo-500" />,
    description: "Manages data synchronization between different systems, handling format conversions and schema mappings automatically."
  }
];

const AgentRegistry = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<null | typeof agents[0]>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    agent.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.capabilities.some(cap => cap.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAgentClick = (agent: typeof agents[0]) => {
    setSelectedAgent(agent);
    setDialogOpen(true);
    // Show toast notification
    toast("Feature Coming Soon", {
      description: "The Hibiscus agent integration feature will be available soon!",
      duration: 5000,
    });
  };

  const focusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <section className="py-12 relative animate-on-scroll opacity-0 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title font-bold mb-2 text-black">Hibiscus Registry</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Search and discover AI agents across the Pebble network ecosystem.
          </p>
        </div>

        {/* MacBook frame container */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* MacBook body */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl pt-8 px-8 pb-10">
            {/* MacBook screen bezel */}
            <div className="bg-gray-900 rounded-t-lg p-2 mb-1">
              {/* Browser toolbar */}
              <div className="bg-gray-100 h-10 rounded-t-md flex items-center px-4">
                {/* Browser controls */}
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* URL bar */}
                <div className="flex-1 bg-white rounded-md h-6 mx-4 flex items-center px-3">
                  <Search className="w-3 h-3 text-gray-400 mr-2" />
                  <span className="text-xs text-gray-800 font-medium">hibiscus.com</span>
                </div>
                {/* Browser menu icons */}
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-sm bg-gray-300"></div>
                  <div className="w-4 h-4 rounded-sm bg-gray-300"></div>
                  <div className="w-4 h-4 rounded-sm bg-gray-300"></div>
                </div>
              </div>

              {/* Website content - Fixed height to prevent resizing */}
              <div className="bg-white rounded-b-md p-4 macbook-screen" style={{ height: "450px", overflowY: "auto" }}>
                {/* Registry content (adapted from original) */}
                <div className="relative max-w-2xl mx-auto mb-8 group" onClick={focusSearch}>
                  <div className="absolute inset-0 bg-pulse-200 opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></div>
                  <Search 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-pulse-500 transition-colors duration-300" 
                  />
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search by agent name, type, or capabilities..."
                    className="pl-10 py-6 text-lg border-gray-200 hover:border-pulse-300 focus:border-pulse-400 focus:ring focus:ring-pulse-100 transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAgents.map(agent => (
                    <HoverCard key={agent.id}>
                      <HoverCardTrigger asChild>
                        <Card 
                          className={`registry-card ${hoveredAgent === agent.id ? 'registry-card-active animate-float' : ''}`}
                          onClick={() => handleAgentClick(agent)}
                          onMouseEnter={() => setHoveredAgent(agent.id)}
                          onMouseLeave={() => setHoveredAgent(null)}
                        >
                          <CardHeader className="flex flex-row items-center gap-3">
                            <div className={`p-2 bg-gray-100 rounded-lg transition-all duration-300 ${hoveredAgent === agent.id ? 'bg-pulse-100 animate-pulse-slow' : ''}`}>
                              {agent.icon}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{agent.name}</CardTitle>
                              <p className="text-sm text-gray-500">{agent.type}</p>
                            </div>
                            <div className={`ml-auto px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                              agent.status === "Active" ? "bg-green-100 text-green-800" : 
                              agent.status === "Idle" ? "bg-amber-100 text-amber-800" : 
                              "bg-gray-100 text-gray-800"
                            } ${hoveredAgent === agent.id && agent.status === "Active" ? "bg-green-200 text-green-900" : ""}`}>
                              {agent.status}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-1">
                              <p className="text-xs text-gray-500">Capabilities:</p>
                              <div className="flex flex-wrap gap-1">
                                {agent.capabilities.map((capability, idx) => (
                                  <span 
                                    key={idx} 
                                    className={`text-xs bg-gray-100 px-2 py-1 rounded-full transition-colors duration-300 ${
                                      hoveredAgent === agent.id ? 'bg-pulse-50 text-pulse-700' : ''
                                    }`}
                                  >
                                    {capability}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-0 overflow-hidden">
                        <div className="p-4 bg-gradient-to-r from-gray-50 to-white">
                          <h4 className="font-medium text-sm mb-1">{agent.name}</h4>
                          <p className="text-xs text-gray-600">{agent.description}</p>
                        </div>
                        <div className="bg-gray-50 p-2 text-xs text-center text-gray-500">
                          Click to view integration details
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}

                  {filteredAgents.length === 0 && (
                    <div className="col-span-full text-center py-12">
                      <h3 className="text-lg font-medium text-gray-500">
                        No agents found matching "{searchTerm}"
                      </h3>
                      <p className="text-gray-400">Try searching with different terms</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* MacBook keyboard area (simplified) */}
            <div className="bg-gray-700 h-4 rounded-b-lg mx-auto w-1/2"></div>
          </div>
          
          {/* MacBook bottom reflection/shadow */}
          <div className="bg-gray-900/20 h-3 w-10/12 mx-auto rounded-b-full blur-sm"></div>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-md">
            {selectedAgent && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {selectedAgent.icon}
                    </div>
                    {selectedAgent.name}
                  </DialogTitle>
                  <DialogDescription>
                    This feature will be available with the upcoming Hibiscus update.
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 rounded-lg mb-4 bg-gradient-to-r from-gray-50 to-white">
                  <h3 className="font-medium text-sm mb-2">Agent Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Type:</span>
                      <span className="text-sm font-medium">{selectedAgent.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Status:</span>
                      <span className="text-sm font-medium">{selectedAgent.status}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block mb-1">Capabilities:</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedAgent.capabilities.map((capability, idx) => (
                          <span key={idx} className="text-xs bg-white border border-gray-100 px-2 py-1 rounded-full">
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm text-gray-500 block mb-1">Description:</span>
                      <p className="text-sm">{selectedAgent.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-pulse-50 border border-pulse-100 rounded-lg">
                  <p className="text-sm text-pulse-800">
                    <span className="font-medium">Coming Soon:</span> Hibiscus will enable direct agent 
                    integration, letting you deploy and manage agents across your network with full mTLS security.
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AgentRegistry;
