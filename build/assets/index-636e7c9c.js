import{j as t}from"./vendor-8a1e4858.js";import{T as r}from"./index-9b31bbb2.js";import{t as i}from"./index-ae73a720.js";import{bu as a}from"./index-8a3ccb59.js";import{g as o}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{g as l}from"./get-address-fields-cc7f3adf.js";import{g as s}from"./get-method-obtaining-fields-46332104.js";import"./send-form-4f6c9d15.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-c13df1a6.js";import"./get-default-subdivision-17957fb0.js";import"./consts-efab0afd.js";const d=e=>({title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",data:[...o(e),{title:"ФИО ребенка",value:null,fieldName:"child_fio",mask:!0,editable:!0,required:!0},{title:"Дата рождения ребенка",type:"date",value:"",editable:!0,fieldName:"birth_child",required:!0},...s(),...m("buhg"),...l(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),_=()=>t.jsx(r,{model:i,getForm:d,isSpecialField:!0,formId:a.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE});export{_ as default};
