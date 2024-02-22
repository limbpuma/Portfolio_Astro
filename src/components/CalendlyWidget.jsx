// CalendlyWidget.jsx
import React, { useEffect } from 'react';

const CalendlyWidget = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-base-200 p-4 rounded-lg shadow">
      <div className="calendly-inline-widget w-full max-w-4xl" data-url={url} style={{ height: "700px" }}></div>
    </div>
  );
};

export default CalendlyWidget;
