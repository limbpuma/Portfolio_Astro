import english from '../i18n/en.json';
import german from '../i18n/de.json';
import spanish from '../i18n/es.json';

const LANG = {
	ENGLISH: 'en',
    GERMAN: 'de',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'de',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.GERMAN) return german;
	if (currentLocale === LANG.SPANISH) return spanish;
	return english;
};