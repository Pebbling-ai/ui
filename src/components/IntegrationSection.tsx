import React from "react";
import { Code, Terminal, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const CodeSnippet = ({ language, code }: { language: string; code: string }) => {
  return (
    <div className="rounded-lg p-4 overflow-auto max-w-full macbook-screen">
      <div className="flex items-center justify-between bg-gray-800 py-2 px-4 rounded-t-lg border-b border-gray-700 mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono">{language}.{language === 'javascript' ? 'js' : language === 'python' ? 'py' : 'mcp'}</div>
        <div className="w-4"></div>
      </div>
      <pre className="text-white text-sm font-mono bg-gray-900 p-4 rounded-b-lg">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const IntegrationTab = ({
  isActive,
  icon,
  label,
  onClick,
}: {
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
        isActive
          ? "bg-white text-black shadow-md"
          : "bg-gray-100 text-black hover:bg-gray-200"
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
};

const IntegrationSection = () => {
  const [activeTab, setActiveTab] = React.useState<
    "javascript" | "python" | "mcp"
  >("javascript");

  const codeSnippets = {
    javascript: `// Install via npm
npm install @hibiscus/client

// Import and initialize
import { HibiscusClient } from '@hibiscus/client';

const client = new HibiscusClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Connect to an agent
const agent = await client.connectAgent('agent-id');
const response = await agent.chat("How can you help me?");

console.log(response);`,

    python: `# Install via pip
pip install hibiscus-client

# Import and initialize
from hibiscus import HibiscusClient

client = HibiscusClient(
    api_key="your-api-key",
    environment="production"
)

# Connect to an agent
agent = client.connect_agent("agent-id")
response = agent.chat("How can you help me?")

print(response)`,

    mcp: `# Using MCP Protocol
# First establish connection
CONNECT mcp://hibiscus.network:443 {
  "auth": "Bearer your-api-key",
  "agent": "agent-id",
  "protocol": "v1"
}

# Send a message
SEND {
  "type": "chat",
  "content": "How can you help me?",
  "metadata": {
    "user": "user-123"
  }
}

# Receive response
RECEIVE {
  "type": "response",
  "content": "I can help you with...",
  "metadata": {
    "agent": "agent-id",
    "timestamp": "2024-06-16T10:30:00Z"
  }
}`,
  };

  return (
    <section className="py-16 animate-on-scroll opacity-0" id="integration">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Seamless Integration</h2>
          <p className="section-subtitle mx-auto">
            Connect to the Hibiscus network with just a few lines of code using
            your preferred language or protocol
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg border-0 bg-gradient-to-b from-gray-100 to-gray-200">
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="flex flex-wrap justify-center gap-2 p-4 border-b">
                <IntegrationTab
                  isActive={activeTab === "javascript"}
                  icon={<Code size={18} />}
                  label="JavaScript"
                  onClick={() => setActiveTab("javascript")}
                />
                <IntegrationTab
                  isActive={activeTab === "python"}
                  icon={<Terminal size={18} />}
                  label="Python"
                  onClick={() => setActiveTab("python")}
                />
                <IntegrationTab
                  isActive={activeTab === "mcp"}
                  icon={<Settings size={18} />}
                  label="MCP Protocol"
                  onClick={() => setActiveTab("mcp")}
                />
              </div>
              <div className="p-5 bg-gray-100">
                <CodeSnippet
                  language={activeTab}
                  code={codeSnippets[activeTab]}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Minimal Configuration</h3>
            <p className="text-gray-600">
              Get started quickly with sensible defaults and minimal configuration requirements
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Cross-Platform Support</h3>
            <p className="text-gray-600">
              Support for all major programming languages and platforms ensures compatibility with your stack
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Enterprise-Ready</h3>
            <p className="text-gray-600">
              Built with security and scalability in mind for both startups and enterprise applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
