var b=Object.defineProperty,S=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var n=(e,t,i)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&n(e,i,t[i]);if(p)for(var i of p(t))A.call(t,i)&&n(e,i,t[i]);return e},m=(e,t)=>S(e,F(t));import{r as s,j as o}from"./vendor-8a1e4858.js";import{bv as N,bz as h,t as v,bA as O,i as j,d6 as E,d1 as y,bB as B}from"./index-54a7c16c.js";import{g as q}from"./get-method-obstaing-bad4fac3.js";import{g as C}from"./get-student-subdivisions-5a2f2c8d.js";import{g as M}from"./get-address-fields-cc7f3adf.js";import{g as k}from"./get-student-method-obtaining-fields-13347f29.js";import{N as T}from"./consts-efab0afd.js";import"./get-divisions-96cfa1b1.js";const _=[{id:0,title:"в Фонд пенсионного и социального страхования Российской Федерации (СФР)"},{id:1,title:"в Управление социальной защиты населения (УСЗН)"},{id:2,title:"в военный комиссариат"},{id:3,title:"в Многофункциональный центр (МФЦ)"},{id:4,title:"в Федеральную налоговую службу (ФНС)"},{id:5,title:"в банк"},{id:6,title:"в Федеральную службу труда и занятости"},{id:7,title:"в отдел/орган опеки и попечительства"},{id:8,title:"в социальное учреждение"},{id:9,title:"по месту требования"}],w=e=>({title:"Справка в социальные учреждения",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...k(),...C(e),...M(),{title:"Место предоставления справки",type:"select",width:"100",fieldName:"place_reference",value:null,editable:!0,required:!0,items:_},{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:T},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),H=()=>{const[e,t]=s.useState(null),[i,r]=s.useState(!1),[c,f]=s.useState(!1),[d,g]=s.useState({}),a=i!=null?i:!1,{data:{dataUserApplication:l}}=N.useApplications();return s.useEffect(()=>{l&&t(w(l))},[l]),s.useEffect(()=>{e&&l&&g(q(e.data))},[e]),o.jsx(h,{isDone:a,children:!!e&&!!t&&o.jsxs(v,{children:[o.jsx(O,m(u({},e),{collapsed:a,setData:t,specialFieldsNameConfig:d})),o.jsx(j,{text:a?"Отправлено":"Отправить",action:()=>E(y.STATUS_SOBES,[e],f,r),isLoading:c,completed:i,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:B(e,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{H as default};
