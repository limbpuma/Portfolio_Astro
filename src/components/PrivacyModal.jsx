import React, { useState } from 'react';

const PrivacyModal = ({ title, content, dataCollection, dataUsage, dataProtection, userRights, closeButtonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        className="hover:text-primary px-4 py-2 text-lg no-underline font-bold cursor-pointer"
        onClick={() => setIsOpen(true)}
      >{title}</a>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-y-auto">
          <div className="modal-box relative bg-base-100 p-6 rounded-lg max-w-lg mx-auto shadow-lg">
            
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{content}</p>
            <h3 className="font-bold">Information Collection</h3>
            <p>{dataCollection}</p>
            <h3 className="font-bold">Use of Information</h3>
            <p>{dataUsage}</p>
            <h3 className="font-bold">Protecting Your Information</h3>
            <p>{dataProtection}</p>
            <h3 className="font-bold">Your Rights</h3>
            <p>{userRights}</p>
            <button
              className="btn btn-primary rounded-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-600 bg-primary-500 text-white px-4 py-2"
              onClick={() => setIsOpen(false)}
            >{closeButtonText}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyModal;
