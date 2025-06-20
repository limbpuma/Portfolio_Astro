import React, { useState, useEffect } from 'react';
import { getI18N } from '../i18n';

const CookieConsent = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="card max-w-lg w-full mx-4 bg-base-100 shadow-2xl border border-primary/20">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary">{i18n.COOKIES_TEXT.TITLE}</h2>
          <p className="text-base-content/80">{i18n.COOKIES_TEXT.DESCRIPTION}</p>
          <div className="card-actions justify-end gap-3 mt-4">
            <button className="btn btn-primary" onClick={handleAccept}>{i18n.COOKIES_TEXT.ACCEPT}</button>
            <button className="btn btn-outline" onClick={handleDeny}>{i18n.COOKIES_TEXT.DENY}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
