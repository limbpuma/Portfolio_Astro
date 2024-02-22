export function getLangFromUrl(url: URL): string {
	const pathSegments = url.pathname.split('/').filter(Boolean);
	const lang = pathSegments[0] || 'en'; // Asume 'en' como idioma predeterminado
	return lang;
  }
  