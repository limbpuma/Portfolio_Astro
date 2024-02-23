// src/components/CookieConsent.jsx
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
    // Aquí puedes añadir más lógica, como tracking de aceptación
  };

  const handleDeny = () => {
    setShowConsent(false);
    // Aquí puedes manejar la negación del consentimiento si es necesario
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="max-w-xl mx-auto text-center">
        <p>Usamos cookies por alguna razón. ¿Aceptas su uso?</p>
        <button className="btn btn-primary m-2" onClick={handleAccept}>Aceptar</button>
        <button className="btn btn-ghost m-2" onClick={handleDeny}>Rechazar</button>
      </div>
    </div>
  );
};

export default CookieConsent;
