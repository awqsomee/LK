import{j as t}from"./vendor-33947725.js";import{t as i}from"./index-60f749d3.js";import{A as r}from"./index-03c4ccbf.js";import{T as o}from"./index-cf658a00.js";import{g as s,a}from"./get-default-subdivision-17957fb0.js";import"./create-form-store-ad7a1284.js";import"./get-method-obstaing-bad4fac3.js";import"./send-form-4b3865a5.js";const m=e=>({title:"Справка о количестве неиспользованных дней отпуска",data:[{title:"Подразделение/должность",value:s(e.subdivisions),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:a(e.subdivisions),isSpecificSelect:!0}]}),g=()=>t.jsx(o,{model:i,getForm:m,isSpecialField:!0,formId:r.NUMBER_OF_UNUSED_VACATION_DAYS});export{g as default};
