var f=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var n=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,p=(a,e)=>{for(var t in e||(e={}))g.call(e,t)&&n(a,t,e[t]);if(c)for(var t of c(e))v.call(e,t)&&n(a,t,e[t]);return a},d=(a,e)=>b(a,x(e));import{r as l,j as r}from"./vendor-8a1e4858.js";import{bv as S,bz as h,t as A,bA as F,i as E,d6 as _,bu as j,bB as N}from"./index-7b7b97a2.js";import{g as k,a as y}from"./get-default-subdivision-17957fb0.js";const B=a=>{const{surname:e,name:t,patronymic:s,subdivisions:i}=a;return{title:"Запрос на изменение корпоративной электронной почты",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+s,editable:!1},{title:"Подразделение/должность",value:k(i),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:y(i),isSpecificSelect:!0},{fieldName:"email",title:"Корпоративная электронная почта",type:"email",value:"",required:!0},{fieldName:"show_email_inner",title:"Показывать корпоративную почту внутри Личного кабинета",type:"checkbox",value:!1},{fieldName:"show_email_outer",title:"Показывать корпоративную почту на сайте",type:"checkbox",value:!1}]}},M=()=>{const[a,e]=l.useState(null),[t,s]=l.useState(!1),[i,m]=l.useState(!1),o=t!=null?t:!1,{data:{dataUserApplication:u}}=S.useApplications();return l.useEffect(()=>{u&&e(B(u))},[u]),r.jsx(h,{isDone:o,children:!!a&&!!e&&r.jsxs(A,{noHeader:!0,children:[r.jsx(F,d(p({},a),{collapsed:o,setData:e})),r.jsx(E,{text:o?"Отправлено":"Отправить",action:()=>_(j.EDIT_PHONEBOOK_EMAIL,[a],m,s,!0),isLoading:i,completed:t,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:N(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
