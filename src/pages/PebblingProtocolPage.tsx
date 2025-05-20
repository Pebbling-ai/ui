import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Layers3, Zap, Brain, ArrowRight, GitFork, Code2, Eye, MessageSquare, ShieldCheck, Star, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import  PebblingTerminalDemo  from '@/components/PebblingTerminalDemo';
const Section: React.FC<{ title: string; subtitle?: string; children: React.ReactNode; className?: string; id?: string }> = ({ title, subtitle, children, className, id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      sectionRef.current.classList.add('opacity-0', 'transition-opacity', 'duration-1000', 'ease-out');
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-satoshi font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg md:text-xl text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; className?: string }> = ({ icon, title, description, className }) => (
  <Card className={cn("bg-white shadow-card hover:shadow-hover transition-shadow duration-300 rounded-xl", className)}>
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="p-3 bg-gray-100 rounded-full mb-4 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-satoshi font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string; stepNumber: number }> = ({ icon, title, description, stepNumber }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
      {stepNumber}
    </div>
    <div>
      <div className="flex items-center mb-1">
        {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 mr-2 text-black"})}
        <h4 className="text-lg font-satoshi font-semibold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const PebblingProtocolPage = () => {
  return (
    <div className="min-h-screen flex flex-col  font-sans">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32  text-black text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <Layers3 className="w-16 h-16 md:w-20 md:h-20 text-black mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-satoshi font-extrabold mb-6">
              The Pebbling Protocol
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black max-w-3xl mx-auto mb-8">
              Seamlessly manage and synchronize contextual state across your AI agents for unparalleled collaboration and intelligence.
            </p>
            <Button size="lg" variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white transition-colors">
              Explore Documentation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* What is Pebbling Protocol? */}
        <Section title="What is Pebbling Protocol?" subtitle="The backbone of intelligent agent communication and state management." id="what-is">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                The Pebbling Protocol is a sophisticated yet elegant system designed to orchestrate the flow of information and contextual understanding among multiple AI agents. Think of it as a shared nervous system for your AI workforce, allowing them to build upon each other's work, maintain a consistent understanding of tasks, and adapt dynamically to evolving scenarios.
              </p>
              <p>
                It moves beyond simple message passing, enabling agents to share, interpret, and update a distributed "context pebble" – a lightweight, structured piece of information that represents the current state of a task or conversation. This allows for complex, multi-agent workflows that feel intuitive and remarkably human-like.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-card flex items-center justify-center">
              {/* Placeholder for a simple diagram or visual */}
              <GitFork className="w-32 h-32 text-black " />
            </div>
          </div>
        </Section>

        {/* Why It Matters */}
        <Section title="Why It Matters" subtitle="Unlock new levels of AI capability and efficiency." id="why-it-matters" className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-sky-500" />}
              title="Enhanced Agent Collaboration"
              description="Agents can work together on complex tasks, sharing insights and context seamlessly, leading to more comprehensive and accurate outcomes."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-emerald-500" />}
              title="Dynamic Adaptability"
              description="The protocol allows agent ensembles to adapt to new information or changing goals in real-time, ensuring resilience and relevance."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-orange-500" />}
              title="Consistent Contextual State"
              description="Maintains a unified understanding across all participating agents, preventing misinterpretations and redundant work."
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-red-500" />}
              title="Scalable Intelligence"
              description="Easily add or remove agents from workflows without disrupting the contextual flow, enabling scalable AI solutions."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8 text-yellow-500" />}
              title="Developer-Friendly Integration"
              description="Designed with clear APIs and straightforward semantics, making it easy to integrate into your existing AI applications."
            />
            <FeatureCard
              icon={<Code2 className="w-8 h-8 text-indigo-500" />}
              title="Foundation for Complex Systems"
              description="Provides the robust underpinning needed for building sophisticated, multi-agent AI systems that can tackle ambitious challenges."
            />
          </div>
        </Section>
        
        {/* How It Works */}
        <Section title="How It Works" subtitle="A step-by-step look at the flow of contextual information." id="how-it-works">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              <Step 
                stepNumber={1}
                icon={<MessageSquare />}
                title="Context Pebble Creation"
                description="An initial 'context pebble' is generated, encapsulating the starting parameters, goals, or data for a task."
              />
              <Step 
                stepNumber={2}
                icon={<GitFork />}
                title="Agent Interaction & Augmentation"
                description="Agents interact with the pebble, reading its current state, performing their specialized function, and augmenting it with new information or insights."
              />
              <Step 
                stepNumber={3}
                icon={<Layers3 />}
                title="Protocol-Managed Propagation"
                description="The Pebbling Protocol manages how the updated pebble is passed to subsequent agents, ensuring orderly and relevant information flow based on predefined or dynamic rules."
              />
              <Step 
                stepNumber={4}
                icon={<ShieldCheck />}
                title="State Synchronization & Resolution"
                description="Mechanisms within the protocol handle potential conflicts or divergences, ensuring a coherent and synchronized state is maintained across the agent network."
              />
              <Step 
                stepNumber={5}
                icon={<Brain />}
                title="Intelligent Task Completion"
                description="The process continues until the task goals are met, with the final pebble representing the collective intelligence and work of the agent ensemble."
              />
            </div>
            {/* Placeholder for more detailed infographic or animation */}
            {/* <div className="mt-12 p-8  rounded-xl text-center">
              <p className="text-black">
                [Animated infographic or interactive diagram illustrating the flow will be here]
              </p>
              <Eye className="w-16 h-16 text-gray-400 mx-auto mt-4" />
            </div> */}
          </div>
        </Section>

        {/* Real-Time Demo or Visualization */}
        <Section title="Protocol in Action" subtitle="See how the Pebbling Protocol is used in Hibiscus." id="demo" className=" text-black">
          <div className="max-w-4xl mx-auto">
            <PebblingTerminalDemo />
          </div>
        </Section>

        {/* Where It’s Used in Hibiscus */}
        <Section title="Where It’s Used in Hibiscus" subtitle="Powering intelligent features within our ecosystem." id="use-cases">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 bg-white rounded-xl shadow-card flex items-center justify-center">
                <img src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" alt="Hibiscus Integration" className="max-w-xs md:max-w-sm rounded-lg"/>
            </div>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                The Pebbling Protocol is not just a theoretical concept; it's the core engine driving many of Hibiscus's advanced AI capabilities. From coordinating multiple specialized agents for complex project management to ensuring seamless handoffs in our conversational AI, Pebbling is what makes Hibiscus truly intelligent and adaptive.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Multi-Agent Task Orchestration:</strong> Coordinating creative, analytical, and automation agents.</li>
                <li><strong>Context-Aware Chatbots:</strong> Maintaining conversation history and user intent across interactions.</li>
                <li><strong>Dynamic Workflow Automation:</strong> Adapting automated processes based on real-time data and agent feedback.</li>
              </ul>
              <Button variant="link" className="text-purple-600 hover:text-purple-800 px-0">
                Learn more about Hibiscus Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PebblingProtocolPage;