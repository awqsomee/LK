var h=Object.defineProperty,D=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var x=(r,t,e)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,c=(r,t)=>{for(var e in t||(t={}))v.call(t,e)&&x(r,e,t[e]);if(u)for(var e of u(t))E.call(t,e)&&x(r,e,t[e]);return r},l=(r,t)=>D(r,S(t));var i=(r,t,e)=>new Promise((g,p)=>{var d=s=>{try{m(e.next(s))}catch(o){p(o)}},n=s=>{try{m(e.throw(s))}catch(o){p(o)}},m=s=>s.done?g(s.value):Promise.resolve(s.value).then(d,n);m((e=e.apply(r,t)).next())});import{p as y,e as k,x as F,h as $,u as f}from"./vendor-3c67dcca.js";import{e as w,a$ as b}from"./index-838f6833.js";const C=({defaultStore:r,api:t})=>{const e=r,g=()=>({data:f(s).data,loading:f(n.pending),error:f(s).error,completed:f(s).completed}),p=y({name:"changeCompleted",sid:"8d4ys9"}),d=k(o=>i(void 0,null,function*(){const a=yield t.post(o);if(a.data.result!=="ok")throw new Error(a.data.error_text);return a.data}),{name:"postFormFx",sid:"bm6r7m"});F({and:[{clock:d.doneData,fn:()=>({message:"Данные формы успешно отправлены",type:"success"}),target:w.evokePopUpMessage}],or:{sid:"-f764dw"}}),F({and:[{clock:d.failData,fn:o=>({message:`${o.message}`,type:"failure"}),target:w.evokePopUpMessage}],or:{sid:"-er836f"}}),F({and:[{clock:d.doneData,target:b.getApplicationsFx}],or:{sid:"-eba1yy"}});const n=k(o=>i(void 0,null,function*(){if(t.get)try{const a=yield t.get(o);return c({},a.data)}catch(a){throw new Error(a)}return e.data}),{name:"getFormFx",sid:"5lxgfo"}),m=y({name:"clearStore",sid:"-ejj22f"}),s=$(e,{name:"$formStore",sid:"3nz7k3"}).on(n,o=>l(c({},o),{error:null})).on(n.doneData,(o,a)=>l(c({},o),{data:a})).on(n.failData,(o,a)=>l(c({},o),{error:a.message})).on(p,(o,a)=>l(c({},o),{completed:a.completed})).on(m,()=>c({},e));return{selectors:{useForm:g},effects:{getFormFx:n,postFormFx:d},events:{changeCompleted:p,clearStore:m}}};export{C as c};
