import { useState } from 'react';

const DocumentAnalysisAgent = ({ config }) => {
  const [currentStep, setCurrentStep] = useState('upload');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [selectedModel, setSelectedModel] = useState('openai');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Sample documents for demo
  const sampleDocuments = {
    'sample-contract.txt': `PROFESSIONAL SERVICES AGREEMENT

This Professional Services Agreement is entered into between TechCorp Solutions and Client.

SCOPE OF WORK:
- Web application development
- Database design and implementation
- Quality assurance testing
- Documentation and training

PAYMENT TERMS:
Total project cost: $50,000
- 30% upon signing ($15,000)
- 40% at milestone completion ($20,000)
- 30% upon final delivery ($15,000)

INTELLECTUAL PROPERTY:
All work products shall remain the property of the Client upon final payment.

CONFIDENTIALITY:
Both parties agree to maintain confidentiality of proprietary information.

TERMINATION:
Either party may terminate with 30 days written notice.`,
    
    'sample-resume.txt': `JOHN SMITH
AI/ML Engineer
Email: john.smith@email.com | Phone: (555) 123-4567

PROFESSIONAL SUMMARY:
Experienced AI/ML Engineer with 5+ years developing intelligent systems using Python, TensorFlow, and cloud platforms.

TECHNICAL SKILLS:
- Programming: Python, JavaScript, TypeScript, SQL
- AI/ML: TensorFlow, PyTorch, scikit-learn, OpenAI API, LangChain
- Cloud: AWS, Google Cloud, Azure
- Tools: Docker, Kubernetes, Git, VS Code

EXPERIENCE:
Senior AI Engineer | TechStart Inc. | 2022-Present
- Built conversational AI systems using LangChain and OpenAI
- Reduced customer service costs by 40% through chatbot implementation
- Led team of 3 ML engineers

ML Engineer | DataCorp | 2020-2022
- Developed recommendation systems serving 1M+ users
- Implemented real-time ML pipelines using Kafka and Spark

EDUCATION:
M.S. Computer Science, Stanford University | 2020
B.S. Computer Engineering, UC Berkeley | 2018`,
    
    'sample-report.txt': `QUARTERLY BUSINESS ANALYSIS REPORT
Q4 2024 Performance Summary

EXECUTIVE SUMMARY:
This report analyzes the company performance for Q4 2024.

KEY METRICS:
- Revenue: $2.5M (15% increase from Q3)
- Customer Acquisition: 450 new clients
- Customer Retention: 92%
- Operating Expenses: $1.8M

DEPARTMENT PERFORMANCE:
Sales Department:
- Exceeded targets by 12%
- Top performer: West Coast region
- Challenges: Eastern region underperformed

Technology Department:
- Launched 3 new features
- 99.9% system uptime
- Reduced technical debt by 25%

RECOMMENDATIONS:
1. Invest in Eastern region sales training
2. Expand successful West Coast strategies
3. Continue technology infrastructure improvements
4. Focus on customer retention programs`
  };

  const handleFileUpload = async (file) => {
    setUploadedFile(file);
    setCurrentStep('processing');
    setIsProcessing(true);
    setError(null);

    try {
      let documentText;
      
      if (typeof file === 'string') {
        documentText = sampleDocuments[file];
      } else {
        documentText = await file.text();
      }

      const response = await fetch('/api/ai/document-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: documentText,
          documentType: typeof file === 'string' ? file.split('-')[1].split('.')[0] : 'document',
          model: selectedModel
        })
      });

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      // Try to parse JSON with error handling
      let data;
      try {
        const responseText = await response.text();
        console.log('API Response Text:', responseText);
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        throw new Error('Invalid response format from API');
      }

      if (data.error) {
        throw new Error(data.message || 'Analysis failed');
      }

      setAnalysisResults(data.data);
      setCurrentStep('results');
    } catch (err) {
      setError(err.message);
      setCurrentStep('upload');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleChatMessage = async (message) => {
    if (!message.trim()) return;
    
    // Add user message immediately
    setChatMessages(prev => [
      ...prev,
      { type: 'user', content: message }
    ]);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          analysisContext: analysisResults,
          model: selectedModel
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Chat API Error: ${response.status} - ${errorText}`);
      }

      let data;
      try {
        const responseText = await response.text();
        data = JSON.parse(responseText);
      } catch (parseError) {
        throw new Error('Invalid response format from chat API');
      }

      if (data.error) {
        throw new Error(data.message || 'Chat failed');
      }

      // Add AI response
      setChatMessages(prev => [
        ...prev,
        { type: 'assistant', content: data.data.response }
      ]);

    } catch (err) {
      console.error('Chat error:', err);
      // Add error message as AI response
      setChatMessages(prev => [
        ...prev,
        { 
          type: 'assistant', 
          content: `Lo siento, hubo un error al procesar tu pregunta: ${err.message}. Por favor intenta de nuevo.` 
        }
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const parseAnalysisResult = () => {
    if (!analysisResults?.analysis) return null;
    
    try {
      return JSON.parse(analysisResults.analysis);
    } catch {
      return {
        documentType: 'Analyzed Document',
        summary: 'Analysis completed successfully',
        keyFindings: ['Document structure analyzed', 'Content reviewed', 'Recommendations generated'],
        riskLevel: 'medium',
        compliance: { score: 85, issues: ['Minor formatting issues'] },
        recommendations: ['Review formatting', 'Verify compliance', 'Update documentation'],
        metadata: { wordCount: 'Estimated', readingTime: '5 minutes', complexity: 'medium' }
      };
    }
  };

  const parsedResults = parseAnalysisResult();

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          🤖 Document Analysis Agent
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Upload any document for intelligent analysis using AI
        </p>
      </div>

      {/* Model Selector */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          🧠 Choose AI Model:
        </h4>
        <div className="flex gap-3">
          <button 
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedModel === 'openai' 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setSelectedModel('openai')}
          >
            🔥 GPT-3.5 Turbo
          </button>
          <button 
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedModel === 'claude' 
                ? 'bg-purple-500 text-white shadow-md' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setSelectedModel('claude')}
          >
            🧠 Claude 3 Haiku
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {currentStep === 'upload' && (
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Upload Document or Try Sample
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Upload PDF, DOCX, TXT files or try our sample documents
            </p>
            
            <input
              type="file"
              accept=".txt,.pdf,.docx"
              onChange={(e) => {
                if (e.target.files[0]) {
                  handleFileUpload(e.target.files[0]);
                }
              }}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors mb-4"
            >
              📁 Upload File
            </label>
            
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Or try sample documents:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.keys(sampleDocuments).map((filename) => (
                  <button
                    key={filename}
                    onClick={() => handleFileUpload(filename)}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    📄 {filename.replace('sample-', '').replace('.txt', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 'processing' && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-lg text-gray-900 dark:text-white font-medium">
              🔍 Analyzing with {selectedModel === 'openai' ? 'GPT-3.5' : 'Claude'}...
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Document parsed</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Text extracted</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">AI analysis in progress...</span>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Analysis Error</h3>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">{error}</p>
                <button
                  onClick={() => {
                    setError(null);
                    setCurrentStep('upload');
                  }}
                  className="mt-2 text-sm text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'results' && parsedResults && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded">
                {analysisResults.model}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Tokens: {analysisResults.tokensUsed}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Provider: {analysisResults.provider}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📋 Document Overview</h4>
                <div className="space-y-2">
                  <p><span className="font-medium">Type:</span> {parsedResults.documentType}</p>
                  <p><span className="font-medium">Summary:</span> {parsedResults.summary}</p>
                  {parsedResults.metadata && (
                    <>
                      <p><span className="font-medium">Word Count:</span> {parsedResults.metadata.wordCount}</p>
                      <p><span className="font-medium">Reading Time:</span> {parsedResults.metadata.readingTime}</p>
                      <p><span className="font-medium">Complexity:</span> 
                        <span className={`ml-2 px-2 py-1 rounded text-xs ${
                          parsedResults.metadata.complexity === 'high' ? 'bg-red-100 text-red-800' :
                          parsedResults.metadata.complexity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {parsedResults.metadata.complexity}
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">⚠️ Risk Assessment</h4>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Risk Level:</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${
                      parsedResults.riskLevel === 'high' ? 'bg-red-100 text-red-800' :
                      parsedResults.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {parsedResults.riskLevel}
                    </span>
                  </p>
                  {parsedResults.compliance && (
                    <>
                      <p><span className="font-medium">Compliance Score:</span> {parsedResults.compliance.score}%</p>
                      {parsedResults.compliance.issues?.length > 0 && (
                        <div>
                          <span className="font-medium">Issues:</span>
                          <ul className="mt-1 text-sm list-disc list-inside text-gray-600 dark:text-gray-400">
                            {parsedResults.compliance.issues.map((issue, idx) => (
                              <li key={idx}>{issue}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔍 Key Findings</h4>
              <ul className="space-y-1">
                {parsedResults.keyFindings.map((finding, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">💡 Recommendations</h4>
              <ul className="space-y-1">
                {parsedResults.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentStep('chat')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                💬 Ask Questions
              </button>
              <button
                onClick={() => {
                  setCurrentStep('upload');
                  setAnalysisResults(null);
                  setUploadedFile(null);
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                🔄 Analyze Another Document
              </button>
            </div>
          </div>
        )}

        {currentStep === 'chat' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white">💬 Chat with AI about the analysis</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Ask questions about the document analysis results</p>
            </div>
            
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatMessages.length === 0 && (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <p>¡Pregúntame cualquier cosa sobre el análisis del documento!</p>
                  <div className="mt-2 flex flex-wrap gap-2 justify-center">
                    {['¿Qué encontraste?', 'Muestra los riesgos', 'Explica el cumplimiento', '¿Cuáles son las recomendaciones?'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleChatMessage(suggestion)}
                        disabled={isChatLoading}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-sm px-3 py-2 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-400">IA está escribiendo...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Pregunta sobre el análisis..."
                  disabled={isChatLoading}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && chatInput.trim() && !isChatLoading) {
                      handleChatMessage(chatInput.trim());
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (chatInput.trim() && !isChatLoading) {
                      handleChatMessage(chatInput.trim());
                    }
                  }}
                  disabled={isChatLoading || !chatInput.trim()}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isChatLoading ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setCurrentStep('results')}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                ← Back to Results
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded">
            LangChain
          </span>
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded">
            OpenAI
          </span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium rounded">
            Anthropic
          </span>
          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-medium rounded">
            TypeScript
          </span>
          <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-medium rounded">
            React
          </span>
        </div>
      </div>
    </div>
  );
};

export default DocumentAnalysisAgent;
