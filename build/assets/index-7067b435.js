import{j as t}from"./vendor-8a1e4858.js";import{T as i}from"./index-e471be20.js";import{t as r}from"./index-5c825610.js";import{bu as l}from"./index-54a7c16c.js";import{g as a}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as d}from"./get-teacher-subdivisions-5cd556a9.js";import{g as m}from"./get-address-fields-cc7f3adf.js";import{g as o}from"./get-method-obtaining-fields-46332104.js";import"./send-form-51b6f385.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-d5bdf2c8.js";import"./get-default-subdivision-17957fb0.js";import"./consts-efab0afd.js";const s=e=>({title:"Выдача лицензий и свидетельств о государственной аккредитации",data:[...a(e),{title:"Документ",type:"select",fieldName:"document",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Лицензия на право ведения образовательной деятельности"},{id:1,title:"Свидетельство о государственной аккредитации"},{id:2,title:"Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации"}]},{title:"Университет",type:"select",fieldName:"university",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Московский государственный машиностроительный университет» (МАМИ)"},{id:1,title:"Московский государственный открытый университет им. В.С. Черномырдина» (МГОУ)"},{id:2,title:"Московский государственный вечерний металлургический институт» (МГВМИ)"},{id:3,title:"Московский государственный университет инженерной экологии» (МГУИЭ)"},{id:4,title:"Московский государственный индустриальный университет» (МГИУ)"},{id:5,title:"Московский государственный университет печати имени Ивана Фёдорова» (МГУП)"}]},{title:"Период",type:"text",value:"",editable:!0,fieldName:"period",required:!0},{title:"Количество копий",value:null,fieldName:"number_copies",type:"number",editable:!0,required:!0},...o(),...d(),...m(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),S=()=>t.jsx(i,{model:r,getForm:s,isSpecialField:!0,formId:l.ISSUANCE_OF_LICENSES});export{S as default};
