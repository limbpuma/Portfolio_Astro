import { useState, useEffect } from 'react';

const MultiAgentCrewAgent = ({ config }) => {
  const [currentPhase, setCurrentPhase] = useState('setup');
  const [selectedProject, setSelectedProject] = useState('');
  const [agents, setAgents] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLog, setExecutionLog] = useState([]);
  const [finalResult, setFinalResult] = useState(null);

  // Define crew projects
  const crewProjects = {
    'market-research': {
      name: 'Market Research Report',
      description: 'Comprehensive market analysis with competitive intelligence',
      timeline: '5-7 minutes',
      agents: [
        {
          id: 'researcher',
          name: 'Research Specialist',
          role: 'Data Collection & Analysis',
          avatar: '🔍',
          skills: ['Web Scraping', 'Data Analysis', 'Trend Identification'],
          status: 'ready'
        },
        {
          id: 'analyst',
          name: 'Market Analyst',
          role: 'Strategic Analysis',
          avatar: '📊',
          skills: ['Competitive Analysis', 'SWOT Analysis', 'Market Sizing'],
          status: 'ready'
        },
        {
          id: 'writer',
          name: 'Report Writer',
          role: 'Content Creation',
          avatar: '✍️',
          skills: ['Business Writing', 'Data Visualization', 'Executive Summaries'],
          status: 'ready'
        }
      ]
    },
    'content-strategy': {
      name: 'Content Marketing Strategy',
      description: 'AI-powered content strategy with SEO optimization',
      timeline: '4-6 minutes',
      agents: [
        {
          id: 'strategist',
          name: 'Content Strategist',
          role: 'Strategy Development',
          avatar: '🎯',
          skills: ['Content Planning', 'Audience Analysis', 'Channel Strategy'],
          status: 'ready'
        },
        {
          id: 'seo-specialist',
          name: 'SEO Expert',
          role: 'Search Optimization',
          avatar: '🔍',
          skills: ['Keyword Research', 'Technical SEO', 'Content Optimization'],
          status: 'ready'
        },
        {
          id: 'creator',
          name: 'Content Creator',
          role: 'Content Production',
          avatar: '🎨',
          skills: ['Copywriting', 'Visual Content', 'Social Media'],
          status: 'ready'
        }
      ]
    },
    'product-launch': {
      name: 'Product Launch Campaign',
      description: 'Complete product launch strategy and execution plan',
      timeline: '6-8 minutes',
      agents: [
        {
          id: 'manager',
          name: 'Launch Manager',
          role: 'Project Coordination',
          avatar: '🚀',
          skills: ['Project Management', 'Timeline Planning', 'Risk Assessment'],
          status: 'ready'
        },
        {
          id: 'marketer',
          name: 'Marketing Specialist',
          role: 'Campaign Development',
          avatar: '📢',
          skills: ['Campaign Strategy', 'Channel Selection', 'Budget Planning'],
          status: 'ready'
        },
        {
          id: 'designer',
          name: 'Creative Designer',
          role: 'Visual Assets',
          avatar: '🎨',
          skills: ['Brand Design', 'Campaign Visuals', 'UI/UX Design'],
          status: 'ready'
        }
      ]
    }
  };

  const handleProjectSelect = (projectKey) => {
    setSelectedProject(projectKey);
    setAgents([...crewProjects[projectKey].agents]);
    setCurrentPhase('execution');
  };

  const executeCrewWorkflow = async () => {
    setIsExecuting(true);
    setExecutionLog([]);
    setFinalResult(null);

    const project = crewProjects[selectedProject];
    const agentWorkflow = generateAgentWorkflow(selectedProject);

    try {
      for (let i = 0; i < agentWorkflow.length; i++) {
        const task = agentWorkflow[i];
        
        // Update agent status
        setAgents(prev => prev.map(agent => 
          agent.id === task.agentId 
            ? { ...agent, status: 'working' }
            : agent
        ));

        // Add task to execution log
        setExecutionLog(prev => [...prev, {
          id: i,
          timestamp: new Date().toLocaleTimeString(),
          agent: task.agent,
          action: task.action,
          status: 'in-progress',
          details: task.details
        }]);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, task.duration));

        // Update log with completion
        setExecutionLog(prev => prev.map(log => 
          log.id === i 
            ? { ...log, status: 'completed', result: task.result }
            : log
        ));

        // Update agent status
        setAgents(prev => prev.map(agent => 
          agent.id === task.agentId 
            ? { ...agent, status: 'completed' }
            : agent
        ));
      }

      // Generate final result
      const result = generateFinalResult(selectedProject);
      setFinalResult(result);
      setCurrentPhase('results');

    } catch (error) {
      console.error('Crew execution error:', error);
    } finally {
      setIsExecuting(false);
    }
  };

  const generateAgentWorkflow = (projectKey) => {
    const workflows = {
      'market-research': [
        {
          agentId: 'researcher',
          agent: 'Research Specialist',
          action: 'Collecting market data and competitor information',
          details: 'Analyzing 50+ data sources, competitor websites, and industry reports',
          duration: 2000,
          result: 'Collected data from 47 sources, identified 12 key competitors'
        },
        {
          agentId: 'analyst',
          agent: 'Market Analyst',
          action: 'Performing strategic analysis and market sizing',
          details: 'Calculating TAM, SAM, SOM and conducting SWOT analysis',
          duration: 2500,
          result: 'Market size: $2.4B TAM, Growth rate: 15% CAGR, 3 key opportunities identified'
        },
        {
          agentId: 'writer',
          agent: 'Report Writer',
          action: 'Creating comprehensive market research report',
          details: 'Synthesizing findings into executive summary and detailed report',
          duration: 2000,
          result: '24-page report with executive summary, charts, and recommendations'
        }
      ],
      'content-strategy': [
        {
          agentId: 'strategist',
          agent: 'Content Strategist',
          action: 'Developing content strategy framework',
          details: 'Analyzing audience, defining goals, and mapping content pillars',
          duration: 1800,
          result: 'Strategy framework with 4 content pillars and 6-month roadmap'
        },
        {
          agentId: 'seo-specialist',
          agent: 'SEO Expert',
          action: 'Conducting keyword research and SEO optimization',
          details: 'Analyzing search volumes, competition, and optimization opportunities',
          duration: 2200,
          result: '150 target keywords, SEO score improvement plan, technical audit'
        },
        {
          agentId: 'creator',
          agent: 'Content Creator',
          action: 'Creating content templates and samples',
          details: 'Developing templates, sample content, and style guidelines',
          duration: 2000,
          result: '12 content templates, 5 sample pieces, brand voice guidelines'
        }
      ],
      'product-launch': [
        {
          agentId: 'manager',
          agent: 'Launch Manager',
          action: 'Creating project timeline and risk assessment',
          details: 'Developing launch phases, milestones, and risk mitigation plans',
          duration: 2300,
          result: '90-day launch plan with 15 milestones and risk matrix'
        },
        {
          agentId: 'marketer',
          agent: 'Marketing Specialist',
          action: 'Developing marketing campaign strategy',
          details: 'Planning multi-channel campaign with budget allocation',
          duration: 2500,
          result: 'Campaign strategy across 6 channels with $50K budget allocation'
        },
        {
          agentId: 'designer',
          agent: 'Creative Designer',
          action: 'Creating visual assets and campaign materials',
          details: 'Designing logos, banners, social media assets, and landing pages',
          duration: 2200,
          result: '25 visual assets, brand guidelines, and responsive landing page'
        }
      ]
    };
    return workflows[projectKey] || [];
  };

  const generateFinalResult = (projectKey) => {
    const results = {
      'market-research': {
        title: 'Market Research Report Complete',
        summary: 'Comprehensive market analysis delivered with actionable insights',
        deliverables: [
          '24-page executive report with market analysis',
          'Competitive landscape overview (12 key players)',
          'Market opportunity assessment ($2.4B TAM)',
          'Strategic recommendations and next steps'
        ],
        metrics: {
          'Research Quality': '94%',
          'Data Accuracy': '97%',
          'Insights Generated': '23',
          'Time Saved': '85%'
        }
      },
      'content-strategy': {
        title: 'Content Strategy Package Ready',
        summary: 'Complete content marketing strategy with SEO optimization',
        deliverables: [
          'Content strategy framework with 4 pillars',
          'SEO keyword research (150 target keywords)',
          '12 content templates and 5 sample pieces',
          '6-month content calendar and roadmap'
        ],
        metrics: {
          'Strategy Score': '92%',
          'SEO Potential': '89%',
          'Content Templates': '12',
          'Efficiency Gain': '78%'
        }
      },
      'product-launch': {
        title: 'Launch Campaign Strategy Complete',
        summary: 'End-to-end product launch plan with creative assets',
        deliverables: [
          '90-day launch timeline with 15 milestones',
          'Multi-channel marketing campaign ($50K budget)',
          '25 visual assets and brand guidelines',
          'Risk assessment and mitigation strategies'
        ],
        metrics: {
          'Plan Completeness': '96%',
          'Risk Coverage': '91%',
          'Asset Quality': '93%',
          'Launch Readiness': '88%'
        }
      }
    };
    return results[projectKey];
  };

  const resetCrew = () => {
    setCurrentPhase('setup');
    setSelectedProject('');
    setAgents([]);
    setExecutionLog([]);
    setFinalResult(null);
    setIsExecuting(false);
  };

  const getAgentStatusColor = (status) => {
    switch (status) {
      case 'working': return 'border-blue-400 bg-blue-50';
      case 'completed': return 'border-green-400 bg-green-50';
      default: return 'border-gray-300 bg-white';
    }
  };

  const getLogStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      default: return '⏳';
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            👥 CrewAI Multi-Agent Collaboration
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch specialized AI agents work together on complex projects with role-based collaboration and quality assurance.
          </p>
        </div>

        {currentPhase === 'setup' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Choose a Collaborative Project
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(crewProjects).map(([key, project]) => (
                <div
                  key={key}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-indigo-400 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleProjectSelect(key)}
                >
                  <h4 className="font-semibold text-gray-800 mb-2">{project.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="text-xs text-indigo-600">
                      ⏱️ {project.timeline} • {project.agents.length} agents
                    </div>
                    <div className="flex space-x-1">
                      {project.agents.map(agent => (
                        <span key={agent.id} className="text-lg">{agent.avatar}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPhase === 'execution' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {crewProjects[selectedProject]?.name}
              </h3>
              <button
                onClick={executeCrewWorkflow}
                disabled={isExecuting}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isExecuting ? '🔄 Crew Working...' : '🚀 Start Collaboration'}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Agent Status Panel */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">👥 Agent Status</h4>
                <div className="space-y-4">
                  {agents.map((agent) => (
                    <div
                      key={agent.id}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${getAgentStatusColor(agent.status)}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{agent.avatar}</span>
                          <div>
                            <div className="font-medium text-gray-800">{agent.name}</div>
                            <div className="text-sm text-gray-600">{agent.role}</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-indigo-600">
                          {agent.status === 'working' ? 'Working...' : 
                           agent.status === 'completed' ? 'Completed' : 'Ready'}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {agent.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-600">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Log */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">📋 Execution Log</h4>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {executionLog.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      Waiting for collaboration to start...
                    </div>
                  ) : (
                    executionLog.map((log) => (
                      <div
                        key={log.id}
                        className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <span>{getLogStatusIcon(log.status)}</span>
                            <span className="font-medium text-sm text-gray-800">{log.agent}</span>
                          </div>
                          <span className="text-xs text-gray-500">{log.timestamp}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">{log.action}</div>
                        <div className="text-xs text-gray-500">{log.details}</div>
                        {log.result && (
                          <div className="text-xs text-green-600 mt-1 font-medium">
                            ✅ {log.result}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPhase === 'results' && finalResult && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                ✅ {finalResult.title}
              </h3>
              <p className="text-gray-600">{finalResult.summary}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">📦 Deliverables</h4>
                <div className="space-y-2">
                  {finalResult.deliverables.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">📊 Quality Metrics</h4>
                <div className="space-y-3">
                  {Object.entries(finalResult.metrics).map(([metric, value]) => (
                    <div key={metric} className="flex justify-between items-center">
                      <span className="text-gray-600">{metric}:</span>
                      <span className="font-semibold text-indigo-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={resetCrew}
                className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
              >
                🔄 Try Another Project
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600">10x</div>
              <div className="text-sm text-gray-600">Content Scaling</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-purple-600">70%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div className="text-sm text-gray-600">Quality Consistency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiAgentCrewAgent;
