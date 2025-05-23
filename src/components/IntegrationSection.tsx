import React, { useEffect, useRef, useState } from "react";
import { Code, Terminal, Settings, ArrowRight, Download, Cloud, LucideIcon, Sprout, Flower, Globe, Server, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

// Define the blink animation keyframes
const blinkKeyframes = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
`;

const TerminalCodeSnippet = ({ code, stage }: { code: string; stage: string }) => {
  const stageEmoji = {
    seed: '🌱',
    sprout: '🌿',
    sapling: '🌵',
    bloom: '🌸',
    hibiscus: '🌺'
  }[stage] || '🌱';
  
  // For typing animation - using a simpler approach to ensure browser compatibility
  const [displayedLineCount, setDisplayedLineCount] = useState<number>(0);
  const [displayedContent, setDisplayedContent] = useState<React.ReactNode[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const animationStartedRef = useRef<boolean>(false);
  const initialDelay = 500; // ms before starting animation
  const typingSpeed = 40; // ms between characters
  
  // Process code into lines with proper formatting
  const processedLines = React.useMemo(() => {
    const result: Array<{type: 'comment' | 'command' | 'output' | 'empty', content: string}> = [];
    const lines = code.split('\n');
    
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (line.trim().startsWith('#')) {
        // Comment line
        result.push({ type: 'comment', content: line });
      } else if (line.trim() !== '') {
        // Command line - add $ prefix if not already there
        const commandLine = line.trim().startsWith('$') ? line : `$ ${line}`;
        result.push({ type: 'command', content: commandLine });
        
        // Check if the next line could be an output line
        if (i + 1 < lines.length && !lines[i + 1].trim().startsWith('#') && !lines[i + 1].trim().startsWith('$') && lines[i + 1].trim() !== '') {
          i++;
          result.push({ type: 'output', content: lines[i] });
        }
      } else {
        // Empty line for spacing
        result.push({ type: 'empty', content: '' });
      }
      i++;
    }
    return result;
  }, [code]);
  
  // Display all code at once (animation disabled)
  useEffect(() => {
    // Just render all lines at once without animation
    const renderAllLines = () => {
      const allLines = processedLines.map((line, index) => {
        if (line.type === 'empty') {
          return <div key={`line-${index}`} className="h-2"></div>;
        }
        
        let className = "text-sm font-mono text-left";
        if (line.type === 'comment') {
          className += " text-gray-500";
        } else if (line.type === 'command') {
          className += " text-green-400 font-bold";
        } else if (line.type === 'output') {
          className += " text-gray-300 pl-4 pb-2";
        }
        
        return <div key={`line-${index}`} className={className}>{line.content}</div>;
      });
      
      setDisplayedContent(allLines);
      setDisplayedLineCount(processedLines.length); // Mark all lines as displayed
    };
    
    // Render all lines immediately
    renderAllLines();
    
    // Scroll to show all content
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = 0; // Start at the top of the content
      }
    }, 100);
    
  }, [processedLines]);
  
  // No cursor when animation is disabled
  const renderCursor = () => null;
  

  
  return (
    <>
      {/* Add the blink animation CSS */}
      <style dangerouslySetInnerHTML={{ __html: blinkKeyframes }} />
      
      <div className="rounded-xl p-0 overflow-hidden w-full shadow-xl transition-transform duration-300 transform hover:scale-[1.02]">
        <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 rounded-t-xl border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center text-xs text-gray-300 font-mono">
            <span className="mr-2">{stageEmoji}</span>
            <span>Terminal ~ pebbling@dev:~</span>
          </div>
          <div className="w-4"></div>
        </div>
        <div 
          ref={terminalRef}
          className="bg-gradient-to-b from-gray-900 to-gray-950 p-5 rounded-b-xl h-[500px] overflow-y-auto"
          style={{ textAlign: 'left' }}
        >
          <div className="flex flex-col items-start w-full text-left space-y-1">
            {displayedContent}
            {renderCursor()}
          </div>
        </div>
      </div>
    </>
  );
};

const IntegrationTab = ({
  isActive,
  icon,
  label,
  stage,
  onClick,
}: {
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
  stage: string;
  onClick: () => void;
}) => {
  const stageEmoji = {
    seed: '🌱',
    sprout: '🌿',
    sapling: '🌵',
    bloom: '🌸',
    hibiscus: '🌺'
  }[stage] || '🌱';
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
        isActive
          ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md"
          : "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 hover:shadow-md"
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
      <span className="ml-1">{stageEmoji}</span>
    </button>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  gradient, 
  iconColor,
  borderColor
}: { 
  icon: LucideIcon; 
  title: string; 
  description: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
}) => {
  const Icon = icon;
  return (
    <div className={`rounded-xl p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${gradient} border ${borderColor}`}>
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`w-6 h-6 ${iconColor}`} />
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

const IntegrationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState<
    "javascript" | "python" | "mcp"
  >("javascript");
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

  // Short code sample with clear command/output distinction
  const pythonCode = `# 🌱 → 🌿 → 🌸 → 🌺  From Seed to Hibiscus

# Install the required packages
pip install pebbling-core hibiscus-network
Collecting pebbling-core
  Downloading pebbling_core-1.2.0-py3-none-any.whl (156 kB)
Collecting hibiscus-network
  Downloading hibiscus_network-0.9.1-py3-none-any.whl (98 kB)
Installing collected packages: pebbling-core, hibiscus-network
Successfully installed hibiscus-network-0.9.1 pebbling-core-1.2.0

# Import the necessary modules
from pebbling.core import PebblingCore
from hibiscus.network import HibiscusNetwork
import asyncio

# Initialize your pebble (the seed 🌱)
pebble = PebblingCore(
    identity="your-did-key",
    storage="local"
)
Initialized Pebble with DID: did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK

# Connect to Hibiscus network (the garden 🌺)
hibiscus = HibiscusNetwork(
    pebble=pebble,
    registry="federated"
)
Successfully connected to Hibiscus network!`;

  const stage = "sprout";

  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-16 md:py-24 flex flex-col" 
      id="integration"
      ref={containerRef}
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -left-[5%] w-1/2 h-[70%] bg-green-100 dark:bg-green-900/20 opacity-60 blur-3xl rounded-full animate-pulse parallax" data-speed="0.05"></div>
      <div className="absolute -bottom-[10%] -right-[5%] w-1/3 h-[50%] bg-blue-100 dark:bg-blue-900/20 opacity-50 blur-3xl rounded-full animate-pulse parallax" data-speed="0.08"></div>
      
      {/* Center aligned content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center z-10">
        <div className="flex items-center justify-center mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            <span className="mr-1" role="img" aria-label="Seed to Hibiscus">🌱 → 🌺</span> From Seed to Hibiscus: Integrate with Ease
          </span>
        </div>
        
        <div className="max-w-4xl mx-auto mb-10 mt-2 md:mt-0 text-center">
          <h2 
            className="font-subheading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-300 dark:to-purple-400" 
            style={{ animationDelay: '0.3s' }}
          >
            Grow Your Application with Pebbling
          </h2>
          <p 
            style={{ animationDelay: "0.4s" }} 
            className="font-subheading mt-4 sm:mt-6 mb-8 text-gray-700 dark:text-gray-300 opacity-0 animate-fade-in text-base sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From a single Pebble seed to the flourishing Hibiscus network, our integration paths are designed to grow with your needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto w-full overflow-hidden opacity-0 animate-fade-in parallax" data-speed="0.03" style={{ animationDelay: '0.5s' }}>
          <TerminalCodeSnippet code={pythonCode} stage={stage} />
        </div>
        
        <div className="mt-12 opacity-0 animate-fade-in text-center" style={{ animationDelay: '0.8s' }}>
          <a
            href="https://docs.pebbling.ai/integration"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white shadow-lg flex items-center justify-center group rounded-full cursor-pointer text-sm font-medium leading-5 py-4 px-8 min-h-[56px] transition-all duration-300"
          >
            Explore Integration Guides
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
