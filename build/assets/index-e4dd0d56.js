var b=Object.defineProperty,F=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))S.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>F(e,h(t));import{r as s,j as m}from"./vendor-60fdf703.js";import{bw as v,b0 as A,b1 as N,bA as M,h as j,d6 as y,d1 as E,bB as R}from"./index-b011310d.js";import{g as q}from"./get-method-obstaing-bad4fac3.js";import{g as B}from"./get-reason-for-receiving-eb30f0b2.js";import{g as k}from"./get-student-subdivisions-5a2f2c8d.js";import{g as w}from"./get-address-fields-cc7f3adf.js";import{g as C}from"./get-method-obtaining-fields-46332104.js";import"./get-divisions-96cfa1b1.js";import"./consts-efab0afd.js";const I=[{id:0,title:"Среднее общее"},{id:1,title:"Среднее профессиональное"},{id:2,title:"Высшее - бакалавриат"},{id:3,title:"Высшее - специалитет, магистратура"}],L=e=>{const{surname:t,name:a,patronymic:n,email:i,phone:l}=e;return{title:"Справка в военкомат (форма 4)",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+n,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:l,required:!0},{title:"Email",type:"email",fieldName:"email",value:i,editable:!0,required:!0},...C(),...k(e),...w(),{title:"Образование на момент поступления в университет",value:null,type:"select",fieldName:"education",items:I,width:"100%",editable:!0,required:!0},{title:"Наименование военного комиссариата, куда направляется справка",value:"",fieldName:"comissariat_name",width:"100%",editable:!0,required:!0},{title:"Комментарий к заявке",placeholder:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},J=()=>{const[e,t]=s.useState(null),[a,n]=s.useState({}),[i,l]=s.useState(!1),[f,g]=s.useState(!1),o=i!=null?i:!1,{data:{dataUserApplication:r}}=v.useApplications();return s.useEffect(()=>{r&&t(L(r))},[r]),s.useEffect(()=>{e&&r&&n(d(d({},q(e.data)),B(e.data)))},[e]),m.jsx(A,{isDone:o,children:!!e&&!!t&&m.jsxs(N,{noHeader:!0,children:[m.jsx(M,c(d({},e),{collapsed:o,setData:t,specialFieldsNameConfig:a})),m.jsx(j,{text:o?"Отправлено":"Отправить",action:()=>y(E.MILITARY_FORM_4,[e],g,l),isLoading:f,completed:i,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:R(e,a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{J as default};
