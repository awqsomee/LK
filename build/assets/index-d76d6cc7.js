var h=Object.defineProperty,g=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var p=(t,s,i)=>s in t?h(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,u=(t,s)=>{for(var i in s||(s={}))c.call(s,i)&&p(t,i,s[i]);if(n)for(var i of n(s))d.call(s,i)&&p(t,i,s[i]);return t},f=(t,s)=>g(t,j(s));var m=(t,s)=>{var i={};for(var a in t)c.call(t,a)&&s.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&n)for(var a of n(t))s.indexOf(a)<0&&d.call(t,a)&&(i[a]=t[a]);return i};import{j as r,aI as A,r as x,ax as F,F as C}from"./vendor-8a1e4858.js";import{az as T,bv as _,W as I,o as U,P as k,g as y,bw as D}from"./index-8a3ccb59.js";import E from"./form-0b29091a.js";import"./send-form-4f6c9d15.js";import"./create-form-store-c13df1a6.js";const P=i=>{var a=i,{action:t}=a,s=m(a,["action"]);return r.jsx(T,f(u({onClick:t},s),{rightIcon:r.jsx(A,{})}))},R=()=>{var t;const[s,i]=x.useState(!1),a=F(),{data:{dataUserApplication:e},error:v}=_.useApplications();return x.useEffect(()=>{var o,l;e!=null&&(o=e.subdivisions)!==null&&o!==void 0&&o.length&&(e==null||(l=e.subdivisions)===null||l===void 0?void 0:l.length)>1&&i(!0)},[e]),s?r.jsx(I,{load:()=>{U.getUserDataApplicationsFx()},data:e,error:v,children:r.jsxs(k,{children:[r.jsx(y,{type:"info",title:"Информация",icon:r.jsx(C,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Выберите должность, чтобы заполнить контактные данные по должности."}),e==null||(t=e.subdivisions)===null||t===void 0?void 0:t.map(o=>r.jsx(P,{title:o.subdivision+" ("+o.post+")",type:"link",action:()=>a.push(D+"/"+o.guid_staff)},o.guid_staff))]})}):r.jsx(E,{})};export{R as default};
