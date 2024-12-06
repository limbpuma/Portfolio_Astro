import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as createAstro, a as renderComponent, f as renderHead, g as renderSlot } from './astro/server_Bi0defu0.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';
/* empty css                         */

const ThemeToggleButton = () => {
  const [isnight, setIsnight] = useState(null);
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "night";
    setIsnight(currentTheme === "night");
  }, []);
  const toggleTheme = () => {
    const newTheme = isnight ? "cupcake" : "night";
    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "night") {
      document.documentElement.classList.add("night");
    } else {
      document.documentElement.classList.remove("night");
    }
    setIsnight(!isnight);
  };
  if (isnight === null) return null;
  return /* @__PURE__ */ jsxs("button", { onClick: toggleTheme, className: "flex cursor-pointer gap-2 items-center hover:text-primary btn-ghost rounded-full p-2", children: [
    !isnight && /* @__PURE__ */ jsx("i", { className: "fas fa-moon" }),
    isnight && /* @__PURE__ */ jsx("i", { className: "fas fa-sun" })
  ] });
};

const $$Astro$g = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const languages = {
    en: "/images/en.webp",
    es: "/images/es.webp",
    de: "/images/de.webp"
  };
  const currentPath = Astro2.url.pathname;
  const currentLocale = Object.keys(languages).find((lang) => currentPath.startsWith(`/${lang}`)) || "de";
  const otherLanguages = Object.entries(languages).filter(([code]) => code !== currentLocale);
  return renderTemplate`${maybeRenderHead()}<div class="language-selector hover:bg-transparent focus:bg-transparent active:bg-transparent" data-astro-cid-ltpqzwiw> <button data-astro-cid-ltpqzwiw><a${addAttribute(`/${currentLocale === "en" ? "" : currentLocale}`, "href")} class="rounded-full active:bg-transparent" data-astro-cid-ltpqzwiw></a><img${addAttribute(languages[currentLocale], "src")}${addAttribute(currentLocale.toUpperCase(), "alt")} class="rounded-full w-6 h-6" data-astro-cid-ltpqzwiw> </button> <div class="language-options " data-astro-cid-ltpqzwiw> ${otherLanguages.map(([code, image]) => renderTemplate`<a${addAttribute(`/${code === "de" ? "" : code}`, "href")} class="block mt-2" data-astro-cid-ltpqzwiw> <img${addAttribute(image, "src")}${addAttribute(code.toUpperCase(), "alt")} class="rounded-full w-6 h-6" data-astro-cid-ltpqzwiw> </a>`)} </div> </div> `;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/LanguageSelector.astro", void 0);

const SEO_TITLE$2 = "Limber Martinez - Trainee IT Specialist in Application Development";
const SEO_DESCRIPTION$2 = "Limber Martinez, trainee in application development, seeking an internship starting July 2025. Knowledge in frontend and backend.";
const COOKIES_TEXT$2 = {
	TITLE: "Cookies!",
	DESCRIPTION: "Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Wenn Sie weiterhin auf unserer Website surfen, stimmen Sie der Verwendung von Cookies zu.",
	ACCEPT: "Akzeptieren",
	DENY: "Ablehnen"
};
const NAVBAR$2 = {
	ITEM1: "About Me",
	ITEM2: "Education",
	ITEM3: "Skills",
	ITEM4: "Projects",
	ITEM5: "Contact"
};
const HERO$2 = {
	TITLE: "Limber Martinez",
	SUBTITLE: "Trainee in Application Development",
	DESCRIPTION: "Currently in the first year of my training as an IT specialist in application development at BFW Dortmund, I am seeking an exciting internship opportunity starting in July 2025 to expand my skills in a real work environment.",
	BUTTON: "Discover my training"
};
const ABOUT_ME$2 = {
	TITLE: "About Me",
	PARAGRAPH_1: "Hello, I’m Limber Martinez, currently training as an IT specialist in application development. With a strong focus on backend development and basic knowledge in frontend, I am looking for opportunities to gain practical experience in a professional environment.",
	PARAGRAPH_2: "As part of my training, I have gained knowledge in Java, HTML, CSS, and PHP. I am continuously learning new technologies and developing my skills to prepare for the challenges of modern software development.",
	PARAGRAPH_3: "I am seeking an internship that allows me to apply my theoretical knowledge in practice and to learn and grow within a team of experienced developers."
};
const TITLESECTION$2 = {
	timeline: {
		title: "My Journey",
		subtitle: "Path to Development"
	},
	projects: {
		title: "Portfolio",
		subtitle: "My Projects"
	},
	skills: {
		title: "Skills",
		subtitle: "Technologies I Work With"
	},
	contact: {
		title: "Contact Me",
		subtitle: "Let's Talk"
	},
	under_construction: {
		title: "Under Construction",
		subtitle: "Showcasing Future Innovations"
	}
};
const TIMELINE$2 = {
	EVENTS: [
		{
			DATE: "July 2024 - Ongoing",
			TITLE: "BFW IT Specialist Application Development IHK",
			DESCRIPTION: "Training in application development, providing advanced skills in programming and software development."
		},
		{
			DATE: "2023",
			TITLE: "Oracle One Altura Education Program",
			DESCRIPTION: "An intensive program focused on Java and Spring Boot, establishing a solid foundation in backend development."
		},
		{
			DATE: "2022 - 2023",
			TITLE: "Full Stack Developer Training",
			DESCRIPTION: "Specialization in frontend development with React and Angular at UTN, Argentina, complemented by backend skills with NodeJS."
		},
		{
			DATE: "2022",
			TITLE: "Web Developer Certification",
			DESCRIPTION: "Beginning of my web development journey, covering HTML, CSS, and JavaScript at ILS in Hamburg."
		}
	]
};
const PROJECTS$2 = {
	TITLE: "My Projects EN",
	PROJECT_LIST: [
		{
			TITLE: "Döner Restaurant",
			BADGE: "Astro",
			DESCRIPTION: "This project is responsive, providing quick access to WhatsApp, phone, and location, and complies with GDPR.",
			IMAGE: "/images/proyect_1.webp",
			CATEGORIES: [
				"React",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://www.scharnhorst-doener.de/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/doner_express",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		},
		{
			TITLE: "Project 2",
			BADGE: "Astro",
			DESCRIPTION: "A modern, fully responsive website for a hair salon, developed with Astro, React, and Tailwind, focused on an elegant and user-friendly design.",
			IMAGE: "/images/barbershop_1.webp",
			CATEGORIES: [
				"React",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://astro-barber-web.vercel.app/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/Astro_Barber_web",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		},
		{
			TITLE: "Integra Care",
			BADGE: "Astro",
			DESCRIPTION: "A fully responsive, static Astro project with GDPR principles and a PHP contact form, designed for privacy and user-friendliness.",
			IMAGE: "/images/integra_1.webp",
			CATEGORIES: [
				"Astro",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://astro-barber-web.vercel.app/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/Astro_Barber_web",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		}
	]
};
const SKILLS$2 = {
	SKILL_SET: [
		{
			name: "HTML & CSS",
			description: "Solid understanding of HTML5 and CSS3, responsive design, and modern web design practices.",
			icon: "fas fa-code"
		},
		{
			name: "JavaScript",
			description: "Proficiency in ES6+ features, asynchronous programming, and DOM manipulation.",
			icon: "fab fa-js-square"
		},
		{
			name: "React & Angular",
			description: "Experience in creating SPAs using React, and dynamic applications with Angular.",
			icon: "fab fa-react"
		},
		{
			name: "Node.js & Express",
			description: "Basic knowledge of scalable backend services with Node.js and RESTful API design.",
			icon: "fab fa-node-js"
		},
		{
			name: "Java & Spring Boot",
			description: "Basic knowledge in Java and Spring Boot for robust backend applications.",
			icon: "fab fa-java"
		},
		{
			name: "Version Control",
			description: "Competent use of Git and GitHub for version control, code collaboration, and project management.",
			icon: "fab fa-git-alt"
		}
	]
};
const CONTACT$2 = {
	SUBTITLE: "Schedule a Meeting",
	TITLE: "Let's Connect",
	DESCRIPTION: "Open to collaborations and job opportunities. Feel free to reach out.",
	RESUME: "View My Resume",
	RESUME_URL: "/cv/ResumeEN.pdf"
};
const FOOTER$2 = {
	PRIVACY_POLICY: "Privacy Policy",
	LEGAL_NOTICE: "Legal Notice",
	COPYRIGHT: "Copyright © Limber Martinez 2024. All rights reserved."
};
const UNDER_CONSTRUCTION$2 = {
	MESSAGE: "I'm currently refreshing my project portfolio. Meanwhile, discover my 2023 projects on GitHub.",
	GITHUB_BUTTON: "Explore on GitHub"
};
const LEGAL$2 = {
	TITLE: "Legal Notice",
	INTRODUCTION: "Welcome to my personal portfolio website. Here, I showcase my programming skills and projects, aiming to connect with potential employers and opportunities in the IT sector. This website serves as a digital resume, not a commercial platform.",
	IMAGE_ALT: "Portrait of Limber Martinez",
	CONTENT: "Operated by Limber Martinez, this website is a non-commercial personal portfolio. It is designed to present my professional qualifications and projects. For content inquiries, please contact me directly.",
	ADDITIONAL: "Please note that while I ensure all content is accurate, I am not responsible for the content of external websites linked from my portfolio.",
	COPYRIGHT: "Copyright © 2024 Limber Martinez. All rights reserved. Reproduction or distribution of any material from this site without prior permission is strictly prohibited.",
	CLOSE_BUTTON: "Close"
};
const PRIVACY$2 = {
	TITLE: "Privacy Policy",
	CONTENT: "Your privacy is paramount to us. This policy outlines how we handle personal data on this site, dedicated to showcasing my web development skills and connecting with potential employers. This is not a commercial site, and we do not sell products or services.",
	DATA_COLLECTION: "Data Collection: No personal data is collected directly by this site. However, external tools like Calendly used for scheduling may collect information as per their privacy policies.",
	DATA_USAGE: "Use of Data: Any data collected by third-party tools is used in accordance with their respective privacy policies. We encourage you to review these policies to understand how your data is handled.",
	DATA_PROTECTION: "Data Protection: We take precautions to protect your data on platforms we use. However, as we do not collect data directly, we advise reviewing the privacy settings and policies of any third-party tools or services you interact with.",
	USER_RIGHTS: "Your Rights: Regarding any personal data held by third-party services used on this site, you have rights under GDPR, including access, correction, and deletion. Please contact the respective services directly to exercise these rights.",
	CLOSE_BUTTON: "Close"
};
const english = {
	SEO_TITLE: SEO_TITLE$2,
	SEO_DESCRIPTION: SEO_DESCRIPTION$2,
	COOKIES_TEXT: COOKIES_TEXT$2,
	NAVBAR: NAVBAR$2,
	HERO: HERO$2,
	ABOUT_ME: ABOUT_ME$2,
	TITLESECTION: TITLESECTION$2,
	TIMELINE: TIMELINE$2,
	PROJECTS: PROJECTS$2,
	SKILLS: SKILLS$2,
	CONTACT: CONTACT$2,
	FOOTER: FOOTER$2,
	UNDER_CONSTRUCTION: UNDER_CONSTRUCTION$2,
	LEGAL: LEGAL$2,
	PRIVACY: PRIVACY$2
};

const SEO_TITLE$1 = "Limber Martinez - Trainee Fachinformatiker Anwendungsentwicklung";
const SEO_DESCRIPTION$1 = "Limber Martinez, Umschüler in Anwendungsentwicklung, sucht ein Praktikum ab Juli 2025. Kenntnisse in Frontend und Backend.";
const COOKIES_TEXT$1 = {
	TITLE: "Cookies!",
	DESCRIPTION: "Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Wenn Sie weiterhin auf unserer Website surfen, stimmen Sie der Verwendung von Cookies zu.",
	ACCEPT: "Akzeptieren",
	DENY: "Ablehnen"
};
const NAVBAR$1 = {
	ITEM1: "Über Mich",
	ITEM2: "Bildung",
	ITEM3: "Skills",
	ITEM4: "Projekte",
	ITEM5: "Kontakt"
};
const HERO$1 = {
	TITLE: "Limber Martinez",
	SUBTITLE: "Trainee in Anwendungsentwicklung",
	DESCRIPTION: "Derzeit im ersten Jahr meiner Umschulung zum Fachinformatiker für Anwendungsentwicklung am BFW Dortmund, suche ich nach einer spannenden Praktikumsmöglichkeit ab Juli 2025, um meine Fähigkeiten in einer realen Arbeitsumgebung weiter auszubauen.",
	BUTTON: "Meine Ausbildung entdecken"
};
const ABOUT_ME$1 = {
	TITLE: "Über Mich",
	PARAGRAPH_1: "Hallo, ich bin Limber Martinez, derzeit in der Ausbildung zum Fachinformatiker für Anwendungsentwicklung. Mit einem starken Fokus auf die Backend-Entwicklung und grundlegenden Kenntnissen im Frontend, suche ich nach Möglichkeiten, praktische Erfahrungen in einem professionellen Umfeld zu sammeln.",
	PARAGRAPH_2: "Im Rahmen meiner Ausbildung habe ich bereits Kenntnisse in Java, HTML, CSS und PHP erworben. Ich lerne kontinuierlich neue Technologien und entwickle meine Fähigkeiten weiter, um mich auf die Anforderungen der modernen Softwareentwicklung vorzubereiten.",
	PARAGRAPH_3: "Ich bin auf der Suche nach einem Praktikum, das es mir ermöglicht, meine theoretischen Kenntnisse in die Praxis umzusetzen und in einem Team von erfahrenen Entwicklern zu lernen und zu wachsen."
};
const TITLESECTION$1 = {
	timeline: {
		title: "Meine Reise",
		subtitle: "Weg zur Entwicklung"
	},
	projects: {
		title: "Portfolio",
		subtitle: "Meine Projekte"
	},
	skills: {
		title: "Fähigkeiten",
		subtitle: "Technologien, mit denen ich arbeite"
	},
	contact: {
		title: "Kontaktiere Mich",
		subtitle: "Lass uns sprechen"
	},
	under_construction: {
		title: "Im Umbau",
		subtitle: "Zukünftige Innovationen"
	}
};
const TIMELINE$1 = {
	EVENTS: [
		{
			DATE: "Juli 2024 - Laufend",
			TITLE: "BFW Fachinformatiker Anwendungsentwicklung IHK",
			DESCRIPTION: "Ausbildung in der Anwendungsentwicklung, die fortgeschrittene Fähigkeiten in Programmierung und Softwareentwicklung vermittelt."
		},
		{
			DATE: "2023",
			TITLE: "Oracle One Altura Education Programm",
			DESCRIPTION: "Ein intensives Programm mit Fokus auf Java und Spring Boot, das eine solide Grundlage in der Backend-Entwicklung schafft."
		},
		{
			DATE: "2022 - 2023",
			TITLE: "Full-Stack-Entwickler-Ausbildung",
			DESCRIPTION: "Spezialisierung in der Frontend-Entwicklung mit React und Angular an der UTN, Argentinien, ergänzt durch Backend-Fähigkeiten mit NodeJS."
		},
		{
			DATE: "2022",
			TITLE: "Webentwickler-Zertifizierung",
			DESCRIPTION: "Beginn meiner Webentwicklungskarriere, die HTML, CSS und JavaScript am ILS in Hamburg umfasst."
		}
	]
};
const PROJECTS$1 = {
	TITLE: "My Projects DE",
	PROJECT_LIST: [
		{
			TITLE: "Restaurant Döner",
			BADGE: "Astro",
			DESCRIPTION: "Dieses Projekt ist responsive gestaltet, um schnellen Zugriff auf WhatsApp, Telefon und Standort zu ermöglichen und entspricht der DSGVO.",
			IMAGE: "/images/proyect_1.webp",
			CATEGORIES: [
				"React",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://www.scharnhorst-doener.de/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/doner_express",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		},
		{
			TITLE: "Barber Landing",
			BADGE: "Astro",
			DESCRIPTION: "Eine moderne, voll responsive Webseite für eine Friseurseite, entwickelt mit Astro, React und Tailwind für ein elegantes und benutzerfreundliches Design.",
			IMAGE: "/images/barbershop_1.webp",
			CATEGORIES: [
				"React",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://astro-barber-web.vercel.app/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/Astro_Barber_web",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		},
		{
			TITLE: "Integra Pflege",
			BADGE: "Astro",
			DESCRIPTION: "Ein voll responsives, statisches Astro-Projekt mit GDPR-Konformität und einem PHP-Kontaktformular, entwickelt für Datenschutz und Benutzerfreundlichkeit.",
			IMAGE: "/images/integra_1.webp",
			CATEGORIES: [
				"Astro",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://pflegedienst-integra.de/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/seniorCare.git",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		}
	]
};
const SKILLS$1 = {
	SKILL_SET: [
		{
			name: "HTML & CSS",
			description: "Solides Verständnis von HTML5 und CSS3, responsive Design und moderne Webdesign-Praktiken.",
			icon: "fas fa-code"
		},
		{
			name: "JavaScript",
			description: "Kompetenz in ES6+-Funktionen, asynchroner Programmierung und DOM-Manipulation.",
			icon: "fab fa-js-square"
		},
		{
			name: "React & Angular",
			description: "Erfahrung in der Erstellung von SPAs mit React und dynamischen Anwendungen mit Angular.",
			icon: "fab fa-react"
		},
		{
			name: "Node.js & Express",
			description: "Grundkenntnisse in skalierbaren Backend-Services mit Node.js und RESTful-API-Design.",
			icon: "fab fa-node-js"
		},
		{
			name: "Java & Spring Boot",
			description: "Grundkenntnisse in Java und Spring Boot für robuste Backend-Anwendungen.",
			icon: "fab fa-java"
		},
		{
			name: "Versionskontrolle",
			description: "Kompetenter Umgang mit Git und GitHub für Versionskontrolle, Code-Kollaboration und Projektmanagement.",
			icon: "fab fa-git-alt"
		}
	]
};
const CONTACT$1 = {
	SUBTITLE: "Ein Treffen Planen",
	TITLE: "Lass uns verbinden",
	DESCRIPTION: "Offen für Kollaborationen und Jobangebote. Fühl dich frei, mich zu kontaktieren.",
	RESUME: "Meinen Lebenslauf Ansehen",
	RESUME_URL: "/cv/ResumeDE.pdf"
};
const FOOTER$1 = {
	PRIVACY_POLICY: "Datenschutzrichtlinie",
	LEGAL_NOTICE: "Rechtlicher Hinweis",
	COPYRIGHT: "Urheberrecht © Limber Martinez 2024. Alle Rechte vorbehalten."
};
const UNDER_CONSTRUCTION$1 = {
	MESSAGE: "Ich aktualisiere gerade mein Projektportfolio. In der Zwischenzeit entdecken Sie meine Projekte von 2023 auf GitHub.",
	GITHUB_BUTTON: "Auf GitHub erkunden"
};
const LEGAL$1 = {
	TITLE: "Impressum",
	INTRODUCTION: "Willkommen auf meiner persönlichen Portfolio-Webseite. Hier präsentiere ich meine Programmierfähigkeiten und Projekte, mit dem Ziel, Verbindungen zu potenziellen Arbeitgebern und Möglichkeiten im IT-Sektor zu knüpfen. Diese Webseite dient als digitales Lebenslauf und nicht als kommerzielle Plattform.",
	IMAGE_ALT: "Porträt von Limber Martinez",
	CONTENT: "Betrieben von Limber Martinez, ist diese Webseite ein nicht-kommerzielles persönliches Portfolio. Sie ist darauf ausgelegt, meine beruflichen Qualifikationen und Projekte vorzustellen. Für Inhaltsanfragen kontaktieren Sie mich bitte direkt.",
	ADDITIONAL: "Bitte beachten Sie, dass ich, obwohl ich sicherstelle, dass alle Inhalte genau sind, nicht verantwortlich für den Inhalt externer Webseiten bin, die von meinem Portfolio verlinkt sind.",
	COPYRIGHT: "Urheberrecht © 2024 Limber Martinez. Alle Rechte vorbehalten. Die Vervielfältigung oder Verbreitung jeglichen Materials von dieser Seite ohne vorherige Genehmigung ist strengstens untersagt.",
	CLOSE_BUTTON: "Schließen"
};
const PRIVACY$1 = {
	TITLE: "Datenschutzrichtlinie",
	CONTENT: "Ihre Privatsphäre ist uns äußerst wichtig. Diese Richtlinie beschreibt, wie wir persönliche Daten auf dieser Website behandeln, die dazu dient, meine Fähigkeiten als Webentwickler zu präsentieren und Verbindungen zu potenziellen Arbeitgebern herzustellen. Dies ist keine kommerzielle Website, und wir verkaufen keine Produkte oder Dienstleistungen.",
	DATA_COLLECTION: "Datenerfassung: Diese Seite sammelt direkt keine persönlichen Daten. Externe Tools wie Calendly für die Terminplanung können jedoch Informationen entsprechend ihrer Datenschutzrichtlinien erfassen.",
	DATA_USAGE: "Datenverwendung: Alle durch Drittanbieter-Tools gesammelten Daten werden gemäß deren Datenschutzrichtlinien verwendet. Wir empfehlen Ihnen, diese Richtlinien zu überprüfen, um zu verstehen, wie Ihre Daten gehandhabt werden.",
	DATA_PROTECTION: "Datenschutz: Wir treffen Vorkehrungen zum Schutz Ihrer Daten auf den Plattformen, die wir verwenden. Da wir jedoch keine Daten direkt sammeln, raten wir dazu, die Datenschutzeinstellungen und -richtlinien aller Drittanbieter-Tools oder -Dienste, mit denen Sie interagieren, zu überprüfen.",
	USER_RIGHTS: "Ihre Rechte: Bezüglich aller persönlichen Daten, die von Drittanbieterdiensten auf dieser Website gehalten werden, haben Sie Rechte unter der DSGVO, einschließlich Zugang, Korrektur und Löschung. Bitte kontaktieren Sie die jeweiligen Dienste direkt, um diese Rechte auszuüben.",
	CLOSE_BUTTON: "Schließen"
};
const german = {
	SEO_TITLE: SEO_TITLE$1,
	SEO_DESCRIPTION: SEO_DESCRIPTION$1,
	COOKIES_TEXT: COOKIES_TEXT$1,
	NAVBAR: NAVBAR$1,
	HERO: HERO$1,
	ABOUT_ME: ABOUT_ME$1,
	TITLESECTION: TITLESECTION$1,
	TIMELINE: TIMELINE$1,
	PROJECTS: PROJECTS$1,
	SKILLS: SKILLS$1,
	CONTACT: CONTACT$1,
	FOOTER: FOOTER$1,
	UNDER_CONSTRUCTION: UNDER_CONSTRUCTION$1,
	LEGAL: LEGAL$1,
	PRIVACY: PRIVACY$1
};

const SEO_TITLE = "Limber Martinez - Trainee Fachinformatiker Anwendungsentwicklung";
const SEO_DESCRIPTION = "Limber Martinez, Umschüler en Anwendungsentwicklung, busca una práctica a partir de julio de 2025. Conocimientos en Frontend y Backend.";
const COOKIES_TEXT = {
	TITLE: "Cookies!",
	DESCRIPTION: "Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Wenn Sie weiterhin auf unserer Website surfen, stimmen Sie der Verwendung von Cookies zu.",
	ACCEPT: "Akzeptieren",
	DENY: "Ablehnen"
};
const NAVBAR = {
	ITEM1: "Sobre Mí",
	ITEM2: "Formación",
	ITEM3: "Skills",
	ITEM4: "Proyectos",
	ITEM5: "Contacto"
};
const HERO = {
	TITLE: "Limber Martinez",
	SUBTITLE: "Trainee en Desarrollo de Aplicaciones",
	DESCRIPTION: "Actualmente en el primer año de mi formación como Fachinformatiker en Desarrollo de Aplicaciones en BFW Dortmund, estoy buscando una emocionante oportunidad de prácticas a partir de julio de 2025 para expandir mis habilidades en un entorno laboral real.",
	BUTTON: "Descubre mi formación"
};
const ABOUT_ME = {
	TITLE: "Sobre Mí",
	PARAGRAPH_1: "Hola, soy Limber Martinez, actualmente en formación como Fachinformatiker en Desarrollo de Aplicaciones. Con un fuerte enfoque en el desarrollo backend y conocimientos básicos en frontend, busco oportunidades para adquirir experiencia práctica en un entorno profesional.",
	PARAGRAPH_2: "Como parte de mi formación, he adquirido conocimientos en Java, HTML, CSS y PHP. Estoy aprendiendo continuamente nuevas tecnologías y desarrollando mis habilidades para prepararme para los desafíos del desarrollo de software moderno.",
	PARAGRAPH_3: "Estoy buscando una práctica que me permita aplicar mis conocimientos teóricos en la práctica y aprender y crecer en un equipo de desarrolladores experimentados."
};
const TITLESECTION = {
	timeline: {
		title: "Mi Trayectoria",
		subtitle: "Camino hacia el Desarrollo"
	},
	projects: {
		title: "Portafolio",
		subtitle: "Mis Proyectos"
	},
	skills: {
		title: "Habilidades",
		subtitle: "Tecnologías que Manejo"
	},
	contact: {
		title: "Contáctame",
		subtitle: "Hablemos"
	},
	under_construction: {
		title: "En Construcción",
		subtitle: "Creando Futuras Innovaciones"
	}
};
const TIMELINE = {
	EVENTS: [
		{
			DATE: "Julio 2024 - En Curso",
			TITLE: "BFW Fachinformatiker Anwendungsentwicklung IHK",
			DESCRIPTION: "Formación en desarrollo de aplicaciones, proporcionando habilidades avanzadas en programación y desarrollo de software."
		},
		{
			DATE: "2023",
			TITLE: "Programa Oracle One Altura Education",
			DESCRIPTION: "Programa intensivo enfocado en Java y Spring Boot, estableciendo una base sólida en desarrollo Backend."
		},
		{
			DATE: "2022 - 2023",
			TITLE: "Formación Desarrollador Full Stack",
			DESCRIPTION: "Especialización en desarrollo Frontend con React y Angular en la UTN, Argentina, complementada con habilidades en Backend con NodeJS."
		},
		{
			DATE: "2022",
			TITLE: "Certificación Desarrollador Web",
			DESCRIPTION: "Inicio de mi viaje en desarrollo web, abarcando HTML, CSS y JavaScript en el ILS de Hamburgo."
		}
	]
};
const PROJECTS = {
	TITLE: "My Projects ES",
	PROJECT_LIST: [
		{
			TITLE: "Restaurante Döner",
			BADGE: "Astro",
			DESCRIPTION: "Este proyecto aplica principios responsive para facilitar el acceso rápido a WhatsApp, teléfono y ubicación, cumpliendo con GDPR.",
			IMAGE: "/images/proyect_1.webp",
			CATEGORIES: [
				"React",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://www.scharnhorst-doener.de/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/Astro_Tailwind_Shop",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		},
		{
			TITLE: "Barber Landing",
			BADGE: "Astro",
			DESCRIPTION: "Una web moderna y totalmente responsiva para una peluquería, desarrollada con Astro, React y Tailwind, enfocada en un diseño elegante y funcional.",
			IMAGE: "/images/barbershop_1.webp",
			CATEGORIES: [
				"React",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://astro-barber-web.vercel.app/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/Astro_Barber_web",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		},
		{
			TITLE: "Integra Asistencia",
			BADGE: "Astro",
			DESCRIPTION: "Un proyecto Astro totalmente responsivo y estático, con principios de GDPR y un formulario de contacto en PHP, diseñado para privacidad y facilidad de uso.",
			IMAGE: "/images/integra_1.webp",
			CATEGORIES: [
				"Astro",
				"Tailwind"
			],
			SOCIAL_LINKS: [
				{
					url: "https://astro-barber-web.vercel.app/",
					iconClass: "fas fa-globe",
					label: "Project 1 Website"
				},
				{
					url: "https://github.com/limbpuma/Astro_Barber_web",
					iconClass: "fab fa-github",
					label: "Project 1 GitHub"
				}
			]
		}
	]
};
const SKILLS = {
	SKILL_SET: [
		{
			name: "HTML & CSS",
			description: "Comprensión sólida de HTML5 y CSS3, diseño responsivo y modernas prácticas de diseño web.",
			icon: "fas fa-code"
		},
		{
			name: "JavaScript",
			description: "Dominio de características ES6+, programación asíncrona y manipulación del DOM.",
			icon: "fab fa-js-square"
		},
		{
			name: "React & Angular",
			description: "Experiencia en creación de SPA usando React, y aplicaciones dinámicas con Angular.",
			icon: "fab fa-react"
		},
		{
			name: "Node.js & Express",
			description: "Conocimientos básicos de servicios backend escalables con Node.js y diseño de API RESTful.",
			icon: "fab fa-node-js"
		},
		{
			name: "Java & Spring Boot",
			description: "Conocimientos básicos en Java y Spring Boot para aplicaciones backend robustas.",
			icon: "fab fa-java"
		},
		{
			name: "Control de Versiones",
			description: "Uso competente de Git y GitHub para el control de versiones, colaboración en código y gestión de proyectos.",
			icon: "fab fa-git-alt"
		}
	]
};
const CONTACT = {
	SUBTITLE: "Agenda una reunión",
	TITLE: "Conectemos",
	DESCRIPTION: "Abierto a colaboraciones y oportunidades de empleo. No dudes en contactarme.",
	RESUME: "Ver mi CV",
	RESUME_URL: "/cv/ResumeES.pdf"
};
const FOOTER = {
	PRIVACY_POLICY: "Política de Privacidad",
	LEGAL_NOTICE: "Aviso Legal",
	COPYRIGHT: "Derechos de autor © Limber Martinez 2024. Todos los derechos reservados."
};
const UNDER_CONSTRUCTION = {
	MESSAGE: "Actualmente estoy renovando mi portafolio de proyectos. Mientras tanto, puedes visitar mi GitHub para ver los proyectos de 2023.",
	GITHUB_BUTTON: "Explorar en GitHub"
};
const LEGAL = {
	TITLE: "Aviso Legal",
	INTRODUCTION: "Bienvenidos a mi sitio web personal. Aquí expongo mis habilidades de programación y proyectos, con el objetivo de conectar con empleadores potenciales y oportunidades en el sector IT. Este sitio web funciona como un currículum digital, no como una plataforma comercial.",
	IMAGE_ALT: "Retrato de Limber Martinez",
	CONTENT: "Operado por Limber Martinez, este sitio web es un portafolio personal no comercial destinado a presentar mis calificaciones profesionales y proyectos. Para consultas sobre el contenido, por favor contáctame directamente.",
	ADDITIONAL: "Aunque me aseguro de que todo el contenido sea preciso, no soy responsable del contenido de los sitios web externos enlazados desde mi portafolio.",
	COPYRIGHT: "Derechos de autor © 2024 Limber Martinez. Todos los derechos reservados. La reproducción o distribución de cualquier material de este sitio sin permiso previo está estrictamente prohibida.",
	CLOSE_BUTTON: "Cerrar"
};
const PRIVACY = {
	TITLE: "Política de Privacidad",
	CONTENT: "Tu privacidad es de suma importancia para nosotros. Esta política describe cómo manejamos los datos personales en este sitio, dedicado a mostrar mis habilidades como desarrollador web y conectar con empleadores potenciales. Este no es un sitio comercial, y no vendemos productos ni servicios.",
	DATA_COLLECTION: "Recolección de Datos: Este sitio no recopila datos personales directamente. Sin embargo, herramientas externas como Calendly utilizadas para programar pueden recopilar información según sus políticas de privacidad.",
	DATA_USAGE: "Uso de Datos: Cualquier dato recopilado por herramientas de terceros se utiliza de acuerdo con sus respectivas políticas de privacidad. Te animamos a revisar estas políticas para entender cómo se manejan tus datos.",
	DATA_PROTECTION: "Protección de Datos: Tomamos precauciones para proteger tus datos en las plataformas que utilizamos. Sin embargo, dado que no recopilamos datos directamente, aconsejamos revisar los ajustes de privacidad y políticas de cualquier herramienta o servicio de terceros con los que interactúes.",
	USER_RIGHTS: "Tus Derechos: Respecto a cualquier dato personal que posean los servicios de terceros utilizados en este sitio, tienes derechos bajo el GDPR, incluyendo el acceso, la corrección y la eliminación. Por favor, contacta directamente a los servicios respectivos para ejercer estos derechos.",
	CLOSE_BUTTON: "Cerrar"
};
const spanish = {
	SEO_TITLE: SEO_TITLE,
	SEO_DESCRIPTION: SEO_DESCRIPTION,
	COOKIES_TEXT: COOKIES_TEXT,
	NAVBAR: NAVBAR,
	HERO: HERO,
	ABOUT_ME: ABOUT_ME,
	TITLESECTION: TITLESECTION,
	TIMELINE: TIMELINE,
	PROJECTS: PROJECTS,
	SKILLS: SKILLS,
	CONTACT: CONTACT,
	FOOTER: FOOTER,
	UNDER_CONSTRUCTION: UNDER_CONSTRUCTION,
	LEGAL: LEGAL,
	PRIVACY: PRIVACY
};

const LANG = {
  ENGLISH: "en",
  GERMAN: "de",
  SPANISH: "es"
};
const getI18N = ({
  currentLocale = "de"
}) => {
  if (currentLocale === LANG.GERMAN) return { ...english, ...german };
  if (currentLocale === LANG.SPANISH) return { ...english, ...spanish };
  return english;
};

const $$Astro$f = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="navbar bg-base-100 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="navbar-start"> <div class="dropdown"> <div tabindex="0" role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg> </div> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> <li><a href="#aboutme_section">${i18n.NAVBAR.ITEM1}</a></li> <li><a href="#education_section">${i18n.NAVBAR.ITEM2}</a></li> <li><a href="#skills_section">${i18n.NAVBAR.ITEM3}</a></li> <!-- <li><a href="projects_section">{i18n.NAVBAR.ITEM4}</a></li> --> <li><a href="#contact_section">${i18n.NAVBAR.ITEM5}</a></li> </ul> </div> <a class="btn btn-ghost text-xl"> <i class="fas fa-laptop-code"></i> Limber
</a> </div> <div class="navbar-center hidden lg:flex"> <ul class="menu menu-horizontal px-1 "> <li><a href="#aboutme_section">${i18n.NAVBAR.ITEM1}</a></li> <li><a href="#education_section">${i18n.NAVBAR.ITEM2}</a></li> <li><a href="#skills_section">${i18n.NAVBAR.ITEM3}</a></li> <!-- <li><a href="projects_section">{i18n.NAVBAR.ITEM4}</a></li> --> <li><a href="#contact_section">${i18n.NAVBAR.ITEM5}</a></li> </ul> </div> <div class="navbar-end gap-2 mx-auto my-auto"> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})} ${renderComponent($$result, "ThemeToggleButton", ThemeToggleButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/ThemeToggleButton.jsx", "client:component-export": "default" })} </div> </div> `;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Navbar.astro", void 0);

const $$Astro$e = createAstro();
const $$LegalModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LegalModal;
  const { title, content, closeButtonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="#" class="hover:text-primary px-4 py-2 text-lg no-underline font-bold cursor-pointer" onclick="document.getElementById('legalModal').style.display = 'flex'; return false;"> ${title} </a> <div id="legalModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center hidden"> <div class="bg-base-100 p-6 rounded-lg max-w-lg mx-auto text-center shadow-lg"> <h2 class="text-2xl font-bold text-primary mb-4">${title}</h2> <p class="mb-4">${content}</p> <button class="btn btn-primary rounded-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-600 bg-primary-500 text-white px-4 py-2" onclick="document.getElementById('legalModal').style.display = 'none'; return false;"> ${closeButtonText} </button> </div> </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/LegalModal.astro", void 0);

const $$Astro$d = createAstro();
const $$PrivacyModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$PrivacyModal;
  const {
    title,
    content,
    dataCollection,
    dataUsage,
    dataProtection,
    userRights,
    closeButtonText
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="#" class="hover:text-primary px-4 py-2 text-lg no-underline font-bold cursor-pointer" onclick="document.getElementById('privacyModal').style.display = 'flex'; return false;"> ${title} </a> <div id="privacyModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-y-auto hidden"> <div class="modal-box relative bg-base-100 p-6 rounded-lg max-w-lg mx-auto shadow-lg"> <h2 class="font-bold text-lg">${title}</h2> <p>${content}</p> <h3 class="font-bold">Information Collection</h3> <p>${dataCollection}</p> <h3 class="font-bold">Use of Information</h3> <p>${dataUsage}</p> <h3 class="font-bold">Protecting Your Information</h3> <p>${dataProtection}</p> <h3 class="font-bold">Your Rights</h3> <p class="mb-4">${userRights}</p> <button class="btn btn-primary rounded-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-600 bg-primary-500 text-white px-4 py-2 " onclick="document.getElementById('privacyModal').style.display = 'none'; return false;">${closeButtonText} </button> </div> </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/PrivacyModal.astro", void 0);

const $$Astro$c = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Footer;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const legalTitle = i18n.LEGAL.TITLE;
  const legalContent = `${i18n.LEGAL.INTRODUCTION} ${i18n.LEGAL.CONTENT} ${i18n.LEGAL.ADDITIONAL}`;
  const closeButtonText = i18n.LEGAL.CLOSE_BUTTON;
  const techLinks = [
    {
      name: "Astro",
      url: "https://astro.build/",
      icon: "/images/astro.svg"
    },
    {
      name: "React",
      url: "https://reactjs.org/",
      icon: "/images/react.svg"
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      icon: "/images/tailwind.svg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-base-100 text-base-content p-10 rounded-lg w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"> <div class="container mx-auto text-center"> <div class="mb-4"> <div class="flex justify-center gap-4"> ${techLinks.map((tech) => renderTemplate`<a${addAttribute(tech.url, "href")} class="tooltip tooltip-bottom"${addAttribute(tech.name, "data-tip")} target="_blank" rel="noopener noreferrer"> <img${addAttribute(tech.icon, "src")} class="w-8 h-8 filter hover:brightness-125"${addAttribute(tech.name, "alt")} loading="lazy"> </a>`)} </div> </div> <div class="mb-4"> ${renderComponent($$result, "LegalModal", $$LegalModal, { "title": legalTitle, "content": legalContent, "closeButtonText": closeButtonText })} ${renderComponent($$result, "PrivacyModal", $$PrivacyModal, { "title": "Privacy Policy", "content": i18n.PRIVACY.CONTENT, "dataCollection": i18n.PRIVACY.DATA_COLLECTION, "dataUsage": i18n.PRIVACY.DATA_USAGE, "dataProtection": i18n.PRIVACY.DATA_PROTECTION, "userRights": i18n.PRIVACY.USER_RIGHTS, "closeButtonText": i18n.PRIVACY.CLOSE_BUTTON })} </div> <p class="text-sm mb-2">${i18n.FOOTER.COPYRIGHT}</p> </div> </footer>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Footer.astro", void 0);

function getLangFromUrl(url) {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const lang = pathSegments[0] || "en";
  return lang;
}

const CookieConsent = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });
  const [show, setShow] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      setShow(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };
  const handleDeny = () => {
    localStorage.setItem("cookieConsent", "false");
    setShow(false);
  };
  if (!show) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center", children: /* @__PURE__ */ jsx("div", { className: "card max-w-lg w-full mx-4 bg-neutral text-neutral-content", children: /* @__PURE__ */ jsxs("div", { className: "card-body items-center text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "card-title", children: i18n.COOKIES_TEXT.TITLE }),
    /* @__PURE__ */ jsx("p", { children: i18n.COOKIES_TEXT.DESCRIPTION }),
    /* @__PURE__ */ jsxs("div", { className: "card-actions justify-end", children: [
      /* @__PURE__ */ jsx("button", { className: "btn btn-primary", onClick: handleAccept, children: i18n.COOKIES_TEXT.ACCEPT }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-ghost", onClick: handleDeny, children: i18n.COOKIES_TEXT.DENY })
    ] })
  ] }) }) });
};

const $$Astro$b = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  const currentLocale = getLangFromUrl(Astro2.url);
  getI18N({ currentLocale });
  return renderTemplate`<html${addAttribute(currentLocale, "lang")} data-theme="night"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"><link rel="manifest" href="/manifest.json"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><title>${title}</title>${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "CookieConsent", CookieConsent, { "client:load": true, "currentLocale": currentLocale, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/CookieConsent.jsx", "client:component-export": "default" })} </div> ${renderComponent($$result, "Footer", $$Footer, {})}  </body></html>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/layouts/Layout.astro", void 0);

const $$Astro$a = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, href, newTab = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`btn btn-primary rounded-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-600 bg-primary-500 text-white px-4 py-2 ${newTab ? "" : 'target="_self"'}`, "class")}${addAttribute(newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute(newTab ? "_blank" : "_self", "target")}> ${text} </a>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Button.astro", void 0);

const $$Astro$9 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-screen"> <div class="hero-content text-center"> <div class="max-w-md"> <p class="font-bold tracking-wide uppercase">${i18n.HERO.SUBTITLE}</p> <h1 class="font-bold font-heading leading-tighter tracking-tighter mb-4 md:text-6xl text-5xl">${i18n.HERO.TITLE}</h1> <p class="text-muted text-xl mb-6">${i18n.HERO.DESCRIPTION}</p> ${renderComponent($$result, "Button", $$Button, { "text": i18n.HERO.BUTTON, "href": "#education_section" })} </div> </div> </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Hero.astro", void 0);

const $$Astro$8 = createAstro();
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Social;
  const { links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4 justify-center"> ${links.map((link, index) => renderTemplate`<a${addAttribute(link.url, "href")} class="hover:text-primary cursor-pointer" target="_blank" rel="noopener noreferrer"${addAttribute(link.label ?? "", "title")}> <i${addAttribute(`${link.iconClass} fa-2x`, "class")}></i> </a>`)} </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Social.astro", void 0);

const $$Astro$7 = createAstro();
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const personalLinks = [
    { url: "https://www.linkedin.com/in/limber-martinez-developer/", iconClass: "fab fa-linkedin", label: "LinkedIn" },
    { url: "https://github.com/limbpuma", iconClass: "fab fa-github", label: "GitHub" }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="aboutme_section" class="mx-auto max-w-7xl md:px-8 p-4"> <div class="md:flex md:gap-16"> <div class="md:basis-1/2 self-center"> <div class="text-lg mb-12"> <h3 class="mb-4 font-bold tracking-tight sm:text-3xl text-2xl text-center"> ${i18n.ABOUT_ME.TITLE} </h3> <p>${i18n.ABOUT_ME.PARAGRAPH_1}</p> <br> <p>${i18n.ABOUT_ME.PARAGRAPH_2}</p> <br> <p>${i18n.ABOUT_ME.PARAGRAPH_3}</p> </div> </div> <div class="md:basis-1/2 md:mt-0 mt-12" aria-hidden="true"> <img alt="A colorful image representing creativity" class="mx-auto w-full h-96 max-h-96 object-cover bg-gray-500 rounded-lg shadow-lg" src="../images/image-profil.webp" alt="abotme_image" loading="lazy"> <div class="flex gap-4 justify-center mt-8"> ${renderComponent($$result, "Social", $$Social, { "links": personalLinks })} </div> </div> </div> </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/AboutMe.astro", void 0);

const $$Astro$6 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const sectionTitles = i18n.TITLESECTION;
  const { sectionId } = Astro2.props;
  const selectedTitle = sectionTitles[sectionId] || { title: "Title not found", subtitle: "Subtitle not found" };
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center mb-12 mt-12"> <div class="text-center"> <h4 class="font-bold  tracking-wide uppercase font-bold mb-4 mt-4 text-primary">${selectedTitle.title}</h4> <h2 class="text-4xl font-bold mb-4 mt-4">${selectedTitle.subtitle}</h2> </div> </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/SectionTitle.astro", void 0);

const $$Astro$5 = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const sectionId = "timeline";
  return renderTemplate`${maybeRenderHead()}<div id="education_section"> <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId })} ${i18n.TIMELINE.EVENTS.map((event, index) => renderTemplate`<li> <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg> </div> <div${addAttribute(`timeline-${index % 2 === 0 ? "start md:text-end" : "end"} mb-10`, "class")}> <time class="font-mono italic">${event.DATE}</time> <div class="text-lg font-black">${event.TITLE}</div> ${event.DESCRIPTION} </div> ${index !== i18n.TIMELINE.EVENTS.length - 1 && renderTemplate`<hr>`} </li>`)} </ul> </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Timeline.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contact;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const resumeUrl = i18n.CONTACT.RESUME_URL;
  const sectionId = "contact";
  const personalLinks = [
    { url: "https://www.linkedin.com/in/limber-martinez-developer/", iconClass: "fab fa-linkedin", label: "LinkedIn" },
    { url: "https://github.com/limbpuma", iconClass: "fab fa-github", label: "GitHub" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<div id="contact_section"> ', ' <div class="flex flex-col lg:flex-row items-center bg-base-200 p-4 rounded-lg shadow mx-auto"> <div class="text-center lg:w-1/2 p-4"> <img src="../images/img-contact_1.webp" alt="Anfitri\xF3n" class="rounded-full w-32 h-32 mb-4 mx-auto border-2 p-2" loading="lazy"> <h2 class="text-2xl font-bold mb-2">', '</h2> <h3 class="text-xl mb-4">', '</h3> <p class="mb-4">', '</p> <div class="flex gap-4 justify-center"> ', ' </div> <div class="mt-8"> ', ' </div> </div> <div class="w-full lg:w-1/2 flex justify-center items-center my-4 lg:my-0"> <!-- Ajusta el margen vertical aqu\xED --> <div class="calendly-inline-widget w-full" data-url="https://calendly.com/limbpuma/30min?hide_event_type_details=1&hide_gdpr_banner=1" style="height: 700px;"></div> </div> </div> <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async><\/script> </div>'])), maybeRenderHead(), renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId }), i18n.CONTACT.SUBTITLE, i18n.CONTACT.TITLE, i18n.CONTACT.DESCRIPTION, renderComponent($$result, "Social", $$Social, { "links": personalLinks }), renderComponent($$result, "Button", $$Button, { "text": i18n.CONTACT.RESUME, "href": resumeUrl, "newTab": true }));
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Contact.astro", void 0);

const $$Astro$3 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projects;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const sectionId = "projects";
  const projects = i18n.PROJECTS.PROJECT_LIST;
  return renderTemplate`${maybeRenderHead()}<div id="projects_section" class="container mx-auto p-4"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId })} <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`<div class="card w-full shadow-lg hover:shadow-2xl transition-transform duration-700 ease-in-out transform hover:scale-105 group "> <figure class="overflow-hidden"> <img${addAttribute(project.IMAGE, "src")}${addAttribute(project.TITLE, "alt")} class="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"> </figure> <div class="card-body flex items-center"> <h2 class="card-title"> ${project.TITLE} <div class="badge badge-secondary">${project.BADGE}</div> </h2> <p>${project.DESCRIPTION}</p> <div class="card-actions justify-end"> ${project.CATEGORIES.map((category) => renderTemplate`<div class="badge badge-outline">${category}</div>`)} </div> <div class="flex gap-4 justify-center"> ${renderComponent($$result, "Social", $$Social, { "links": project.SOCIAL_LINKS || [] })} </div> </div> </div>`)} </div> </div> `;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Projects.astro", void 0);

const $$Astro$2 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Skills;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const skills = i18n.SKILLS.SKILL_SET;
  const sectionId = "skills";
  return renderTemplate`${maybeRenderHead()}<div id="skills_section" class=" py-12 sm:py-24"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId })} </div> <div class="mt-12"> <dl class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${skills.map((skill) => renderTemplate`<div class="flex flex-col items-center p-6 text-center rounded-lg shadow shadow-lg hover:shadow-2xl transition-transform duration-700 ease-in-out transform hover:scale-105"> <div class="flex-shrink-0"> <div class="flex items-center justify-center h-12 w-12 rounded-md hover:bg-primary bg-primary"> <i${addAttribute(`${skill.icon} fa-lg `, "class")}></i> </div> </div> <div class="mt-5"> <dt class="text-lg leading-6 font-medium ">${skill.name}</dt> <dd class="mt-2 text-base ">${skill.description}</dd> </div> </div>`)} </dl> </div> </div> </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/Skills.astro", void 0);

const $$Astro$1 = createAstro();
const $$UnderConstruction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UnderConstruction;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const sectionId = "under_construction";
  return renderTemplate`${maybeRenderHead()}<div id="under_construction" class="container mx-auto text-center p-4 max-w-4xl mt-12"> <div class="bg-base-200 rounded-lg p-8 shadow-lg"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId })} <p class="mb-4 text-base-content">${i18n.UNDER_CONSTRUCTION.MESSAGE}</p> <div class="mt-8"> ${renderComponent($$result, "Button", $$Button, { "text": i18n.UNDER_CONSTRUCTION.GITHUB_BUTTON, "href": "https://github.com/limbpuma?tab=repositories", "newTab": true })} </div> </div> </div>`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/UnderConstruction.astro", void 0);

const $$Astro = createAstro();
const $$App = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$App;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "Timeline", $$Timeline, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "UnderConstruction", $$UnderConstruction, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })} `;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/pages/App.astro", void 0);

export { $$App as $ };
