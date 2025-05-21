
import { Database, Network, Activity, User, Zap, FileText, Code, Brain, Bot, GitBranch, MessageCircle, Eye, Cpu } from "lucide-react";
import React from "react";

export interface Capability {
  name: string;
  description: string;
}

export interface Link {
  type: string;
  url: string;
}

export interface Agent {
  id: string;
  name: string;
  type: string;
  status: "Active" | "Idle" | "Standby";
  capabilities: Capability[];
  tags: string[];
  createdBy: string;
  dateCreated: string;
  icon: React.ReactNode;
  description: string;
  lastUpdated: string;
  version: string;
  usageCount: number;
  performanceScore: number;
  compatibleSystems: string[];
  domains: string[];
  documentationUrl: string;
  deployment_type: string;
  deployment_url: string;
  deployment_region: string;
  links: Link[];
  metadata: {
    framework: string;
    programming_language: string;
    version: string;
    supported_languages: string[];
  };
}

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "DataAnalyst-01",
    type: "Analytics",
    status: "Active",
    capabilities: [
      { name: "Data processing", description: "Process and clean large datasets" },
      { name: "Statistical analysis", description: "Apply advanced statistical methods" },
      { name: "Visualization", description: "Create interactive data visualizations" }
    ],
    tags: ["Data", "Analytics", "AI"],
    domains: ["Business Intelligence", "Data Science"],
    createdBy: "System Admin",
    dateCreated: "2023-01-15",
    icon: <Database className="h-6 w-6 text-blue-500" />,
    description: "Specialized in processing large datasets and extracting valuable insights through advanced statistical methods.",
    lastUpdated: "2023-05-10",
    version: "1.2.5",
    usageCount: 1245,
    performanceScore: 92,
    compatibleSystems: ["Cloud Storage", "Database Systems", "Visualization Tools"],
    documentationUrl: "https://docs.hibiscus.ai/agents/data-analyst-01",
    deployment_type: "cloud",
    deployment_url: "https://api.hibiscus.ai/agents/data-analyst-01",
    deployment_region: "us-west",
    links: [
      { type: "github", url: "https://github.com/hibiscus/data-analyst" },
      { type: "website", url: "https://hibiscus.ai/agents/data-analyst" }
    ],
    metadata: {
      framework: "PyTorch",
      programming_language: "Python",
      version: "1.2.5",
      supported_languages: ["English", "Spanish"]
    }
  },
  {
    id: "agent-2",
    name: "NetworkGuard-42",
    type: "Security",
    status: "Active",
    capabilities: [
      { name: "Threat detection", description: "Identify potential security threats" },
      { name: "Traffic analysis", description: "Analyze network traffic for anomalies" },
      { name: "Authentication", description: "Secure authentication protocols" }
    ],
    tags: ["Security", "Network", "Protection"],
    domains: ["Cybersecurity", "Network Security"],
    createdBy: "Security Team",
    dateCreated: "2023-02-28",
    icon: <Network className="h-6 w-6 text-green-500" />,
    description: "Monitors network traffic in real-time to identify and neutralize potential security threats before they cause damage.",
    lastUpdated: "2023-06-18",
    version: "2.0.1",
    usageCount: 3567,
    performanceScore: 97,
    compatibleSystems: ["Firewalls", "Network Appliances", "Security Scanners"],
    documentationUrl: "https://docs.hibiscus.ai/agents/networkguard-42",
    deployment_type: "on-premise",
    deployment_url: "https://security.local/networkguard",
    deployment_region: "global",
    links: [
      { type: "github", url: "https://github.com/hibiscus/network-guard" },
      { type: "docs", url: "https://docs.hibiscus.ai/networkguard" }
    ],
    metadata: {
      framework: "TensorFlow",
      programming_language: "Go",
      version: "2.0.1",
      supported_languages: ["English"]
    }
  },
  {
    id: "agent-3",
    name: "ProcessMonitor-7",
    type: "Monitoring",
    status: "Idle",
    capabilities: [
      { name: "Resource tracking", description: "Track system resource usage" },
      { name: "Performance optimization", description: "Identify bottlenecks and optimize performance" }
    ],
    tags: ["Monitoring", "Performance", "System"],
    domains: ["DevOps", "System Administration"],
    createdBy: "DevOps Team",
    dateCreated: "2023-03-10",
    icon: <Activity className="h-6 w-6 text-purple-500" />,
    description: "Tracks system resources and performance metrics to identify bottlenecks and optimize overall system performance.",
    lastUpdated: "2023-04-25",
    version: "1.7.3",
    usageCount: 2189,
    performanceScore: 88,
    compatibleSystems: ["Kubernetes", "Docker", "VM Environments"],
    documentationUrl: "https://docs.hibiscus.ai/agents/process-monitor-7",
    deployment_type: "hybrid",
    deployment_url: "https://monitoring.hibiscus.ai/process",
    deployment_region: "eu-central",
    links: [
      { type: "github", url: "https://github.com/hibiscus/process-monitor" },
      { type: "api", url: "https://api.hibiscus.ai/process-monitor" }
    ],
    metadata: {
      framework: "Prometheus",
      programming_language: "Rust",
      version: "1.7.3",
      supported_languages: ["English", "German"]
    }
  },
  {
    id: "agent-4",
    name: "ChatGPT Assistant",
    type: "Support",
    status: "Active",
    capabilities: [
      { name: "Text Generation", description: "Generates human-like text based on input" },
      { name: "Code Explanation", description: "Explains source code and programming concepts" },
      { name: "Query response", description: "Responds to user queries accurately" }
    ],
    tags: ["LLM", "OpenAI", "Assistant"],
    domains: ["AI", "Programming"],
    createdBy: "Support Team",
    dateCreated: "2023-04-05",
    icon: <MessageCircle className="h-6 w-6 text-amber-500" />,
    description: "AI assistant powered by OpenAI that provides text generation, code explanations, and query responses.",
    lastUpdated: "2023-07-01",
    version: "4.0",
    usageCount: 7834,
    performanceScore: 94,
    compatibleSystems: ["CRM Systems", "Help Desk Solutions", "Chat Applications"],
    documentationUrl: "https://openai.com/docs",
    deployment_type: "cloud",
    deployment_url: "https://api.openai.com/v1/chat/completions",
    deployment_region: "global",
    links: [
      { type: "github", url: "https://github.com/openai" },
      { type: "website", url: "https://openai.com" }
    ],
    metadata: {
      framework: "OpenAI GPT",
      programming_language: "Python",
      version: "4.0",
      supported_languages: ["English", "Spanish", "French"]
    }
  },
  {
    id: "agent-5",
    name: "PowerOpti",
    type: "Utilities",
    status: "Standby",
    capabilities: [
      { name: "Energy management", description: "Optimize energy usage across systems" },
      { name: "Load balancing", description: "Balance workloads for optimal performance" },
      { name: "Consumption analysis", description: "Analyze resource consumption patterns" }
    ],
    tags: ["Power", "Optimization", "Green"],
    domains: ["Energy", "Infrastructure"],
    createdBy: "Infrastructure Team",
    dateCreated: "2023-05-20",
    icon: <Zap className="h-6 w-6 text-purple-500" />,
    description: "Optimizes energy usage through intelligent load balancing and in-depth consumption analysis to reduce costs.",
    lastUpdated: "2023-06-15",
    version: "1.0.4",
    usageCount: 956,
    performanceScore: 91,
    compatibleSystems: ["Power Management Systems", "Cloud Infrastructure", "Data Centers"],
    documentationUrl: "https://docs.hibiscus.ai/agents/power-optimizer-9",
    deployment_type: "on-premise",
    deployment_url: "https://energy.local/optimizer",
    deployment_region: "eu-west",
    links: [
      { type: "github", url: "https://github.com/hibiscus/power-optimizer" },
      { type: "docs", url: "https://docs.hibiscus.ai/power-optimizer" }
    ],
    metadata: {
      framework: "Custom",
      programming_language: "C++",
      version: "1.0.4",
      supported_languages: ["English"]
    }
  },
  {
    id: "agent-6",
    name: "DataSync-15",
    type: "Integration",
    status: "Active",
    capabilities: [
      { name: "Data synchronization", description: "Sync data between different systems" },
      { name: "Format conversion", description: "Convert between different data formats" },
      { name: "Schema mapping", description: "Map between different data schemas" }
    ],
    tags: ["Integration", "Data", "Sync"],
    domains: ["Data Integration", "Enterprise Software"],
    createdBy: "Integration Team",
    dateCreated: "2023-06-10",
    icon: <Database className="h-6 w-6 text-indigo-500" />,
    description: "Manages data synchronization between different systems, handling format conversions and schema mappings automatically.",
    lastUpdated: "2023-07-05",
    version: "2.3.1",
    usageCount: 4321,
    performanceScore: 95,
    compatibleSystems: ["CRM", "ERP", "Data Warehouses", "Legacy Systems"],
    documentationUrl: "https://docs.hibiscus.ai/agents/data-sync-15",
    deployment_type: "cloud",
    deployment_url: "https://api.hibiscus.ai/datasync",
    deployment_region: "us-east",
    links: [
      { type: "github", url: "https://github.com/hibiscus/data-sync" },
      { type: "api", url: "https://api.hibiscus.ai/datasync/swagger" }
    ],
    metadata: {
      framework: "Apache Camel",
      programming_language: "Java",
      version: "2.3.1",
      supported_languages: ["English", "Japanese"]
    }
  },
  {
    id: "agent-7",
    name: "CodeAssistant-3",
    type: "Development",
    status: "Active",
    capabilities: [
      { name: "Code generation", description: "Generate code snippets from requirements" },
      { name: "Code review", description: "Review code for issues and improvements" },
      { name: "Documentation", description: "Generate documentation from code" }
    ],
    tags: ["Development", "Coding", "AI"],
    domains: ["Software Development", "DevOps"],
    createdBy: "Development Team",
    dateCreated: "2023-07-15",
    icon: <Code className="h-6 w-6 text-blue-600" />,
    description: "AI-powered coding assistant that helps developers write, review, and document code more efficiently.",
    lastUpdated: "2023-08-10",
    version: "3.2.0",
    usageCount: 5678,
    performanceScore: 93,
    compatibleSystems: ["IDEs", "CI/CD Pipelines", "Version Control Systems"],
    documentationUrl: "https://docs.hibiscus.ai/agents/code-assistant",
    deployment_type: "cloud",
    deployment_url: "https://api.hibiscus.ai/code-assistant",
    deployment_region: "global",
    links: [
      { type: "github", url: "https://github.com/hibiscus/code-assistant" },
      { type: "website", url: "https://hibiscus.ai/code-assistant" }
    ],
    metadata: {
      framework: "Custom NLP",
      programming_language: "TypeScript",
      version: "3.2.0",
      supported_languages: ["English"]
    }
  },
  {
    id: "agent-8",
    name: "DeepLearning-5",
    type: "Machine Learning",
    status: "Active",
    capabilities: [
      { name: "Model training", description: "Train machine learning models on custom data" },
      { name: "Feature selection", description: "Identify important features for model training" },
      { name: "Model deployment", description: "Deploy trained models to production" }
    ],
    tags: ["ML", "AI", "Deep Learning"],
    domains: ["Machine Learning", "Data Science"],
    createdBy: "AI Research Team",
    dateCreated: "2023-08-05",
    icon: <Brain className="h-6 w-6 text-pink-500" />,
    description: "Advanced deep learning platform that simplifies the process of training, tuning, and deploying AI models.",
    lastUpdated: "2023-09-15",
    version: "5.1.2",
    usageCount: 3456,
    performanceScore: 96,
    compatibleSystems: ["GPU Clusters", "MLOps Platforms", "Data Warehouses"],
    documentationUrl: "https://docs.hibiscus.ai/agents/deep-learning",
    deployment_type: "hybrid",
    deployment_url: "https://ml.hibiscus.ai/platform",
    deployment_region: "global",
    links: [
      { type: "github", url: "https://github.com/hibiscus/deep-learning" },
      { type: "docs", url: "https://docs.hibiscus.ai/deep-learning" },
      { type: "api", url: "https://api.hibiscus.ai/ml/v5" }
    ],
    metadata: {
      framework: "PyTorch, TensorFlow",
      programming_language: "Python",
      version: "5.1.2",
      supported_languages: ["English", "Chinese"]
    }
  }
];
