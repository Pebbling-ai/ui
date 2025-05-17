import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, ArrowRight, Play, Users, Target, Zap, Globe, MessageSquare } from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import DeviceFeatureShowcase from "@/components/DeviceFeatureShowcase";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Chat } from "@/components/chat"
import { FeaturesDemo } from "@/components/features-demo"
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
                  Transform Your <br />
                  <span className="text-black">Digital Experience</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                  Our advanced AI platform seamlessly integrates with your workflow, enhancing productivity and unlocking new possibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-gray-800 to-black text-white rounded-lg px-8 py-6 text-lg"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border border-gray-300 text-gray-700 rounded-lg px-8 py-6 text-lg"
                  >
                    Watch Demo
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png" 
                    alt="Product Showcase" 
                    className="w-full h-auto shadow-xl rounded-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">Trusted by 1000+ companies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* Interactive Chat Story and features Section */}
        <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience Communication</h1>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          See how our platform transforms the way agents interact
        </p>

        <Chat />
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Features Demo</h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">See our platform in action</p>
        <FeaturesDemo />
      </section>
        
        {/* Use Cases */}
        <section className="py-20 bg-white">
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
        </section>
        
        {/* Benefits */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
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
        </section>
        
        {/* Demo Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">See It in Action</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Watch how our product can transform your business operations and drive results
                  </p>
                </div>
                
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-20">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <img 
                    src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
                    alt="Product Demo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-12 text-center">
                  <Button className="bg-gradient-to-r from-gray-800 to-black text-white rounded-lg px-8 py-6 text-lg">
                    Schedule a Live Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of forward-thinking companies already leveraging our technology to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-lg px-8 py-6 text-lg"
                >
                  Get Started Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ProductPage;
