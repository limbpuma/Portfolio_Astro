
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  const handleDeny = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="card w-96 bg-neutral text-neutral-content fixed bottom-0 mb-4 mx-4 left-0 right-0">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Cookies!</h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAccept}>Accept</button>
          <button className="btn btn-ghost" onClick={handleDeny}>Deny</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
