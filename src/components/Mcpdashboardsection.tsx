import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, Code, Cpu, ExternalLink, Layers, MessageSquare, Rss, Zap, ShieldCheck, PlusCircle, Settings2 } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const availableAgents = [
  { id: 'agent1', name: 'Nexus Weaver', icon: <Layers className="h-6 w-6 text-indigo-500" />, description: 'Orchestrates task routing.', connected: false },
  { id: 'agent2', name: 'Insight Engine', icon: <Cpu className="h-6 w-6 text-sky-500" />, description: 'Analyzes data patterns.', connected: true },
  { id: 'agent3', name: 'Persona Fluent', icon: <MessageSquare className="h-6 w-6 text-emerald-500" />, description: 'Handles user conversations.', connected: false },
  { id: 'agent4', name: 'Task Automator', icon: <Zap className="h-6 w-6 text-purple-500" />, description: 'Automates repetitive tasks.', connected: false },
];

const connectedApps = [
  { id: 'app1', name: 'CRM Pro', icon: <ShieldCheck className="h-6 w-6 text-green-500" />, status: 'Active' },
  { id: 'app2', name: 'SupportDesk', icon: <Settings2 className="h-6 w-6 text-orange-500" />, status: 'Syncing' },
];

const initialFeedItems = [
  { id: 1, type: 'INFO', message: 'MCP Dashboard Initialized.', timestamp: '10:35:01 AM' },
  { id: 2, type: 'AGENT_CONNECT', message: 'Insight Engine connected.', timestamp: '10:35:05 AM' },
  { id: 3, type: 'DATA_IN', message: 'Received user query via SupportDesk.', timestamp: '10:35:12 AM' },
  { id: 4, type: 'ROUTING', message: 'Query routed to Persona Fluent by Nexus Weaver.', timestamp: '10:35:13 AM' },
];

const MCPDashboardSection = () => {
  const [agents, setAgents] = useState(availableAgents);
  const [feedItems, setFeedItems] = useState(initialFeedItems);

  const toggleAgentConnection = (agentId: string) => {
    setAgents(prevAgents =>
      prevAgents.map(agent =>
        agent.id === agentId ? { ...agent, connected: !agent.connected } : agent
      )
    );
    const agent = agents.find(a => a.id === agentId);
    if (agent) {
      const action = agent.connected ? 'disconnected' : 'connected';
      addFeedItem('AGENT_EVENT', `${agent.name} ${action}.`);
    }
  };

  const addFeedItem = (type: string, message: string) => {
    setFeedItems(prevItems => [
      ...prevItems,
      { id: Date.now(), type, message, timestamp: new Date().toLocaleTimeString() }
    ]);
  };

  const getFeedItemStyle = (type: string) => {
    switch (type) {
      case 'INFO': return 'text-blue-500';
      case 'AGENT_CONNECT':
      case 'AGENT_EVENT': return 'text-green-500';
      case 'DATA_IN': return 'text-purple-500';
      case 'DATA_OUT': return 'text-orange-500';
      case 'ROUTING': return 'text-sky-500';
      case 'ERROR': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MCP Developer Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Seamlessly integrate and manage AI agents with the Model Context Protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Available Agents */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Available Agents</h3>
            {agents.map(agent => (
              <Card key={agent.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 rounded-md">{agent.icon}</div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-700">{agent.name}</h4>
                    <p className="text-xs text-gray-500">{agent.description}</p>
                  </div>
                  <Button
                    size="sm"
                    variant={agent.connected ? "secondary" : "default"}
                    onClick={() => toggleAgentConnection(agent.id)}
                    className={cn("w-28", agent.connected ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-indigo-500 hover:bg-indigo-600 text-white")}
                  >
                    {agent.connected ? (
                      <> <CheckCircle className="mr-1 h-4 w-4" /> Connected </>
                    ) : (
                      <> <PlusCircle className="mr-1 h-4 w-4" /> Connect </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Column 2: Connected Apps & API Snippet */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Connected Apps</h3>
            {connectedApps.map(app => (
              <Card key={app.id} className="shadow-md">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 rounded-md">{app.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-700">{app.name}</h4>
                    <p className={cn("text-xs", app.status === 'Active' ? 'text-green-600' : 'text-orange-600')}>
                      Status: {app.status}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">API Integration</h3>
                 <Card className="shadow-md bg-gray-800 text-gray-100 font-mono text-xs">
                    <CardHeader className="pb-2 pt-3 px-4 border-b border-gray-700">
                        <CardTitle className="text-sm text-gray-300 flex items-center">
                            <Code size={16} className="mr-2"/>
                            <span>Initialize MCP Client</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <pre>
                            <code>
{`import { MCPClient } from '@hibiscus/mcp';

const client = new MCPClient({
  apiKey: 'YOUR_API_KEY',
  appId: 'YOUR_APP_ID',
});

client.onContextUpdate((context) => {
  console.log('Context Updated:', context);
});

client.connectAgent('InsightEngine');`}
                            </code>
                        </pre>
                         <Button variant="outline" size="sm" className="mt-3 w-full text-black border-gray-600 hover:bg-gray-700 hover:text-white">
                            View Full Docs <ExternalLink size={14} className="ml-1"/>
                        </Button>
                    </CardContent>
                 </Card>
            </div>
          </div>

          {/* Column 3: Live Context Feed */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Live Context Feed</h3>
            <Card className="shadow-md h-[450px] flex flex-col">
              <CardHeader className="p-3 border-b">
                <CardTitle className="text-base text-gray-700 flex items-center">
                    <Rss size={18} className="mr-2 text-indigo-500"/> Real-time MCP Events
                </CardTitle>
              </CardHeader>
              <ScrollArea className="flex-grow p-1">
                <CardContent className="p-3 text-xs space-y-2">
                  {feedItems.slice().reverse().map(item => (
                    <div key={item.id} className="font-mono">
                      <span className="text-gray-400">{item.timestamp}</span>
                      <span className={cn("ml-2 font-semibold", getFeedItemStyle(item.type))}>[{item.type}]</span>
                      <span className="ml-2 text-gray-600">{item.message}</span>
                    </div>
                  ))}
                </CardContent>
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MCPDashboardSection;