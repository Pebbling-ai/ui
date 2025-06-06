import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Layers3, Zap, Brain, ArrowRight, GitFork, Code2, Eye, MessageSquare, ShieldCheck, Star, Lightbulb,Check,Network } from 'lucide-react';
import { cn } from '@/lib/utils';
import  PebblingTerminalDemo  from '@/components/PebblingTerminalDemo';
import { Globe } from '@/components/ui/globe';
import { ExternalLink,Code,Database } from 'lucide-react';
import AgentRegistry from '@/components/AgentRegistry';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '@/components/CTASection';
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
    <section ref={sectionRef} id={id} className={cn("", className)}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="'text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in ">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};
function Feature({ number, title, description }: { number?: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl group p-6">
     {number && (
        <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
          {number}
        </div>
      )}
      <h1 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">{title}</h1>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  )
}
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
        {/* <section className="py-20 md:py-32  text-black text-center">
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
        </section> */}
        <section className='section-container'>
          <div className='lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-start'>
            <div className='relative lg:max-w-xl space-y-4 lg:pb-20'>
              <h1 className='text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in '>
                <p>Full Stack Sandboxes</p>
                <p>Fly.io Metal</p>
              </h1>
              <p className='text-lg'>
            Fly Machines are hardware-virtualized containers with a REST API, that can run any Docker image on our custom-built global cloud in 35 regions. Launch instantly and keep them running as long as you want them to – for a single HTTP request, or weeks of uptime.
          </p>
          <div className='hidden lg:block w-full h-px absolute bottom-0 bg-gradient-to-r from-navy-400 via-navy-400/[0.35] via-10% to-transparent'>

          </div>
            </div>
            <img src="https://fly.io/phx/ui/images/fly-globe-cb332f77ddb429aa3ef4e0a2c6c592ba.png?vsn=d" className='w-full max-w-sm -mb-12 mx-auto relative lg:-mt-4'/>
          </div>
          <div className='grid lg:grid-cols-2 gap-y-16 gap-x-8 xl:gap-x-16 px-7'>
            <div className='group w-full relative grid grid-cols-auto-span items-start gap-8 text-left'>
              <div className='flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-emerald-500/30 from-green-300/50 to-emerald-300/50 text-emerald-500 ring-emerald-500/35'>
              <Network className="size-7" />
              </div>
              <div>
                <h1 className='text-lg font-bold tracking-tight text-gray-900 mb-6 animate-fade-in'>
              User-Specific Routing
            </h1>
            <p className='mt-4 text-base'>
              
              Route each user (or robot) to their own dedicated sandbox with
              
            </p>
              </div>
            </div>
             <div className='group w-full relative grid grid-cols-auto-span items-start gap-8 text-left'>
              <div className='flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-emerald-500/30 from-green-300/50 to-emerald-300/50 text-emerald-500 ring-emerald-500/35'>
              <Network className="size-7" />
              </div>
              <div>
                <h1 className='text-lg font-bold tracking-tight text-gray-900 mb-6 animate-fade-in'>
              User-Specific Routing
            </h1>
            <p className='mt-4 text-base'>
              
              Route each user (or robot) to their own dedicated sandbox with
              
            </p>
              </div>
            </div>
             <div className='group w-full relative grid grid-cols-auto-span items-start gap-8 text-left'>
              <div className='flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-emerald-500/30 from-green-300/50 to-emerald-300/50 text-emerald-500 ring-emerald-500/35'>
              <Network className="size-7" />
              </div>
              <div>
                 <h1 className='text-lg font-bold tracking-tight text-gray-900 mb-6 animate-fade-in'>
              User-Specific Routing
            </h1>
            <p className='mt-4 text-base'>
              
              Route each user (or robot) to their own dedicated sandbox with
              
            </p>
              </div>
            </div>
             <div className='group w-full relative grid grid-cols-auto-span items-start gap-8 text-left'>
              <div className='flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-emerald-500/30 from-green-300/50 to-emerald-300/50 text-emerald-500 ring-emerald-500/35'>
              <Network className="size-7" />
              </div>
              <div>
                 <h1 className='text-lg font-bold tracking-tight text-gray-900 mb-6 animate-fade-in'>
              User-Specific Routing
            </h1>
            <p className='mt-4 text-base'>
              
              Route each user (or robot) to their own dedicated sandbox with
              
            </p>
              </div>
            </div>
          </div>
        </section>
       
            
            {/* How It Works Diagram */}
            <section className="section-container">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">How It works?</h1>
              <p className="text-lg text-gray-600">
                See how different industries are leveraging our technology
              </p>
            </div>
            
            <div className="space-y-16">
              {[
                {
                  title: "Enterprise Analytics",
                  description: "Large corporations use our platform to analyze vast amounts of data, identifying patterns and optimizing operations for increased efficiency.",
                  image: "/hibiscus.png"
                },
                {
                  title: "Healthcare Innovation",
                  description: "Medical facilities implement our solutions to streamline patient care, reduce administrative overhead, and enhance diagnostic accuracy.",
                  image: "/hibiscus.png"
                },
                {
                  title: "Financial Services",
                  description: "Banking institutions leverage our technology for fraud detection, risk assessment, and personalized customer experiences.",
                  image: "/hibiscus.png"
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
            
           
         

        {/* Why It Matters */}
        <Section title="Why It Matters" subtitle="Unlock new levels of AI capability and efficiency." id="why-it-matters" className="section-container">
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
        
        

        {/* Real-Time Demo or Visualization */}
        <Section title="Protocol in Action" subtitle="See how the Pebbling Protocol is used in Hibiscus." id="demo" className=" section-container">
          <div className="max-w-4xl mx-auto">
            <PebblingTerminalDemo />
          </div>
        </Section>
        
       
        {/* CTA Section */}
<CTASection/>
      </main>
      <Footer />
    </div>
  );
};

export default PebblingProtocolPage;