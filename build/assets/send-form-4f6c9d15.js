var v=Object.defineProperty,w=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(r,a,e)=>a in r?v(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,l=(r,a)=>{for(var e in a||(a={}))d.call(a,e)&&n(r,e,a[e]);if(f)for(var e of f(a))h.call(a,e)&&n(r,e,a[e]);return r},u=(r,a)=>w(r,F(a));var y=(r,a,e)=>new Promise((o,s)=>{var p=t=>{try{c(e.next(t))}catch(i){s(i)}},m=t=>{try{c(e.throw(t))}catch(i){s(i)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(p,m);c((e=e.apply(r,a)).next())});import"./vendor-8a1e4858.js";import{d0 as k,p as x}from"./index-8a3ccb59.js";const U=(r,a,e,o,s)=>y(void 0,null,function*(){e(!0);const p=k(r);try{s?yield a(u(l({},p),{formId:s})):yield a(l({},p)),e(!1),o({completed:!0})}catch(m){e(!1),x.evokePopUpMessage({message:`${m}`,type:"failure",time:3e4})}});export{U as s};
