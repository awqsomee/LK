import{c as s}from"./create-form-store-a7b8d8e6.js";import"./vendor-60fdf703.js";import{ak as o,al as a}from"./index-ebe54aea.js";const p=()=>o.get(`?getAppData&token=${a()}`),l=e=>{const t=new FormData;t.set("token",a()),t.set("saveAppData",e.formId);for(const[r,n]of Object.entries(e))t.set(r,n);return o.post(`?saveAppData=${e.formId}`,t,{headers:{"Content-Type":"multipart/form-data"}})},{effects:c,events:m,selectors:f}=s({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:p,post:l}}),g=Object.freeze(Object.defineProperty({__proto__:null,effects:c,events:m,selectors:f},Symbol.toStringTag,{value:"Module"}));export{g as t};
