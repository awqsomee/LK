import{j as u}from"./vendor-60fdf703.js";import{T as o}from"./index-c57d5905.js";import{t as d}from"./index-51d7810a.js";import{bv as p}from"./index-5cf38ea0.js";import{g as n,a as i}from"./get-default-subdivision-17957fb0.js";import"./send-form-81b0f347.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-568dea58.js";const c=[{id:0,title:"Учебная деятельность"},{id:1,title:"Научная деятельность"}],f=r=>{const{surname:a,name:l,patronymic:m,phone:s,subdivisions:e}=r;return{title:"Запрос на увеличение лимита проверок в системе «Антиплагиат»",data:[{title:"ФИО",value:a+" "+l+" "+m,fieldName:"fio",mask:!0,editable:!1,required:!0},{title:"Подразделение/должность",value:n(e),fieldName:"guid_staff",editable:i(e).length>1,width:"100",required:!0,type:"select",items:i(e),isSpecificSelect:!0},{title:"Контактный телефон",type:"tel",value:s,fieldName:"phone_private",editable:!0,mask:!0,required:!0},{title:"Тип запроса",value:null,fieldName:"req_type",editable:!0,width:"100",required:!0,type:"select",items:c},{title:"Количество проверок",fieldName:"checks_amount",type:"number",value:"",editable:!0,required:!0,mask:!0,customMask:t=>Number(t)>300?"299":t},{title:"Комментарий к заявке",placeholder:"Укажите, для чего необходимо увеличение лимита",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},I=()=>u.jsx(o,{model:d,getForm:f,isSpecialField:!0,formId:p.INCREASE_ANTIPLAGIAT_LIMITS});export{I as default};
