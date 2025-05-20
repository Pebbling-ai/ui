import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, ArrowRight, Play, Users, Target, Zap, MessageSquare,Code, Database, ExternalLink } from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import DeviceFeatureShowcase from "@/components/DeviceFeatureShowcase";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Chat } from "@/components/chat"
import { FeaturesDemo } from "@/components/features-demo"
import  {Globe}  from "@/components/ui/globe"
import { Card } from "@/components/ui/card";
import {Feature} from "@/components/ui/feature";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import AgentRegistry from "@/components/AgentRegistry";
import MCPDashboardSection from "@/components/Mcpdashboardsection";
const ProductPage = () => {
  // References for chat bubbles to apply scroll animations
  const chatRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Add scroll observation for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    chatRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      chatRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Chat messages for the Story section
  const chatMessages = [
    {
      type: 'question',
      text: "What is Pebble and how does it help with AI agent communication?",
    },
    {
      type: 'answer',
      text: "Pebble is our foundation product that enables seamless communication between AI agents. It provides a standardized protocol for agents to exchange information, coordinate tasks, and collaborate on complex problems.",
    },
    {
      type: 'question',
      text: "How is Hibiscus different from the free version?",
    },
    {
      type: 'answer',
      text: "Hibiscus is our premium offering that builds upon Pebble's foundation. It includes advanced features like neural network visualization, custom agent development, and enterprise-grade security. Hibiscus also offers dedicated support and higher usage limits for organizations with demanding AI needs.",
    },
    {
      type: 'question',
      text: "Can you explain the technology behind your products?",
    },
    {
      type: 'answer',
      text: "Our technology is built on a novel approach to agent communication that prioritizes context-awareness and intent preservation. We've developed proprietary algorithms that enable agents to understand not just the content of messages, but the underlying goals and constraints. This dramatically improves the quality and efficiency of multi-agent systems.",
    },
  ];
const testimonials = [
  {
    quote:
      "99.9%",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "70%",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "30%",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:"80%",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];
  return (
    <div className="min-h-screen ">
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="px-7 py-32 pb-20 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-left mt-10">
                <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
                 Thousands of AI agents <br />
                  <span className="text-black">One platform.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                  Automate your daily tasks, boost productivity, and unlock the power of AI in one click.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-gray-800 to-black text-white rounded-lg px-8 py-6 text-lg"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  {/* <Button 
                    variant="outline" 
                    className="border border-gray-300 text-gray-700 rounded-lg px-8 py-6 text-lg"
                  >
                    Watch Demo
                    <Play className="ml-2 h-4 w-4" />
                  </Button> */}
                </div>
              </div>
              <div className="flex-1 ">
                <div className="relative">
                   <Globe className="-top-60 " />
                  {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">Trusted by 1000+ companies</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
         <section className="w-full flex flex-col items-center py-32 pb-20 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Hibiscus? (Differentiators)</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 ">
            <FeatureCard
              number="01"
              title="User-Specific Routing"
              description="Each user gets an isolated memory and dedicated sandbox. Dynamic request routing using the Fly Proxy and fly-replay."
            />
            <FeatureCard
              number="02"
              title="Persistent Storage"
              description="Each node of your app has isolated data. Stay near your users with Fly Volumes, Fly Managed Postgres, and S3-compatible Tigris files."
            />
            <FeatureCard
              number="03"
              title="Zero-Cost When Idle"
              description="Fly Machines automatically scale to zero when you don't need them, so you only pay for the compute you actually use."
            />
            <FeatureCard
              number="04"
              title="MCP with SSE"
              description="Build remote-hosted Console Protocol (MCP) servers on Fly Machines and use Server-Sent Events (SSE) to plug your desktop into any UI service."
            />
          </div>
          </section>
        {/*How it works*/}
        <section className="py-20 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">How it Works</h1>
              <p className="text-lg text-gray-600">
                Effortlessly enhance your apps with powerful AI-driven capabilities
              </p>
            </div>
            
            {/* Shared State Feature */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-12 border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                   <h2 className="text-2xl font-bold text-gray-900 mb-4">Step:1</h2>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Search your Agents</h3>
                  <p className="text-gray-600 mb-6">
                    With a single line of code, your application can see everything the agent is doing, and the agent can see everything that happens inside the application.
                  </p>
                  {/* <div className="flex items-center">
                    <Button variant="outline" className="flex items-center gap-2">
                      Learn more about Shared State
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div> */}
                </div>
                <div className="rounded-xl overflow-hidden shadow-md bg-gray-50 p-4">
                  <img 
                    src="/hibiscussearch.png" 
                    alt="Shared State Visualization" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* How It Works Diagram */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-12 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Step:2</h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Activate and customize according to your need </h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-4 bg-gray-50 rounded-xl">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-medium">LANGUAGE AGENT</span>
                </div>
                
                <div className="w-full md:w-20 h-1 md:h-20 flex md:flex-col items-center justify-center">
                  <div className="w-full h-0.5 md:w-0.5 md:h-full bg-gray-300"></div>
                  <div className="hidden md:block absolute w-3 h-3 rounded-full bg-gray-800"></div>
                </div>
                
                <div className="flex-1 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="text-center mb-4">
                    <span className="text-sm font-medium text-gray-500">COMMUNICATION PROTOCOL</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2 items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className="h-6 rounded bg-gray-200"></div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full md:w-20 h-1 md:h-20 flex md:flex-col items-center justify-center">
                  <div className="w-full h-0.5 md:w-0.5 md:h-full bg-gray-300"></div>
                  <div className="hidden md:block absolute w-3 h-3 rounded-full bg-gray-800"></div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <span className="font-medium">CLIENT</span>
                </div>
              </div>
            </div>
            
            {/* Agentive UI Feature */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="mb-3 text-sm font-medium text-gray-500">CLIENT APP</div>
                      {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="h-8 bg-white rounded mb-2 flex items-center px-3">
                          <div className="w-4 h-4 rounded-full bg-gray-300 mr-2"></div>
                          <div className="h-3 w-24 bg-gray-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="mb-3 text-sm font-medium text-gray-500">AGENT</div>
                      <div className="h-12 bg-white rounded mb-2"></div>
                      <div className="h-20 bg-white rounded"></div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 ">Step:3</h2>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Let them handle your tasks </h3>
                  <p className="text-gray-600 mb-6">
                    Teach the agent to use your tools to help users accomplish their tasks in the most intuitive way.
                  </p>
                  <div className="flex items-center">
                    <Button variant="outline" className="flex items-center gap-2">
                      Let's explore Hibiscus
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       {/* <section className="pt-32 w-full flex flex-col justify-center items-center">
          <div className="mb-12 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              CoAgents: Everything you need to embed Agents in your application
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-600 text-center">
              Deeply embed vertical AI agents (powered by LangGraph) into your application with control, state, agents,
              generators UI & human-in-the-loop.
            </p>
          </div>

          <Card className="overflow-hidden border-0 bg-gradient-to-b from-gray-50 to-gray-100 shadow-md">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900">CoAgents public beta</h3>
              <p className="mt-2 text-gray-600">Discover what makes CoAgents a powerful AI human collaboration tool</p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">CapitalKit</span>
                  <span className="mx-2 text-gray-400">+</span>
                </div>
                <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800">1.0</div>
                <div className="font-semibold text-gray-900">LangGraph</div>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-white">
                  <Play className="h-8 w-8 text-gray-900" />
                </button>
              </div>
              <img
                src="/hero-image.jpg"
                alt="CoAgents demo video thumbnail"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </Card>
        </section> */}
        {/* <div className="block">
      <Feature /> */}
      <MCPDashboardSection/>
       <AgentRegistry/>
   
        { /* Interactive Chat Story and features Section */}
        {/* <section className="container mx-auto px-4 py-16 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience Communication</h1>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          See how our platform transforms the way agents interact
        </p>

        <Chat />
      </section> */}

      <section className="container mx-auto px-4 py-16 ">
        <h1 className="text-center text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">Features Demo</h1>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">See our platform in action</p>
        <FeaturesDemo />
      </section>
        
        {/* Use Cases */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Use Cases</h2>
              <p className="text-lg text-gray-600">
                See how different industries are leveraging our technology
              </p>
            </div>
            
            <div className="space-y-16">
              {[
                {
                  title: "Enterprise Analytics",
                  description: "Large corporations use our platform to analyze vast amounts of data, identifying patterns and optimizing operations for increased efficiency.",
                  image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
                },
                {
                  title: "Healthcare Innovation",
                  description: "Medical facilities implement our solutions to streamline patient care, reduce administrative overhead, and enhance diagnostic accuracy.",
                  image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
                },
                {
                  title: "Financial Services",
                  description: "Banking institutions leverage our technology for fraud detection, risk assessment, and personalized customer experiences.",
                  image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
                }
              ].map((useCase, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "order-1 md:order-2" : ""}>
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                  <div className={index % 2 === 1 ? "order-2 md:order-1" : ""}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    <ul className="space-y-3">
                      {[
                        "Increased operational efficiency by 40%",
                        "Reduced manual processes by 65%",
                        "Improved decision-making accuracy by 30%"
                      ].map((point, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-gray-700 mr-2 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline"
                      className="mt-6 border border-gray-300 text-gray-700" 
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* Why choose us */}
       {/* <section className="py-20 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Hibiscus? (Differentiators)</h2>
              <p className="text-lg text-gray-600">
                The advantages that make our solution the right choice for your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Increased Efficiency",
                  description: "Automate repetitive tasks and streamline workflows to save valuable time.",
                  value: "40%",
                  metric: "Average time saved"
                },
                {
                  title: "Cost Reduction",
                  description: "Minimize operational expenses through optimized resource allocation.",
                  value: "30%",
                  metric: "Reduced overhead"
                },
                {
                  title: "Enhanced Accuracy",
                  description: "Eliminate human error with our precision-engineered systems.",
                  value: "99.9%",
                  metric: "Accuracy rate"
                },
                {
                  title: "Scalable Solution",
                  description: "Grow your implementation alongside your business without disruption.",
                  value: "∞",
                  metric: "Unlimited scaling"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-4xl font-bold text-gray-900 mb-2">{benefit.value}</div>
                  <div className="text-sm text-gray-500 mb-4">{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        
        {/* CTA Section */}
        <section className="w-full flex item-center justify-center  ">
          <div className="flex rounded-xl mb-10 container mx-auto px-4 sm:px-6 lg:px-16 py-20 bg-gradient-to-r from-gray-900 to-black text-white">
            <div className="max-w-4xl flex flex-col text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl ">
                Join thousands of forward-thinking companies already leveraging our technology to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Button 
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-lg px-8 py-6 text-lg"
                >
                  Signup for Early Access
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                
                {/* <Button 
                  variant="outline" 
                  className="border border-white text-black hover:bg-white/10 rounded-lg px-8 py-6 text-lg"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </div>
            </div>
            <img
  src="/hero-image.jpg"
  alt="Robot"
  className="w-64 max-w-xs md:w-80 lg:w-96 max-h-60 rounded-2xl shadow-xl object-contain ml-auto"
/>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="group p-6">
      <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
        {number}
      </div>
      <h1 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">{title}</h1>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  )
}
export default ProductPage;
