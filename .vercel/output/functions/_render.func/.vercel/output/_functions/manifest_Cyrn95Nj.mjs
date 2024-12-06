import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DzbSgXjM.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_Bi0defu0.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Ammq0kXn.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\"serviceWorker\"in navigator&&window.addEventListener(\"load\",()=>{navigator.serviceWorker.register(\"/sw.js\").then(e=>{console.log(\"Service Worker registrado con éxito\")}).catch(e=>{console.log(\"Registro de Service Worker fallido:\",e)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.Ammq0kXn.css"},{"type":"inline","content":".language-selector[data-astro-cid-ltpqzwiw]{display:inline-block;position:relative;margin-top:auto}.language-options[data-astro-cid-ltpqzwiw]{display:none;position:absolute;box-shadow:0 4px 6px #0000001a;text-decoration:none}.language-selector[data-astro-cid-ltpqzwiw]:hover .language-options[data-astro-cid-ltpqzwiw]{display:block}:root{--my-color: #fff}[data-theme=dark]{--my-color: #000}[data-theme=light]{--my-color: #ffabc8}\n"}],"routeData":{"route":"/de","isIndex":true,"type":"page","pattern":"^\\/de\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/index.astro","pathname":"/de","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\"serviceWorker\"in navigator&&window.addEventListener(\"load\",()=>{navigator.serviceWorker.register(\"/sw.js\").then(e=>{console.log(\"Service Worker registrado con éxito\")}).catch(e=>{console.log(\"Registro de Service Worker fallido:\",e)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.Ammq0kXn.css"},{"type":"inline","content":".language-selector[data-astro-cid-ltpqzwiw]{display:inline-block;position:relative;margin-top:auto}.language-options[data-astro-cid-ltpqzwiw]{display:none;position:absolute;box-shadow:0 4px 6px #0000001a;text-decoration:none}.language-selector[data-astro-cid-ltpqzwiw]:hover .language-options[data-astro-cid-ltpqzwiw]{display:block}:root{--my-color: #fff}[data-theme=dark]{--my-color: #000}[data-theme=light]{--my-color: #ffabc8}\n"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\"serviceWorker\"in navigator&&window.addEventListener(\"load\",()=>{navigator.serviceWorker.register(\"/sw.js\").then(e=>{console.log(\"Service Worker registrado con éxito\")}).catch(e=>{console.log(\"Registro de Service Worker fallido:\",e)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.Ammq0kXn.css"},{"type":"inline","content":".language-selector[data-astro-cid-ltpqzwiw]{display:inline-block;position:relative;margin-top:auto}.language-options[data-astro-cid-ltpqzwiw]{display:none;position:absolute;box-shadow:0 4px 6px #0000001a;text-decoration:none}.language-selector[data-astro-cid-ltpqzwiw]:hover .language-options[data-astro-cid-ltpqzwiw]{display:block}:root{--my-color: #fff}[data-theme=dark]{--my-color: #000}[data-theme=light]{--my-color: #ffabc8}\n"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\"serviceWorker\"in navigator&&window.addEventListener(\"load\",()=>{navigator.serviceWorker.register(\"/sw.js\").then(e=>{console.log(\"Service Worker registrado con éxito\")}).catch(e=>{console.log(\"Registro de Service Worker fallido:\",e)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.Ammq0kXn.css"},{"type":"inline","content":".language-selector[data-astro-cid-ltpqzwiw]{display:inline-block;position:relative;margin-top:auto}.language-options[data-astro-cid-ltpqzwiw]{display:none;position:absolute;box-shadow:0 4px 6px #0000001a;text-decoration:none}.language-selector[data-astro-cid-ltpqzwiw]:hover .language-options[data-astro-cid-ltpqzwiw]{display:block}:root{--my-color: #fff}[data-theme=dark]{--my-color: #000}[data-theme=light]{--my-color: #ffabc8}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/pages/de/index.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/pages/es/index.astro",{"propagation":"none","containsHead":true}],["D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/de/index@_@astro":"pages/de.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_Cyrn95Nj.mjs","D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/CookieConsent.jsx":"_astro/CookieConsent.BNC9WC9T.js","D:/Lim/Developer/Projects/Portfolio/Portfolio_Astro/src/components/ThemeToggleButton.jsx":"_astro/ThemeToggleButton.RzNrTY0j.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.CyEPjFW4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.Ammq0kXn.css","/about.txt","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.svg","/manifest.json","/robots.txt","/site.webmanifest","/sitemap.xml","/sw.js","/cv/ResumeDE.pdf","/cv/ResumeEN.pdf","/cv/ResumeES.pdf","/images/astro.svg","/images/barbershop_1.webp","/images/de.svg","/images/de.webp","/images/en.webp","/images/error404.webp","/images/es.webp","/images/image-profil.webp","/images/img-contact_1.webp","/images/integra_1.webp","/images/proyect_1.webp","/images/react.svg","/images/tailwind.svg","/images/tailwind1.svg","/_astro/client.BIGLHmRd.js","/_astro/CookieConsent.BNC9WC9T.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/ThemeToggleButton.RzNrTY0j.js"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","de","es"],"defaultLocale":"de","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"+G+I1hdkcvOFeAs/q+oQZR0h6jS56xYDFU1yDkv7TPw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
