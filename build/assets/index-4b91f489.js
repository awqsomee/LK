import{j as t}from"./vendor-8a1e4858.js";import{T as i}from"./index-73a77881.js";import{t as r}from"./index-39bae799.js";import{bu as o}from"./index-28c96bb4.js";import{g as a,a as s}from"./get-default-subdivision-17957fb0.js";import"./send-form-4018c7d7.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-d1b285ec.js";const m=e=>({title:"Справка с места работы",data:[{title:"Подразделение/должность",value:a(e.subdivisions),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:s(e.subdivisions),isSpecificSelect:!0},{title:"по месту требования",type:"checkbox",value:!1,editable:!0,fieldName:"place_of_requirement"}]}),b=()=>t.jsx(i,{model:r,getForm:m,isSpecialField:!0,formId:o.CERTIFICATE_FROM_PLACE_OF_WORK});export{b as default};
