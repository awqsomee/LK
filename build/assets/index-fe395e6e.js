import{j as t}from"./vendor-48260ac4.js";import{t as i}from"./index-d2f38b73.js";import{T as r}from"./index-9c5bb748.js";import{g as o,a}from"./get-default-subdivision-17957fb0.js";import{A as s}from"./index-d3095a88.js";import"./create-form-store-a86c3ef5.js";import"./send-form-b8ff086e.js";import"./get-method-obstaing-c0726de9.js";const m=e=>({title:"Справка с места работы",data:[{title:"Подразделение/должность",value:o(e.subdivisions),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:a(e.subdivisions),isSpecificSelect:!0},{title:"по месту требования",type:"checkbox",value:!1,editable:!0,fieldName:"place_of_requirement"}]}),b=()=>t.jsx(r,{model:i,getForm:m,isSpecialField:!0,formId:s.CERTIFICATE_FROM_PLACE_OF_WORK});export{b as default};
