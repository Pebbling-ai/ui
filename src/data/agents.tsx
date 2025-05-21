
import { Database, Network, Activity, User, Zap, FileText, Code, Brain, Bot, GitBranch, MessageCircle, Eye, Cpu, Shield, CloudRain, PieChart, Workflow, Share2, CircuitBoard, Radio, Layers, Terminal, LineChart, CloudCog, BookOpen, Filter, CloudLightning, SquarePen, Rocket } from "lucide-react";
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
    icon: <Database className="h-6 w-6 text-white" />,
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
    icon: <Network className="h-6 w-6 text-white" />,
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
    icon: <Activity className="h-6 w-6 text-white" />,
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
    icon: <MessageCircle className="h-6 w-6 text-white" />,
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
    icon: <Zap className="h-6 w-6 text-white" />,
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
    icon: <Database className="h-6 w-6 text-white" />,
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
    icon: <Code className="h-6 w-6 text-white" />,
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
    icon: <Brain className="h-6 w-6 text-white" />,
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
  },
  // Additional agent data
  {
    id: "agent-9",
    name: "SecurityScanner-X",
    type: "Security",
    status: "Active",
    capabilities: [
      { name: "Vulnerability assessment", description: "Scan systems for security vulnerabilities" },
      { name: "Penetration testing", description: "Simulate attacks to test security measures" },
      { name: "Compliance checking", description: "Verify adherence to security standards" }
    ],
    tags: ["Security", "Scanning", "Compliance"],
    domains: ["Cybersecurity", "Compliance", "Risk Management"],
    createdBy: "InfoSec Team",
    dateCreated: "2023-10-01",
    icon: <Shield className="h-6 w-6 text-white" />,
    description: "Automated security scanning tool that identifies vulnerabilities across systems and applications to prevent breaches.",
    lastUpdated: "2023-12-05",
    version: "3.4.2",
    usageCount: 6245,
    performanceScore: 95,
    compatibleSystems: ["Web Applications", "Cloud Infrastructure", "Network Systems"],
    documentationUrl: "https://docs.hibiscus.ai/agents/security-scanner",
    deployment_type: "hybrid",
    deployment_url: "https://security.hibiscus.ai/scanner",
    deployment_region: "global",
    links: [
      { type: "github", url: "https://github.com/hibiscus/security-scanner" },
      { type: "docs", url: "https://docs.hibiscus.ai/security/scanner" }
    ],
    metadata: {
      framework: "Custom Engine",
      programming_language: "Rust",
      version: "3.4.2",
      supported_languages: ["English", "Japanese", "German"]
    }
  },
  {
    id: "agent-10",
    name: "WeatherML-Forecast",
    type: "Forecasting",
    status: "Active",
    capabilities: [
      { name: "Weather prediction", description: "Accurate forecasting using ML models" },
      { name: "Climate trend analysis", description: "Identify long-term weather patterns" },
      { name: "Anomaly detection", description: "Detect unusual weather events" }
    ],
    tags: ["Weather", "Forecasting", "ML"],
    domains: ["Meteorology", "Climate Science"],
    createdBy: "Climate Research Division",
    dateCreated: "2023-11-12",
    icon: <CloudRain className="h-6 w-6 text-white" />,
    description: "Machine learning-driven weather forecasting agent that provides accurate predictions based on atmospheric data.",
    lastUpdated: "2024-01-20",
    version: "2.1.5",
    usageCount: 9876,
    performanceScore: 89,
    compatibleSystems: ["Weather Stations", "Satellite Imagery Systems", "Climate Databases"],
    documentationUrl: "https://docs.hibiscus.ai/agents/weather-forecast",
    deployment_type: "cloud",
    deployment_url: "https://api.hibiscus.ai/weather-forecast",
    deployment_region: "global",
    links: [
      { type: "github", url: "https://github.com/hibiscus/weather-ml" },
      { type: "api", url: "https://api.hibiscus.ai/weather/docs" }
    ],
    metadata: {
      framework: "TensorFlow",
      programming_language: "Python",
      version: "2.1.5",
      supported_languages: ["English", "Spanish", "French"]
    }
  },
  {
    id: "agent-11",
    name: "HealthAnalytics-Pro",
    type: "Healthcare",
    status: "Active",
    capabilities: [
      { name: "Patient monitoring", description: "Track patient health metrics in real-time" },
      { name: "Diagnostic assistance", description: "Support medical diagnoses with AI" },
      { name: "Trend analysis", description: "Identify population health patterns" }
    ],
    tags: ["Healthcare", "Analytics", "Diagnostics"],
    domains: ["Medical", "Health Informatics"],
    createdBy: "Medical AI Division",
    dateCreated: "2023-09-28",
    icon: <PieChart className="h-6 w-6 text-white" />,
    description: "AI-powered healthcare analytics platform that processes medical data to improve patient outcomes and clinical decisions.",
    lastUpdated: "2024-02-15",
    version: "4.0.3",
    usageCount: 4520,
    performanceScore: 94,
    compatibleSystems: ["Electronic Health Records", "Medical Imaging Systems", "Clinical Research Databases"],
    documentationUrl: "https://docs.hibiscus.ai/agents/health-analytics",
    deployment_type: "private-cloud",
    deployment_url: "https://health-secure.hibiscus.ai/analytics",
    deployment_region: "multi-region",
    links: [
      { type: "github", url: "https://github.com/hibiscus/health-analytics" },
      { type: "docs", url: "https://docs.hibiscus.ai/health/compliance" }
    ],
    metadata: {
      framework: "PyTorch, ONNX",
      programming_language: "Python, R",
      version: "4.0.3",
      supported_languages: ["English", "Spanish", "French", "German", "Chinese"]
    }
  },
  {
    id: "agent-12",
    name: "WorkflowAutomator",
    type: "Automation",
    status: "Active",
    capabilities: [
      { name: "Process automation", description: "Automate repetitive business processes" },
      { name: "Workflow optimization", description: "Identify and streamline inefficient workflows" },
      { name: "Task scheduling", description: "Intelligent scheduling of automated tasks" }
    ],
    tags: ["Automation", "Workflow", "Business Process"],
    domains: ["Business Operations", "Enterprise Automation"],
    createdBy: "Process Excellence Team",
    dateCreated: "2023-07-30",
    icon: <Workflow className="h-6 w-6 text-white" />,
    description: "Business process automation agent that streamlines workflows and reduces manual intervention across the organization.",
    lastUpdated: "2024-03-01",
    version: "3.1.0",
    usageCount: 7654,
    performanceScore: 92,
    compatibleSystems: ["CRM", "ERP", "ITSM", "HRM Systems"],
    documentationUrl: "https://docs.hibiscus.ai/agents/workflow-automator",
    deployment_type: "hybrid",
    deployment_url: "https://automation.hibiscus.ai/workflow",
    deployment_region: "multi-region",
    links: [
      { type: "github", url: "https://github.com/hibiscus/workflow-automator" },
      { type: "api", url: "https://api.hibiscus.ai/automation/docs" }
    ],
    metadata: {
      framework: "Custom Automation Engine",
      programming_language: "TypeScript, Go",
      version: "3.1.0",
      supported_languages: ["English", "Japanese", "Portuguese"]
    }
  },
  {
    id: "agent-13",
    name: "IntegrationHub-Connect",
    type: "Integration",
    status: "Idle",
    capabilities: [
      { name: "API integration", description: "Connect systems through various APIs" },
      { name: "Data transformation", description: "Transform data between different formats" },
      { name: "Event processing", description: "Process and route events between systems" }
    ],
    tags: ["Integration", "API", "Middleware"],
    domains: ["Enterprise Integration", "System Architecture"],
    createdBy: "Integration Architecture Team",
    dateCreated: "2023-08-22",
    icon: <Share2 className="h-6 w-6 text-white" />,
    description: "Enterprise integration hub that connects disparate systems, enabling seamless data flow across the organization.",
    lastUpdated: "2024-01-30",
    version: "2.5.1",
    usageCount: 5432,
    performanceScore: 91,
    compatibleSystems: ["SaaS Applications", "Legacy Systems", "Cloud Platforms", "Databases"],
    documentationUrl: "https://docs.hibiscus.ai/agents/integration-hub",
    deployment_type: "cloud",
    deployment_url: "https://integration.hibiscus.ai/hub",
    deployment_region: "multi-region",
    links: [
      { type: "github", url: "https://github.com/hibiscus/integration-hub" },
      { type: "docs", url: "https://docs.hibiscus.ai/integration/patterns" }
    ],
    metadata: {
      framework: "Apache Camel, Spring Integration",
      programming_language: "Java, Kotlin",
      version: "2.5.1",
      supported_languages: ["English", "German"]
    }
  },
  {
    id: "agent-14",
    name: "EdgeCompute-AI",
    type: "Edge Computing",
    status: "Active",
    capabilities: [
      { name: "Edge inference", description: "Run AI models at the edge" },
      { name: "Local processing", description: "Process data locally without cloud dependency" },
      { name: "Model optimization", description: "Optimize AI models for edge deployment" }
    ],
    tags: ["Edge", "IoT", "Inference"],
    domains: ["Edge Computing", "IoT", "Embedded Systems"],
    createdBy: "Edge AI Team",
    dateCreated: "2023-09-05",
    icon: <CircuitBoard className="h-6 w-6 text-white" />,
    description: "Edge computing agent that enables AI model execution directly on edge devices, reducing latency and bandwidth usage.",
    lastUpdated: "2024-02-20",
    version: "1.8.3",
    usageCount: 3214,
    performanceScore: 88,
    compatibleSystems: ["IoT Devices", "Embedded Systems", "Edge Gateways", "Industrial Equipment"],
    documentationUrl: "https://docs.hibiscus.ai/agents/edge-compute",
    deployment_type: "edge",
    deployment_url: "https://edge.hibiscus.ai/deploy",
    deployment_region: "device-dependent",
    links: [
      { type: "github", url: "https://github.com/hibiscus/edge-compute-ai" },
      { type: "docs", url: "https://docs.hibiscus.ai/edge/optimization" }
    ],
    metadata: {
      framework: "TensorFlow Lite, ONNX Runtime",
      programming_language: "C++, Python",
      version: "1.8.3",
      supported_languages: ["English"]
    }
  },
  {
    id: "agent-15",
    name: "NetworkOptimizer-Pro",
    type: "Networking",
    status: "Active",
    capabilities: [
      { name: "Traffic optimization", description: "Optimize network traffic flow" },
      { name: "Resource allocation", description: "Dynamically allocate network resources" },
      { name: "Performance monitoring", description: "Monitor and report on network performance" }
    ],
    tags: ["Networking", "Optimization", "Traffic"],
    domains: ["Network Engineering", "Telecommunications"],
    createdBy: "Network Engineering Team",
    dateCreated: "2023-10-18",
    icon: <Radio className="h-6 w-6 text-white" />,
    description: "Network optimization agent that dynamically improves traffic flow and resource allocation for maximum performance.",
    lastUpdated: "2024-03-05",
    version: "3.0.2",
    usageCount: 4123,
    performanceScore: 93,
    compatibleSystems: ["Routers", "Switches", "WAN Accelerators", "SDN Controllers"],
    documentationUrl: "https://docs.hibiscus.ai/agents/network-optimizer",
    deployment_type: "on-premise",
    deployment_url: "https://local-network/optimizer",
    deployment_region: "customer-defined",
    links: [
      { type: "github", url: "https://github.com/hibiscus/network-optimizer" },
      { type: "docs", url: "https://docs.hibiscus.ai/network/architecture" }
    ],
    metadata: {
      framework: "Custom Optimization Engine",
      programming_language: "Go, Rust",
      version: "3.0.2",
      supported_languages: ["English", "Korean"]
    }
  },
  {
    id: "agent-16",
    name: "DataVis-Explorer",
    type: "Visualization",
    status: "Active",
    capabilities: [
      { name: "Data visualization", description: "Create interactive visualizations from data" },
      { name: "Insight generation", description: "Automatically generate insights from data" },
      { name: "Dashboard creation", description: "Build interactive dashboards with minimal input" }
    ],
    tags: ["Visualization", "Data", "Dashboards"],
    domains: ["Business Intelligence", "Data Analysis"],
    createdBy: "Data Visualization Team",
    dateCreated: "2023-11-30",
    icon: <Layers className="h-6 w-6 text-white" />,
    description: "Advanced data visualization platform that transforms complex data into intuitive visual representations.",
    lastUpdated: "2024-02-28",
    version: "2.7.4",
    usageCount: 6789,
    performanceScore: 95,
    compatibleSystems: ["Data Warehouses", "Business Intelligence Tools", "Reporting Platforms"],
    documentationUrl: "https://docs.hibiscus.ai/agents/datavis-explorer",
    deployment_type: "cloud",
    deployment_url: "https://viz.hibiscus.ai/explorer",
    deployment_region: "us-west",
    links: [
      { type: "github", url: "https://github.com/hibiscus/datavis-explorer" },
      { type: "gallery", url: "https://hibiscus.ai/gallery/visualizations" }
    ],
    metadata: {
      framework: "D3.js, Plotly, React-Vis",
      programming_language: "TypeScript, R",
      version: "2.7.4",
      supported_languages: ["English", "Chinese", "Spanish"]
    }
  },
  {
    id: "agent-17",
    name: "DevOpsAssistant-CI",
    type: "DevOps",
    status: "Active",
    capabilities: [
      { name: "CI/CD automation", description: "Automate continuous integration and deployment" },
      { name: "Infrastructure as code", description: "Generate and manage infrastructure code" },
      { name: "Deployment optimization", description: "Optimize deployment strategies" }
    ],
    tags: ["DevOps", "CI/CD", "Automation"],
    domains: ["Software Development", "Operations"],
    createdBy: "Platform Engineering",
    dateCreated: "2023-12-10",
    icon: <Terminal className="h-6 w-6 text-white" />,
    description: "DevOps assistant that streamlines CI/CD pipelines and infrastructure management for faster delivery cycles.",
    lastUpdated: "2024-03-15",
    version: "2.3.0",
    usageCount: 5421,
    performanceScore: 90,
    compatibleSystems: ["Jenkins", "GitHub Actions", "GitLab CI", "Kubernetes", "Terraform"],
    documentationUrl: "https://docs.hibiscus.ai/agents/devops-assistant",
    deployment_type: "hybrid",
    deployment_url: "https://devops.hibiscus.ai/ci",
    deployment_region: "multi-region",
    links: [
      { type: "github", url: "https://github.com/hibiscus/devops-assistant" },
      { type: "docs", url: "https://docs.hibiscus.ai/devops/best-practices" }
    ],
    metadata: {
      framework: "Custom DevOps Stack",
      programming_language: "Python, Go, YAML",
      version: "2.3.0",
      supported_languages: ["English"]
    }
  },
  {
    id: "agent-18",
    name: "MarketAnalyzer-Predict",
    type: "Analytics",
    status: "Idle",
    capabilities: [
      { name: "Market trend analysis", description: "Analyze market trends and patterns" },
      { name: "Competitive intelligence", description: "Gather and analyze competitor data" },
      { name: "Predictive modeling", description: "Forecast future market conditions" }
    ],
    tags: ["Market Analysis", "Prediction", "Business Intelligence"],
    domains: ["Market Research", "Business Strategy"],
    createdBy: "Business Intelligence Team",
    dateCreated: "2023-10-25",
    icon: <LineChart className="h-6 w-6 text-white" />,
    description: "Market analysis agent that provides data-driven insights and predictions to support strategic business decisions.",
    lastUpdated: "2024-02-10",
    version: "2.1.3",
    usageCount: 3423,
    performanceScore: 87,
    compatibleSystems: ["CRM Systems", "Market Research Platforms", "Data Lakes"],
    documentationUrl: "https://docs.hibiscus.ai/agents/market-analyzer",
    deployment_type: "cloud",
    deployment_url: "https://analytics.hibiscus.ai/market",
    deployment_region: "eu-central",
    links: [
      { type: "github", url: "https://github.com/hibiscus/market-analyzer" },
      { type: "dashboard", url: "https://hibiscus.ai/market-intelligence" }
    ],
    metadata: {
      framework: "Scikit-learn, Prophet",
      programming_language: "Python, R",
      version: "2.1.3",
      supported_languages: ["English", "French", "German"]
    }
  }
];
