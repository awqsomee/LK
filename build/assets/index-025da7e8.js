import{j as t}from"./vendor-a2a65e85.js";import{t as i}from"./index-5a01da65.js";import{T as r}from"./index-4a92ff0f.js";import{g as o,a}from"./get-default-subdivision-17957fb0.js";import{A as s}from"./index-6bf86a52.js";import"./create-form-store-e82bdec6.js";import"./get-method-obstaing-bad4fac3.js";const m=e=>({title:"Справка с места работы",data:[{title:"Подразделение/должность",value:o(e.subdivisions),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:a(e.subdivisions),isSpecificSelect:!0},{title:"по месту требования",type:"checkbox",value:!1,editable:!0,fieldName:"place_of_requirement"}]}),F=()=>t.jsx(r,{model:i,getForm:m,isSpecialField:!0,formId:s.CERTIFICATE_FROM_PLACE_OF_WORK});export{F as default};
