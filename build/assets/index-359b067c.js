import{j as t}from"./vendor-60fdf703.js";import{T as i}from"./index-c31ab929.js";import{t as r}from"./index-ec62533d.js";import{bv as o}from"./index-3e2d0793.js";import{g as a}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import"./send-form-3e4162d1.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-b00104e0.js";import"./get-default-subdivision-17957fb0.js";const l=[{id:0,title:"сведения о поступлении в образовательную организацию"},{id:1,title:"cведения об отчислении из образовательной организации"},{id:2,title:"cведения об уходе в академический отпуск"},{id:3,title:"cведения о выходе из академического отпуска"}],s=e=>({title:"Заверение и выдача копий внутренних документов",data:[...a(e),...m("mob"),{fieldName:"requested_docs",title:"Запрашиваемые документы",type:"select",items:l,value:null,width:"100",required:!0,editable:!0},{fieldName:"to_mil_commisariats_or_courts",title:"Документы предоставляются в военные комиссариаты Российской Федерации, суды",type:"checkbox",value:"",editable:!0},{fieldName:"commentary",title:"Комментарий",type:"textarea",value:"",editable:!0}]}),g=()=>t.jsx(i,{model:r,getForm:s,isSpecialField:!0,formId:o.CERTIFIED_COPIES_OF_MILITARY_DOCS});export{g as default};
