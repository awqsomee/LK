var g=(n,e,i)=>new Promise((o,s)=>{var a=t=>{try{c(i.next(t))}catch(d){s(d)}},r=t=>{try{c(i.throw(t))}catch(d){s(d)}},c=t=>t.done?o(t.value):Promise.resolve(t.value).then(a,r);c((i=i.apply(n,e)).next())});import{e as l}from"./vendor-8a1e4858.js";import{bu as m,bv as u}from"./index-4a477e8a.js";const p=l(n=>g(void 0,null,function*(){var e;const{search:i="",page:o,limit:s,filter:a}=n,{data:r}=yield m(i,(e=a==null?void 0:a.id.toString())!==null&&e!==void 0?e:"",o,s);return{results:r.items}}),{name:"getFetchStudentsFx",sid:"-93w3z"}),x=u({getFx:p,limit:50});export{x as p};
