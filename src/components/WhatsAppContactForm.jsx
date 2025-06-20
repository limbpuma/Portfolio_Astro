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

  const generateWhatsAppMessage = () => {
    const currentLang = i18n.LANG || 'en';
    const opportunityText = opportunityTypes[formData.opportunityType]?.[currentLang] || opportunityTypes[formData.opportunityType]?.en;

    let message = '';
    
    if (currentLang === 'de') {
      message = `¡Hallo Limber! 👋

Ich bin ${formData.name || '[Name]'}${formData.company ? ` von ${formData.company}` : ''}.

Ich habe dein Portfolio gesehen und bin interessiert an deiner Expertise in:
✅ Microsoft AI-900 Zertifizierung
✅ LangChain & OpenAI APIs  
✅ AI-Enhanced Development

Art der Gelegenheit: ${opportunityText}

${formData.message ? `Nachricht: ${formData.message}` : ''}

Könnten wir über mögliche Zusammenarbeit sprechen?

Beste Grüße!`;
    } else if (currentLang === 'es') {
      message = `¡Hola Limber! 👋

Soy ${formData.name || '[Nombre]'}${formData.company ? ` de ${formData.company}` : ''}.

He visto tu portfolio y me interesa tu expertise en:
✅ Certificación Microsoft AI-900
✅ LangChain & OpenAI APIs
✅ Desarrollo Potenciado por IA

Tipo de oportunidad: ${opportunityText}

${formData.message ? `Mensaje: ${formData.message}` : ''}

¿Podríamos conversar sobre posibles colaboraciones?

¡Saludos!`;
    } else {
      message = `Hello Limber! 👋

I'm ${formData.name || '[Name]'}${formData.company ? ` from ${formData.company}` : ''}.

I've seen your portfolio and I'm interested in your expertise in:
✅ Microsoft AI-900 Certification
✅ LangChain & OpenAI APIs
✅ AI-Enhanced Development

Opportunity type: ${opportunityText}

${formData.message ? `Message: ${formData.message}` : ''}

Could we discuss potential collaboration opportunities?

Best regards!`;
    }

    return encodeURIComponent(message);
  };  const handleWhatsAppSend = () => {
    if (!privacyAccepted) {
      const alertMessage = i18n.CONTACT?.PRIVACY_REQUIRED || 
        'Please accept the privacy policy / Bitte akzeptieren Sie die Datenschutzerklärung';
      alert(alertMessage);
      return;
    }
    
    setIsGenerating(true);
      // Simular "AI thinking" por 1 segundo
    setTimeout(() => {
      const message = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/4917645754360?text=${message}`;
      window.open(whatsappUrl, '_blank');
      setIsGenerating(false);
    }, 1500);
  };

  const isFormValid = formData.name.trim().length > 0 && privacyAccepted;

  return (
    <div className="w-full max-w-md mx-auto bg-base-100 rounded-2xl shadow-xl p-6 border border-primary/20">
      {/* Header con estilo AI */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-3">
          <span className="text-2xl">🤖</span>
          <span className="font-semibold text-primary">
            {i18n.CONTACT?.SMART_CONTACT || 'Smart Contact'}
          </span>
        </div>
        <p className="text-sm text-base-content/70">
          {i18n.CONTACT?.SMART_DESCRIPTION || 'AI-powered message generation for WhatsApp'}
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
            placeholder={i18n.CONTACT?.MESSAGE_PLACEHOLDER || 'Tell me about your project or opportunity...'}
            className="textarea textarea-bordered textarea-primary w-full h-24 resize-none transition-all duration-300 focus:scale-[1.02]"          />
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
              {i18n.CONTACT?.GENERATING || 'Generating AI message...'}
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span className="text-xl">📱</span>
              {i18n.CONTACT?.SEND_WHATSAPP || 'Send via WhatsApp'}
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
    </div>
  );
};

export default WhatsAppContactForm;
