/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Bi0defu0.mjs';
import 'kleur/colors';
import { $ as $$App } from '../chunks/App_0xQGxe92.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/pages/en/index.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
