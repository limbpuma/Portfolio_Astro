import { useState } from 'react';

const EmailResponseAgent = ({ config, translations = {}, locale = 'en' }) => {
  const [currentStep, setCurrentStep] = useState('input');
  const [incomingEmail, setIncomingEmail] = useState('');
  const [responseType, setResponseType] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // Get translations for the agent
  const t = translations.AGENTS?.EMAIL_RESPONSE || {};

  // Default fallback texts
  const getText = (key, fallback) => {
    return t[key] || fallback;
  };

  const responseTypes = {
    'professional': {
      name: getText('TYPE_PROFESSIONAL', '💼 Professional'),
      description: getText('TYPE_PROFESSIONAL_DESC', 'Formal response for clients or colleagues'),
      tone: 'formal y cortés'
    },
    'friendly': {
      name: getText('TYPE_FRIENDLY', '😊 Friendly'),
      description: getText('TYPE_FRIENDLY_DESC', 'Warm but professional response'),
      tone: 'amigable y cercano'
    },
    'brief': {
      name: getText('TYPE_BRIEF', '⚡ Brief'),
      description: getText('TYPE_BRIEF_DESC', 'Concise and direct response'),
      tone: 'conciso y directo'
    },
    'apologetic': {
      name: getText('TYPE_APOLOGETIC', '🙏 Apologetic'),
      description: getText('TYPE_APOLOGETIC_DESC', 'For problems, delays, or errors'),
      tone: 'empático y solucionador'
    },
    'payment': {
      name: getText('TYPE_PAYMENT', '💰 Payment/Billing'),
      description: getText('TYPE_PAYMENT_DESC', 'For payment or invoice matters'),
      tone: 'responsable y solucionador'
    }
  };

  const exampleEmails = {
    complaint: translations.AGENTS?.EMAIL_RESPONSE?.EXAMPLES?.COMPLAINT || "Hello, I am very upset because my order #12345 arrived 3 days late and some products are damaged. This is unacceptable, I need an immediate solution. Regards, John Smith",
    
    inquiry: translations.AGENTS?.EMAIL_RESPONSE?.EXAMPLES?.INQUIRY || "Good morning, I am interested in your consulting services for my company. We are a startup with 15 employees in the technology sector and we need strategic guidance. Best regards, Maria Johnson",
    
    meeting: translations.AGENTS?.EMAIL_RESPONSE?.EXAMPLES?.MEETING || "Hello, I need to reschedule tomorrow's meeting at 10am because a family emergency arose. Would it be possible to move it to Thursday at the same time? Apologies for the inconvenience, Carlos Lopez",
    
    payment: translations.AGENTS?.EMAIL_RESPONSE?.EXAMPLES?.PAYMENT || "Hello Carlos, I'm sending you the email for the tenth time to remind you that you owe me €500. If you don't pay me I will sue you. Sincerely, Roger"
  };

  const generateResponse = async () => {
    if (!incomingEmail.trim()) return;
    
    setIsGenerating(true);
    setCurrentStep('generating');
    
    // Simular procesamiento de IA
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const response = createIntelligentResponse(incomingEmail, responseType);
    setGeneratedResponse(response);
    setCurrentStep('result');
    setIsGenerating(false);
  };

  const createIntelligentResponse = (email, type) => {
    const emailLower = email.toLowerCase();
    const responseConfig = responseTypes[type];
    
    // Get response templates for the current language
    const templates = translations.AGENTS?.EMAIL_RESPONSE?.RESPONSE_TEMPLATES || {};
    
    // Analyze email content based on language
    const isComplaint = emailLower.includes('molesto') || emailLower.includes('problema') || emailLower.includes('inaceptable') || emailLower.includes('upset') || emailLower.includes('problem') || emailLower.includes('unacceptable') || emailLower.includes('verärgert') || emailLower.includes('Problem') || emailLower.includes('inakzeptabel');
    const isInquiry = emailLower.includes('información') || emailLower.includes('interesado') || emailLower.includes('interested') || emailLower.includes('information') || emailLower.includes('interessiert') || emailLower.includes('Information');
    const isMeeting = emailLower.includes('reunión') || emailLower.includes('meeting') || emailLower.includes('reprogramar') || emailLower.includes('reschedule') || emailLower.includes('verschieben') || emailLower.includes('termin');
    const isPayment = emailLower.includes('pago') || emailLower.includes('payment') || emailLower.includes('deuda') || emailLower.includes('debt') || emailLower.includes('zahlung') || emailLower.includes('schuld') || emailLower.includes('€') || emailLower.includes('euro');
    
    // Extract name if present
    const nameMatch = email.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
    const senderName = nameMatch ? nameMatch[1] : '';
    const firstName = senderName ? senderName.split(' ')[0] : '';
    const greeting = firstName ? (templates.GREETING_WITH_NAME || templates.GREETING || 'Dear').replace('{name}', firstName) : (templates.GREETING || 'Dear');
    
    // Get response tone (formal, friendly, brief)
    const tone = type === 'professional' ? 'FORMAL' : 
                 type === 'friendly' ? 'FRIENDLY' : 
                 type === 'brief' ? 'BRIEF' : 'FORMAL';
    
    // Generate response based on context
    if (isPayment) {
      return templates.PAYMENT?.[tone]?.replace('{greeting}', greeting) || generateGenericResponse(greeting, templates, tone);
    } else if (isComplaint) {
      return templates.COMPLAINT?.[tone]?.replace('{greeting}', greeting) || generateGenericResponse(greeting, templates, tone);
    } else if (isInquiry) {
      return templates.INQUIRY?.[tone]?.replace('{greeting}', greeting) || generateGenericResponse(greeting, templates, tone);
    } else if (isMeeting) {
      return templates.MEETING?.[tone]?.replace('{greeting}', greeting) || generateGenericResponse(greeting, templates, tone);
    } else {
      return templates.GENERIC?.[tone]?.replace('{greeting}', greeting) || generateGenericResponse(greeting, templates, tone);
    }
  };

  const generateGenericResponse = (greeting, templates, tone) => {
    const fallback = `${greeting},\n\nThank you for your email. I have received your message and will review it carefully.\n\nI will respond with detailed information within 24 hours.\n\nBest regards,\n[Your name]`;
    return templates.GENERIC?.[tone]?.replace('{greeting}', greeting) || fallback;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedResponse).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const resetGenerator = () => {
    setCurrentStep('input');
    setIncomingEmail('');
    setGeneratedResponse('');
    setCopySuccess(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {getText('TITLE', '📧 Email Response Generator')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {getText('SUBTITLE', 'Generate professional email responses with AI')}
          </p>
        </div>

        {currentStep === 'input' && (
          <div className="space-y-6">
            {/* Tipo de Respuesta */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {getText('RESPONSE_TYPES', '📝 Choose Response Style:')}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(responseTypes).map(([key, config]) => (
                  <div
                    key={key}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      responseType === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setResponseType(key)}
                  >
                    <div className="font-medium text-gray-800">{config.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{config.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input del Email */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {getText('INPUT_TITLE', '� Incoming Email')}
              </h3>
              <div className="space-y-4">
                <textarea
                  value={incomingEmail}
                  onChange={(e) => setIncomingEmail(e.target.value)}
                  placeholder={getText('INPUT_PLACEHOLDER', 'Paste the email you want to respond to...')}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="6"
                />
                <button
                  onClick={generateResponse}
                  disabled={!incomingEmail.trim()}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-lg hover:from-blue-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium"
                >
                  {getText('GENERATE_BUTTON', '🚀 Generate Response')}
                </button>
              </div>
            </div>

            {/* Ejemplos */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">{getText('EXAMPLES_TITLE', '� Try Examples:')}</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {Object.entries(exampleEmails).map(([key, email]) => (
                  <div 
                    key={key}
                    className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => setIncomingEmail(email)}
                  >
                    <div className="font-medium text-gray-700 mb-2">
                      {key === 'complaint' && getText('EXAMPLE_COMPLAINT', '� Customer Complaint')}
                      {key === 'inquiry' && getText('EXAMPLE_INQUIRY', '❓ Business Inquiry')}
                      {key === 'meeting' && getText('EXAMPLE_MEETING', '📅 Meeting Request')}
                      {key === 'payment' && getText('EXAMPLE_PAYMENT', '💰 Payment Reminder')}
                    </div>
                    <div className="text-xs text-gray-600 line-clamp-3">
                      {email.substring(0, 120)}...
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 'generating' && (
          <div className="text-center space-y-6">
            <div className="animate-spin w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto"></div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {getText('GENERATING', 'Generating Response...')}
              </h3>
              <p className="text-gray-600">
                {getText('GENERATING_SUBTITLE', 'Analyzing context and creating personalized response')}
              </p>
            </div>
          </div>
        )}

        {currentStep === 'result' && generatedResponse && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {getText('RESPONSE_TITLE', '📝 Generated Response')}
              </h3>
              <p className="text-gray-600">
                {getText('RESPONSE_STYLE', 'Style')}: <span className="font-semibold text-blue-600">
                  {responseTypes[responseType].name}
                </span>
              </p>
            </div>

            {/* Respuesta Generada */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-800">{getText('RESPONSE_READY', '📝 Your Response Ready')}</h4>
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    copySuccess 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {copySuccess ? getText('COPY_SUCCESS', '✅ Copied to clipboard!') : getText('COPY_BUTTON', '📋 Copy to Clipboard')}
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
                {generatedResponse}
              </div>
            </div>

            {/* Email Original */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-4">{getText('ORIGINAL_EMAIL', '📨 Original Email')}</h4>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                {incomingEmail}
              </div>
            </div>

            <div className="text-center space-x-4">
              <button
                onClick={() => setCurrentStep('input')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                {getText('GENERATE_ANOTHER', '🔄 Generate Another Response')}
              </button>
              <button
                onClick={resetGenerator}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
              >
                {getText('NEW_EMAIL', '🆕 New Email')}
              </button>
            </div>
          </div>
        )}

        {/* Métricas de Utilidad */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-center text-lg font-semibold text-gray-800 mb-4">
            {getText('BENEFITS_TITLE', '💼 Generator Benefits')}
          </h4>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">{getText('TIME_SAVED', 'Time Saved')}</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">{getText('PROFESSIONALISM', 'Professionalism')}</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-600">{getText('RESPONSE_STYLES', 'Response Styles')}</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-orange-600">30s</div>
              <div className="text-sm text-gray-600">{getText('GENERATION_TIME', 'Generation Time')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailResponseAgent;
