var D=Object.defineProperty,S=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(r,t,e)=>t in r?D(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,c=(r,t)=>{for(var e in t||(t={}))y.call(t,e)&&u(r,e,t[e]);if(F)for(var e of F(t))b.call(t,e)&&u(r,e,t[e]);return r},p=(r,t)=>S(r,v(t));var f=(r,t,e)=>new Promise((l,g)=>{var d=s=>{try{m(e.next(s))}catch(o){g(o)}},n=s=>{try{m(e.throw(s))}catch(o){g(o)}},m=s=>s.done?l(s.value):Promise.resolve(s.value).then(d,n);m((e=e.apply(r,t)).next())});import{p as h,e as k,x,h as E,u as i}from"./vendor-8a1e4858.js";import{p as w,o as U}from"./index-8977d86c.js";const M=({defaultStore:r,api:t})=>{const e=r,l=()=>({data:i(s).data,loading:i(n.pending),error:i(s).error,completed:i(s).completed}),g=h({name:"changeCompleted",sid:"bdeski"}),d=k(o=>f(void 0,null,function*(){const a=yield t.post(o);if(a.data.result!=="ok")throw new Error(a.data.error_text);return a.data}),{name:"postFormFx",sid:"11hxn"});x({and:[{clock:d.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:w.evokePopUpMessage}],or:{sid:"ghfco3"}}),x({and:[{clock:d.failData,fn:o=>({message:`${o.message}`,type:"failure"}),target:w.evokePopUpMessage}],or:{sid:"gxddvk"}}),x({and:[{clock:d.doneData,target:U.getApplicationsFx}],or:{sid:"hdbf31"}});const n=k(o=>f(void 0,null,function*(){if(t.get)try{const a=yield t.get(o);return c({},a.data)}catch(a){throw new Error(a)}return e.data}),{name:"getFormFx",sid:"gh6pbx"}),m=h({name:"clearStore",sid:"txg1si"}),s=E(e,{name:"$formStore",sid:"-kggsc4"}).on(n,o=>p(c({},o),{error:null})).on(n.doneData,(o,a)=>p(c({},o),{data:a})).on(n.failData,(o,a)=>p(c({},o),{error:a.message})).on(g,(o,a)=>p(c({},o),{completed:a.completed})).on(m,()=>c({},e));return{selectors:{useForm:l},effects:{getFormFx:n,postFormFx:d},events:{changeCompleted:g,clearStore:m}}};export{M as c};
