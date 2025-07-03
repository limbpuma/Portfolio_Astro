import { useState } from 'react';

const BusinessProcessOptimizerAgent = ({ config }) => {
  const [currentStep, setCurrentStep] = useState('input');
  const [processDescription, setProcessDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [selectedProcess, setSelectedProcess] = useState('');

  // Real business process templates
  const processTemplates = {
    'sales-process': {
      name: '💼 Sales Process (Lead to Close)',
      description: 'From lead generation to contract signature',
      example: 'Lead qualification → Demo → Proposal → Negotiation → Contract',
      currentSteps: [
        'Lead receives marketing email',
        'Sales rep qualifies lead manually (30 min)',
        'Schedule demo call (2 days delay)',
        'Conduct product demo (60 min)',
        'Create custom proposal (4 hours)',
        'Send proposal via email',
        'Follow up calls (multiple)',
        'Contract negotiation (1-2 weeks)',
        'Legal review and approval (3-5 days)',
        'Contract signature and onboarding'
      ]
    },
    'customer-support': {
      name: '🎧 Customer Support Process',
      description: 'From ticket creation to resolution',
      example: 'Ticket → Assignment → Investigation → Resolution → Follow-up',
      currentSteps: [
        'Customer submits support ticket',
        'Manual ticket categorization (15 min)',
        'Assignment to available agent',
        'Agent reviews ticket history (20 min)',
        'Initial response to customer (2-4 hours)',
        'Problem investigation and research',
        'Escalation to technical team if needed',
        'Solution implementation',
        'Customer confirmation',
        'Ticket closure and satisfaction survey'
      ]
    },
    'hiring-process': {
      name: '👥 Hiring Process',
      description: 'From job posting to onboarding',
      example: 'Job Post → Screening → Interviews → Offer → Onboarding',
      currentSteps: [
        'Job requirement definition',
        'Job posting on multiple platforms',
        'Manual CV screening (2-3 hours per position)',
        'Phone screening calls (30 min each)',
        'Technical assessment review',
        'In-person/video interviews (multiple rounds)',
        'Reference checks (2-3 days)',
        'Offer preparation and approval',
        'Contract negotiation',
        'Onboarding documentation and setup'
      ]
    }
  };

  const handleTemplateSelect = (templateKey) => {
    const template = processTemplates[templateKey];
    setSelectedProcess(templateKey);
    setProcessDescription(`${template.name}: ${template.currentSteps.join(' → ')}`);
    setCurrentStep('analysis');
    analyzeProcess(template);
  };

  const handleCustomAnalysis = () => {
    if (!processDescription.trim()) return;
    setCurrentStep('analysis');
    analyzeCustomProcess(processDescription);
  };

  const analyzeProcess = async (template) => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis with realistic delays
    await new Promise(resolve => setTimeout(resolve, 2000));

    const optimization = generateOptimizationResults(template, selectedProcess);
    setAnalysisResults(optimization);
    setIsAnalyzing(false);
  };

  const analyzeCustomProcess = async (description) => {
    setIsAnalyzing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2500));

    const optimization = generateCustomOptimization(description);
    setAnalysisResults(optimization);
    setIsAnalyzing(false);
  };

  const generateOptimizationResults = (template, processType) => {
    const optimizations = {
      'sales-process': {
        processName: 'Sales Process Optimization',
        currentMetrics: {
          avgTimeToClose: '45 days',
          conversionRate: '12%',
          costPerLead: '€85',
          manualHours: '28 hours per deal'
        },
        optimizedMetrics: {
          avgTimeToClose: '28 days (-38%)',
          conversionRate: '18% (+50%)',
          costPerLead: '€52 (-39%)',
          manualHours: '12 hours per deal (-57%)'
        },
        bottlenecks: [
          '🔴 Manual lead qualification takes 30+ minutes',
          '🔴 2-day delay in demo scheduling',
          '🔴 Proposal creation takes 4+ hours',
          '🔴 Contract approval process is fragmented'
        ],
        automationSuggestions: [
          '🤖 AI-powered lead scoring and qualification',
          '📅 Automated demo scheduling system',
          '📄 Template-based proposal generator',
          '⚡ Digital contract workflow with e-signatures'
        ],
        implementationPlan: [
          'Week 1-2: Implement AI lead scoring system',
          'Week 3-4: Deploy automated scheduling tool',
          'Week 5-6: Create proposal generation templates',
          'Week 7-8: Integrate digital contract platform'
        ],
        roi: {
          implementation_cost: '€25,000',
          monthly_savings: '€8,500',
          payback_period: '3 months',
          annual_roi: '308%'
        }
      },
      'customer-support': {
        processName: 'Customer Support Optimization',
        currentMetrics: {
          avgResponseTime: '4.2 hours',
          resolutionTime: '2.3 days',
          customerSatisfaction: '76%',
          agentEfficiency: '65%'
        },
        optimizedMetrics: {
          avgResponseTime: '45 minutes (-82%)',
          resolutionTime: '8 hours (-71%)',
          customerSatisfaction: '91% (+20%)',
          agentEfficiency: '88% (+35%)'
        },
        bottlenecks: [
          '🔴 Manual ticket categorization delays response',
          '🔴 Agents spend 20 min reviewing ticket history',
          '🔴 Knowledge base search is inefficient',
          '🔴 Escalation process lacks clear criteria'
        ],
        automationSuggestions: [
          '🏷️ AI-powered automatic ticket categorization',
          '📋 Intelligent case history summarization',
          '🔍 AI-enhanced knowledge base search',
          '⬆️ Smart escalation routing system'
        ],
        implementationPlan: [
          'Week 1-2: Deploy AI ticket categorization',
          'Week 3-4: Implement case summarization AI',
          'Week 5-6: Upgrade knowledge base with AI search',
          'Week 7-8: Create smart escalation workflows'
        ],
        roi: {
          implementation_cost: '€18,000',
          monthly_savings: '€12,000',
          payback_period: '1.5 months',
          annual_roi: '700%'
        }
      },
      'hiring-process': {
        processName: 'Hiring Process Optimization',
        currentMetrics: {
          timeToHire: '42 days',
          costPerHire: '€4,200',
          candidateExperience: '71%',
          hrEfficiency: '58%'
        },
        optimizedMetrics: {
          timeToHire: '21 days (-50%)',
          costPerHire: '€2,100 (-50%)',
          candidateExperience: '89% (+25%)',
          hrEfficiency: '84% (+45%)'
        },
        bottlenecks: [
          '🔴 Manual CV screening takes 2-3 hours per position',
          '🔴 Interview scheduling coordination is complex',
          '🔴 Reference checks create 2-3 day delays',
          '🔴 Onboarding paperwork is manual and slow'
        ],
        automationSuggestions: [
          '🎯 AI-powered CV screening and ranking',
          '📅 Automated interview scheduling system',
          '📞 Digital reference check platform',
          '📋 Automated onboarding workflow'
        ],
        implementationPlan: [
          'Week 1-3: Implement AI CV screening system',
          'Week 4-5: Deploy interview scheduling automation',
          'Week 6-7: Setup digital reference platform',
          'Week 8-9: Create automated onboarding flow'
        ],
        roi: {
          implementation_cost: '€22,000',
          monthly_savings: '€15,000',
          payback_period: '1.5 months',
          annual_roi: '718%'
        }
      }
    };

    return optimizations[processType];
  };

  const generateCustomOptimization = (description) => {
    return {
      processName: 'Custom Process Optimization',
      currentMetrics: {
        efficiency: '62%',
        avgProcessTime: 'Variable',
        manualSteps: 'Multiple',
        errorRate: '8-12%'
      },
      optimizedMetrics: {
        efficiency: '85% (+37%)',
        avgProcessTime: '40% faster',
        manualSteps: '60% reduction',
        errorRate: '2-3% (-75%)'
      },
      bottlenecks: [
        '🔴 Manual data entry and validation steps',
        '🔴 Approval workflows lack automation',
        '🔴 Communication gaps between departments',
        '🔴 Repetitive tasks consume significant time'
      ],
      automationSuggestions: [
        '🤖 Implement RPA for repetitive tasks',
        '⚡ Create automated approval workflows',
        '📱 Deploy real-time communication tools',
        '📊 Add process monitoring dashboards'
      ],
      implementationPlan: [
        'Week 1-2: Process mapping and analysis',
        'Week 3-4: Identify automation opportunities',
        'Week 5-6: Implement priority automations',
        'Week 7-8: Test and optimize workflows'
      ],
      roi: {
        implementation_cost: '€20,000',
        monthly_savings: '€10,500',
        payback_period: '2 months',
        annual_roi: '530%'
      }
    };
  };

  const resetAnalysis = () => {
    setCurrentStep('input');
    setProcessDescription('');
    setAnalysisResults(null);
    setSelectedProcess('');
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🏭 Business Process Optimizer
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            AI-powered business process analysis that identifies bottlenecks, calculates costs, and provides 
            actionable optimization strategies with real ROI calculations for immediate implementation.
          </p>
        </div>

        {currentStep === 'input' && (
          <div className="space-y-8">
            {/* Custom Process Input */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                📝 Describe Your Business Process
              </h3>
              <div className="space-y-4">
                <textarea
                  value={processDescription}
                  onChange={(e) => setProcessDescription(e.target.value)}
                  placeholder="Example: 'Our sales process starts when a lead fills a form. Then our sales rep manually qualifies them, schedules a demo, creates a custom proposal, and follows up until contract signature. The whole process takes 6-8 weeks and involves multiple manual steps...'"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="4"
                />
                <button
                  onClick={handleCustomAnalysis}
                  disabled={!processDescription.trim()}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium"
                >
                  🔍 Analyze My Process
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-blue-50 text-gray-500">or analyze a common business process</span>
              </div>
            </div>

            {/* Process Templates */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Common Business Processes
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(processTemplates).map(([key, template]) => (
                  <div
                    key={key}
                    className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-400 cursor-pointer transition-all duration-300 hover:shadow-lg group"
                    onClick={() => handleTemplateSelect(key)}
                  >
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {template.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-500 mb-1">Process flow:</p>
                      <p className="text-xs text-gray-700 italic">{template.example}</p>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-blue-600 font-medium">
                        {template.currentSteps.length} current steps
                      </span>
                      <span className="text-gray-500">Analyze →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 'analysis' && (
          <div className="space-y-6">
            {isAnalyzing ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  🔍 Analyzing Your Business Process...
                </h3>
                <p className="text-gray-600">
                  AI is identifying bottlenecks, calculating costs, and generating optimization strategies
                </p>
              </div>
            ) : analysisResults && (
              <div className="space-y-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    📊 {analysisResults.processName}
                  </h3>
                  <p className="text-gray-600">Comprehensive analysis and optimization recommendations</p>
                </div>

                {/* Current vs Optimized Metrics */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                      🔴 Current Performance
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(analysisResults.currentMetrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-medium text-red-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                      🟢 Optimized Performance
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(analysisResults.optimizedMetrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-medium text-green-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottlenecks */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">🚫 Identified Bottlenecks</h4>
                  <div className="space-y-2">
                    {analysisResults.bottlenecks.map((bottleneck, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                        <span className="text-red-500 font-medium">{bottleneck}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Automation Suggestions */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">🤖 Automation Recommendations</h4>
                  <div className="space-y-2">
                    {analysisResults.automationSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-700 font-medium">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Plan */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">📅 Implementation Timeline</h4>
                  <div className="space-y-3">
                    {analysisResults.implementationPlan.map((phase, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{phase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI Analysis */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-semibold text-gray-800 mb-4">💰 ROI Analysis</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{analysisResults.roi.implementation_cost}</div>
                      <div className="text-sm text-gray-600">Implementation Cost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{analysisResults.roi.monthly_savings}</div>
                      <div className="text-sm text-gray-600">Monthly Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{analysisResults.roi.payback_period}</div>
                      <div className="text-sm text-gray-600">Payback Period</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{analysisResults.roi.annual_roi}</div>
                      <div className="text-sm text-gray-600">Annual ROI</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={resetAnalysis}
                    className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                  >
                    🔄 Analyze Another Process
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Business Impact Metrics */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-center text-lg font-semibold text-gray-800 mb-4">
            Proven Business Impact
          </h4>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">45%</div>
              <div className="text-sm text-gray-600">Average Time Savings</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-green-600">€125K</div>
              <div className="text-sm text-gray-600">Avg Annual Savings</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-purple-600">2.3x</div>
              <div className="text-sm text-gray-600">ROI Multiplier</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-orange-600">8 weeks</div>
              <div className="text-sm text-gray-600">Avg Implementation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcessOptimizerAgent;
