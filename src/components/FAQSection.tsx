
import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const faqCategories = [
    {
      icon: "🌱",
      name: "Seed",
      title: "Pebble Fundamentals",
      color: "green",
      faqs: [
        {
          question: "What is the Pebble protocol?",
          answer:
            "Pebble is our core protocol, the seed 🌱 from which everything grows. It provides the foundation for decentralized identifiers (DIDs) and secure communication channels between autonomous agents, regardless of their host platform or implementation language.",
        },
        {
          question: "How do agents communicate through the Pebble network?",
          answer:
            "Pebble establishes a standardized communication channel between agents through our mLTS (multi-Layer Trust System). Each agent maintains its own decentralized identifier while exchanging information through structured messages that include intent, context, and payload data – all secured with cryptographic verification.",
        },
      ],
    },
    {
      icon: "🌿",
      name: "Sprout",
      title: "Growing with Pebbling",
      color: "blue",
      faqs: [
        {
          question: "Is the Pebbling ecosystem secure?",
          answer:
            "Absolutely! Security is at our core. All communications are end-to-end encrypted, with optional zero-knowledge proofs for sensitive information. Our protocol includes robust authentication mechanisms and permission systems to ensure only authorized agents can exchange data. As your implementation matures from seed 🌱 to sprout 🌿, our security measures grow with you.",
        },
        {
          question: "Which programming languages are supported in the Pebbling ecosystem?",
          answer:
            "We officially support JavaScript, Python, and our native Pebble protocol, with community-maintained libraries for Java, Go, Rust, and C#. Our API is framework-agnostic, allowing integration with virtually any programming environment. This flexibility ensures your project can grow naturally from seed 🌱 to full bloom 🌺.",
        },
      ],
    },
    {
      icon: "🌺",
      name: "Hibiscus",
      title: "Full Bloom Integration",
      color: "purple",
      faqs: [
        {
          question: "What is Hibiscus and how does it relate to Pebble?",
          answer:
            "Hibiscus 🌺 is our full-bloom enterprise solution built on top of the Pebble protocol. It provides a federated registry system, advanced communication patterns, and enterprise-grade features for large-scale agent deployments. Think of Pebble as the seed 🌱 and Hibiscus as the beautiful flower 🌺 that blossoms from it in mature implementations.",
        },
        {
          question: "Can I use Pebbling for my commercial project?",
          answer:
            "Absolutely! While Pebbling is proudly open-source, we offer commercial licenses for Hibiscus that include additional enterprise features, dedicated support, and SLA guarantees for mission-critical deployments. Our growth plans scale with your needs, from Seed 🌱 (free open-source) to full Hibiscus 🌺 bloom (enterprise). See our pricing section for more details.",
        },
      ],
    },
  ];

  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-16 md:py-24" 
      id="faq"
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -left-[5%] w-1/3 h-[50%] bg-green-100 dark:bg-green-900/20 opacity-60 blur-3xl rounded-full animate-pulse parallax" data-speed="0.05"></div>
      <div className="absolute top-[40%] -right-[5%] w-1/3 h-[40%] bg-purple-100 dark:bg-purple-900/20 opacity-50 blur-3xl rounded-full animate-pulse parallax" data-speed="0.08"></div>
      <div className="absolute -bottom-[10%] left-[30%] w-1/4 h-[30%] bg-blue-100 dark:bg-blue-900/20 opacity-40 blur-3xl rounded-full animate-pulse parallax" data-speed="0.06"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex items-center justify-center mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            <Star className="w-3 h-3 mr-1" /> Growing Your Knowledge From Seed to Hibiscus
          </span>
        </div>
        
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 
            className="font-subheading text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-300 dark:to-purple-400"
          >
            Cultivating Answers
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about the Pebbling ecosystem as it grows from Seed to Hibiscus
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="mb-12 opacity-0 animate-fade-in parallax" 
              style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}
              data-speed={categoryIndex === 0 ? "0.1" : categoryIndex === 1 ? "0.2" : "0.3"}
            >
              <div className="mb-6 flex items-center">
                <div className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full mr-3 shadow-sm",
                  category.color === "green" && "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800",
                  category.color === "blue" && "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800",
                  category.color === "purple" && "bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800"
                )}>
                  <span className="text-xl" role="img" aria-label={category.name}>{category.icon}</span>
                </div>
                <h3 className={cn(
                  "font-bold text-xl md:text-2xl",
                  category.color === "green" && "text-green-700 dark:text-green-400",
                  category.color === "blue" && "text-blue-700 dark:text-blue-400",
                  category.color === "purple" && "text-purple-700 dark:text-purple-400"
                )}>{category.title}</h3>
              </div>
              
              <div className={cn(
                "rounded-xl p-1 shadow-sm",
                category.color === "green" && "bg-gradient-to-r from-green-50 to-white dark:from-zinc-800 dark:to-zinc-900",
                category.color === "blue" && "bg-gradient-to-r from-blue-50 to-white dark:from-zinc-800 dark:to-zinc-900",
                category.color === "purple" && "bg-gradient-to-r from-purple-50 to-white dark:from-zinc-800 dark:to-zinc-900"
              )}>
                <div className="bg-white dark:bg-zinc-900 rounded-lg">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem 
                        value={`${category.name}-item-${index}`} 
                        key={index} 
                        className={cn(
                          "border-b last:border-0 dark:border-zinc-800",
                          category.color === "green" && "border-green-100",
                          category.color === "blue" && "border-blue-100",
                          category.color === "purple" && "border-purple-100"
                        )}
                      >
                        <AccordionTrigger 
                          className={cn(
                            "text-left py-6 text-lg font-medium text-gray-900 dark:text-white transition-colors",
                            category.color === "green" && "hover:text-green-700 dark:hover:text-green-400",
                            category.color === "blue" && "hover:text-blue-700 dark:hover:text-blue-400",
                            category.color === "purple" && "hover:text-purple-700 dark:hover:text-purple-400"
                          )}
                        >
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6 text-left">
                          <div className="prose dark:prose-invert max-w-none prose-p:text-gray-700 dark:prose-p:text-gray-300">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="inline-block overflow-hidden">
              <div className="relative px-8 py-4 bg-white dark:bg-zinc-800 rounded-xl shadow-md backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 border border-gray-200 dark:border-zinc-700">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 opacity-50 blur-xl"></div>
                <div className="relative flex items-center gap-3 z-10">
                  <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <a href="#contact" className="font-medium text-gray-900 dark:text-white hover:text-purple-700 dark:hover:text-purple-400 transition-colors">
                    Still growing questions? Let our gardeners help you bloom
                    <ExternalLink className="inline-block ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
