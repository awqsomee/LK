var f=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,p=(a,e)=>{for(var t in e||(e={}))S.call(e,t)&&u(a,t,e[t]);if(n)for(var t of n(e))g.call(e,t)&&u(a,t,e[t]);return a},d=(a,e)=>b(a,x(e));import{r as l,j as r}from"./vendor-33947725.js";import{s as h,B as v,F,I as A,S as E,aj as j,A as _,c as N}from"./index-958ef795.js";import{g as k,a as y}from"./get-default-subdivision-17957fb0.js";const B=a=>{const{surname:e,name:t,patronymic:s,subdivisions:i}=a;return{title:"Запрос на изменение корпоративной электронной почты",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+s,editable:!1},{title:"Подразделение/должность",value:k(i),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:y(i),isSpecificSelect:!0},{fieldName:"email",title:"Корпоративная электронная почта",type:"email",value:"",required:!0},{fieldName:"show_email_inner",title:"Показывать корпоративную почту внутри Личного кабинета",type:"checkbox",value:!1},{fieldName:"show_email_outer",title:"Показывать корпоративную почту на сайте",type:"checkbox",value:!1}]}},M=()=>{const[a,e]=l.useState(null),[t,s]=l.useState(!1),[i,m]=l.useState(!1),o=t!=null?t:!1,{data:{dataUserApplication:c}}=h.useApplications();return l.useEffect(()=>{c&&e(B(c))},[c]),r.jsx(v,{isDone:o,children:!!a&&!!e&&r.jsxs(F,{noHeader:!0,children:[r.jsx(A,d(p({},a),{collapsed:o,setData:e})),r.jsx(E,{text:o?"Отправлено":"Отправить",action:()=>j(_.EDIT_PHONEBOOK_EMAIL,[a],m,s,!0),isLoading:i,completed:t,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:o,isActive:N(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
