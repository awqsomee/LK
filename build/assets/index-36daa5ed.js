import{j as i}from"./vendor-8a1e4858.js";import{T as m}from"./index-e471be20.js";import{c as s}from"./create-form-store-d5bdf2c8.js";import{as as o,at as l}from"./index-54a7c16c.js";import"./send-form-51b6f385.js";import"./get-method-obstaing-bad4fac3.js";const n=()=>o.get(`?getContactData&token=${l()}`),f=e=>{const t=new FormData;t.set("token",l()),t.set("saveContactData","1");for(const[a,r]of Object.entries(e))t.set(a,r);return o.post("?saveContactData=1",t,{headers:{"Content-Type":"multipart/form-data"}})},{effects:u,events:p,selectors:c}=s({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:n,post:f}}),v=Object.freeze(Object.defineProperty({__proto__:null,effects:u,events:p,selectors:c},Symbol.toStringTag,{value:"Module"})),_=e=>({title:"Актуализация контактных данных",data:[{title:"Личный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_private,fieldName:"tel_mob_private",mask:!0,required:!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:e==null?void 0:e.tel_staff,fieldName:"tel_staff"},{title:"Личный email",type:"email",value:e.email_private,fieldName:"email_private",required:!0},{title:"Рабочий email",type:"email",value:e.email_staff,fieldName:"email_staff"}]}),C=()=>i.jsx(m,{model:v,getForm:_});export{C as default};
