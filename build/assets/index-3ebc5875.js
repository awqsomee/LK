var v=Object.defineProperty,x=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var d=(a,e,t)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,c=(a,e)=>{for(var t in e||(e={}))h.call(e,t)&&d(a,t,e[t]);if(u)for(var t of u(e))C.call(e,t)&&d(a,t,e[t]);return a},m=(a,e)=>x(a,g(e));import{r as p,j as r}from"./vendor-8a1e4858.js";import{bx as N,bB as A,v as F,bC as S,i as j,d7 as E,d2 as _,bD as k}from"./index-4a477e8a.js";import{C as y}from"./error-5ab3df28.js";const D=a=>{const{surname:e,name:t,patronymic:l,group:s,email:o,phone:i}=a;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:e+" "+t+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"reason_for_relocation",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},U=()=>{var a,e;const[t,l]=p.useState(null),{data:{dataUserApplication:s}}=N.useApplications(),[o,i]=p.useState(!1),[f,b]=p.useState(!1),n=o!=null?o:!1;return p.useEffect(()=>{s&&l(D(s))},[s]),new Date<new Date(2024,8,15)?r.jsx(y,{}):r.jsx(A,{isDone:n,children:!!t&&!!l&&r.jsxs(F,{children:[r.jsx(S,m(c({},t),{collapsed:n,setData:l})),r.jsx(j,{text:"Отправить",action:()=>E(_.USG_RELOCATION_INNER,[t],b,i),isLoading:f,completed:o,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:k(t)&&((a=(e=t.optionalCheckbox)===null||e===void 0?void 0:e.value)!==null&&a!==void 0?a:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{U as default};
