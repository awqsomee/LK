var b=Object.defineProperty,F=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))S.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))h.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>F(e,x(t));import{r as i,j as d}from"./vendor-fdf02817.js";import{bx as v,b1 as A,b2 as N,bB as M,h as j,d7 as y,d2 as E,bC as R}from"./index-2172af78.js";import{g as B}from"./get-method-obstaing-bad4fac3.js";import{g as C}from"./get-reason-for-receiving-eb30f0b2.js";import{g as k}from"./get-student-subdivisions-5a2f2c8d.js";import{g as q}from"./get-address-fields-cc7f3adf.js";import{g as I}from"./get-method-obtaining-fields-46332104.js";import"./get-divisions-96cfa1b1.js";import"./consts-efab0afd.js";const L=e=>{const{surname:t,name:a,patronymic:n,email:s,phone:o}=e;return{title:"Справка в военкомат (форма 5)",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+n,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:o,required:!0},{title:"Email",type:"email",fieldName:"email",value:s,editable:!0,required:!0},...I(),...k(e),...q(),{title:"Наименование военного комиссариата, куда направляется справка",value:"",fieldName:"comissariat_name",width:"100%",editable:!0,required:!0},{title:"Комментарий к заявке",placeholder:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},G=()=>{const[e,t]=i.useState(null),[a,n]=i.useState({}),[s,o]=i.useState(!1),[f,g]=i.useState(!1),r=s!=null?s:!1,{data:{dataUserApplication:l}}=v.useApplications();return i.useEffect(()=>{l&&t(L(l))},[l]),i.useEffect(()=>{e&&l&&n(m(m({},B(e.data)),C(e.data)))},[e]),d.jsx(A,{isDone:r,children:!!e&&!!t&&d.jsxs(N,{noHeader:!0,children:[d.jsx(M,c(m({},e),{collapsed:r,setData:t,specialFieldsNameConfig:a})),d.jsx(j,{text:r?"Отправлено":"Отправить",action:()=>y(E.MILITARY_FORM_5,[e],g,o),isLoading:f,completed:s,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:R(e,a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{G as default};
