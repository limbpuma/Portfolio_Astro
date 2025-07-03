import { useState } from 'react';

const WorkflowOrchestratorAgent = ({ config }) => {
  const [currentStep, setCurrentStep] = useState('design');
  const [workflowSteps, setWorkflowSteps] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [executionResults, setExecutionResults] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  // Real-world workflow templates
  const workflowTemplates = {
    'project-planning': {
      name: '📋 AI Project Planning',
      description: 'Intelligent project planning with resource allocation and risk assessment',
      example: 'Launch mobile app in 6 months with €50k budget',
      steps: [
        { id: 1, name: 'Requirements Analysis', type: 'ai-analysis', status: 'pending', duration: '2-3 days' },
        { id: 2, name: 'Time Estimation', type: 'ai-processing', status: 'pending', duration: '1-2 days' },
        { id: 3, name: 'Budget Analysis', type: 'ai-analysis', status: 'pending', duration: '1 day' },
        { id: 4, name: 'Risk Assessment', type: 'ai-analysis', status: 'pending', duration: '2 days' },
        { id: 5, name: 'Resource Planning', type: 'ai-processing', status: 'pending', duration: '1-2 days' },
        { id: 6, name: 'Timeline Generation', type: 'output', status: 'pending', duration: '1 day' }
      ]
    },
    'business-viability': {
      name: '🏪 Business Viability Analysis',
      description: 'Comprehensive market and financial analysis for new ventures',
      example: 'Open a specialty coffee shop in downtown Madrid',
      steps: [
        { id: 1, name: 'Market Research', type: 'ai-analysis', status: 'pending', duration: '3-5 days' },
        { id: 2, name: 'Financial Projections', type: 'ai-processing', status: 'pending', duration: '2-3 days' },
        { id: 3, name: 'Location Analysis', type: 'ai-analysis', status: 'pending', duration: '2 days' },
        { id: 4, name: 'Competition Study', type: 'ai-analysis', status: 'pending', duration: '2-3 days' },
        { id: 5, name: 'Risk Evaluation', type: 'ai-analysis', status: 'pending', duration: '1-2 days' },
        { id: 6, name: 'Final Recommendation', type: 'output', status: 'pending', duration: '1 day' }
      ]
    },
    'team-optimization': {
      name: '👥 Team Performance Optimization',
      description: 'AI-driven analysis and optimization of team productivity',
      example: 'Improve productivity of 15-person development team',
      steps: [
        { id: 1, name: 'Performance Analysis', type: 'ai-analysis', status: 'pending', duration: '2-3 days' },
        { id: 2, name: 'Skill Gap Assessment', type: 'ai-analysis', status: 'pending', duration: '1-2 days' },
        { id: 3, name: 'Training Plan', type: 'ai-processing', status: 'pending', duration: '2 days' },
        { id: 4, name: 'Role Optimization', type: 'ai-processing', status: 'pending', duration: '1-2 days' },
        { id: 5, name: 'KPI Definition', type: 'ai-processing', status: 'pending', duration: '1 day' },
        { id: 6, name: 'Implementation Plan', type: 'output', status: 'pending', duration: '1 day' }
      ]
    }
  };

  const handleTemplateSelect = (templateKey) => {
    setSelectedTemplate(templateKey);
    setWorkflowSteps([...workflowTemplates[templateKey].steps]);
    setCurrentStep('execution');
  };

  const executeWorkflow = async () => {
    setIsProcessing(true);
    setExecutionResults(null);

    try {
      // Simulate workflow execution with delays
      for (let i = 0; i < workflowSteps.length; i++) {
        // Update step status to processing
        setWorkflowSteps(prev => prev.map((step, index) => 
          index === i ? { ...step, status: 'processing' } : step
        ));

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulate success/failure (90% success rate)
        const success = Math.random() > 0.1;
        
        setWorkflowSteps(prev => prev.map((step, index) => 
          index === i ? { 
            ...step, 
            status: success ? 'completed' : 'failed',
            result: success ? generateStepResult(step) : 'Processing failed'
          } : step
        ));

        if (!success) {
          // Handle failure - could implement retry logic
          break;
        }
      }

      // Generate final workflow results
      const results = {
        executionTime: workflowSteps.length * 1.5 + ' seconds',
        successRate: (workflowSteps.filter(s => s.status === 'completed').length / workflowSteps.length * 100).toFixed(1) + '%',
        stepsCompleted: workflowSteps.filter(s => s.status === 'completed').length,
        totalSteps: workflowSteps.length,
        insights: generateWorkflowInsights(selectedTemplate)
      };

      setExecutionResults(results);
      setCurrentStep('results');

    } catch (error) {
      console.error('Workflow execution error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const generateStepResult = (step) => {
    const projectPlanningResults = {
      'Requirements Analysis': 'Identified 12 core features, 8 integrations, and 3 compliance requirements',
      'Time Estimation': 'Development: 4.5 months, Testing: 6 weeks, Deployment: 2 weeks',
      'Budget Analysis': 'Development: €32k, Marketing: €12k, Operations: €6k (Total: €50k)',
      'Risk Assessment': 'Medium risk: API dependencies, Low risk: market competition',
      'Resource Planning': '2 Senior Devs, 1 UI/UX Designer, 1 QA Engineer, 1 Project Manager',
      'Timeline Generation': 'Milestone-based schedule with 8 key deliverables generated'
    };

    const businessViabilityResults = {
      'Market Research': 'Target market: 2.5M potential customers, 15% growth annually',
      'Financial Projections': 'Break-even: Month 18, ROI: 35% by Year 3',
      'Location Analysis': 'High foot traffic area, 8.5/10 accessibility score',
      'Competition Study': '12 direct competitors identified, pricing gap opportunity found',
      'Risk Evaluation': 'Low-medium risk profile, main concern: seasonal demand',
      'Final Recommendation': 'Proceed with 85% confidence score - strong business case'
    };

    const teamOptimizationResults = {
      'Performance Analysis': 'Average productivity: 65%, top performers at 90%',
      'Skill Gap Assessment': 'React expertise needed, DevOps skills gap identified',
      'Training Plan': '3-month upskilling program for 8 team members designed',
      'Role Optimization': 'Recommended 2 role adjustments, 1 new senior position',
      'KPI Definition': '5 key metrics defined: velocity, quality, satisfaction, retention',
      'Implementation Plan': '90-day rollout plan with weekly checkpoints created'
    };

    const allResults = {
      'project-planning': projectPlanningResults,
      'business-viability': businessViabilityResults,
      'team-optimization': teamOptimizationResults
    };

    return allResults[selectedTemplate]?.[step.name] || 'Analysis completed successfully';
  };

  const generateWorkflowInsights = (templateKey) => {
    const insights = {
      'project-planning': [
        '🎯 Project feasibility score: 87% - highly viable within constraints',
        '⏱️ AI reduced planning time from 2 weeks to 3 days (85% time savings)',
        '💰 Budget optimization identified €8k in potential savings',
        '🔍 Risk mitigation strategies for 5 critical project dependencies',
        '📊 Resource utilization optimized to 92% efficiency'
      ],
      'business-viability': [
        '📈 Market opportunity score: 78% - strong potential for success',
        '💡 Identified 3 unique value propositions vs competitors',
        '🎯 Customer acquisition cost 40% lower than industry average',
        '⚡ 6-month faster time-to-market with AI-optimized launch plan',
        '🛡️ Risk-adjusted ROI: 28% with 95% confidence interval'
      ],
      'team-optimization': [
        '🚀 Predicted 35% productivity increase within 90 days',
        '🎓 Skill development plan will reduce hiring needs by 60%',
        '💼 Role optimization prevents 2 potential resignations',
        '📊 Custom KPIs will improve team satisfaction by 25%',
        '⚙️ Automated workflow suggestions save 8 hours/week per developer'
      ]
    };
    return insights[templateKey] || ['Workflow completed successfully with valuable insights generated'];
  };

  const resetWorkflow = () => {
    setCurrentStep('design');
    setWorkflowSteps([]);
    setExecutionResults(null);
    setSelectedTemplate('');
    setIsProcessing(false);
  };

  const getStepIcon = (type, status) => {
    if (status === 'processing') return '�';
    if (status === 'completed') return '✅';
    if (status === 'failed') return '❌';
    
    const icons = {
      'ai-analysis': '🧠',
      'ai-processing': '⚙️',
      'output': '📋'
    };
    
    return icons[type] || '📊';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'processing': return 'text-blue-600';
      case 'failed': return 'text-red-600';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🔄 AI Workflow Orchestrator
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Intelligent business process automation using LangGraph. Transform complex decision-making workflows 
            into automated, data-driven processes with real-time insights and predictive analytics.
          </p>
        </div>

        {currentStep === 'design' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Choose a Workflow Template
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(workflowTemplates).map(([key, template]) => (
                <div
                  key={key}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-purple-400 cursor-pointer transition-all duration-300 hover:shadow-lg group"
                  onClick={() => handleTemplateSelect(key)}
                >
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {template.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-500 mb-1">Example scenario:</p>
                    <p className="text-xs text-gray-700 italic">"{template.example}"</p>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-purple-600 font-medium">
                      {template.steps.length} AI-powered steps
                    </span>
                    <span className="text-gray-500">Click to start →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 'execution' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {workflowTemplates[selectedTemplate]?.name}
              </h3>
              <button
                onClick={executeWorkflow}
                disabled={isProcessing}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isProcessing ? '🔄 Executing...' : '🚀 Execute Workflow'}
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-4">Workflow Steps</h4>
              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 ${
                      step.status === 'processing' ? 'border-blue-300 bg-blue-50' :
                      step.status === 'completed' ? 'border-green-300 bg-green-50' :
                      step.status === 'failed' ? 'border-red-300 bg-red-50' :
                      'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">
                        {getStepIcon(step.type, step.status)}
                      </span>
                      <div>
                        <div className="font-medium text-gray-800">{step.name}</div>
                        <div className="text-xs text-gray-500 mb-1">Duration: {step.duration}</div>
                        {step.result && (
                          <div className="text-sm text-gray-600 mt-1 bg-gray-50 rounded p-2">{step.result}</div>
                        )}
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${getStatusColor(step.status)}`}>
                      {step.status.charAt(0).toUpperCase() + step.status.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 'results' && executionResults && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                ✅ Workflow Execution Complete
              </h3>
              <p className="text-gray-600">Your workflow has been processed successfully</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">📊 Execution Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Execution Time:</span>
                    <span className="font-medium">{executionResults.executionTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-medium text-green-600">{executionResults.successRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Steps Completed:</span>
                    <span className="font-medium">{executionResults.stepsCompleted}/{executionResults.totalSteps}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">💡 Key Insights</h4>
                <div className="space-y-2">
                  {executionResults.insights.map((insight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-sm text-gray-600">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={resetWorkflow}
                className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
              >
                🔄 Try Another Workflow
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-center text-lg font-semibold text-gray-800 mb-4">
            Business Impact Metrics
          </h4>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-purple-600">87%</div>
              <div className="text-sm text-gray-600">Planning Accuracy</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">75%</div>
              <div className="text-sm text-gray-600">Time Reduction</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-green-600">€180K</div>
              <div className="text-sm text-gray-600">Annual ROI</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-orange-600">94%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowOrchestratorAgent;
