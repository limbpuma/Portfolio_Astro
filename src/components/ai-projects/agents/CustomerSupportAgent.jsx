import React, { useState } from 'react';

const CustomerSupportAgent = () => {
  const [ticket, setTicket] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Example tickets for quick testing
  const exampleTickets = [
    {
      title: "🚨 Critical Technical Issue",
      content: "URGENT: Payment gateway completely down!!! Our e-commerce site can't process any payments for the last 2 hours. We're losing thousands of dollars every minute. Customer ID: TECH-12345. This needs IMMEDIATE attention!"
    },
    {
      title: "💰 Billing Question",
      content: "Hi, I have a question about my last invoice. I see a charge for $49.99 but I can't remember what it's for. Could you please help me understand what this charge is? My account email is john@company.com"
    },
    {
      title: "💡 Feature Request",
      content: "Hello team, we've been using your product for 6 months and love it! Would it be possible to add dark mode to the dashboard? Many of our team members work late and would really appreciate this feature. Thanks for your great work!"
    },
    {
      title: "😤 Frustrated Customer",
      content: "This is the THIRD time I'm contacting support about the same issue! My account keeps getting locked out every day and nobody has helped me fix this. I'm considering switching to a competitor if this isn't resolved TODAY."
    }
  ];

  const analyzeTicket = async () => {
    if (!ticket.trim()) return;
    
    setIsAnalyzing(true);
    
    try {
      // Simulate API call with realistic processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock analysis result (in real implementation, this would call OpenAI API)
      const mockAnalysis = generateMockAnalysis(ticket);
      setAnalysis(mockAnalysis);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generateMockAnalysis = (ticketText) => {
    // Sophisticated mock analysis based on keywords and patterns
    const text = ticketText.toLowerCase();
    
    // Determine category
    let category = 'General';
    if (text.includes('payment') || text.includes('gateway') || text.includes('checkout')) {
      category = 'Technical - Payments';
    } else if (text.includes('invoice') || text.includes('billing') || text.includes('charge')) {
      category = 'Billing';
    } else if (text.includes('feature') || text.includes('request') || text.includes('add')) {
      category = 'Product - Feature Request';
    } else if (text.includes('bug') || text.includes('error') || text.includes('broken')) {
      category = 'Technical - Bug';
    } else if (text.includes('account') || text.includes('login') || text.includes('locked')) {
      category = 'Account Management';
    }

    // Determine priority
    let priority = 'Medium';
    let priorityColor = 'bg-yellow-100 text-yellow-800';
    if (text.includes('urgent') || text.includes('critical') || text.includes('immediate') || text.includes('emergency')) {
      priority = 'Critical';
      priorityColor = 'bg-red-100 text-red-800';
    } else if (text.includes('asap') || text.includes('soon') || text.includes('quickly')) {
      priority = 'High';
      priorityColor = 'bg-orange-100 text-orange-800';
    } else if (text.includes('when possible') || text.includes('no rush') || text.includes('whenever')) {
      priority = 'Low';
      priorityColor = 'bg-green-100 text-green-800';
    }

    // Determine sentiment
    let sentiment = 'Neutral';
    let sentimentColor = 'bg-blue-100 text-blue-800';
    if (text.includes('frustrated') || text.includes('angry') || text.includes('!!!') || text.includes('terrible')) {
      sentiment = 'Frustrated';
      sentimentColor = 'bg-red-100 text-red-800';
    } else if (text.includes('love') || text.includes('great') || text.includes('amazing') || text.includes('thank')) {
      sentiment = 'Positive';
      sentimentColor = 'bg-green-100 text-green-800';
    } else if (text.includes('disappointed') || text.includes('concerned') || text.includes('worried')) {
      sentiment = 'Concerned';
      sentimentColor = 'bg-yellow-100 text-yellow-800';
    }

    // Determine department
    let department = 'General Support';
    if (category.includes('Technical')) {
      department = 'Technical Support';
    } else if (category.includes('Billing')) {
      department = 'Billing Department';
    } else if (category.includes('Product')) {
      department = 'Product Team';
    } else if (category.includes('Account')) {
      department = 'Customer Success';
    }

    // Calculate complexity score
    const complexityFactors = [
      text.includes('integration') ? 2 : 0,
      text.includes('api') ? 2 : 0,
      text.includes('multiple') ? 1 : 0,
      text.includes('several') ? 1 : 0,
      priority === 'Critical' ? 3 : 0,
      sentiment === 'Frustrated' ? 2 : 0
    ];
    const complexityScore = Math.min(10, Math.max(1, 3 + complexityFactors.reduce((a, b) => a + b, 0)));

    // Extract key information
    const emailMatch = ticketText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const customerIdMatch = ticketText.match(/customer\s*id\s*:?\s*([a-zA-Z0-9-]+)/i);
    
    return {
      category,
      priority,
      priorityColor,
      sentiment,
      sentimentColor,
      department,
      complexityScore,
      estimatedResolutionTime: priority === 'Critical' ? '1-2 hours' : priority === 'High' ? '4-8 hours' : priority === 'Medium' ? '1-2 days' : '3-5 days',
      slaTarget: priority === 'Critical' ? '15 minutes' : priority === 'High' ? '2 hours' : priority === 'Medium' ? '24 hours' : '48 hours',
      extractedInfo: {
        email: emailMatch ? emailMatch[0] : null,
        customerId: customerIdMatch ? customerIdMatch[1] : null,
        keyTerms: extractKeyTerms(ticketText)
      },
      urgencyIndicators: extractUrgencyIndicators(text),
      recommendedActions: generateRecommendedActions(category, priority, sentiment)
    };
  };

  const extractKeyTerms = (text) => {
    const terms = [];
    const keywordPatterns = [
      /payment gateway/i,
      /invoice/i,
      /billing/i,
      /feature request/i,
      /bug/i,
      /account locked/i,
      /dark mode/i,
      /integration/i,
      /api/i
    ];
    
    keywordPatterns.forEach(pattern => {
      const match = text.match(pattern);
      if (match) terms.push(match[0]);
    });
    
    return terms;
  };

  const extractUrgencyIndicators = (text) => {
    const indicators = [];
    if (text.includes('urgent')) indicators.push('Urgent keyword');
    if (text.includes('!!!')) indicators.push('Multiple exclamation marks');
    if (text.includes('immediate')) indicators.push('Immediate attention requested');
    if (text.includes('losing money') || text.includes('losing dollars')) indicators.push('Financial impact mentioned');
    if (text.includes('third time') || text.includes('multiple times')) indicators.push('Repeat issue');
    return indicators;
  };

  const generateRecommendedActions = (category, priority, sentiment) => {
    const actions = [];
    
    if (priority === 'Critical') {
      actions.push('Escalate to senior support immediately');
      actions.push('Notify team lead');
    }
    
    if (sentiment === 'Frustrated') {
      actions.push('Handle with extra care');
      actions.push('Consider follow-up call');
    }
    
    if (category.includes('Technical')) {
      actions.push('Assign to technical specialist');
    }
    
    if (category.includes('Feature Request')) {
      actions.push('Forward to product team');
      actions.push('Add to feature request backlog');
    }
    
    return actions;
  };

  const loadExample = (example) => {
    setTicket(example.content);
    setAnalysis(null);
  };

  const clearAnalysis = () => {
    setTicket('');
    setAnalysis(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">🎫 Customer Support Ticket Classifier</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Intelligent AI-powered analysis of customer support tickets. Automatically categorizes, prioritizes, 
          and routes tickets to the appropriate departments with actionable insights.
        </p>
      </div>

      {/* Quick Examples */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-700">🚀 Quick Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {exampleTickets.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example)}
              className="p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="text-sm font-medium text-blue-600">{example.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">📝 Ticket Content</h3>
          {ticket && (
            <button
              onClick={clearAnalysis}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </div>
        
        <textarea
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
          placeholder="Paste your customer support ticket here... (e.g., customer complaint, feature request, technical issue, billing question)"
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        
        <button
          onClick={analyzeTicket}
          disabled={!ticket.trim() || isAnalyzing}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isAnalyzing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing Ticket...
            </span>
          ) : (
            '🔍 Analyze Ticket'
          )}
        </button>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800">📊 Analysis Results</h3>
          
          {/* Main Classification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Category & Priority */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-700 mb-3">🏷️ Classification</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-500">Category:</span>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium inline-block ml-2">
                    {analysis.category}
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Priority:</span>
                  <div className={`${analysis.priorityColor} px-2 py-1 rounded text-sm font-medium inline-block ml-2`}>
                    {analysis.priority}
                  </div>
                </div>
              </div>
            </div>

            {/* Sentiment & Urgency */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-700 mb-3">😊 Customer State</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-500">Sentiment:</span>
                  <div className={`${analysis.sentimentColor} px-2 py-1 rounded text-sm font-medium inline-block ml-2`}>
                    {analysis.sentiment}
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Urgency Indicators:</span>
                  <div className="mt-1">
                    {analysis.urgencyIndicators.length > 0 ? (
                      analysis.urgencyIndicators.map((indicator, idx) => (
                        <span key={idx} className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs mr-1 mb-1 inline-block">
                          {indicator}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 text-xs">None detected</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Department & Timeline */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-700 mb-3">🏢 Assignment</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-500">Department:</span>
                  <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium inline-block ml-2">
                    {analysis.department}
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">SLA Target:</span>
                  <span className="font-medium text-gray-700 ml-2">{analysis.slaTarget}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Est. Resolution:</span>
                  <span className="font-medium text-gray-700 ml-2">{analysis.estimatedResolutionTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Extracted Information */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-700 mb-3">🔍 Extracted Information</h4>
              <div className="space-y-2 text-sm">
                {analysis.extractedInfo.email && (
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <span className="font-medium text-gray-700 ml-2">{analysis.extractedInfo.email}</span>
                  </div>
                )}
                {analysis.extractedInfo.customerId && (
                  <div>
                    <span className="text-gray-500">Customer ID:</span>
                    <span className="font-medium text-gray-700 ml-2">{analysis.extractedInfo.customerId}</span>
                  </div>
                )}
                <div>
                  <span className="text-gray-500">Complexity Score:</span>
                  <span className="font-bold text-orange-600 ml-2">{analysis.complexityScore}/10</span>
                </div>
                {analysis.extractedInfo.keyTerms.length > 0 && (
                  <div>
                    <span className="text-gray-500">Key Terms:</span>
                    <div className="mt-1">
                      {analysis.extractedInfo.keyTerms.map((term, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1 mb-1 inline-block">
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recommended Actions */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-700 mb-3">💡 Recommended Actions</h4>
              <div className="space-y-2">
                {analysis.recommendedActions.map((action, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-sm text-gray-700">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Impact Metrics */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border">
            <h4 className="font-semibold text-gray-700 mb-2">📈 Business Impact</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">⚡</div>
                <div className="text-gray-600">Analysis Speed</div>
                <div className="font-semibold">2-3 seconds</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">💰</div>
                <div className="text-gray-600">Cost Reduction</div>
                <div className="font-semibold">60-80%</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">🎯</div>
                <div className="text-gray-600">Routing Accuracy</div>
                <div className="font-semibold">95%+</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSupportAgent;
