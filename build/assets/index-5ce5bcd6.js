import{j as t}from"./vendor-48260ac4.js";import{T as r}from"./index-ee7ec0ce.js";import{g as i}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a,a as o}from"./get-method-obtaining-fields-b85490ef.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{g as s}from"./get-last-year-for-period-e1de6b16.js";import{t as l}from"./index-7d52ec53.js";import{A as d}from"./index-b3d5b1cc.js";import"./send-form-4753f7c9.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";import"./create-form-store-bd0f65e6.js";const p=e=>({title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",data:[...i(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:s()},...a(),...m(),...o(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),b=()=>t.jsx(r,{model:l,getForm:p,isSpecialField:!0,formId:d.PAYMENT_FOR_CHILD_CARE});export{b as default};
