import React, { useState } from 'react';

const AIInActionSection = ({ i18n }) => {
  const [activeDemo, setActiveDemo] = useState(null);
  const [demoLoading, setDemoLoading] = useState(false);

  // Inline styles for animations
  const fadeInStyle = {
    animation: 'fadeIn 0.3s ease-out forwards',
  };

  const animationKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  const aiDemos = [
    {
      id: 'restaurant-generator',
      title: {
        en: '🍽️ AI Restaurant Name Generator',
        de: '🍽️ KI Restaurant-Namen Generator',
        es: '🍽️ Generador IA de Nombres de Restaurante'
      },
      description: {
        en: 'Generate creative restaurant names using LangChain & OpenAI',
        de: 'Erstelle kreative Restaurantnamen mit LangChain & OpenAI',
        es: 'Generar nombres creativos de restaurantes con LangChain & OpenAI'
      },
      demoType: 'interactive',
      githubUrl: 'https://github.com/limbpuma/LangchainRestaurantNameGenerator',
      icon: '🤖',
      tech: ['LangChain', 'OpenAI', 'Python']
    },
    {
      id: 'genius-ai',
      title: {
        en: '🧠 Genius AI Multi-Tool',
        de: '🧠 Genius KI Multi-Tool',
        es: '🧠 Genius IA Multi-Herramienta'
      },
      description: {
        en: 'AI conversation, code generation, image analysis & music creation',
        de: 'KI-Unterhaltung, Code-Generierung, Bildanalyse & Musik-Erstellung',
        es: 'Conversación IA, generación de código, análisis de imágenes y música'
      },
      demoType: 'showcase',
      githubUrl: 'https://github.com/limbpuma/geniusapp',
      icon: '🎯',
      tech: ['React', 'OpenAI API', 'Next.js']
    },
    {
      id: 'ai-portfolio',
      title: {
        en: '🚀 AI-Enhanced Portfolio',
        de: '🚀 KI-verstärktes Portfolio',
        es: '🚀 Portfolio Potenciado por IA'
      },
      description: {
        en: 'This very portfolio with AI-powered contact form and smart interactions',
        de: 'Dieses Portfolio mit KI-betriebenen Kontaktformular und intelligenten Interaktionen',
        es: 'Este mismo portfolio con formulario de contacto IA e interacciones inteligentes'
      },
      demoType: 'live',
      githubUrl: '#',
      icon: '💎',
      tech: ['Astro', 'React', 'AI Integration']
    }
  ];

  const handleDemoClick = (demoId) => {
    if (activeDemo === demoId) {
      setActiveDemo(null);
      return;
    }

    setDemoLoading(true);
    setTimeout(() => {
      setActiveDemo(demoId);
      setDemoLoading(false);
    }, 1000);
  };

  const currentLang = i18n.LANG || 'en';

  const renderDemoContent = (demo) => {
    if (activeDemo !== demo.id) return null;

    return (
      <div className="mt-4 p-4 bg-base-200 rounded-lg animate-fade-in">
        {demo.id === 'restaurant-generator' && (
          <div className="space-y-4">
            <div className="bg-base-100 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-600 mb-2">🔧 How it works:</h4>
              <div className="text-sm space-y-2">
                <p>• <strong>Input:</strong> Cuisine type (Italian, Mexican, Asian, etc.)</p>
                <p>• <strong>AI Processing:</strong> LangChain + OpenAI GPT models</p>
                <p>• <strong>Output:</strong> Creative restaurant names with descriptions</p>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
              <p className="text-sm">
                <strong>Example:</strong> Input "Italian" → Output "Bella Vista Trattoria - Where authentic flavors meet modern elegance"
              </p>
            </div>
          </div>
        )}

        {demo.id === 'genius-ai' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-base-100 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">💬</div>
                <p className="text-xs font-semibold">AI Chat</p>
              </div>
              <div className="bg-base-100 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">💻</div>
                <p className="text-xs font-semibold">Code Gen</p>
              </div>
              <div className="bg-base-100 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">🖼️</div>
                <p className="text-xs font-semibold">Image AI</p>
              </div>
              <div className="bg-base-100 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">🎵</div>
                <p className="text-xs font-semibold">Music AI</p>
              </div>
            </div>
          </div>
        )}

        {demo.id === 'ai-portfolio' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-2">🚀 You're experiencing it now!</h4>
              <div className="text-sm space-y-1">
                <p>✅ AI-powered WhatsApp contact form</p>
                <p>✅ Intelligent message generation</p>
                <p>✅ Multi-language AI adaptation</p>
                <p>✅ Dynamic skill categorization</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };  return (
    <div className="py-16 bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-4">
            <span className="text-3xl">🤖</span>
            <h2 className="text-2xl font-bold text-primary">
              {currentLang === 'de' ? 'KI in Aktion' : 
               currentLang === 'es' ? 'IA en Acción' : 
               'AI in Action'}
            </h2>
          </div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            {currentLang === 'de' ? 
              'Entdecke meine AI-Projekte mit Live-Demos und interaktiven Beispielen' :
              currentLang === 'es' ?
              'Descubre mis proyectos de IA con demos en vivo y ejemplos interactivos' :
              'Explore my AI projects with live demos and interactive examples'
            }
          </p>
        </div>

        {/* AI Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiDemos.map((demo) => (
            <div key={demo.id} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="flex gap-2">
                    <span className="badge badge-secondary badge-sm">AI</span>
                    <span className="badge badge-outline badge-xs">Demo</span>
                  </div>
                </div>

                <h3 className="card-title text-lg mb-2">
                  {demo.title[currentLang] || demo.title.en}
                </h3>

                <p className="text-sm text-base-content/70 mb-4">
                  {demo.description[currentLang] || demo.description.en}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {demo.tech.map((tech, index) => (
                    <span key={index} className="badge badge-outline badge-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Demo Content */}
                {renderDemoContent(demo)}

                {/* Action Buttons */}
                <div className="card-actions justify-between mt-4">
                  <button
                    onClick={() => handleDemoClick(demo.id)}
                    disabled={demoLoading}
                    className={`btn btn-primary btn-sm ${demoLoading ? 'loading' : ''}`}
                  >
                    {demoLoading ? '' : (activeDemo === demo.id ? '🔽 Hide' : '🔍 Demo')}
                  </button>
                  
                  <a
                    href={demo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <i className="fab fa-github mr-1"></i>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">
              {currentLang === 'de' ? 
                '🚀 Bereit für KI-Zusammenarbeit?' :
                currentLang === 'es' ?
                '🚀 ¿Listo para colaborar con IA?' :
                '🚀 Ready for AI Collaboration?'
              }
            </h3>
            <p className="text-base-content/70 mb-6">
              {currentLang === 'de' ?
                'Diese Projekte zeigen meine Expertise in modernen AI-Technologien und deren praktischer Anwendung.' :
                currentLang === 'es' ?
                'Estos proyectos demuestran mi experiencia en tecnologías IA modernas y su aplicación práctica.' :
                'These projects demonstrate my expertise in modern AI technologies and their practical applications.'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm">OpenAI API Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-sm">LangChain Framework</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
                <span className="text-sm">Microsoft AI-900 Certified</span>
              </div>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInActionSection;
