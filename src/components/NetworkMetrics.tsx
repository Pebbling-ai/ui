
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Monitor, Activity, Network, Zap, Database } from "lucide-react";

// Sample data for the last 24 hours, with hourly intervals
const generateNetworkData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now);
    time.setHours(now.getHours() - i);
    
    data.push({
      time: `${time.getHours()}:00`,
      agents: Math.floor(Math.random() * 150) + 50,
      latency: Math.floor(Math.random() * 40) + 10,
      requests: Math.floor(Math.random() * 500) + 200,
      memory: Math.floor(Math.random() * 80) + 20
    });
  }
  
  return data;
};

const NetworkMetrics = () => {
  const [data, setData] = useState(generateNetworkData());
  
  // Stats cards data
  const stats = [
    {
      title: "Active Agents",
      value: "1,284",
      change: "+12.3%",
      icon: <Network className="h-4 w-4 text-mono-500" />
    },
    {
      title: "Avg. Latency",
      value: "24ms",
      change: "-8.1%",
      icon: <Activity className="h-4 w-4 text-mono-500" />
    },
    {
      title: "Requests/min",
      value: "2,941",
      change: "+23.6%",
      icon: <Zap className="h-4 w-4 text-mono-500" />
    },
    {
      title: "Memory Usage",
      value: "64%",
      change: "+3.2%",
      icon: <Database className="h-4 w-4 text-mono-500" />
    }
  ];

  return (
    <section className="py-10 relative animate-on-scroll opacity-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
         
          <h2 className="section-title mb-2">Live Network Performance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real-time monitoring of Pebble AI agents across distributed networks over the last 24 hours.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`text-xs ${stat.change.startsWith('+') ? 'text-mono-600' : 'text-mono-500'} flex items-center`}>
                  {stat.change}
                  <span className="ml-1">from yesterday</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Agent Activity Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Agent Activity</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ChartContainer
                config={{
                  agents: { color: "#525252" }, // Mono-600
                  grid: { color: "#e5e5e5" }, // Mono-200
                }}
              >
                <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => value}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="agents" stroke="#525252" fill="#525252" fillOpacity={0.2} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
          
          {/* Performance Metrics Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ChartContainer
                config={{
                  latency: { color: "#737373" }, // Mono-500
                  requests: { color: "#404040" }, // Mono-700
                  memory: { color: "#262626" }, // Mono-800
                }}
              >
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => value}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="latency" name="Latency (ms)" fill="#737373" />
                  <Bar dataKey="requests" name="Requests" fill="#404040" />
                  <Bar dataKey="memory" name="Memory (%)" fill="#262626" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NetworkMetrics;
