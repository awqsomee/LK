var z=Object.defineProperty,k=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var m=(e,s,t)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,c=(e,s)=>{for(var t in s||(s={}))x.call(s,t)&&m(e,t,s[t]);if(a)for(var t of a(s))o.call(s,t)&&m(e,t,s[t]);return e},g=(e,s)=>k(e,f(s));var p=(e,s)=>{var t={};for(var i in e)x.call(e,i)&&s.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&a)for(var i of a(e))s.indexOf(i)<0&&o.call(e,i)&&(t[i]=e[i]);return t};import{s as u,j as r}from"./vendor-60fdf703.js";import{i as S,aF as h}from"./index-e6036b0c.js";const B=u.div.withConfig({componentId:"sc-17p2nth-0"})(["width:100%;"]),W=()=>r.jsxs(B,{children:[r.jsx(h,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),r.jsx(h,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),r.jsx(h,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),r.jsx(h,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),r.jsx(h,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),r.jsx(h,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),r.jsx(h,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),r.jsx(h,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),C=t=>{var i=t,{forwardedRef:e}=i,s=p(i,["forwardedRef"]);const n=s,{children:d,skeleton:l=r.jsx(W,{}),loading:j=!1}=n,w=p(n,["children","skeleton","loading"]);return r.jsx(S,g(c({ref:e},w),{className:"block",children:j?l:d}))};export{C as B};
