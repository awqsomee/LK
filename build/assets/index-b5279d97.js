import{j as t}from"./vendor-33947725.js";import{t as r}from"./index-95d2e597.js";import{A as i}from"./index-1e8fb889.js";import{T as a}from"./index-67cf124c.js";import{g as l}from"./get-basic-fields-application-teacher-53f7b63c.js";import"./create-form-store-a7d8a052.js";import"./get-method-obstaing-bad4fac3.js";import"./send-form-00fe3875.js";import"./get-default-subdivision-17957fb0.js";const u=e=>({title:"Курьер",data:[...l(e),{title:"Наименование организации",value:null,fieldName:"NameOrganization",editable:!0,required:!0},{title:"Полный адрес доставки",type:"textarea",fieldName:"full_delivery_address",value:"",editable:!0,required:!0},{title:"Контактное лицо принимающей стороны",value:null,fieldName:"fio_receiving_party",editable:!0,required:!0},{title:"Контактный телефон принимающей стороны",type:"tel",value:"",fieldName:"phone_receiving_party",editable:!0,mask:!0,required:!0},{title:"Вид документа",value:"",fieldName:"type_document",placeholder:"(конверт, пакет, коробка и т.п.) и ее примерные размеры",editable:!0,required:!0},{title:"Количество документов",type:"number",value:"",fieldName:"number_document",editable:!0,required:!0},{title:"Дата доставки",type:"date",value:"",fieldName:"delivery_date",editable:!0,required:!0},{title:"Интервал доставки",value:"",fieldName:"type_document",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),y=()=>t.jsx(a,{model:r,getForm:u,formId:i.COURIER});export{y as default};
