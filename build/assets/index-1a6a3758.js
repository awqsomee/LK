import{j as t}from"./vendor-60fdf703.js";import{T as r}from"./index-48423cac.js";import{t as i}from"./index-9760a87f.js";import{bv as o}from"./index-6facb166.js";import{g as a}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as m}from"./get-last-year-for-period-e1de6b16.js";import{g as s}from"./get-teacher-subdivisions-5cd556a9.js";import{g as l}from"./get-address-fields-cc7f3adf.js";import{g as d}from"./get-method-obtaining-fields-46332104.js";import"./send-form-2afe69e2.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-cd963ca9.js";import"./get-default-subdivision-17957fb0.js";import"./consts-efab0afd.js";const p=e=>({title:"Справка по форме 2-НДФЛ",data:[...a(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:m()},{title:"Количество копий",value:null,fieldName:"number_copies",type:"number",editable:!0,required:!0},...d(),...s("buhg"),...l(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),P=()=>t.jsx(r,{model:i,getForm:p,isSpecialField:!0,formId:o.PERSONA_INCOME_TAX_REFERENCE});export{P as default};
