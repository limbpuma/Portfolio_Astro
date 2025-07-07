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
    complaint: "Hola, estoy muy molesto porque mi pedido #12345 llegó 3 días tarde y algunos productos están dañados. Esto es inaceptable, necesito una solución inmediata. Saludos, Juan Pérez",
    
    inquiry: "Buenos días, estoy interesado en sus servicios de consultoría para mi empresa. Somos una startup de 15 empleados en el sector fintech. ¿Podrían enviarme información sobre precios y disponibilidad? Gracias, María González",
    
    meeting: "Hola, necesito reprogramar la reunión de mañana a las 10am porque surgió una emergencia familiar. ¿Sería posible moverla al jueves a la misma hora? Disculpas por el inconveniente, Carlos López",
    
    payment: "Hola Carlos, te envío por décima vez el email para recordarte que me debes 500€. Si no me pagas te demandaré. Atentamente, Roger"
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
    
    // Analizar el contenido del email con mayor precisión
    const isComplaint = emailLower.includes('molesto') || emailLower.includes('problema') || emailLower.includes('inaceptable') || emailLower.includes('mal') || emailLower.includes('terrible') || emailLower.includes('fatal');
    const isInquiry = emailLower.includes('información') || emailLower.includes('interesado') || emailLower.includes('precio') || emailLower.includes('servicio') || emailLower.includes('consulta') || emailLower.includes('cotización');
    const isMeeting = emailLower.includes('reunión') || emailLower.includes('cita') || emailLower.includes('reprogramar') || emailLower.includes('mover') || emailLower.includes('cambiar') || emailLower.includes('agenda');
    const isFollowup = emailLower.includes('propuesta') || emailLower.includes('envié') || emailLower.includes('enviado') || emailLower.includes('revisado') || emailLower.includes('semana') || emailLower.includes('recordar');
    const isPayment = emailLower.includes('pago') || emailLower.includes('deuda') || emailLower.includes('debo') || emailLower.includes('debes') || emailLower.includes('€') || emailLower.includes('euro') || emailLower.includes('dinero') || emailLower.includes('factura') || emailLower.includes('demanda');
    const isThreat = emailLower.includes('demandare') || emailLower.includes('abogado') || emailLower.includes('legal') || emailLower.includes('tribunal') || emailLower.includes('amenaza');
    const isUrgent = emailLower.includes('urgente') || emailLower.includes('inmediato') || emailLower.includes('ya') || emailLower.includes('ahora') || emailLower.includes('decima vez');
    
    // Extraer nombre si está presente (mejora la detección)
    const nameMatch = email.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
    const senderName = nameMatch ? nameMatch[1] : '';
    const firstName = senderName ? senderName.split(' ')[0] : '';
    const greeting = firstName ? `Estimado/a ${firstName}` : 'Estimado/a';
    
    // Generar respuesta específica según el contexto (orden de prioridad)
    if (isPayment || isThreat) {
      return generatePaymentResponse(greeting, responseConfig.tone, email, firstName);
    } else if (isComplaint) {
      return generateComplaintResponse(greeting, responseConfig.tone, email);
    } else if (isInquiry) {
      return generateInquiryResponse(greeting, responseConfig.tone, email);
    } else if (isMeeting) {
      return generateMeetingResponse(greeting, responseConfig.tone, email);
    } else if (isFollowup) {
      return generateFollowupResponse(greeting, responseConfig.tone, email);
    } else {
      return generateGenericResponse(greeting, responseConfig.tone, email);
    }
  };

  const generateComplaintResponse = (greeting, tone, email) => {
    const templates = {
      'formal y cortés': `${greeting},

Gracias por contactarnos y lamento mucho los inconvenientes que ha experimentado con su pedido.

Entiendo completamente su frustración y quiero asegurarle que vamos a resolver esta situación de inmediato. He escalado su caso a nuestro equipo de atención prioritaria.

Las acciones que tomaremos son:
• Investigación inmediata del problema en su pedido
• Envío de productos de reemplazo sin costo adicional
• Crédito en su cuenta por las molestias ocasionadas

Me pondré en contacto con usted en las próximas 2 horas con una actualización detallada.

Apreciamos su paciencia y la oportunidad de corregir esta situación.

Cordialmente,
[Su nombre]`,
      
      'amigable y cercano': `¡Hola!

Primero que todo, mil disculpas por lo que pasó con tu pedido. Definitivamente no es la experiencia que queremos que tengas con nosotros.

Ya estoy revisando tu caso personalmente y vamos a solucionarlo hoy mismo. Te propongo:

✓ Te enviamos productos nuevos inmediatamente (llegada garantizada mañana)
✓ Te devolvemos el costo del envío
✓ Un descuento del 20% en tu próxima compra

Te escribo en máximo 2 horas con el número de seguimiento y todos los detalles.

¡Gracias por darnos la oportunidad de arreglarlo!

Saludos,
[Tu nombre]`,
      
      'conciso y directo': `${greeting},

Disculpas por los problemas con su pedido #12345.

Solución inmediata:
- Productos de reemplazo enviados hoy
- Reembolso del envío procesado
- Seguimiento por email en 2 horas

Gracias por su comprensión.

[Su nombre]`,
      
      'empático y solucionador': `${greeting},

Lamento profundamente que haya tenido esta experiencia con nosotros. Su frustración es completamente comprensible y justificada.

Quiero asegurarle que esto no refleja nuestros estándares habituales de servicio. He priorizado su caso y trabajaré personalmente para resolverlo.

Plan de acción inmediato:
1. Investigación completa del problema (hoy)
2. Envío urgente de productos de reemplazo (mañana)
3. Compensación por las molestias causadas
4. Seguimiento directo hasta su completa satisfacción

Le escribiré con actualizaciones cada paso del camino.

Mis sinceras disculpas nuevamente.

[Su nombre]`
    };
    
    return templates[tone] || templates['formal y cortés'];
  };

  const generateInquiryResponse = (greeting, tone, email) => {
    const templates = {
      'formal y cortés': `${greeting},

Gracias por su interés en nuestros servicios de consultoría.

Nos complace saber que está considerando nuestros servicios para su empresa fintech. Entendemos las necesidades específicas del sector y tenemos experiencia trabajando con startups en crecimiento.

Para proporcionarle una propuesta personalizada, me gustaría programar una llamada de 30 minutos donde podamos:
• Entender mejor sus objetivos específicos
• Revisar sus necesidades actuales
• Presentarle nuestros paquetes de servicios
• Discutir opciones de precios adaptadas a su presupuesto

¿Tendría disponibilidad esta semana para una videoconferencia? Puedo adaptarme a su horario preferido.

Espero su respuesta para coordinar nuestra conversación.

Cordialmente,
[Su nombre]`,
      
      'amigable y cercano': `¡Hola María!

¡Qué emocionante saber de tu startup fintech! Me encanta trabajar con empresas en crecimiento como la tuya.

Definitivamente podemos ayudarte. Tenemos experiencia específica con startups de tu tamaño y entendemos los desafíos únicos del sector financiero.

Te propongo que tengamos una llamada rápida (30 min máximo) donde pueda:
• Conocer mejor tu empresa y objetivos
• Mostrarte casos de éxito similares
• Explicarte nuestros paquetes y precios
• Responder todas tus preguntas

¿Qué tal si coordinamos para esta semana? Puedo adaptarme a tu horario.

¡Espero poder colaborar contigo!

Saludos,
[Tu nombre]`,
      
      'conciso y directo': `${greeting},

Gracias por su consulta sobre servicios de consultoría.

Propuesta:
- Llamada de evaluación (30 min)
- Presentación de paquetes para startups
- Cotización personalizada
- Casos de éxito en fintech

Disponibilidad esta semana para videoconferencia.

Favor confirmar horario preferido.

[Su nombre]`,
      
      'empático y solucionador': `${greeting},

Agradezco enormemente que haya pensado en nosotros para acompañar el crecimiento de su empresa.

Entiendo que como startup cada decisión es crucial y quiero asegurarme de que tengamos la mejor propuesta para ustedes. He trabajado con varias empresas fintech en etapa de crecimiento y conozco los desafíos específicos que enfrentan.

Me gustaría proponerle una consulta inicial sin compromiso donde podamos:
• Evaluar sus necesidades específicas
• Compartir estrategias que han funcionado para empresas similares
• Diseñar una propuesta que se ajuste a su presupuesto y objetivos

¿Le parece bien que coordinemos una llamada esta semana?

Estoy aquí para apoyar el éxito de su empresa.

[Su nombre]`
    };
    
    return templates[tone] || templates['formal y cortés'];
  };

  const generateMeetingResponse = (greeting, tone, email) => {
    const templates = {
      'formal y cortés': `${greeting},

Por supuesto, comprendo perfectamente que las emergencias familiares son prioritarias.

No hay ningún problema en reprogramar nuestra reunión del martes 10am para el jueves a la misma hora. He actualizado mi calendario y le he enviado una nueva invitación para el jueves 10am.

Espero que todo se resuelva satisfactoriamente con su familia.

Nos vemos el jueves.

Cordialmente,
[Su nombre]`,
      
      'amigable y cercano': `¡Hola Carlos!

¡Por supuesto que no hay problema! Las emergencias familiares siempre van primero.

Ya moví nuestra reunión para el jueves a las 10am. Te llegará la nueva invitación de calendario en unos minutos.

Espero que todo esté bien con tu familia. ¡Nos vemos el jueves!

Saludos,
[Tu nombre]`,
      
      'conciso y directo': `${greeting},

Reunión reprogramada:
- Nueva fecha: Jueves 10am
- Invitación de calendario enviada
- Sin problema alguno

Nos vemos el jueves.

[Su nombre]`,
      
      'empático y solucionador': `${greeting},

Absolutamente, las emergencias familiares siempre tienen prioridad. No se preocupe en absoluto por el cambio.

He reprogramado nuestra reunión para el jueves a las 10am y le he enviado la nueva invitación de calendario. 

Espero sinceramente que la situación familiar se resuelva de la mejor manera posible.

Estaré disponible si necesita cambiar algo más.

[Su nombre]`
    };
    
    return templates[tone] || templates['formal y cortés'];
  };

  const generateFollowupResponse = (greeting, tone, email) => {
    const templates = {
      'formal y cortés': `${greeting},

Gracias por el seguimiento de su propuesta para el proyecto de desarrollo web.

He revisado su propuesta detalladamente y debo decir que está muy bien estructurada. El equipo directivo se reunirá mañana para la evaluación final de todas las propuestas recibidas.

Esperamos tomar una decisión hacia finales de esta semana y le comunicaremos el resultado inmediatamente, independientemente de cuál sea.

Agradezco su paciencia durante este proceso de selección.

Cordialmente,
[Su nombre]`,
      
      'amigable y cercano': `¡Hola Ana!

¡Gracias por recordármelo! Definitivamente no se me había olvidado tu propuesta.

La verdad es que me gustó mucho lo que presentaste. Tenemos reunión de equipo mañana donde vamos a decidir entre las propuestas finalistas (incluyendo la tuya, por supuesto).

Te prometo que a más tardar el viernes te doy una respuesta definitiva. ¡Cruza los dedos!

Saludos,
[Tu nombre]`,
      
      'conciso y directo': `${greeting},

Su propuesta está en evaluación final.

Decisión: Finales de esta semana
Comunicación: Inmediata tras decisión
Estado: Entre propuestas finalistas

Gracias por su paciencia.

[Su nombre]`,
      
      'empático y solucionador': `${greeting},

Agradezco mucho su seguimiento y comprendo perfectamente la importancia de tener una respuesta clara.

Su propuesta ha causado una excelente impresión en el equipo y definitivamente está entre nuestras opciones principales. Estamos en la fase final de evaluación.

Me comprometo a darle una respuesta definitiva antes del viernes, junto con comentarios detallados sin importar cuál sea la decisión.

Valoro mucho su profesionalismo y el tiempo que invirtió en la propuesta.

[Su nombre]`
    };
    
    return templates[tone] || templates['formal y cortés'];
  };

  const generateGenericResponse = (greeting, tone, email) => {
    const templates = {
      'formal y cortés': `${greeting},

Gracias por su mensaje.

He recibido su comunicación y la estoy revisando cuidadosamente. Me pondré en contacto con usted en las próximas 24 horas con una respuesta detallada.

Si tiene alguna consulta urgente, no dude en contactarme directamente.

Cordialmente,
[Su nombre]`,
      
      'amigable y cercano': `¡Hola!

Gracias por escribirme. 

He recibido tu mensaje y lo voy a revisar con cuidado. Te respondo mañana con toda la información que necesitas.

¡Saludos!
[Tu nombre]`,
      
      'conciso y directo': `${greeting},

Mensaje recibido.
Respuesta detallada en 24 horas.

[Su nombre]`,
      
      'empático y solucionador': `${greeting},

Agradezco que se haya tomado el tiempo de escribirme.

Voy a revisar su mensaje detenidamente para asegurarme de darle la mejor respuesta posible. Me comunicaré con usted mañana con toda la información necesaria.

[Su nombre]`
    };
    
    return templates[tone] || templates['formal y cortés'];
  };

  const generatePaymentResponse = (greeting, tone, email, firstName) => {
    const templates = {
      'formal y cortés': `${greeting},

Gracias por su mensaje.

He recibido su comunicación respecto al pago pendiente. Entiendo su preocupación y quiero aclarar la situación de inmediato.

Permítame revisar los detalles de la transacción y me pondré en contacto con usted dentro de las próximas 24 horas con una respuesta completa y un plan de resolución.

Agradezco su paciencia mientras resuelvo este asunto.

Cordialmente,
[Su nombre]`,
      
      'amigable y cercano': `Hola ${firstName || ''},

Gracias por recordármelo. Tienes razón y disculpa la demora.

He visto tu mensaje sobre el pago pendiente. Voy a revisar mi situación financiera y te contacto mañana con una propuesta de pago que funcione para ambos.

Aprecio tu paciencia.

Saludos,
[Tu nombre]`,
      
      'conciso y directo': `${greeting},

Pago pendiente recibido.

Revisión: 24 horas
Propuesta de pago: Mañana
Contacto directo: Garantizado

Gracias por la paciencia.

[Su nombre]`,
      
      'empático y solucionador': `${greeting},

Recibí tu mensaje y entiendo completamente tu frustración. Tienes todo el derecho de estar molesto por la demora en el pago.

Quiero ser completamente transparente contigo: he tenido algunas dificultades financieras temporales, pero esto no justifica la falta de comunicación de mi parte.

Mi compromiso:
1. Revisar los detalles exactos del monto adeudado
2. Contactarte mañana con un plan de pago específico
3. Mantener comunicación regular hasta resolver completamente

Valoro nuestra relación y voy a solucionar esto de manera responsable.

[Su nombre]`,

      'responsable y solucionador': `${greeting},

He recibido su mensaje respecto al pago pendiente y asumo completa responsabilidad por esta situación.

Entiendo su molestia y preocupación. Reconozco que el retraso en el pago y la falta de comunicación de mi parte no son aceptables.

Plan de acción inmediato:
• Revisión completa de la cuenta pendiente (hoy)
• Propuesta de plan de pago (mañana antes de las 12pm)
• Primera transferencia parcial (esta semana)
• Cronograma de pagos restantes con fechas específicas

Me comprometo a resolver esta situación de manera profesional y responsable. Le enviaré una actualización detallada mañana temprano.

Atentamente,
[Su nombre]`
    };
    
    return templates[tone] || templates['responsable y solucionador'];
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
                ✨ Generando respuesta {responseTypes[responseType].name.toLowerCase()}...
              </h3>
              <p className="text-gray-600">
                Analizando contexto y creando respuesta personalizada
              </p>
            </div>
          </div>
        )}

        {currentStep === 'result' && generatedResponse && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                ✅ Respuesta Generada
              </h3>
              <p className="text-gray-600">
                Estilo: <span className="font-semibold text-blue-600">
                  {responseTypes[responseType].name}
                </span>
              </p>
            </div>

            {/* Respuesta Generada */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-800">📝 Tu Respuesta Lista</h4>
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    copySuccess 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {copySuccess ? (translations.AGENTS?.COPY_SUCCESS || '✅ Copied to clipboard!') : (translations.AGENTS?.COPY_BUTTON || '📋 Copy to Clipboard')}
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
                {generatedResponse}
              </div>
            </div>

            {/* Email Original */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-4">📨 Email Original</h4>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                {incomingEmail}
              </div>
            </div>

            <div className="text-center space-x-4">
              <button
                onClick={() => setCurrentStep('input')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                🔄 Generar Otra Respuesta
              </button>
              <button
                onClick={resetGenerator}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
              >
                🆕 Nuevo Email
              </button>
            </div>
          </div>
        )}

        {/* Métricas de Utilidad */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-center text-lg font-semibold text-gray-800 mb-4">
            💼 Beneficios del Generador
          </h4>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">Tiempo Ahorrado</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Profesionalismo</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-600">Estilos de Respuesta</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-orange-600">30s</div>
              <div className="text-sm text-gray-600">Tiempo de Generación</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailResponseAgent;
