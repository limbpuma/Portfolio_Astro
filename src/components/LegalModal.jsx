import React, { useState } from 'react';

const LegalModal = ({ title, content, closeButtonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        className="hover:text-primary px-4 py-2 text-lg no-underline font-bold cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {title}
      </a>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-base-100 p-6 rounded-lg max-w-lg mx-auto text-center shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
            <p className="mb-4">{content}</p>
            <button
              className="btn btn-primary rounded-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-600 bg-primary-500 text-white px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              {closeButtonText}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LegalModal;
