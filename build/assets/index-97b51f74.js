var v=Object.defineProperty,g=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var p=(t,s,a)=>s in t?v(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,u=(t,s)=>{for(var a in s||(s={}))c.call(s,a)&&p(t,a,s[a]);if(n)for(var a of n(s))d.call(s,a)&&p(t,a,s[a]);return t},f=(t,s)=>g(t,j(s));var m=(t,s)=>{var a={};for(var i in t)c.call(t,i)&&s.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&n)for(var i of n(t))s.indexOf(i)<0&&d.call(t,i)&&(a[i]=t[i]);return a};import{j as r,aH as A,r as x,aw as F,F as C}from"./vendor-60fdf703.js";import{ar as T,bw as _,W as U,a$ as k,P as y,f as D,bx as E}from"./index-5cf38ea0.js";import H from"./form-33ecd270.js";import"./send-form-81b0f347.js";import"./create-form-store-568dea58.js";const I=a=>{var i=a,{action:t}=i,s=m(i,["action"]);return r.jsx(T,f(u({onClick:t},s),{rightIcon:r.jsx(A,{})}))},R=()=>{var t;const[s,a]=x.useState(!1),i=F(),{data:{dataUserApplication:e},error:h}=_.useApplications();return x.useEffect(()=>{var o,l;e!=null&&(o=e.subdivisions)!==null&&o!==void 0&&o.length&&(e==null||(l=e.subdivisions)===null||l===void 0?void 0:l.length)>1&&a(!0)},[e]),s?r.jsx(U,{load:()=>{k.getUserDataApplicationsFx()},data:e,error:h,children:r.jsxs(y,{children:[r.jsx(D,{type:"info",title:"Информация",icon:r.jsx(C,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Выберите должность, чтобы заполнить контактные данные по должности."}),e==null||(t=e.subdivisions)===null||t===void 0?void 0:t.map(o=>r.jsx(I,{title:o.subdivision+" ("+o.post+")",type:"link",action:()=>i.push(E+"/"+o.guid_staff)},o.guid_staff))]})}):r.jsx(H,{})};export{R as default};
