var b=Object.defineProperty,x=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))h.call(e,a)&&d(t,a,e[a]);if(n)for(var a of n(e))v.call(e,a)&&d(t,a,e[a]);return t},c=(t,e)=>x(t,g(e));import{r,j as o}from"./vendor-60fdf703.js";import{bw as A,b0 as F,b1 as S,bA as j,h as q,d6 as E,d1 as N,bB as B}from"./index-aa7cb4ff.js";const D=t=>({title:"Запрос на изменение персональных данных",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:t.phone,editable:!0,required:!0},{title:"Email",type:"email",fieldName:"email",value:t.email,editable:!0,required:!0},{title:"Прошу  внести  изменения в мои персональные данные и в дальнейшем именовать меня:",fieldName:"new_personal_data",value:"",editable:!0,required:!0,placeholder:"Укажите новые фамилия имя и отчество в именительном падеже"},{title:"По причине",fieldName:"reason",value:"",editable:!0,required:!0}],alert:"Загрузите документы, подтверждающие изменение персональных данных",documents:{files:[],fieldName:"docs",maxFiles:4,required:!0}}),w=()=>{var t;const[e,a]=r.useState(null),[s,u]=r.useState(!1),[m,f]=r.useState(!1),l=s!=null?s:!1,{data:{dataUserApplication:i}}=A.useApplications();return r.useEffect(()=>{i&&a(D(i))},[i]),o.jsx(F,{isDone:l,children:!!e&&!!a&&o.jsxs(S,{children:[o.jsx(j,c(p({},e),{collapsed:l,setData:a})),o.jsx(q,{text:l?"Отправлено":"Отправить",action:()=>E(N.PERS_DATA,[e],f,u),isLoading:m,completed:s,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:B(e)&&!!(e!=null&&(t=e.documents)!==null&&t!==void 0&&t.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{w as default};
