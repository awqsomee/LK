import{j as t}from"./vendor-60fdf703.js";import{T as i}from"./index-7905a7c8.js";import{t as r}from"./index-3d7c73fe.js";import{bv as o}from"./index-27bbb5ce.js";import{g as a,a as s}from"./get-default-subdivision-17957fb0.js";import"./send-form-2776f752.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-cd059a8a.js";const m=e=>({title:"Справка с места работы",data:[{title:"Подразделение/должность",value:a(e.subdivisions),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:s(e.subdivisions),isSpecificSelect:!0},{title:"по месту требования",type:"checkbox",value:!1,editable:!0,fieldName:"place_of_requirement"}]}),b=()=>t.jsx(i,{model:r,getForm:m,isSpecialField:!0,formId:o.CERTIFICATE_FROM_PLACE_OF_WORK});export{b as default};
