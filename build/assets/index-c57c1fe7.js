import{j as t}from"./vendor-48260ac4.js";import{T as i}from"./index-71f44648.js";import{g as r}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as l,a}from"./get-method-obtaining-fields-38c411d0.js";import{g as d}from"./get-teacher-subdivisions-5cd556a9.js";import{t as m}from"./index-4f6a882c.js";import{A as s}from"./index-daf85513.js";import"./send-form-aac97e5a.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";import"./create-form-store-657cf9f4.js";const o=e=>({title:"Выдача лицензий и свидетельств о государственной аккредитации",data:[...r(e),{title:"Документ",type:"select",fieldName:"document",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Лицензия на право ведения образовательной деятельности"},{id:1,title:"Свидетельство о государственной аккредитации"},{id:2,title:"Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации"}]},{title:"Университет",type:"select",fieldName:"university",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Московский государственный машиностроительный университет» (МАМИ)"},{id:1,title:"Московский государственный открытый университет им. В.С. Черномырдина» (МГОУ)"},{id:2,title:"Московский государственный вечерний металлургический институт» (МГВМИ)"},{id:3,title:"Московский государственный университет инженерной экологии» (МГУИЭ)"},{id:4,title:"Московский государственный индустриальный университет» (МГИУ)"},{id:5,title:"Московский государственный университет печати имени Ивана Фёдорова» (МГУП)"}]},{title:"Период",type:"text",value:"",editable:!0,fieldName:"period",required:!0},{title:"Количество копий",value:null,fieldName:"number_copies",type:"number",editable:!0,required:!0},...l(),...d(),...a(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),x=()=>t.jsx(i,{model:m,getForm:o,isSpecialField:!0,formId:s.ISSUANCE_OF_LICENSES});export{x as default};
