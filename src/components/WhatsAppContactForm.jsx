import React, { useState } from 'react';

const WhatsAppContactForm = ({ i18n }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    opportunityType: 'internship',
    message: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  
  // Modal states
  const [showSendModal, setShowSendModal] = useState(false);
  const [finalMessage, setFinalMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const opportunityTypes = {
    internship: {
      en: '🎯 Internship (6 months, unpaid)',
      de: '🎯 Praktikum (6 Monate, unbezahlt)',
      es: '🎯 Prácticas (6 meses, no remuneradas)'
    },
    project: {
      en: '💼 Project Collaboration',
      de: '💼 Projekt Zusammenarbeit',
      es: '💼 Colaboración en Proyecto'
    },
    consultation: {
      en: '💡 AI Consultation',
      de: '💡 KI-Beratung',
      es: '💡 Consultoría IA'
    },
    other: {
      en: '🤝 Other Opportunity',
      de: '🤝 Andere Gelegenheit',
      es: '🤝 Otra Oportunidad'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateBasicWhatsAppMessage = () => {
    const currentLang = i18n.LANG || 'en';
    const opportunityText = opportunityTypes[formData.opportunityType]?.[currentLang] || opportunityTypes[formData.opportunityType]?.en;

    let message = '';
    
    if (currentLang === 'de') {
      message = `Hallo Limber,

ich bin ${formData.name || '[Name]'}${formData.company ? ` von ${formData.company}` : ''}.

${opportunityText}

${formData.message ? `${formData.message}` : 'Ich bin interessiert an einer Zusammenarbeit.'}

Freundliche Grüße`;
    } else if (currentLang === 'es') {
      message = `Hola Limber,

soy ${formData.name || '[Nombre]'}${formData.company ? ` de ${formData.company}` : ''}.

${opportunityText}

${formData.message ? `${formData.message}` : 'Estoy interesado en colaborar contigo.'}

Saludos`;
    } else {
      message = `Hi Limber,

I'm ${formData.name || '[Name]'}${formData.company ? ` from ${formData.company}` : ''}.

${opportunityText}

${formData.message ? `${formData.message}` : 'I\'m interested in working together.'}

Best regards`;
    }

    return message;
  };

  const handleWhatsAppSend = async () => {
    if (!privacyAccepted) {
      const alertMessage = i18n.CONTACT?.PRIVACY_REQUIRED || 
        'Please accept the privacy policy / Bitte akzeptieren Sie die Datenschutzerklärung';
      alert(alertMessage);
      return;
    }
    
    setIsGenerating(true);
    
    try {
      // Generate simple message
      const message = generateBasicWhatsAppMessage();
      setFinalMessage(message);
      setShowSendModal(true);
    } catch (error) {
      console.error('Error generating message:', error);
      // Emergency fallback
      const basicMessage = `Hello Limber! I'm interested in discussing opportunities. Name: ${formData.name}`;
      setFinalMessage(basicMessage);
      setShowSendModal(true);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleConfirmSend = () => {
    // Use WhatsApp Web - most reliable solution
    const phoneNumber = "4917645754360";
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(finalMessage)}`;
    
    try {
      // Open WhatsApp Web in a new tab
      window.open(whatsappWebUrl, '_blank', 'noopener,noreferrer');
      
      // Close the modal after a short delay
      setTimeout(() => {
        setShowSendModal(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error opening WhatsApp Web:', error);
      // Fallback: copy message and show instructions
      handleCopyMessage();
      
      const currentLang = i18n.LANG || 'en';
      const instructions = i18n.CONTACT?.COPY_SUCCESS_INSTRUCTIONS || 
        '✅ Message copied!\n\n📱 Next steps:\n1. Open WhatsApp\n2. Start chat with +49 176 45754360\n3. Paste message (Ctrl+V)\n4. Send';
      
      alert(instructions);
      setShowSendModal(false);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(finalMessage);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy message:', error);
    }
  };

  const isFormValid = formData.name.trim().length > 0 && privacyAccepted;

  return (
    <div className="w-full max-w-md mx-auto bg-base-100 rounded-2xl shadow-xl p-6 border border-primary/20">      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-3">
          <span className="text-xl">📝</span>
          <span className="font-semibold text-primary">
            {i18n.CONTACT?.CONTACT_FORM || 'Contact Form'}
          </span>
        </div>
        <p className="text-sm text-base-content/70">
          {i18n.CONTACT?.CONTACT_DESCRIPTION || 'Send me a message directly to WhatsApp'}
        </p>
      </div>

      {/* Formulario */}
      <div className="space-y-4">
        {/* Nombre */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              {i18n.CONTACT?.NAME || 'Name'} *
            </span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={i18n.CONTACT?.NAME_PLACEHOLDER || 'Your name'}
            className="input input-bordered input-primary w-full transition-all duration-300 focus:scale-[1.02]"
            required
          />
        </div>

        {/* Empresa */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              {i18n.CONTACT?.COMPANY || 'Company'}
            </span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder={i18n.CONTACT?.COMPANY_PLACEHOLDER || 'Company name (optional)'}
            className="input input-bordered w-full transition-all duration-300 focus:scale-[1.02]"
          />
        </div>

        {/* Tipo de oportunidad */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              {i18n.CONTACT?.OPPORTUNITY_TYPE || 'Opportunity Type'}
            </span>
          </label>
          <select
            name="opportunityType"
            value={formData.opportunityType}
            onChange={handleInputChange}
            className="select select-bordered select-primary w-full transition-all duration-300 focus:scale-[1.02]"
          >
            {Object.entries(opportunityTypes).map(([key, translations]) => (
              <option key={key} value={key}>
                {translations[i18n.LANG] || translations.en}
              </option>
            ))}
          </select>
        </div>

        {/* Mensaje */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              {i18n.CONTACT?.MESSAGE || 'Message'}
            </span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={i18n.CONTACT?.BASIC_MESSAGE_PLACEHOLDER || 'Tell me about your project or opportunity...'}
            className="textarea textarea-bordered textarea-primary w-full h-24 resize-none transition-all duration-300 focus:scale-[1.02]"
          />
          <label className="label">
            <span className="label-text-alt text-base-content/60 text-xs">
              📝 Your message will be sent directly to WhatsApp
            </span>
          </label>
        </div>
      </div>

      {/* Checkbox Datenschutz */}
      <div className="mt-4">
        <label className="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="checkbox checkbox-primary checkbox-sm"
          />          <span className="label-text text-xs">
            {i18n.CONTACT?.PRIVACY_CHECKBOX || 
              (i18n.LANG === 'de' ? 
                'Ich akzeptiere die Datenschutzerklärung und stimme der Kontaktaufnahme über WhatsApp zu.' :
                i18n.LANG === 'es' ? 
                'Acepto la Política de Privacidad y el contacto vía WhatsApp.' :
                'I accept the Privacy Policy and WhatsApp contact.'
              )
            }
          </span>
        </label>
      </div>

      {/* Botón WhatsApp */}
      <div className="mt-6">
        <button
          onClick={handleWhatsAppSend}
          disabled={!isFormValid || isGenerating}
          className={`btn btn-primary w-full text-white font-semibold py-3 rounded-xl transition-all duration-300 ${
            isGenerating ? 'loading' : ''
          } ${!isFormValid ? 'btn-disabled' : 'hover:scale-105 hover:shadow-lg'}`}
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <span className="loading loading-spinner loading-sm"></span>
              {i18n.CONTACT?.GENERATING_BASIC || 'Creating message...'}
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span className="text-xl">📋</span>
              {i18n.CONTACT?.PREPARE_MESSAGE || 'Prepare Message for WhatsApp'}
            </span>
          )}
        </button>
      </div>

      {/* Info adicional */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-success">
          <span>✅</span>
          <span>{i18n.CONTACT?.RESPONSE_TIME || 'Response within 24h'}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-info">
          <span>📍</span>
          <span>{i18n.CONTACT?.LOCATION || 'Available in Dortmund area'}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-warning">
          <span>🎯</span>
          <span>{i18n.CONTACT?.AVAILABILITY || 'Internship from August 2025'}</span>        </div>
      </div>

      {/* Confirmation Modal */}
      {showSendModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-base-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="font-bold text-lg">
                      {i18n.CONTACT?.CONFIRM_SEND_TITLE || 'Confirm WhatsApp Message'}
                    </h3>
                    <p className="text-sm text-base-content/70">
                      {i18n.CONTACT?.CONFIRM_SEND_SUBTITLE || 'Review your message before sending'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSendModal(false)}
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {/* Message Type Indicator */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="badge badge-ghost gap-2">
                    <span>📝</span> Message
                  </span>
                  <span className="badge badge-outline text-xs">
                    {i18n.LANG === 'de' ? '🇩🇪 Deutsch' : 
                     i18n.LANG === 'es' ? '🇪🇸 Español' : 
                     '🇺🇸 English'}
                  </span>
                </div>
              </div>

              {/* Message Preview */}
              <div className="bg-base-200 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-base-content/70">
                    {i18n.CONTACT?.MESSAGE_PREVIEW_LABEL || 'Message to be sent:'}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border">
                  <textarea
                    value={finalMessage}
                    onChange={(e) => setFinalMessage(e.target.value)}
                    className="w-full h-48 resize-none bg-transparent border-none outline-none text-sm leading-relaxed"
                    style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}
                    placeholder={i18n.CONTACT?.EDIT_MESSAGE_HINT || 'You can edit this message before sending...'}
                  />
                </div>
                <div className="mt-2 text-xs text-base-content/60">
                  {i18n.CONTACT?.EDIT_MESSAGE_TIP || 'You can edit the message above before sending'}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-base-300 bg-base-50">
              <div className="flex flex-col gap-3">
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleCopyMessage}
                    className="btn btn-outline flex-1"
                    disabled={!finalMessage.trim()}
                  >
                    <span className="flex items-center gap-2">
                      {isCopied ? (
                        <>
                          <span>✅</span>
                          {i18n.CONTACT?.COPIED || 'Copied!'}
                        </>
                      ) : (
                        <>
                          <span>📋</span>
                          {i18n.CONTACT?.COPY_MESSAGE || 'Copy Message'}
                        </>
                      )}
                    </span>
                  </button>
                  <button
                    onClick={handleConfirmSend}
                    className="btn btn-primary flex-1"
                    disabled={!finalMessage.trim()}
                  >
                    <span className="flex items-center gap-2">
                      <span>�</span>
                      {i18n.CONTACT?.COPY_AND_INSTRUCT || 'Copy & Show Instructions'}
                    </span>
                  </button>
                </div>

                {/* Cancel Button */}
                <button
                  onClick={() => setShowSendModal(false)}
                  className="btn btn-ghost w-full"
                >
                  {i18n.CONTACT?.CANCEL_SEND || 'Cancel'}
                </button>

                {/* Contact Info & Instructions */}
                <div className="text-center p-4 bg-base-200 rounded-lg">
                  <div className="text-sm font-medium text-base-content mb-2">
                    📱 {i18n.CONTACT?.WHATSAPP_CONTACT || 'WhatsApp Contact'}
                  </div>
                  <div className="text-lg font-mono font-bold text-primary mb-3">
                    +49 176 45754360
                  </div>
                  <div className="text-xs text-base-content/70 space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <span>✅</span>
                      <span>{i18n.CONTACT?.RESPONSE_TIME || 'Response within 24h'}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>📍</span>
                      <span>{i18n.CONTACT?.LOCATION || 'Available in Dortmund area'}</span>
                    </div>
                  </div>
                </div>

                {/* Manual Instructions */}
                <div className="text-center text-xs text-base-content/60 mt-2">
                  <div className="font-medium mb-1">
                    {i18n.CONTACT?.HOW_TO_SEND || 'How to send:'}
                  </div>
                  <div>
                    {i18n.CONTACT?.MANUAL_STEPS || '1. Copy message → 2. Open WhatsApp → 3. Start chat → 4. Paste & send'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppContactForm;
