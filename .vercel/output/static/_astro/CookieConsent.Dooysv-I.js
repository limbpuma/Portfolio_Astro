import{r as l}from"./index.NEDEFKed.js";var f={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,_=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function p(o,e,s){var t,r={},c=null,i=null;s!==void 0&&(c=""+s),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)d.call(e,t)&&!h.hasOwnProperty(t)&&(r[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:m,type:o,key:c,ref:i,props:r,_owner:_.current}}a.Fragment=x;a.jsx=p;a.jsxs=p;f.exports=a;var n=f.exports;const k=()=>{const[o,e]=l.useState(!1);l.useEffect(()=>{localStorage.getItem("cookieConsent")||e(!0)},[]);const s=()=>{localStorage.setItem("cookieConsent","accepted"),e(!1)},t=()=>{e(!1)};return o?n.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4",children:n.jsxs("div",{className:"max-w-xl mx-auto text-center",children:[n.jsx("p",{children:"Usamos cookies por alguna razón. ¿Aceptas su uso?"}),n.jsx("button",{className:"btn btn-primary m-2",onClick:s,children:"Aceptar"}),n.jsx("button",{className:"btn btn-ghost m-2",onClick:t,children:"Rechazar"})]})}):null};export{k as default};
