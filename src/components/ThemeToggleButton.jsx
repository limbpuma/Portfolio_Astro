import React, { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  // Inicializamos el estado sin asumir el tema hasta que podamos verificarlo en el cliente
  const [isnight, setIsnight] = useState(null);

  useEffect(() => {
    // Verificar el tema actual solo una vez cuando el componente se monta en el cliente
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'night'; // Asumimos 'night' si no está definido
    setIsnight(currentTheme === 'night');
  }, []);

  const toggleTheme = () => {
  const newTheme = isnight ? 'cupcake' : 'night';
  document.documentElement.setAttribute('data-theme', newTheme);
  if (newTheme === 'night') {
    document.documentElement.classList.add('night');
  } else {
    document.documentElement.classList.remove('night');
  }
  setIsnight(!isnight);
};


  // Prevenir renderización hasta que el estado inicial se haya establecido
  if (isnight === null) return null;

  return (
    <button onClick={toggleTheme} className="flex cursor-pointer gap-2 items-center hover:text-primary btn-ghost rounded-full p-2">
      {/* Icono Sol */}
      {!isnight && (
        <i className="fas fa-moon"></i>
        
      )}
      {/* Icono Luna */}
      {isnight && (
        <i className="fas fa-sun"></i>
      )}
    </button>
  );
};

export default ThemeToggleButton;
