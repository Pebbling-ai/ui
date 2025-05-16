
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the Hibiscus communication protocol?",
      answer:
        "Hibiscus is a next-generation communication protocol designed specifically for agent-to-agent interactions. It enables seamless, secure, and efficient data exchange between autonomous agents across different platforms and ecosystems.",
    },
    {
      question: "How does agent communication work?",
      answer:
        "Our protocol establishes a standardized communication channel between agents. Each agent maintains its own identity and capabilities while exchanging information through structured messages that include intent, context, and payload data.",
    },
    {
      question: "Is the protocol secure?",
      answer:
        "Yes, security is our top priority. All communications are end-to-end encrypted, with optional zero-knowledge proofs for sensitive information. Our protocol includes robust authentication mechanisms and permission systems to ensure only authorized agents can exchange data.",
    },
    {
      question: "Which programming languages are supported?",
      answer:
        "We officially support JavaScript, Python, and our native MCP protocol, with community-maintained libraries for Java, Go, Rust, and C#. Our API is language-agnostic, allowing integration with virtually any programming environment.",
    },
    {
      question: "Can I use Hibiscus for my commercial project?",
      answer:
        "Absolutely! While Hibiscus is proudly open-source, we offer commercial licenses that include additional features, dedicated support, and SLA guarantees for enterprise deployments. See our pricing section for more details.",
    },
    {
      question: "What's the difference between MCP and other integration options?",
      answer:
        "MCP (Machine Communication Protocol) is our native low-level protocol optimized for high-performance, low-latency agent interactions. While our JavaScript and Python SDKs offer convenience and ease of use, MCP provides maximum control and efficiency for demanding applications.",
    },
  ];

  return (
    <section className="py-16 bg-white animate-on-scroll opacity-0" id="faq">
      <div className="section-container">
        <div className="text-center mb-12">
         
          <h2 className="section-title mb-4">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about the Hibiscus agent communication protocol
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="">
                <AccordionTrigger className="text-left py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-black transition-colors">
              <MessageCircle size={20} />
              <a href="#contact" className="font-medium">
                Still have questions? Contact our support team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
