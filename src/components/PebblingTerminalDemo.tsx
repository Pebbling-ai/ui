import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, PlayCircle, CopyCheck, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CommandLine = {
  id: number;
  text: string;
  type: 'command' | 'output' | 'comment';
  delay: number;
};

const PebblingTerminalDemo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleLines, setVisibleLines] = useState<CommandLine[]>([]);
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const demoSequence: CommandLine[] = [
    { id: 1, text: '# Initialize a new Hibiscus project', type: 'comment', delay: 300 },
    { id: 2, text: 'npx create-hibiscus-app my-agent-app', type: 'command', delay: 1000 },
    { id: 3, text: '📦 Installing dependencies...', type: 'output', delay: 1000 },
    { id: 4, text: '✅ Hibiscus project created successfully!', type: 'output', delay: 800 },
    { id: 5, text: 'cd my-agent-app', type: 'command', delay: 500 },
    
    { id: 6, text: '# Install the Pebbling Protocol package', type: 'comment', delay: 800 },
    { id: 7, text: 'npm install @hibiscus/pebbling-protocol', type: 'command', delay: 1000 },
    { id: 8, text: '✅ Added @hibiscus/pebbling-protocol@1.2.0', type: 'output', delay: 800 },
    
    { id: 9, text: '# Create an agent with Pebbling Protocol', type: 'comment', delay: 800 },
    { id: 10, text: 'touch src/agents/dataAnalysisAgent.ts', type: 'command', delay: 500 },
    
    { id: 11, text: '# Open the agent file to implement Pebbling', type: 'comment', delay: 800 },
    { id: 12, text: 'cat > src/agents/dataAnalysisAgent.ts << EOF', type: 'command', delay: 500 },
    { id: 13, text: `import { PebblingProtocol, ContextPebble } from '@hibiscus/pebbling-protocol';

// Initialize the protocol
const protocol = new PebblingProtocol({
  agentId: 'data-analysis-agent',
  capabilities: ['data-processing', 'insight-generation']
});

// Define how this agent processes a context pebble
protocol.onPebble(async (pebble: ContextPebble) => {
  console.log('Received pebble with intent:', pebble.metadata.intent);
  
  // Extract data from the pebble
  const { data } = pebble;
  
  // Process data (simplified for demo)
  const processedData = await analyzeData(data);
  
  // Update the pebble with new insights
  return pebble.extend({
    data: {
      ...data,
      analysis: processedData,
      insights: generateInsights(processedData)
    },
    metadata: {
      ...pebble.metadata,
      processedBy: [...(pebble.metadata.processedBy || []), 'data-analysis-agent']
    }
  });
});

// Register agent in the Hibiscus network
protocol.register();

// Helper functions (implementation details omitted)
async function analyzeData(data) {
  // Data analysis logic here
  return { /* analyzed data */ };
}

function generateInsights(data) {
  // Insight generation logic here
  return [ /* insights */ ];
}

export default protocol;
EOF`, type: 'command', delay: 2500 },
    
    { id: 14, text: '# Create a workflow that uses multiple agents with Pebbling', type: 'comment', delay: 800 },
    { id: 15, text: 'touch src/workflows/dataInsightWorkflow.ts', type: 'command', delay: 500 },
    { id: 16, text: 'cat > src/workflows/dataInsightWorkflow.ts << EOF', type: 'command', delay: 500 },
    { id: 17, text: `import { WorkflowManager } from '@hibiscus/pebbling-protocol';
import dataAnalysisAgent from '../agents/dataAnalysisAgent';
import presentationAgent from '../agents/presentationAgent';
import summaryAgent from '../agents/summaryAgent';

// Initialize a new workflow
const insightWorkflow = new WorkflowManager({
  id: 'data-insight-workflow',
  description: 'Process data and generate insights with visualizations'
});

// Define the workflow steps using Pebbling Protocol
insightWorkflow.defineSequence([
  // First, analyze the data
  {
    agent: dataAnalysisAgent,
    description: 'Analyze raw data and extract patterns'
  },
  // Then, generate visualizations
  {
    agent: presentationAgent,
    description: 'Create visual representations of the analysis',
    condition: (pebble) => pebble.data.analysis !== undefined
  },
  // Finally, create a summary
  {
    agent: summaryAgent,
    description: 'Produce an executive summary of findings',
    condition: (pebble) => pebble.data.visualizations !== undefined
  }
]);

// Execute workflow with initial context pebble
export async function runInsightGeneration(initialData) {
  const initialPebble = {
    data: initialData,
    metadata: {
      intent: 'generate-data-insights',
      source: 'user-request',
      timestamp: Date.now()
    }
  };
  
  // The workflow manager handles passing the pebble through the defined sequence
  const result = await insightWorkflow.execute(initialPebble);
  return result;
}
EOF`, type: 'command', delay: 2500 },
    
    { id: 18, text: '# Use the workflow in an API endpoint', type: 'comment', delay: 800 },
    { id: 19, text: 'cat > src/api/insightGenerator.ts << EOF', type: 'command', delay: 500 },
    { id: 20, text: `import { runInsightGeneration } from '../workflows/dataInsightWorkflow';

export async function generateInsights(req, res) {
  try {
    const { dataset } = req.body;
    
    // Create initial data object
    const initialData = {
      dataset,
      parameters: req.body.parameters || {}
    };
    
    // Run the workflow using Pebbling Protocol
    const results = await runInsightGeneration(initialData);
    
    // Return the completed insights
    res.status(200).json({
      success: true,
      insights: results.data.insights,
      summary: results.data.summary,
      visualizations: results.data.visualizations
    });
    
  } catch (error) {
    console.error('Error in insight generation:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to generate insights'
    });
  }
}
EOF`, type: 'command', delay: 2000 },
    
    { id: 21, text: '# Start the Hibiscus application with Pebbling Protocol', type: 'comment', delay: 800 },
    { id: 22, text: 'npm run dev', type: 'command', delay: 500 },
    { id: 23, text: '🚀 Hibiscus app running at http://localhost:3000', type: 'output', delay: 500 },
    { id: 24, text: '🔄 Pebbling Protocol initialized with 3 registered agents', type: 'output', delay: 500 },
    { id: 25, text: '✅ Agent network ready to process context pebbles', type: 'output', delay: 500 },
  ];

  const resetDemo = () => {
    setCurrentStep(0);
    setVisibleLines([]);
    setIsRunning(false);
  };

  const runDemo = () => {
    if (isRunning) return;
    
    resetDemo();
    setIsRunning(true);
  };

  const copyCode = () => {
    // Collect all command lines that represent actual code
    const codeLines = demoSequence
      .filter(line => line.type === 'command')
      .map(line => line.text)
      .join('\n');
      
    navigator.clipboard.writeText(codeLines);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (currentStep >= demoSequence.length) {
      setIsRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisibleLines(prev => [...prev, demoSequence[currentStep]]);
      setCurrentStep(prev => prev + 1);
      
      // Scroll to bottom of terminal
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, demoSequence[currentStep].delay);

    return () => clearTimeout(timer);
  }, [currentStep, isRunning]);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-slate-700">
      <div className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <TerminalIcon size={16} className="text-green-400" />
          <span className="text-gray-300 text-sm font-medium">pebbling-protocol-demo</span>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={copyCode}
          >
            {copied ? <CopyCheck size={16} /> : <Copy size={16} />}
            <span className="ml-1">{copied ? 'Copied!' : 'Copy'}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm" 
            className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={runDemo}
            disabled={isRunning}
          >
            <PlayCircle size={16} />
            <span className="ml-1">Run Demo</span>
          </Button>
        </div>
      </div>
      <div 
        ref={terminalRef}
        className="bg-gray-900 p-4 h-96 overflow-y-auto font-mono text-sm"
      >
        {visibleLines.length === 0 && !isRunning && (
          <div className="text-gray-500 italic">
            Click "Run Demo" to see how the Pebbling Protocol works with Hibiscus...
          </div>
        )}
        
        {visibleLines.map((line, index) => (
          <div 
            key={line.id} 
            className={cn(
              "mb-1 animate-fade-in",
              line.type === 'comment' && "text-slate-500 italic",
              line.type === 'command' && "text-green-400",
              line.type === 'output' && "text-blue-300"
            )}
          >
            {line.type === 'command' && <span className="text-yellow-500">$ </span>}
            {line.text}
          </div>
        ))}
        
        {isRunning && (
          <div className="inline-block h-4 w-2 bg-green-400 animate-pulse ml-1"></div>
        )}
      </div>
    </div>
  );
};

export default PebblingTerminalDemo;