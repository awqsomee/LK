import{j as t}from"./vendor-48260ac4.js";import{T as i}from"./index-5cb57b11.js";import{g as r}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a,a as o}from"./get-method-obtaining-fields-4592f8d4.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{t as l}from"./index-da5039e8.js";import{A as s}from"./index-1682acd6.js";import"./send-form-19f2377f.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";import"./create-form-store-0276c70a.js";const d=e=>({title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",data:[...r(e),{title:"ФИО ребенка",value:null,fieldName:"child_fio",mask:!0,editable:!0,required:!0},{title:"Дата рождения ребенка",type:"date",value:"",editable:!0,fieldName:"birth_child",required:!0},...a(),...m("buhg"),...o(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),x=()=>t.jsx(i,{model:l,getForm:d,isSpecialField:!0,formId:s.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE});export{x as default};
