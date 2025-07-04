// Diagnóstico de Proyectos AI
// Este script ayuda a verificar qué proyectos se están cargando

console.log('=== DIAGNÓSTICO DE PROYECTOS AI ===');

// Verificar que los proyectos se cargan correctamente
setTimeout(() => {
  // Contar proyectos con botón "Try AI Demo"
  const aiDemoButtons = document.querySelectorAll('button[onclick*="open-project-modal"]');
  console.log(`Botones "Try AI Demo" encontrados: ${aiDemoButtons.length}`);
  
  // Verificar si existen los modales
  const projectModals = document.querySelectorAll('[data-project-modal]');
  console.log(`Modales de proyecto encontrados: ${projectModals.length}`);
  
  // Listar todos los títulos de proyectos
  const projectTitles = document.querySelectorAll('.card-title');
  console.log('Títulos de proyectos encontrados:');
  projectTitles.forEach((title, index) => {
    const text = title.textContent.trim();
    console.log(`${index + 1}. ${text}`);
  });
  
  // Verificar proyectos AI específicamente
  const aiProjects = Array.from(projectTitles).filter(title => 
    title.textContent.includes('AI') || 
    title.textContent.includes('IA') || 
    title.textContent.includes('KI')
  );
  console.log(`Proyectos AI encontrados: ${aiProjects.length}`);
  
  // Verificar badges AI
  const aiBadges = document.querySelectorAll('.badge-secondary');
  const aiProjectsBadges = Array.from(aiBadges).filter(badge => 
    badge.textContent.includes('AI') || 
    badge.textContent.includes('IA') || 
    badge.textContent.includes('KI')
  );
  console.log(`Badges AI encontrados: ${aiProjectsBadges.length}`);
  
}, 2000);

// Verificar idioma actual
setTimeout(() => {
  const currentLang = document.documentElement.lang || 'unknown';
  console.log(`Idioma actual detectado: ${currentLang}`);
}, 1000);
