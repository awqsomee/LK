import{j as t}from"./vendor-4af360a6.js";import{T as i}from"./index-30f75a48.js";import{g as r}from"./get-basic-fields-application-teacher-293684a3.js";import{g as a,a as l}from"./get-method-obtaining-fields-a08115c4.js";import{g as o}from"./get-teacher-subdivisions-1b4fd80d.js";import{t as m}from"./get-default-subdivision-d14fd492.js";import{A as s}from"./index-c25f9d36.js";import"./get-method-obstaing-c0726de9.js";const d=e=>({title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",data:[...r(e),{title:"ФИО ребенка",value:null,fieldName:"child_fio",mask:!0,editable:!0,required:!0},{title:"Дата рождения ребенка",type:"date",value:"",editable:!0,fieldName:"birth_child",required:!0},...a(),...o("buhg"),...l(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),A=()=>t.jsx(i,{model:m,getForm:d,isSpecialField:!0,formId:s.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE});export{A as default};
