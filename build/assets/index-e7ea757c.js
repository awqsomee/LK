var F=Object.defineProperty,S=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))h.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>S(e,b(t));import{r as i,j as n}from"./vendor-33947725.js";import{s as v,B as j,F as A,I as N,S as M,aj as y,j as E,c as R}from"./index-03c4ccbf.js";import{g as B}from"./get-method-obstaing-bad4fac3.js";import{g as I}from"./get-reason-for-receiving-eb30f0b2.js";import{g as k,a as q}from"./get-method-obtaining-fields-3dd661c2.js";import{g as C}from"./get-student-subdivisions-5a2f2c8d.js";import"./get-divisions-96cfa1b1.js";const L=e=>{const{surname:t,name:a,patronymic:d,email:s,phone:o}=e;return{title:"Заверенные копии документов по воинскому учету из личного дела",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+d,editable:!1},{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:o,required:!0},{title:"Email",type:"email",fieldName:"email",value:s,editable:!0,required:!0},...k(),...C(e),...q(),{title:"Наименование военного комиссариата, куда направляется справка",value:"",fieldName:"comissariat_name",width:"100%",editable:!0,required:!0},{title:"Комментарий к заявке",placeholder:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}},Y=()=>{const[e,t]=i.useState(null),[a,d]=i.useState({}),[s,o]=i.useState(!1),[f,g]=i.useState(!1),l=s!=null?s:!1,{data:{dataUserApplication:r}}=v.useApplications();return i.useEffect(()=>{r&&t(L(r))},[r]),i.useEffect(()=>{e&&r&&d(m(m({},B(e.data)),I(e.data)))},[e]),n.jsx(j,{isDone:l,children:!!e&&!!t&&n.jsxs(A,{noHeader:!0,children:[n.jsx(N,c(m({},e),{collapsed:l,setData:t,specialFieldsNameConfig:a})),n.jsx(M,{text:l?"Отправлено":"Отправить",action:()=>y(E.MILITARY_FORM_5,[e],g,o),isLoading:f,completed:s,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:R(e,a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Y as default};
