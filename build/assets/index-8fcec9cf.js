import{j as t}from"./vendor-33947725.js";import{t as i}from"./index-95d2e597.js";import{A as r}from"./index-1e8fb889.js";import{T as l}from"./index-67cf124c.js";import{g as a,a as d}from"./get-method-obtaining-fields-38059b2b.js";import{g as m}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as s}from"./get-teacher-subdivisions-5cd556a9.js";import"./create-form-store-a7d8a052.js";import"./get-method-obstaing-bad4fac3.js";import"./send-form-00fe3875.js";import"./get-default-subdivision-17957fb0.js";const o=e=>({title:"Выдача лицензий и свидетельств о государственной аккредитации",data:[...m(e),{title:"Документ",type:"select",fieldName:"document",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Лицензия на право ведения образовательной деятельности"},{id:1,title:"Свидетельство о государственной аккредитации"},{id:2,title:"Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации"}]},{title:"Университет",type:"select",fieldName:"university",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Московский государственный машиностроительный университет» (МАМИ)"},{id:1,title:"Московский государственный открытый университет им. В.С. Черномырдина» (МГОУ)"},{id:2,title:"Московский государственный вечерний металлургический институт» (МГВМИ)"},{id:3,title:"Московский государственный университет инженерной экологии» (МГУИЭ)"},{id:4,title:"Московский государственный индустриальный университет» (МГИУ)"},{id:5,title:"Московский государственный университет печати имени Ивана Фёдорова» (МГУП)"}]},{title:"Период",type:"text",value:"",editable:!0,fieldName:"period",required:!0},{title:"Количество копий",value:null,fieldName:"number_copies",type:"number",editable:!0,required:!0},...a(),...s(),...d(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),x=()=>t.jsx(l,{model:i,getForm:o,isSpecialField:!0,formId:r.ISSUANCE_OF_LICENSES});export{x as default};
