var v=Object.defineProperty,w=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(r,a,e)=>a in r?v(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,l=(r,a)=>{for(var e in a||(a={}))d.call(a,e)&&n(r,e,a[e]);if(f)for(var e of f(a))h.call(a,e)&&n(r,e,a[e]);return r},u=(r,a)=>w(r,F(a));var y=(r,a,e)=>new Promise((p,s)=>{var o=t=>{try{c(e.next(t))}catch(i){s(i)}},m=t=>{try{c(e.throw(t))}catch(i){s(i)}},c=t=>t.done?p(t.value):Promise.resolve(t.value).then(o,m);c((e=e.apply(r,a)).next())});import"./vendor-60fdf703.js";import{d0 as k,aQ as x}from"./index-040a4e16.js";const Q=(r,a,e,p,s)=>y(void 0,null,function*(){e(!0);const o=k(r);try{s?yield a(u(l({},o),{formId:s})):yield a(l({},o)),e(!1),p({completed:!0})}catch(m){e(!1),x.evokePopUpMessage({message:`${m}`,type:"failure",time:3e4})}});export{Q as s};
