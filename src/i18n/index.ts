import english from '../i18n/en.json';
import german from '../i18n/de.json';
import spanish from '../i18n/es.json';

const LANG = {
	ENGLISH: 'en',
    GERMAN: 'de',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.GERMAN) return {...english, ...german};
	if (currentLocale === LANG.SPANISH) return {...english, ...spanish};
	return english;
};