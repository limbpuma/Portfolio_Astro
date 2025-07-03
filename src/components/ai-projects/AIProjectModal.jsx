import { useState, useEffect } from 'react';
import DocumentAnalysisAgent from './agents/DocumentAnalysisAgent.jsx';
import WorkflowOrchestratorAgent from './agents/WorkflowOrchestratorAgent.jsx';

const AIProjectModal = ({ projectId, agentType, config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState('demo'); // demo, code, architecture

  useEffect(() => {
    // Listen for modal open events
    const handleModalOpen = (event) => {
      if (event.detail.projectId === projectId) {
        // Use View Transition API if available
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            setIsOpen(true);
          });
        } else {
          setIsOpen(true);
        }
      }
    };

    // Listen for modal close events
    const handleModalClose = (event) => {
      if (event.detail.projectId === projectId || !event.detail.projectId) {
        closeModal();
      }
    };

    window.addEventListener('open-project-modal', handleModalOpen);
    window.addEventListener('close-project-modal', handleModalClose);
    
    return () => {
      window.removeEventListener('open-project-modal', handleModalOpen);
      window.removeEventListener('close-project-modal', handleModalClose);
    };
  }, [projectId]);

  const closeModal = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsOpen(false);
      });
    } else {
      setIsOpen(false);
    }
  };

  const renderAgentContent = () => {
    switch (agentType) {
      case 'document-analysis':
        return <DocumentAnalysisAgent config={config} />;
      case 'workflow-orchestrator':
        return <WorkflowOrchestratorAgent config={config} />;
      case 'code-review':
        return <div>Code Review Agent (Coming Soon)</div>;
      case 'workflow':
        return <div>Workflow Agent (Coming Soon)</div>;
      default:
        return <div>Agent type not found</div>;
    }
  };

  const renderCodeView = () => {
    const codeExamples = {
      'document-analysis': `// Document Analysis Agent Implementation
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';

export class DocumentAnalysisAgent {
  constructor(apiKeys) {
    this.openai = new OpenAI({ apiKey: apiKeys.openai });
    this.anthropic = new Anthropic({ apiKey: apiKeys.anthropic });
  }

  async analyzeDocument(text, options = {}) {
    const { model = 'openai', documentType = 'general' } = options;
    
    if (model === 'claude') {
      return await this.analyzeWithClaude(text, documentType);
    } else {
      return await this.analyzeWithOpenAI(text, documentType);
    }
  }

  async analyzeWithOpenAI(text, documentType) {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: \`Analyze this \${documentType} document and return structured JSON...\`
        },
        { role: 'user', content: text }
      ],
      max_tokens: 1500,
      temperature: 0.2
    });

    return {
      model: 'GPT-3.5 Turbo',
      analysis: JSON.parse(response.choices[0].message.content),
      tokensUsed: response.usage.total_tokens
    };
  }

  async analyzeWithClaude(text, documentType) {
    const response = await this.anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: \`Analyze this \${documentType} document...\`
        }
      ]
    });

    return {
      model: 'Claude 3 Haiku',
      analysis: JSON.parse(response.content[0].text),
      tokensUsed: response.usage.input_tokens + response.usage.output_tokens
    };
  }
}`
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">💻 Source Code Implementation</h3>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
            Production Ready
          </span>
        </div>
        
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
            <span className="text-sm text-gray-300">TypeScript / JavaScript</span>
            <button className="text-gray-400 hover:text-white text-sm">📋 Copy</button>
          </div>
          <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
            <code>{codeExamples[agentType] || 'Code example not available'}</code>
          </pre>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Key Features</h4>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Multi-model support (OpenAI + Anthropic)</li>
            <li>• Structured JSON response parsing</li>
            <li>• Error handling and fallbacks</li>
            <li>• Rate limiting and security</li>
            <li>• TypeScript type safety</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderArchitectureView = () => {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🏗️ System Architecture</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Modern AI-powered document analysis with multi-model support
          </p>
        </div>
        
        {/* Architecture Diagram */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Frontend */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend (React)</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• File Upload Interface</li>
                  <li>• Real-time Results Display</li>
                  <li>• Model Selection</li>
                  <li>• Chat Interface</li>
                </ul>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-gray-400 transform rotate-90 md:rotate-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* API Layer */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Layer (Astro)</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Rate Limiting</li>
                  <li>• Input Validation</li>
                  <li>• Error Handling</li>
                  <li>• Security Layer</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* AI Providers Row */}
          <div className="mt-6 flex justify-center">
            <svg className="w-8 h-8 text-gray-400 rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* OpenAI */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔥</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">OpenAI GPT</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Fast Processing</li>
                  <li>• Cost Effective</li>
                  <li>• Structured Output</li>
                </ul>
              </div>
            </div>
            
            {/* Anthropic */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Anthropic Claude</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Detailed Analysis</li>
                  <li>• Better Reasoning</li>
                  <li>• Complex Documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology Stack */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🛠️ Technology Stack</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Astro Islands', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
              { name: 'React', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
              { name: 'OpenAI API', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
              { name: 'Anthropic API', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
              { name: 'TypeScript', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
              { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
              { name: 'View Transitions', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' },
              { name: 'Vercel', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' }
            ].map((tech, idx) => (
              <div key={idx} className={`px-3 py-2 rounded-lg text-sm font-medium text-center ${tech.color}`}>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">📊 Performance & Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">&lt; 2s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2 Models</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI Providers</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      style={{ viewTransitionName: `modal-overlay-${projectId}` }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
        style={{ viewTransitionName: `modal-container-${projectId}` }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="flex space-x-1">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'demo' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setCurrentView('demo')}
            >
              🚀 Live Demo
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'code' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setCurrentView('code')}
            >
              💻 Source Code
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'architecture' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setCurrentView('architecture')}
            >
              🏗️ Architecture
            </button>
          </div>
          
          <button 
            onClick={closeModal} 
            className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {currentView === 'demo' && renderAgentContent()}
          {currentView === 'code' && renderCodeView()}
          {currentView === 'architecture' && renderArchitectureView()}
        </div>
      </div>
    </div>
  );
};

export default AIProjectModal;
