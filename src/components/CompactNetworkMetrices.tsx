
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import { Network } from "lucide-react";

// Generate sample data for the charts
const generateLineData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 12; i >= 0; i--) {
    const time = new Date(now);
    time.setHours(now.getHours() - i);
    
    data.push({
      time: `${time.getHours()}:00`,
      agents: Math.floor(Math.random() * 100) + 50,
      latency: Math.floor(Math.random() * 30) + 10,
      requests: Math.floor(Math.random() * 300) + 100,
    });
  }
  
  return data;
};

const CompactNetworkMetrics = () => {
  const data = generateLineData();

  return (
    <section className="section-container">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="w-full flex items-center justify-center mb-4">
          <div className="flex  space-x-2">
            <Network className="mt-3 md:mt-0 size-5 md:size-10" />
            <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in ">Live Network Matrices</h1>
          </div>
          {/* <div className="text-sm text-gray-500">
            <span className="font-semibold text-mono-700">1,284</span> Active Agents
          </div> */}
        </div>
        
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl flex gap-4">
          {/* Agents Activity Chart */}
          <Card className="flex-1 hover:shadow-sm transition-shadow duration-300 border-mono-100 h-fit">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-500">Active Agents</span>
                <span className="text-xs font-bold text-mono-700">+12.3%</span>
              </div>
              <div className="h-32">
                <ChartContainer
                  config={{
                    agents: { color: "#404040" }, // Mono-700
                  }}
                >
                  <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    {/* <defs>
                      <linearGradient id="agentGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#404040" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#404040" stopOpacity={0}/>
                      </linearGradient>
                    </defs> */}
                    <XAxis dataKey="time" tick={false} axisLine={false} />
                    <YAxis hide={true} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="agents" 
                      stroke="#404040" 
                      strokeWidth={2} 
                      fill="url(#agentGradient)" 
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* MCP Activity Chart */}
          <Card className="flex-1 hover:shadow-sm transition-shadow duration-300 border-mono-100">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-500">Active MCPS</span>
                <span className="text-xs font-bold text-mono-500">-8.1%</span>
              </div>
              <div className="h-32">
                <ChartContainer
                  config={{
                    latency: { color: "#737373" }, // Mono-500
                  }}
                >
                  <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <XAxis dataKey="time" tick={false} axisLine={false} />
                    <YAxis hide={true} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="latency" 
                      stroke="#737373" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default CompactNetworkMetrics;
