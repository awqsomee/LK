import{j as t}from"./vendor-48260ac4.js";import{T as r}from"./index-9c5bb748.js";import{g as i}from"./get-basic-fields-application-teacher-53f7b63c.js";import{t as a}from"./index-d2f38b73.js";import{A as l}from"./index-d3095a88.js";import"./send-form-b8ff086e.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";import"./create-form-store-a86c3ef5.js";const u=e=>({title:"Курьер",data:[...i(e),{title:"Наименование организации",value:null,fieldName:"NameOrganization",editable:!0,required:!0},{title:"Полный адрес доставки",type:"textarea",fieldName:"full_delivery_address",value:"",editable:!0,required:!0},{title:"Контактное лицо принимающей стороны",value:null,fieldName:"fio_receiving_party",editable:!0,required:!0},{title:"Контактный телефон принимающей стороны",type:"tel",value:"",fieldName:"phone_receiving_party",editable:!0,mask:!0,required:!0},{title:"Вид документа",value:"",fieldName:"type_document",placeholder:"(конверт, пакет, коробка и т.п.) и ее примерные размеры",editable:!0,required:!0},{title:"Количество документов",type:"number",value:"",fieldName:"number_document",editable:!0,required:!0},{title:"Дата доставки",type:"date",value:"",fieldName:"delivery_date",editable:!0,required:!0},{title:"Интервал доставки",value:"",fieldName:"type_document",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),y=()=>t.jsx(r,{model:a,getForm:u,formId:l.COURIER});export{y as default};
