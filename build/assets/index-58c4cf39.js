import{$ as o,g as a}from"./index-7f995b81.js";import{c as s}from"./create-form-store-787ec2d1.js";const p=()=>o.get(`?getAppData&token=${a()}`),l=t=>{const e=new FormData;e.set("token",a()),e.set("saveAppData",t.formId);for(const[r,n]of Object.entries(t))e.set(r,n);return o.post(`?saveAppData=${t.formId}`,e,{headers:{"Content-Type":"multipart/form-data"}})},{effects:c,events:f,selectors:m}=s({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:p,post:l}}),i=Object.freeze(Object.defineProperty({__proto__:null,effects:c,events:f,selectors:m},Symbol.toStringTag,{value:"Module"}));export{i as t};
