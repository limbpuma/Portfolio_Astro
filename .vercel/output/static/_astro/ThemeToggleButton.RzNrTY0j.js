import{j as n}from"./jsx-runtime.7faW4zRM.js";import{r as o}from"./index.DhYZZe0J.js";const u=()=>{const[t,s]=o.useState(null);o.useEffect(()=>{const e=document.documentElement.getAttribute("data-theme")||"night";s(e==="night")},[]);const m=()=>{const e=t?"cupcake":"night";document.documentElement.setAttribute("data-theme",e),e==="night"?document.documentElement.classList.add("night"):document.documentElement.classList.remove("night"),s(!t)};return t===null?null:n.jsxs("button",{onClick:m,className:"flex cursor-pointer gap-2 items-center hover:text-primary btn-ghost rounded-full p-2",children:[!t&&n.jsx("i",{className:"fas fa-moon"}),t&&n.jsx("i",{className:"fas fa-sun"})]})};export{u as default};
