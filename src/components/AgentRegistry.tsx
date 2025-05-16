
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
    icon: <Database className="h-6 w-6 text-blue-500" />
  },
  {
    id: "agent-2",
    name: "NetworkGuard-42",
    type: "Security",
    status: "Active",
    capabilities: ["Threat detection", "Traffic analysis", "Authentication"],
    icon: <Network className="h-6 w-6 text-green-500" />
  },
  {
    id: "agent-3",
    name: "ProcessMonitor-7",
    type: "Monitoring",
    status: "Idle",
    capabilities: ["Resource tracking", "Performance optimization", "Anomaly detection"],
    icon: <Activity className="h-6 w-6 text-pulse-500" />
  },
  {
    id: "agent-4",
    name: "UserAssistant-23",
    type: "Support",
    status: "Active",
    capabilities: ["Query response", "Knowledge retrieval", "Task automation"],
    icon: <User className="h-6 w-6 text-amber-500" />
  },
  {
    id: "agent-5",
    name: "PowerOptimizer-9",
    type: "Utilities",
    status: "Standby",
    capabilities: ["Energy management", "Load balancing", "Consumption analysis"],
    icon: <Zap className="h-6 w-6 text-purple-500" />
  },
  {
    id: "agent-6",
    name: "DataSync-15",
    type: "Integration",
    status: "Active",
    capabilities: ["Data synchronization", "Format conversion", "Schema mapping"],
    icon: <Database className="h-6 w-6 text-indigo-500" />
  }
];

const AgentRegistry = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<null | typeof agents[0]>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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

  return (
    <section className="py-12 bg-gray-50 relative animate-on-scroll opacity-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <div className="pulse-chip mx-auto mb-3">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Agent Registry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Hibiscus Registry</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Search and discover AI agents across the Pebble network ecosystem.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by agent name, type, or capabilities..."
            className="pl-10 py-6 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map(agent => (
            <Card 
              key={agent.id} 
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-pulse-300"
              onClick={() => handleAgentClick(agent)}
            >
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {agent.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{agent.name}</CardTitle>
                  <p className="text-sm text-gray-500">{agent.type}</p>
                </div>
                <div className={`ml-auto px-2 py-1 rounded-full text-xs font-medium ${
                  agent.status === "Active" ? "bg-green-100 text-green-800" : 
                  agent.status === "Idle" ? "bg-amber-100 text-amber-800" : 
                  "bg-gray-100 text-gray-800"
                }`}>
                  {agent.status}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Capabilities:</p>
                  <div className="flex flex-wrap gap-1">
                    {agent.capabilities.map((capability, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <div className="p-4 bg-gray-50 rounded-lg mb-4">
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
                          <span key={idx} className="text-xs bg-white border px-2 py-1 rounded-full">
                            {capability}
                          </span>
                        ))}
                      </div>
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
