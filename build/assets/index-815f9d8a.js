import{j as t}from"./vendor-8a1e4858.js";import{T as r}from"./index-e62571ba.js";import{t as i}from"./index-41c6307f.js";import{bw as a}from"./index-4a477e8a.js";import{g as o}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{g as l}from"./get-address-fields-cc7f3adf.js";import{g as s}from"./get-method-obtaining-fields-46332104.js";import"./send-form-7978fd30.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-2262d6f7.js";import"./get-default-subdivision-17957fb0.js";import"./consts-efab0afd.js";const d=e=>({title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",data:[...o(e),{title:"ФИО ребенка",value:null,fieldName:"child_fio",mask:!0,editable:!0,required:!0},{title:"Дата рождения ребенка",type:"date",value:"",editable:!0,fieldName:"birth_child",required:!0},...s(),...m("buhg"),...l(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),_=()=>t.jsx(r,{model:i,getForm:d,isSpecialField:!0,formId:a.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE});export{_ as default};
