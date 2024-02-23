/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, e as renderComponent, j as renderHead, k as renderSlot } from '../astro_rbXK4LF8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';
/* empty css                          */

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
  if (isnight === null)
    return null;
  return /* @__PURE__ */ jsxs("button", { onClick: toggleTheme, className: "flex cursor-pointer gap-2 items-center hover:text-primary btn-ghost rounded-full p-2", children: [
    !isnight && /* @__PURE__ */ jsx("i", { className: "fas fa-moon" }),
    isnight && /* @__PURE__ */ jsx("i", { className: "fas fa-sun" })
  ] });
};

const $$Astro$g = createAstro();
const $$LanguageSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const languages = {
    en: "/images/en.webp",
    es: "/images/es.webp",
    de: "/images/de.webp"
  };
  const currentPath = Astro2.url.pathname;
  const currentLocale = Object.keys(languages).find((lang) => currentPath.startsWith(`/${lang}`)) || "en";
  const otherLanguages = Object.entries(languages).filter(([code]) => code !== currentLocale);
  return renderTemplate`${maybeRenderHead()}<div class="language-selector hover:bg-transparent focus:bg-transparent active:bg-transparent" data-astro-cid-ltpqzwiw> <button data-astro-cid-ltpqzwiw><a${addAttribute(`/${currentLocale === "en" ? "" : currentLocale}`, "href")} class="rounded-full active:bg-transparent" data-astro-cid-ltpqzwiw></a><img${addAttribute(languages[currentLocale], "src")}${addAttribute(currentLocale.toUpperCase(), "alt")} class="rounded-full w-6 h-6" data-astro-cid-ltpqzwiw> </button> <div class="language-options " data-astro-cid-ltpqzwiw> ${otherLanguages.map(([code, image]) => renderTemplate`<a${addAttribute(`/${code === "en" ? "" : code}`, "href")} class="block mt-2" data-astro-cid-ltpqzwiw> <img${addAttribute(image, "src")}${addAttribute(code.toUpperCase(), "alt")} class="rounded-full w-6 h-6" data-astro-cid-ltpqzwiw> </a>`)} </div> </div> `;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/LanguageSelector.astro", void 0);

const SEO_TITLE$2 = "Limber Martinez - Junior Full Stack Developer";
const SEO_DESCRIPTION$2 = "Discover Limber Martinez's portfolio, a Junior Full Stack Developer trained in React, Angular, and basics of Java and Spring Boot, seeking opportunities as a Junior or Trainee.";
const NAVBAR$2 = {
	ITEM1: "About Me",
	ITEM2: "Education",
	ITEM3: "Skills",
	ITEM4: "Projects",
	ITEM5: "Contact"
};
const HERO$2 = {
	TITLE: "Limber Martinez",
	SUBTITLE: "Junior Full Stack Developer",
	DESCRIPTION: "With a strong foundation in Frontend technologies and basic knowledge of Backend, Im searching for my first professional experience in the tech world. A graduate of intensive programs, Im ready to contribute and continue learning.",
	BUTTON: "Explore My Work"
};
const ABOUT_ME$2 = {
	TITLE: "About Me",
	PARAGRAPH_1: "Hello, I'm Limber Martinez, a passionate web developer with a focus on Frontend and a growing interest in Backend. I began my training at ILS in Hamburg, progressing through specializations in React and Angular, and acquiring fundamentals of NodeJS and Java.",
	PARAGRAPH_2: "My recent participation in the Oracle One Altura Education Alura program introduced me to Java and Spring Boot. I value the Scrum methodology and the importance of interpersonal skills in technical teams.",
	PARAGRAPH_3: "Looking for opportunities as a Junior Frontend Developer or Trainee, I am eager to apply my knowledge and grow in a challenging environment."
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
			TITLE: "Project 1",
			BADGE: "New1",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 2",
			BADGE: "New2",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 3",
			BADGE: "New3",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 4",
			BADGE: "New4",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 5",
			BADGE: "New5",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 6",
			BADGE: "New6",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
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
	RESUME_URL: "../public/cv/ResumeEN.pdf"
};
const FOOTER$2 = {
	PRIVACY_POLICY: "Privacy Policy",
	LEGAL_NOTICE: "Legal Notice",
	COPYRIGHT: "Copyright © Limber Martinez 2024. All rights reserved."
};
const UNDER_CONSTRUCTION$2 = {
	MESSAGE: "I'm currently refreshing my project portfolio for 2024. Meanwhile, discover my 2023 projects on GitHub.",
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

const SEO_TITLE$1 = "Limber Martinez - Junior Full-Stack-Entwickler";
const SEO_DESCRIPTION$1 = "Entdecken Sie das Portfolio von Limber Martinez, einem Junior Full-Stack-Entwickler mit Ausbildung in React, Angular sowie Grundlagen in Java und Spring Boot, der nach Möglichkeiten als Junior oder Trainee sucht.";
const NAVBAR$1 = {
	ITEM1: "Über Mich",
	ITEM2: "Bildung",
	ITEM3: "Skills",
	ITEM4: "Projekte",
	ITEM5: "Kontakt"
};
const HERO$1 = {
	TITLE: "Limber Martinez",
	SUBTITLE: "Junior Full-Stack-Entwickler",
	DESCRIPTION: "Mit einer soliden Grundlage in Frontend-Technologien und Grundkenntnissen im Backend suche ich nach meiner ersten beruflichen Erfahrung in der Tech-Welt. Als Absolvent intensiver Programme bin ich bereit, beizutragen und weiter zu lernen.",
	BUTTON: "Meine Arbeit Entdecken"
};
const ABOUT_ME$1 = {
	TITLE: "Über Mich",
	PARAGRAPH_1: "Hallo, ich bin Limber Martinez, ein leidenschaftlicher Webentwickler mit Schwerpunkt auf dem Frontend und wachsendem Interesse am Backend. Ich begann meine Ausbildung am ILS in Hamburg, machte Fortschritte durch Spezialisierungen in React und Angular und erwarb Grundlagen in NodeJS und Java.",
	PARAGRAPH_2: "Meine jüngste Teilnahme am Oracle One Altura Education Alura-Programm führte mich in Java und Spring Boot ein. Ich schätze die Scrum-Methodologie und die Bedeutung von zwischenmenschlichen Fähigkeiten in technischen Teams.",
	PARAGRAPH_3: "Auf der Suche nach Möglichkeiten als Junior Frontend-Entwickler oder Trainee bin ich begierig, mein Wissen anzuwenden und in einer herausfordernden Umgebung zu wachsen."
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
			TITLE: "Project 1",
			BADGE: "New1",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 2",
			BADGE: "New2",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 3",
			BADGE: "New3",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 4",
			BADGE: "New4",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 5",
			BADGE: "New5",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 6",
			BADGE: "New6",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
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
	RESUME_URL: "../public/cv/ResumeDE.pdf"
};
const FOOTER$1 = {
	PRIVACY_POLICY: "Datenschutzrichtlinie",
	LEGAL_NOTICE: "Rechtlicher Hinweis",
	COPYRIGHT: "Urheberrecht © Limber Martinez 2024. Alle Rechte vorbehalten."
};
const UNDER_CONSTRUCTION$1 = {
	MESSAGE: "Ich aktualisiere gerade mein Projektportfolio für 2024. In der Zwischenzeit entdecken Sie meine Projekte von 2023 auf GitHub.",
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

const SEO_TITLE = "Limber Martinez - Desarrollador Full Stack Junior";
const SEO_DESCRIPTION = "Descubre el portafolio de Limber Martinez, un Desarrollador Full Stack Junior con formación en React, Angular y fundamentos de Java y Spring Boot, buscando oportunidades como Junior o Trainee.";
const NAVBAR = {
	ITEM1: "Sobre Mí",
	ITEM2: "Formación",
	ITEM3: "Skills",
	ITEM4: "Proyectos",
	ITEM5: "Contacto"
};
const HERO = {
	TITLE: "Limber Martinez",
	SUBTITLE: "Desarrollador Full Stack Junior",
	DESCRIPTION: "Con una sólida formación en tecnologías Frontend y conocimientos básicos de Backend, estoy en búsqueda de mi primera experiencia profesional en el mundo tecnológico. Graduado de programas intensivos, estoy listo para aportar y seguir aprendiendo.",
	BUTTON: "Explora mis Trabajos"
};
const ABOUT_ME = {
	TITLE: "Sobre Mí",
	PARAGRAPH_1: "Hola, soy Limber Martinez, un apasionado del desarrollo web con énfasis en Frontend y un creciente interés en Backend. Comencé mi formación en el ILS de Hamburgo, avanzando a través de especializaciones en React y Angular, y adquiriendo fundamentos de NodeJS y Java.",
	PARAGRAPH_2: "Mi participación reciente en el programa de Oracle One Altura Education Alura me introdujo en Java y Spring Boot. Valoro la metodología Scrum y la importancia de las habilidades interpersonales en equipos técnicos.",
	PARAGRAPH_3: "Buscando oportunidades como Desarrollador Frontend Junior o Trainee, estoy ansioso por aplicar mis conocimientos y crecer en un entorno desafiante."
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
			TITLE: "Project 1",
			BADGE: "New1",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 2",
			BADGE: "New2",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 3",
			BADGE: "New3",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 4",
			BADGE: "New4",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 5",
			BADGE: "New5",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"Category 1",
				"Category 2"
			]
		},
		{
			TITLE: "Project 6",
			BADGE: "New6",
			DESCRIPTION: "Description of Project 1.",
			IMAGE: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
			CATEGORIES: [
				"React",
				"tailwind"
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
	RESUME_URL: "../public/cv/ResumeES.pdf"
};
const FOOTER = {
	PRIVACY_POLICY: "Política de Privacidad",
	LEGAL_NOTICE: "Aviso Legal",
	COPYRIGHT: "Derechos de autor © Limber Martinez 2024. Todos los derechos reservados."
};
const UNDER_CONSTRUCTION = {
	MESSAGE: "Actualmente estoy renovando mi portafolio de proyectos para 2024. Mientras tanto, puedes visitar mi GitHub para ver los proyectos de 2023.",
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
  currentLocale = "en"
}) => {
  if (currentLocale === LANG.GERMAN)
    return { ...english, ...german };
  if (currentLocale === LANG.SPANISH)
    return { ...english, ...spanish };
  return english;
};

const $$Astro$f = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="navbar bg-base-100 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="navbar-start"> <div class="dropdown"> <div tabindex="0" role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg> </div> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> <li><a href="#aboutme_section">${i18n.NAVBAR.ITEM1}</a></li> <li><a href="#education_section">${i18n.NAVBAR.ITEM2}</a></li> <li><a href="#skills_section">${i18n.NAVBAR.ITEM3}</a></li> <!-- <li><a href="projects_section">{i18n.NAVBAR.ITEM4}</a></li> --> <li><a href="#contact_section">${i18n.NAVBAR.ITEM5}</a></li> <li><a>${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/LanguageSelector.astro", "client:component-export": "default" })}</a></li> </ul> </div> <a class="btn btn-ghost text-xl"> <i class="fas fa-laptop-code"></i> LimberDev
</a> </div> <div class="navbar-center hidden lg:flex"> <ul class="menu menu-horizontal px-1 "> <li><a href="#aboutme_section">${i18n.NAVBAR.ITEM1}</a></li> <li><a href="#education_section">${i18n.NAVBAR.ITEM2}</a></li> <li><a href="#skills_section">${i18n.NAVBAR.ITEM3}</a></li> <!-- <li><a href="projects_section">{i18n.NAVBAR.ITEM4}</a></li> --> <li><a href="#contact_section">${i18n.NAVBAR.ITEM5}</a></li> <li>${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})}</li> </ul> </div> <div class="navbar-end"> ${renderComponent($$result, "ThemeToggleButton", ThemeToggleButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/ThemeToggleButton.jsx", "client:component-export": "default" })} </div> </div> ./LanguageSelector.jsx/index.js`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/Navbar.astro", void 0);

const LegalModal = ({ title, content, closeButtonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "hover:text-primary px-4 py-2 text-lg no-underline font-bold cursor-pointer",
        onClick: () => setIsOpen(true),
        children: title
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-base-100 p-6 rounded-lg max-w-lg mx-auto text-center shadow-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary mb-4", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mb-4", children: content }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btn btn-primary rounded-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-600 bg-primary-500 text-white px-4 py-2",
          onClick: () => setIsOpen(false),
          children: closeButtonText
        }
      )
    ] }) })
  ] });
};

const PrivacyModal = ({ title, content, dataCollection, dataUsage, dataProtection, userRights, closeButtonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "hover:text-primary px-4 py-2 text-lg no-underline font-bold cursor-pointer",
        onClick: () => setIsOpen(true),
        children: title
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "modal-box relative bg-base-100 p-6 rounded-lg max-w-lg mx-auto shadow-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg", children: title }),
      /* @__PURE__ */ jsx("p", { children: content }),
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Information Collection" }),
      /* @__PURE__ */ jsx("p", { children: dataCollection }),
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Use of Information" }),
      /* @__PURE__ */ jsx("p", { children: dataUsage }),
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Protecting Your Information" }),
      /* @__PURE__ */ jsx("p", { children: dataProtection }),
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Your Rights" }),
      /* @__PURE__ */ jsx("p", { children: userRights }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btn btn-primary rounded-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-600 bg-primary-500 text-white px-4 py-2",
          onClick: () => setIsOpen(false),
          children: closeButtonText
        }
      )
    ] }) })
  ] });
};

const $$Astro$e = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<footer class="bg-base-100 text-base-content p-10 rounded-lg w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"> <div class="container mx-auto text-center"> <div class="mb-4"> <div class="flex justify-center gap-4"> <!-- Itera sobre cada enlace de tecnología para generar dinámicamente los iconos --> ${techLinks.map((tech) => renderTemplate`<a${addAttribute(tech.url, "href")} class="tooltip tooltip-bottom"${addAttribute(tech.name, "data-tip")} target="_blank" rel="noopener noreferrer"> <img${addAttribute(tech.icon, "src")} class="w-8 h-8 filter hover:brightness-125"${addAttribute(tech.name, "alt")} loading="lazy"> </a>`)} </div> </div> <div class="mb-4"> ${renderComponent($$result, "LegalModal", LegalModal, { "client:load": true, "title": legalTitle, "content": legalContent, "closeButtonText": closeButtonText, "client:component-hydration": "load", "client:component-path": "@components/LegalModal.jsx", "client:component-export": "default" })} ${renderComponent($$result, "PrivacyModal", PrivacyModal, { "client:load": true, "title": "Privacy Policy", "content": i18n.PRIVACY.CONTENT, "dataCollection": i18n.PRIVACY.DATA_COLLECTION, "dataUsage": i18n.PRIVACY.DATA_USAGE, "dataProtection": i18n.PRIVACY.DATA_PROTECTION, "userRights": i18n.PRIVACY.USER_RIGHTS, "closeButtonText": i18n.PRIVACY.CLOSE_BUTTON, "client:component-hydration": "load", "client:component-path": "@components/PrivacyModal.jsx", "client:component-export": "default" })} </div> <p class="text-sm mb-2">${i18n.FOOTER.COPYRIGHT}</p> </div> </footer>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/Footer.astro", void 0);

function getLangFromUrl(url) {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const lang = pathSegments[0] || "en";
  return lang;
}

const $$Astro$d = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")} data-theme="night"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$c = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, href, newTab = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`btn btn-primary rounded-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-600 bg-primary-500 text-white px-4 py-2 ${newTab ? "" : 'target="_self"'}`, "class")}${addAttribute(newTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute(newTab ? "_blank" : "_self", "target")}> ${text} </a>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/Button.astro", void 0);

const $$Astro$b = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Hero;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-screen"> <div class="hero-content text-center"> <div class="max-w-md"> <p class="font-bold tracking-wide uppercase">${i18n.HERO.SUBTITLE}</p> <h1 class="font-bold font-heading leading-tighter tracking-tighter mb-4 md:text-6xl text-5xl">${i18n.HERO.TITLE}</h1> <p class="text-muted text-xl mb-6">${i18n.HERO.DESCRIPTION}</p> ${renderComponent($$result, "Button", $$Button, { "text": i18n.HERO.BUTTON, "href": "#contact_section" })} </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/Hero.astro", void 0);

const $$Astro$a = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Social;
  const { links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4 justify-center"> ${links.map((link, index) => renderTemplate`<a${addAttribute(link.url, "href")} class="hover:text-primary cursor-pointer" target="_blank" rel="noopener noreferrer"${addAttribute(link.label ?? "", "title")}> <i${addAttribute(`${link.iconClass} fa-2x`, "class")}></i> </a>`)} </div>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/Social.astro", void 0);

const $$Astro$9 = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const personalLinks = [
    { url: "https://www.linkedin.com/in/limber-martinez-developer/", iconClass: "fab fa-linkedin", label: "LinkedIn" },
    { url: "https://github.com/limbpuma", iconClass: "fab fa-github", label: "GitHub" }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="aboutme_section" class="mx-auto max-w-7xl md:px-8 p-4"> <div class="md:flex md:gap-16"> <div class="md:basis-1/2 self-center"> <div class="text-lg mb-12"> <h3 class="mb-4 font-bold tracking-tight sm:text-3xl text-2xl text-center"> ${i18n.ABOUT_ME.TITLE} </h3> <p>${i18n.ABOUT_ME.PARAGRAPH_1}</p> <br> <p>${i18n.ABOUT_ME.PARAGRAPH_2}</p> <br> <p>${i18n.ABOUT_ME.PARAGRAPH_3}</p> </div> </div> <div class="md:basis-1/2 md:mt-0 mt-12" aria-hidden="true"> <img alt="A colorful image representing creativity" class="mx-auto w-full h-96 max-h-96 object-cover bg-gray-500 rounded-lg shadow-lg" src="../images/image-profil.jpg" alt="abotme_image" loading="lazy"> <div class="flex gap-4 justify-center mt-8"> ${renderComponent($$result, "Social", $$Social, { "links": personalLinks })} </div> </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/AboutMe.astro", void 0);

const $$Astro$8 = createAstro();
const $$SectionTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const sectionTitles = i18n.TITLESECTION;
  const { sectionId } = Astro2.props;
  const selectedTitle = sectionTitles[sectionId] || { title: "Title not found", subtitle: "Subtitle not found" };
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center mb-12 mt-12"> <div class="text-center"> <h4 class="font-bold  tracking-wide uppercase font-bold mb-4 mt-4 text-primary">${selectedTitle.title}</h4> <h2 class="text-4xl font-bold mb-4 mt-4">${selectedTitle.subtitle}</h2> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/SectionTitle.astro", void 0);

const $$Astro$7 = createAstro();
const $$Timeline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const sectionId = "timeline";
  return renderTemplate`${maybeRenderHead()}<div id="education_section"> <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId })} ${i18n.TIMELINE.EVENTS.map((event, index) => renderTemplate`<li> <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg> </div> <div${addAttribute(`timeline-${index % 2 === 0 ? "start md:text-end" : "end"} mb-10`, "class")}> <time class="font-mono italic">${event.DATE}</time> <div class="text-lg font-black">${event.TITLE}</div> ${event.DESCRIPTION} </div> ${index !== i18n.TIMELINE.EVENTS.length - 1 && renderTemplate`<hr>`} </li>`)} </ul> </div>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/Timeline.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Contact;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const resumeUrl = i18n.CONTACT.RESUME_URL;
  const sectionId = "contact";
  const personalLinks = [
    { url: "https://www.linkedin.com/in/limber-martinez-developer/", iconClass: "fab fa-linkedin", label: "LinkedIn" },
    { url: "https://github.com/limbpuma", iconClass: "fab fa-github", label: "GitHub" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<div id="contact_section"> ', ' <div class="flex flex-col lg:flex-row items-center bg-base-200 p-4 rounded-lg shadow mx-auto"> <div class="text-center lg:w-1/2 p-4"> <img src="../images/img-contact.png" alt="Anfitri\xF3n" class="rounded-full w-32 h-32 mb-4 mx-auto border-2 p-2" loading="lazy"> <h2 class="text-2xl font-bold mb-2">', '</h2> <h3 class="text-xl mb-4">', '</h3> <p class="mb-4">', '</p> <div class="flex gap-4 justify-center"> ', ' </div> <div class="mt-8"> ', ' </div> </div> <div class="w-full lg:w-1/2 flex justify-center items-center my-4 lg:my-0"> <!-- Ajusta el margen vertical aqu\xED --> <div class="calendly-inline-widget w-full" data-url="https://calendly.com/limbpuma/30min?hide_event_type_details=1&hide_gdpr_banner=1" style="height: 700px;"></div> </div> </div> <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async><\/script> </div>'])), maybeRenderHead(), renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId }), i18n.CONTACT.SUBTITLE, i18n.CONTACT.TITLE, i18n.CONTACT.DESCRIPTION, renderComponent($$result, "Social", $$Social, { "links": personalLinks }), renderComponent($$result, "Button", $$Button, { "text": i18n.CONTACT.RESUME, "href": resumeUrl, "newTab": true }));
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/Contact.astro", void 0);

const $$Astro$5 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Skills;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const skills = i18n.SKILLS.SKILL_SET;
  const sectionId = "skills";
  return renderTemplate`${maybeRenderHead()}<div id="skills_section" class=" py-12 sm:py-24"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId })} </div> <div class="mt-12"> <dl class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${skills.map((skill) => renderTemplate`<div class="flex flex-col items-center p-6 text-center rounded-lg shadow shadow-lg hover:shadow-2xl transition-transform duration-700 ease-in-out transform hover:scale-105"> <div class="flex-shrink-0"> <div class="flex items-center justify-center h-12 w-12 rounded-md hover:bg-primary bg-primary"> <i${addAttribute(`${skill.icon} fa-lg `, "class")}></i> </div> </div> <div class="mt-5"> <dt class="text-lg leading-6 font-medium ">${skill.name}</dt> <dd class="mt-2 text-base ">${skill.description}</dd> </div> </div>`)} </dl> </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/Skills.astro", void 0);

const $$Astro$4 = createAstro();
const $$UnderConstruction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnderConstruction;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const sectionId = "under_construction";
  return renderTemplate`${maybeRenderHead()}<div id="under_construction" class="container mx-auto text-center p-4 max-w-4xl mt-12"> <div class="bg-base-200 rounded-lg p-8 shadow-lg"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "sectionId": sectionId })} <p class="mb-4 text-base-content">${i18n.UNDER_CONSTRUCTION.MESSAGE}</p> <div class="mt-8"> ${renderComponent($$result, "Button", $$Button, { "text": i18n.UNDER_CONSTRUCTION.GITHUB_BUTTON, "href": "https://github.com/limbpuma?tab=repositories", "newTab": true })} </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/UnderConstruction.astro", void 0);

const $$Astro$3 = createAstro();
const $$App = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$App;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "Timeline", $$Timeline, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "UnderConstruction", $$UnderConstruction, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })} `;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/components/pages/App.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/pages/de/index.astro", void 0);

const $$file$2 = "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/pages/de/index.astro";
const $$url$2 = "/de";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/pages/es/index.astro", void 0);

const $$file$1 = "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/pages/es/index.astro";
const $$url$1 = "/es";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/limbp/Documents/Developer/Astro/limber-portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
