import{j as t}from"./vendor-4af360a6.js";import{T as i}from"./index-30f75a48.js";import{g as s,a as r,t as o}from"./get-default-subdivision-d14fd492.js";import{A as a}from"./index-c25f9d36.js";import"./get-method-obstaing-c0726de9.js";const m=e=>({title:"Справка о количестве неиспользованных дней отпуска",data:[{title:"Подразделение/должность",value:s(e.subdivisions),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:r(e.subdivisions),isSpecificSelect:!0}]}),f=()=>t.jsx(i,{model:o,getForm:m,isSpecialField:!0,formId:a.NUMBER_OF_UNUSED_VACATION_DAYS});export{f as default};
