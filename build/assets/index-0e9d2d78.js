import{j as t}from"./vendor-8a1e4858.js";import{T as i}from"./index-9b31bbb2.js";import{t as r}from"./index-ae73a720.js";import{bu as o}from"./index-8a3ccb59.js";import{g as a}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import"./send-form-4f6c9d15.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-c13df1a6.js";import"./get-default-subdivision-17957fb0.js";const l=[{id:0,title:"сведения о поступлении в образовательную организацию"},{id:1,title:"cведения об отчислении из образовательной организации"},{id:2,title:"cведения об уходе в академический отпуск"},{id:3,title:"cведения о выходе из академического отпуска"}],s=e=>({title:"Заверение и выдача копий внутренних документов",data:[...a(e),...m("mob"),{fieldName:"requested_docs",title:"Запрашиваемые документы",type:"select",items:l,value:null,width:"100",required:!0,editable:!0},{fieldName:"to_mil_commisariats_or_courts",title:"Документы предоставляются в военные комиссариаты Российской Федерации, суды",type:"checkbox",value:"",editable:!0},{fieldName:"commentary",title:"Комментарий",type:"textarea",value:"",editable:!0}]}),g=()=>t.jsx(i,{model:r,getForm:s,isSpecialField:!0,formId:o.CERTIFIED_COPIES_OF_MILITARY_DOCS});export{g as default};
