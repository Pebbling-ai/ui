import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkMetrics from "@/components/NetworkMetrics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CompactNetworkMetrics from "@/components/CompactNetworkMetrics";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Network, Activity, Zap, Database, Server, Globe, Shield, Clock } from "lucide-react";

// Sample data for the additional charts
const generateNodeData = () => {
  return Array(7).fill(0).map((_, idx) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + idx);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    
    return {
      name: day,
      active: Math.floor(Math.random() * 400) + 800,
      total: Math.floor(Math.random() * 200) + 1200,
    };
  });
};

const generateDistributionData = () => {
  return [
    { name: 'North America', value: 35 },
    { name: 'Europe', value: 30 },
    { name: 'Asia', value: 25 },
    { name: 'South America', value: 5 },
    { name: 'Africa', value: 3 },
    { name: 'Australia', value: 2 },
  ];
};

const NetworkPage = () => {
  const nodeData = generateNodeData();
  const regionData = generateDistributionData();
  const COLORS = ['#262626', '#404040', '#525252', '#737373', '#A3A3A3', '#D4D4D4'];

  // Stats for the summary cards
  const networkStats = [
    {
      title: "Uptime",
      value: "99.99%",
      icon: <Clock className="h-5 w-5 text-mono-600" />
    },
    {
      title: "Total Nodes",
      value: "1,485",
      icon: <Server className="h-5 w-5 text-mono-600" />
    },
    {
      title: "Global Regions",
      value: "24",
      icon: <Globe className="h-5 w-5 text-mono-600" />
    },
    {
      title: "Security Score",
      value: "A+",
      icon: <Shield className="h-5 w-5 text-mono-600" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <p className="text-mono-600 text-sm font-medium uppercase tracking-wider mb-2">System Status</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Network Dashboard</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-time monitoring and analytics for Pebble AI distributed network infrastructure
            </p>
          </div>
          
          {/* Status Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {networkStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Metrics Section */}
          <NetworkMetrics />
          
          {/* Additional Charts Section */}
          <section className="py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Node Distribution Chart */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Server className="mr-2 h-5 w-5 text-mono-500" />
                    Node Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ChartContainer
                    config={{
                      active: { color: "#262626" }, // Mono-800
                      total: { color: "#737373" },  // Mono-500
                    }}
                  >
                    <AreaChart data={nodeData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#262626" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#262626" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#737373" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#737373" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip />
                      <Legend />
                      <Area type="monotone" dataKey="active" name="Active Nodes" stroke="#262626" fillOpacity={1} fill="url(#activeGradient)" />
                      <Area type="monotone" dataKey="total" name="Total Nodes" stroke="#737373" fillOpacity={1} fill="url(#totalGradient)" />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              {/* Geographic Distribution Chart */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-mono-500" />
                    Geographic Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ChartContainer
                    config={{
                      region: { color: "#404040" }, // Mono-700
                    }}
                  >
                    <PieChart>
                      <Pie
                        data={regionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {regionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Compact Metrics Section */}
          <CompactNetworkMetrics />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NetworkPage;
