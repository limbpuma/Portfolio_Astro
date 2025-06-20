import React, { useState } from 'react';

const AISkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCode, setShowCode] = useState(false);

  // Ejemplos de código específicos para cada skill (incluyendo variantes en diferentes idiomas)
  const codeExamples = {
    // AI & Machine Learning (EN/DE/ES variants)
    'AI & Machine Learning': `// LangChain Agent Example
const agent = new ChatAgent({
  llm: new OpenAI(),
  tools: [new Calculator(), new WikipediaTool()],
  verbose: true
});

await agent.run("Calculate 15% of 1000 and tell me about AI");`,
    
    'KI & Machine Learning': `// LangChain Agent Beispiel
const agent = new ChatAgent({
  llm: new OpenAI(),
  tools: [new Calculator(), new WikipediaTool()],
  verbose: true
});

await agent.run("Berechne 15% von 1000 und erzähle mir über KI");`,
    
    'IA & Machine Learning': `// Ejemplo de Agente LangChain
const agent = new ChatAgent({
  llm: new OpenAI(),
  tools: [new Calculator(), new WikipediaTool()],
  verbose: true
});

await agent.run("Calcula el 15% de 1000 y háblame sobre IA");`,

    // Modern AI Development Tools
    'Modern AI Development Tools': `// Cursor + GitHub Copilot Workflow
function generateRestaurantName(cuisine) {
  // Cursor AI suggests structure
  const prompt = \`Generate a creative \${cuisine} restaurant name\`;
  // Copilot completes the OpenAI call
  return openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: prompt
  });
}`,
    
    'Moderne KI-Entwicklungstools': `// Cursor + GitHub Copilot Workflow
function generateRestaurantName(cuisine) {
  // Cursor KI schlägt Struktur vor
  const prompt = \`Generiere einen kreativen \${cuisine} Restaurant-Namen\`;
  // Copilot vervollständigt den OpenAI-Aufruf
  return openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: prompt
  });
}`,
    
    'Herramientas Modernas de Desarrollo IA': `// Flujo de Trabajo Cursor + GitHub Copilot
function generateRestaurantName(cuisine) {
  // Cursor AI sugiere estructura
  const prompt = \`Genera un nombre creativo para restaurante \${cuisine}\`;
  // Copilot completa la llamada OpenAI
  return openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: prompt
  });
}`,

    // JavaScript & TypeScript
    'JavaScript & TypeScript': `// AI-Enhanced TypeScript
interface AIResponse<T> {
  data: T;
  confidence: number;
  aiGenerated: boolean;
}

const processWithAI = async <T>(
  input: string
): Promise<AIResponse<T>> => {
  const result = await aiService.process(input);
  return {
    data: result.data,
    confidence: result.confidence,
    aiGenerated: true
  };
};`,

    // React & Modern Frontend variants
    'React & Modern Frontend': `// AI-Integrated React Component
const AIChat = () => {
  const [messages, setMessages] = useAIChat();
  const { generateResponse } = useOpenAI();
  
  const handleSubmit = async (message) => {
    const aiResponse = await generateResponse(message);
    setMessages(prev => [...prev, aiResponse]);
  };
  
  return <ChatInterface onSubmit={handleSubmit} />;
};`,
    
    'React & Moderne Frontend': `// KI-integrierte React-Komponente
const AIChat = () => {
  const [messages, setMessages] = useAIChat();
  const { generateResponse } = useOpenAI();
  
  const handleSubmit = async (message) => {
    const aiResponse = await generateResponse(message);
    setMessages(prev => [...prev, aiResponse]);
  };
  
  return <ChatInterface onSubmit={handleSubmit} />;
};`,
    
    'React & Frontend Moderno': `// Componente React Integrado con IA
const AIChat = () => {
  const [messages, setMessages] = useAIChat();
  const { generateResponse } = useOpenAI();
  
  const handleSubmit = async (message) => {
    const aiResponse = await generateResponse(message);
    setMessages(prev => [...prev, aiResponse]);
  };
  
  return <ChatInterface onSubmit={handleSubmit} />;
};`,

    // Python & AI Development variants
    'Python & AI Development': `# AI Agent with LangChain
from langchain.agents import Agent
from langchain.tools import Tool
from langchain.llms import OpenAI

class RestaurantNameAgent:
    def __init__(self):
        self.llm = OpenAI(temperature=0.9)
        
    def generate_name(self, cuisine: str) -> str:
        prompt = f"Creative {cuisine} restaurant name:"
        return self.llm(prompt)
        
# Usage example
agent = RestaurantNameAgent()
result = agent.generate_name("Italian")`,
    
    'Python & KI-Entwicklung': `# KI-Agent mit LangChain
from langchain.agents import Agent
from langchain.tools import Tool
from langchain.llms import OpenAI

class RestaurantNameAgent:
    def __init__(self):
        self.llm = OpenAI(temperature=0.9)
        
    def generate_name(self, cuisine: str) -> str:
        prompt = f"Kreativer {cuisine} Restaurant-Name:"
        return self.llm(prompt)
        
# Verwendungsbeispiel
agent = RestaurantNameAgent()
result = agent.generate_name("Italienisch")`,
    
    'Python & Desarrollo IA': `# Agente IA con LangChain
from langchain.agents import Agent
from langchain.tools import Tool
from langchain.llms import OpenAI

class RestaurantNameAgent:
    def __init__(self):
        self.llm = OpenAI(temperature=0.9)
        
    def generate_name(self, cuisine: str) -> str:
        prompt = f"Nombre creativo para restaurante {cuisine}:"
        return self.llm(prompt)
        
# Ejemplo de uso
agent = RestaurantNameAgent()
result = agent.generate_name("Italiano")`,

    // Java & Spring Boot (same for all languages)
    'Java & Spring Boot': `// AI-Enhanced Spring Boot Controller
@RestController
@RequestMapping("/api/ai")
public class AIController {
    
    @Autowired
    private OpenAIService openAIService;
    
    @PostMapping("/generate")
    public ResponseEntity<AIResponse> generate(
        @RequestBody AIRequest request) {
        
        try {
            AIResponse response = openAIService
                .processRequest(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(new AIResponse("Error: " + e.getMessage()));
        }
    }
}`,

    // AI-Enhanced Version Control variants
    'AI-Enhanced Version Control': `# AI-Powered Git Workflow
# Set up AI-enhanced git configuration
git config commit.template .gitmessage
git config --global core.editor "code --wait"

# AI-generated commit messages
git add .
git commit -m "$(ai-commit-generator --analyze-diff)"

# GitHub Copilot for code reviews
gh pr create --title "$(copilot suggest-title)" \\
  --body "$(copilot generate-description)"

# AI-powered git hooks
echo "#!/bin/bash" > .git/hooks/pre-commit
echo "ai-code-review --staged" >> .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit`,
    
    'KI-Enhanced Version Control': `# KI-gestützter Git-Workflow
# KI-erweiterte Git-Konfiguration einrichten
git config commit.template .gitmessage
git config --global core.editor "code --wait"

# KI-generierte Commit-Nachrichten
git add .
git commit -m "$(ai-commit-generator --analyze-diff)"

# GitHub Copilot für Code-Reviews
gh pr create --title "$(copilot suggest-title)" \\
  --body "$(copilot generate-description)"

# KI-gestützte Git-Hooks
echo "#!/bin/bash" > .git/hooks/pre-commit
echo "ai-code-review --staged" >> .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit`,
    
    'Control de Versiones Potenciado por IA': `# Flujo de Trabajo Git Potenciado por IA
# Configurar git mejorado con IA
git config commit.template .gitmessage
git config --global core.editor "code --wait"

# Mensajes de commit generados por IA
git add .
git commit -m "$(ai-commit-generator --analyze-diff)"

# GitHub Copilot para revisiones de código
gh pr create --title "$(copilot suggest-title)" \\
  --body "$(copilot generate-description)"

# Hooks de git potenciados por IA
echo "#!/bin/bash" > .git/hooks/pre-commit
echo "ai-code-review --staged" >> .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit`
  };

  const getCodeExample = () => {
    const skillName = skill.name;
    return codeExamples[skillName] || `// ${skillName} - Código de ejemplo será añadido pronto...
// ${skillName} - Example code will be added soon...
// ${skillName} - Beispielcode wird bald hinzugefügt...`;
  };

  return (
    <div 
      className={`relative group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="card-body relative z-10">
        <div className="flex items-start gap-4">
          <div className={`text-3xl transition-all duration-300 ${
            isHovered ? 'scale-110 animate-pulse' : ''
          }`}>
            <i className={skill.icon}></i>
          </div>
          
          <div className="flex-1">
            <h3 className="card-title text-primary mb-2 flex items-center gap-2">
              {skill.name}
              {(skill.name.includes('AI') || skill.name.includes('KI') || skill.name.includes('IA')) && (
                <span className="badge badge-secondary badge-sm">🤖 AI</span>
              )}
            </h3>
            
            <p className="text-base-content/80 text-sm leading-relaxed">
              {skill.description}
            </p>

            <div className="card-actions justify-end mt-4">
              <button 
                onClick={() => setShowCode(!showCode)}
                className={`btn btn-sm transition-all duration-300 ${
                  showCode ? 'btn-primary' : 'btn-outline btn-primary'
                } ${isHovered ? 'btn-primary' : ''}`}
              >
                <i className="fas fa-code mr-1"></i>
                {showCode ? 'Hide Code' : 'Show Example'}
              </button>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-500 overflow-hidden ${
          showCode ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-base-300 rounded-lg p-4 border-l-4 border-primary">
            <pre className="text-xs text-base-content overflow-x-auto">
              <code>{getCodeExample()}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const AISkillsGrid = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <AISkillCard key={index} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default AISkillsGrid;
