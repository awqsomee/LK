import{j as t}from"./vendor-33947725.js";import{t as r}from"./index-8200db1c.js";import{A as i}from"./index-958ef795.js";import{T as o}from"./index-18240d4a.js";import{g as a}from"./get-address-fields-cc7f3adf.js";import{g as m}from"./get-method-obtaining-fields-1a42fe98.js";import{g as s}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as l}from"./get-last-year-for-period-e1de6b16.js";import{g as d}from"./get-teacher-subdivisions-5cd556a9.js";import"./create-form-store-ae58a6fc.js";import"./get-method-obstaing-bad4fac3.js";import"./send-form-aaf702b7.js";import"./get-default-subdivision-17957fb0.js";const p=e=>({title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",data:[...s(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:l()},...m(),...d(),...a(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),y=()=>t.jsx(o,{model:r,getForm:p,isSpecialField:!0,formId:i.PAYMENT_FOR_CHILD_CARE});export{y as default};
