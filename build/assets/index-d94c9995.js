import{j as t}from"./vendor-5ea71f95.js";import{t as i}from"./index-ed922908.js";import{T as r}from"./index-7164070f.js";import{g as o,a}from"./get-default-subdivision-17957fb0.js";import{A as s}from"./index-fab43839.js";import"./create-form-store-5d823e69.js";import"./send-form-5189d235.js";import"./get-method-obstaing-c0726de9.js";const m=e=>({title:"Справка с места работы",data:[{title:"Подразделение/должность",value:o(e.subdivisions),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:a(e.subdivisions),isSpecificSelect:!0},{title:"по месту требования",type:"checkbox",value:!1,editable:!0,fieldName:"place_of_requirement"}]}),b=()=>t.jsx(r,{model:i,getForm:m,isSpecialField:!0,formId:s.CERTIFICATE_FROM_PLACE_OF_WORK});export{b as default};
