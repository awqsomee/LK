var b=Object.defineProperty,F=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))S.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>F(e,x(t));import{r as s,j as m}from"./vendor-fdf02817.js";import{bx as v,b1 as N,b2 as A,bB as M,h as j,d7 as y,d2 as E,bC as R}from"./index-2172af78.js";import{g as q}from"./get-method-obstaing-bad4fac3.js";import{g as B}from"./get-reason-for-receiving-eb30f0b2.js";import{g as C}from"./get-student-subdivisions-5a2f2c8d.js";import{g as k}from"./get-address-fields-cc7f3adf.js";import{g as I}from"./get-method-obtaining-fields-46332104.js";import"./get-divisions-96cfa1b1.js";import"./consts-efab0afd.js";const L=[{id:0,title:"Среднее общее"},{id:1,title:"Среднее профессиональное"},{id:2,title:"Высшее - бакалавриат"},{id:3,title:"Высшее - специалитет, магистратура"}],O=e=>{const{surname:t,name:a,patronymic:n,email:i,phone:l}=e;return{title:"Справка в военкомат (форма 4)",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+n,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:l,required:!0},{title:"Email",type:"email",fieldName:"email",value:i,editable:!0,required:!0},...I(),...C(e),...k(),{title:"Образование на момент поступления в университет",value:null,type:"select",fieldName:"education",items:L,width:"100%",editable:!0,required:!0},{title:"Наименование военного комиссариата, куда направляется справка",value:"",fieldName:"comissariat_name",width:"100%",editable:!0,required:!0},{title:"Комментарий к заявке",placeholder:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},J=()=>{const[e,t]=s.useState(null),[a,n]=s.useState({}),[i,l]=s.useState(!1),[f,g]=s.useState(!1),o=i!=null?i:!1,{data:{dataUserApplication:r}}=v.useApplications();return s.useEffect(()=>{r&&t(O(r))},[r]),s.useEffect(()=>{e&&r&&n(d(d({},q(e.data)),B(e.data)))},[e]),m.jsx(N,{isDone:o,children:!!e&&!!t&&m.jsxs(A,{noHeader:!0,children:[m.jsx(M,c(d({},e),{collapsed:o,setData:t,specialFieldsNameConfig:a})),m.jsx(j,{text:o?"Отправлено":"Отправить",action:()=>y(E.MILITARY_FORM_4,[e],g,l),isLoading:f,completed:i,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:R(e,a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{J as default};
