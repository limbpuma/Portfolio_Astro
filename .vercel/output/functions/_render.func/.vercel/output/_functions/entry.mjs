import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Gt_HmuyG.mjs';
import { manifest } from './manifest_Cyrn95Nj.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/de.astro.mjs');
const _page3 = () => import('./pages/en.astro.mjs');
const _page4 = () => import('./pages/es.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/de/index.astro", _page2],
    ["src/pages/en/index.astro", _page3],
    ["src/pages/es/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "876315fe-ae94-4fbc-9894-dfbcc9566df5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
