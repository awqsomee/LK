import{j as t}from"./vendor-2bd70a0f.js";import{T as r}from"./index-75bdb1c6.js";import{g as i}from"./get-basic-fields-application-teacher-1d6f41a5.js";import{g as a,a as o}from"./get-method-obtaining-fields-48306a9a.js";import{g as m}from"./get-teacher-subdivisions-500dfe3f.js";import{g as s}from"./get-last-year-for-period-e1de6b16.js";import{t as l}from"./get-default-subdivision-902d072d.js";import{A as d}from"./index-bc77f324.js";import"./get-method-obstaing-c0726de9.js";const p=e=>({title:"Справка по форме 2-НДФЛ",data:[...i(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:s()},{title:"Количество копий",value:null,fieldName:"number_copies",type:"number",editable:!0,required:!0},...a(),...m(),...o(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),N=()=>t.jsx(r,{model:l,getForm:p,isSpecialField:!0,formId:d.PERSONA_INCOME_TAX_REFERENCE});export{N as default};
