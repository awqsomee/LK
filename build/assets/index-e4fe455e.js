import{j as t}from"./vendor-e9654bfa.js";import{T as r}from"./index-5a81bf41.js";import{g as a}from"./get-basic-fields-application-teacher-730867cc.js";import{t as i}from"./get-default-subdivision-567f43ae.js";import{A as l}from"./index-c2d11f9e.js";import"./get-method-obstaing-c0726de9.js";const u=e=>({title:"Курьер",data:[...a(e),{title:"Наименование организации",value:null,fieldName:"NameOrganization",editable:!0,required:!0},{title:"Полный адрес доставки",type:"textarea",fieldName:"full_delivery_address",value:"",editable:!0,required:!0},{title:"Контактное лицо принимающей стороны",value:null,fieldName:"fio_receiving_party",editable:!0,required:!0},{title:"Контактный телефон принимающей стороны",type:"tel",value:"",fieldName:"phone_receiving_party",editable:!0,mask:!0,required:!0},{title:"Вид документа",value:"",fieldName:"type_document",placeholder:"(конверт, пакет, коробка и т.п.) и ее примерные размеры",editable:!0,required:!0},{title:"Количество документов",type:"number",value:"",fieldName:"number_document",editable:!0,required:!0},{title:"Дата доставки",type:"date",value:"",fieldName:"delivery_date",editable:!0,required:!0},{title:"Интервал доставки",value:"",fieldName:"type_document",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),f=()=>t.jsx(r,{model:i,getForm:u,formId:l.COURIER});export{f as default};
