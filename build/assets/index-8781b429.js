import{j as t}from"./vendor-60fdf703.js";import{T as r}from"./index-48423cac.js";import{t as i}from"./index-9760a87f.js";import{bv as o}from"./index-6facb166.js";import{g as a}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as m}from"./get-teacher-subdivisions-5cd556a9.js";import{g as s}from"./get-address-fields-cc7f3adf.js";import{g as p}from"./get-method-obtaining-fields-46332104.js";import"./send-form-2afe69e2.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-cd963ca9.js";import"./get-default-subdivision-17957fb0.js";import"./consts-efab0afd.js";const d=e=>({title:"Справка о стаже работы",data:[...a(e),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0},...p(),...m(),...s()],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),A=()=>t.jsx(r,{model:i,getForm:d,isSpecialField:!0,formId:o.CERTIFICATE_OF_WORK_EXPERIENCE});export{A as default};
