/**
 * AI Message Intelligence Agent
 * Analyzes user input and generates intelligent, personalized WhatsApp messages
 * Features: Context analysis, tone detection, opportunity-based customization
 */

class AIMessageAgent {
  constructor() {
    this.name = "AI Message Intelligence Agent";
    this.version = "1.0.0";
  }

  /**
   * Main method to generate intelligent WhatsApp message
   */
  async generateIntelligentMessage(formData, language = 'en') {
    console.log('🤖 AI Agent - Received language:', language);
    console.log('🤖 AI Agent - Form data:', formData);
    
    try {
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 1200));

      const analysis = this.analyzeContext(formData, language);
      const enhancedMessage = this.craftIntelligentMessage(formData, analysis, language);
      
      console.log('🤖 AI Agent - Generated message in', language, ':', enhancedMessage.substring(0, 50) + '...');
      
      return {
        success: true,
        message: enhancedMessage,
        analysis: analysis,
        improvements: this.suggestImprovements(analysis)
      };
    } catch (error) {
      console.error('AI Message Generation failed:', error);
      return {
        success: false,
        message: this.generateFallbackMessage(formData, language),
        error: error.message
      };
    }
  }

  /**
   * Analyze context from form data
   */
  analyzeContext(formData, language) {
    const { name, company, opportunityType, message } = formData;
    
    // Detect tone and formality
    const tone = this.detectTone(message, language);
    const formality = this.detectFormality(message, company, language);
    
    // Analyze opportunity urgency
    const urgency = this.analyzeUrgency(message, opportunityType);
    
    // Detect business context
    const businessContext = this.detectBusinessContext(company, message);
    
    // Language-specific cultural context
    const culturalContext = this.getCulturalContext(language);

    return {
      tone,
      formality,
      urgency,
      businessContext,
      culturalContext,
      hasCompany: !!company,
      messageLength: message ? message.length : 0,
      keyTerms: this.extractKeyTerms(message)
    };
  }

  /**
   * Detect tone from message content
   */
  detectTone(message, language) {
    if (!message) return 'neutral';
    
    const text = message.toLowerCase();
    
    // Enthusiastic indicators
    const enthusiasticTerms = {
      en: ['excited', 'amazing', 'love', 'fantastic', 'awesome', '!'],
      es: ['emocionado', 'increíble', 'me encanta', 'fantástico', 'genial', '!'],
      de: ['begeistert', 'großartig', 'fantastisch', 'toll', 'super', '!']
    };
    
    // Professional indicators
    const professionalTerms = {
      en: ['opportunity', 'collaboration', 'partnership', 'business', 'project'],
      es: ['oportunidad', 'colaboración', 'asociación', 'negocio', 'proyecto'],
      de: ['gelegenheit', 'zusammenarbeit', 'partnerschaft', 'geschäft', 'projekt']
    };
    
    // Urgent indicators
    const urgentTerms = {
      en: ['urgent', 'asap', 'quickly', 'immediate', 'soon'],
      es: ['urgente', 'lo antes posible', 'rápido', 'inmediato', 'pronto'],
      de: ['dringend', 'schnell', 'sofort', 'umgehend', 'bald']
    };

    const langTerms = {
      enthusiastic: enthusiasticTerms[language] || enthusiasticTerms.en,
      professional: professionalTerms[language] || professionalTerms.en,
      urgent: urgentTerms[language] || urgentTerms.en
    };

    if (langTerms.urgent.some(term => text.includes(term))) return 'urgent';
    if (langTerms.enthusiastic.some(term => text.includes(term))) return 'enthusiastic';
    if (langTerms.professional.some(term => text.includes(term))) return 'professional';
    
    return 'neutral';
  }

  /**
   * Detect formality level
   */
  detectFormality(message, company, language) {
    // Company presence usually indicates formal context
    if (company) return 'formal';
    
    if (!message) return 'semi-formal';
    
    const text = message.toLowerCase();
    
    const formalIndicators = {
      en: ['dear', 'sincerely', 'regards', 'please', 'would like', 'could you'],
      es: ['estimado', 'atentamente', 'saludos', 'por favor', 'me gustaría', 'podría'],
      de: ['sehr geehrte', 'mit freundlichen grüßen', 'bitte', 'würde gerne', 'könnten sie']
    };
    
    const informalIndicators = {
      en: ['hey', 'hi there', 'what\'s up', 'cool', 'awesome'],
      es: ['hola', 'qué tal', 'genial', 'chévere', 'buenísimo'],
      de: ['hallo', 'hi', 'wie geht\'s', 'cool', 'super']
    };

    const formal = formalIndicators[language] || formalIndicators.en;
    const informal = informalIndicators[language] || informalIndicators.en;

    if (formal.some(term => text.includes(term))) return 'formal';
    if (informal.some(term => text.includes(term))) return 'informal';
    
    return 'semi-formal';
  }

  /**
   * Analyze urgency level
   */
  analyzeUrgency(message, opportunityType) {
    if (opportunityType === 'internship') return 'medium'; // Internships usually have deadlines
    
    if (!message) return 'low';
    
    const text = message.toLowerCase();
    const urgentKeywords = ['urgent', 'asap', 'quickly', 'immediate', 'deadline', 'soon',
                           'urgente', 'pronto', 'rápido', 'inmediato',
                           'dringend', 'schnell', 'sofort', 'bald'];
    
    if (urgentKeywords.some(keyword => text.includes(keyword))) return 'high';
    
    return 'medium';
  }

  /**
   * Detect business context
   */
  detectBusinessContext(company, message) {
    const contexts = [];
    
    if (company) {
      contexts.push('corporate');
      
      // Detect industry from company name or message
      const techTerms = ['tech', 'software', 'digital', 'ai', 'data', 'development'];
      const healthTerms = ['health', 'medical', 'pharma', 'clinic', 'hospital'];
      const financeTerms = ['bank', 'finance', 'investment', 'consulting'];
      
      const text = `${company} ${message || ''}`.toLowerCase();
      
      if (techTerms.some(term => text.includes(term))) contexts.push('technology');
      if (healthTerms.some(term => text.includes(term))) contexts.push('healthcare');
      if (financeTerms.some(term => text.includes(term))) contexts.push('finance');
    } else {
      contexts.push('individual');
    }
    
    return contexts;
  }

  /**
   * Get cultural context for language
   */
  getCulturalContext(language) {
    const contexts = {
      en: { formality: 'medium', directness: 'high', personalTouch: 'medium' },
      es: { formality: 'medium', directness: 'medium', personalTouch: 'high' },
      de: { formality: 'high', directness: 'high', personalTouch: 'low' }
    };
    
    return contexts[language] || contexts.en;
  }

  /**
   * Extract key terms from message
   */
  extractKeyTerms(message) {
    if (!message) return [];
    
    const importantTerms = message.toLowerCase()
      .split(/\s+/)
      .filter(word => word.length > 4)
      .slice(0, 5); // Top 5 meaningful words
    
    return importantTerms;
  }

  /**
   * Craft intelligent message based on analysis
   */
  craftIntelligentMessage(formData, analysis, language) {
    const { name, company, opportunityType, message } = formData;
    const { tone, formality, urgency, businessContext, culturalContext } = analysis;

    // Get opportunity-specific context
    const opportunityContext = this.getOpportunityContext(opportunityType, language);
    
    // Build greeting based on formality and culture
    const greeting = this.craftGreeting(formality, culturalContext, language);
    
    // Build introduction
    const introduction = this.craftIntroduction(name, company, formality, language);
    
    // Build main content with AI enhancement
    const mainContent = this.craftMainContent(opportunityContext, analysis, language);
    
    // Build personal message integration
    const personalNote = this.integratePersonalMessage(message, tone, language);
    
    // Build closing based on urgency and formality
    const closing = this.craftClosing(urgency, formality, language);

    // Combine all parts
    return `${greeting}

${introduction}

${mainContent}

${personalNote}

${closing}`;
  }

  /**
   * Get opportunity-specific messaging context
   */
  getOpportunityContext(opportunityType, language) {
    const contexts = {
      internship: {
        en: {
          focus: 'learning and growth opportunity',
          value: 'hands-on experience in AI development',
          timeline: '6-month commitment starting August 2025'
        },
        es: {
          focus: 'oportunidad de aprendizaje y crecimiento',
          value: 'experiencia práctica en desarrollo IA',
          timeline: 'compromiso de 6 meses desde agosto 2025'
        },
        de: {
          focus: 'Lern- und Wachstumsmöglichkeit',
          value: 'praktische Erfahrung in KI-Entwicklung',
          timeline: '6-monatige Verpflichtung ab August 2025'
        }
      },
      project: {
        en: {
          focus: 'collaborative project work',
          value: 'AI-enhanced development solutions',
          timeline: 'flexible project-based engagement'
        },
        es: {
          focus: 'trabajo colaborativo en proyectos',
          value: 'soluciones de desarrollo potenciadas por IA',
          timeline: 'participación flexible basada en proyectos'
        },
        de: {
          focus: 'kollaborative Projektarbeit',
          value: 'KI-verbesserte Entwicklungslösungen',
          timeline: 'flexible projektbasierte Zusammenarbeit'
        }
      },
      consultation: {
        en: {
          focus: 'AI consultation and advisory',
          value: 'strategic AI implementation guidance',
          timeline: 'flexible consulting arrangement'
        },
        es: {
          focus: 'consultoría y asesoría en IA',
          value: 'orientación estratégica para implementación de IA',
          timeline: 'acuerdo flexible de consultoría'
        },
        de: {
          focus: 'KI-Beratung und -Betreuung',
          value: 'strategische KI-Implementierungsberatung',
          timeline: 'flexible Beratungsvereinbarung'
        }
      }
    };

    return contexts[opportunityType]?.[language] || contexts.project[language];
  }

  /**
   * Craft culturally appropriate greeting
   */
  craftGreeting(formality, culturalContext, language) {
    console.log('🎯 Crafting greeting for language:', language, 'formality:', formality);
    
    const greetings = {
      en: {
        formal: 'Hello Limber! 👋',
        'semi-formal': 'Hi Limber! 👋',
        informal: 'Hey Limber! 👋'
      },
      es: {
        formal: '¡Hola Limber! 👋',
        'semi-formal': '¡Hola Limber! 👋',
        informal: '¡Hola Limber! 👋'
      },
      de: {
        formal: 'Hallo Herr Martinez! 👋',
        'semi-formal': 'Hallo Limber! 👋',
        informal: 'Hi Limber! 👋'
      }
    };

    const result = greetings[language]?.[formality] || greetings.en[formality];
    console.log('🎯 Selected greeting:', result);
    return result;
  }

  /**
   * Craft personalized introduction
   */
  craftIntroduction(name, company, formality, language) {
    const templates = {
      en: {
        withCompany: `I'm ${name || '[Name]'} from ${company}. I came across your impressive portfolio and I'm particularly interested in your AI development expertise.`,
        withoutCompany: `I'm ${name || '[Name]'}. I discovered your portfolio and I'm genuinely impressed by your AI development work and Microsoft AI-900 certification.`
      },
      es: {
        withCompany: `Soy ${name || '[Nombre]'} de ${company}. Encontré tu portafolio impresionante y me interesa especialmente tu experiencia en desarrollo IA.`,
        withoutCompany: `Soy ${name || '[Nombre]'}. Descubrí tu portafolio y estoy genuinamente impresionado por tu trabajo en desarrollo IA y certificación Microsoft AI-900.`
      },
      de: {
        withCompany: `Ich bin ${name || '[Name]'} von ${company}. Ich bin auf Ihr beeindruckendes Portfolio gestoßen und interessiere mich besonders für Ihre KI-Entwicklungsexpertise.`,
        withoutCompany: `Ich bin ${name || '[Name]'}. Ich habe Ihr Portfolio entdeckt und bin wirklich beeindruckt von Ihrer KI-Entwicklungsarbeit und Microsoft AI-900-Zertifizierung.`
      }
    };

    const template = company ? 'withCompany' : 'withoutCompany';
    return templates[language]?.[template] || templates.en[template];
  }

  /**
   * Craft main content with AI focus
   */
  craftMainContent(opportunityContext, analysis, language) {
    const content = {
      en: `Your expertise in the following areas aligns perfectly with our needs:
✅ Microsoft AI-900 Certification & practical AI knowledge
✅ LangChain & OpenAI APIs implementation  
✅ AI-Enhanced Development with modern tools
✅ React/Python integration for intelligent applications

We're looking for someone with your ${opportunityContext.focus} to help with ${opportunityContext.value}.`,
      es: `Tu experiencia en las siguientes áreas se alinea perfectamente con nuestras necesidades:
✅ Certificación Microsoft AI-900 y conocimiento práctico de IA
✅ Implementación con LangChain & APIs de OpenAI
✅ Desarrollo Potenciado por IA con herramientas modernas
✅ Integración React/Python para aplicaciones inteligentes

Buscamos a alguien con tu ${opportunityContext.focus} para ayudar con ${opportunityContext.value}.`,
      de: `Ihre Expertise in folgenden Bereichen passt perfekt zu unseren Anforderungen:
✅ Microsoft AI-900-Zertifizierung & praktisches KI-Wissen
✅ LangChain & OpenAI APIs Implementierung
✅ KI-verstärkte Entwicklung mit modernen Tools
✅ React/Python-Integration für intelligente Anwendungen

Wir suchen jemanden mit Ihrer ${opportunityContext.focus} für ${opportunityContext.value}.`
    };

    return content[language] || content.en;
  }

  /**
   * Integrate personal message with AI enhancement
   */
  integratePersonalMessage(message, tone, language) {
    if (!message) {
      const defaults = {
        en: 'I believe your AI-focused approach and hands-on experience would be valuable for our goals.',
        es: 'Creo que tu enfoque en IA y experiencia práctica sería valioso para nuestros objetivos.',
        de: 'Ich glaube, dass Ihr KI-fokussierter Ansatz und praktische Erfahrung wertvoll für unsere Ziele wären.'
      };
      return defaults[language] || defaults.en;
    }

    const enhancementPrefixes = {
      en: {
        enthusiastic: 'I\'m particularly excited because:',
        professional: 'Specifically:',
        urgent: 'Time-sensitive note:',
        neutral: 'Additional context:'
      },
      es: {
        enthusiastic: 'Estoy particularmente emocionado porque:',
        professional: 'Específicamente:',
        urgent: 'Nota urgente:',
        neutral: 'Contexto adicional:'
      },
      de: {
        enthusiastic: 'Ich bin besonders begeistert, weil:',
        professional: 'Konkret:',
        urgent: 'Zeitkritischer Hinweis:',
        neutral: 'Zusätzlicher Kontext:'
      }
    };

    const prefix = enhancementPrefixes[language]?.[tone] || enhancementPrefixes.en[tone];
    return `${prefix} ${message}`;
  }

  /**
   * Craft appropriate closing
   */
  craftClosing(urgency, formality, language) {
    const closings = {
      en: {
        high: 'Given the timeline, I\'d appreciate the opportunity to discuss this soon. Thank you for your time!',
        medium: 'I\'d love to discuss how we can work together. Looking forward to hearing from you!',
        low: 'When convenient, I\'d appreciate the chance to explore potential collaboration. Best regards!'
      },
      es: {
        high: 'Dado el cronograma, apreciaría la oportunidad de discutir esto pronto. ¡Gracias por tu tiempo!',
        medium: 'Me encantaría discutir cómo podemos trabajar juntos. ¡Espero tener noticias tuyas!',
        low: 'Cuando sea conveniente, apreciaría la oportunidad de explorar una posible colaboración. ¡Saludos!'
      },
      de: {
        high: 'Angesichts des Zeitplans würde ich die Gelegenheit schätzen, dies bald zu besprechen. Vielen Dank für Ihre Zeit!',
        medium: 'Ich würde gerne besprechen, wie wir zusammenarbeiten können. Ich freue mich auf Ihre Antwort!',
        low: 'Bei Gelegenheit würde ich die Chance schätzen, mögliche Zusammenarbeit zu erkunden. Mit freundlichen Grüßen!'
      }
    };

    return closings[language]?.[urgency] || closings.en[urgency];
  }

  /**
   * Generate fallback message if AI processing fails
   */
  generateFallbackMessage(formData, language) {
    // Return to basic template generation as fallback
    const basicTemplates = {
      en: `Hello Limber! 👋\n\nI'm ${formData.name || '[Name]'}${formData.company ? ` from ${formData.company}` : ''}.\n\nI've seen your portfolio and I'm interested in your AI development expertise.\n\n${formData.message || 'I\'d like to discuss potential opportunities.'}\n\nBest regards!`,
      es: `¡Hola Limber! 👋\n\nSoy ${formData.name || '[Nombre]'}${formData.company ? ` de ${formData.company}` : ''}.\n\nHe visto tu portafolio y me interesa tu experiencia en desarrollo IA.\n\n${formData.message || 'Me gustaría discutir oportunidades potenciales.'}\n\n¡Saludos!`,
      de: `Hallo Limber! 👋\n\nIch bin ${formData.name || '[Name]'}${formData.company ? ` von ${formData.company}` : ''}.\n\nIch habe Ihr Portfolio gesehen und interessiere mich für Ihre KI-Entwicklungsexpertise.\n\n${formData.message || 'Ich würde gerne mögliche Gelegenheiten besprechen.'}\n\nMit freundlichen Grüßen!`
    };

    return basicTemplates[language] || basicTemplates.en;
  }

  /**
   * Suggest improvements for future messages
   */
  suggestImprovements(analysis) {
    const suggestions = [];
    
    if (analysis.messageLength < 20) {
      suggestions.push('Consider adding more specific details about your project or goals');
    }
    
    if (!analysis.hasCompany) {
      suggestions.push('Including company information helps personalize the message better');
    }
    
    if (analysis.tone === 'neutral') {
      suggestions.push('Adding enthusiasm or specific interests can make the message more engaging');
    }
    
    return suggestions;
  }
}

export default AIMessageAgent;
