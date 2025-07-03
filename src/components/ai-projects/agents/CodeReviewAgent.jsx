import React, { useState, useRef } from 'react';
import { ChevronRightIcon, CodeBracketIcon, BugAntIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline';

const CodeReviewAgent = ({ t }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [selectedFile, setSelectedFile] = useState('');
  const fileInputRef = useRef(null);

  const sampleCode = {
    'react-component.jsx': `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    // Potential issue: No cleanup or error handling
    fetch('/api/users/' + userId)
      .then(response => response.json())
      .then(data => setUser(data));
    
    // Another API call without proper error handling
    fetch('/api/posts?userId=' + userId)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [userId]);

  // Security issue: No input validation
  const handleSubmit = (formData) => {
    fetch('/api/users/' + userId, {
      method: 'POST',
      body: formData
    });
  };

  return (
    <div>
      {user && <h1>{user.name}</h1>}
      {posts.map(post => (
        <div key={post.id}>{post.content}</div>
      ))}
    </div>
  );
}`,
    'python-api.py': `import sqlite3
import json
from flask import Flask, request

app = Flask(__name__)

@app.route('/users/<user_id>', methods=['GET', 'POST'])
def handle_user(user_id):
    # SQL Injection vulnerability
    query = f"SELECT * FROM users WHERE id = {user_id}"
    
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute(query)
    
    if request.method == 'POST':
        data = request.get_json()
        # No input validation
        update_query = f"UPDATE users SET name = '{data['name']}' WHERE id = {user_id}"
        cursor.execute(update_query)
        conn.commit()
    
    result = cursor.fetchall()
    conn.close()
    
    return json.dumps(result)`,
    'typescript-service.ts': `interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];
  
  // Missing return type annotation
  async getUser(id) {
    // No error handling for invalid ID
    const user = this.users.find(u => u.id === id);
    return user;
  }
  
  // Synchronous operation marked as async unnecessarily
  async addUser(userData: any): Promise<void> {
    // Type safety issue: accepting 'any'
    this.users.push(userData);
  }
  
  // Missing error handling
  async deleteUser(id: number): Promise<boolean> {
    const index = this.users.findIndex(u => u.id === id);
    this.users.splice(index, 1);
    return true;
  }
}`
  };

  const mockAnalyzeCode = async (code, filename) => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const analysisResults = {
      'react-component.jsx': {
        issues: [
          {
            type: 'security',
            severity: 'high',
            line: 8,
            message: 'Missing error handling in fetch requests',
            suggestion: 'Add try-catch blocks and proper error handling'
          },
          {
            type: 'performance',
            severity: 'medium',
            line: 6,
            message: 'Multiple API calls in useEffect without cleanup',
            suggestion: 'Use AbortController for cleanup and combine API calls'
          },
          {
            type: 'security',
            severity: 'high',
            line: 18,
            message: 'No input validation before API call',
            suggestion: 'Validate and sanitize user input before sending to API'
          }
        ],
        suggestions: [
          'Implement proper error boundaries',
          'Add loading states for better UX',
          'Use TypeScript for better type safety',
          'Implement proper cleanup in useEffect'
        ],
        metrics: {
          complexity: 7,
          maintainability: 6,
          security: 4,
          performance: 5
        }
      },
      'python-api.py': {
        issues: [
          {
            type: 'security',
            severity: 'critical',
            line: 8,
            message: 'SQL Injection vulnerability',
            suggestion: 'Use parameterized queries with placeholders'
          },
          {
            type: 'security',
            severity: 'high',
            line: 15,
            message: 'No input validation on POST data',
            suggestion: 'Implement input validation and sanitization'
          },
          {
            type: 'reliability',
            severity: 'medium',
            line: 10,
            message: 'Missing database connection error handling',
            suggestion: 'Add proper exception handling for database operations'
          }
        ],
        suggestions: [
          'Use ORM like SQLAlchemy for safer database operations',
          'Implement request validation with schemas',
          'Add proper logging and monitoring',
          'Use connection pooling for better performance'
        ],
        metrics: {
          complexity: 5,
          maintainability: 4,
          security: 2,
          performance: 6
        }
      },
      'typescript-service.ts': {
        issues: [
          {
            type: 'type-safety',
            severity: 'medium',
            line: 9,
            message: 'Missing return type annotation',
            suggestion: 'Add explicit return type: Promise<User | undefined>'
          },
          {
            type: 'type-safety',
            severity: 'high',
            line: 15,
            message: 'Using "any" type reduces type safety',
            suggestion: 'Create proper interface for user data input'
          },
          {
            type: 'reliability',
            severity: 'medium',
            line: 21,
            message: 'No bounds checking before splice operation',
            suggestion: 'Check if index is valid before removing element'
          }
        ],
        suggestions: [
          'Enable strict TypeScript compiler options',
          'Implement proper error handling with Result types',
          'Add unit tests for edge cases',
          'Use readonly arrays where appropriate'
        ],
        metrics: {
          complexity: 4,
          maintainability: 7,
          security: 7,
          performance: 8
        }
      }
    }[filename] || {
      issues: [],
      suggestions: ['Upload a code file to see detailed analysis'],
      metrics: { complexity: 0, maintainability: 0, security: 0, performance: 0 }
    };
    
    setResults(analysisResults);
    setIsAnalyzing(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        mockAnalyzeCode(content, file.name);
        setSelectedFile(file.name);
      };
      reader.readAsText(file);
    }
  };

  const handleSampleAnalysis = (filename) => {
    const code = sampleCode[filename];
    mockAnalyzeCode(code, filename);
    setSelectedFile(filename);
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50';
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'security': return <BugAntIcon className="w-4 h-4" />;
      case 'performance': return <ClockIcon className="w-4 h-4" />;
      default: return <CodeBracketIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
            <CodeBracketIcon className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          AI Code Review Agent
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Advanced static analysis with AI-powered security, performance, and quality insights. 
          Supports multiple languages and provides actionable recommendations.
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Upload Code for Analysis
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".js,.jsx,.ts,.tsx,.py,.java,.cpp,.c,.php,.rb,.go"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Choose File to Analyze
            </button>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Or try sample files:</p>
            {Object.keys(sampleCode).map((filename) => (
              <button
                key={filename}
                onClick={() => handleSampleAnalysis(filename)}
                className="block w-full text-left px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                {filename}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Analysis Results */}
      {isAnalyzing && (
        <div className="text-center py-12">
          <div className="inline-flex items-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            <span className="text-gray-600 dark:text-gray-300">Analyzing code...</span>
          </div>
        </div>
      )}

      {results && !isAnalyzing && (
        <div className="space-y-6">
          {/* Metrics Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Code Quality Metrics - {selectedFile}
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(results.metrics).map(([metric, score]) => (
                <div key={metric} className="text-center">
                  <div className={`text-2xl font-bold ${score >= 7 ? 'text-green-600' : score >= 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {score}/10
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                    {metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Issues Found */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Issues Found ({results.issues.length})
            </h4>
            
            {results.issues.length > 0 ? (
              <div className="space-y-3">
                {results.issues.map((issue, index) => (
                  <div key={index} className="border-l-4 border-red-400 pl-4 py-2">
                    <div className="flex items-start space-x-3">
                      <div className={`p-1 rounded ${getSeverityColor(issue.severity)}`}>
                        {getTypeIcon(issue.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${getSeverityColor(issue.severity)}`}>
                            {issue.severity.toUpperCase()}
                          </span>
                          <span className="text-sm text-gray-500">Line {issue.line}</span>
                        </div>
                        <p className="text-gray-800 dark:text-white font-medium mb-1">
                          {issue.message}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          💡 {issue.suggestion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">No critical issues found!</p>
            )}
          </div>

          {/* Suggestions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
              <LightBulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
              Improvement Suggestions
            </h4>
            
            <ul className="space-y-2">
              {results.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <ChevronRightIcon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Technical Stack */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
          Technical Implementation
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">AI Components:</h5>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• OpenAI GPT-4 for code analysis</li>
              <li>• Custom AST parsing</li>
              <li>• Security rule engine</li>
              <li>• Performance pattern detection</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Supported Languages:</h5>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• JavaScript/TypeScript</li>
              <li>• Python, Java, C/C++</li>
              <li>• Go, Rust, PHP</li>
              <li>• Custom rule definitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeReviewAgent;
