import{j as t}from"./vendor-60fdf703.js";import{T as i}from"./index-59634e6c.js";import{t as r}from"./index-e9ba28b4.js";import{bv as o}from"./index-c28baf90.js";import{g as a,a as s}from"./get-default-subdivision-17957fb0.js";import"./send-form-e0f1d6af.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-d041bfb6.js";const m=e=>({title:"Справка с места работы",data:[{title:"Подразделение/должность",value:a(e.subdivisions),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:s(e.subdivisions),isSpecificSelect:!0},{title:"по месту требования",type:"checkbox",value:!1,editable:!0,fieldName:"place_of_requirement"}]}),b=()=>t.jsx(i,{model:r,getForm:m,isSpecialField:!0,formId:o.CERTIFICATE_FROM_PLACE_OF_WORK});export{b as default};
