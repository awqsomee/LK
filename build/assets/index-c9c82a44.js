import{j as t}from"./vendor-8a1e4858.js";import{T as r}from"./index-faf5a15c.js";import{t as i}from"./index-2a4e2724.js";import{bu as o}from"./index-8977d86c.js";import{g as a}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as m}from"./get-last-year-for-period-e1de6b16.js";import{g as s}from"./get-teacher-subdivisions-5cd556a9.js";import{g as l}from"./get-address-fields-cc7f3adf.js";import{g as d}from"./get-method-obtaining-fields-46332104.js";import"./send-form-1095d55a.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-e2a5ffda.js";import"./get-default-subdivision-17957fb0.js";import"./consts-efab0afd.js";const p=e=>({title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",data:[...a(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:m()},...d(),...s(),...l(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),N=()=>t.jsx(r,{model:i,getForm:p,isSpecialField:!0,formId:o.PAYMENT_FOR_CHILD_CARE});export{N as default};
