import{j as t}from"./vendor-60fdf703.js";import{T as r}from"./index-dc928123.js";import{t as o}from"./index-9b87c0b1.js";import{bv as i}from"./index-ebe54aea.js";import{g as m}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a}from"./get-teacher-subdivisions-5cd556a9.js";import{g as s}from"./get-address-fields-cc7f3adf.js";import{g as p}from"./get-method-obtaining-fields-46332104.js";import"./send-form-67dccd47.js";import"./get-method-obstaing-bad4fac3.js";import"./create-form-store-a7b8d8e6.js";import"./get-default-subdivision-17957fb0.js";import"./consts-efab0afd.js";const d=e=>({title:"Копия трудовой книжки",data:[...m(e),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0},...p(),...a(),...s()],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),y=()=>t.jsx(r,{model:o,getForm:d,isSpecialField:!0,formId:i.COPY_OF_EMPLOYMENT_RECORD});export{y as default};
