var v=Object.defineProperty,g=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var p=(t,s,i)=>s in t?v(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,u=(t,s)=>{for(var i in s||(s={}))c.call(s,i)&&p(t,i,s[i]);if(n)for(var i of n(s))d.call(s,i)&&p(t,i,s[i]);return t},f=(t,s)=>g(t,j(s));var m=(t,s)=>{var i={};for(var a in t)c.call(t,a)&&s.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&n)for(var a of n(t))s.indexOf(a)<0&&d.call(t,a)&&(i[a]=t[a]);return i};import{j as r,a0 as A,r as x,X as C,F}from"./vendor-93473b96.js";import{T,s as _,W as U,e as k,P as y,M as D,C as E}from"./index-7eec75d1.js";import I from"./form-d4d7e053.js";import"./create-form-store-decf77a0.js";import"./send-form-4b367774.js";const P=i=>{var a=i,{action:t}=a,s=m(a,["action"]);return r.jsx(T,f(u({onClick:t},s),{rightIcon:r.jsx(A,{})}))},W=()=>{var t;const[s,i]=x.useState(!1),a=C(),{data:{dataUserApplication:e},error:h}=_.useApplications();return x.useEffect(()=>{var o,l;e!=null&&(o=e.subdivisions)!==null&&o!==void 0&&o.length&&(e==null||(l=e.subdivisions)===null||l===void 0?void 0:l.length)>1&&i(!0)},[e]),s?r.jsx(U,{load:()=>{k.getUserDataApplicationsFx()},data:e,error:h,children:r.jsxs(y,{children:[r.jsx(D,{type:"info",title:"Информация",icon:r.jsx(F,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Выберите должность, чтобы заполнить контактные данные по должности."}),e==null||(t=e.subdivisions)===null||t===void 0?void 0:t.map(o=>r.jsx(P,{title:o.subdivision+" ("+o.post+")",type:"link",action:()=>a.push(E+"/"+o.guid_staff)},o.guid_staff))]})}):r.jsx(I,{})};export{W as default};
